import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Description from "./components/Description";
import QuerySection from "./components/QuerySection";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <ContentWrapper>
        <Navbar />
        <Description />
        <QuerySection />
      </ContentWrapper>
      <Footer />
    </Provider>
  );
};

const ContentWrapper = styled.div`
  max-width: 1021px;
  margin: 0 auto;
`;

export default App;
