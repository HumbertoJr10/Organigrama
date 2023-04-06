import { useSelector } from "react-redux";
import "../styles/Filtro.scss"


function Filtro() {
    const data = useSelector(state => state.team)
    const allCategory = useSelector( state => state.category)

    return (
        <div className="Filtro_Overlay">
           <div className="overflow"></div>
           <div className="filtro_Team_Container">
                <div className="filtro_header">
                    {
                        allCategory.map( category => (
                            <p>{category}</p>
                        ))
                    }
                </div>
                <div className="filtro_allTeam">
                    {
                        data.map( e=> (
                            <div className="onePerson_Filter">
                                <p>{e["Mes"]}</p>
                                <p>{e["Nombre "]}</p>
                                <p>{e["ID"]}</p>
                                <p>{e["Fecha de ingreso"]}</p>
                                <p>{e["Sueldo  bruto"]}</p>
                                <p>{e["División"]}</p>
                                <p>{e["Area"]}</p>
                                <p>{e["Subarea"]}</p>
                                <p>{e["ID Lider"]}</p>
                                <p>{e["Nivel Jerárquico"]}</p>
                            </div>
                        ))
                    }
                </div>
           </div>
        </div>
    )
}

export default Filtro;