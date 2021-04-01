'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var classNames = require('classnames');
var antd = require('antd');
var _ = require('lodash');
var icons = require('@ant-design/icons');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);
var ___default = /*#__PURE__*/_interopDefaultLegacy(_);

var index = (function (_ref) {
  var title = _ref.title;
  return /*#__PURE__*/React__default['default'].createElement("h1", null, title);
});

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".index-module_container__3YrIr {\n  overflow-x: scroll;\n  max-width: 100%;\n}\n.index-module_container__3YrIr .index-module_table__1m_kE {\n  position: relative;\n  margin: 0px 0 0px;\n  background-color: #fff;\n}\n";
var styles = {"container":"index-module_container__3YrIr","table":"index-module_table__1m_kE"};
styleInject(css_248z);

/**
 * 生成uuid，取此值作为唯一key
 *
 * @return {*}
 */

function guid() {
  function S4() {
    return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
  }

  return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
}

function BaseTable(props, ref) {
  // 存储选中元素
  var _useState = React.useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      selectedRowKeys = _useState2[0],
      setSelectedRowKeys = _useState2[1];

  var _useState3 = React.useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedRows = _useState4[0],
      setSelectedRows = _useState4[1]; // 向父组件暴露的方法


  React.useImperativeHandle(ref, function () {
    return {
      selectedRowKeys: selectedRowKeys,
      setSelectedRowKeys: setSelectedRowKeys,
      selectedRows: selectedRows,
      setSelectedRows: setSelectedRows
    };
  });

  var className = props.className,
      columns = props.columns,
      dataSource = props.dataSource,
      selectionType = props.selectionType,
      pagination = props.pagination,
      onPageChg = props.onPageChg,
      children = props.children,
      selectedKeys = props.selectedKeys,
      rest = _objectWithoutProperties(props, ["className", "columns", "dataSource", "selectionType", "pagination", "onPageChg", "children", "selectedKeys"]);

  React.useEffect(function () {
    setSelectedRowKeys([]);
    setSelectedRows([]);
  }, [JSON.stringify(dataSource)]);
  React.useEffect(function () {
    console.log('selectedKeys', selectedKeys);

    if (!___default['default'].isEmpty(selectedKeys)) {
      setSelectedRowKeys(selectedKeys);
    }
  }, [JSON.stringify(selectedKeys)]); // 获取选中元素

  var getSelectedRowKeys = function getSelectedRowKeys() {
    return {
      selectedRowKeys: selectedRowKeys
    };
  }; // table 单选、多选配置


  var rowSelection = _objectSpread2(_objectSpread2({
    type: 'checkbox'
  }, getSelectedRowKeys()), {}, {
    onChange: function onChange(selectedRowKeys, selectedRows) {
      console.log(selectedRowKeys, selectedRows);
      setSelectedRowKeys(selectedRowKeys);
      setSelectedRows(selectedRows);
    },
    onSelectAll: function onSelectAll(selected, selectedRows) {
      console.log(selected, selectedRows); // setSelectedRowKeys(selectedRows);

      setSelectedRows(selectedRows);
    }
  });

  var rowSelections = Boolean;

  if (selectionType === false || selectionType === null) {
    rowSelections = false;
  } else if (selectionType === 'checkbox') {
    rowSelection.type = 'checkbox';
  } else {
    rowSelection.type = 'radio';
  } //table 合并数组单元格


  var createNewArr = function createNewArr(data) {
    if (!data || data.length === 0) return [];
    return data.reduce(function (result, item) {
      //首先将name字段作为新数组result取出
      if (result.indexOf(item.name) < 0) {
        result.push(item.name);
      }

      return result;
    }, []).reduce(function (result, name) {
      //将name相同的数据作为新数组取出，并在其内部添加新字段**rowSpan**
      var children = data.filter(function (item) {
        return item.name === name;
      });
      result = result.concat(children.map(function (item, index) {
        return _objectSpread2(_objectSpread2({}, item), {}, {
          rowSpan: index === 0 ? children.length : 0 //将第一行数据添加rowSpan字段

        });
      }));
      return result;
    }, []);
  };

  var footer = function footer() {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: styles['right-btn']
    }, children);
  }; // table配置


  var tableProps = _objectSpread2({
    columns: columns,
    // dataSource,
    dataSource: createNewArr(dataSource),
    pagination: pagination || false,
    rowKey: function rowKey(record) {
      return record.id || guid();
    },
    rowSelection: rowSelections ? rowSelection : null,
    onChange: onPageChg,
    footer: children && !___default['default'].isEmpty(dataSource) ? footer : null
  }, rest);

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: styles.container
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: classNames__default['default'](styles.table, className)
  }, /*#__PURE__*/React__default['default'].createElement(antd.Table, tableProps)));
}

