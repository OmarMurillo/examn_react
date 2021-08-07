import {useReducer} from 'react'
import {INCREMENTAR, DECREMENTAR, SETDEFAULT } from '../../../Redux/actions.js'

const default_state = 0

const countReducer = (state, action) => {
    switch(action.type){
        case INCREMENTAR:
            return state + 1
        case DECREMENTAR:
            return state - 1
        case SETDEFAULT:
            return 0
        default:
            return state
    }
}

export default () => 
    useReducer(countReducer, default_state)
