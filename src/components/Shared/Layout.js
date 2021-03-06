import React from "react";
import styled from "styled-components";

const Layout = ({ children, flex, flexCol, maxH100, uploadOpen, h100 }) => {
  return (
    <Section
      flex={flex}
      flexCol={flexCol}
      maxH100={maxH100}
      h100={h100}
      uploadOpen={uploadOpen}
    >
      {children}
    </Section>
  );
};

export default Layout;

const Section = styled.section`
  background: ${(props) => props.theme.bgMain};
  height: auto;
  min-height: 100vh;
  max-height: ${(props) => props.maxH100 && "100vh"};
  height: ${(props) => props.maxH100 && "100vh"};

  height: ${(props) => props.h100 && "100px"};
  height: ${(props) => props.uploadOpen && "80vh"};
  overflow: ${(props) => props.uploadOpen && "hidden"};

  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  flex-direction: ${(props) => (props.flexCol ? "column" : "row")};
`;
