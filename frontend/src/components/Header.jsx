import React from 'react'
import { ChatData } from '../context/Chatcontext';

const Header = () => {
    const {chats} =ChatData();
  return (
    <div>
        <p className="text-lg mb-6">Hello,How can i help you today?</p>
        {chats && chats.length === 0 && (
            <p className="text-lg mb-6">
                Create a new chat to continue</p>)}
    </div>
  );
};

export default Header;