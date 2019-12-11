import React, { useReducer } from "react";
import axios from "axios";

import ItemListContext from "./itemListContext";
import itemReducer from "./reducer";
import { ADD_ITEM, REMOVE_ITEM } from "./actions";

import { getFoodDetails } from "../util/search";

const ItemListState = props => {
  const initialState = {
    itemList: []
  };
  const [state, dispatch] = useReducer(itemReducer, initialState);

  const addItem = async item => {
    const itemData = await getFoodDetails(item.fdcId);
    dispatch({ type: ADD_ITEM, payload: itemData });
  };

  const removeItem = index => {
    console.log(`Removing item ${state.itemList[index]}`);
    dispatch({ type: REMOVE_ITEM, payload: index });
  };

  return (
    <ItemListContext.Provider
      value={{
        itemList: state.itemList,
        addItem,
        removeItem
      }}
    >
      {props.children}
    </ItemListContext.Provider>
  );
};

export default ItemListState;
