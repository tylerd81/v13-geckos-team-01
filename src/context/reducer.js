import {
  ADD_ITEM,
  REMOVE_ITEM,
  SET_LAST_ITEM_ADDED,
  SHOW_TOAST,
  HIDE_TOAST
} from "./actions";

export default (state, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const { itemList } = state;
      console.log("adding item");
      return {
        ...state,
        itemList: [...itemList, action.payload]
      };
    }

    case SET_LAST_ITEM_ADDED:
      return {
        ...state,
        lastItemAdded: action.payload
      };

    case SHOW_TOAST:
      return {
        ...state,
        isToastShown: true
      };

    case HIDE_TOAST:
      return {
        ...state,
        isToastShown: false
      };
    case REMOVE_ITEM:
      console.log("Removing item");
      return state;
    default:
      return state;
  }
};
