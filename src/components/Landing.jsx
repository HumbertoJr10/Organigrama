import "../styles/landing.scss";
import { useEffect, useState } from "react";
import UseParse from "../hook/useParse";



function Landing() {

    const { handlerFile, team } = UseParse()
    

    
    console.log(team)
      

    return (
        <div>
            <div className="modalWindow">
                <h1>Bienvenido</h1>
                <input onChange={handlerFile} type="file" accept='.csv' name='file' />
            </div>
        </div>
    )
}

export default Landing;