BaseTable = /*#__PURE__*/React.forwardRef(BaseTable);
var BaseTable$1 = BaseTable;

function VMSRow(props) {
  var children = props.children,
      rest = _objectWithoutProperties(props, ["children"]);

  return /*#__PURE__*/React__default['default'].createElement(antd.Row, rest, children);
}

function VMSCol(props) {
  var children = props.children,
      rest = _objectWithoutProperties(props, ["children"]);

  return /*#__PURE__*/React__default['default'].createElement(antd.Col, rest, children);
}

function VMSFormItem(props) {
  var children = props.children,
      rest = _objectWithoutProperties(props, ["children"]);

  return /*#__PURE__*/React__default['default'].createElement(antd.Form.Item, rest, children);
}

var VMSInput = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var placeholder = props.placeholder,
      label = props.label,
      rest = _objectWithoutProperties(props, ["placeholder", "label"]);

  return /*#__PURE__*/React__default['default'].createElement(antd.Input, _extends({
    ref: ref,
    placeholder: placeholder || "\u8BF7\u8F93\u5165".concat(label ? label : ""),
    style: {
      maxWidth: 500
    }
  }, rest));
});

/**
 * 对象转为entry数组
 *
 * @param object   原对象
 * @param callback 转换方式
 * @returns {any}
 */

function entries(object) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (item) {
    return item;
  };
  // 对象
  if (_.isPlainObject(object)) return Object.entries(object).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    return callback({
      key: key,
      value: value
    });
  }); // 数组

  if (_.isArray(object)) return object.map(function (v) {
    return callback(v.key, v.value);
  });
}
/**
 * 绘制组合表单项
 *
 * @param iterable 格式：[{ key: 'key', value: 'value' }] 或者 {key1: value1, key2: value2}
 * @param Parent   父组件类型
 * @param Item     子组件类型
 * @param props    传递给父组件的属性
 * @returns {*}
 */


function renderGroupComponent(iterable, Parent, Item, props) {
  // console.log(props);
  if (iterable) {
    var forEach = function forEach(_ref3) {
      var key = _ref3.key,
          value = _ref3.value;
      return /*#__PURE__*/React__default['default'].createElement(Item, {
        key: key,
        value: key
      }, value);
    };

    var child = _.isArray(iterable) ? iterable.map(forEach) : entries(iterable, forEach);
    return /*#__PURE__*/React__default['default'].createElement(Parent, props, child);
  }

  return null;
}

function VMSSelect(props) {
  var label = props.label,
      map = props.map,
      mode = props.mode,
      value = props.value,
      rest = _objectWithoutProperties(props, ["label", "map", "mode", "value"]);

  try {
    if (mode === 'multiple' && !___default['default'].isArray(value)) {
      throw "select组件mode === 'multiple' 时value必须是一个数组";
    }

    return renderGroupComponent(map, antd.Select, antd.Select.Option, _objectSpread2({
      style: {
        maxWidth: 500
      },
      placeholder: "\u8BF7\u9009\u62E9".concat(label),
      listHeight: 256
    }, rest));
  } catch (error) {
    console.log(error);
  }
}

