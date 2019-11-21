import React from "react";
import PropTypes from "prop-types";

const NutritionTableHeading = ({ tableHeading }) => {
  return (
    <thead>
      <tr>
        {tableHeading.map(heading => (
          <th key={heading}>{heading}</th>
        ))}
      </tr>
    </thead>
  );
};

NutritionTableHeading.propTypes = {
  tableHeading: PropTypes.array.isRequired
};

export default NutritionTableHeading;
