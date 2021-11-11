import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
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

const CreatePostButton = () => {
    return (
        <Container>
            <PostButton>Create New</PostButton>
        </Container>
    )
}

export default CreatePostButton
