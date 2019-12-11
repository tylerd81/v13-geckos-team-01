import React from "react";
import PropTypes from "prop-types";
import "./nutrition-table.css";

/*
  Props for NutritionTableHeading:
  
  tableHeading:
    an array of strings that will be the text for each table header
  
  tableKeys: 
    an array of strings that are used as the property name when setting the
    data for that column. An example is "nutrients.calories.value".
    The table will use the value of the property named nutrients.calories.value
    to set the data for that column.
  
  onClick: 
    a reference to a function for when the header is clicked. This is used for
    sorting the table based on the header that is clicked.        
*/
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
            data-testid={heading}
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
