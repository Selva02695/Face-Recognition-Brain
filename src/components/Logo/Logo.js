import React from "react";
import Tilt from "react-tilt";
import './Logo.css'
import Brain from './brain.jpg'



const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max: 65 }} style={{ height: 200, width: 200 }} >
            <div className="Tilt-inner pa3">
                    <img src= {Brain} alt='brain' style={{paddingTop:'5px'}}></img>
                    </div>
            </Tilt>    
        </div>
    )
}

export default Logo;