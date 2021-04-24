import React from 'react'
import styled from 'styled-components'
import ReactDom from 'react-dom'


const UploadModal = ({open, children, onClose}) => {
    if(!open) return null
    return ReactDom.createPortal(
        <>
            <Overlay />
            <Section maxH100>
                <button onClick={onClose}>Close</button>  
                {children}
            </Section>
        </>,
        document.getElementById('portal')
    )
}

export default UploadModal


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
`
const Section = styled.section`
    position: fixed;
    left: 50%;
    top: 0%;
    background: ${ props => props.theme.bgPopup}; 
    z-index: 1000;
    border-radius: 20px;
    width: 46%;
    padding: 1.8rem;
    margin: 20px 30px;
    height: 95%;

    display: flex;
    justify-content: center;
    align-items: center;
`


// rgba(29, 29, 29, 0.6)