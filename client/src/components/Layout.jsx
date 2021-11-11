import React from 'react'
import styled from 'styled-components'

// Components
import SideBarSection from './SideBarSectionTab'
import SideBarTag from './SideBarTag'

const Container = styled.div`
    padding-top: 4rem;
`
const Wrapper = styled.div`
    max-width: 1320px;
    margin: 0 auto;
    padding: 1rem .75rem 0;
    display: flex;
`
const LeftSideBar = styled.div`
    flex: 2;
    @media screen and (max-width: 768px) {
        display: none;
    }
`
const Main = styled.div`
    flex: 8;
    padding: 0 1.25rem;
    @media screen and (max-width: 768px) {
        padding: 0;
    }
`
const RightSideBar = styled.div`
    flex: 2;
    @media screen and (max-width: 1263px) {
        display: none;
    }
`
const PostButton = styled.button`
    color: #fff;
    border: 0;
    width: 100%;
    height: 40px;
    padding: .5rem .75rem;
    border-radius: 6px;
    font-size: 1rem;
    cursor: pointer;
    background-color: #0F1B4C;
    &:hover {
        background-color: #1F2937;
    }
`

const Layout = ({toggle, setToggle, children}) => {
    return (
        <Container>
            <Wrapper>
                <LeftSideBar>
                    <SideBarSection />
                </LeftSideBar>
                <Main>
                    {children}
                </Main>
                <RightSideBar>
                    <PostButton onClick={() => null} >Create New</PostButton>
                    <SideBarTag />
                </RightSideBar>
            </Wrapper>    
        </Container>
    )
}

export default Layout