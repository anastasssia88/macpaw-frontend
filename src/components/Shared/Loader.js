import React from 'react'
import { BeatLoader } from "react-spinners";
import styled from 'styled-components'

const Loader = () => {
    return (
        <Section>
            <BeatLoader color="rgba(251, 224, 220, 1)" />
        </Section>
    )
}

export default Loader

const Section = styled.section`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
