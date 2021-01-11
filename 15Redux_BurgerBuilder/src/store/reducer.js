import * as actionTypes from  './actions';
const initialState = {
    counter: 0,
    results: []
}

const reducer = ( state=initialState , action ) => {
    
    switch(action.type){
        case actionTypes.INCREMENT:
            return{
                ...state,
                counter: state.counter + 1
            }
        case actionTypes.DECREMENT:
                return{
                    ...state,
                    counter: state.counter - 1
                }
        case actionTypes.ADD:
            return{
                ...state,
                counter: state.counter + action.val
            }
        case actionTypes.SUBTRACT:
            return{
                ...state,
                counter: state.counter - action.val
            }
        case actionTypes.STORE_RESULT:
                return{
                    ...state,
                    results: state.results.concat({id: new Date(), value: state.counter}) // use concat so that here we just add value and update result, don't use push
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