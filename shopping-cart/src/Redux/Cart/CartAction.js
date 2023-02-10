const addItem = (product) => {
  return {
    type: "ADD_ITEM",
    payload: product,
  };
};
const removeItem = (product) => {
  return {
    type: "REMOVE_ITEM",
    payload: product,
  };
};
const increaseItem = (product) => {
  return {
    type: "INCREASE_ITEM",
    payload: product,
  };
};
const decreaseItem = (product) => {
  return {
    type: "DECREASE_ITEM",
    payload: product,
  };
};
const Checkout = () => {
  return {
    type: "CHECKOUT",
  };
};
const clear = () => {
  return {
    type: "CLEAR",
  };
};
export { clear, Checkout, decreaseItem, increaseItem, addItem };
