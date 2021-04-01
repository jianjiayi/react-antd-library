import React, { useState, useEffect } from "react";
import _ from "lodash";
import classNames from "classnames";
import { Form } from "antd";
import { VMSRow, VMSCol, VMSButton, VMSFormItem } from "./components";
import { FillFormItems, RenderFormItem, RenderButtonGroup } from "./FormRender";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

import styles from "./index.module.less";

function BaseForm(props) {
  const [selfForm] = Form.useForm();

  const {
    pForm,
    pRef = () => {},
    preview = true, // 是否开启预览模式，开启后所有表单将不能编辑
    className,
    dataSource = [], //表单默认数据源
    formValues = {}, // 表单默认数据
    layout = "horizontal",
    formItemLayout = {}, // 只有当layout = "horizontal"生效
    children, // 表单额外配置，常用与集成扩展表单
    buttonChildren = null, // 按钮组扩展配置
    expandIndex = null, // 折叠数据索引（原理截取dataSource前expand的数据展示出来)
    onReset = () => {}, // 表单重置方法
    resetText = "重置", // 重置按钮文案
    onFinish = () => {}, // 提交表单方法
    finishText = "查询", //提交按钮默认文案
    ...rest
  } = props;

  const form = pForm || selfForm;

  // 设置表单默认数据
  useEffect(() => {
    // if (form) {
    //   console.log(form.setFieldsValue(formValues));
    // }
    // return () => {
    //   form.resetFields();
    // };
  }, [JSON.stringify(formValues)]);

  const formLayout = (layout) => {
    if (layout === "inline") return {};
    return {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 },
      },
      ...formItemLayout,
    };
  };

  // 表单折叠
  const [expand, setExpand] = useState(false);

  /**
   * 渲染表单列表项
   *
   * @param {*} expandIndex 获取前N个元素索引
   * @param {*} expand      折叠按钮状态
   * @param {*} dataSource  原始表单数据源
   * @param {*} formValues  表单默认值
   */
  const render = (expandIndex, expand, dataSource, formValues) => {
    // console.log("expand", expand);
    // 用户开启折叠， 提取数组前N个元素
    if (expandIndex && expand) dataSource = _.take(dataSource, expandIndex);

    return FillFormItems(dataSource, formValues).map((item) => {
      // console.log(item);
      // const {children, ...itemProps} = item;
      return RenderFormItem(item, layout, { ...rest, preview });
    });
  };

  // 表单重置事件
  const reset = () => {
    form.resetFields();
    // 调用父组件onReset方法
    if (_.isFunction(onReset)) onReset(form.getFieldsValue());
  };

  /**
   * 表单提交事件
    (使用自定义方法代替Form默认onFinsh方法原因：
      某些控制的Enter事件会触发onFinsh方法，导致表单错误提交)
   */
  const submit = () => {
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
  };

  // 按钮组参数
  const buttonProps = {
    layout,
    submit,
    reset,
    finishText,
    resetText,
    expandIndex,
    expand,
    setExpand,
    buttonChildren,
  };

  return (
    <div className={classNames(className, styles.container)}>
      <Form form={form} ref={pRef} {...formLayout(layout)}>
        <VMSRow gutter={24}>
          {/* 渲染表单 */}
          {render(expandIndex, expand, dataSource, formValues)}
          {/* 嵌入外部表单 */}
          {children}
          {/* 按钮组合, pForm不为空时使用内置按钮组 */}
          {!pForm && <RenderButtonGroup {...buttonProps}></RenderButtonGroup>}
        </VMSRow>
      </Form>
    </div>
  );
}

export default BaseForm;
