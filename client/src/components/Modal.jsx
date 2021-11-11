import React from 'react'
import styled from 'styled-components'

// Components
import Backdrop from './Backdrop'

const Modal = ({toggle, setToggle, children}) => {
    return (
        <>
            {children}  
            <Backdrop show={toggle} click={() => setToggle(false)} />
        </>
    )
}

export default Modal
