import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Tag from "./Tag";

const SelectedTags = ({ selectedLocation }) => {
  const tags = selectedLocation.map((location, index) => (
    <Tag key={index} location={location} />
  ));

  return <Wrapper>{tags}</Wrapper>;
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

const mapStateToProps = state => ({
  selectedLocation: state.rootReducer.selectedLocation
});

export default connect(mapStateToProps)(SelectedTags);