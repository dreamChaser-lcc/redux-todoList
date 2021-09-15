import {
  ADD_TO_LIST,
  CHANGE_TO_LIST,
  DELETE_TO_LIST,
} from "./actionType";

/**
 * actions 
 * 执行的行为
 */
export const CHANGE_DISPATCH = (value)=>{
  return {
    type:CHANGE_TO_LIST,
    value,
  }
} 
export const ADD_DISPATCH = (value)=>{
  return {
    type:ADD_TO_LIST,
    value,
  }
} 
export const DELETE_DISPATCH = (index)=>{
  return {
    type:DELETE_TO_LIST,
    index,
  }
} 