import React, { useReducer } from "react";

import ItemListContext from "./itemListContext";
import itemReducer from "./reducer";
import {
  ADD_ITEM,
  REMOVE_ITEM,
  SET_LAST_ITEM_ADDED,
  SHOW_TOAST,
  HIDE_TOAST
} from "./actions";

import { getFoodDetails } from "../util/search";

const ItemListState = props => {
  const initialState = {
    itemList: [],
    lastItemAdded: "",
    isToastShown: false
  };
  const [state, dispatch] = useReducer(itemReducer, initialState);

  const addItem = async item => {
    const itemData = await getFoodDetails(item.fdcId);
    dispatch({ type: ADD_ITEM, payload: itemData });
    setLastItemAdded(item.name);
    showToast();
  };

  const setLastItemAdded = itemName => {
    dispatch({ type: SET_LAST_ITEM_ADDED, payload: itemName });
  };

  const removeItem = index => {
    console.log(`Removing item ${state.itemList[index]}`);
    dispatch({ type: REMOVE_ITEM, payload: index });
  };

  const showToast = () => dispatch({ type: SHOW_TOAST });
  const hideToast = () => dispatch({ type: HIDE_TOAST });

  return (
    <ItemListContext.Provider
      value={{
        itemList: state.itemList,
        lastItemAdded: state.lastItemAdded,
        isToastShown: state.isToastShown,
        addItem,
        removeItem,
        showToast,
        hideToast
      }}
    >
      {props.children}
    </ItemListContext.Provider>
  );
};

export default ItemListState;
