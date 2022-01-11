const initState ={
    genesis: null,
    dataArray: null,
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "GENESYS_JSON" : 
        return{
            ...state, 
            genesis: action.payload,
        }
        case "DATA_ARRAY" : 
        return{
            ...state, 
            dataArray: action.payload,
        }
        default :
        return state
    }
}

export default reducer;