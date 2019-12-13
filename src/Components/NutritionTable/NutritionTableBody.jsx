import React, { useContext } from "react";
import PropTypes from "prop-types";
import itemListContext from "../../context/itemListContext";

import "./nutrition-table.css";

const NutritionTableBody = ({ tableKeys, tableData }) => {
  const { removeItem } = useContext(itemListContext);

  // tableData is the array of food items.
  if (tableData.length === 0) {
    return (
      <tbody>
        <tr>
          <td>
            <h2>Loading....</h2>
          </td>
        </tr>
      </tbody>
    );
  }
  // map through the tableData array and create table rows
  const tableRows = tableData.map((data, dataIndex) => {
    // get the data using the tableKeys
    const tableItems = tableKeys.map((key, index) => {
      if (key === "remove") {
        return (
          <td key={index} className="remove-icon">
            <i className="material-icons" onClick={() => removeItem(dataIndex)}>
              delete_forever
            </i>
          </td>
        );
      }
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
          if (currObj.hasOwnProperty(nestedKey)) {
            currObj = currObj[nestedKey];

<<<<<<< HEAD
          if (typeof currObj === "undefined") {
            return;
          }
          //check for a unitName
          if (typeof currObj.unitName !== "undefined") {
            unitName = currObj.unitName;
=======
            //check for a unitName
            if (typeof currObj.unitName !== "undefined") {
              unitName = currObj.unitName;
            }
>>>>>>> 3d2a267112c78ceba0a6d115542beb4727426bdb
          }
        });

        currObj = currObj ? currObj.toString() : "Missing Value";
        unitName = unitName ? unitName.toString() : "Missing Value";
        tableItem = unitName ? currObj + " " + unitName : currObj;
      } else {
        // not a multi level key, just get the data
        tableItem = data[key];
      }
      return <td key={index}>{tableItem}</td>;
    });
    return <tr key={dataIndex}>{tableItems}</tr>;
  });
  return <tbody>{tableRows}</tbody>;
};

NutritionTableBody.propTypes = {
  tableKeys: PropTypes.array.isRequired,
  tableData: PropTypes.array.isRequired
};

export default NutritionTableBody;
