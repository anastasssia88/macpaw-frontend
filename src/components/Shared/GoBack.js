import React from "react";
import styled from "styled-components";

const GoBack = ({ btnContent }) => {
  return (
    <Div>
      <BtnBack>
        <svg viewBox="0 0 20 20">
          <path d="M4.70975 10.9901L13.3095 19.5896C13.8565 20.1369 14.7435 20.1369 15.2903 19.5896C15.8371 19.0427 15.8371 18.1558 15.2903 17.6091L7.6808 9.99988L15.29 2.39096C15.8369 1.84391 15.8369 0.957107 15.29 0.410284C14.7432 -0.136761 13.8563 -0.136761 13.3093 0.410284L4.70953 9.00985C4.43611 9.28339 4.29956 9.64153 4.29956 9.99983C4.29956 10.3583 4.43638 10.7167 4.70975 10.9901Z"></path>
        </svg>
      </BtnBack>
      <Btn>{btnContent}</Btn>
    </Div>
  );
};

export default GoBack;

const Div = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

const BtnBack = styled.button`
  width: 40px;
  height: 40px;
  background: ${ props => props.theme.pinkBtn};
  border-radius: 10px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  -webkit-transition: all 0.3s ease;  
  -moz-transition: all 0.3s ease;  
  -o-transition: all 0.3s ease; 
  transition: all 0.3s ease;

  &:hover {
    background: #ff868e;
  }

  &:hover svg {
    fill: #ffffff;
  }

  svg {
    width: 20px;
    height: 20px;
    fill: #ff868e;
  }
`;

const Btn = styled.button`
  width: 146px;
  height: 40px;
  background: #ff868e;
  margin-left: 10px;

  color: white;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 10px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  -webkit-transition: all 0.3s ease;  
  -moz-transition: all 0.3s ease;  
  -o-transition: all 0.3s ease; 
  transition: all 0.3s ease;
`;
