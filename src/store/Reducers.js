import S3MDataLoadFrame1 from "../components/S3MDataLoadFrame1";
import {
  ADD_PRODUCT,
  ADD_TAB,
  Edit_PRODUCT,
  REMOVE_TAB,
  Remove_PRODUCT,
  UPDATE_NAME_TAB,
  UPDATE_STATUS,
} from "./Constants";

const initState = {
  products: [{ id: 1, name: "Kien" }],
  tabable: [
    {
      label: "Frame1 1",
      children: <S3MDataLoadFrame1 data={"0"} />,
      key: "0",
      status: false,
    },
  ],
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
    case ADD_TAB:
      console.log("Xu ly add");
      console.log(action.payload);
      return {
        ...state,
        tabable: [...state.tabable, action.payload],
      };
    case REMOVE_TAB:
      console.log("remove");
      return {
        ...state,
        tabable: state.tabable.filter((a) => a.key != action.payload),
      };
    case UPDATE_STATUS:
      state.tabable.filter((a) => a.key == action.payload.key)[0].status =
        action.payload.status;
      return state;
    case UPDATE_NAME_TAB:
      state.tabable.filter((a) => a.key == action.payload.key)[0].label =
        action.payload.name;
      return state;
    default:
      return state;
  }
}
export { initState };
export default retucer;
