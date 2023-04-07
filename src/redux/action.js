
export const GET_TEAM = "GET_TEAM";
export const UPLOAD_IMAGE = 'UPLOAD_IMAGE';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const SORT_ELEMENT = 'SORT_ELEMENT'
export const SORT_ELEMENT_NEGATIVE = 'SORT_ELEMENT_NEGATIVE'

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
  
  export const sortElment = (sort) => {
    return {
        type: SORT_ELEMENT,
        payload: sort
    }
  }

  export const sortElmentNegative = (sort) => {
    return {
        type: SORT_ELEMENT_NEGATIVE,
        payload: sort
    }
  }