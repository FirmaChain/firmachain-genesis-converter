const initState ={
    genesisFileName: '',
    csvFileName: '',
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "GENESYS_FILE_NAME" : 
        return{
            ...state, 
            genesisFileName: action.payload,
        }
        case "CSV_FILE_NAME" : 
        return{
            ...state, 
            csvFileName: action.payload,
        }
        default :
        return state
    }
}

export default reducer;