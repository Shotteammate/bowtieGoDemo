import React from "react";
import styled from "styled-components";

const Description = () => {
  return (
    <Container>
      <Caption>BowtieGo醫療網絡</Caption>
      <ContentContainer>
        <Content>
          <Title>請留意你的BowtieGo級別</Title>
          <Text>
            不同級別的BowtieGo，可享有不同醫療範疇的優惠。如欲查看你的BowtieGo屬哪項級別，請
            <LogIn>登入</LogIn>賬戶。
          </Text>
        </Content>
        <Content>
          <Title>請先預約</Title>
          <Text>部份診所可能較為繁忙。請先打電話預約，以確保求診成功。</Text>
        </Content>
        <Content>
          <Title>請留意收費內容</Title>
          <Text>
            以下列明的收費是BowtieGo專享的會員價，當中一般包含診症服務。部份診所，如中醫，會包含藥費
            (通常為2日 / 2包中藥)。
          </Text>
          <Text>額外的醫療開支，例如額外藥物或照X光等，均需以正價支付。</Text>
        </Content>
      </ContentContainer>
    </Container>
  );
};

const LogIn = styled.a`
  text-decoration: none;
  color: #ff0168;
  font-weight: 600;
  cursor: pointer;
`;

const Text = styled.div`
  line-height: 1.45;
  margin-bottom: 15px;
  font-size:15px;
  font-weight: 500;
`;

const Title = styled.div`
  padding-bottom: 5px;
  color: #ff0168;
  font-size: 25px;
  font-weight: 700;
`;

const Content = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Caption = styled.div`
  font-family: Poppins, sans-serif;
  font-size: 50px;
  font-weight: 600;
  margin: 20px auto;
`;

const Container = styled.div`
  width: 100%;
  margin: 86px 0 50px;;
  display: flex;
  flex-direction: column;
`;

export default Description;
