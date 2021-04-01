import React from "react";
import { Checkbox } from "antd";
import { renderGroupComponent } from "./utils";

function VMSCheckbox(props) {
  const { map, ...rest } = props;

  return renderGroupComponent(map, Checkbox.Group, Checkbox, rest);
}

export default VMSCheckbox;
