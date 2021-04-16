import React from 'react'
import styled from 'styled-components';

import Grid from '../layout/Grid'
import Search from '../layout/Search' 
import Layout from '../layout/Layout'
import GoBack from '../components/GoBack'
import Sorting from '../components/Sorting'


const Breeds = () => {
    return (
        <Layout flexCol>
            <Search />
            <Wrapper>
                <span>
                    <GoBack btnContent="Breeds" />
                    <Sorting />
                </span>
                <Grid />
            </Wrapper>
        </Layout> 
    )
}

export default Breeds

const Wrapper = styled.div`
    background: ${props => props.theme.bgBox};
    border-radius: 20px;
    width: 100%;
    height: 100%;
    padding: 20px;

    span {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
    }
`