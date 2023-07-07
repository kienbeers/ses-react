import { ADD_PRODUCT, Edit_PRODUCT, Remove_PRODUCT } from "./Constants";

const initState = {
  products: [{ id: 1, name: "Kien" }],
};

function retucer(state, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      console.log("Xu ly add");
      return { ...state, products: [...state.products, action.payload] };
    case Remove_PRODUCT:
      console.log("remove");
      return {
        ...state,
        products: state.products.filter((a) => a.id != action.payload.id),
      };
    case Edit_PRODUCT:
      state.products.filter((a) => a.id == action.payload.id)[0].name =
        action.payload.name;
      return state;
    default:
      return state;
  }
}
export { initState };
export default retucer;
