import {
  ADD_TO_LIST,
  CHANGE_TO_LIST,
  DELETE_TO_LIST,
} from "../action/actionType";

const initialState = {
  inputVal: "",   // Input框绑定的数值
  data: ["first item","second item"], // List循环列表
};

export default function reducer(state = initialState, action) {
  // 深拷贝
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case ADD_TO_LIST:
      newState.data.push(action.value);
      newState.inputVal = "";
      break;
    case CHANGE_TO_LIST:
      newState.inputVal = action.value;
      break;
    case DELETE_TO_LIST:
      newState.data.splice(action.index,1)
      break;
    default:
      break;
  }
  return newState;
}
