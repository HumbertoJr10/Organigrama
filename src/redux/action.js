
export const GET_TEAM = "GET_TEAM"

export const getTeam = (team) => {
    return {
        type: GET_TEAM,
        payload: team
    }
}