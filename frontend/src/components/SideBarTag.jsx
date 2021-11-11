import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    min-width: 200px;
    padding: .625rem .5rem;
    display: flex;
    flex-direction: column;
    border: 1px solid #E5E7EB;
    border-radius: 6px;
    margin-top: .75rem;
`
const TopText = styled.div`
    display: flex;
    justify-content: space-between;
    padding: .25rem .25rem .625rem;
    border-bottom: 1px solid #E5E7EB;
    margin-bottom: .75rem;  
`
const Title = styled.span`
`
const Emoji = styled.span`
    margin-left: .25rem;
`
const MoreButton = styled(Link)`
    font-size: .875rem;
    text-decoration: underline;
    color: #6B7280;
    &:hover {
        color: #4B5563;
    }
    
`
const TagsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const Tag = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #0F1B4C;
    border: 1px solid #0F1B4C;
    border-radius: 6px;
    font-size: .75rem;
    padding: .25rem .5rem;
    margin: .25rem .25rem .25rem 0;
    &:hover {
        background-color: #0F1B4C;
        color: #fff;
        & span {
            color: #fff;
        }
    }
`
const Count = styled.span`
    margin-left: .25rem;
    color: #F16565;
    font-size: .875rem;
`

const SideBarTag = () => {
    return (
        <Container>
            <TopText>
                <Title>Tag<Emoji>🏷️</Emoji></Title>
                <MoreButton to='/'>더보기</MoreButton>
            </TopText>
            <TagsWrapper>
                <Tag href='/'>javascript<Count>(5)</Count></Tag>
                <Tag href='/'>c<Count>(5)</Count></Tag>
                <Tag href='/'>asdf<Count>(5)</Count></Tag>
                <Tag href='/'>a<Count>(5)</Count></Tag>
                <Tag href='/'>q<Count>(5)</Count></Tag>
                <Tag href='/'>asdf<Count>(5)</Count></Tag>
                <Tag href='/'>asdf<Count>(5)</Count></Tag>
                <Tag href='/'>asdf<Count>(5)</Count></Tag>
                <Tag href='/'>asdf<Count>(5)</Count></Tag>
                <Tag href='/'>asdf<Count>(5)</Count></Tag>
                <Tag href='/'>asdf<Count>(5)</Count></Tag>
                <Tag href='/'>javascript<Count>(5)</Count></Tag>
                <Tag href='/'>c<Count>(5)</Count></Tag>
                <Tag href='/'>asdf<Count>(5)</Count></Tag>
                <Tag href='/'>a<Count>(5)</Count></Tag>
                <Tag href='/'>q<Count>(5)</Count></Tag>
                <Tag href='/'>asdf<Count>(5)</Count></Tag>
                <Tag href='/'>asdf<Count>(5)</Count></Tag>
                <Tag href='/'>asdf<Count>(5)</Count></Tag>
                <Tag href='/'>asdf<Count>(5)</Count></Tag>
            </TagsWrapper>
        </Container>
    )
}

export default SideBarTag
