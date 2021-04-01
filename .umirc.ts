import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'VMS组件库',
  favicon: 'http://vmsone.jd.com/static/logo.2429e25f.svg',
  logo: 'http://vmsone.jd.com/static/logo.2429e25f.svg',
  outputPath: 'docs-dist',
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
  theme: {
    '@primary-color': '#1DA57A',
  },
  // more config: https://d.umijs.org/config
});