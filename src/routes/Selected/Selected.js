import React, { useContext } from "react";
import styled from "styled-components";

import Wrapper from "../../components/Shared/Wrapper";
import GoBack from "../../components/Shared/GoBack";
import Button from "../../components/Shared/Button";
import { DogContext } from "../../helpers/DogContext";

const Selected = () => {
  const { selectedKey } = useContext(DogContext);
  const [selected] = selectedKey;

  console.log(selected);
  return (
    <Wrapper>
      <Container>
        <GoBack btnContent="Breeds" notActive />
        <Button btnContent="28" bgText noHover selected />
      </Container>
      <Img src={selected.url} alr="selected dog" />

      <BreedFor>
        <h2>{selected.breeds[0].name}</h2>
        <p>{selected.breeds[0].bred_for}</p>
        <BreedDesc>
          <div>
            <p>
              <span>Temperament:</span>
              <br />
              {selected.breeds[0].temperament}
            </p>
          </div>
          <div>
            <p>
              <span>Height:</span> {selected.breeds[0].height.metric} at the
              withers
            </p>
            <p>
              <span>Weight:</span> {selected.breeds[0].weight.metric} kgs
            </p>

            <p>
              <span>Life span</span> {selected.breeds[0].life_span} years
            </p>
          </div>
        </BreedDesc>
      </BreedFor>
    </Wrapper>
  );
};

export default Selected;

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
  border: 2px solid #fbe0dc;
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

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  p {
    color: ${(props) => props.theme.textSec};
    font-size: 20px;
    margin-top: 10px;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

const BreedDesc = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }

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
`;
