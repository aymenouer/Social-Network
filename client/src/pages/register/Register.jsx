import "./register.css"

export default function Register() {
  return (
   <div className="register">
       <div className="registerWrapper">
           <div className="registerLeft">
               <h3 className="registerLogo">Social</h3>
               <span className="registerDesc">Connect with freinds and the world around you on Social.</span>
           </div>
           <div className="registerRight">

               <div className="registerBox">
                   <input placeholder="Username" type="text" className="registerInput" />
                   <input placeholder="Email" type="text" className="registerInput" />
                   <input placeholder="Password" type="text" className="registerInput" />
                   <input placeholder="Password Again" type="text" className="registerInput" />
              <button className="registerButton" >Sign Up </button>
       
              <button className="registerRegisterButton">
                Log into Account</button>
               </div>
           </div>
       </div>
   </div>
  )
}
