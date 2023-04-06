import "../styles/landing.scss";
import { useEffect, useState } from "react";
import UseParse from "../hook/useParse";
import { useDispatch, useSelector } from "react-redux";

function Landing() {
  const { handlerFile } = UseParse();

  const data = useSelector((state) => state.team);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (data.length) {
      setCategory(Object.keys(data[0]));
    }
  }, [data]);

  console.log(category);

  return (
    <div className="container">
      <div className="modalWindow">
        <h1>Bienvenido</h1>
        <input onChange={handlerFile} type="file" accept=".csv" name="file" />
      </div>

      {data.length && (
        <div className="previewModal">
          {category.map((categoria, index) => {
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
            <button>Continuar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Landing;
