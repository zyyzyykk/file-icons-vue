# file-icons-vue

> 一个Vue3项目的文件图标库
>
> 作者：[zyyzyykk](https://github.com/zyyzyykk/)
>
> 源代码：https://github.com/zyyzyykk/file-icons-vue
>
> npm地址：https://www.npmjs.com/package/file-icons-vue
>
> 更新时间：2026-06-20

<p align="center"><a href="https://www.npmjs.com/package/file-icons-vue" target="_blank" rel="noopener noreferrer"><img width="100" src="https://kkbapps.oss-cn-shanghai.aliyuncs.com/logo/file-icons-vue.png" alt="file-icons-vue logo"></a></p>

<p align="center">
  <a href="https://www.npmjs.com/package/file-icons-vue"><img src="https://img.shields.io/npm/d18m/file-icons-vue.svg?logo=npm&logoColor=CB3837" alt="Npm Install"></a>
  <a href="https://cn.vuejs.org/"><img src="https://img.shields.io/badge/vue-3.x-green?color=42b883&logo=vue.js" alt="Vue Version"></a>
  <a href="https://www.python.org/downloads/release/python-3111/"><img src="https://img.shields.io/badge/python-3.11-blue?logo=Python&color=3776AB" alt="Python Version"></a>
  <a href="https://www.apache.org/licenses/"><img src="https://img.shields.io/badge/licence-Apache-red?logo=apache&logoColor=%23D22128" alt="Apache Licence"></a>
  <a href="https://github.com/zyyzyykk/file-icons-vue"><img src="https://img.shields.io/github/stars/zyyzyykk/file-icons-vue" alt="GitHub"></a>
</p>
<p align="center">简体中文 ｜ <a href="../en_US/README.md" >English</a></p>

### ⚡ 快速使用

1. 安装最新版库

```sh
# 全部图标
npm i file-icons-vue
# 常用图标
npm i file-icons-vue-min
```

2. 在你的Vue3项目中引入组件：

```vue
<template>
  <FileIcons 
     name="text.txt" :width="30" :height="30" 
     :isFolder="false" :isMulti="false" :isLink="false" 
     :itemStyle="{display: 'flex', alignItems: 'center'}" 
     :iconStyle="{opacity: 0.5}" 
  />
</template>

<script>
// 引入文件图标组件
import FileIcons from 'file-icons-vue';

export default {
  name: 'App',
  components: {
    FileIcons
  }
}
</script>

<style>
</style>
```

### 👀 预览

![预览](https://kkbapps.oss-cn-shanghai.aliyuncs.com/file-icons-vue/Preview.png)

### 💡 参数说明

| 参数名    | 类型    | 说明                 | 备注                   |
| --------- | ------- | -------------------- | ---------------------- |
| name      | String  | 文件全名称           | 必传                   |
| width     | Number  | 图标宽度（px）       | 默认值为20（px）       |
| height    | Number  | 图标高度（px）       | 默认值为20（px）       |
| iconStyle | Object  | 文件图标自定义样式   | 对象中的宽高属性不生效 |
| linkStyle | Object  | 引用图标自定义样式   | 对象中的宽高属性不生效 |
| itemStyle | Object  | 图标父元素自定义样式 | 对象中的宽高属性不生效 |
| isFolder  | Boolean | 是否为文件夹         | 默认值为false          |
| isMulti   | Boolean | 是否为多文件         | 默认值为false          |
| isLink    | Boolean | 是否为引用文件       | 默认值为false          |

### 👨‍💻 更新记录

##### file-icons-vue@1.3.5 ：latest

- 优化代码逻辑和文档

##### file-icons-vue@1.3.4 ：

- 新增 `itemStyle` 属性替换  `style` 属性
- 新增 `.hh`、`.xaml`、`.xsd`、`.xslt` 图标，修改 `.xsl` 图标

##### file-icons-vue@1.3.2 ：

- 新增 `iconStyle`、`linkStyle` 属性，修改 `style` 属性含义

##### file-icons-vue@1.3.1 ：

- 新增 `isLink` 属性，支持引用类型文件显示
- 去除重复图标，减小打包体积
- 修改 `.html` 图标

[**历史更新记录**](./UPDATE.md)
