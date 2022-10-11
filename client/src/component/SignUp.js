import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";


const SignUp = ({setUsers, users}) => {

    const history = useHistory()

    const[newName, setNewName]=useState('')
    const handleNewName = (e) =>{
        setNewName(e.target.value)
    }
    const[newLastName, setNewLastName]=useState('')
    const handleNewLastName = (e) =>{
        setNewLastName(e.target.value)
    }    

    const[newEmail, setNewEmail]=useState('')
    const handleNewEmail = (e) =>{
        setNewEmail(e.target.value)
    }

    const[newUserName, setNewUserName]=useState('')
    const handleNewUserName =(e)=>{
        setNewUserName(e.target.value)
    }

    const[password1, setPassword1]=useState('')
    const handlePassword1 = (e)=>{
        setPassword1(e.target.value)
    }

    const[password2, setPassword2]=useState('')
    const handlePassword2 = (e)=>{
        setPassword2(e.target.value)
    }
   
    useEffect(()=>{
        fetch('http://localhost:9292/users')
        .then(req=> req.json())
        .then(res => setUsers(res))
    },[setUsers])

    const checkPassword = (pas1, pas2) => {
        // password1 not entered
        if (pas1 === ''){
            alert ("Please enter Password")
            return false
        } else if (pas2 === ''){
            alert ("Please enter confirm password")
            return false
        } else if (pas1 !== pas2) {
            alert ("\nPassword did not match: Please try again...")
            return false
        } else {
            return true
        }
    }
    // find if user is not in db already (using email)
    const checkUserMail =() => {
        const inputUser = users.find((user) => user.contact === newEmail)
        if (inputUser) {
            alert ("Address email matching addres in our database. Try to log in.")
            return false
        } else {
            return true
        }
    }

     const[signedUp, setSignedUp]=useState(false)
    const handleNewUser = (e) =>{
        e.preventDefault()
        // FINISHED HERE handle submiting form
        const passwordMatch = checkPassword(password1, password2)
        // find if user is not in db already (using email)
        const newUserTrue = checkUserMail()
        // if user is new and 
        if (passwordMatch && newUserTrue ) {
            // new user
            const newUser = {
                name: newName, 
                lastName: newLastName, 
                contact: newEmail, 
                login: newUserName, 
                password: password1
            }
            // send fetch request POST
            fetch('http://localhost:9292/users', {method:'POST',
                headers: {
                    'Content-Type':'application/json'
                },
            body: JSON.stringify(newUser)
            }).then(req=> req.json())
            .then (res => setUsers(...users, res))

            setNewName('')
            setNewLastName('')
            setNewEmail('')
            setNewUserName('')
            setPassword1('')
            setPassword2('')
            setSignedUp(!signedUp)
            // send info user can log in
            // USER CAN LOGG IN ANDOR return to log in page
        }
    }

    const handleLogIn = () =>{
        history.push("/login")
    }
   


    return (
        <>
        <div className="container-fluid ps-md-0">
        <div className="row g-0">
            <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
            <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
            {signedUp ? (
                <>
                <div className="container">
                <div className="row">
                    <div className="col-md-9 col-lg-8 mx-auto" style={{justifyContent:"center", textAlign:"center"}}>
                    <img style={{width:'40%'}} src='../../Logo.jpg'/>

                    <h3 className="login-heading mb-4">Congratulation<span>{<br/>}</span>Now you can log in!</h3>
                    <form onSubmit={handleLogIn}>
                        <div className="d-grid">
                        <button className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="submit">Log in</button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
                </>
            ):(<>
                <div className="container">
                <div className="row">
                    <div className="col-md-9 col-lg-8 mx-auto">
                    {/* <img src='../../Logo.jpg'/> */}
                    <h3 className="login-heading mb-4">Create Account</h3>
                    <form onSubmit={handleNewUser}>
                        <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="User Name" value={newName} onChange={handleNewName}/>
                        <label htmlFor="floatingInput">Name</label>
                        </div>

                        <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="User Name" value={newLastName} onChange={handleNewLastName}/>
                        <label htmlFor="floatingInput">Last Name</label>
                        </div>

                        <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={newEmail} onChange={handleNewEmail}/>
                        <label htmlFor="floatingInput">Email address</label>
                        </div>

                        <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="User Name" value={newUserName} onChange={handleNewUserName}/>
                        <label htmlFor="floatingInput">User Name</label>
                        </div>     

                        <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password1} onChange={handlePassword1}/>
                        <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password2} onChange={handlePassword2}/>
                        <label htmlFor="floatingPassword">Confirm Password</label>
                        </div>

                        <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/>
                        <label className="form-check-label" htmlFor="rememberPasswordCheck">
                            Remember password
                        </label>
                        </div>

                        <div className="d-grid">
                        <button className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="submit">Sign up</button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
                </>
            )}
            </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default SignUp