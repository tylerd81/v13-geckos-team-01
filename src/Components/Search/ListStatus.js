import React from "react";
import PropTypes from "prop-types";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./search-result.css";

const ListStatus = ({ numItems }) => {
  return (
    <Row className="p-0">
      <Col sm={12}>
        <p className="item-list-count text-right">
          There are <span className="text-primary">{numItems}</span> items in
          your list.
        </p>
      </Col>
    </Row>
  );
};

ListStatus.propTypes = {
  numItems: PropTypes.number.isRequired
};

ListStatus.defaultProps = {
  numItems: 0
};

export default ListStatus;
