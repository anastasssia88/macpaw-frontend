import React from 'react'
import styled from "styled-components";
import Border from "../../images/selected-border.svg"
import Dog from "../../images/dog-voting.png"

import Layout from "../../components/Shared/Layout";
import Search from "../../components/Searchbar/Search";
import GoBack from "../../components/Shared/GoBack";
import Button from "../../components/Shared/Button";
import Loader from "../../components/Shared/Loader";

const Selected = () => {
    return (
        <Layout flexCol >
             <Search />
            <Wrapper>
                <Container>
                    <GoBack btnContent="Breeds" notActive /> 
                    <Button btnContent="28" bgText noHover />
                </Container>
                <Img src={Dog} alr="selected dog" />
                <BreedFor>
                    <h2>Basenji</h2>
                    <p>Family companion dog</p>
                   <BreedDesc>
                        <div>
                            <p><span>Description:</span><br/>
                            Affectionate, Energetic, Alert, Curious, Playful, Intelligent
                            </p>
                            
                        </div>
                        <div>
                            <p><span>Height:</span> 41 - 43 cm at the withers</p>
                            <p><span>Weight:</span> 10 - 11 kgs</p>
                            
                            <p><span>Life span</span> 10 - 12 years</p>
                        </div>
                   </BreedDesc>
                </BreedFor>
            </Wrapper>
        </Layout>
    )
}

export default Selected

const Wrapper = styled.div`
  background: ${(props) => props.theme.bgBox};
  border-radius: 20px;
  width: 100%;
  height: 100%;
  padding: 20px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const Img = styled.img`
  border-radius: 20px;
  width: 100%;
  max-height: 30rem;
  object-fit: cover;
`;

const BreedFor = styled.div`
    margin-top: 40px;
    width: 100%;
    height: auto;
    border: 2px solid #FBE0DC;
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    h2 {
        margin-top: -20px;
        background: ${(props) => props.theme.bgSelected};
        color: ${(props) => props.theme.textPrim};
        font-size: 36px;
        padding: 0px 30px;
    }

    p {
        color: ${(props) => props.theme.textSec};
        font-size: 20px;
        margin-top: 10px;
    }
`

const BreedDesc = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    div {
        flex-basis: 50%;
        margin: 0px 7px;
        line-height: 1.4;
    }

    p {
        color: ${(props) => props.theme.textSec};
        font-size: 16px;
        font-weight: 400;
    }

    span {
        color: ${(props) => props.theme.textPrim};
        font-size: 16px;
        font-weight: 500;
    }
`

