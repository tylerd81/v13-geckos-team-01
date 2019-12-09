import React, { useState } from "react";

// Bootstrap imports
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Search components
import SearchResults from "../Components/SearchResults";

const AddItUp = props => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchTermChange = e => {
    setSearchTerm(e.target.value);
  };

  const searchForFood = () => {
    console.log(`Searching for ${searchTerm}.`);
  };

  return (
    <Container className="mt-2">
      <Form>
        <Form.Group>
          <Row>
            <Col sm={9}>
              <Form.Control
                type="text"
                placeholder="Search for foods"
                value={searchTerm}
                onChange={searchTermChange}
              />
            </Col>
            <Col sm={3}>
              <Button type="button" onClick={searchForFood}>
                Search
              </Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>

      <Row>
        <Col sm={12}>
          <SearchResults searchResults={searchResults} />
        </Col>
      </Row>
    </Container>
  );
};

export default AddItUp;
