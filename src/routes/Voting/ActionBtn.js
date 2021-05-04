import React from "react";
import styled from "styled-components";

const ActionBtn = ({ like, fav, disl, viewBox, path, onClick }) => {
  return (
    <Btn like={like} fav={fav} disl={disl} onClick={onClick}>
      <SVG like viewBox={viewBox}>
        <path d={path}></path>
      </SVG>
    </Btn>
  );
};

export default ActionBtn;

const SVG = styled.svg`
  width: 30px;
  height: 30px;
  fill: white;
  -webkit-transition: all 0.3s ease;  
  -moz-transition: all 0.3s ease;  
  -o-transition: all 0.3s ease; 
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;

const Btn = styled.button`
  width: 80px;
  height: 80px;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }

  border: none;
  margin: ${(props) => props.fav && "0px 4px"};

  background: ${(props) => props.like && "#97EAB9"};
  background: ${(props) => props.fav && "#FF868E"};
  background: ${(props) => props.disl && "#FFD280"};

  border-top-left-radius: ${(props) => props.like && "20px"};
  border-bottom-left-radius: ${(props) => props.like && "20px"};
  border-top-right-radius: ${(props) => props.disl && "20px"};
  border-bottom-right-radius: ${(props) => props.disl && "20px"};

  border-radius: ${(props) => props.disl && "#97EAB9"};

  -webkit-transition: all 0.3s ease;  
  -moz-transition: all 0.3s ease;  
  -o-transition: all 0.3s ease; 
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => props.like && "rgba(151, 234, 185, 0.3)"};
    background: ${(props) => props.fav && "rgba(255, 134, 142, 0.3)"};
    background: ${(props) => props.disl && "rgba(255, 210, 128, 0.3)"};
  }

  &:hover ${SVG} {
    fill: ${(props) => props.like && "#97EAB9"};
    fill: ${(props) => props.fav && "#FF868E"};
    fill: ${(props) => props.disl && "#FFD280"};
  }
`;