function VMSRadio(props) {
  var map = props.map,
      rest = _objectWithoutProperties(props, ["map"]);

  return renderGroupComponent(map, antd.Radio.Group, antd.Radio, rest);
}

function VMSCheckbox(props) {
  var map = props.map,
      rest = _objectWithoutProperties(props, ["map"]);

  return renderGroupComponent(map, antd.Checkbox.Group, antd.Checkbox, rest);
}

function VMSButton(props) {
  var _props$text = props.text,
      text = _props$text === void 0 ? "" : _props$text,
      children = props.children,
      rest = _objectWithoutProperties(props, ["text", "children"]);

  return /*#__PURE__*/React__default['default'].createElement(antd.Button, rest, text || children);
}

var TextArea = antd.Input.TextArea;

function VMSTextArea(props) {
  var placeholder = props.placeholder,
      label = props.label,
      rest = _objectWithoutProperties(props, ["placeholder", "label"]);

  return /*#__PURE__*/React__default['default'].createElement(TextArea, _extends({
    placeholder: placeholder || "\u8BF7\u8F93\u5165".concat(label ? label : ""),
    style: {
      maxWidth: 500
    }
  }, rest));
}

function VMSSwitch(props) {
  var value = props.value,
      rest = _objectWithoutProperties(props, ["value"]);

  return /*#__PURE__*/React__default['default'].createElement(antd.Switch, _extends({
    defaultChecked: value || false
  }, rest));
}

var RangePicker = antd.DatePicker.RangePicker;

function VMSPickerWithType(props) {
  var pickerType = props.pickerType,
      rest = _objectWithoutProperties(props, ["pickerType"]);

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, pickerType === "DatePicker" && /*#__PURE__*/React__default['default'].createElement(antd.DatePicker, _extends({
    style: {
      minWidth: 300
    }
  }, rest)), pickerType === "TimePicker" && /*#__PURE__*/React__default['default'].createElement(antd.TimePicker, _extends({
    style: {
      minWidth: 300
    }
  }, rest)), pickerType === "RangePicker" && /*#__PURE__*/React__default['default'].createElement(RangePicker, _extends({
    style: {
      minWidth: 300
    }
  }, rest)));
}

/**
 * 获取formItem 配置参数
 * @param {*} items       所有props
 * @param {*} formValues  默认值
 */

var FillFormItems = function FillFormItems(items, formValues) {
  if (___default['default'].isEmpty(items)) return [];
  return items.map(function (item) {
    var _item$label = item.label,
        label = _item$label === void 0 ? "" : _item$label,
        _item$name = item.name,
        name = _item$name === void 0 ? "" : _item$name,
        _item$required = item.required,
        required = _item$required === void 0 ? false : _item$required,
        _item$validator = item.validator,
        validator = _item$validator === void 0 ? null : _item$validator,
        _item$help = item.help,
        help = _item$help === void 0 ? null : _item$help,
        _item$initialValue = item.initialValue,
        initialValue = _item$initialValue === void 0 ? formValues[name] || undefined : _item$initialValue; // 必填项

    var rules = validator ? [{
      required: required,
      message: "\u8BF7\u8F93\u5165".concat(label)
    }, {
      validator: validator
    }] : [{
      required: required,
      message: "\u8BF7\u8F93\u5165".concat(label)
    }];
    return _objectSpread2({
      options: {
        rules: required ? rules : null,
        initialValue: initialValue,
        help: help
      }
    }, item);
  });
};

