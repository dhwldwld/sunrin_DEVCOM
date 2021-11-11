import React from 'react'
import styled from 'styled-components'

// Components
import Layout from '../components/Layout'
import QuestionPostBox from '../components/QuestionPostBox'

const Cotainer = styled.div`
    display: grid;
    grid-template-columns: repeat(1, minmax(0,1fr));
    gap: 1.25rem;
`

const QuestionScreen = () => {
    return (
        <Layout>
            <Cotainer>
                <QuestionPostBox />
                <QuestionPostBox />
                <QuestionPostBox />
                <QuestionPostBox />
                <QuestionPostBox />
                <QuestionPostBox />
                <QuestionPostBox />
                <QuestionPostBox />
                <QuestionPostBox />
                <QuestionPostBox />
                <QuestionPostBox />
                <QuestionPostBox />
                <QuestionPostBox />
                <QuestionPostBox />
                <QuestionPostBox />
                <QuestionPostBox />
            </Cotainer>
        </Layout>
    )
}

export default QuestionScreen
