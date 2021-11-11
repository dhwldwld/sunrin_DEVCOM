import React from 'react'
import styled from 'styled-components'

// Components
import DevLogPostBox from '../components/DevLogPostBox'
import Layout from '../components/Layout'


const Cotainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0,1fr));
    gap: 1.25rem;
    @media screen and (max-width: 1062px) {
        grid-template-columns: repeat(2, minmax(0,1fr));
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(1, minmax(0,1fr));
    }
`

const DevLogScreen = () => {
    return (
        <Layout>
            <Cotainer>
                <DevLogPostBox />
                <DevLogPostBox />
                <DevLogPostBox />
                <DevLogPostBox />
                <DevLogPostBox />
                <DevLogPostBox />
                <DevLogPostBox />
                <DevLogPostBox />
                <DevLogPostBox />
                <DevLogPostBox />
                <DevLogPostBox />
                <DevLogPostBox />
                <DevLogPostBox />
                <DevLogPostBox />
                <DevLogPostBox />
                <DevLogPostBox />
                <DevLogPostBox />
                <DevLogPostBox />
            </Cotainer>
        </Layout>
    )
}

export default DevLogScreen