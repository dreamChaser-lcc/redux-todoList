import React, { Component } from "react";
// 组件
import Layout from "../components/customLayout";
import { Input, Button, List } from "antd";
// redux
import { connect } from "react-redux";
// actions
import {
  CHANGE_DISPATCH,
  ADD_DISPATCH,
  DELETE_DISPATCH,
} from "../redux/action/actions";

/**
 * 类组件的redux使用
 * connect 连接器
 * 第一个参数
 * mapStateToProps 用于获取store数据
 * 第二个参数
 * mapDispatchToProps 用于行为触发reducers
 */
class ClassApp extends Component {
  render = () => {
    return (
      <Layout type="class">
        <Input
          placeholder="请输入待办事项"
          style={{ width: "350px", marginRight: "20px" }}
          value={this.props.inputVal}
          onChange={this.props.handleChange.bind(this)}
        />
        <Button
          type="primary"
          onClick={this.props.handleClick.bind(this, this.props.inputVal)}
        >
          添加
        </Button>
        <List
          bordered
          style={{ marginTop: "30px" }}
          dataSource={this.props.data}
          renderItem={(item, index) => (
            <List.Item
              onDoubleClick={this.props.handleDoubleClick.bind(this, index)}
            >
              {item}
            </List.Item>
          )}
        />
      </Layout>
    );
  };
}
// return结果 映射到APP组件的props
const mapStateToProps = (state) => {
  // 可以对初始的state做处理
  return {
    ...state,
  };
};
// return结果 映射到APP组件的props
const mapDispatchToProps = (dispatch) => {
  const handleChange = (e) => {
    // dispatch(action)执行reducer方法，参数action:any = {type:actionType, value:any}
    dispatch(CHANGE_DISPATCH(e.target.value));
  };
  const handleClick = (val) => {
    dispatch(ADD_DISPATCH(val));
  };
  const handleDoubleClick = (index) => {
    console.log(index);
    dispatch(DELETE_DISPATCH(index));
  };
  return {
    handleChange,
    handleClick,
    handleDoubleClick,
  };
};
/**
 * 通过connect后
 * 最终App组件的app
 * 将mapStateToProps、mapDispatchToProps的返回结果映射到APP组件的props
 * 即 props = {
 *               ...state,
 *               handleChange,
 *               handleClick,
 *               handleDoubleClick,
 *             }
 *
 */
const final = connect(mapStateToProps, mapDispatchToProps)(ClassApp);
export default final;
/**
 * 另一种connect装饰器的方法方法
 * 需要配置
 *  @connect(mapStateToProps, mapDispatchToProps);
 */
