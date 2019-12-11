import React, { useState, useContext } from "react";

// Bootstrap imports
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Toast from "react-bootstrap/Toast";

// Search components
import SearchResults from "../Components/Search/SearchResults";
import { searchByTerm } from "../util/search";
import ListStatus from "../Components/Search/ListStatus";

// Context stuff
import itemListContext from "../context/itemListContext";

const AddItUp = props => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [itemList, setItemList] = useState([]); // a list of item Id's and names
  const [isToastShown, setIsToastShown] = useState(false);
  const [lastAddedItem, setLastAddedItem] = useState("");

  const searchTermChange = e => {
    setSearchTerm(e.target.value);
  };

  const searchForFood = async e => {
    // allow enter to start a search, but prevent the default of actually submitting the form
    e.preventDefault();
    if (searchTerm === "") {
      // display alert here
      return;
    }

    setIsLoading(true);
    const result = await searchByTerm(searchTerm);
    setIsLoading(false);
    setSearchResults(result);
    setSearchTerm("");
  };

  const addItem = item => {
    setItemList([...itemList, item]);
    setLastAddedItem(item.name);
    setIsToastShown(true);
  };

  const dismissToast = () => setIsToastShown(false);

  return (
    <React.Fragment>
      <Container className="mt-3 mb-3">
        <Form onSubmit={searchForFood}>
          <Form.Group>
            <Row className="p-0">
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Search for foods"
                  value={searchTerm}
                  onChange={searchTermChange}
                  style={{ fontSize: "1.5rem" }}
                />
              </Col>
              <Col sm={3}>
                <Button
                  type="button"
                  onClick={searchForFood}
                  block
                  style={{ fontSize: "1.5rem" }}
                >
                  Search
                </Button>
              </Col>
            </Row>
          </Form.Group>
        </Form>

        <ListStatus numItems={itemList.length} />
        <Row className="p-0">
          <Col sm={12}>
            <SearchResults
              isLoading={isLoading}
              searchResults={searchResults}
              addItem={addItem}
            />
          </Col>
        </Row>
      </Container>

      {isToastShown && (
        <Toast
          onClose={dismissToast}
          style={{ position: "fixed", bottom: 0, left: "10px", zIndex: 5 }}
          delay={2000}
          autohide
        >
          <Toast.Header>Item Added</Toast.Header>
          <Toast.Body>Added {lastAddedItem} to your list.</Toast.Body>
        </Toast>
      )}
    </React.Fragment>
  );
};

export default AddItUp;
