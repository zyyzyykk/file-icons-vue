/* eslint-disable */

import { MaybeRefOrGetter, VNode, render as bindTo, h, ref } from "vue";

declare interface IconNode {
    icon: string,
    ext: string,
    url?: string,
    prefix?: string,
    _rendered?: Boolean
}

declare type IconCacheMap = Record<string, IconNode>;

declare global {  //设置全局属性
    interface NodeRequire {
        context: (path: string, flag?: boolean, filter?: RegExp) => (relativePath: string) => Base64Str
    }
    interface Window {
        $definedMap: IconCacheMap
    }
    interface HTMLElement {
        $definedMap: IconCacheMap,
        $vnode: VNode
    }
}

const imgs = require.context('../assets/', false, /\.png$/);

const DEF_prefix = "icon";
const DEF_floder = "floder";
const DEF_null = "kk";
const DEF_BasePath = "./";
const $definedMap = ref<IconCacheMap>({});

if (window.$definedMap) {
    $definedMap.value = window.$definedMap;
} else {
    window.$definedMap = $definedMap.value;
}

declare type Base64Str = string | any;

declare interface CoverOption {
    b64Data: Base64Str,
    name?: string,
    contentType?: string,
    sliceSize?: number,
}

declare interface IconsPorps {
    isFloder?: boolean,
    prefix?: string,
    name: string,
    el?: MaybeRefOrGetter<HTMLElement | string>
}

const base64ToUrl = ({ b64Data = '', contentType = '', name = '', sliceSize = 512 }: CoverOption): string => {
    // 使用 atob() 方法将数据解码
    const byteCharacters = atob(b64Data);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);
        const byteNumbers = [];
        for (let i = 0; i < slice.length; i++) {
            byteNumbers.push(slice.charCodeAt(i));
        }
        // 8 位无符号整数值的类型化数组。内容将初始化为 0。
        // 如果无法分配请求数目的字节，则将引发异常。
        byteArrays.push(new Uint8Array(byteNumbers));
    }
    const file = new File(byteArrays, name, {
        type: contentType
    })
    return URL.createObjectURL(file)
}

const getExt = (props: IconsPorps): string => {
    if (props.isFloder) {
        return DEF_floder
    }
    if (props.name && props.name.length) {
        const index = props.name.lastIndexOf('.');
        if (index != -1) {
            const suffix = props.name.substring(index + 1);
            if (suffix != DEF_floder) {
                return suffix;
            }
        }
    }
    return DEF_null;
}

const getIcon = (ext: string): Base64Str => {
    try {
        return imgs(DEF_BasePath + ext + '.png');
    } catch (err) {
        return imgs(DEF_BasePath + DEF_null + '.png');
    }
}

const getDom = (el: HTMLElement | string | any): HTMLElement => {
    if (el instanceof HTMLElement) {
        return el;
    }
    if (el instanceof String) {
        let $el = document.querySelector(<string>el);
        if ($el != null) {
            return <HTMLElement>$el;
        }
    }
    return document.head;
}

const getDefinedMap = (el: HTMLElement) => {
    if (!el.$definedMap) {
        el.$definedMap = {};
    }
    return el.$definedMap;
}

const cachedIcon = ({ ext, icon, prefix }: IconNode): IconNode => {
    const b64Data = icon.replace("data:image/png;base64,", "");
    const url = base64ToUrl({
        name: `${ext}.png`,
        b64Data: b64Data,
        contentType: "image/png"
    });
    const node: IconNode = {
        prefix,
        ext,
        icon,
        url
    }
    $definedMap.value[ext] = node;
    return node;
}

const renderIconStyleText = ({ ext, url, prefix, icon }: IconNode): string => {
    return `.${prefix}-files-classed.icon-file-${ext} {
        display: inline-block;
        width: 1em;
        height: 1em;
        background-size: cover;
        background-attachment: local;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url(${url ? url : icon});
    }`
}

const renderIconStyleDom = ($definedMap: IconCacheMap, prefix?: string): VNode => {
    if (!prefix) {
        prefix = DEF_prefix;
    }
    const commonText = `.${prefix}-files-classed {
        display: inline-block;
        width: 1em;
        height: 1em;
        background-size: cover;
        background-attachment: local;
        background-position: center;
        background-repeat: no-repeat;
    }`
    const textList = Object.values($definedMap).map(it => {
        if (!it._rendered) {
            it._rendered = true;
            return renderIconStyleText(it);
        }
    });
    const _vnode = h('style', {
        type: "text/css",
        id: "icon-files-classed-style"
    }, [commonText, ...textList])
    return _vnode;
}

const renderForce = (el: HTMLElement | string, $definedMap: IconCacheMap, prefix?: string): void => {
    if (!prefix) {
        prefix = DEF_prefix;
    }
    const $el = getDom(el);
    const $vnode = renderIconStyleDom($definedMap);
    bindTo($vnode, $el);
    $el.$vnode = $vnode;
}

const renderWithCache = (ext: string, el: HTMLElement | string, prefix?: string): void => {
    if (!prefix) {
        prefix = DEF_prefix;
    }
    const $el = getDom(el)
    const $definedMap = getDefinedMap($el);
    let cached = $definedMap[ext]
    if (cached == null) {
        let icon = getIcon(ext);
        cached = cachedIcon({
            icon,
            ext,
            prefix
        })
    }
    if (cached._rendered) {
        return;
    }
    // 强制更新
    renderForce(el, $definedMap);
}

const renderInHead = (name: string, isFloder: boolean) => {
    const head = document.head;
    const ext = getExt({
        name,
        isFloder
    })
    renderWithCache(ext, head, DEF_prefix);
}

export {
    type IconNode,
    type IconsPorps,
    type CoverOption,
    type IconCacheMap,
    $definedMap,
    getDom,
    getExt,
    getIcon,
    getDefinedMap,
    cachedIcon,
    renderForce,
    renderInHead,
    renderWithCache
};
