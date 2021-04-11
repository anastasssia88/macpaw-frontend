import React from 'react'
import styled from "styled-components";

const Layout = ({children}) => {
    return (
        <Section>
            {children}
        </Section>
    )
}

export default Layout


const Section = styled.section`
    background: ${props => props.theme.bgMain};
    height: 100vh;
    max-height: 100vh;
    width: 50%;
    padding: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;
`
