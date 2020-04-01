import React from 'react'
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Content>Footer</Content>
    </Container>
  )
}

const Content = styled.div`
  color: white;
  font-family: Poppins, sans-serif;
  font-size: 50px;
  font-weight: 600;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #1d1f45;
  width: 100%;
  height:400px;
`

export default Footer
