import React from "react";

const ImageLinkForm=()=>{
    return(
        <div>
            <p className="f3"><b>{'This magic brain will detect the faces in picture, give it a try'}</b></p>
            <div className="center">
                <div className=" center pa4 br3 shadow-5">
                <input className="f4 pa2 w-70 center" type='text'></input>
                <button className="w-30 grow f4 link ph3 pv2 dib ">{'Detect'}</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;