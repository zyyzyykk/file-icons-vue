# file-icons-vue

> file-icons-vue，为 Vue.js 项目提供文件图标的npm依赖库
>
> 作者：[zyyzyykk](https://github.com/zyyzyykk/)
>
> 源代码：https://github.com/zyyzyykk/file-icons-vue
>
> npm地址：https://www.npmjs.com/package/file-icons-vue
>
> 更新时间：2024-11-01

<p align="center"><a href="https://www.npmjs.com/package/file-icons-vue" target="_blank" rel="noopener noreferrer"><img width="100" src="http://img.kkbapps.com/logo/file-icons-vue.png" alt="file-icons-vue logo"></a></p>

<p align="center">
  <a href="https://www.npmjs.com/package/file-icons-vue"><img src="https://img.shields.io/npm/d18m/file-icons-vue.svg" alt="Npm Install"></a>
  <a href="https://cn.vuejs.org/"><img src="https://img.shields.io/badge/vue-3.x-green?color=42b883" alt="Vue Version"></a>
  <a href="https://www.python.org/downloads/release/python-3111/"><img src="https://img.shields.io/badge/python-3.11-blue" alt="Python Version"></a>
  <a href="https://www.apache.org/licenses/"><img src="https://img.shields.io/badge/licence-Apache-orange" alt="Apache Licence"></a>
  <a href="https://github.com/zyyzyykk/file-icons-vue"><img src="https://img.shields.io/github/stars/zyyzyykk/file-icons-vue" alt="GitHub"></a>
</p>
<p align="center">简体中文 ｜ <a href="../en_US/README.md" >English</a></p>

### ⚡ 快速引入

1.安装依赖：建议安装最新版

```sh
# 全部图标
npm i file-icons-vue
# 常用图标
npm i file-icons-vue-min
```

2.在vue3项目中引入组件：

```vue
<template>
  <FileIcons 
     name="text.txt" :width="30" :height="30" 
     :isFolder="false" :isMulti="false" :isLink="false" 
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

### 🛸 预览

![预览](http://img.kkbapps.com/file-icons-vue/file-icons-vue-preview-1.3.2.png)

### 💡 功能说明

1.`file-icons-vue` 是一个用于展示文件后缀对应图标的vue3组件，已打包并发布在npm仓库中。file-icons-vue提供了丰富的图标集，包括常见的文件类型和扩展名，用于增强项目的可视化效果

2.组件接收的props参数：

| 参数名    | 类型    | 含义                 | 说明                   |
| --------- | ------- | -------------------- | ---------------------- |
| name      | String  | 文件全名称           | 必传                   |
| width     | Number  | 图标宽度（px）       | 默认值为20（px）       |
| height    | Number  | 图标高度（px）       | 默认值为20（px）       |
| iconStyle | Object  | 文件图标自定义样式   | 对象中的宽高属性不生效 |
| linkStyle | Object  | 引用图标自定义样式   | 对象中的宽高属性不生效 |
| style     | Object  | 图标父元素自定义样式 | 对象中的宽高属性不生效 |
| isFolder  | Boolean | 是否为文件夹         | 默认值为false          |
| isMulti   | Boolean | 是否为多文件         | 默认值为false          |
| isLink    | Boolean | 是否为引用文件       | 默认值为false          |

### 👨‍💻 更新记录

##### file-icons-vue@1.3.2 ：latest

- 新增 `iconStyle`、`linkStyle` 属性，修改 `style` 属性含义

##### file-icons-vue@1.3.1 ：

- 新增 `isLink` 属性，支持引用类型文件显示
- 去除重复图标，减小打包体积
- 修改 `.html` 图标

##### file-icons-vue@1.2.8 ：

新增 `isMulti` 属性，支持多文件显示

##### file-icons-vue@1.2.7 ：

新增 `.dot`、`.env`、`.mk`、`.tgz` 图标

[**历史更新记录**](./UPDATE.md)

### 🏘️ 关于此项目

作者：[zyyzyykk](https://github.com/zyyzyykk/)

欢迎对此项目提出宝贵的意见或建议，也可以加入我们一起进行此项目的维护与开发
