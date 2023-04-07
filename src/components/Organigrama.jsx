import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeImage } from "../redux/action";
import "../styles/organigrama.scss";

function Organigrama() {

  const dispatch = useDispatch()
  const [manager, setManager] = useState([])
  const [supervisor, setSupervisor] = useState([])
  const [coordinador, setCoordinador] = useState([])
  const [profesional, setProfesional] = useState([])


  const data = useSelector((state) => state.team);

   const uploadImage = async (e, id) => { 
    try {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("tags", "SmartNest");
      formData.append("upload_preset", "db1xdljk");
    
      const response = await fetch("https://api.cloudinary.com/v1_1/dg1roy34p/image/upload", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      dispatch(changeImage(data.url, id))
    
    } catch (error) {
      alert(error);
    }
  };


  useEffect( ()=> {
    if (data.length) {
        setManager(data.filter((e) => e["Nivel Jerárquico"] == "Manager"))
        setSupervisor(data.filter((e) => e["Nivel Jerárquico"] == "Supervisor"))
        setCoordinador(data.filter((e) => e["Nivel Jerárquico"] == "Cordinador"))
        setProfesional(data.filter((e) => e["Nivel Jerárquico"] == "Profesional" || e["Nivel Jerárquico"] == "Profesioal"))
    } 
  }, [data])

  

  

  return (
    <div className="Organigrama_container">
      <div className="overflow"></div>
      {/* <input onChange={uploadImage} type="file" /> */}

      <div className="modal_Organigrama">
        <div className="Personal_container">
          <h1>Manager</h1>
          <div className="allPersonal">
            {
                manager.map((persona) => (
                <div className="person">
                    <div className="personIMG_side">
                        <label htmlFor={`input-${persona.ID}`}>
                        <img src={persona.img ? persona.img : "https://cdn-icons-png.flaticon.com/512/149/149071.png"} />
                        </label>
                        <input id={`input-${persona.ID}`} type="file" style={{ display: "none" }} onChange={(e) => uploadImage(e, persona.ID)} />
                    </div>
                  <div className="personaINF_side">
                    <h3>{persona["Nombre "] || persona["Nombre"]}</h3>
                    <p>{persona.Area} / {persona.Subarea}</p>
                    <p>{persona["Fecha de ingreso"]}</p>
                    <div className="persona_SueldoContainer">
                      <h4>$ {persona["Sueldo  bruto"]}</h4>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="Personal_container">
          <h1>Supervisor</h1>
          <div className="allPersonal">
            {
                supervisor.map((persona) => (
                <div className="person">
                  <div className="personIMG_side">
                        <label htmlFor={`input-${persona.ID}`}>
                        <img src={persona.img ? persona.img : "https://cdn-icons-png.flaticon.com/512/149/149071.png"} />
                        </label>
                        <input id={`input-${persona.ID}`} type="file" style={{ display: "none" }} onChange={(e) => uploadImage(e, persona.ID)} />
                    </div>
                  <div className="personaINF_side">
                    <h3>{persona["Nombre "]}</h3>
                    <p>{persona.Area} / {persona.Subarea}</p>
                    <p>{persona["Fecha de ingreso"]}</p>
                    <div className="persona_SueldoContainer">
                      <h4>$ {persona["Sueldo  bruto"]}</h4>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        {/* <div className="supervisor_container"></div> */}
        <div className="Personal_container">
          <h1>Coordinador</h1>
          <div className="allPersonal">
            {
                coordinador.map((persona) => (
                <div className="person">
                    <div className="personIMG_side">
                        <label htmlFor={`input-${persona.ID}`}>
                        <img src={persona.img ? persona.img : "https://cdn-icons-png.flaticon.com/512/149/149071.png"} />
                        </label>
                        <input id={`input-${persona.ID}`} type="file" style={{ display: "none" }} onChange={(e) => uploadImage(e, persona.ID)} />
                    </div>
                  <div className="personaINF_side">
                    <h3>{persona["Nombre "]}</h3>
                    <p>{persona.Area} / {persona.Subarea}</p>
                    <p>{persona["Fecha de ingreso"]}</p>
                    <div className="persona_SueldoContainer">
                      <h4>$ {persona["Sueldo  bruto"]}</h4>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        {/* <div className="coordinador_container"></div> */}
        <div className="Personal_container">
          <h1>Profesional</h1>
          <div className="allPersonal">
            {
                profesional.map((persona) => (
                <div className="person">
                    <div className="personIMG_side">
                        <label htmlFor={`input-${persona.ID}`}>
                        <img src={persona.img ? persona.img : "https://cdn-icons-png.flaticon.com/512/149/149071.png"} />
                        </label>
                        <input id={`input-${persona.ID}`} type="file" style={{ display: "none" }} onChange={(e) => uploadImage(e, persona.ID)} />
                    </div>
                  <div className="personaINF_side">
                    <h3>{persona["Nombre "]}</h3>
                    <p>{persona.Area} / {persona.Subarea}</p>
                    <p>{persona["Fecha de ingreso"]}</p>
                    <div className="persona_SueldoContainer">
                      <h4>$ {persona["Sueldo  bruto"]}</h4>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        {/* <div className="profesional_container"></div> */}
      </div>
    </div>
  );
}

export default Organigrama;
