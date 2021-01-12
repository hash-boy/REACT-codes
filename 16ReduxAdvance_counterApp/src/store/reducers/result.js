import * as actionTypes from  '../actions/actiontypes';
import { updateObject } from '../utility';

const initialState = {
    results: []
}

const reducer = ( state=initialState , action ) => {
    
    switch(action.type){
        case actionTypes.STORE_RESULT:
            return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result})});

        case actionTypes.DELETE_RESULT:
                    const updateArrayResult = state.results.filter(result => result.id !== action.result ) 
                    return updateObject(state, {results: updateArrayResult});

        default:
            return state
    }
}


export default reducer;