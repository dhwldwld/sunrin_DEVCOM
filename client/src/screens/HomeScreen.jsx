import React from 'react'
import styled from 'styled-components'

// Components
import Layout from '../components/Layout'
import HomePostBox from '../components/HomePostBox'

const Cotainer = styled.div`
    display: grid;
    grid-template-columns: repeat(1, minmax(0,1fr));
    gap: 1.25rem;
`

const HomeScreen = () => {
    return (
        <Layout>
            <Cotainer>
                <HomePostBox author='object' post='object'/>
                <HomePostBox author='object' post='object'/>
                <HomePostBox author='object' post='object'/>
                <HomePostBox author='object' post='object'/>
                <HomePostBox author='object' post='object'/>
                <HomePostBox author='object' post='object'/>
                <HomePostBox author='object' post='object'/>
                <HomePostBox author='object' post='object'/>
                <HomePostBox author='object' post='object'/>
                <HomePostBox author='object' post='object'/>
                <HomePostBox author='object' post='object'/>
                <HomePostBox author='object' post='object'/>
                <HomePostBox author='object' post='object'/>
                <HomePostBox author='object' post='object'/>
                <HomePostBox author='object' post='object'/>
                <HomePostBox author='object' post='object'/>
            </Cotainer>
        </Layout>    
    )
}

export default HomeScreen