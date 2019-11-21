import React from "react";
import { Container } from "react-bootstrap";
import NutritionTable from "../Components/NutritionTable/NutritionTable";
import testData from "../Components/NutritionTable/testdata.json";
import { convertApiDataToNutritionData } from "../Components/NutritionTable/convert";

function Results() {
  const nutritionData = convertApiDataToNutritionData(testData);

  return (
    <Container className="p-0" fluid="true">
      <NutritionTable nutritionData={nutritionData} />
    </Container>
  );
}

export default Results;
