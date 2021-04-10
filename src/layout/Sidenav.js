import React from 'react'
import styled from 'styled-components';
import logo from '../images/logo.svg'

// Components
import Text from '../components/Text'

const Sidenav = () => {
    return (
        <Section>
            <Wrapper>
                <Logo src={logo} alt="pets paw" />
                <div>
                    <h1>Hi Intern!</h1>
                    <Text sm gray content="Welcome to MSI 2021 Front-end test" />
                    <h3>Lets start using The Dogs API</h3>
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
`

const Wrapper = styled.div`
    margin: 2rem 6rem;
`

const Logo = styled.img`
    width: 8rem;
    height: auto;
`