var FormOptions = {
  Select: function Select(options, props) {
    // console.log("options", options);
    return /*#__PURE__*/React__default['default'].createElement(VMSFormItem, options, /*#__PURE__*/React__default['default'].createElement(VMSSelect, props));
  },
  Input: function Input(options, props) {
    return /*#__PURE__*/React__default['default'].createElement(VMSFormItem, options, /*#__PURE__*/React__default['default'].createElement(VMSInput, props));
  },
  TextArea: function TextArea(options, props) {
    return /*#__PURE__*/React__default['default'].createElement(VMSFormItem, options, /*#__PURE__*/React__default['default'].createElement(VMSTextArea, props));
  },
  Switch: function Switch(options, props) {
    return /*#__PURE__*/React__default['default'].createElement(VMSFormItem, options, /*#__PURE__*/React__default['default'].createElement(VMSSwitch, props));
  },
  Radio: function Radio(options, props) {
    return /*#__PURE__*/React__default['default'].createElement(VMSFormItem, options, /*#__PURE__*/React__default['default'].createElement(VMSRadio, props));
  },
  CheckBox: function CheckBox(options, props) {
    var map = props.map,
        rest = _objectWithoutProperties(props, ["map"]);

    return /*#__PURE__*/React__default['default'].createElement(VMSFormItem, options, /*#__PURE__*/React__default['default'].createElement(VMSCheckbox, props));
  },
  DatePicker: function DatePicker(options, props) {
    var map = props.map,
        rest = _objectWithoutProperties(props, ["map"]);

    return /*#__PURE__*/React__default['default'].createElement(VMSFormItem, options, /*#__PURE__*/React__default['default'].createElement(VMSPickerWithType, props));
  },
  DefaultChild: function DefaultChild(options, child) {
    return /*#__PURE__*/React__default['default'].createElement(VMSFormItem, options, child);
  }
};

/**
 * 渲染formItem函数
 * @param {*} item     当前被渲染item数据
 * @param {*} layout   表单布局 horizontal | vertical | inline
 * @param {*} params   其他参数
 */

var RenderFormItem = function RenderFormItem(item, layout, params) {
  if (___default['default'].isEmpty(item)) return;

  var _item$label = item.label,
      label = _item$label === void 0 ? "" : _item$label,
      _item$name = item.name,
      name = _item$name === void 0 ? "" : _item$name,
      _item$options = item.options,
      options = _item$options === void 0 ? {} : _item$options,
      _item$noStyle = item.noStyle,
      noStyle = _item$noStyle === void 0 ? false : _item$noStyle,
      _item$required = item.required,
      _item$validator = item.validator,
      _item$initialValue = item.initialValue,
      placeholder = item.placeholder,
      _item$type = item.type,
      type = _item$type === void 0 ? "" : _item$type,
      _item$itemRender = item.itemRender,
      itemRender = _item$itemRender === void 0 ? null : _item$itemRender,
      _item$multiple = item.multiple,
      multiple = _item$multiple === void 0 ? 1 : _item$multiple,
      children = item.children,
      rest = _objectWithoutProperties(item, ["label", "name", "options", "noStyle", "required", "validator", "initialValue", "placeholder", "type", "itemRender", "multiple", "children"]); // FormItem配置


  var ItemOptions = _objectSpread2({
    label: label,
    name: name,
    key: name || null,
    noStyle: noStyle
  }, options);

  var getColNumber = function getColNumber(oldNum, i, maxNum) {
    if (!___default['default'].isNumber(i) || i <= 0) return oldNum;
    var newNum = oldNum * i > maxNum ? maxNum : oldNum * i;
    return newNum;
  };
  /**
   * 表单自适应配置
   * @param {*} layout 表单布局 只有layout === "inline"生效
   * @param {*} col
   */


  var ColProps = function ColProps(layout, multiple) {
    if (layout === "horizontal") return {
      span: 24
    };
    return {
      xs: getColNumber(24, multiple, 24),
      //< 576px
      ms: getColNumber(8, multiple, 24),
      //≥ 576px
      md: getColNumber(8, multiple, 24),
      //屏幕 ≥ 768px
      lg: getColNumber(8, multiple, 24),
      //屏幕 ≥ 992px
      xl: getColNumber(6, multiple, 24),
      //屏幕 ≥ 1200px
      xxl: getColNumber(4, multiple, 24) //屏幕 ≥ 1600px

    };
  };
  /**
   * 渲染配置表单项，即extra文件配置组件
   */


  if (type && !___default['default'].isFunction(itemRender)) {
    // console.log(type)
    var formItem = FormOptions[type](ItemOptions, _objectSpread2(_objectSpread2({}, rest), {}, {
      label: label
    }));
    return /*#__PURE__*/React__default['default'].createElement(VMSCol, _extends({}, ColProps(layout, multiple), {
      key: name
    }), formItem);
  } // if(!_.isEmpty(children)){
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


  var Child = itemRender || /*#__PURE__*/React__default['default'].createElement(VMSInput, _extends({}, rest, {
    allowClear: true,
    placeholder: placeholder || "\u8BF7\u8F93\u5165".concat(label)
  }));
  return /*#__PURE__*/React__default['default'].createElement(VMSCol, _extends({}, ColProps(layout, multiple), {
    key: name
  }), FormOptions["DefaultChild"](_objectSpread2({}, ItemOptions), Child));
};

