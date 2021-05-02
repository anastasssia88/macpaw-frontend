import React from 'react'
import styled from "styled-components";

const UploadStatus = ({ status }) => {
    let path
    let content
    if(status === "success") {
        path = <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM10 1.33333C5.21353 1.33333 1.33333 5.21353 1.33333 10C1.33333 14.7865 5.21353 18.6667 10 18.6667C14.7865 18.6667 18.6667 14.7865 18.6667 10C18.6667 5.21353 14.7865 1.33333 10 1.33333ZM15.1872 7.08313L9.42904 14.2809L4.90654 10.5121L5.76012 9.48785L9.23763 12.3858L14.1461 6.2502L15.1872 7.08313Z" fill="#97EAB9"/> 
        content = "Thanks for the Upload - Dog found!"
    } else {
        path = <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM10 1.33333C5.21353 1.33333 1.33333 5.21353 1.33333 10C1.33333 14.7865 5.21353 18.6667 10 18.6667C14.7865 18.6667 18.6667 14.7865 18.6667 10C18.6667 5.21353 14.7865 1.33333 10 1.33333ZM9.05719 10L5.5286 6.4714L6.4714 5.5286L10 9.05719L13.5286 5.5286L14.4714 6.4714L10.9428 10L14.4714 13.5286L13.5286 14.4714L10 10.9428L6.4714 14.4714L5.5286 13.5286L9.05719 10Z" fill="#FF868E"/>
        content = "No Dog found - try a different one"
    }
    return (
        <Wrapper>
            <SVG viewBox="0 0 20 20">{path}</SVG>
            <p>{ content }</p>
        </Wrapper>
    )
}

export default UploadStatus

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.bgBox};
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
        font-size: 16px;
        margin-left: 10px;
    }

`;


const SVG = styled.svg`
  fill: #97eab9;
  fill: ${(props) => props.fav && "#FF868E"};
  fill: ${(props) => props.dis && "#FFD280"};

  justify-self: flex-end;
  width: 20px;
  height: auto;
`;
