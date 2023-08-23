import {
  ADD_PRODUCT,
  ADD_TAB,
  Edit_PRODUCT,
  REMOVE_TAB,
  Remove_PRODUCT,
  UPDATE_NAME_TAB,
  UPDATE_STATUS,
} from "./Constants";

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
export const addtab = (payload) => ({
  type: ADD_TAB,
  payload,
});
export const removetab = (payload) => ({
  type: REMOVE_TAB,
  payload,
});
export const updatestatus = (payload) => ({
  type: UPDATE_STATUS,
  payload,
});
export const updatenametab = (payload) => ({
  type: UPDATE_NAME_TAB,
  payload,
});