var css_248z$1 = ".index-module_button-groups__1Ku0m {\n  margin: 40px 0;\n}\n.index-module_button-groups__1Ku0m button {\n  margin-right: 40px;\n}\n.index-module_button-groups-inline__s4zI6 {\n  display: flex;\n  float: right;\n  justify-content: flex-end;\n}\n.index-module_button-groups-inline__s4zI6 button {\n  margin-left: 20px;\n}\n";
var styles$1 = {"button-groups":"index-module_button-groups__1Ku0m","button-groups-inline":"index-module_button-groups-inline__s4zI6"};
styleInject(css_248z$1);

var RenderButtonGroup = function RenderButtonGroup(props) {
  var layout = props.layout,
      submit = props.submit,
      reset = props.reset,
      finishText = props.finishText,
      resetText = props.resetText,
      expandIndex = props.expandIndex,
      expand = props.expand,
      setExpand = props.setExpand,
      buttonChildren = props.buttonChildren,
      rest = _objectWithoutProperties(props, ["layout", "submit", "reset", "finishText", "resetText", "expandIndex", "expand", "setExpand", "buttonChildren"]); // 折叠按钮


  var rendeRexpandButton = function rendeRexpandButton(index, status) {
    if (index) return /*#__PURE__*/React__default['default'].createElement(VMSButton, {
      type: "link",
      onClick: function onClick() {
        setExpand(!expand);
      }
    }, status ? "展开" : "收起", status ? /*#__PURE__*/React__default['default'].createElement(icons.DownOutlined, null) : /*#__PURE__*/React__default['default'].createElement(icons.UpOutlined, null));
  };

  return /*#__PURE__*/React__default['default'].createElement(VMSCol, {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React__default['default'].createElement(VMSFormItem, {
    wrapperCol: {
      xs: {
        span: 24
      },
      sm: {
        offset: 6,
        span: 18
      }
    }
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: layout === "inline" ? styles$1["button-groups-inline"] : styles$1["button-groups"]
  }, /*#__PURE__*/React__default['default'].createElement(VMSButton, {
    type: "primary",
    onClick: function onClick() {
      submit();
    }
  }, finishText), /*#__PURE__*/React__default['default'].createElement(VMSButton, {
    type: "dashed",
    onClick: function onClick() {
      return reset();
    }
  }, resetText), rendeRexpandButton(expandIndex, expand), ___default['default'].isFunction(buttonChildren) && buttonChildren())));
};

var css_248z$2 = ".index-module_container__1fhwm {\n  padding: 20px 20px 0;\n  background: #fff;\n}\n";
var styles$2 = {"container":"index-module_container__1fhwm"};
styleInject(css_248z$2);

