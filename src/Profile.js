import React, { useContext } from "react";
import { LoginContext } from "./LoginContext";

function Profile(){
 const {username}=useContext(LoginContext)

    return(
        <div>
           <h4>Profile</h4>
           <p>Welcome: {username} !.....</p>
           
        </div>
    );
}
export default Profile;