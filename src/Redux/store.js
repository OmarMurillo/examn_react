import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import countReducer from './reducer.js'

console.log(countReducer)
const rootReducer = combineReducers({
    counter: countReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, composeEnhancers( applyMiddleware(thunk) ))