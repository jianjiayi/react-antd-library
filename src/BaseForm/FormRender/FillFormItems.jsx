import _ from "lodash";
/**
 * 获取formItem 配置参数
 * @param {*} items       所有props
 * @param {*} formValues  默认值
 */
const FillFormItems = (items, formValues) => {
  if (_.isEmpty(items)) return [];

  return items.map((item) => {
    const {
      label = "",
      name = "",
      required = false,
      validator = null,
      help = null,
      initialValue = formValues[name] || undefined,
    } = item;

    // 必填项
    const rules = validator
      ? [{ required: required, message: `请输入${label}` }, { validator }]
      : [{ required: required, message: `请输入${label}` }];
    return {
      options: {
        rules: required ? rules : null,
        initialValue,
        help,
      },
      ...item,
    };
  });
};
export default FillFormItems;
