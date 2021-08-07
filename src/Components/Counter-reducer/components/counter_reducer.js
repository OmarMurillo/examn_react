import React,{useContext} from 'react'
import {incrementar, decrementar, setDefault } from '../../../Redux/actions.js'
import CounterContext from '../context/index.js';

const Counter = () => {
    const [count, dispatch] = useContext(CounterContext);
    
    return (
        
        <div style={styles.container}>
            <h3 style={{...styles.resetButton}}>Counter con Reducer</h3>

            <button onClick = {() => dispatch(incrementar()) }>+</button>
            <span style={styles.count}>{count}</span>
            <button onClick = {() => dispatch(decrementar()) }>-</button>

            <button style={styles.resetButton} onClick = {() => dispatch(setDefault()) }>Reset</button>
        </div>
    )
}

const styles = {
    container: {
        display: 'grid',
        gridTemplateColumns: 'auto auto auto',
        gap: '0.25em'
    },
    resetButton: {
        gridColumnEnd: 'span 3'
    },
    count: {
        alignSelf: 'center',
        justifySelf: 'center'
    }
}

export default Counter;