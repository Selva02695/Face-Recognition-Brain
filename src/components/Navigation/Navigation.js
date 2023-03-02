import React from "react";

const Navigation=({onRouteChange , isSignedIn})=>{

   if(isSignedIn){
    return(
    <div >
        <nav style={{display:'flex' , justifyContent:'flex-end'}}>
            <p onClick={()=>onRouteChange('signIn')} className="f3 link dim black underline pa3 pointer">Sign out</p>
        </nav>
    </div>
    )
   }
   else{
    return(
        <div >
        <nav style={{display:'flex' , justifyContent:'flex-end'}}>
            <p onClick={()=>onRouteChange('Register')} className="f3 link dim black underline pa3 pointer">Register</p>
            <p onClick={()=>onRouteChange('Home')} className="f3 link dim black underline pa3 pointer">SignIn</p>
        </nav>
    </div>
    )
   }

    
}


export default Navigation;
