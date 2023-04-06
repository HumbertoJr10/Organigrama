import { GET_TEAM } from "./action"


// ----> Estado Inicial <----
const initialState = {
    team: [],
    teamRespaldo: []
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
  
        default:
            return {...state}
    }
}

export default reducer