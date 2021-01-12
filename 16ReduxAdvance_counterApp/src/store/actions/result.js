import * as actiontypes from './actiontypes';

export const saveResult = res =>{
    return{
        type: actiontypes.STORE_RESULT,
        result: res
    }
}

export const store_result = (res) =>{
    return dispatch =>{
        setTimeout(() => {
            dispatch(saveResult(res));
        }, 2000);
    }
}; 

export const delete_result = (resElId) =>{
    return{
        type: actiontypes.DELETE_RESULT,
        result: resElId
    };
};