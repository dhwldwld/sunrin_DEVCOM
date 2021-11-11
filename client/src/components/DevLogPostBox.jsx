import React from 'react'
import styled from 'styled-components'
import { FiThumbsUp } from 'react-icons/fi'
import { RiDiscussLine } from 'react-icons/ri'

const Container = styled.div`
    width: 100%;
    min-width: 16rem;
    background: #fff;
    border-radius: .4rem;
    box-shadow: 0px 4px 10px rgb(0,0,0,.2);
    transition: box-shadow .3s ease-in, transform .25s ease-in;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    &:hover {
        transform: translateY(-4px);
        box-shadow: 0px 8px 12px rgb(0,0,0,.08);
    }
`
const ThumbNail = styled.img`
    height: 50%;
    object-fit: cover;
`
const Contents = styled.div`
    padding: 1rem 1rem;
    display: flex;
    flex: 1 1 0%;
    flex-direction: column;
`
const Title = styled.span`
    font-size: 1rem;
    margin-bottom: .25rem;
    line-height: 1.5;
    word-break: break-word;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #000;
`
const DescWrapper = styled.div`
    flex: 1 1 0%;
`
const Desc = styled.p`
    word-break: break-word;
    overflow-wrap: break-word;
    font-size: .875rem;
    height: 4rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #6D7074;
`
const AuthorWithComments = styled.div`
    padding: .625rem 1rem;
    border-top: 1px solid #F8F9FA;
    display: flex;
    font-size: .75rem;
    line-height: 1.5;
    -webkit-box-pack: justify;
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
const Comments = styled.div`
    display: flex;
`
const StateBox = styled.div`
    display: flex;
    align-items: center;
    font-size: .875rem;
    color: #9CA3AF;
    margin-left: .5rem;
`
const StateCount = styled.span`
    margin-left: .25em;
`

const DevLogPostBox = () => {
    return (
        <Container>
            <ThumbNail src='/assets/images/devlog_thumbnail.jpg' />
            <Contents>
                <Title>개발자용 운동팁 5가지</Title>
                <DescWrapper>
                    <Desc>
                        개발자용 운동팁? 그런 게 있나?🤔 싶을 수 있다. 
                        하지만 놀랍게도, 하루종일 책상에 앉아 키보드를 두드리는 개발자들을 위해 최적화된 운동팁은 존재한다. 
                        필자는 10년 정도의 운동선수 생활을 하면서, 
                        다양한 트레이너와 코치들한테 개발자용 운동팁들을 주워들을 수 있었다. 오늘은 그걸 공개하도록 하겠다.
                    </Desc>
                </DescWrapper>
            </Contents>
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
        </Container>
    )
}

export default DevLogPostBox
