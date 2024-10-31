# file-icons-vue

> file-icons-vue, a npm package that provides file icons for Vue.js projects
>
> Author: [zyyzyykk](https://github.com/zyyzyykk/)
>
> Source Code: https://github.com/zyyzyykk/file-icons-vue
>
> Npm Address: https://www.npmjs.com/package/file-icons-vue
>
> Update Time: 2024-10-31

<p align="center"><a href="https://www.npmjs.com/package/file-icons-vue" target="_blank" rel="noopener noreferrer"><img width="100" src="http://img.kkbapps.com/logo/file-icons-vue.png" alt="file-icons-vue logo"></a></p>

<p align="center">
  <a href="https://www.npmjs.com/package/file-icons-vue"><img src="https://img.shields.io/npm/d18m/file-icons-vue.svg" alt="Npm Install"></a>
  <a href="https://cn.vuejs.org/"><img src="https://img.shields.io/badge/vue-3.x-green?color=42b883" alt="Vue Version"></a>
  <a href="https://www.python.org/downloads/release/python-3111/"><img src="https://img.shields.io/badge/python-3.11-blue" alt="Python Version"></a>
  <a href="https://www.apache.org/licenses/"><img src="https://img.shields.io/badge/licence-Apache-orange" alt="Apache Licence"></a>
  <a href="https://github.com/zyyzyykk/file-icons-vue"><img src="https://img.shields.io/github/stars/zyyzyykk/file-icons-vue" alt="GitHub"></a>
</p>
<p align="center">English ｜ <a href="./doc/zh_CN/README.md" >简体中文</a></p>

### ⚡ Quick Importing

1.Installation dependencies: recommended to install the latest version

```sh
# all icons
npm i file-icons-vue
# common icons
npm i file-icons-vue-min
```

2.Importing components in the Vue3 project:

```vue
<template>
  <FileIcons 
     name="text.txt" :width="30" :height="30" 
     :isFolder="false" :isMulti="false" :isLink="false" 
     :style="{'float':'right'}" 
  />
</template>

<script>
// import file icon component
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

### 🛸 Preview

![Preview](http://img.kkbapps.com/file-icons-vue/file-icons-vue-preview-1.3.1.png)

### 💡 Function Description

1.`file-icons-vue` is a component used to display icons corresponding to file suffixes, which has been packaged and published in the npm repository. file-icons-vue provides a rich set of icons, including common file types and extensions, to enhance the visualization of projects

2.The props parameters received by the component:

| Parameter | Type    | Meaning              | Description                                                  |
| --------- | ------- | -------------------- | ------------------------------------------------------------ |
| name      | String  | Full file name       | Must be transmitted                                          |
| width     | Number  | Icon width (px)      | Default value is 20 (px)                                     |
| height    | Number  | Icon height (px)     | Default value is 20 (px)                                     |
| style     | Object  | Icon custom style    | The width and height attributes in the object do not take effect (will be overwritten by the width and height above) |
| isFolder  | Boolean | Is it a folder       | Default value is false                                       |
| isMulti   | Boolean | Is it multiple files | Default value is false                                       |
| isLink    | Boolean | Is it linked file    | Default value is false                                       |

### 👨‍💻 Update Records

##### file-icons-vue@1.3.1: latest

- Add `isLink` attribute, supports displaying reference type files
- Remove duplicate icons and reduce packaging volume
- Modify `.html` icon

##### file-icons-vue@1.2.8: 

Add `isMulti` attribute, supporting multi file display

##### file-icons-vue@1.2.7:

Add `.dot`、`.env`、`.mk`、`.tgz` icons

##### file-icons-vue@1.2.6:

Correcting spelling errors in the props parameter of the component: changing from isFloder to **isFolder**

[**History Update Records**](./doc/en_US/UPDATE.md)

### 🏘️ About this project

Author: [zyyzyykk](https://github.com/zyyzyykk/)

Welcome to provide valuable opinions or suggestions on this project, and you can also join us in maintaining and developing this project together
