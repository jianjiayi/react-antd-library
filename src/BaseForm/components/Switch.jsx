import React from "react";
import { Switch } from "antd";

function VMSSwitch(props) {
  const {value, ...rest} = props;
  return <Switch defaultChecked={value || false} {...rest}></Switch>;
}
export default VMSSwitch;
