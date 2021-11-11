import React from 'react'
import styled from 'styled-components'
import { FiThumbsUp } from 'react-icons/fi'
import { RiDiscussLine } from 'react-icons/ri'

const Container = styled.div`
    display: flex;
    width: 100%;
    border-radius: .8rem;
    border: 1px solid #E5E7EB;
    box-shadow:  0 10px 10px -5px rgba(0,0,0,.04);
    transition: .5s cubic-bezier(.4,0,.2,1), transform .25s ease-in;;
    cursor: pointer;
    &:hover {
        box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.12);
        transform: translateY(-2px);
    }
`
const Wrapper = styled.div`
    padding: 1.5rem 1rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
`
const InfoPost = styled.div`
    padding-right: 1.5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const Author = styled.div`
    display: flex;
    align-items: center;
`
const ImageAuthor = styled.img`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    overflow: hidden;
    margin-right: .5rem;
`
const InfoAuthor = styled.div`
    display: flex;
    flex-direction: column;
`
const NameAuthor = styled.span`
    line-height: .875rem;
    font-size: .875rem;
    margin-bottom: .125rem;
`
const UploadTime = styled.span`
    line-height: .75rem;
    font-size: .75rem;
    font-weight: 100;
`
const Title = styled.h1`
    font-size: 1.25rem;
    font-weight: 500;
    margin-top: .5rem;
`
const States = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: .5rem;
`
const StateBox = styled.div`
    display: flex;
    align-items: center;
    padding: .25rem .75rem;
    border-radius: .6rem;
    margin-right: .5rem;
    color: #5f5f5f;
    transition: ease-in-out .2s;
    &:hover { 
        background-color: #F3F4F6;
        color: #2e2e2e;
    }
`
const StateCount = styled.span`
    margin-left: .5em;
`
const StateName = styled.span`
    margin-left: .25em;
`
const ThumbnailPost = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @media screen and (max-width: 896px) {
        display: none;
    }
`
const ThumbnailImage = styled.img`
    object-fit: cover;
    max-width: 16rem;
    border-radius: .5rem;
`

const HomePostBox = ({author, post}) => {
    return (
        <Container>
            <Wrapper>
                <InfoPost>
                    <Author>
                        <ImageAuthor src='/assets/images/blank_profile.png' />
                        <InfoAuthor>
                            <NameAuthor>Name</NameAuthor>
                            <UploadTime>2021. 11. 04</UploadTime>
                        </InfoAuthor>
                    </Author>
                    <Title>What is HTTP, HTTPS, and SSL</Title>
                    <States>
                        <StateBox>
                            <FiThumbsUp />
                            <StateCount>20</StateCount>
                            <StateName>reactions</StateName>
                        </StateBox>
                        <StateBox>
                            <RiDiscussLine />
                            <StateCount>20</StateCount>
                            <StateName>comments</StateName>
                        </StateBox>
                    </States>
                </InfoPost>
                <ThumbnailPost>
                    <ThumbnailImage src='/assets/images/thumbnail.jpg' />
                </ThumbnailPost>
            </Wrapper>
        </Container>
    )
}
export default HomePostBox
