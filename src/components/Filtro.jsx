import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeDuplicates, calculateTotal, calculateContratation, calculatePromotion, handlerprint, monthSelector } from "../helper/function";
import { sortElment, sortElmentNegative } from "../redux/action";
import printIcon from '../assets/printIcon.svg'
import "../styles/Filtro.scss"


function Filtro() {
    const data = useSelector(state => state.data)
    const allCategory = useSelector( state => state.category)
    const [sortActive, setSortActive] = useState("") 
    const [mes, setMes] = useState([])
    const [mesSelected, setMesSelected] = useState("")
    const [contratation, setContratation] = useState([])
    const [promotion, setPromotion] = useState([])
    const language = useSelector(state => state.language)
    const dispatch = useDispatch()

    useEffect(()=> {
        const unicos = removeDuplicates(data, "Mes")
        const meses = []
        for (let f=0; f<unicos.length; f++) {
            meses.push(unicos[f].Mes[0])
        }
        setMes(meses)
    }, [])

    useEffect( ()=> {
        if (data.length) {
            setPromotion(calculatePromotion(data, mesSelected))
            setContratation(calculateContratation(data, mesSelected))
        }
    
    }, [mesSelected])

    calculatePromotion(data, 5)

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
                <div className="imprimir_container">
                    <img onClick={handlerprint} src={printIcon} /> 
                </div>
           </div>
           <div className="filtro_mensual">
                <div className="mes">
                    {
                        mes.map( e => (
                            <p className={mesSelected == e? "mes_Selected" : "mes_noselected"} onClick={()=> setMesSelected(e)}>{monthSelector(e, language)}</p>
                        ))
                    }
                </div>
                <div className="mes_Stadistic">
                    <div>
                        <h3>{language == 'ES' ? "Total Pagado": "Total paid"}</h3>
                        {
                            <p>${calculateTotal(data, mesSelected)}</p>
                        }
                    </div>
                    <div>
                        <h3>{language == 'ES' ? "Promovido": "Promoted"}</h3>
                        {
                            promotion?.map( nombre => (
                                <p>{nombre}</p>
                            ))
                        }
                    </div>
                    <div>
                        <h3>{language == 'ES' ? "Contratado": "Hired"}</h3>
                        {
                            contratation.map( nombre => (
                                <p>{nombre}</p>
                            ))
                        }
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Filtro;