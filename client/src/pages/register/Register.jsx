import "./register.css"
import { useRef } from 'react';
import  axios  from 'axios';
import {useHistory} from "react-router"
export default function Register() {
    const username=useRef();
    const email=useRef();
    const password = useRef();
    const confirmpassword = useRef();
    const history = useHistory();
    const handleClick = async(e) =>{
        e.preventDefault();
        if (confirmpassword.current.value !== password.current.value){
            confirmpassword.current.setCustomValidity("Passwords don't match!");
        }
        else{
            const user = {
                username:username.current.value,
                email:email.current.value,
                password:password.current.value
            }
            try {
                 await axios.post('/auth/register',user);    
                 history.push("/");
            } catch (err) {
                console.log(err);
            }
            


        }
     
    }


  return (
   <div className="register">
       <div className="registerWrapper">
           <div className="registerLeft">
               <h3 className="registerLogo">Social</h3>
               <span className="registerDesc">Connect with freinds and the world around you on Social.</span>
           </div>
           <div className="registerRight">

               <form className="registerBox" onSubmit={handleClick} >
                   <input placeholder="Username" required ref={username} type="text" className="registerInput" />
                   <input placeholder="Email" required ref={email} type="email" className="registerInput" />
                   <input minLength="6" placeholder="Password" required ref={password} type="password" className="registerInput" />
                   <input placeholder="Password Again" required ref={confirmpassword} type="password" className="registerInput" />
              <button className="registerButton" type="submit" >Sign Up </button>
       
              <button className="registerRegisterButton">
                Log into Account</button>
               </form>
           </div>
       </div>
   </div>
  )
}
