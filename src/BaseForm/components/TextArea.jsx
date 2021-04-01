import React from "react";
import { Input } from "antd";
import VMSInput from "./Input";
const { TextArea } = Input;

function VMSTextArea(props) {
  const { placeholder, label, ...rest } = props;
  return (
    <TextArea
      placeholder={placeholder || `请输入${label ? label : ""}`}
      style={{ maxWidth: 500 }}
      {...rest}
    ></TextArea>
  );
}
export default VMSTextArea;
