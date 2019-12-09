import React from "react";
import PropTypes from "prop-types";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import "./search-result.css";

const SearchResultItem = ({ fdcId, name, addItem, notes, ingredients }) => {
  const addItemClickHandler = () => addItem({ fdcId, name });

  // fix the names that are in all caps
  const fixedName =
    name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
  return (
    <Row className="m-0 p-0">
      <Col sm={9}>
        <h3 className="search-result-item">{fixedName}</h3>
        {notes && (
          <p className="text-secondary">
            <i>{notes}</i>
          </p>
        )}
        {ingredients && (
          <div className="mt-2 mb-2">
            {" "}
            <h4 style={{ textDecoration: "underline" }}>Ingredients:</h4>
            <p className="text-secondary">{ingredients}</p>
          </div>
        )}
      </Col>
      <Col sm={3}>
        <Button
          type="button"
          variant="outline-secondary"
          block
          onClick={addItemClickHandler}
        >
          Add
        </Button>
      </Col>
    </Row>
  );
};

SearchResultItem.propTypes = {
  fdcId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  addItem: PropTypes.func.isRequired,
  notes: PropTypes.string,
  ingredients: PropTypes.string
};

export default SearchResultItem;
