import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import NutritionTableHeading from "./NutritionTableHeading";
import NutritionTableBody from "./NutritionTableBody";

const NutritionTable = ({ nutritionData }) => {
  const tableStructure = [
    { title: "Item Name", key: "name" },
    { title: "Fat", key: "nutrients.fat.value" },
    { title: "Calories", key: "nutrients.calories.value" },
    { title: "Protein", key: "nutrients.protein.value" },
    { title: "Sodium", key: "nutrients.sodium.value" },
    { title: "Carbohydrates", key: "nutrients.carbohydrates.value" },
    { title: "", key: "remove" }
  ];

  const [orderBy, setOrderBy] = useState("name");
  const [sortDesc, setSortDesc] = useState(false);
  const [sortedNutritionData, setSortedNutritionData] = useState([]);
  const [lastSortedBy, setLastSortedBy] = useState("name");

  const changeSortOrder = sortOrder => {
    // if the same header is clicked twice in a row sort by descending
    if (lastSortedBy === sortOrder) {
      setSortDesc(true);
      setLastSortedBy(""); // clear the last sorted by so we can sort by ascending if we click a 3rd time.
    } else {
      setSortDesc(false);
      setLastSortedBy(sortOrder);
    }
    setOrderBy(sortOrder);
  };

  useEffect(() => {
    //sort the nutrition data based on the value in orderBy
    const comp = (a, b) => {
      const sortDir = sortDesc ? -1 : 1;
      let l, r;
      switch (orderBy) {
        case "name":
          l = a.name;
          r = b.name;
          break;
        case "nutrients.protein.value":
          l = a.nutrients.protein.value;
          r = b.nutrients.protein.value;
          break;
        case "nutrients.sodium.value":
          l = a.nutrients.sodium.value;
          r = b.nutrients.sodium.value;
          break;
        case "nutrients.calories.value":
          l = a.nutrients.calories.value;
          r = b.nutrients.calories.value;
          break;
        case "nutrients.fat.value":
          l = a.nutrients.fat.value;
          r = b.nutrients.fat.value;
          break;
        case "nutrients.carbohydrates.value":
          l = a.nutrients.carbohydrates.value;
          r = b.nutrients.carbohydrates.value;
          break;
        default:
          l = a.name;
          r = b.name;
      }
      if (l < r) return -1 * sortDir;
      if (l > r) return 1 * sortDir;
      if (r === l) return 0;
    };

    setSortedNutritionData([...nutritionData].sort(comp));
  }, [sortDesc, orderBy, nutritionData]);

  // needed for the first time the component is mounted - unsorted data
  useEffect(() => {
    setSortedNutritionData(nutritionData);
  }, []);

  if (nutritionData.length === 0) {
    return (
      <Container fluid>
        <h2 className="text-center m-2">
          Search for items and add them to your list to view them here.
        </h2>
      </Container>
    );
  }
  return (
    <Container fluid>
      <Table responsive striped bordered className="mt-2">
        <NutritionTableHeading
          tableHeading={tableStructure.map(heading => heading.title)}
          tableKeys={tableStructure.map(tableKey => tableKey.key)}
          headerClickHandler={changeSortOrder}
        />
        <NutritionTableBody
          tableKeys={tableStructure.map(tableKey => tableKey.key)}
          tableData={sortedNutritionData}
        />
      </Table>
    </Container>
  );
};

NutritionTable.propTypes = {
  nutritionData: PropTypes.array.isRequired
};

export default NutritionTable;
