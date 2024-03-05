<template>
  <div :class="computedClass" :style="computedStyle"></div>
</template>

<script setup>

function base64ToUrl({ b64data = '', contentType = '', name = '', sliceSize = 512 } = {}) {
  // 使用 atob() 方法将数据解码
  let byteCharacters = atob(b64data);
  let byteArrays = [];
  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    let slice = byteCharacters.slice(offset, offset + sliceSize);
    let byteNumbers = [];
    for (let i = 0; i < slice.length; i++) {
      byteNumbers.push(slice.charCodeAt(i));
    }
    // 8 位无符号整数值的类型化数组。内容将初始化为 0。
    // 如果无法分配请求数目的字节，则将引发异常。
    byteArrays.push(new Uint8Array(byteNumbers));
  }
  let result = new Blob(byteArrays, {
    name,
    type: contentType
  })
  return URL.createObjectURL(result)
}

import { computed, ref, onMounted, isRef, unref, defineProps, whenever, h, render as bindTo, onBeforeMount, toValue } from 'vue';

// 引入全部图片
const imgs = require.context('../assets/', false, /\.png$/);

const $props = defineProps({
  el: {
    type: [String, HTMLElement],
    default: () => {
      return document.head
    }
  },
  prefix: {
    type: String,
    default: 'icon-'
  },
  name: {
    type: String,
    required: true,
    default: ''
  },
  width: {
    type: String,
    required: false,
  },
  height: {
    type: String,
    required: false,
  },
  style: {
    type: Object,
  },
  isFloder: {
    type: Boolean,
    required: false,
  }
})

const DEF_floder = "floder";
const DEF_null = "kk";
const DEF_BasePath = "./";

const $definedMap = ref({});
if (window.$definedMap) {
  $definedMap.value = window.$definedMap;
} else {
  window.$definedMap = $definedMap.value;
}

const $prefix = computed(() => {
  if ($props.prefix) {
    return $props.prefix
  } else {
    return "icon-"
  }
})

let ext = computed(() => {
  let props = unref($props);
  if (props.isFloder) {
    return DEF_floder
  }
  if (props.name && props.name.length) {
    let index = props.name.lastIndexOf('.');
    if (index != -1) {
      let suffix = props.name.substring(index + 1);
      if (suffix != DEF_floder) {
        return suffix;
      }
    }
  }
  return DEF_null;
})

let icon = computed(() => {
  try {
    return imgs(DEF_BasePath + ext.value + '.png');
  } catch (err) {
    return imgs(DEF_BasePath + DEF_null + '.png');
  }
})

let computedStyle = computed(() => {
  let props = unref($props)
  return {
    width: props.width,
    height: props.height,
    ...props.style,
  }
})

let computedClass = computed(() => {
  return [`${$prefix.value}-file-classed`, `icon-file-${ext.value}`]
})

onBeforeMount(() => {
  let b64data = icon.value.replace("data:image/png;base64,", "");
  // let bf = Buffer.from(str, "base64");
  let url = base64ToUrl({
    name: `${ext.value}.png`,
    b64data: b64data,
    contentType: "image/png"
  });
  $definedMap.value[ext.value] = {
    ext: ext.value,
    icon: icon.value,
    url,
    _rendered: false
  }
});

let initEl = (el) => {
  if (el instanceof String) {
    el = document.querySelector(el);
    return el;
  }
  if (el instanceof HTMLElement) {
    return el;
  }
  return document.head;
}

let renderStyle = (el) => {
  let cssTextList = Object.values($definedMap.value).map((one) => {
    let { ext, icon, url } = one;
    one._rendered = true;
    return `.${$prefix.value}-file-classed.icon-file-${ext} {
  background-size: cover;
  background-attachment: local;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${url});
}`
  });
  let styleVNode = h('style', {
    type: 'text/css',
    id: 'icon-file-classed',
  }, cssTextList)
  let $el = initEl(el);
  bindTo(styleVNode, $el);
}

onMounted(() => {
  let node = $definedMap.value[ext.value];
  if (node._rendered) {
    return
  } else {
    console.log(toValue($prefix), toValue(ext), toValue($definedMap));
    if (isRef($props.el)) {
      whenever($props.el, (el) => {
        renderStyle(el)
      })
    } else {
      renderStyle($props.el);
    }
  }
})
</script>

<style scoped>
div {
  display: inline-block;
  width: 1em;
  height: 1em;
}

/* div {
  background-size: cover;
  background-attachment: local;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url();
} */
</style>