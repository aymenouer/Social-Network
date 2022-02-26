import { useRef } from "react";
import "./login.css"
import { loginCall } from "../../apiCalls";
import { useContext } from "react";
import { AuthContext } from './../../context/AuthContext';
import {CircularProgress} from "@material-ui/core"

export default function Login() {
    const email=useRef();
    const password = useRef();
    const {isFetching,dispatch} = useContext(AuthContext)


    const handleClick = (e) =>{
e.preventDefault();
loginCall({email:email.current.value,password:password.current.value},dispatch)
    }

  return (
   <div className="login">
       <div className="loginWrapper">
           <div className="loginLeft">
               <h3 className="loginLogo">Social</h3>
               <span className="loginDesc">Connect with freinds and the world around you on Social.</span>
           </div>
           <div className="loginRight">

               <form className="loginBox" onSubmit={handleClick} >
                   <input required ref={email} placeholder="Email" type="email" className="loginInput" />
                   <input minLength="6" required ref={password} placeholder="Password" type="password" className="loginInput" />
              <button type="submit" className="loginButton" disabled={isFetching} >
                  {isFetching ? <CircularProgress size="20px" color="white" />:"Log In"} 
                  </button>
              <span className="loginForgot">Forgot Password?</span>
              <button className="loginRegisterButton">Create a New Account</button>
               </form>
           </div>
       </div>
   </div>
  )
}
