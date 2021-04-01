import React from "react";
import { Col } from "antd";

function VMSCol(props) {
  const { children, ...rest } = props;
  return <Col {...rest}>{children}</Col>;
}
export default VMSCol;
