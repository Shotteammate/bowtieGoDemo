import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { addLocation } from "../../actions/actions"

const LocationItem = ({ location, addLocation, selectedLocation }) => {
  const addItemToStore = () => {
    if (!selectedLocation.includes(location)) {
      addLocation(location);
    }
  };

  return (
    <Item onClick={addItemToStore}>
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
  cursor: pointer;
`;

const mapStateToProps = state => ({
  selectedLocation: state.rootReducer.selectedLocation
});

const mapDispatch = {
  addLocation
};

export default connect(mapStateToProps, mapDispatch)(LocationItem);