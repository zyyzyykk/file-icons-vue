/* eslint-disable */ 
import { MaybeRefOrGetter, VNode, render as bindTo, createApp, h, onBeforeMount, onBeforeUnmount, onMounted, ref, toValue } from "vue";

const imgs = require.context('../assets/', false, /\.png$/);

const DEF_floder = "floder";
const DEF_null = "kk";
const DEF_BasePath = "./";


declare interface IconNode {
    ext?: string,
    icon?: string,
    url?: string,
    _rendered?: Boolean
}

declare type IconCacheMap = Record<string, IconNode> & {
    _vnode?: VNode,
};

declare global {  //设置全局属性
    interface Window {
        $definedMap: IconCacheMap
    }
}

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
    const result = new Blob(byteArrays, {
        type: contentType
    })
    return URL.createObjectURL(result)
}


declare interface IconsPorps {
    isFloder?: boolean,
    prefix?: string,
    name: string,
    el?: MaybeRefOrGetter<HTMLElement | string>
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
}

const getIcon = (ext: string): Base64Str => {
    try {
        return imgs(DEF_BasePath + ext + '.png');
    } catch (err) {
        return imgs(DEF_BasePath + DEF_null + '.png');
    }
}

const cachedIcon = ({ ext, icon }: IconNode): IconNode => {
    const b64Data = icon.replace("data:image/png;base64,", "");
    const url = base64ToUrl({
        name: `${ext}.png`,
        b64Data: b64Data,
        contentType: "image/png"
    });
    const node: IconNode = {
        ext,
        icon,
        url
    }
    $definedMap.value[ext] = node;
    return node;
}

const renderIconStyleText = ({ ext, url, icon }: IconNode, prefix?: string): string => {
    return `.${prefix} -file - classed.icon - file - ${ext} {
        display: inline - block;
        width: 1em;
        height: 1em;
        background - size: cover;
        background - attachment: local;
        background - position: center;
        background - repeat: no - repeat;
        background - image: url(${url});
    }`
}

const renderIconStyleDom = (prefix?: string): VNode => {
    const textList = Object.values($definedMap).map(it => {
        it._rendered = true;
        return renderIconStyleText(it, prefix);
    });
    const _vnode = h('style', {
        type: "text/css",
        id: "classed-file-icons"
    }, textList)
    $definedMap.value._vnode = _vnode;
    return _vnode;
}

const getDom = (el: HTMLElement | string | any): HTMLElement => {
    if (el instanceof HTMLElement) {
        return el;
    }
    if (el instanceof String) {
        return document.querySelector(<string>el);
    }
    return document.head;
}

const renderForce = (el: HTMLElement | string, prefix: string): void => {
    const $el = getDom(el);
    const $vnode = renderIconStyleDom(prefix);
    bindTo($vnode, $el);
    $definedMap.value._vnode = $vnode;
}

const renderWithCache = (ext: string, el: HTMLElement | string, prefix: string): void => {
    let cached = $definedMap.value[ext]
    if (cached == null) {
        cached = getIcon(ext);
        $definedMap[cached.ext] = cached;
    }
    if (cached._rendered) {
        return;
    }
    // 强制更新
    renderForce(el, prefix);
}

const useIcon = (props: IconsPorps) => {


    if (props.el == null) {
        props.el = document.head;
    }
    if (props.prefix == null) {
        props.prefix = "icon-";
    }

    const app = createApp(() => renderIconStyleDom(props.prefix));
    app?.mount(toValue(props.el));

    onBeforeMount(() => {
        const ext = getExt(props);
        const icon = getIcon(ext);
        cachedIcon(icon);
    })
    onMounted(() => {
        app?.forceUpdate();
    })
    onBeforeUnmount(() => {
        app?.unmount();
    })
    return {
        renderForce: () => {
            app?.forceUpdate();
            // renderForce(toValue(props.el), props.prefix);
        },
        renderWithCache: (name: string, isFloder?: boolean) => {
            const _props: IconsPorps = {
                name,
                isFloder,
            }
            const ext = getExt(_props);
            const icon = getIcon(ext);
            cachedIcon(icon);
            renderForce(toValue(props.el), props.prefix);
        }
    }
}

export {
    cachedIcon,
    renderForce,
    renderWithCache
};
