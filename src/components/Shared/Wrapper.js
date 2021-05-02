import React from 'react'
import styled from "styled-components";

const Wrapper = ({ children }) => {
    return (
        <Div>
            { children }
        </Div>
    )
} 

export default Wrapper

const Div = styled.div`
  background: ${(props) => props.theme.bgBox};
  border-radius: 20px;
  width: 100%;
  height: 100%;
  padding: 20px;
`;
