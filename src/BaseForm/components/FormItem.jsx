import React from "react";
import { Form } from "antd";

function VMSFormItem(props) {
  const { children, ...rest } = props;
  return <Form.Item {...rest}>{children}</Form.Item>;
}
export default VMSFormItem;
