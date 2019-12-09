import React from "react";
import PropTypes from "prop-types";

const SearchResults = ({ searchResults }) => {
  return (
    <div>
      <h2>Here are the results...</h2>
    </div>
  );
};

SearchResults.propTypes = {
  searchResults: PropTypes.array.isRequired
};

export default SearchResults;
