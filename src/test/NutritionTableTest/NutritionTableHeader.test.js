import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NutritionTableHeader from "../../Components/NutritionTable/NutritionTableHeading";

afterEach(cleanup);

const headers = ["One", "Two", "Three", "Four"];
const keys = ["one", "two", "three", "four"];
const clicked = () => null;

test("renders", () => {
  const { asFragment } = render(
    <NutritionTableHeader
      tableHeading={headers}
      tableKeys={keys}
      headerClickHandler={clicked}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

test("Each <th> should have the correct header", () => {
  const { getByTestId } = render(
    <NutritionTableHeader
      tableHeading={headers}
      tableKeys={keys}
      headerClickHandler={clicked}
    />
  );

  headers.forEach(headerText => {
    expect(getByTestId(headerText)).toHaveTextContent(headerText);
  });
});
