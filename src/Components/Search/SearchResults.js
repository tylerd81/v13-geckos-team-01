import React from "react";
import PropTypes from "prop-types";

// bootstrap imports
import ListGroup from "react-bootstrap/ListGroup";

// search component imports
import SearchResultItem from "./SearchResultItem";

const SearchResults = ({ searchResults, isLoading, addItem }) => {
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (typeof searchResults.foods === "undefined") {
    return <h2 className="text-center">Search for foods to add.</h2>;
  }
  const { foods } = searchResults;

  const searchResultItems = foods.map(item => (
    <SearchResultItem
      fdcId={item.fdcId}
      name={item.description}
      addItem={addItem}
      notes={item.additionalDescriptions}
      ingredients={item.ingredients}
    />
  ));

  return (
    <ListGroup>
      {searchResultItems.map((searchResultItem, i) => (
        <ListGroup.Item key={i}>{searchResultItem}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};

SearchResults.propTypes = {
  searchResults: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired
};

SearchResults.defaultProps = {
  isLoading: false
};

export default SearchResults;
