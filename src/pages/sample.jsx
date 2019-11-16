import React from 'react';

import { Container } from 'react-bootstrap'

//import components
import MainNavbar from '../components/MainNavbar'
import Title from '../components/Title'
import Brand from '../components/Brand'
import Logos from '../components/Sample/Logos'
import Colors from '../components/Sample/Colors'
import Typography from '../components/Sample/Typography'
import Icons from '../components/Sample/Icons'
import MainForm from '../components/Sample/Form'
import Footer from '../components/Footer'

function ComponentIndex() {
  return (
      <Container fluid="true">
          <MainNavbar/>
          <Title/>
          <Brand/>
          <br/>
          <Logos/>
          <br/>
          <Colors/>
          <br/>
          <Typography/>
          <br/>
          <Icons/>
          <br/>
          <MainForm/>
          <br/>
          <Footer/>
      </Container>
  );
}

export default ComponentIndex;
