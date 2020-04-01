import React from "react";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { connect } from "react-redux";
import { removeLocation } from "../../actions/actions";

const Tag = ({ location, removeLocation }) => {
  const removeItemFromStore = () => {
    removeLocation(location);
  };

  return (
    <Button onClick={removeItemFromStore}>
      <CloseIcon />
      <Text>{location}</Text>
    </Button>
  );
};

const CloseIcon = styled(IoMdClose)`
  color: #ff0168;
  font-weight: 500;
  margin-left: 5px;
`;

const Text = styled.div`
  color: #ff0168;
  font-size: 14px;
  padding: 5px 10px 5px 5px;
  font-weight: 500;
`;
const Button = styled.div`
  border: 1px solid #ff0168;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0 5px;
`;

const mapDispatch = {
  removeLocation
};

export default connect(null, mapDispatch)(Tag);