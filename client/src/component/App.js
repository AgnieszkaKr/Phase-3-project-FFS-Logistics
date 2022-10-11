// src/components/App.js
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import NavBar from "./NavBar";
import Footer from './Footer'
import Ship from './Ship'
import Track from './Track'
import Contact from './Contact'
import "./App.css"
import SignUp from "./SignUp"
import Message from './Message'
import 'bootstrap/dist/css/bootstrap.min.css'  





const App = () => {
  const[logIn, setLogIn] = useState(false)
  // use state used in Login Component
  const[userEmail, setUserEmail]=useState('')
  const[password, setPassword]=useState('')
  const[newUser, setNewUser]=useState(false)
  const[users, setUsers]=useState([])
  const[userLogInName, setUserLogInName]=useState('')
  const[isChatOpen, setIsChatOpen]=useState(false)
  const[userConfirm, setUserConfirm]=useState({
    name:"", 
    lastName:""
  })

    const openChat = () =>{
        setIsChatOpen(!isChatOpen)
        console.log(userLogInName)
    }


  return (
    <>
      <NavBar logIn={logIn} setLogIn={setLogIn} userEmail={userEmail} setUserEmail={setUserEmail}
          password={password} setPassword={setPassword} newUser={newUser}  setNewUser={setNewUser} openChat={openChat} setIsChatOpen={setIsChatOpen} isChatOpen={isChatOpen}/>
      <Routes>
        <Route path="/login" element={<Login setUserLogInName={setUserLogInName} users={users} setUsers={setUsers} setLogIn={setLogIn} logIn={logIn} userEmail={userEmail} setUserEmail={setUserEmail}
          password={password} setPassword={setPassword} newUser={newUser} setNewUser={setNewUser} userConfirm={userConfirm} setUserConfirm={setUserConfirm}/>} />
        <Route exact path="/signUp" element={<SignUp setUsers={setUsers} users={users}/>}/>
        <Route exact path="/ship" element={<Ship />}/>
        <Route exact path="/track" element={<Track />}/>
        <Route exact path="/contact" element={<Contact />}/>
        <Route path='/message'element={<Message />}/>
        <Route exact path="/"element={<Home />}/>
      </Routes>
      <Footer logIn={logIn} userLogInName={userLogInName} openChat={openChat} isChatOpen={isChatOpen}/>

    </>
  )
}

export default App;
