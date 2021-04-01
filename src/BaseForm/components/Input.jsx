import React, { forwardRef } from "react";
import { Input } from "antd";

const VMSInput = forwardRef((props, ref) => {
  const { placeholder, label, ...rest } = props;
  return (
    <Input
      ref={ref}
      placeholder={placeholder || `请输入${label ? label : ""}`}
      style={{ maxWidth: 500 }}
      {...rest}
    ></Input>
  );
});

export default VMSInput;
