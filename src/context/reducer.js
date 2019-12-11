import { ADD_ITEM, REMOVE_ITEM } from "./actions";

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

    case REMOVE_ITEM:
      console.log("Removing item");
      return state;
    default:
      return state;
  }
};