function BaseForm(props) {
  var _Form$useForm = antd.Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      selfForm = _Form$useForm2[0];

  var pForm = props.pForm,
      _props$pRef = props.pRef,
      pRef = _props$pRef === void 0 ? function () {} : _props$pRef,
      _props$preview = props.preview,
      preview = _props$preview === void 0 ? true : _props$preview,
      className = props.className,
      _props$dataSource = props.dataSource,
      dataSource = _props$dataSource === void 0 ? [] : _props$dataSource,
      _props$formValues = props.formValues,
      formValues = _props$formValues === void 0 ? {} : _props$formValues,
      _props$layout = props.layout,
      layout = _props$layout === void 0 ? "horizontal" : _props$layout,
      _props$formItemLayout = props.formItemLayout,
      formItemLayout = _props$formItemLayout === void 0 ? {} : _props$formItemLayout,
      children = props.children,
      _props$buttonChildren = props.buttonChildren,
      buttonChildren = _props$buttonChildren === void 0 ? null : _props$buttonChildren,
      _props$expandIndex = props.expandIndex,
      expandIndex = _props$expandIndex === void 0 ? null : _props$expandIndex,
      _props$onReset = props.onReset,
      onReset = _props$onReset === void 0 ? function () {} : _props$onReset,
      _props$resetText = props.resetText,
      resetText = _props$resetText === void 0 ? "重置" : _props$resetText,
      _props$onFinish = props.onFinish,
      onFinish = _props$onFinish === void 0 ? function () {} : _props$onFinish,
      _props$finishText = props.finishText,
      finishText = _props$finishText === void 0 ? "查询" : _props$finishText,
      rest = _objectWithoutProperties(props, ["pForm", "pRef", "preview", "className", "dataSource", "formValues", "layout", "formItemLayout", "children", "buttonChildren", "expandIndex", "onReset", "resetText", "onFinish", "finishText"]);

  var form = pForm || selfForm; // 设置表单默认数据

  React.useEffect(function () {// if (form) {
    //   console.log(form.setFieldsValue(formValues));
    // }
    // return () => {
    //   form.resetFields();
    // };
  }, [JSON.stringify(formValues)]);

  var formLayout = function formLayout(layout) {
    if (layout === "inline") return {};
    return _objectSpread2({
      labelCol: {
        xs: {
          span: 24
        },
        sm: {
          span: 6
        }
      },
      wrapperCol: {
        xs: {
          span: 24
        },
        sm: {
          span: 18
        }
      }
    }, formItemLayout);
  }; // 表单折叠


  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      expand = _useState2[0],
      setExpand = _useState2[1];
  /**
   * 渲染表单列表项
   *
   * @param {*} expandIndex 获取前N个元素索引
   * @param {*} expand      折叠按钮状态
   * @param {*} dataSource  原始表单数据源
   * @param {*} formValues  表单默认值
   */


  var render = function render(expandIndex, expand, dataSource, formValues) {
    // console.log("expand", expand);
    // 用户开启折叠， 提取数组前N个元素
    if (expandIndex && expand) dataSource = ___default['default'].take(dataSource, expandIndex);
    return FillFormItems(dataSource, formValues).map(function (item) {
      // console.log(item);
      // const {children, ...itemProps} = item;
      return RenderFormItem(item, layout, _objectSpread2(_objectSpread2({}, rest), {}, {
        preview: preview
      }));
    });
  }; // 表单重置事件


  var reset = function reset() {
    form.resetFields(); // 调用父组件onReset方法

    if (___default['default'].isFunction(onReset)) onReset(form.getFieldsValue());
  };
  /**
   * 表单提交事件
    (使用自定义方法代替Form默认onFinsh方法原因：
      某些控制的Enter事件会触发onFinsh方法，导致表单错误提交)
   */


  var submit = function submit() {
    form.validateFields().then(function (values) {
      console.log("values", values); // 调用父组件onFinish

      if (___default['default'].isFunction(onFinish)) onFinish(values);
    }).catch(function (errorInfo) {
      console.log("errorInfo", errorInfo);
    });
  }; // 按钮组参数


  var buttonProps = {
    layout: layout,
    submit: submit,
    reset: reset,
    finishText: finishText,
    resetText: resetText,
    expandIndex: expandIndex,
    expand: expand,
    setExpand: setExpand,
    buttonChildren: buttonChildren
  };
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: classNames__default['default'](className, styles$2.container)
  }, /*#__PURE__*/React__default['default'].createElement(antd.Form, _extends({
    form: form,
    ref: pRef
  }, formLayout(layout)), /*#__PURE__*/React__default['default'].createElement(VMSRow, {
    gutter: 24
  }, render(expandIndex, expand, dataSource, formValues), children, !pForm && /*#__PURE__*/React__default['default'].createElement(RenderButtonGroup, buttonProps))));
}

