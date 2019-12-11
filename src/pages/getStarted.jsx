import React from "react";
import { Container } from "react-bootstrap";
import MainNavbar from "../Components/MainNavbar";
import Title from "../Components/Title";
import Brand from "../Components/Brand";
import Footer from "../Components/Footer";

function GetStarted() {
  return (
    <Container fluid="true">
      <Title />
      <Brand />
    </Container>
  );
}

export default GetStarted;
