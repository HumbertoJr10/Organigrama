import { GET_TEAM, UPLOAD_IMAGE, SELECT_CATEGORY, SORT_ELEMENT, SORT_ELEMENT_NEGATIVE } from "./action"


// ----> Estado Inicial <----
const initialState = {
    team: [],
    teamRespaldo: [],
    category: []
}

// ---> REDUCER <-----

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case GET_TEAM:
            return {
                ...state,
                team: payload,
                teamRespaldo: payload
            }
        
        case SORT_ELEMENT:
            return {
                ...state,
                team: [...state.teamRespaldo].sort( (x, y) => x[payload].localeCompare( y[payload]))
            }
        case SORT_ELEMENT_NEGATIVE:
            return {
                ...state,
                team: [...state.teamRespaldo].sort( (x, y) => y[payload].localeCompare( x[payload]))
            }

        case SELECT_CATEGORY: 
            return {
                ...state,
                category: payload
            }
        case UPLOAD_IMAGE:
            const allTeam = [...state.team]
            const search = allTeam.find(e => e.ID == payload.ID)

            if (!search) return { ... state}

            search.img = payload.img

            return {
                ...state,
                team: allTeam
            }
  
        default:
            return {...state}
    }
}

export default reducer