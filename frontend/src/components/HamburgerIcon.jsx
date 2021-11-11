import React from 'react'
import styled from 'styled-components'
import { AiOutlineMenu } from 'react-icons/ai'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    font-size: 2rem;
    cursor: pointer;
    @media screen and (min-width: 768px) {
        display: none;
    }
`

const HamburgerIcon = ({click}) => {
    return (
        <Container onClick={click}>
            <AiOutlineMenu />
        </Container>
    )
}

export default HamburgerIcon
