
import React from 'react'
import useCountReducer from '../hooks/useCountReducer.js'

const CounterContext = React.createContext()

const CounterReducerContext = (props) => {
    return (
        <CounterContext.Provider value={useCountReducer()}>
            {props.children}
        </CounterContext.Provider>
    )
}

export {CounterReducerContext}
export default CounterContext;