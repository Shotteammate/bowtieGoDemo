import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Description from "./components/Description";
import QuerySection from "./components/QuerySection";

function App() {
  return (
    <ContentWrapper>
      <Navbar />
      <Description />
      <QuerySection />
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export default App;
