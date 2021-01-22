import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import burgerBuilderreducer from './store/reducers/BurgerBuilder';
import orderReducer from './store/reducers/order';

const rootReducer = combineReducers({
    burgerBuilder: burgerBuilderreducer,
    order: orderReducer
});


const logger = store =>{
    return next =>{
        return action =>{
            console.log('[middlerware] dispatching', action );
            const result = next(action);
            console.log('[middleware] next to state', store.getState());
            return result;
        }
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(logger, thunk))
);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
ReactDOM.render( app , document.getElementById('root'));
registerServiceWorker();
