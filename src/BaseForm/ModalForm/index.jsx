import React from "react";
import _ from "lodash";
import classNames from "classnames";
import { Form } from "antd";
import VMSModal from "../components/Modal";
import BaseForm from "../index";

function ModalForm(props) {
  // console.log(props);
  const [selfForm] = Form.useForm();

  const {
    pForm,
    title = "标题",
    width,
    visible, // modal状态
    className,
    onReset = () => {}, // 表单重置方法
    resetText = "取消", // 重置按钮文案
    onFinish = () => {}, // 提交表单方法
    finishText = "确定", //提交按钮默认文案
    ...rest
  } = props;

  const form = pForm || selfForm;

  const BaseFormProps = {};

  const modalProps = {
    title,
    visible,
    width: width || 500,
    destroyOnClose: true,
    okText: finishText,
    cancelText: resetText,
    onOk: () => {
      form
        .validateFields()
        .then((values) => {
          console.log("values", values);
          // 调用父组件onFinish
          if (_.isFunction(onFinish)) onFinish(values);
        })
        .catch((errorInfo) => {
          console.log("errorInfo", errorInfo);
        });
    },
    onCancel: () => {
      onReset();
    },
  };

  return (
    <VMSModal {...modalProps}>
      <BaseForm {...rest} pForm={form}></BaseForm>
    </VMSModal>
  );
}
export default ModalForm;
