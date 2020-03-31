import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Description from "./components/Description";
import QuerySection from "./components/QuerySection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <ContentWrapper>
        <Navbar />
        <Description />
        <QuerySection />
      </ContentWrapper>
      <Footer />
    </>
  );
};

const ContentWrapper = styled.div`
  max-width: 1021px;
  margin: 0 auto;
`;

export default App;
