import React from "react";
import "./signup.css"
import { NavLink } from "react-router-dom";

const SignUp = () =>{
    return (
        <div className="main">
        <div className="sub-main" >
          <div >
            <h1>Sign up</h1>
             
                <input type="text" placeholder="Username" className="name"></input>
                <input type="email" placeholder="Email Id" className="name"/>
                <input type="text" placeholder="Password" className="name"/>
                <br></br>
                    <button type="submit">signup</button>
                
                    <p>Already have account? 
                    <NavLink className="log" to="/Login"> Log in</NavLink></p>
                </div>
        </div>
        </div>
    )
}
export default SignUp