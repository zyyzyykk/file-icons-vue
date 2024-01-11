<template>
  <img :src="icon" :style="imgStyle" >
</template>

<script>
import { ref } from 'vue';
// 引入全部图片
const imgs = require.context('../assets/', false, /\.png$/);

export default {
  name:'file-icons',
  components: {
  },
  props: {
    name:{
      type:String,
      required:true,
      default:''
    },
    width:{
      type:String,
      required:false,
    },
    height:{
      type:String,
      required:false,
    },
    style:{
      type:Object,
    },
    isFloder:{
      type:Boolean,
      required:false,
    }
  },
  setup(props) {
  
    // 解析文件后缀
    const suffix = ref('');
    const base_addr = './';
    const icon = ref('');
    // 将文件名转为小写
    const fileName = props.name.toLowerCase();
  
    // 文件夹
    if(props.isFloder == true) {
      icon.value = imgs(base_addr + 'floder.png');
    }
    else if(fileName && fileName.length > 0) {
      // 获取文件名后缀
      let index = fileName.lastIndexOf('.');
      if(index != -1) suffix.value = fileName.substring(index + 1);
      else suffix.value = '';
      try {
        // 特判 .floder 后缀
        if(suffix.value == 'floder') icon.value = imgs(base_addr + 'kk.png');
        else icon.value = imgs(base_addr + suffix.value + '.png');
      } catch(error) {
        // 图片不存在
        icon.value = imgs(base_addr + 'kk.png');
      }
    }
    else icon.value = imgs(base_addr + 'kk.png');
  
    // 图片样式
    const imgStyle = ref({
      width: props.width ? props.width + 'px' : '20px',
      height: props.height ? props.height + 'px' : '20px',
    })
  
    // 传入的自定义样式
    if(props.style) {
      imgStyle.value = {...imgStyle.value,...props.style};
    }
  
    return {
      icon,
      imgStyle,
    }
  },
}
</script>

<style scoped>

</style>