import React, { useState, useEffect } from "react";
import _ from "lodash";
import { Form, message, Space } from "antd";
import {
  VMSFormItem,
  VMSInput,
  VMSSelect,
  VMSButton,
} from "../components/index";
import {
  CaretDownOutlined,
  ShareAltOutlined,
  ForkOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";

const FormListTree = (props) => {
  const {
    pForm,
    name = "config",
    fieldOptionsMap = {},
    operateOptionsMap = {},
    ...rest
  } = props;

  const addChild = (indexStr) => {
    const indexArr = indexStr.split("-");
    if (indexArr.length >= 4) {
      return message.warning("最多创建四级结构");
    }
    // console.log(indexArr);
    // 获取当前表单所有数据
    let FormValues = pForm.getFieldsValue();
    // console.log(FormValues);
    // 获取顶技数组
    let data = FormValues[name][indexArr[0]];
    // console.log(data);
    let item = [];
    if (indexArr.length === 1) {
      // console.log(indexArr[0], FormValues.config);
      item = FormValues[name][indexArr[0]];
    }
    if (indexArr.length === 2) {
      item = FormValues[name][indexArr[0]].and[indexArr[1]];
    }
    if (indexArr.length === 3) {
      item = FormValues[name][indexArr[0]].and[indexArr[1]].and[indexArr[2]];
    }

    // console.log(item);

    if (_.isUndefined(item.and)) {
      //创建同级结构
      item.and = [
        {
          field: undefined,
          operate: undefined,
          value: undefined,
          and: [],
        },
      ];
    } else {
      //创建子集结构
      item.and.push({
        field: undefined,
        operate: undefined,
        value: undefined,
        and: [],
      });
    }

    console.log(pForm);

    // 更新formTree数据
    pForm.setFieldsValue(FormValues);
  };

  // 按钮组
  const RenderButtonGroup = (props) => {
    const { field, add, remove, children } = props;
    return (
      <>
        <VMSButton
          type="link"
          icon={<ShareAltOutlined />}
          onClick={() => add()}
        ></VMSButton>
        {children}
        <VMSButton
          type="link"
          icon={<CloseCircleOutlined />}
          onClick={() => remove(field.name)}
        ></VMSButton>
      </>
    );
  };

  // 页面折叠按钮
  const onCollapse = (id) => {
    const dom = document.getElementById(`form_list_${id}`);
    const triangle = document.getElementById(`triangle_${id}`);
    if (dom.style.overflow != "hidden") {
      dom.style.overflow = "hidden";
      dom.style.height = "56px";
      triangle.style.transform = "rotate(-90deg)";
    } else {
      dom.style.overflow = "auto";
      dom.style.height = "auto";
      triangle.style.transform = "rotate(0deg)";
    }
  };

  // formlistItem项
  const renderList = (field, index, add, remove) => {
    const buttonProps = {
      add,
      field,
      remove,
    };
    // console.log(index);
    return (
      <div id={`form_list_${index}`} key={index} style={{ marginLeft: 20 }}>
        <Space
          key={field.key}
          style={{ display: "flex", marginBottom: 0 }}
          align="baseline"
        >
          <VMSButton
            id={`triangle_${index}`}
            type="link"
            icon={<CaretDownOutlined />}
            onClick={() => onCollapse(index)}
          ></VMSButton>
          <VMSFormItem
            {...field}
            name={[field.name, "field"]}
            fieldKey={[field.fieldKey, "field"]}
            rules={[{ required: true, message: "请选择" }]}
          >
            <VMSSelect
              map={fieldOptionsMap}
              style={{ width: 150 }}
              placeholder="请选择"
            ></VMSSelect>
          </VMSFormItem>
          <VMSFormItem
            {...field}
            name={[field.name, "operate"]}
            fieldKey={[field.fieldKey, "operate"]}
            rules={[{ required: true, message: "请选择" }]}
          >
            <VMSSelect
              map={operateOptionsMap}
              style={{ width: 150 }}
              placeholder="请选择"
            ></VMSSelect>
          </VMSFormItem>
          <VMSFormItem shouldUpdate noStyle>
            {({ getFieldsValue }) => {
              console.log(getFieldsValue());
              return (
                <VMSFormItem
                  {...field}
                  name={[field.name, "value"]}
                  fieldKey={[field.fieldKey, "value"]}
                  rules={[{ required: true, message: "请输入" }]}
                  shouldUpdate
                >
                  <VMSInput placeholder="请输入..." />
                </VMSFormItem>
              );
            }}
          </VMSFormItem>

          {/* <VMSFormItem
            {...field}
            name={[field.name, "value"]}
            fieldKey={[field.fieldKey, "value"]}
            rules={[{ required: true, message: "请输入" }]}
            shouldUpdate
          >
            <VMSInput placeholder="请输入..." />
          </VMSFormItem> */}
          <RenderButtonGroup {...buttonProps}>
            <VMSButton
              type="link"
              icon={<ForkOutlined />}
              onClick={() => addChild(index)}
            ></VMSButton>
          </RenderButtonGroup>
        </Space>

        <Form.List name={[field.name, "and"]}>
          {(fields, { add, remove }) => (
            <>
              {!_.isEmpty(fields) &&
                fields.map((field, key) => {
                  return renderList(field, `${index}-${key}`, add, remove);
                })}
            </>
          )}
        </Form.List>
      </div>
    );
  };

  return (
    <Form.List name={name}>
      {(fields, { add, remove }) => (
        <>
          {!_.isEmpty(fields) &&
            fields.map((field, index) => {
              return renderList(field, `${index}`, add, remove);
            })}
        </>
      )}
    </Form.List>
  );
};

export default FormListTree;
