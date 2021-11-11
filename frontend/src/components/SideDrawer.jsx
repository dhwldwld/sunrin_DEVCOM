import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Container = styled.div`
    width: 70%;
    height: 100vh;
    background-color: #070D14;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200;
    transform: ${({show}) => (show ? `translateX(0)` : `translateX(-100%)`)};
    transition: all 0.3s ease-out;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    @media screen and (max-width: 425px) {
        width: 100%;
    }
    @media screen and (min-width: 960px) {
        display: none;
    }
`
const UserProfile = styled(NavLink)`
    padding: 1rem;
    margin:1rem 0 2rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
        background-color: #0c1622;
        color: #3664F4;
    }
`
const UserImage = styled.img`
    width: 3rem;
    margin-right: 1rem;
    border-radius: 50%;
    overflow: hidden;
`
const UserName = styled.span`
    font-size: 1.5rem;
    color: #fff;
`
const SideDrawerList = styled.ul`
    display: flex;
    align-items: center;
    flex-direction: column;
`
const SideDrawerItem = styled.li`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
`
const SideDrawerItemLink =styled(NavLink)`
    width: 100%;
    text-align: center;
    padding: 1rem;
    color: #fff;
    font-size: 1rem;
    &:hover {
        background-color: #0c1622;
        color: #3664F4;
    }
`
const SideDrawerItemButton = styled.button`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({bgcolor}) => (bgcolor ? '#0F1B4C' : '#fff')};
    color: ${({bgcolor}) => (bgcolor ? '#fff' : '#0F1B4C')};
    border: none;
    border-radius: 6px;
    height: 3rem;
    margin: 1rem 0;
    padding: 0 1rem;
    cursor: pointer;
    &:hover {
        background-color: ${({bgcolor}) => (bgcolor ? '#1F2937' : '#E5E7EB')};
    }
`

const SideDrawer = ({show, click}) => {
    return (
        <Container show={show}>
            <UserProfile to='/'onClick={click}>
                <UserImage src='/assets/images/blank_profile.png' />
                <UserName>name</UserName>
                {/* sign in */}
            </UserProfile>
            <SideDrawerList onClick={click}>
                <SideDrawerItem>
                    <SideDrawerItemLink to='/'>Home</SideDrawerItemLink>
                </SideDrawerItem>
                <SideDrawerItem>
                    <SideDrawerItemLink to='/question'>Question</SideDrawerItemLink>
                </SideDrawerItem>
                <SideDrawerItem>
                    <SideDrawerItemLink to='/devlog'>DevLog</SideDrawerItemLink>
                </SideDrawerItem>
                <SideDrawerItem>
                    <SideDrawerItemButton bgcolor={false} to='/'>Sign up</SideDrawerItemButton>
                    {/* sign out */}
                </SideDrawerItem>
            </SideDrawerList>
        </Container>
    )
}

export default SideDrawer
