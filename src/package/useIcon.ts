/* eslint-disable */
import { createApp, onBeforeMount, onBeforeUnmount, onMounted } from "vue";

import {
    IconsPorps,
    cachedIcon,
    getDefinedMap,
    getDom,
    getExt,
    getIcon,
    renderForce,
    renderInHead,
    renderWithCache
} from './loadIcon';

const useIcon = (props: IconsPorps) => {

    if (props.el == null) {
        props.el = document.head;
    }
    if (props.prefix == null) {
        props.prefix = "icons";
    }

    let $el = getDom(props.el);
    let $definedMap = getDefinedMap($el);

    const app = createApp(() => renderForce($el, $definedMap));
    app?.mount($el);

    onBeforeMount(() => {
        const ext = getExt(props);
        const icon = getIcon(ext);
        cachedIcon({ icon, ext, prefix: props.prefix }, $definedMap);
    })
    onMounted(() => {
        const ext = getExt(props);
        const prefix = props.prefix;
        renderWithCache(ext, prefix, $el, $definedMap);
        renderForce($el, $definedMap)
    })
    onBeforeUnmount(() => {
        app?.unmount();
    })
    return {
        renderForce: () => {
            renderForce($el, $definedMap);
        },
        renderInHead: (name: string, isFloder: boolean) => {
            return renderInHead(name, isFloder);
        },
        renderWithCache: (name: string, isFloder?: boolean) => {
            const _props: IconsPorps = {
                name,
                isFloder,
            }
            const ext = getExt(_props);
            return renderWithCache(ext, props.prefix, $el)
        }
    }
}

export {
    useIcon as default, useIcon
};

