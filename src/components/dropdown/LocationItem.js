import React from "react";
import styled from "styled-components";

const LocationItem = ({ location }) => {
  return (
    <Item>
      <Text>{location}</Text>
    </Item>
  );
};

const Text = styled.div`
  color: #ff0168;
  font-size: 14px;
  font-weight: 500;
`;

const Item = styled.div`
  width: calc(100% - 14px);
  padding: 14px 0;
  max-width: 180px;
  margin: 0;
`;

export default LocationItem;