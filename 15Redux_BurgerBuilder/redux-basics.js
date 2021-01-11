const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

// Reducer
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        };
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        };
    }
    return state;
};

// Store
const store = createStore(rootReducer);
console.log('store: ',store.getState());

// Subscription
store.subscribe(() => {
    console.log('Subscription: ', store.getState());
});

// Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
console.log('after INC: ',store.getState());
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log('after ADD: ', store.getState());




/*  output:
        store:  { counter: 0 }
        Subscription:  { counter: 1 }
        after INC:  { counter: 1 }
        Subscription:  { counter: 11 }
        after ADD:  { counter: 11 }
*/