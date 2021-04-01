## BaseTable

基础列表:

```jsx
import React from 'react';
import _ from 'lodash';
import { Button, Popover } from 'antd';
import {BaseTable} from 'library';

import moment from 'moment';

const formatDate = dateStr => {
  return moment(dateStr).format('YYYY-MM-DD HH:mm:ss');
};

const showDrawer = (text, row)=>{
    console.log(text, row);
}

const TableList = (props) => {
  // 列表配置
  const tableProps = {
    loading:false,
    // scroll: { x: 1800 },
    // 类型
    selectionType: null, // checkbox or radio or null||false
    // 表头
    columns: [
      {
        title: '序号',
        dataIndex: 'id',
        key: 'id',
        width: '100px',
        align: 'center',
      },
      {
        title: 'BuildCode',
        align: 'center',
        dataIndex: 'build_record',
        key: 'build_code',
      },
      {
        title: '版本',
        align: 'center',
        dataIndex: 'version',
        key: 'version',
      },
      {
        title: '平台',
        align: 'center',
        dataIndex: 'platform_name',
        key: 'platform_name',
      },
      {
        title: '阶段',
        align: 'center',
        dataIndex: 'times_phase',
        key: 'times_phase',
      },
      {
        title: '类型',
        align: 'center',
        dataIndex: 'build_type_name',
        key: 'build_type_name',
      },
      {
        title: '版本包地址',
        align: 'center',
        width: '200px',
        render: r => (
          <Popover
            content={
              <div>
                <img src={r.qrcode_url} height="150" width="150"></img>
              </div>
            }
            placement="bottomLeft"
          >
            <a href={r.package_url} target="_blank">
              下载
            </a>
          </Popover>
        ),
      },
      {
        title: '发布时间',
        align: 'center',
        dataIndex: 'publish_time',
        key: 'publish_time',
        render: text => <span>{formatDate(text)}</span>,
      },
      {
        title: '发布人',
        align: 'center',
        dataIndex: 'trigger_user',
        key: 'trigger_user',
      },
      {
        title: '版本详情',
        dataIndex: 'detail_url',
        key: 'detail_url',
        align: 'center',
        width: '250px',
        render: text => (
          <a href={text} target="_blank">
            链接
          </a>
        ),
      },
      {
        title: '更多',
        key: 'more',
        fixed: 'right',
        width: '100px',
        align: 'center',
        render: (text, row, index) => (
          <a
            onClick={data => {
              showDrawer(text, row);
            }}
          >
            查看
          </a>
        ),
      },
    ],
    dataSource: [
      {
        active: true,
        app_id: 491,
        app_type: 2,
        branch: 'dev',
        build_code: 1047,
        build_record: 200,
        build_status: '成功',
        build_status_id: 0,
        build_type_name: 'TF',
        change_log_url: null,
        create_at: '2021-04-01T17:09:02.260946+08:00',
        detail_url:
          'http://bamboo.jd.com/platform/#/app/491/pipeline/pipelineBuildLayout/pipelineBuildDetail?buildId=349524&pipelineId=851',
        git_repo_name: 'JDLTAppModule',
        id: 197,
        package_url:
          'http://storage.jd.com/com.bamboo.ios.product/491/349524/JDMOBILELITE-V3.3.2-100.1047-APPSTORE-405d3020-20210401170013.ipa',
        phase: '灰度包',
        platform_name: 'iOS',
        publish_time: '2021-04-01T17:09:02.249442+08:00',
        qrcode_url:
          'https://storage.jd.com/com.bamboo.ios.product/491/349524/mJDMOBILELITE-V3.3.2-100.1047-APPSTORE-405d3020-20210401170013_m.png',
        times: 1,
        times_phase: '第1次灰度包',
        trigger_user: 'xn_vms_ci',
        update_at: '2021-04-01T17:09:02.260994+08:00',
        version: '3.3.2',
      },
    ],
    pagination: {
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: (total) => `共 ${total} 条`,
      pageSize: 10,
      current: 1,
      total: null,
    },
    onPageChg: () => {},
  };

  return <BaseTable {...tableProps}></BaseTable>;
}

export default TableList;
```
