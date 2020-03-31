import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import LocationList from "./LocationList";
import { getNumberOfRegions } from "../../util/util";

const DropDownSubButton = ({ region, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const numberOfRegions = getNumberOfRegions();
  const isLastBtn = numberOfRegions - 1 === index ? true : false;
  const toggleList = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <Button className={isLastBtn && !isExpanded ? "lastBtn" : ""} onClick={toggleList}>
        <Content>
          <Text>{region}</Text>
          {isExpanded ? <FaChevronDown /> : <FaChevronUp />}
        </Content>
      </Button>
      {isExpanded && <LocationList region={region} />}
    </>
  );
};

const Text = styled.div`
  font-size: 14px;
  font-weight: 400;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.div`
  padding: 14px;
  background-color: #f7f8fb;
  max-width: 180px;

  &.lastBtn{
    border-radius: 0 0 5px 5px;
  }
`;

export default DropDownSubButton;
