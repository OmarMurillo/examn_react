import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    
    return (
        <div style={styles.container}>
            <h3 style={{...styles.resetButton}}>Counter con hooks</h3>
            <button onClick = {()=> setCount(count+1)}>+</button>
            <span style={styles.count}>{count}</span>
            <button onClick = {()=> setCount(count-1)}>-</button>
            <button  onClick = {()=> setCount(0)} style={styles.resetButton}>Reset</button>
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