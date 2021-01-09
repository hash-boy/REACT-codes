import * as actionTypes from './actions';

const initialState={
    persons: []
};

const reducer = (state=initialState, action) =>{

    switch(action.type){
        case actionTypes.ADD_PERSON:
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: action.personData.name,
                age: action.personData.age
            }
            return{
                ...state,
                persons: state.persons.concat(newPerson)
            }
        case actionTypes.REMOVE_PERSON:
            const updatePerson = state.persons.filter(person=> person.id !== action.pId);
            return{
                ...state,
                persons: updatePerson
            }
        default:
            return state;
    }
}

export default reducer;