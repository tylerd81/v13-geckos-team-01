import React from "react";

import { Container } from "react-bootstrap";

//import Components
import Title from "../Components/Title";
import Brand from "../Components/Brand";
import Logos from "../Components/Sample/Logos";
import Colors from "../Components/Sample/Colors";
import Typography from "../Components/Sample/Typography";
import Icons from "../Components/Sample/Icons";
import MainForm from "../Components/Sample/Form";

function ComponentIndex() {
  return (
    <Container fluid="true">
      <Title />
      <Brand />
      <Logos />
      <Colors />
      <Typography />
      <Icons />
      <MainForm />
    </Container>
  );
}

export default ComponentIndex;
