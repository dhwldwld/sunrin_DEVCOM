import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    min-width: 200px;
    line-height: 2;
    font-size: .875rem;
    display: flex;
    flex-direction: column;
`
const SectionLink = styled(NavLink)`
    padding: .25rem .5rem;
    margin-bottom: .25rem;
    border-radius: 6px;
    color: #6B7280;
    &:hover {
        background-color: #F3F4F6;
        color: #4B5563;
    }
    &.active {
        background-color: #F3F4F6;
        color: #4B5563;
    }
`
const Emoji = styled.span`
    margin-right: .5rem;
`
const SideBarSectionTab = () => {
    return (
        <Container>
            <SectionLink to='/'><Emoji>🏠</Emoji> Home</SectionLink>
            <SectionLink to='/question'><Emoji>🙋‍♀️</Emoji> Q&A</SectionLink>
            <SectionLink to='/devlog'><Emoji>📚</Emoji> DevLog</SectionLink>
        </Container>
    )
}

export default SideBarSectionTab
