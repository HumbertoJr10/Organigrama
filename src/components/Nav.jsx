import '../styles/Nav.scss'
import icon from '../assets/Nala_Icon.jpg'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'

function Nav() {
    const navigate = useNavigate()
    const data = useSelector(state => state.team)

    const handlerNavigate = (path) => {
        if (data.length) {
            navigate(path)
        }
    }

    return (
        <div className="Nav_Container">
            <img onClick={()=> handlerNavigate('/')} src={icon} />
            <div className='Nav_Menu'>
                <p onClick={()=> handlerNavigate('/Organizationchart')}>Organigrama</p>
                <p onClick={()=> handlerNavigate('/filter')}>Filtros</p>
            </div>
        </div>
    )
}

export default Nav