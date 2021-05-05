import React, { useState } from "react";
import styled from "styled-components";
import ReactDom from "react-dom";
import UploadPic from "../../images/upload.jpeg";
import UploadDarkMode from "../../images/uploadDarkMode.png";
import UploadStatus from "./UploadStatus"

import { useDropzone } from "react-dropzone";
import Btn from "../../components/Shared/Button"; 
import axios from "axios";
import { lightTheme } from "../../theme/theme";

const UploadModal = ({ open, onClose }) => {
  const [files, setFiles] = useState([]);
  const [hidden, setHidden] = useState(false);
  const [ uploadInProgress, setUploadInProgress ] = useState(false);
  const [ responseStatus, setResponseStatus ] = useState(0);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setResponseStatus(0)
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
        setHidden(true)
      );
    },
  });

  const images = files.map((file) => (
    <div key={file.name}>
      <Preview
        alt={file.name} 
        src={file.preview}
      />
    </div>
  ));


  const handleUpload = () => {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "x-api-key": "220e3104-105e-4131-96f6-194253068792",
      },
      onUploadProgress: progressEvent => {
        setUploadInProgress(true)
        console.log("Upload progress: " + Math.round(progressEvent.loaded / progressEvent.total * 100 ) + "%");
      }
    };
    let fd = new FormData();
    files.map((file) => {
      fd.append("file", file);
    });
    axios
      .post("https://api.thedogapi.com/v1/images/upload", fd, config)
      .then((response) => {
        setResponseStatus(response.status)
        setHidden(false);
        setFiles([]);
        setUploadInProgress(false);
      })
      .catch((error) => {
        setResponseStatus(400);
        setUploadInProgress(false);
        console.log(error);
      });
  };


  let message;
  if (files.length === 0 || responseStatus === 201) {
    message = "No item selected";
  } else {
    message = `Image File Name: ${files[0].name}`;
  }
  

  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <Overlay />
      <Section maxH100>
        <CloseBtn onClick={onClose}>
          <svg viewBox="0 0 18 18">
            <path d="M8.05691 8.99997L0.52832 1.47137L1.47113 0.528564L8.99972 8.05716L16.5283 0.528564L17.4711 1.47137L9.94253 8.99997L17.4711 16.5286L16.5283 17.4714L8.99972 9.94278L1.47113 17.4714L0.52832 16.5286L8.05691 8.99997Z"></path>
          </svg>
        </CloseBtn>

        <h1>Upload a .jpg or .png Dog Image</h1>
        <p>
          Any uploads must comply with the <a href="https://www.thedogapi.com/privacy" target="_blank" rel="noreferrer">
            upload guidelines </a> or face deletion.
        </p>


        <DropArea {...getRootProps()} responseStatus={responseStatus} >
          <div>
            <input {...getInputProps()} />
            <p hidden={hidden}>
              <span>Drag here</span> your file or <span>Click here</span> to
              upload
            </p>
            {images}
          </div>
        </DropArea>
        <p>{message}</p>

        { uploadInProgress && responseStatus === 0 ? (
          <Btn
          btnContent="Uploading" 
          uploading
          noHover
          />
        ) : (
          <Btn
          btnContent="Upload photo"
          hidden={ !hidden }
          resStatus={ responseStatus }
          onClick={ handleUpload }
          responseStatus={ responseStatus }
        />
        )}
        

      { responseStatus === 201 && <UploadStatus status="success" /> }
      { responseStatus === 400 && <UploadStatus status="failure" /> }
        
        

      </Section>
    </>,
    document.getElementById("portal")
  );
};

export default UploadModal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(29, 29, 29, 0.6);
  z-index: 1000;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Section = styled.section`
  position: fixed;
  left: 50%;
  top: 0%;
  background: ${(props) => props.theme.bgPopup};
  z-index: 1000;
  border-radius: 20px;
  width: 46%;
  padding: 1.8rem;
  margin: 20px 30px;
  height: 95%;

  @media (max-width: 768px) {
    left: 0%;
    right: 0%;
    width: 100%;
    height: 100vh;
    padding: 20px;
    margin: 0px;
    border-radius: 0px;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: ${(props) => props.theme.textPrim};
    @media (max-width: 768px) {
      font-size: 20px; 
      margin-bottom: 20px;
    }
  }

  p {
    font-size: 18px;
    line-height: 3;
    color: ${(props) => props.theme.textSec};
    display: ${(props) => props.hidden && "none"};

    @media (max-width: 768px) {
      line-height: 1.2;
      text-align:center;
      margin: 10px;
    }
  }

  a {
    color: #ff868e;
  }
`;

const DropArea = styled.div`
  min-height: 320px;
  width: 100%;
  margin: 30px 0px 10px 0px;
  border-radius: 20px;
  border: 2px dashed #fbe0dc;
  background-color: ${(props) => props.theme.bgDroparea};

  border: ${props => props.responseStatus === 400 && "2px dashed #FF868E"};
  background-color: ${props => props.responseStatus === 400 && "#FBE0DC"};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
      min-height: 170px;
    }

  div {
    background: url(${UploadPic}) no-repeat center;
    background: ${ props => props.theme !== lightTheme && `url(${UploadDarkMode})`}; 
    background-position: center;
    background-repeat: no-repeat;
    height: 200px;
    width: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      height: 100px;
      background-size: contain;
    }
  }

  p {
    font-size: 20px;
    color: ${(props) => props.theme.textSec};
    @media (max-width: 768px) {
      padding: 0px 4rem;
    }
  }

  span {
    color: ${(props) => props.theme.textPrim};
  }
`;

const CloseBtn = styled.button`
  position: absolute;
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

const Preview = styled.img`
  max-height: 280px;
  max-width: 550px;
  border-radius: 10px;
  object-fit: contain;
  
  @media (max-width: 768px) {
      max-height: 155px;
      max-width: 320px;
    }
`