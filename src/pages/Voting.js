import React from 'react'
import styled from 'styled-components';
import dog from '../images/dog-voting.png'

// Components
import Search from '../layout/Search' 
import Layout from '../layout/Layout'
import GoBack from '../components/GoBack'

const Voting = () => {
    return (
        <Layout flexCol> 
            <Search />
            <Wrapper>
                <GoBack btnContent="Voting" />
                <Img src={dog} alt="this is dog" />
            </Wrapper>
        </Layout>
    )
}

export default Voting

const Wrapper = styled.div`
    background: ${props => props.theme.bgBox};
    border-radius: 20px;
    width: 100%;
    height: 100%;
    padding: 20px;
`

const Img = styled.img`
    border-radius: 20px;
    width: 100%;
    height: auto;
    /* padding: 20px; */
`