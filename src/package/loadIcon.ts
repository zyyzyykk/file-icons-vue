/* eslint-disable */

import { MaybeRefOrGetter, VNode, render as bindTo, h, ref } from "vue";

declare interface IconNode {
    icon: string,
    ext: string,
    url?: string,
    prefix?: string,
    _rendered?: Boolean
}

declare type IconCacheMapStore = Record<string, IconNode>;

class IconCacheMap {
    readonly name: string;
    readonly store: IconCacheMapStore;
    el?: Element | Window;
    constructor(name: string, store: IconCacheMapStore) {
        this.name = name;
        this.store = store;
    }
}

declare global {  //设置全局属性
    interface NodeRequire {
        context: (path: string, flag?: boolean, filter?: RegExp) => (relativePath: string) => Base64Str
    }
    interface Window {
        $definedMap: IconCacheMap
    }
    interface Element {
        $definedMap: IconCacheMap,
        $vnode: VNode
    }
}

const IMAGE_MAP = require('./image.map.js');

const DEF_prefix = "icons";
const DEF_floder = "floder";
const DEF_null = "kk";
const DEF_BasePath = "./";

const $definedMap = ref<IconCacheMap>(new IconCacheMap("ROOT", {}));
$definedMap.value.el = window;

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

const getCommonClassName = (prefix?: string): string => {
    if (!prefix) {
        prefix = DEF_prefix;
    }
    return `${prefix}-files-classed`
}

const getExtClassName = (ext: string): string => {
    return `icon-file-${ext}`;
}

const getClassName = (ext: string, prefix?: string, tag?: string): string => {
    return [tag, getCommonClassName(prefix), getExtClassName(ext)].join('.');
}

const getIcon = (ext: string): Base64Str => {
    try {
        return IMAGE_MAP[DEF_BasePath + ext + '.png'];
        // return imgs(DEF_BasePath + ext + '.png');
    } catch (err) {
        return IMAGE_MAP[DEF_BasePath + DEF_null + '.png'];
        // return imgs(DEF_BasePath + DEF_null + '.png');
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

const getXPath = (dom: HTMLElement): string => {
    if (dom.parentElement == null) {
        return ""
    }
    return getXPath(dom.parentElement) + "#" + dom.tagName;
}

const getDefinedMap = (el: HTMLElement | Window) => {
    if (el.$definedMap == null || el.$definedMap.store == null) {
        let xpath = "ROOT"
        if (el instanceof HTMLElement) {
            xpath = getXPath(el);
        }
        el.$definedMap = new IconCacheMap(xpath, {});
    }
    el.$definedMap.el = el;
    return el.$definedMap;
}

const renderIconStyleText = ({ ext, url, prefix, icon }: IconNode): string => {
    let className = getClassName(ext, prefix);
    return `
${className} {
    background-image: url(${url ? url : icon});
}`
}

const renderIconStyleDom = (definedMap: IconCacheMap, prefix: string): VNode => {
    if (!prefix) {
        prefix = DEF_prefix;
    }
    const commonText = ` /** ${definedMap.name} **/
.${prefix}-files-classed {
    display: inline-block;
    width: 1em;
    height: 1em;
    background-size: cover;
    background-attachment: local;
    background-position: center;
    background-repeat: no-repeat;
}`
    const textList = Object.values(definedMap.store).map(it => {
        it._rendered = true;
        return renderIconStyleText(it);
    });
    const _vnode = h('style', {
        type: "text/css",
        id: "icon-files-classed-style"
    }, [commonText, ...textList])
    return _vnode;
}

const renderForce = (el: HTMLElement | string, definedMap?: IconCacheMap, prefix?: string): void => {
    const $el = getDom(el);
    if (definedMap == null) {
        definedMap = getDefinedMap($el);
    }
    if (prefix == null) {
        prefix = DEF_prefix;
    }
    const $vnode = renderIconStyleDom(definedMap, prefix);
    bindTo($vnode, $el);
    $el.$vnode = $vnode;
}

//
const cachedIcon = ({ ext, icon, prefix }: IconNode, definedMap?: IconCacheMap): IconNode => {
    if (definedMap == null) {
        definedMap = $definedMap.value
    }
    let url;
    if (icon.startsWith("data:")) {
        const b64Data = icon.replace("data:image/png;base64,", "");
        url = base64ToUrl({
            name: `${ext}.png`,
            b64Data: b64Data,
            contentType: "image/png"
        });
    } else {
        url = icon;
    }
    const node: IconNode = {
        prefix,
        ext,
        icon,
        url
    }
    definedMap.store[ext] = node;
    return node;
}
const renderWithCache = (
    ext: string,
    prefix?: string,
    el?: HTMLElement | string,
    definedMap?: IconCacheMap
): void => {
    const $el = getDom(el)
    if (!prefix) {
        prefix = DEF_prefix;
    }
    if (definedMap == null) {
        definedMap = getDefinedMap($el);
    }
    let cached = definedMap.store[ext]
    if (cached == null) {
        let icon = getIcon(ext);
        cached = cachedIcon({
            icon,
            ext,
            prefix
        }, definedMap)
    }
    if (cached._rendered) {
        return;
    }
    // 强制更新
    renderForce($el, definedMap, prefix);
}
const renderInHead = (name: string, isFloder: boolean) => {
    const head = document.head;
    const ext = getExt({
        name,
        isFloder
    })
    renderWithCache(ext, DEF_prefix, head);
}

export {
    getDom,
    getExt,
    getIcon,
    getXPath,
    getClassName,
    getDefinedMap,
    getExtClassName,
    getCommonClassName,
    cachedIcon,
    renderForce,
    renderInHead,
    renderWithCache,
    type CoverOption,
    type IconCacheMap,
    type IconNode,
    type IconsPorps
};

