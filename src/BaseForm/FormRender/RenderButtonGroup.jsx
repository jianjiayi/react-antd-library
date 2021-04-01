import _ from "lodash";
import { VMSCol, VMSButton, VMSFormItem } from "../components/index";

import { DownOutlined, UpOutlined } from "@ant-design/icons";
import styles from "./index.module.less";

const RenderButtonGroup = (props) => {
  const {
    layout,
    submit,
    reset,
    finishText,
    resetText,
    expandIndex,
    expand,
    setExpand,
    buttonChildren,
    ...rest
  } = props;

  // 折叠按钮
  const rendeRexpandButton = (index, status) => {
    if (index)
      return (
        <VMSButton
          type="link"
          onClick={() => {
            setExpand(!expand);
          }}
        >
          {status ? "展开" : "收起"}
          {status ? <DownOutlined /> : <UpOutlined />}
        </VMSButton>
      );
  };

  return (
    <VMSCol style={{ flex: 1 }}>
      <VMSFormItem
        wrapperCol={{
          xs: { span: 24 },
          sm: { offset: 6, span: 18 },
        }}
      >
        <div
          className={
            layout === "inline"
              ? styles["button-groups-inline"]
              : styles["button-groups"]
          }
        >
          <VMSButton
            type="primary"
            onClick={() => {
              submit();
            }}
          >
            {finishText}
          </VMSButton>
          <VMSButton type="dashed" onClick={() => reset()}>
            {resetText}
          </VMSButton>
          {/* 折叠按钮 */}
          {rendeRexpandButton(expandIndex, expand)}
          {/* 嵌入按钮配置 */}
          {_.isFunction(buttonChildren) && buttonChildren()}
        </div>
      </VMSFormItem>
    </VMSCol>
  );
};

export default RenderButtonGroup;
