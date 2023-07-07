import { ADD_PRODUCT, Edit_PRODUCT, Remove_PRODUCT } from "./Constants";

export const addProduct = (payload) => ({
  type: ADD_PRODUCT,
  payload,
});
export const removeProduct = (payload) => ({
  type: Remove_PRODUCT,
  payload,
});
export const editProduct = (payload) => ({
  type: Edit_PRODUCT,
  payload,
});
