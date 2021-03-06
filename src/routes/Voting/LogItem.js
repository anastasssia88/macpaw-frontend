import React from "react";
import styled from "styled-components";

const LogItem = ({ id, content, type, time }) => {
  let path;
  let viewBox;
  if (type === "like") {
    path = (
      <path
        d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM9.2 16.6L9.8 17.4C12.4 20.8667 17.6 20.8667 20.2 17.4L20.8 16.6L22.4 17.8L21.8 18.6C18.4 23.1333 11.6 23.1333 8.2 18.6L7.6 17.8L9.2 16.6Z"
        fill="#97EAB9"
      ></path>
    );
    viewBox = "0 0 30 30";
  } else if (type === "dis") {
    path = (
      <path
        d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM7.6 20.2L8.2 19.4C11.6 14.8667 18.4 14.8667 21.8 19.4L22.4 20.2L20.8 21.4L20.2 20.6C17.6 17.1333 12.4 17.1333 9.8 20.6L9.2 21.4L7.6 20.2Z"
        fill="#FFD280"
      ></path>
    );
    viewBox = "0 0 30 30";
  } else if (type === "fav") {
    path = (
      <path
        d="M8.07107 2C4.71811 2 2 4.71811 2 8.07107C2 9.68122 2.63963 11.2254 3.77817 12.364L15 23.5858L26.2218 12.364C27.3604 11.2254 28 9.68121 28 8.07107C28 4.71811 25.2819 2 21.9289 2C20.3188 2 18.7746 2.63963 17.636 3.77817L15.7071 5.70711C15.3166 6.09763 14.6834 6.09763 14.2929 5.70711L12.364 3.77818C11.2254 2.63963 9.68121 2 8.07107 2ZM0 8.07107C0 3.61354 3.61354 0 8.07107 0C10.2116 0 12.2646 0.850343 13.7782 2.36396L15 3.58579L16.2218 2.36396C17.7354 0.850341 19.7884 0 21.9289 0C26.3865 0 30 3.61354 30 8.07107C30 10.2116 29.1497 12.2646 27.636 13.7782L15.7071 25.7071C15.3166 26.0976 14.6834 26.0976 14.2929 25.7071L2.36396 13.7782C0.850339 12.2646 0 10.2116 0 8.07107Z"
        fill="#FF868E"
      ></path>
    );
    viewBox = "0 0 30 26";
  }

  return (
    <Wrapper>
      <Time>{time}</Time>
      <p>
        Image ID: <span>{id}</span> {content}
      </p>
      <SVG viewBox={viewBox}>{path}</SVG>
    </Wrapper>
  );
};

export default LogItem;

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.bgSort};
  width: 100%;
  height: 60px;
  border-radius: 10px;
  padding: 0px 20px;
  margin: 10px 0px;

  display: grid;
  grid-template-columns: auto 3fr auto;
  grid-template-rows: auto;
  grid-template-areas: "time content icon";
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    height: 130px;
    padding: 10px 20px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      "time icon"
      "content content";
  }

  p {
    color: ${(props) => props.theme.textSec};
    grid-area: content;
    line-height: 1.5;

    span {
      color: ${(props) => props.theme.textPrim};
      font-weight: 500;
    }
  }
`;

const Time = styled.span`
  grid-area: time;
  background-color: ${(props) => props.theme.bgGaleryFilters};
  color: ${(props) => props.theme.textPrim};
  width: auto;
  height: 30px;
  border-radius: 5px;
  padding: 0px 10px;
  margin-right: 25px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SVG = styled.svg`
  grid-area: icon;
  fill: #97eab9;
  fill: ${(props) => props.fav && "#FF868E"};
  fill: ${(props) => props.dis && "#FFD280"};

  justify-self: flex-end;
  width: 20px;
  height: auto;
`;
