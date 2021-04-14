import React from 'react'
import styled from "styled-components";

const Layout = ({children, flex, flexCol, maxH100}) => {
    return (
        <Section flex={flex} flexCol={flexCol} maxH100={maxH100} >
            {children}
        </Section> 
    )
}

export default Layout 


const Section = styled.section`
    background: ${props => props.theme.bgMain};

    height: auto;
    max-height: ${props => props.maxH100 && '100vh'};
    height: ${props => props.maxH100 && '100vh'};

    width: 50%;
    padding: 2rem;

    display: flex;
    justify-content: center;
    /* align-items: center; */
    align-items: flex-start;

    flex-direction: ${props => props.flexCol ? 'column' : 'row'};
`
