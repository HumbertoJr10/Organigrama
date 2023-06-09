import "../styles/landing.scss";
import { useEffect, useState } from "react";
import Papa from 'papaparse';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getTeam, selectCategory } from "../redux/action";
import { removeDuplicates } from "../helper/function";
import { getData } from '../redux/action';

function Landing() {
  
  const handlerFile = (e)=> {
    Papa.parse(e.target.files[0], {
        download: true,
        header: true,
        complete: function(results) {
          const dataJSON = JSON.parse(JSON.stringify(results.data));
          dispatch(getData(dataJSON));
        }
      });
}

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const data = useSelector((state) => state.data);
  const allCategory = useSelector(state => state.category)
  const language = useSelector( state => state.language)
  

  useEffect(() => {
    if (data.length) {
      dispatch(selectCategory(Object.keys(data[0])));
      const unicos = removeDuplicates(data, "ID")
      dispatch(getTeam(unicos))
    }
  }, [data]);

  

  return (
    <div className="container">
      <div className="overlay"></div>
      <div className="modalWindow">
        <h1>{language=='ES'? "Bienvenido" : "Welcome"}</h1>
        <p>{language=="ES"? 
          "Crea tu propio organigrama a partir de un archivo .csv" : 
          "Create your own organization chart from a .csv file"}</p>
        <input onChange={handlerFile} type="file" accept=".csv" name="file" />
      </div>

      {data.length && (
        <div className="previewModal">
          {allCategory.map((categoria, index) => {
            return (
              <div id={index} className="columna">
                <h1>{categoria}</h1>
                {data.map((e) => (
                  <p>{e[categoria]}</p>
                ))}
              </div>
            );
          })}

          <div className="buttonContainer">
            <button onClick={()=> navigate('/Organizationchart')}>{language=='ES'? "Continuar" : "Continue"}</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Landing;
