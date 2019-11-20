import React from "react";
import { Container } from "react-bootstrap";
import Title from "../Components/Title";
import Brand from "../Components/Brand";

function GetStarted() {
  return (
    <Container className="p-0" fluid="true">
      <Title />
      <Brand />
    </Container>
  );
}

export default GetStarted;
