import React from "react";
import styled from "styled-components";
import {
  BOWTIE_ABOUT,
  ENG_PAGE,
  LOGIN_PAGE,
  HOME_PAGE
} from "../../constants/constants";

const Navbar = () => {
  return (
    <ContentWrapper>
      <NavBar>
        <LogoLink href={HOME_PAGE}>
          <Logo
            src="https://uploads-ssl.webflow.com/5e1d3636c609362181f49ddf/5e1d3636c609365c0df49e3f_bowtie-go-logo.png"
            alt="bowtie"
          />
        </LogoLink>
        <ButtonList>
          <AboutBtn>
            <AboutLink href={BOWTIE_ABOUT}>關於Bowtie</AboutLink>
          </AboutBtn>
          <EnBtn>
            <EnLink href={ENG_PAGE}>EN</EnLink>
          </EnBtn>
          <LoginBtn>
            <LoginLink href={LOGIN_PAGE}>登入</LoginLink>
          </LoginBtn>
        </ButtonList>
      </NavBar>
    </ContentWrapper>
  );
};

const LogoLink = styled.a`
  cursor: pointer;
`;

const LoginBtn = styled.li`
  margin: 0 10px;
  display: flex;
  align-items: center;
  border: 2px solid #ff0168;
  border-radius: 20px;
`;

const LoginLink = styled.a`
  text-decoration: none;
  color: #ff0168;
  font-weight: 600;
  cursor: pointer;
  font-size: 15px;
  padding: 8px 20px;
`;

const EnBtn = styled.li`
  display: flex;
  align-items: center;
  margin: 0 10px;
  border: 1px solid grey;
  border-radius: 17px;
`;

const EnLink = styled.a`
  text-decoration: none;
  color: #1d1f45;
  font-weight: 600;
  cursor: pointer;
  font-size: 15px;
  padding: 10px;
`;

const AboutLink = styled.a`
  text-decoration: none;
  color: #1d1f45;
  font-weight: 600;
  cursor: pointer;
  font-size: 15px;
`;

const AboutBtn = styled.li`
  margin: 0 10px;
  display: flex;
  align-items: center;
`;

const ButtonList = styled.ul`
  display: flex;
  list-style: none;
`;

const Logo = styled.img`
  width: 176px;
  height: 50px;
`;

const NavBar = styled.div`
  height: 86px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
  max-width: 1021px;
  background-color: white;
  z-index: 1;
`;

const ContentWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

export default Navbar;
