# file-icons-vue

> file-icons-vue，为 Vue.js 项目提供文件图标的npm依赖库
>
> file-icons-vue, a npm dependency package that provides file icons for Vue.js projects.
>
> 作者：[zyyzyykk](https://github.com/zyyzyykk/)
>
> 源代码：https://github.com/zyyzyykk/file-icons-vue
>
> npm地址：https://www.npmjs.com/package/file-icons-vue
>
> 更新时间：2024-04-29

<p align="center"><a href="https://www.npmjs.com/package/file-icons-vue" target="_blank" rel="noopener noreferrer"><img width="100" src="https://img.kkbapps.com/logo/file-icons-vue.png" alt="file-icons-vue logo"></a></p>

<p align="center">
  <a href="https://www.npmjs.com/package/file-icons-vue"><img src="https://img.shields.io/badge/npm_install-1k+-red" alt="Npm Install"></a>
  <a href="https://cn.vuejs.org/"><img src="https://img.shields.io/badge/vue-3.x-green?color=42b883" alt="Vue Version"></a>
  <a href="https://www.python.org/downloads/release/python-3111/"><img src="https://img.shields.io/badge/python-3.11-blue" alt="Python Version"></a>
  <a href="https://www.apache.org/licenses/"><img src="https://img.shields.io/badge/licence-Apache-orange" alt="Apache Licence"></a>
  <a href="https://github.com/zyyzyykk/file-icons-vue"><img src="https://img.shields.io/badge/gitHub_star-10+-yellow" alt="GitHub"></a>
</p>


### **⚡** 快速引入

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
     name="test.txt" width="30" height="30" 
     :isFolder="false" :style="{'float':'right'}" 
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

![预览](https://img.kkbapps.com/file-icons-vue/file-icons-vue-preview1.png)

### 💡 功能说明

1.`file-icons-vue` 是一个用于展示文件后缀对应图标的vue3组件，已打包并发布在npm仓库中。file-icons-vue提供了丰富的图标集，包括常见的文件类型和扩展名，用于增强项目的可视化效果

2.组件接收的props参数：

| 参数名   | 类型    | 含义           | 说明                                      |
| -------- | ------- | -------------- | ----------------------------------------- |
| name     | String  | 文件全名称     | 必传                                      |
| width    | String  | 图标宽度(px)   | 默认值为20px                              |
| height   | String  | 图标高度(px)   | 默认值为20px                              |
| style    | Object  | 图标自定义样式 | 对象中的宽高属性会覆盖上面的width、height |
| isFolder | Boolean | 是否为文件夹   | 默认值为false                             |

3.`file-icons-vue` 包含的全部图标：

![file-icons-vue的所有图标-1](https://img.kkbapps.com/file-icons-vue/1.2.7-1.png)

![file-icons-vue的所有图标-2](https://img.kkbapps.com/file-icons-vue/1.2.7-2.png)

4.`file-icons-vue-min` 包含的常用图标：

![file-icons-vue-min的所有图标](https://img.kkbapps.com/file-icons-vue/1.0.5-min-2.png)

### 👨‍💻 更新记录

##### file-icons-vue@1.2.7 ：latest

新增 `.dot`、`.env`、`.mk`、`.tgz` 图标

##### file-icons-vue@1.2.6 ：

纠正组件props参数的拼写错误：由 isFloder 修改为 **isFolder**

##### file-icons-vue@1.2.5 ：

新增 `.dtd`、`.ppa`、`.pwz`、`.ras`、`.vdx`、`.vsd`、`.wiz`、`.wmv`、`.wsdl`、`.xhtml`、`.xsl` 图标

##### file-icons-vue@1.2.2 ：

props参数变为响应式，例如当文件名改变时会自动变成对应图标

##### [历史更新记录](./UPDATE.md)

### 🏘️ 关于此项目

作者：[zyyzyykk](https://github.com/zyyzyykk/)

欢迎对此项目提出宝贵的意见或建议，也可以加入我们一起进行此项目的维护与开发
