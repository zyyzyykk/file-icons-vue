<template>
  <div :class="computedClass" :style="computedStyle"></div>
</template>

<script setup>

import { computed, ref, onMounted, isRef, unref, defineProps, whenever, h, render as bindTo, onBeforeMount, toValue } from 'vue';
import { cachedIcon, getExt, getIcon, getCommonClassName, getExtClassName, renderWithCache, getDom, getDefinedMap } from './loadIcon';

const $props = defineProps({
  el: {
    type: [String, HTMLElement],
    default: () => {
      return document.head
    }
  },
  prefix: {
    type: String,
    default: 'icons'
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
  // style: {
  //   type: Object,
  // },
  isFloder: {
    type: Boolean,
    required: false,
  }
})

const $prefix = computed(() => {
  return toValue($props).prefix
})

const $el = computed(() => {
  return getDom(toValue($props).el)
})

const $definedMap = computed(() => {
  return getDefinedMap($el.value)
})

let ext = computed(() => {
  let props = unref($props);
  return getExt(props);
})

let icon = computed(() => {
  return getIcon(ext.value);
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
  let cname = getCommonClassName($prefix.value)
  let ename = getExtClassName(ext.value)
  return [cname, ename];
})

onBeforeMount(() => {
  cachedIcon({
    ext: ext.value,
    icon: icon.value,
    prefix: $prefix.value
  }, $definedMap.value);
});

onMounted(() => {
  renderWithCache(ext.value, $prefix.value, $el.value, $definedMap.value);
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