import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'



const NavBar = ({logIn, setLogIn, setUserEmail, setPassword, openChat, setIsChatOpen, isChatOpen}) => {
    const history = useHistory()

    const clickToGoToHomepage = () => {
        history.push("/")
    }

    const logOut = () =>{
            console.log("logout")
            setUserEmail("")
            setPassword("")
            setLogIn(!logIn)
            setIsChatOpen(false)
    }
    return (
        <div class="m-4">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link to="/" className="navbar-brand" ><h1 style={{fontWeight: '900'}}>FFS Logistics</h1></Link>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse nav justify-content-end" id="navbarCollapse">
                        <div className="navbar-nav">
                            {logIn ?  
                                <>
                                    <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Shipping
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><Link class="dropdown-item" to="/ship">Shipping</Link></li>
                                        <li><Link class="dropdown-item" to="/track">Tracking</Link></li>
                                    </ul>
                                    </div>
                                    
                                    <Link to="/contact" className="nav-item nav-link" id="About">Contact</Link>
                                    <Link to="/" className="nav-item nav-link" onClick={logOut}>Log out</Link>


                                </> 
                                : 
                                <>

                                <Link to="/" className="nav-item nav-link active" id="Home">Home</Link>
                                


                                <Link to="/contact" className="nav-item nav-link" id="Contact">Contact</Link>

                                <Link to="/signup" className="nav-item nav-link">Sign up</Link>
                                <Link to="/login" className="nav-item nav-link">Log in</Link>
                                </>}  
                        </div>
                    </div>
                </div>
            </nav>
        </div>
  );
}

export default NavBar;




