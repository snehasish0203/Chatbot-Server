import express from 'express'
import { 
        loginUser,
        myprofile,
        verifyUser
         } from '../controllers/userControllers.js';
import { isAuth } from '../middlewares/isAuth.js';

const router =express.Router();

router.post("/login",loginUser);
router.post("/verify",verifyUser);
router.get("/me", isAuth, myprofile)

export default router;

