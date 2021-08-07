import React, {createRef, useState} from "react";
import Counter from "./Counter";
import CounterRedux from "./Counter-redux";
import CounterReducer from "./Counter-reducer";
import Mask from './Mask'
import CreatePortaltoBody from "./Mask/createPortal.js";

const Main = () => {
    //------------------------------STATE-----------------------------------------------
    const [child, setChild] = useState(<></>)
    //------------------------------REFERENCES-------------------------------------------
    const maskRef = createRef()

    //-----------------------------DEFINE STYLES----------------------------------------
    const styles = {
         size: {
             s: {
                 width: '70vw',
                 height: '60vh',
                 margin: '0 auto'
             },
             l: {
                 width: '90vw',
                 height: '80vh'
             },
         },
         container: {
             //margin: 'auto',
             margin: '20px auto',
             top: 0,
             left: 0,
             background: '#000000aa'
         }
    }
    //---------------------FUNCTIONS TO OPEN AND CLOSE A MASK
    const setSelectedChild = (child) => {
        if (maskRef.current != null) {
            setChild(child)
            maskRef.current.Open()
        }
    }

    const closeMask = () => maskRef.current != null && maskRef.current.Close()
    

    return (
        <>
            <button onClick = {()=>{setSelectedChild(<Counter/>)}}>Open Counter with hooks</button>
            <button onClick = {()=>{setSelectedChild(<CounterRedux/>)}} >Open Counter with redux</button>
            <button onClick = {()=>{setSelectedChild(<CounterReducer/>)}}>Open Counter with reducer</button>
            <button onClick = {()=>{closeMask()}} >Quitar mascara</button>
            <CreatePortaltoBody>
                <Mask ref={maskRef} size={styles.size} containerStyles={styles.container}>
                    {child}
                </Mask>
            </CreatePortaltoBody>
        </>
    )
}

export default Main;
