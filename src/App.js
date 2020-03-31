import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ContentWrapper>
      <Navbar />
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export default App;
