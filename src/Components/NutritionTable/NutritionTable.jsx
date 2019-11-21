import React from "react";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import NutritionTableHeading from "./NutritionTableHeading";
import NutritionTableBody from "./NutritionTableBody";

const NutritionTable = ({ nutritionData }) => {
  // const data = [
  //   {
  //     name: "cheese",
  //     id: 65452,
  //     portion: { size: 10, unit: "g" },
  //     nutrients: {
  //       protein: { value: 12.333, unitName: "g" },
  //       calories: { value: 300, unitName: "kcal" },
  //       fat: { value: 15, unitName: "g" }
  //     }
  //   },
  //   {
  //     name: "Milk",
  //     id: 65453,
  //     portion: { size: 10, unit: "g" },
  //     nutrients: {
  //       protein: { value: 12.333, unitName: "g" },
  //       calories: { value: 300, unitName: "kcal" },
  //       fat: { value: 15, unitName: "g" }
  //     }
  //   }
  // ];

  const tableStructure = [
    { title: "Item Name", key: "name" },
    { title: "Fat", key: "nutrients.fat.value" },
    { title: "Calories", key: "nutrients.calories.value" },
    { title: "Protein", key: "nutrients.protein.value" },
    { title: "Carbohydrates", key: "nutrients.carbohydrates.value" }
  ];

  return (
    <Container fluid>
      <Table responsive striped bordered className="mt-2">
        <NutritionTableHeading
          tableHeading={tableStructure.map(heading => heading.title)}
        />
        <NutritionTableBody
          tableKeys={tableStructure.map(tableKey => tableKey.key)}
          tableData={nutritionData}
        />
      </Table>
    </Container>
  );
};

NutritionTable.propTypes = {
  nutritionData: PropTypes.array.isRequired
};

export default NutritionTable;