var FormListTree = function FormListTree(props) {
  var pForm = props.pForm,
      _props$name = props.name,
      name = _props$name === void 0 ? "config" : _props$name,
      _props$fieldOptionsMa = props.fieldOptionsMap,
      fieldOptionsMap = _props$fieldOptionsMa === void 0 ? {} : _props$fieldOptionsMa,
      _props$operateOptions = props.operateOptionsMap,
      operateOptionsMap = _props$operateOptions === void 0 ? {} : _props$operateOptions,
      rest = _objectWithoutProperties(props, ["pForm", "name", "fieldOptionsMap", "operateOptionsMap"]);

  var addChild = function addChild(indexStr) {
    var indexArr = indexStr.split("-");

    if (indexArr.length >= 4) {
      return antd.message.warning("最多创建四级结构");
    } // console.log(indexArr);
    // 获取当前表单所有数据


    var FormValues = pForm.getFieldsValue(); // console.log(FormValues);
    // 获取顶技数组

    var data = FormValues[name][indexArr[0]]; // console.log(data);

    var item = [];

    if (indexArr.length === 1) {
      // console.log(indexArr[0], FormValues.config);
      item = FormValues[name][indexArr[0]];
    }

    if (indexArr.length === 2) {
      item = FormValues[name][indexArr[0]].and[indexArr[1]];
    }

    if (indexArr.length === 3) {
      item = FormValues[name][indexArr[0]].and[indexArr[1]].and[indexArr[2]];
    } // console.log(item);


    if (___default['default'].isUndefined(item.and)) {
      //创建同级结构
      item.and = [{
        field: undefined,
        operate: undefined,
        value: undefined,
        and: []
      }];
    } else {
      //创建子集结构
      item.and.push({
        field: undefined,
        operate: undefined,
        value: undefined,
        and: []
      });
    }

    console.log(pForm); // 更新formTree数据

    pForm.setFieldsValue(FormValues);
  }; // 按钮组


  var RenderButtonGroup = function RenderButtonGroup(props) {
    var field = props.field,
        add = props.add,
        remove = props.remove,
        children = props.children;
    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(VMSButton, {
      type: "link",
      icon: /*#__PURE__*/React__default['default'].createElement(icons.ShareAltOutlined, null),
      onClick: function onClick() {
        return add();
      }
    }), children, /*#__PURE__*/React__default['default'].createElement(VMSButton, {
      type: "link",
      icon: /*#__PURE__*/React__default['default'].createElement(icons.CloseCircleOutlined, null),
      onClick: function onClick() {
        return remove(field.name);
      }
    }));
  }; // 页面折叠按钮


  var onCollapse = function onCollapse(id) {
    var dom = document.getElementById("form_list_".concat(id));
    var triangle = document.getElementById("triangle_".concat(id));

    if (dom.style.overflow != "hidden") {
      dom.style.overflow = "hidden";
      dom.style.height = "56px";
      triangle.style.transform = "rotate(-90deg)";
    } else {
      dom.style.overflow = "auto";
      dom.style.height = "auto";
      triangle.style.transform = "rotate(0deg)";
    }
  }; // formlistItem项


  var renderList = function renderList(field, index, add, remove) {
    var buttonProps = {
      add: add,
      field: field,
      remove: remove
    }; // console.log(index);

    return /*#__PURE__*/React__default['default'].createElement("div", {
      id: "form_list_".concat(index),
      key: index,
      style: {
        marginLeft: 20
      }
    }, /*#__PURE__*/React__default['default'].createElement(antd.Space, {
      key: field.key,
      style: {
        display: "flex",
        marginBottom: 0
      },
      align: "baseline"
    }, /*#__PURE__*/React__default['default'].createElement(VMSButton, {
      id: "triangle_".concat(index),
      type: "link",
      icon: /*#__PURE__*/React__default['default'].createElement(icons.CaretDownOutlined, null),
      onClick: function onClick() {
        return onCollapse(index);
      }
    }), /*#__PURE__*/React__default['default'].createElement(VMSFormItem, _extends({}, field, {
      name: [field.name, "field"],
      fieldKey: [field.fieldKey, "field"],
      rules: [{
        required: true,
        message: "请选择"
      }]
    }), /*#__PURE__*/React__default['default'].createElement(VMSSelect, {
      map: fieldOptionsMap,
      style: {
        width: 150
      },
      placeholder: "\u8BF7\u9009\u62E9"
    })), /*#__PURE__*/React__default['default'].createElement(VMSFormItem, _extends({}, field, {
      name: [field.name, "operate"],
      fieldKey: [field.fieldKey, "operate"],
      rules: [{
        required: true,
        message: "请选择"
      }]
    }), /*#__PURE__*/React__default['default'].createElement(VMSSelect, {
      map: operateOptionsMap,
      style: {
        width: 150
      },
      placeholder: "\u8BF7\u9009\u62E9"
    })), /*#__PURE__*/React__default['default'].createElement(VMSFormItem, {
      shouldUpdate: true,
      noStyle: true
    }, function (_ref) {
      var getFieldsValue = _ref.getFieldsValue;
      console.log(getFieldsValue());
      return /*#__PURE__*/React__default['default'].createElement(VMSFormItem, _extends({}, field, {
        name: [field.name, "value"],
        fieldKey: [field.fieldKey, "value"],
        rules: [{
          required: true,
          message: "请输入"
        }],
        shouldUpdate: true
      }), /*#__PURE__*/React__default['default'].createElement(VMSInput, {
        placeholder: "\u8BF7\u8F93\u5165..."
      }));
    }), /*#__PURE__*/React__default['default'].createElement(RenderButtonGroup, buttonProps, /*#__PURE__*/React__default['default'].createElement(VMSButton, {
      type: "link",
      icon: /*#__PURE__*/React__default['default'].createElement(icons.ForkOutlined, null),
      onClick: function onClick() {
        return addChild(index);
      }
    }))), /*#__PURE__*/React__default['default'].createElement(antd.Form.List, {
      name: [field.name, "and"]
    }, function (fields, _ref2) {
      var add = _ref2.add,
          remove = _ref2.remove;
      return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, !___default['default'].isEmpty(fields) && fields.map(function (field, key) {
        return renderList(field, "".concat(index, "-").concat(key), add, remove);
      }));
    }));
  };

  return /*#__PURE__*/React__default['default'].createElement(antd.Form.List, {
    name: name
  }, function (fields, _ref3) {
    var add = _ref3.add,
        remove = _ref3.remove;
    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, !___default['default'].isEmpty(fields) && fields.map(function (field, index) {
      return renderList(field, "".concat(index), add, remove);
    }));
  });
};

exports.BaseForm = BaseForm;
exports.BaseFormListTree = FormListTree;
exports.BaseTable = BaseTable$1;
exports.Foo = index;
