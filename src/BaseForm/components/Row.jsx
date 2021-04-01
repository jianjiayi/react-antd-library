import React from "react";
import { Row } from "antd";

function VMSRow(props) {
  const { children, ...rest } = props;
  return <Row {...rest}>{children}</Row>;
}
export default VMSRow;
