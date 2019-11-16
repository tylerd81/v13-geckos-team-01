import React from 'react';

import { Container } from 'react-bootstrap'

//import components
import MainNavbar from '../components/MainNavbar'
import Title from '../components/Title'
import Brand from '../components/Brand'
import Footer from '../components/Footer'

function Results() {
  return (
      <Container fluid="true">
          <MainNavbar/>
          <Title/>
          <Brand/>
          <Footer/>
      </Container>
  );
}

export default Results;
