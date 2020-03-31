import React from "react";
import styled from "styled-components";
import DropDownList from "./dropdown/DropDownList";
import RegionsList from "../components/dropdown/RegionsList";

const QuerySection = () => {
  return (
    <Container>
      <SelectionButtons>
        <ButtonContainer>
          <DropDownList content="按地區搜索" regionsList={<RegionsList />} />
        </ButtonContainer>
      </SelectionButtons>
      <SelectionResult>
        <TagsContainer>tags</TagsContainer>
      </SelectionResult>
    </Container>
  );
};

const TagsContainer = styled.div`
  background-color: lightblue;
  position: sticky;
  top: 86px;
`;

const SelectionResult = styled.div`
  width: 70%;
  background-color: #d2d2d2;
  height: 2000px;
`;

const ButtonContainer = styled.div`
  width: 80%;
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SelectionButtons = styled.div`
  width: 30%;
  height: 100%;
  background-color: pink;
  position: sticky;
  top: 86px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: yellow;
  display: flex;
`;

export default QuerySection;
