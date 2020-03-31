import React from "react";
import styled from "styled-components";
import { getRegions } from "../../util/util";
import DropDownSubButton from "./DropDownSubButton";

const RegionsList = () => {
  const regions = getRegions();
  const regionButtons = regions.map((region, index) => (
    <DropDownSubButton key={index} region={region} index={index} />
  ));

  return <Wrapper>{regionButtons}</Wrapper>;
};

const Wrapper = styled.div`
  width: 100%;
`;

export default RegionsList;