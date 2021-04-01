import _ from "lodash";
import { VMSRow, VMSCol, VMSInput, VMSFormItem, } from "../components/index";
import FormOptions from "./extra";

/**
 * 渲染formItem函数
 * @param {*} item     当前被渲染item数据
 * @param {*} layout   表单布局 horizontal | vertical | inline
 * @param {*} params   其他参数
 */
const RenderFormItem = (item, layout, params) => {
  if (_.isEmpty(item)) return;

  const {
    label = "",
    name = "",
    options = {},
    noStyle = false,
    required = false,
    validator = null,
    initialValue = null,
    placeholder,
    type = "",
    itemRender = null,
    multiple = 1, // 配置Col所占比例，只有layout === "inline"生效
    children, // 嵌套表单项
    ...rest
  } = item;

  // FormItem配置
  const ItemOptions = {
    label,
    name,
    key: name || null,
    noStyle,
    ...options,
  };

  const getColNumber = (oldNum, i, maxNum) => {
    if (!_.isNumber(i) || i <= 0) return oldNum;
    const newNum = oldNum * i > maxNum ? maxNum : oldNum * i;
    return newNum;
  };

  /**
   * 表单自适应配置
   * @param {*} layout 表单布局 只有layout === "inline"生效
   * @param {*} col
   */
  const ColProps = (layout, multiple) => {
    if (layout === "horizontal")
      return {
        span: 24,
      };
    return {
      xs: getColNumber(24, multiple, 24), //< 576px
      ms: getColNumber(8, multiple, 24), //≥ 576px
      md: getColNumber(8, multiple, 24), //屏幕 ≥ 768px
      lg: getColNumber(8, multiple, 24), //屏幕 ≥ 992px
      xl: getColNumber(6, multiple, 24), //屏幕 ≥ 1200px
      xxl: getColNumber(4, multiple, 24), //屏幕 ≥ 1600px
    };
  };

  /**
   * 渲染配置表单项，即extra文件配置组件
   */
  if (type && !_.isFunction(itemRender)) {
    // console.log(type)
    const formItem = FormOptions[type](ItemOptions, {
      ...rest,
      label,
    });
    return (
      <VMSCol {...ColProps(layout, multiple)} key={name}>
        {formItem}
      </VMSCol>
    );
  }

  // if(!_.isEmpty(children)){
  //   <VMSFormItem>
  //     {
  //       children.map(item=>{
  //         RenderFormItem(item, layout, params)
  //       })
  //     }
  //   </VMSFormItem>
  // }

  /**
   * 自定义表单渲染，即渲染itemRender函数
   */
  const Child = itemRender || (
    <VMSInput
      {...rest}
      allowClear
      placeholder={placeholder || `请输入${label}`}
    ></VMSInput>
  );
  return (
    <VMSCol {...ColProps(layout, multiple)} key={name}>
      {FormOptions["DefaultChild"]({ ...ItemOptions }, Child)}
    </VMSCol>
  );
};

export default RenderFormItem;
