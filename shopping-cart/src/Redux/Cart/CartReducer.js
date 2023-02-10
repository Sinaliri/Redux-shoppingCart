const initialstate = {
  selecteditems: [],
  itemcounter: 0,
  total: 0,
  checkout: false,
};
const sumItems = (items) => {
  const itemcounter = items.reduce(
    (total, product) => total + product.quantity,
    0
  );
  let total = items
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { total, itemcounter };
};
const CartReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selecteditems.find((item) => item.id === action.payload.id)) {
        state.selecteditems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        selecteditems: [...state.selecteditems],
        ...sumItems(state.selecteditems),
        checkout: false,
      };
    case "REMOVE_ITEM": {
      const newSELECTEDITEMS = state.selecteditems.filter(
        (item) => item.id === action.payload.id
      );

      return {
        ...state,
        selecteditems: [...newSELECTEDITEMS],
        ...sumItems(newSELECTEDITEMS),
      };
    }
    case "INCREASE_ITEM": {
      const IndexI = state.selecteditems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selecteditems[IndexI].quantity++;
      return {
        ...state,
        ...sumItems(state.selecteditems),
      };
    }
    case "DECREASE_ITEM": {
      const IndexI = state.selecteditems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selecteditems[IndexI].quantity--;
      return {
        ...state,
        ...sumItems(state.selecteditems),
      };
    }
    case "CHECKOUT":
        return{
        selecteditems: [],
        itemcounter: 0,
        total: 0,
        checkout: true,
      };
    case "CLEAR":
        return{
        selecteditems: [],
        itemcounter: 0,
        total: 0,
        checkout: false,
      };
      default:
        return state;
  }
};
export default CartReducer;