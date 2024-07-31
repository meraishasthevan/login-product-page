import React, { useContext, useState } from "react";
import { LoginContext } from "./LoginContext";

function LoginCont(){
   const{setUserName,setShowProfile}=useContext(LoginContext)
    const handleClick=(event)=>{
      event.preventDefault()
      if(event.target.elements.name.value==='merai'){
         setUserName(event.target.elements.name.value)
         setShowProfile(true)
      }
      else{
        alert("enter correct username")
      }
    }
    return(
        <div>
            <form onSubmit={handleClick}>
              <input name='name' type='text' placeholder='Enter your name'/>
              <button>Login</button>
            </form>
        </div>
    );
}
export default LoginCont;