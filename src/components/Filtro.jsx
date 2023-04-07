import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortElment, sortElmentNegative } from "../redux/action";
import "../styles/Filtro.scss"


function Filtro() {
    const data = useSelector(state => state.data)
    const allCategory = useSelector( state => state.category)
    const [sortActive, setSortActive] = useState("") 
    const dispatch = useDispatch()

    const handlerSort = (sort) => {

        const signo = "+"

        if (!sortActive.includes(signo)) {
            setSortActive(sort + "+")
            dispatch(sortElment(sort))
        } else {
            setSortActive(sort)
            dispatch(sortElmentNegative(sort))
        }

    }

    return (
        <div className="Filtro_Overlay">
           <div className="overflow"></div>
           <div className="filtro_Team_Container">
                <div className="filtro_header">
                    {
                        allCategory.map( category => (
                            <p className={sortActive.includes(category) ? "SortSelected" : "nonSelected"} onClick={()=> handlerSort(category)}>{category}</p>
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
           <div className="filtro_mensual">
                
           </div>
        </div>
    )
}

export default Filtro;