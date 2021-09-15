import React from "react";
//组件
import Layout from '../components/customLayout'
import { Input, Button, List } from "antd";
// redux
import { useDispatch, useSelector } from "react-redux";
import {
  CHANGE_DISPATCH,
  ADD_DISPATCH,
  DELETE_DISPATCH,
} from "../redux/action/actions";
/**
 *  函数组件的redux使用
 *  useDispatch 用于触发行为
 *  useSelector 用于获取store的数据
 */
const FuncAPP = () => {

  const dispatch = useDispatch();
  // 解构store中的储存数据
  const { inputVal, data } = useSelector((state) => {
    return state;
  });

  return (
    <Layout>
      <Input
        placeholder="请输入待办事项"
        style={{ width: "350px", marginRight: "20px" }}
        value={inputVal}
        onChange={(e) => {
          dispatch(CHANGE_DISPATCH(e.target.value));
        }}
      />
      <Button
        type="primary"
        onClick={(e) => {
          dispatch(ADD_DISPATCH(inputVal));
        }}
      >
        添加
      </Button>
      <List
        bordered
        style={{ marginTop: "30px"}}
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item
            onDoubleClick={() => {
              dispatch(DELETE_DISPATCH(index));
            }}
          >
            {item}
          </List.Item>
        )}
      />
    </Layout>
  );
};
export default FuncAPP;
