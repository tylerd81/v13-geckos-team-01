import React from "react";
import { Container } from "react-bootstrap";
import NutritionTable from "../Components/NutritionTable/NutritionTable";

import { nutritionData } from "../Components/NutritionTable/testdata";

function Results() {
  return (
    <Container className="p-0" fluid="true">
      <NutritionTable nutritionData={nutritionData} />
    </Container>
  );
}

export default Results;
