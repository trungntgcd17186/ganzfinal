import * as actionType from "./cartType";

export const buyProduct = (product) => {
  return {
    type: actionType.BUY_PRODUCT,
    payload: product,
  };
};

export const deleteProduct = (product) => {
  return {
    type: actionType.DELETE_PRODUCT,
    payload: product,
  };
};
