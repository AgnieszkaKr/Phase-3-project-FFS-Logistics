import React, {useState} from "react";
import { BsFillChatDotsFill } from 'react-icons/bs';
import MessageBox from "./messagebox/MessageBox";

const Footer = ({logIn, userLogInName,openChat,isChatOpen}) => {
  
    return (
        <div class="text-center p-4" style={{position:"fixed",width:"100%", bottom: "0"}}>
            {isChatOpen ? (<MessageBox userLogInName={userLogInName} openChat={openChat}/>) : <></> }
            {logIn ? ( 
                <BsFillChatDotsFill onClick={openChat} style={{float:"right"}} className="chatbubble" />
            ):(<></>)}
        </div>
    )
}




export default Footer;