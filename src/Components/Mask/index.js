import React, { useState, forwardRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types';

function Mask(props, ref){
    let {
        children = <> </>, 
        size = {},
        containerStyles = {}
    } = props

    const [isOpen, setOpen] = useState(false)

    useImperativeHandle(ref, ()=>({
        Open: () => {setOpen(true)},
        Close: () => {setOpen(false)}
    }))

    if(!isOpen) {
        return null
    }

    return (
        <div style={{...containerStyles, ...size.l}} >
            <div style = {{...size.s}}>
                {children}
            </div>
        </div>
    )
}

Mask.propTypes = {
    children: PropTypes.any,
    size: PropTypes.object,
    containerStyles: PropTypes.object
}

export default forwardRef(Mask)