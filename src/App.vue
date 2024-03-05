<template>
    <div class="main">
        <p> FileIcons("[name].[ext]",isFloder) </p>
        <div class="flex-wrap">
            <FileIcons name="TESTfIASDFL.FE" :isFloder="true"></FileIcons>
            <FileIcons v-for="(f, idx) in fileList" :key="idx" :name="f"></FileIcons>
        </div>
        <p> ClassedFileIcons("[name].[ext]",isFloder) </p>
        <div class="flex-wrap">
            <div class="loadIcon">
                <ClassedFileIcons name="floder.xxx" :isFloder="true"></ClassedFileIcons>
                <NameSpan> floder.xxx </NameSpan>
            </div>
            <div v-for="(f, idx) in fileList" :key="idx" class="loadIcon">
                <ClassedFileIcons :name="f"></ClassedFileIcons>
                <NameSpan>{{ f }}</NameSpan>
            </div>
        </div>
        <p> renderInHead("xxx.mp4") </p>
        <div class="loadIcon">
            <textarea class="area">renderInHead("xxx.mp4")
<div class="icon-files-classed icon-file-mp4"></div></textarea>
            <div class="icon-files-classed icon-file-mp4"></div>
            <NameSpan> xxx.mp4 </NameSpan>
        </div>
    </div>
</template>

<script setup>

import { FileIcons, ClassedFileIcons, renderInHead } from './package';

import { ref, h } from 'vue';

renderInHead("xxx.mp4")


const NameSpan =
    (_ctx, { attrs, slots, emit }) =>
        h('span', {
            class: "name-span",
            ...attrs,
        }, slots)

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

<style scoped>

.area {
    width: 80vw;
    min-height: 3em;
    padding: 1em;
    line-height: 1.25em;
    background-color: #ccc;
    overflow: hidden;
    font-size: 20px;
}

.main {
    margin: 5rem;

    p {
        background-color: #ccc;

        &::before {
            content: "#.";
            font-size: 1.2rem;
        }
    }
}

.flex-wrap {
    display: flex;
    flex-wrap: wrap;
}


.loadIcon {
    font-size: 32px;
    width: 10rem;
}

.name-span {
    font-size: 16px;
}
</style>