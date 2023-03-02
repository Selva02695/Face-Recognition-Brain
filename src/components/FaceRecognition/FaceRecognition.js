import React from "react";

const FaceRecognition = ({ Imageurl }) => {
    return (
        <div className="center ma">
            <div className="obsolute mt2">
                <img id="Image" alt='' src={Imageurl} width='500px' height='auto'></img>
            </div>
        </div>
    )
}

export default FaceRecognition;