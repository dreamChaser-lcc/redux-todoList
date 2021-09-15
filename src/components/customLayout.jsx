import React from "react";
/**
 * 自定义布局
 * @type 函数组件title|或类组件title
 * Iprops:{type:func|class,childen:ReactNode}
 */
const Layout = (props) => {
  const { children, type } = props;
  const descript = " 使用redux";
  const title = (type === "class" ? "类组件" : "函数组件") + descript;
  return (
    <div id="wapper" style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          padding: "20px 40px",
          marginTop: "20px",
          border: "1px solid #c3c3c3",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "50px",
            borderBottom: "1px solid #c3c3c3",
          }}
        >
          {title}
        </h1>
        {/* 渲染传入的chilren */}
        {children}
      </div>
    </div>
  );
};
export default Layout;
