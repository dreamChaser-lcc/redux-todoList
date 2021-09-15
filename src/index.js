import React from "react";
import ReactDOM from "react-dom";
// 组件
import ClassApp from "./page/ClassApp";
import FuncAPP from "./page/FuncApp";
// redux 储存器
import store from "./redux/store/store";
import { Provider } from "react-redux";
// 样式
import "antd/dist/antd.css";
import "./index.css";

const app = (
  <React.StrictMode>
    <Provider store={store}>
      {/* 类组件使用redux */}
      <ClassApp />

      {/* 函数组件使用redux  二者选一*/}
      <FuncAPP />
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(app, document.getElementById("root"));

// 热模块更新
if (module.hot) {
  // accept 函数的第一个参数指出当前文件接受哪些子模块的替换，这里表示只接受 ./page/ClassApp 这个子模块
  // 第2个参数用于在新的子模块加载完毕后需要执行的逻辑
  module.hot.accept(["./page/ClassApp","./page/FuncApp"], () => {
    // 新的 AppComponent 加载成功后重新执行下组建渲染逻辑
    ReactDOM.render(app, document.getElementById("root"));
  });
}
