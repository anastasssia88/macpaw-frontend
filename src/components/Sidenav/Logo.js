import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import logoDarkMode from "../../images/logoDarkMode.svg";
import { lightTheme } from "../../theme/theme";


const Logo = ({ theme }) => {
    return (
        <Link to="/"> 
            { theme === lightTheme ? (
                    <Img src={logo} alt="pets paw" />
                ) : (
                    <Img src={logoDarkMode} alt="pets paw" />
                ) }
        </Link>
    )
}

export default Logo

const Img = styled.img`
  width: 7rem;
  height: auto;
`;