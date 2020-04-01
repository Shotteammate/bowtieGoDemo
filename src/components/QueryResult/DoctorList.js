import React from "react";
import styled from "styled-components";
import DoctorCard from "./DoctorCard";
import { getDataSource } from "../../util/util";

const DoctorList = ({ selectedLocation }) => {
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

  const doctorList = filterredData.map((doctorRecord, index) => (
    <DoctorCard key={index} doctorRecord={doctorRecord} />
  ));

  return <Wrapper>{doctorList}</Wrapper>;
};

const Wrapper = styled.div`
  width: 100%;
`;

export default DoctorList;