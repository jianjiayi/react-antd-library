## BaseForm

- 多条件检索表单，开启折叠效果:

```jsx
import React from 'react';
import { Button } from 'antd';
import { BaseForm } from 'library';

// 表单配置
const searchFromProps = {
  layout: 'inline',
  expandIndex: 4, //开启折叠效果
  onReset: values => {
    console.log('表单已被重置,数据为：', values);
    // 处理副作用或业务逻辑
  },
  onFinish: values => {
    console.log('提交表单：数据为：', values);
    // 处理副作用或业务逻辑
  },
  buttonChildren: () => <Button type="dashed">创建</Button>,
  formValues: {
    filed1: '张三',
    filed2: '1',
    filed3: 14,
    filed4: '1',
    filed5: '国贸二期',
    filed6: '1',
  },
  dataSource: [
    {
      label: '姓名',
      name: 'filed1',
      type: 'Input',
      allowClear: true,
    },
    {
      label: '性别',
      name: 'filed2',
      type: 'Select',
      style: { width: '100%' },
      allowClear: true,
      map: { 1: '男', 2: '女' },
    },
    {
      label: '年龄',
      name: 'filed3',
      type: 'Input',
      allowClear: true,
    },
    {
      label: '职业',
      name: 'filed4',
      type: 'Select',
      style: { width: '100%' },
      allowClear: true,
      map: { 1: '学生', 2: '在职' },
    },
    {
      label: '住址',
      name: 'filed5',
      type: 'Input',
      allowClear: true,
    },
    {
      label: '户籍',
      name: 'filed6',
      type: 'Select',
      style: { width: '100%' },
      allowClear: true,
      map: { 1: '北京', 2: '上海' },
    },
    {
      label: '工作时间',
      name: 'filed7',
      type: 'DatePicker',
      pickerType: 'RangePicker',
      style: { width: '100%' },
      multiple: 2, // 制定FormItem所占比例未原来倍数，该配置所占比例放大2倍
    },
    {
      label: '户籍',
      name: 'filed9',
      type: 'Select',
      style: { width: '100%' },
      allowClear: true,
      map: { 1: '北京', 2: '上海' },
    },
  ],
};

export default () => <BaseForm {...searchFromProps}></BaseForm>;
```

- 创建一个基本表单

```jsx
import React from 'react';

import { Form, Row, Col, Select, Input } from 'antd';
import { BaseForm } from 'library';

const ItemRenderSelect = props => {
  const { id, value, onChange, style, ...rest } = props;

  return (
    <Row style={style}>
      <Col span={12}>
        <Form.Item name={[id, 'key']} noStyle>
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item name={[id, 'value']} noStyle>
          <Input placeholder={'请输入....'} />
        </Form.Item>
      </Col>
    </Row>
  );
};

function CreateForm(props) {
  const fromProps = {
    resetText: '返回',
    finishText: '提交',
    onReset: values => {
      console.log('表单已被重置,数据为：', values);
      // 处理副作用或业务逻辑
    },
    onFinish: values => {
      console.log('提交表单：数据为：', values);
      // 处理副作用或业务逻辑
    },
    formValues: {
      INPUT: '测试....',
      SELECT: ['2'],
      RADIO: '1',
      CHECKBOX: ['1', '2'],
    },
    dataSource: [
      {
        label: '输入框',
        name: 'INPUT',
        type: 'Input',
        allowClear: true,
        children: [
          {
            label: '输入框',
            name: 'INPUT',
            type: 'Input',
            allowClear: true,
          },
          {
            label: '文本域',
            name: 'TextArea',
            type: 'TextArea',
            rows: 4,
            allowClear: true,
          },
        ],
      },
      {
        label: '文本域',
        name: 'TextArea',
        type: 'TextArea',
        rows: 4,
        allowClear: true,
      },
      {
        label: 'Switch开关',
        name: 'Switch',
        type: 'Switch',
        checkedChildren: '开启',
        unCheckedChildren: '关闭',
        defaultChecked: true,
      },
      {
        label: '下拉选项',
        name: 'SELECT',
        type: 'Select',
        mode: 'multiple',
        // style: { width: 300 },
        allowClear: true,
        map: { 1: '测试1', 2: '测试2' },
      },
      {
        label: '单选',
        name: 'RADIO',
        type: 'Radio',
        required: true,
        map: { 1: '单选1', 2: '单选2', 3: '单选1' },
      },
      {
        label: '复选',
        name: 'CHECKBOX',
        type: 'CheckBox',
        required: true,
        map: { 1: '复现1', 2: '复选2', 3: '复现3' },
      },
      {
        label: 'DatePicker时间选择器',
        name: 'DatePicker',
        type: 'DatePicker',
        pickerType: 'DatePicker',
        required: true,
      },
      {
        label: 'RangePicker时间范围选择器',
        name: 'RangePicker',
        type: 'DatePicker',
        pickerType: 'RangePicker',
        required: true,
      },
      {
        label: 'TimePicker时间范围选择器',
        name: 'TimePicker',
        type: 'DatePicker',
        pickerType: 'TimePicker',
        required: true,
      },
      {
        label: 'itemRender',
        name: 'json',
        itemRender: (
          <ItemRenderSelect style={{ width: 500 }}></ItemRenderSelect>
        ),
      },
    ],
  };
  return (
    <>
      <h3>创建一个基本表单</h3>
      <BaseForm {...fromProps} key={2}></BaseForm>
    </>
  );
}
export default CreateForm;
```

