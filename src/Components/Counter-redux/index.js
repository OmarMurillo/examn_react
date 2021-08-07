
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {incrementar, decrementar, setDefault } from '../../Redux/actions.js'

const Counter = () => {
    const count = useSelector(store => store.counter.count)
    const dispatch = useDispatch()

    return (
        <div style={styles.container}>
            <h3 style={{...styles.resetButton}}>Counter con Redux</h3>

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