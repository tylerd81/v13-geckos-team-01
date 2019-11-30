import React from "react";
import PropTypes from "prop-types";
import "./nutrition-table.css";

const NutritionTableHeading = ({
  tableHeading,
  headerClickHandler,
  tableKeys
}) => {
  return (
    <thead>
      <tr>
        {tableHeading.map((heading, index) => (
          <th
            className="nutrition-table-header"
            key={heading}
            onClick={() => headerClickHandler(tableKeys[index])}
          >
            {heading}
          </th>
        ))}
      </tr>
    </thead>
  );
};

NutritionTableHeading.propTypes = {
  tableHeading: PropTypes.array.isRequired
};

export default NutritionTableHeading;
