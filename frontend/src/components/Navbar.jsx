import React,{ useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { IoIosSearch } from 'react-icons/io'

// Components
import HamburgerIcon from './HamburgerIcon'

const Container = styled.nav`
    background-color: #fff;
    ${({scrollNav}) =>(scrollNav ? 'border-bottom: 1px solid #E5E7EB;' : null)}
    position: fixed;
    width: 100%;
    height: 4rem;
    z-index: 10;
`
const Wrapper = styled.div`
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 .5rem;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
`
const NavLeft = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const NavLogo = styled.div``
const NavTextLogo = styled(Link)`
    color: #0F1B4C;
    font-weight: bold;
    font-size: 1.5rem;
`
const SearchButton = styled.div`
    display: flex;
    align-items: center;
    height: 2rem;
    margin: 0 .75rem;
    padding: 0 8px;
    border-radius: 5px;
    background-color: #f3f4f6;
    cursor: pointer;
    &:hover {
        background-color: #E5E7EB;
    }
`
const SearchButtonText = styled.span`
    font-size: .75rem;
    color: #9CA3AF;
`
const SearchButtonIcon = styled(IoIosSearch)`
    margin-left: .375rem;
    color: #9CA3AF;
`
const NavRight = styled.div`
    display: flex;
    align-items: center;
`
const NavRightWrapper = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
        display: none;
    }
`
const SignButtonWrapper = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({bgcolor}) => (bgcolor ? '#0F1B4C' : '#fff')};
    color: ${({bgcolor}) => (bgcolor ? '#fff' : '#0F1B4C')};
    border-radius: 6px;
    width: 5.5rem;
    height: 2.25rem;
    padding: 0 1rem;
    cursor: pointer;
    margin-left: .5rem;
    font-size: .875rem;
    &:hover {
        background-color: ${({bgcolor}) => (bgcolor ? '#1F2937' : '#E5E7EB')};
    }
`
const NavProfileDropDown = styled.div`
    position: relative;
`
const NavProfileButton = styled.button`
    background: none;
    border: 1px solid #F3F4F6;
    border-radius: 6px;
    display: flex;
    align-items: center;
    padding: .25rem .5rem;
    cursor: pointer;
`
const ProfileImage = styled.img`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin-right: .25rem;
`
const ProfileName = styled.span`
    font-size: .75rem;
`
const ProfileArrow = styled.img`
    margin-left: .25rem;
    transform: ${({isShown}) => isShown ? 'rotate(180deg) translateY(-30%)' : 'none' };
    transition: ease-in-out .3s;
`
const DropDownMenu = styled.div`
    position: absolute;
    width: 14rem;
    right: 0;
    font-size: .875rem;
    background-color: #fff;
    border-radius: 6px;
    margin-top: .5rem;
    box-shadow: 0 10px 15px rgba(0,0,0,.1);
    animation: rotateMenu 400ms ease-in-out forwards;
    transform-origin: top center;
    @keyframes rotateMenu {
        0% {
            transform: rotateX(-90deg)
        }
        70% {
            transform: rotateX(20deg) 
        }
        100% {
            transform: rotateX(0deg) 
        }
    }
`
const DropDownProfileLink = styled(Link)`
    margin-bottom: .25rem;
    padding: .75rem 1rem;
    display: flex;
    flex-direction: column;
    color: #374151;
    border-bottom: #F3F4F6 1px solid;
    &:hover {
        background-color: #F3F4F6;
    }
`
const DropDownItem = styled.div`
    display: flex;
    flex-direction: column;
`
const DropDownLink = styled(Link)`
    padding: .5rem 1rem;
    color: #374151;
    &:hover {
        background-color: #F3F4F6;
    }
`
const UserName = styled.p`
    color: #374151;
`
const DetailText = styled.p`
    font-size: .75rem;
    color: #6B7280;
`

const Navbar = ({click}) => {
    const container =  useRef()
    const [scrollNav, setScrollNav] = useState(false)
    const [isShown, setIsShown] = useState(false)
    const [login, setIslogin] = useState(true)

    const changeNav = () => {
        if(window.scrollY >= 10) {
            setScrollNav(true)
        }
        else {
            setScrollNav(false)
        }
    }

    const handleButtonClick = () => {
        setIsShown(!isShown);
      };

    const handleClickOutside = (event) => {
        if (
            container.current &&
            !container.current.contains(event.target)
        ) {
          setIsShown(false);
        }
      };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        window.addEventListener('scroll', changeNav)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <Container scrollNav={scrollNav}>
            <Wrapper>
                <NavLeft>
                    <NavLogo>
                        <NavTextLogo to='/'>
                            DEVCOM
                        </NavTextLogo>
                    </NavLogo>
                    <SearchButton>
                        <SearchButtonText>Search</SearchButtonText>
                        <SearchButtonIcon />
                    </SearchButton>
                </NavLeft>
                <NavRight>
                    <HamburgerIcon click={click} />
                    <NavRightWrapper>
                        {login ? (
                            <>
                                <SignButtonWrapper to='/signin' bgcolor={false}>Sign in</SignButtonWrapper>
                                <SignButtonWrapper to='/signup' bgcolor={true}>Sign up</SignButtonWrapper>
                            </>
                        ):(
                            <NavProfileDropDown>
                                <NavProfileButton
                                    onClick={handleButtonClick}
                                    ref={container}
                                >
                                    <ProfileImage src='/assets/images/blank_profile.png' alt='profile' />
                                    <ProfileName>Name</ProfileName>
                                    <ProfileArrow isShown={isShown} src='/assets/svg/down_arrow.svg' alt='down_arrow' />
                                </NavProfileButton>
                                {isShown && (
                                    <DropDownMenu>
                                        <DropDownProfileLink to='/'>
                                            <UserName>dhwldwld</UserName>
                                            <DetailText>View Profile</DetailText>
                                        </DropDownProfileLink>
                                        <DropDownItem>
                                            <DropDownLink to='/'>Settings</DropDownLink>
                                            <DropDownLink to='/'>Sign Out</DropDownLink>
                                        </DropDownItem>
                                    </DropDownMenu>
                                )}
                            </NavProfileDropDown>
                        )}
                    </NavRightWrapper>
                </NavRight>
            </Wrapper>
        </Container>
    )
}

export default Navbar
