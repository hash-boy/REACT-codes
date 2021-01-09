import * as actionTypes from  '../actions';

const initialState = {
    results: []
}

const reducer = ( state=initialState , action ) => {
    
    switch(action.type){
        case actionTypes.STORE_RESULT:
                return{
                    ...state,
                    results: state.results.concat({id: new Date(), value: action.result}) // use concat so that here we just add value and update result, don't use push
                }
        case actionTypes.DELETE_RESULT:
                    const updateArrayResult = state.results.filter(result => result.id !== action.resultElId ) 
                    return{
                        ...state,
                        results: updateArrayResult
                    }
        default:
            return state
    }
}


export default reducer;