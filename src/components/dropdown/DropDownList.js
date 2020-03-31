import React, { useState } from "react";
import styled from "styled-components";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const DropDownList = ({ content, regionsList }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDropdownList = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Wrapper>
      <Button
        className={isExpanded ? "expanded" : ""}
        onClick={toggleDropdownList}
      >
        <Content>
          <Text>{content}</Text>
          {isExpanded ? <DownArrow /> : <UpArrow />}
        </Content>
      </Button>
      {isExpanded ? regionsList : null}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto 20px;
`;

const Text = styled.div`
  font-size: 15px;
  font-weight: 500;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UpArrow = styled(AiFillCaretUp)`
  color: #ff0168;
`;

const DownArrow = styled(AiFillCaretDown)`
  color: #ff0168;
`;

const Button = styled.div`
  padding: 14px;
  background-color: #eef1f9;
  border-radius: 5px;
  max-width: 180px;

  &.expanded {
    border-radius: 5px 5px 0 0;
  }
`;

export default DropDownList;
