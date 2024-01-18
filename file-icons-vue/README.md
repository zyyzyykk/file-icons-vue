# file-icons-vue

> file-icons-vue，为 Vue.js 项目提供文件图标的npm依赖库
>
> file-icons-vue, a npm dependency package that provides file icons for Vue.js projects.
>
> 作者：[zyyzyykk](https://github.com/zyyzyykk/)
>
> 源码：http://git.kkbapps.com/kk/file-icons-vue
>
> npm地址：https://www.npmjs.com/package/file-icons-vue
>
> 更新时间：2024-01-18

### **⚡** 快速引入

1.安装依赖：建议安装最新版

```sh
npm i file-icons-vue
```

2.在vue3项目中引入组件：

```vue
<template>
  <FileIcons name="test.txt" width="30" height="30" :isFloder="false" :style="{'float':'right'}" />
</template>

<script>
// 引入文件图标组件
import FileIcons from 'file-icons-vue'

export default {
  name: 'App',
  components: {
    FileIcons,
  },
  setup() {
    return {
      
    }
  }
}
</script>

<style>
</style>
```

### 🛸 预览

![预览](https://img.kkbapps.com/file-icons-vue/file-icons-vue-preview1.png)

```vue
<template>
  <template v-for="(file,index) in files" :key="index">
    <div style="display: flex; align-items: center;">
      <div>
          <FileIcons :name="file.name" width="20" height="20" :isFloder="file.isFloder"
            :style="{'float':'left','margin':'2px 10px'}" />
      </div>
      <div>{{ file.name }}</div>
    </div>
  </template>
</template>

<script>
import FileIcons from 'file-icons-vue'

export default {
  name: 'App',
  components: {
    FileIcons,
  },
  setup() {

    const files = [
      {
        name: '新建文件夹',
        isFloder: true,
      },
      {
        name: '文本.txt',
        isFloder: false,
      },
      {
        name: 'main.py',
        isFloder: false,
      },
      {
        name: 'App.vue',
        isFloder: false,
      },
      {
        name: 'table.sql',
        isFloder: false,
      },
      {
        name: '压缩包.rar',
        isFloder: false,
      },
      {
        name: '风景.jpg',
        isFloder: false,
      },
      {
        name: 'document.doc',
        isFloder: false,
      },
      {
        name: '程序.exe',
        isFloder: false,
      },
      {
        name: 'kk.kk',
        isFloder: false,
      },
    ]

    return {
      files,
    }
  }
}
</script>

<style>
</style>
```

### 💡 功能说明

1.`file-icons-vue` 是一个用于展示文件后缀对应图标的vue3组件，已打包并发布在npm仓库中。file-icons-vue提供了丰富的图标集，包括常见的文件类型和扩展名，用于增强项目的可视化效果

2.组件接收的props参数：

| 参数名   | 类型    | 含义           | 说明                                      |
| -------- | ------- | -------------- | ----------------------------------------- |
| name     | String  | 文件全名称     | 必传                                      |
| width    | String  | 图标宽度(px)   | 默认值为20px                              |
| height   | String  | 图标高度(px)   | 默认值为20px                              |
| style    | Object  | 图标自定义样式 | 对象中的宽高属性会覆盖上面的width、height |
| isFloder | Boolean | 是否为文件夹   | 默认值为false                             |

3.`file-icons-vue` 包含的全部图标：后续会持续更新

![所有图标](https://img.kkbapps.com/file-icons-vue/file-icons-vue-all-icons-1.1.7.png)

### 👨‍💻 更新记录

##### file-icons-vue@1.1.7 ：latest

- 修复了将 `.floder` 后缀文件显示为文件夹图标的bug

- 新增 `.ahk`、`.aspx`、`.bz2`、`.map`、`.pot`、`.pps`、`.psd`、`.vhdx`、`.xz` 图标

##### file-icons-vue@1.1.5 ：

新增 `.asp`、`.odp`、`.ods`、`.odt`、`.ova`、`.vmdk`、`.vmx` 图标，修改 `.mp3` 图标

##### file-icons-vue@1.1.3 ：

新增 `.apk`、`.eml`、`.jsx`、`.less`、`.ps1`、`.pyc`、`.sass`、`.scss`、`.tif`、`.tiff`、`.tsx`、`.vcf` 图标

##### file-icons-vue@1.1.0 ：新增图标

```markdown
.cc .crt .cxx .epub .htm .ics .jpeg .lib .lic .log .mobi .otf .rb .ttf
```

##### file-icons-vue@1.0.8 ：

新增 `.obj`、`.rtf`、`.wmf` 图标，修改 `.csv`、`.doc`、`.ppt` 、`.xls` 图标

##### file-icons-vue@1.0.5 ：

新增 `.csv`、`.ico`、`.svg` 图标

##### file-icons-vue@1.0.4 ：

新增 `.bat`、`.cmd`、`.cs`、`.go`、`.ts` 图标

##### file-icons-vue@1.0.2 ：

新增 `.asm`、`.hpp`、`.json` 图标，修改 `.c` 图标

##### file-icons-vue@1.0.0 ：

正式版1.0.0，提交官方仓库，添加基本图标，实现基本功能

### 🏘️ 关于此项目

作者：[zyyzyykk](https://github.com/zyyzyykk/)

欢迎对此项目提出宝贵的意见或建议，也可以加入我们一起进行此项目的维护与开发
