import React from "react";
import { Select } from "antd";
import _ from 'lodash';

import { renderGroupComponent } from "./utils";

function VMSSelect(props) {
  const { label, map, mode, value, ...rest } = props;
  try{
    if(mode === 'multiple' && !_.isArray(value)) {
      throw "select组件mode === 'multiple' 时value必须是一个数组"
    }
    return renderGroupComponent(map, Select, Select.Option, {
      style: { maxWidth: 500 },
      placeholder: `请选择${label}`,
      listHeight: 256,
      ...rest,
    });
  }catch(error){
    console.log(error);
  }
  
  
}
export default VMSSelect;
