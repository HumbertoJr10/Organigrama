
export const GET_TEAM = "GET_TEAM";
export const UPLOAD_IMAGE = 'UPLOAD_IMAGE';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';

export const selectCategory = (category) => {
    return {
        type: SELECT_CATEGORY,
        payload: category
    }
}

export const getTeam = (team) => {
    return {
        type: GET_TEAM,
        payload: team
    }
}

export const changeImage = (image, id) => {
    return {
        type: UPLOAD_IMAGE,
        payload: {
            img: image,
            ID: id
        }
    }
  };
  