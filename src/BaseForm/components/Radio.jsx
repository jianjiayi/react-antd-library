import React from "react";
import { Radio } from "antd";
import { renderGroupComponent } from "./utils";

function VMSRadio(props) {
  const { map, ...rest } = props;

  return renderGroupComponent(map, Radio.Group, Radio, rest);
}

export default VMSRadio;
