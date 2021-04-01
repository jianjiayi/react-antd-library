import React from "react";
import { Button } from "antd";

function VMSButton(props) {
  const { text = "", children, ...rest } = props;
  return <Button {...rest}>{text || children}</Button>;
}
export default VMSButton;
