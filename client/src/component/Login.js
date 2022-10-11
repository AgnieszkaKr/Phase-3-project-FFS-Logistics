import React, { useState, useEffect } from 'react';
import SignUp from "./SignUp"
import { useHistory } from 'react-router-dom';

const Login = ({userConfirm, setUserConfirm, setUserLogInName, users, setUsers, setLogIn, logIn, userEmail, setUserEmail, password, setPassword, newUser, setNewUser}) => {
    const history = useHistory()


    const[signUpMessage, setSignUnMessage] = useState(false)
    useEffect(()=>{
        fetch('http://localhost:9292/users')
        .then(req=> req.json())
        .then(res => setUsers(res))
    },[])
    //console.log(users)

    const handleUser = (e) =>{
        setUserEmail(e.target.value)
    }

    const handlePassword =(e) =>{
        setPassword(e.target.value)
    }
    
    const handleLoggIn = (e) =>{
        e.preventDefault()
        console.log("user logged in")
        setUserEmail(e.target.value)
        setPassword(e.target.value)
        const inputUser = users.find((user) => user.contact === userEmail)
        if (inputUser) {
            if (inputUser.password !== password) {
                setPassword('')
                alert(`invalid password for ${userEmail}`)
            } else {
                setLogIn(!logIn)
                setUserLogInName(inputUser.name)
                setUserConfirm({
                    name:inputUser.name,
                    lastName:inputUser.lastName
                })
                
                history.push("/")
            }
        } else {
            setUserEmail('')
            setPassword('')
            setSignUnMessage(!signUpMessage)
        }
    }


    return (
            <>
                {logIn ? <h1>Hello {userEmail} vgjfgjfgjgf</h1> : (
                    <>
                    <div className="container-fluid ps-md-0">
                    <div className="row g-0">
                        <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
                        <div className="col-md-8 col-lg-6">
                        <div className="login d-flex align-items-center py-5">
                            <div className="container">
                            <div className="row">
                                <div className="col-md-9 col-lg-8 mx-auto">
                                {signUpMessage ? (
                                    <h3 className="login-heading mb-4">We can't find user name in our base. Please try one more time or sign up. </h3>
                                    ):(
                                    <h3 className="login-heading mb-4">Welcome back!</h3>) }
                                
                                <form onSubmit={handleLoggIn}>
                                    <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="User email" value={userEmail} onChange={handleUser}/>
                                    <label htmlFor="floatingInput">Address email</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={handlePassword}/>
                                    <label htmlFor="floatingPassword">Password</label>
                                    </div>

                                    <div className="form-check mb-3">
                                    <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/>
                                    <label className="form-check-label" htmlFor="rememberPasswordCheck">
                                        Remember password
                                    </label>
                                    </div>

                                    <div className="d-grid">
                                    <button className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="submit">Log in</button>
                                    <div className="text-center">
                                        <a className="small" href="#">Forgot password?</a>
                                    </div>
                                    </div>

                                </form>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    </>)}
            </>
    )}


export default Login