import React from "react";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

const NutritionTable = ({ nutritionData }) => {
  const nutritionItems = nutritionData.map(item => {
    const { nutrients } = item;
    const nutrientValues = [];

    // convert the nutrient data into a dictionary which
    // uses the nutrient names as the keys
    for (let i = 0; i < nutrients.length; i++) {
      const { name, unitName, amount } = nutrients[i];
      nutrientValues[name] = `${amount}${unitName}`;
    }

    return (
      <tr key={item.itemName}>
        <td>{item.itemName}</td>
        <td>{nutrientValues["Calories"]}</td>
        <td>{nutrientValues["Fat"]}</td>
        <td>{nutrientValues["Cholesterol"]}</td>
        <td>{nutrientValues["Sodium"]}</td>
        <td>{nutrientValues["Carbohydrates"]}</td>
        <td>{nutrientValues["Protein"]}</td>
        <td>{nutrientValues["Sugars"]}</td>
        <td>{nutrientValues["Fiber"]}</td>
      </tr>
    );
  });

  return (
    <Container fluid>
      <Table responsive striped bordered className="mt-2">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Calories</th>
            <th>Total Fat</th>
            <th>Cholesterol</th>
            <th>Sodium</th>
            <th>Carbohydrates</th>
            <th>Protein</th>
            <th>Sugars</th>
            <th>Fiber</th>
          </tr>
        </thead>

        <tbody>{nutritionItems}</tbody>
      </Table>
    </Container>
  );
};

NutritionTable.propTypes = {
  nutritionData: PropTypes.array.isRequired
};

export default NutritionTable;
