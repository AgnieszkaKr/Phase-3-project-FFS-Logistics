// src/components/App.js
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";
import Footer from './Footer'
import Ship from './Ship'
import Track from './Track'
import Contact from './Contact'
import "./App.css"
import SignUp from "./SignUp"
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
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/login">
          <Login setUserLogInName={setUserLogInName} users={users} setUsers={setUsers} setLogIn={setLogIn} logIn={logIn} userEmail={userEmail} setUserEmail={setUserEmail}
          password={password} setPassword={setPassword} newUser={newUser} setNewUser={setNewUser} userConfirm={userConfirm} setUserConfirm={setUserConfirm}/>
        </Route>
        <Route exact path="/signUp">
          <SignUp setUsers={setUsers} users={users}/>
        </Route>
        <Route exact path="/ship">
          <Ship />
        </Route>
        <Route exact path="/track">
          <Track />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer logIn={logIn} userLogInName={userLogInName} openChat={openChat} isChatOpen={isChatOpen}/>

    </>
  );
}

export default App;
