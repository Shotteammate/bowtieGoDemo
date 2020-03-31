import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Description from "./components/Description";
import QuerySection from "./components/QuerySection";
import { getRegions, getNumberOfRegions, getLocations } from "./util/util";

const App = () => {
  const regions = getRegions();
  const numberOfRegions = getNumberOfRegions();
  const locations = getLocations();
  console.log("getRegions: ", regions);
  console.log("getNumberOfRegions: ", numberOfRegions);
  console.log("getLocations: ", locations);
  
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
