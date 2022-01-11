const GENESYS_FILE_NAME = 'GENESYS_FILE_NAME';
const CSV_FILE_NAME = 'CSV_FILE_NAME';

export const setGenesisFileName = (name) => {
    return (dispatch) => {
        dispatch({
            type: GENESYS_FILE_NAME,
            payload: name
        })
    }
}

export const setCsvFileName = (name) => {
    return (dispatch) => {
        dispatch({
            type: CSV_FILE_NAME,
            payload: name
        })
    }
}