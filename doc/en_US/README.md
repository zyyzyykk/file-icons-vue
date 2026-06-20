# file-icons-vue

> A file icons package for Vue3 projects
>
> Author: [zyyzyykk](https://github.com/zyyzyykk/)
>
> Source Code: https://github.com/zyyzyykk/file-icons-vue
>
> Npm Address: https://www.npmjs.com/package/file-icons-vue
>
> Update Time: 2026-06-20

<p align="center"><a href="https://www.npmjs.com/package/file-icons-vue" target="_blank" rel="noopener noreferrer"><img width="100" src="https://kkbapps.oss-cn-shanghai.aliyuncs.com/logo/file-icons-vue.png" alt="file-icons-vue logo"></a></p>

<p align="center">
  <a href="https://www.npmjs.com/package/file-icons-vue"><img src="https://img.shields.io/npm/d18m/file-icons-vue.svg?logo=npm&logoColor=CB3837" alt="Npm Install"></a>
  <a href="https://cn.vuejs.org/"><img src="https://img.shields.io/badge/vue-3.x-green?color=42b883&logo=vue.js" alt="Vue Version"></a>
  <a href="https://www.python.org/downloads/release/python-3111/"><img src="https://img.shields.io/badge/python-3.11-blue?logo=Python&color=3776AB" alt="Python Version"></a>
  <a href="https://www.apache.org/licenses/"><img src="https://img.shields.io/badge/licence-Apache-red?logo=apache&logoColor=%23D22128" alt="Apache Licence"></a>
  <a href="https://github.com/zyyzyykk/file-icons-vue"><img src="https://img.shields.io/github/stars/zyyzyykk/file-icons-vue" alt="GitHub"></a>
</p>
<p align="center">English ｜ <a href="../zh_CN/README.md" >简体中文</a></p>

### ⚡ Quick Usage

1. Install the latest version package

```sh
# all icons
npm i file-icons-vue
# common icons
npm i file-icons-vue-min
```

2. Import the component in your Vue3 project

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

### 👀 Preview

![Preview](https://kkbapps.oss-cn-shanghai.aliyuncs.com/file-icons-vue/Preview.png)

### 💡 Parameter Description

| Parameter | Type    | Description                      | Remark                                                       |
| --------- | ------- | -------------------------------- | ------------------------------------------------------------ |
| name      | String  | Full file name                   | Must be transmitted                                          |
| width     | Number  | Icon width (px)                  | Default value is 20 (px)                                     |
| height    | Number  | Icon height (px)                 | Default value is 20 (px)                                     |
| iconStyle | Object  | File Icon custom style           | The width and height attributes in the object do not take effect |
| linkStyle | Object  | File Iink custom style           | The width and height attributes in the object do not take effect |
| itemStyle | Object  | Icon parent element custom style | The width and height attributes in the object do not take effect |
| isFolder  | Boolean | Is it a folder                   | Default value is false                                       |
| isMulti   | Boolean | Is it multiple files             | Default value is false                                       |
| isLink    | Boolean | Is it linked file                | Default value is false                                       |

### 👨‍💻 Update Records

##### file-icons-vue@1.3.5: latest

- Optimize the code logic and documentation

##### file-icons-vue@1.3.4:

- Add `itemStyle` attribute instead of `style` attribute
- Add `.hh`、`.xaml`、`.xsd`、`.xslt` icons, Modify `.xsl` icon

##### file-icons-vue@1.3.2:

- Add `iconStyle`、`linkStyle` attribute, Modify the meaning of `style` attribute

##### file-icons-vue@1.3.1:

- Add `isLink` attribute, supports displaying reference type files
- Remove duplicate icons and reduce packaging volume
- Modify `.html` icon

[**History Update Records**](./doc/en_US/UPDATE.md)
