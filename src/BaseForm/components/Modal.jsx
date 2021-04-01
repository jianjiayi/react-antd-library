import React from "react";
import { Modal } from "antd";

function VMSModal(props) {
  const { children, ...rest } = props;
  // console.log(rest);
  return <Modal {...rest}>{children}</Modal>;
}

export default VMSModal;
