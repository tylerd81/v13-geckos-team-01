import React from 'react';
import { Container } from 'react-bootstrap'
import MainNavbar from '../components/MainNavbar'
import Footer from '../components/Footer'

function AddItUp() {
  return (
      <Container fluid="true">
          <MainNavbar/>
          <Footer/>
      </Container>
  );
}

export default AddItUp;
