import React from 'react'
import styled from 'styled-components';
import logo from '../images/logo.svg'
import {Link}  from "react-router-dom";


// Components
// import Text from '../components/Text'
import Navbar from '../components/Navbar'

const Sidenav = () => {
    return (
        <Section>
            <Wrapper>
                <Link to="/">
                    <Logo src={logo} alt="pets paw" />
                </Link>
                {/* <Logo src={logo} alt="pets paw" /> */}
                <div>
                    <h1>Hi Intern!</h1>
                    <p>Welcome to MSI 2021 Front-end test</p>
                    {/* <Text sm gray content="Welcome to MSI 2021 Front-end test" /> */}
                    <h3>Lets start using The Dogs API</h3>
                    <Navbar />
                </div>
                
            </Wrapper>
        </Section>
    )
}

export default Sidenav


const Section = styled.section`
    background: ${props => props.theme.bgMain};
    height: 100vh;
    width: 50%;
    position: sticky;
`

const Wrapper = styled.div`
    margin: 2rem 8rem;

    h1 {
        margin-top: 5rem;
        color: ${props => props.theme.textPrim};
    }

    p {
        padding: 1.5rem 0rem;
        color: ${props => props.theme.textSec};
    }

    h3 {
        margin-top: 3.5rem;
        color: ${props => props.theme.textPrim};
    }
`

const Logo = styled.img`
    width: 7rem;
    height: auto;
`