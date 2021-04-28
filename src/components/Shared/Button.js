import React from "react";
import styled from "styled-components";

const Button = ({ btnContent, hidden, onClick }) => {
  return (
    <Div hidden={hidden}>
      <Btn onClick={onClick}>{btnContent}</Btn>
    </Div>
  );
};

export default Button;

const Div = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 20px;

  display: ${(props) => props.hidden && "none"};
`;

const Btn = styled.button`
  width: auto;
  height: 40px;
  background: #ff868e;
  margin-left: 10px;

  color: white;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 10px;
  padding: 5px 30px;

  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-transition: all 0.3s ease;  
  -moz-transition: all 0.3s ease;  
  -o-transition: all 0.3s ease; 
  transition: all 0.3s ease;
`;
