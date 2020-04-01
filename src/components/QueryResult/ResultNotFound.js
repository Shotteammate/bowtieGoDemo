import React from "react";
import styled from "styled-components";

const ResultNotFound = () => {
  return <Container>沒有符合條件的醫生<EmptySpace/></Container>;
};

const EmptySpace = styled.div`
  height: 350px;
`

const Container = styled.div`
  font-family: "Noto Sans TC", sans-serif;
  color: #1d1f45;
  font-size: 15px;
  line-height: 1.45;
  font-weight: 500;
  margin-top: -20px;
`;

export default ResultNotFound;
