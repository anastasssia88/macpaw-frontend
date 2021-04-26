import React from "react";
import styled from "styled-components";

const NoItemFound = ({ children }) => {
  return (
    <Wrapper>
      <p>No item found</p>
    </Wrapper>
  );
};

export default NoItemFound;

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.bgSort};
  width: 100%;
  height: 60px;
  border-radius: 10px;
  padding: 0px 20px;
  margin: 10px 0px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  p {
    color: ${(props) => props.theme.textSec};
    padding: 0px 10px;
  }
`;
