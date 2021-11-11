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
`
const AuthorWithComments = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
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
`
const Desc = styled.div`
    font-size: .875rem;
    margin-top: .5rem;
    color: #6D7074;
    line-height: 1.25rem;
    font-size: .875rem;
    font-weight: 100;
    white-space: wrap;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`
const Comments = styled.div`
    display: flex;
`
const StateBox = styled.div`
    display: flex;
    align-items: center;
    padding: .25rem .75rem;
    background-color: #F3F4F6;
    color: #9CA3AF;
    border-radius: .6rem;
    margin-right: .5rem;
`
const StateCount = styled.span`
    margin-left: .25em;
`

const QuestionPostBox = ({author, post}) => {
    return (
        <Container>
            <Wrapper>
                <Title>What is HTTP, HTTPS, and SSL</Title>
                <Desc>
                    Introduction If you are a developer you probably know what an SSL certificate is.
                    If you don't know what it is, don't worry. 
                    An SSL certificate is a must-have on any website. it lets your wasfdas
                </Desc>
                <AuthorWithComments>
                    <Author>
                        <ImageAuthor src='/assets/images/blank_profile.png' />
                        <InfoAuthor>
                            <NameAuthor>Name</NameAuthor>
                            <UploadTime>2021. 11. 04</UploadTime>
                        </InfoAuthor>
                    </Author>
                    <Comments>
                        <StateBox>
                            <FiThumbsUp />
                            <StateCount>20</StateCount>
                        </StateBox>
                        <StateBox>
                            <RiDiscussLine />
                            <StateCount>20</StateCount>
                        </StateBox>
                    </Comments>
                </AuthorWithComments>
            </Wrapper>
        </Container>
    )
}
export default QuestionPostBox
