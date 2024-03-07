### 👨‍💻 历史更新记录

##### file-icons-vue@1.2.10 :
新增 `classed-file-icons` 组件。
```
import { ClassedFileIcons } from 'file-icons-vue'
```

新增 工具方法 
`getDom` 
`getExt` 
`getIcon`
`getDefinedMap`
`cachedIcon`
`renderForce` 
`renderInHead`
`renderWithCache`

```
import {
    getDom,
    getExt,
    getIcon,
    getDefinedMap,
    cachedIcon,
    renderForce,
    renderInHead,
    renderWithCache
} from 'file-icons-vue'

renderInHead("safe.txt")

// 可以使用这种写法将一个元素变成图标
// <div class="icon-files-classed icon-file-txt" ></div>

```

##### file-icons-vue@1.1.9 ：

新增 `.ai`、`.dds`、`.emf`、`.heic`、`.heif`、`.m4a`、`.raw`、`.tga`、`.webp` 图标

##### file-icons-vue@1.1.7 ：

- 修复了将后缀为 `.floder` 的文件显示为文件夹图标的bug

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