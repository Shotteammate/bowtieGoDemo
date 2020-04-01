import React from "react";
import styled from "styled-components";
import DropDownList from "./dropdown/DropDownList";
import RegionsList from "../components/dropdown/RegionsList";
import SelectedTags from "../components/SelectedTags";
import QueryResult from "../components/QueryResult";
import { connect } from "react-redux";

const QuerySection = ({ selectedLocation }) => {
  const isEmptyTag = selectedLocation.length === 0 ? true : false;
  return (
    <Container>
      <SelectionButtons>
        <ButtonContainer>
          <DropDownList content="按地區搜索" regionsList={<RegionsList />} />
        </ButtonContainer>
      </SelectionButtons>
      <SelectionResult>
        {!isEmptyTag && (
          <TagsContainer>
            <SelectedTags />
          </TagsContainer>
        )}
        <ResultContainer>
          <QueryResult />
        </ResultContainer>
      </SelectionResult>
    </Container>
  );
};

const ResultContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const TagsContainer = styled.div`
  position: sticky;
  top: 86px;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: white;
`;

const SelectionResult = styled.div`
  width: 70%;
`;

const ButtonContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SelectionButtons = styled.div`
  width: 30%;
  height: 100%;
  position: sticky;
  top: 86px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const mapStateToProps = state => ({
  selectedLocation: state.rootReducer.selectedLocation
});

export default connect(mapStateToProps)(QuerySection);
