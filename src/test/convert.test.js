import { convertApiDataToNutritionData } from "../Components/NutritionTable/convert";

import testData from "./testdata.json";

let data;

beforeEach(() => {
  data = convertApiDataToNutritionData(testData);
});

test("Test JSON data is loaded.", () => {
  expect(testData).toBeDefined();
});

test("convertApiDataToNutritionData() should return an array of 5 items.", () => {
  expect(data.length).toBe(5);
});

test("The converted objects should have a nutrients property", () => {
  data.forEach(item => {
    expect(item).toHaveProperty("nutrients");
  });
});

test("Each nutrients object should have a calories property.", () => {
  data.forEach(item => {
    const { nutrients } = item;
    expect(nutrients).toHaveProperty("calories");
  });
});

test("Each nutrients object should have a fat property.", () => {
  data.forEach(item => {
    const { nutrients } = item;
    expect(nutrients).toHaveProperty("fat");
  });
});

test("Each nutrients object should have a carbohydrates property.", () => {
  data.forEach(item => {
    const { nutrients } = item;
    expect(nutrients).toHaveProperty("carbohydrates");
  });
});

test("Each nutrients object should have a sodium property.", () => {
  data.forEach(item => {
    const { nutrients } = item;
    expect(nutrients).toHaveProperty("sodium");
  });
});
