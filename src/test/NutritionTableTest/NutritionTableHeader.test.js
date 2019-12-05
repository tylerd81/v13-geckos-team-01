import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NutritionTableHeader from "../../Components/NutritionTable/NutritionTableHeading";

test("renders", () => {
  const headers = ["One", "Two", "Three", "Four"];
  const keys = ["one", "two", "three", "four"];
  const clicked = () => null;

  const { asFragment } = render(
    <NutritionTableHeader
      tableHeading={headers}
      tableKeys={keys}
      headerClickHandler={clicked}
    />
  );

  expect(asFragment()).toMatchSnapshot();
});
