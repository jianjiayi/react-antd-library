import { isArray, isFunction, isPlainObject } from "lodash";
/**
 * 对象转为entry数组
 *
 * @param object   原对象
 * @param callback 转换方式
 * @returns {any}
 */
function entries(object, callback = (item) => item) {
  // 对象
  if (isPlainObject(object))
    return Object.entries(object).map(([key, value]) =>
      callback({ key, value })
    );
  // 数组
  if (isArray(object)) return object.map((v) => callback(v.key, v.value));
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
export function renderGroupComponent(iterable, Parent, Item, props) {
  // console.log(props);
  if (iterable) {
    const forEach = ({ key, value }) => (
      <Item key={key} value={key}>
        {value}
      </Item>
    );
    const child = isArray(iterable)
      ? iterable.map(forEach)
      : entries(iterable, forEach);
    return <Parent {...props}>{child}</Parent>;
  }
  return null;
}
