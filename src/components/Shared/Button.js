import React from "react";
import styled from "styled-components";
import { ClipLoader } from "react-spinners";

const Button = ({
  btnContent,
  hidden,
  onClick,
  bgText,
  noHover,
  responseStatus,
  uploading,
  selected,
}) => {
  return (
    <Div hidden={hidden} responseStatus={responseStatus}>
      <Btn
        bgText={bgText}
        noHover={noHover}
        onClick={onClick}
        uploading={uploading}
        selected={selected}
      >
        {uploading && (
          <span>
            <ClipLoader color="#FFFFFF" size="20" />
          </span>
        )}
        {btnContent}
      </Btn>
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
  display: ${(props) => props.responseStatus === 400 && "none"};
  display: ${(props) => props.responseStatus === 201 && "none"};

  @media (max-width: 768px) {
    margin: 0px 0px;
    width: ${(props) => props.selected && "100%"};
  }
`;

const Btn = styled.button`
  width: auto;
  height: 40px;

  background: #ff868e;
  margin-left: 10px;

  color: white;
  font-size: 12px;
  font-size: ${(props) => props.bgText && "20px"};
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

  span {
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    background: ${(props) => (props.noHover ? "#FF868E" : "#FBE0DC")};
    color: ${(props) => (props.noHover ? "#FFFFFF" : "#FF868E")};
  }

  @media (max-width: 768px) {
    padding: 5px 20px;
    width: ${(props) => props.selected && "100%"};
  }
`;
