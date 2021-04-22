import React from 'react'
import styled from "styled-components";
import HeroImg from '../../images/girl-and-pet.svg'

const Home = () => {
    return (
        <Section >
            <div>
                <img src={HeroImg} alt="girl and pet"/>
            </div>
        </Section>
    )
}

export default Home

const Section = styled.section`
    background: ${props => props.theme.bgMain};
    height: 100vh;
    max-height: 100vh;
    width: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    div {
        background: ${props => props.theme.bgPink};
        width: auto;
        margin: 2rem;
        border-radius: 20px;
        position: relative;

        img {
        width: 100%;
        height: 100%;
        transform: scale(1.1, 1.1);
        }
    }
`