import { createContext, useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { server } from "../main";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [btnLoading, setBtnLoading] = useState(false);
  const [user, setUser] = useState([]);
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  // Function to log in the user
  async function loginUser(email, navigate) {
    setBtnLoading(true);
    try {
      const { data } = await axios.post(`${server}/api/user/login`, { email });
      toast.success(data.message);
      localStorage.setItem("verifyToken", data.verifyToken);
      navigate("/verify");
      setBtnLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setBtnLoading(false);
    }
  }

  // Function to verify user OTP
  async function verifyUser(otp, navigate, fetchChats) {
    const verifyToken = localStorage.getItem("verifyToken");
    setBtnLoading(true);

    if (!verifyToken) return toast.error("Please provide a valid Token");

    try {
      const { data } = await axios.post(`${server}/api/user/verify`, {
        otp,
        verifyToken,
      });

      toast.success(data.message);
      localStorage.clear();
      localStorage.setItem("token", data.token); // Store the authentication token
      navigate("/");
      setIsAuth(true);
      setUser(data.user);
      fetchChats(); // Fetch chats after successful verification
      setBtnLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setBtnLoading(false);
    }
  }

  // Fetch the current logged-in user
  async function fetchUser() {
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("No token found in localStorage");
      setIsAuth(false);
      setLoading(false);
      return;
    }

    try {
      const { data } = await axios.get(`${server}/api/user/me`, {
        headers: {
          token,
        },
      });
      setIsAuth(true);
      setUser(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user:", error);
      setIsAuth(false);
      setLoading(false);
    }
  }

  // Log out the user
  const logoutHandler = (navigate) => {
    localStorage.clear();
    toast.success("Logged out successfully");
    setIsAuth(false);
    setUser([]);
    navigate("/login");
  };

  useEffect(() => {
    fetchUser(); // Fetch user info on component mount
  }, []);

  return (
    <UserContext.Provider
      value={{
        loginUser,
        btnLoading,
        isAuth,
        setIsAuth,
        user,
        verifyUser,
        loading,
        logoutHandler,
      }}
    >
      {children}
      <Toaster />
    </UserContext.Provider>
  );
};

export const UserData = () => useContext(UserContext);
