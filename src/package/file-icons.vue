<template>
  <img :src="icon" :style="imgStyle" >
</template>

<script>
import { computed } from 'vue';
// 引入全部图片
const imgs = require.context('../assets/', false, /\.png$/);
// 引入常用图片
// const imgs = require.context('../assets@min/', false, /\.png$/);

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
    isFolder:{
      type:Boolean,
      required:false,
    }
  },
  setup(props) {
  
    // 根据文件后缀获取图标
    const base_addr = './';
    const icon = computed(() => {
      let suffix = '';
      // 文件夹
      if(props.isFolder == true) return imgs(base_addr + 'folder.png');
      else if(props.name && props.name.length > 0) {
        // 获取文件名后缀
        let index = props.name.lastIndexOf('.');
        if(index != -1) suffix = props.name.substring(index + 1);
        else suffix = '';
        try {
          // 特判 .folder 后缀
          if(suffix == 'folder') return imgs(base_addr + 'kk.png');
          else return imgs(base_addr + suffix + '.png');
        } catch(error) {
          // 图片不存在
          return imgs(base_addr + 'kk.png');
        }
      }
      else return imgs(base_addr + 'kk.png');
    });
    // 图标样式
    const imgStyle = computed(() => {
      return {
        width: props.width ? props.width + 'px' : '20px',
        height: props.height ? props.height + 'px' : '20px',
        ...props.style,
      }
    });
  
    return {
      icon,
      imgStyle,
    }
  },
}
</script>

<style scoped>

</style>