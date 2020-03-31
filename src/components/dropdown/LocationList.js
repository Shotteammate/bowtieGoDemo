import React from "react";
import styled from "styled-components";
import { getLocations } from "../../util/util";
import LocationItem from "./LocationItem";

const LocationList = ({ region }) => {
  const locations = getLocations();
  const locationList = locations[region].map((location, index) => (
    <LocationItem key={index} location={location} />
  ));

  return <Wrapper>{locationList}</Wrapper>;
};

const Wrapper = styled.div`
  width: calc(100% - 14px);
  max-width: 180px;
  max-height: 200px;
  background-color: #d3d3d3;
  padding: 0 2px 0 14px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export default LocationList;