- 页面内多表单共存

```jsx
import React from 'react';
import { BaseForm } from 'library';
import {
  Form,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};

function NestForm() {
  const [selfForm] = Form.useForm();

  const fromProps = {
    pForm: selfForm,
    formItemLayout: layout,
    formValues: {
      INPUT: '测试....',
      SELECT: '2',
    },
    dataSource: [
      {
        label: '输入框',
        name: 'INPUT',
        type: 'Input',
        allowClear: true,
      },
      {
        label: '文本域',
        name: 'TextArea',
        type: 'TextArea',
        rows: 4,
        allowClear: true,
      },
    ],
  };

  // 表单重置事件
  const reset = () => {
    selfForm.resetFields();
    // 调用父组件onReset方法
  };

  /**
   * 表单提交事件
   */
  const submit = () => {
    selfForm
      .validateFields()
      .then(values => {
        console.log('values', values);
        // 调用父组件onFinish
      })
      .catch(errorInfo => {
        console.log('errorInfo', errorInfo);
      });
  };
  return (
    <>
      <h3>
        FormRender表单、基本表单混合使用。基本组件和FormRender不存在嵌套关系，即同级结构。通过父组件的pForm属性将不同表单关联到一起。
      </h3>
      <div>
        {/* FormRender组件 */}
        <BaseForm {...fromProps}></BaseForm>

        {/* <iframe
          src="https://blog.csdn.net/"
          width="1000px"
          height="300px"
        ></iframe> */}

        {/* 基本Form表单 */}
        <Form name="basic" form={selfForm} {...layout}>
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input style={{ maxWidth: 500 }} />
          </Form.Item>
          <Form.Item label="Form Size" name="size">
            <Radio.Group>
              <Radio.Button value="small">Small</Radio.Button>
              <Radio.Button value="default">Default</Radio.Button>
              <Radio.Button value="large">Large</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Input">
            <Input style={{ maxWidth: 500 }} />
          </Form.Item>
          <Form.Item label="Select">
            <Select style={{ maxWidth: 500 }}>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="TreeSelect">
            <TreeSelect
              treeData={[
                {
                  title: 'Light',
                  value: 'light',
                  children: [{ title: 'Bamboo', value: 'bamboo' }],
                },
              ]}
              style={{ maxWidth: 500 }}
            />
          </Form.Item>
        </Form>
        {/* 触发表单元素 */}
        <Form.Item wrapperCol={{ span: 16, offset: 6 }}>
          <div className="">
            <Button type="primary" onClick={() => submit()}>
              提交
            </Button>
            <Button
              type="dashed"
              onClick={() => reset()}
              style={{ marginLeft: 40 }}
            >
              返回
            </Button>
          </div>
        </Form.Item>
      </div>
    </>
  );
}
export default NestForm;
```

## API

- Form 表单基础配置

| 字段名称       |   类型   | 是否必填 |                            说明                             |
| :------------- | :------: | :------: | :---------------------------------------------------------: |
| pForm          |  string  |    否    |                          表单实例                           |
| preview        |  string  |    否    |         是否开启预览模式，开启后所有表单将不能编辑          |
| className      |  object  |    否    |                          外部样式                           |
| dataSource     |    []    |    是    |                      //表单默认数据源                       |
| formValues     |    {}    |    是    |                        表单默认数据                         |
| layout         |    {}    |    否    |                                                             |
| formItemLayout |    {}    |    否    |              只有当 layout = "horizontal"生效               |
| children       |    {}    |    否    |              表单额外配置，常用与集成扩展表单               |
| buttonChildren |    {}    |    否    |                       按钮组扩展配置                        |
| expandIndex    |  number  |    否    | 折叠数据索引（原理截取 dataSource 前 expand 的数据展示出来) |
| onReset        | function |    否    |                        表单重置方法                         |
| resetText      |  string  |    否    |                        重置按钮文案                         |
| onFinish       | function |    否    |                        提交表单方法                         |
| finishText     |  string  |    否    |                      提交按钮默认文案                       |
