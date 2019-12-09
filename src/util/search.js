import axios from "axios";

const API_KEY = "GumVRHJ5TxfrJCvi8KoU08ZShf8aXm1FKsyhuivS";

export async function searchByTerm(searchTerm) {
  const API_FOOD_SEARCH_URL = `https://cors-anywhere.herokuapp.com/https://api.nal.usda.gov/fdc/v1/search?api_key=${API_KEY}`;

  // this will return the ID of each food item that matches the search term\
  try {
    const result = await axios.post(API_FOOD_SEARCH_URL, {
      generalSearchInput: searchTerm
    });

    // console.table(result);
    return result.data;
  } catch (error) {
    console.log(error);
    return { msg: error.toString() };
  }

  // return  {
  //   foods: [
  //     {fdcId:12345, description: "Banana"},
  //     {fdcId:12345, description: "Banana"},
  //     {fdcId:12345, description: "Banana"},
  //     {fdcId:12345, description: "Banana"},
  //     {fdcId:12345, description: "Banana"},
  //   ]
  // };
}

export async function getFoodDetails(foodId) {
  const API_FOOD_DETAILS_URL = `https://api.nal.usda.gov/fdc/v1/${foodId}?api_key=${API_KEY}`;
}
