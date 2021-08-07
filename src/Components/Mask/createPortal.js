import React from 'react'
import ReactDOM from 'react-dom'

export default function CreatePortaltoBody(props){
    const {children = <></>} = props
    return ReactDOM.createPortal(children, document.body)
}