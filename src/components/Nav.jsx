import '../styles/Nav.scss'
import icon from '../assets/Nala_Icon.jpg'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { changeLanguage } from '../redux/action'

function Nav() {
    const navigate = useNavigate()
    const data = useSelector(state => state.team)
    const language = useSelector(state => state.language)
    const dispatch = useDispatch()

    const handlerNavigate = (path) => {
        if (data.length) {
            navigate(path)
        }
    }

    const handlerLanguage = (LAN) => {
        dispatch(changeLanguage(LAN))
    }

    return (
        <div className="Nav_Container">
            <img onClick={()=> handlerNavigate('/')} src={icon} />
            <div className='Nav_Menu'>
                <div className='language_container'>
                    <button onClick={()=> handlerLanguage('ES')} className={language !== "ES" ? 'ES_button': 'selected'}>ES</button>
                    <button onClick={()=> handlerLanguage('ENG')} className={language !== "ENG" ? 'ENG_button': 'selected'}>ENG</button>
                </div>
                <div className='button_container'>                
                    <p onClick={()=> handlerNavigate('/Organizationchart')}>{language=="ES"? "Organigrama" : "Chart"}</p>
                    <p onClick={()=> handlerNavigate('/filter')}>{language=="ES"? "Filtros" : "Filters"}</p>
                </div>
            </div>
        </div>
    )
}

export default Nav