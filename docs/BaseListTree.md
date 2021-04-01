## BaseListTree

Demo:

```jsx
import React, { useState, useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Form, Select, Button, Input } from 'antd';
import { BaseFormListTree } from 'library';

// 表单默认数据
const initialValues = {
  formTree: [
    {
      field: undefined,
      value: undefined,
      operate: undefined,
      and: [],
    },
  ],
};

function FromListTree() {
  const [selfForm] = Form.useForm();

  const [formValues, setFormValues] = useState(initialValues);

  // 获取异步数据
  useEffect(() => {
    // const { code, data } = getFormTreeApi();
    // if (code === 200) {
    //   setFormValues(data);
    // }
  }, []);

  // formListTree参数
  const formListTreeProps = {
    name: 'formTree', // 字段名称
    pForm: selfForm, // useForm
    fieldOptionsMap: { 1: '版本号', 2: '审批类型' }, //第一列options集合
    operateOptionsMap: {
      // 第二列options集合
      1: '=',
      2: '!=',
      3: 'like',
      4: 'not like',
      5: '>',
      6: '>=',
      7: '<',
      8: '<=',
    },
    operateInt: ['1', '2', '4'], //第二列关联第三列输入框需要int类型的的选型
  };

  //提交表单方法
  const onFinish = values => {
    console.log(values);
  };

  return (
    <>
      <Form
        form={selfForm}
        onFinish={onFinish}
        initialValues={formValues}
        autoComplete="off"
      >
        <BaseFormListTree {...formListTreeProps}></BaseFormListTree>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
export default FromListTree;
```

## API

| 字段名称          |  类型  | 是否必填 |                    说明                     |
| :---------------- | :----: | :------: | :-----------------------------------------: |
| name              | string |    是    |                  字段名称                   |
| pForm             | string |    否    |                  表单实例                   |
| fieldOptionsMap   | object |    是    |             第一列 options 集合             |
| operateOptionsMap | object |    是    |             第二列 options 集合             |
| operateInt        | array  |    是    | 第二列关联第三列输入框需要 int 类型的的选型 |
