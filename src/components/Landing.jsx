import "../styles/landing.scss";
import { useEffect, useState } from "react";
import UseParse from "../hook/useParse";
import { useDispatch } from "react-redux";


function Landing() {

    const { handlerFile, team } = UseParse()
    

    
    console.log(team)
      

    return (
        <div className="container">
            <div className="modalWindow">
                <h1>Bienvenido</h1>
                <input onChange={handlerFile} type="file" accept='.csv' name='file' />
            </div>
            <div className="previewModal">
                
            </div>
            
        </div>
    )
}

export default Landing;