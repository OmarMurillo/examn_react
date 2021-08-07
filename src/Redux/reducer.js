import {INCREMENTAR, DECREMENTAR, SETDEFAULT} from './actions.js'

const default_state = {
    count: 0
}

export default function countReducer(state = default_state, action){
    switch(action.type){
        case INCREMENTAR:
            return{...state,...{count: state.count+1}}
        case DECREMENTAR:
            return{...state,...{count: state.count -1}}
        case SETDEFAULT:
            return{...state,...{count: 0}}
        default:
            return {...state }
    }
}
