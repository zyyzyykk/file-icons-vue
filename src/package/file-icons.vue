<template>
  <img :src="icon" :style="imgStyle" >
</template>

<script>
import { computed } from 'vue';

// Import commonly images
// const imgs = require.context('../assets@min/', false, /\.png$/);
// Import all images
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
    isFolder:{
      type:Boolean,
      required:false,
    },
    isMulti:{
      type:Boolean,
      required:false,
    },
  },
  setup(props) {
  
    // Retrieve icons based on file suffixes
    const base_addr = './';
    const icon = computed(() => {
      let suffix = '';
      // Folder
      if(props.isMulti === true) return imgs(base_addr + 'multi.png');
      else if(props.isFolder === true) return imgs(base_addr + 'folder.png');
      else if(props.name && props.name.length > 0) {
        // Get file name suffix
        let index = props.name.lastIndexOf('.');
        if(index != -1) suffix = props.name.substring(index + 1);
        else suffix = '';
        try {
          // Special judgment for .folder/.multi suffix
          if(suffix == 'folder' || suffix == 'multi') return imgs(base_addr + 'kk.png');
          else return imgs(base_addr + suffix + '.png');
        } catch(error) {
          // Suffix does not exist
          return imgs(base_addr + 'kk.png');
        }
      }
      else return imgs(base_addr + 'kk.png');
    });
    // Icon Style
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