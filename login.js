import React from "react";
import "./login.css"
import { NavLink } from "react-router-dom";
const Login = () =>{
    return (
        //the change is made so the code in lap is affected
        <div className="main">
        <div className="sub-main" >
          <div >
            <h1>Log in</h1>
             
                <input type="text" placeholder="Username" className="name"></input>
                <input type="text" placeholder="Password" className="pass"/>
                <br></br>
                    <button type="submit">Login</button>
                
                    <p>Create new account?  
                        <NavLink className="log"to="/signup"> Sign Up</NavLink>
                    </p>
                </div>
        </div>
        </div>
    )
}
export default Login
