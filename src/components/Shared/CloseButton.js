import React from "react";
import styled from "styled-components";

const CloseButton = ({ isOpen, setIsOpen }) => {
  return (
    <CloseBtn onClick={() => setIsOpen(!isOpen)}>
      <svg viewBox="0 0 18 18">
        <path d="M8.05691 8.99997L0.52832 1.47137L1.47113 0.528564L8.99972 8.05716L16.5283 0.528564L17.4711 1.47137L9.94253 8.99997L17.4711 16.5286L16.5283 17.4714L8.99972 9.94278L1.47113 17.4714L0.52832 16.5286L8.05691 8.99997Z"></path>
      </svg>
    </CloseBtn>
  );
};

export default CloseButton;

const CloseBtn = styled.button`
  top: 1.8rem;
  right: 1.8rem;
  background: ${(props) => props.theme.bgBox};
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;

  svg {
    width: 17px;
    height: 17px;
    fill: #ff868e;
  }

  &:hover {
    background: #ff868e;
  }
  &:hover svg {
    fill: #ffffff;
  }
`;
