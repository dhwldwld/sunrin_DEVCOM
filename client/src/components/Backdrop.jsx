import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,.5);
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
`
const Backdrop = ({show, click}) => {
    return (
        show && <Container onClick={click} />
    )
}

export default Backdrop
