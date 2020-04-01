import React from "react";
import styled from "styled-components";
import DoctorList from "./DoctorList";
import ResultNotFound from "./ResultNotFound";
import { connect } from "react-redux";
import { getDataSource } from "../../util/util";

const QueryResult = ({ selectedLocation }) => {
  const isEmptyTag = selectedLocation.length === 0 ? true : false;
  const dataSource = getDataSource();
  const filterredData = dataSource.filter(dataObject => {
    let isSelected = false;
    selectedLocation.forEach(location => {
      if (dataObject.ChiLocation === location) {
        isSelected = true;
      }
    });

    return isSelected;
  });
  const isEmptyCard = filterredData.length===0? true: false;

  return (
    <Wrapper>
      {!isEmptyTag && isEmptyCard ? (
        <ResultNotFound />
      ) : (
        <DoctorList selectedLocation={selectedLocation} />
      )}
      {isEmptyTag && isEmptyCard && <EmptySpace/>}
    </Wrapper>
  );
};

const EmptySpace = styled.div`
  height: 350px;
`

const Wrapper = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const mapStateToProps = state => ({
  selectedLocation: state.rootReducer.selectedLocation
});

export default connect(mapStateToProps)(QueryResult);