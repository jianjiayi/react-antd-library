import {
  VMSFormItem,
  VMSInput,
  VMSRadio,
  VMSSelect,
  VMSCheckbox,
  VMSTextArea,
  VMSSwitch,
  VMSDatePicker,
  VMSRangePicker,
} from "../components/index";

const FormOptions = {
  Select: (options, props) => {
    // console.log("options", options);
    return (
      <VMSFormItem {...options}>
        <VMSSelect {...props}></VMSSelect>
      </VMSFormItem>
    );
  },
  Input: (options, props) => {
    return (
      <VMSFormItem {...options}>
        <VMSInput {...props}></VMSInput>
      </VMSFormItem>
    );
  },
  TextArea: (options, props) => {
    return (
      <VMSFormItem {...options}>
        <VMSTextArea {...props}></VMSTextArea>
      </VMSFormItem>
    );
  },
  Switch: (options, props) => {
    return (
      <VMSFormItem {...options}>
        <VMSSwitch {...props}></VMSSwitch>
      </VMSFormItem>
    );
  },
  Radio: (options, props) => {
    return (
      <VMSFormItem {...options}>
        <VMSRadio {...props}></VMSRadio>
      </VMSFormItem>
    );
  },
  CheckBox: (options, props) => {
    const { map, ...rest } = props;
    return (
      <VMSFormItem {...options}>
        <VMSCheckbox {...props}></VMSCheckbox>
      </VMSFormItem>
    );
  },
  DatePicker: (options, props) => {
    const { map, ...rest } = props;
    return (
      <VMSFormItem {...options}>
        <VMSDatePicker {...props}></VMSDatePicker>
      </VMSFormItem>
    );
  },
  DefaultChild: (options, child) => {
    return <VMSFormItem {...options}>{child}</VMSFormItem>;
  },
};
export default FormOptions;
