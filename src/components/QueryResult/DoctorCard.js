import React from "react";
import styled from "styled-components";
import { FaMapMarkerAlt } from "react-icons/fa";

const DoctorCard = ({ doctorRecord }) => {
  const name = doctorRecord.ChiName;
  const address = doctorRecord.ChiAddress2;
  const telephone = doctorRecord.Telephone1;
  const openingHour1 =
    doctorRecord["Day Seq 1"] + ": " + doctorRecord["Day Seq 1 time"];
  const openingHour2 =
    doctorRecord["Day Seq 2"] + ": " + doctorRecord["Day Seq 2 time"];
  const openingHour3 =
    doctorRecord["Day Seq 3"] + ": " + doctorRecord["Day Seq 3 time"];
  const openingHour4 =
    doctorRecord["Day Seq 4"] + ": " + doctorRecord["Day Seq 4 time"];
  const price = "診金: $" + doctorRecord.Price;

  return (
    <Wrapper>
      <Content>
        <DoctorName>{name}</DoctorName>
        <AddressRow>
          <MapMarkerIcon />
          <Address>{address}</Address>
        </AddressRow>
        <InfoWrapper>
          <Info>{telephone}</Info>
          {openingHour1 !== ": " && <Info>{openingHour1}</Info>}
          {openingHour2 !== ": " && <Info>{openingHour2}</Info>}
          {openingHour3 !== ": " && <Info>{openingHour3}</Info>}
          {openingHour4 !== ": " && <Info>{openingHour4}</Info>}
          <Price>{price}</Price>
        </InfoWrapper>
      </Content>
    </Wrapper>
  );
};

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Info = styled.div`
  font-size: 14px;
  color: grey;
  margin: 3px 0;
  font-weight: 600;
`;

const Price = styled(Info)`
  margin: 3px 0 15px;
`;

const MapMarkerIcon = styled(FaMapMarkerAlt)`
  color: #ff0168;
`;

const Address = styled.div`
  font-size: 16px;
  color: black;
  font-weight: 500;
`;

const AddressRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
const DoctorName = styled.div`
  font-size: 18px;
  color: black;
  margin: 20px 0 10px;
  font-weight: 600;
`;
const Wrapper = styled.div`
  width: 100%;
  border-top: 1px solid #d0d0da;
`;

export default DoctorCard;
