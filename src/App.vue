<template>
    <h1>
        <ClassedFileIcons name="TESTfIASDFL.FE" :isFloder="true" ></ClassedFileIcons>
        <ClassedFileIcons v-for="(f, idx) in fileList" :key="idx" :name="f"></ClassedFileIcons>
    </h1>
    <h3>
        <ClassedFileIcons name="TESTfIASDFL.FE" :isFloder="true" ></ClassedFileIcons>
        <ClassedFileIcons v-for="(f, idx) in fileList" :key="idx" :name="f"></ClassedFileIcons>
    </h3>
</template>

<script setup>

import { ClassedFileIcons } from './package';

import { ref } from 'vue';

const fileList = ref([
    "新建文件夹",
    "文本.txt",
    "main.py",
    "App.vue",
    "table.sql",
    "压缩包.rar",
    "风景.jpg",
    "document.doc",
    "程序.exe",
    "kk.kk",
]);

</script>