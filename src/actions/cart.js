export const addPizza = (pizza) => ({
  type: "ADD_PIZZA",
  payload: pizza,
});

export const clearCart = () => ({
  type: "CLEAR_CART",
});

export const removeItem = (id) => ({
  type: "REMOVE_ITEM",
  payload: id,
});

export const plusItem = (id) => ({
  type: "PLUS_ITEM",
  payload: id,
});

export const minusItem = (id) => ({
  type: "MINUS_ITEM",
  payload: id,
});
