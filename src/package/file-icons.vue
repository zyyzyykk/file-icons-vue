<template>
  <img ref="ImgRef" :src="iconUrl" :style="imgStyle" >
</template>

<script>
import { ref, onMounted } from 'vue';

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
    const base_addr = '../assets/';
    const iconUrl = ref('');
    // 将文件名转为小写
    const fileName = props.name.toLowerCase();
  
    // 文件夹
    if(props.isFloder == true) {
        iconUrl.value = base_addr + 'floder.png';
      }
      else if(fileName && fileName.length > 0) {
        // 获取文件名后缀
        let index = fileName.lastIndexOf('.');
        if(index > 0) suffix.value = fileName.substring(index + 1);
        else suffix.value = '';
        // 图片存在
        iconUrl.value = '../assets/' + suffix.value + '.png';
      }
      else iconUrl.value = base_addr + '.png';
  
    // 图片样式
    const imgStyle = ref({
      width: props.width ? props.width + 'px' : '20px',
      height: props.height ? props.height + 'px' : '20px',
    })
  
    // 用户传入自定义样式
    if(props.style) {
      imgStyle.value = {...imgStyle.value,...props.style};
    }
  
    const ImgRef = ref();
    const setDefaultImage = () => {
      ImgRef.value.src = base_addr + '.png';
    }
  
    onMounted(() => {
      ImgRef.value.onerror = setDefaultImage;
    });
  
    return {
      iconUrl,
      imgStyle,
      ImgRef,
      setDefaultImage,
    }
  },
}
</script>

<style scoped>

</style>
  