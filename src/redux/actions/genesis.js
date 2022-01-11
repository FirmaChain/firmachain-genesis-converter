const GENESYS_JSON = 'GENESYS_JSON';
const DATA_ARRAY = 'DATA_ARRAY';

export const setGenesis = (json) => {
    return (dispatch) => {
        dispatch({
            type: GENESYS_JSON,
            payload: json
        })
    }
}

export const createDataArray = (value) => {
    return (dispatch) => {
        dispatch({
            type: DATA_ARRAY,
            payload: value
        })
    }
}