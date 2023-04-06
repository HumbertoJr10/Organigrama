import "../styles/landing.scss";
import { useEffect, useState } from "react";
import UseParse from "../hook/useParse";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { selectCategory } from "../redux/action";

function Landing() {
  const { handlerFile } = UseParse();
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const data = useSelector((state) => state.team);
  const allCategory = useSelector(state => state.category)
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (data.length) {
      dispatch(selectCategory(Object.keys(data[0])));
    }
  }, [data]);

  console.log(data);

  return (
    <div className="container">
      <div className="modalWindow">
        <h1>Bienvenido</h1>
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
            <button onClick={()=> navigate('/Organizationchart')}>Continuar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Landing;
