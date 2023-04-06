import "../styles/landing.scss";
import { useEffect, useState } from "react";
import UseParse from "../hook/useParse";
import { useDispatch, useSelector } from "react-redux";

function Landing() {
  const { handlerFile } = UseParse();

  const data = useSelector((state) => state.team);

  console.log(data);

  return (
    <div className="container">
      <div className="modalWindow">
        <h1>Bienvenido</h1>
        <input onChange={handlerFile} type="file" accept=".csv" name="file" />
      </div>

      {data.length && (
       
        <div className="previewModal">
                <div className="columna">
                    <h1>Area</h1>
                    {data?.map((e, i) => {
                    return (
                        <div id={'area' + i}>
                        <p>{e.Area}</p>
                        </div>
                    );
                    })}
                </div>

                <div className="columna">
                    <h1>Division</h1>
                    {data?.map((e, i) => {
                    return (
                        <div id={"division" + i}>
                        <p>{e["División"]}</p>
                        </div>
                    );
                    })}
                </div>
                <div className="columna">
                    <h1>Fecha de ingreso</h1>
                    {data?.map((e, i) => {
                    return (
                        <div id={'fecha' + i}>
                        <p>{e["Fecha de ingreso"]}</p>
                        </div>
                    );
                    })}
                </div>
                <div className="columna">
                    <h1>ID</h1>
                    {data?.map((e, i) => {
                    return (
                        <div id={'id' + i}>
                        <p>{e["ID"]}</p>
                        </div>
                    );
                    })}
                </div>
                <div className="columna">
                    <h1>ID Lider</h1>
                    {data?.map((e, i) => {
                    return (
                        <div id={'idLider' + i}>
                        <p>{e["ID Lider"]}</p>
                        </div>
                    );
                    })}
                </div>
                <div className="columna">
                    <h1>Mes</h1>
                    {data?.map((e, i) => {
                    return (
                        <div id={'mes' + i}>
                        <p>{e["Mes"]}</p>
                        </div>
                    );
                    })}
                </div>
                <div className="columna">
                    <h1>Nivel Jerárquico</h1>
                    {data?.map((e, i) => {
                    return (
                        <div id={'nivelJerarquico' + i}>
                        <p>{e["Nivel Jerárquico"]}</p>
                        </div>
                    );
                    })}
                </div>
                <div className="columna">
                    <h1>Nombre</h1>
                    {data?.map((e, i) => {
                    return (
                        <div id={'nombre' + i}>
                        <p>{e["Nombre "]}</p>
                        </div>
                    );
                    })}
                </div>
                <div className="columna">
                    <h1>Subarea</h1>
                    {data?.map((e, i) => {
                    return (
                        <div id={'subarea' + i}>
                        <p>{e["Subarea"]}</p>
                        </div>
                    );
                    })}
                </div>
                <div className="columna">
                    <h1>Sueldo bruto</h1>
                    {data?.map((e, i) => {
                    return (
                        <div id={'sueldo' + i}>
                        <p>{e["Sueldo bruto"]}</p>
                        </div>
                    );
                    })}
                </div>
                <div className="buttonContainer">
                    <button>Continuar</button>
                </div>    
        </div>
      

      )}
    </div>
  );
}

export default Landing;
