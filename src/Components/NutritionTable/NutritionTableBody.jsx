import React from "react";
import PropTypes from "prop-types";

const NutritionTableBody = ({ tableKeys, tableData }) => {
  // tableData is the array of food items.

  // map through the tableData array and create table rows
  const tableRows = tableData.map(data => {
    // get the data using the tableKeys
    const tableItems = tableKeys.map((key, index) => {
      // this is looping through the keys and grabbing the
      // values from the data (the nutrient data)
      let tableItem;

      // check if this is a multi level key
      if (key.includes(".")) {
        let keys = key.split(".");
        let currObj = data;
        let unitName;

        // recursively nest into the object
        keys.forEach(nestedKey => {
          currObj = currObj[nestedKey];

          //check for a unitName
          if (typeof currObj.unitName !== "undefined") {
            unitName = currObj.unitName;
          }
        });
        tableItem = unitName ? currObj + " " + unitName : currObj;
      } else {
        // not a multi level key, just get the data
        tableItem = data[key];
      }
      return <td key={data.id + index}>{tableItem}</td>;
    });
    return <tr key={data.id}>{tableItems}</tr>;
  });
  return <tbody>{tableRows}</tbody>;
};

NutritionTableBody.propTypes = {
  tableKeys: PropTypes.array.isRequired,
  tableData: PropTypes.array.isRequired
};

export default NutritionTableBody;
