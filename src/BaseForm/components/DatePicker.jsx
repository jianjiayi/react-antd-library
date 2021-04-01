import React from "react";
import { DatePicker, TimePicker } from "antd";
const { RangePicker } = DatePicker;

function VMSPickerWithType(props) {
  const { pickerType, ...rest } = props;
  return (
    <>
      {pickerType === "DatePicker" && (
        <DatePicker style={{ minWidth: 300 }} {...rest}></DatePicker>
      )}
      {pickerType === "TimePicker" && (
        <TimePicker style={{ minWidth: 300 }} {...rest}></TimePicker>
      )}
      {pickerType === "RangePicker" && (
        <RangePicker style={{ minWidth: 300 }} {...rest}></RangePicker>
      )}
    </>
  );
}

export default VMSPickerWithType;
