
import React from 'react'
import  { CounterReducerContext } from './context/index.js'
import CounterReducer from './/components/counter_reducer.js'

const CounterReducerIndex = () => {
    return (
        <CounterReducerContext >
            <CounterReducer />
        </CounterReducerContext>
    )
}


export default CounterReducerIndex;