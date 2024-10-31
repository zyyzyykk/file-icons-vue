<template>
  <span :style="spanStyle" >
    <img class="file-icons-vue-img" :src="icon" :style="iconStyle" >
    <img class="file-icons-vue-img" :src="link" :style="linkStyle" v-if="isLink && !isMulti" >
  </span>
</template>

<script>
import { computed } from 'vue';

// import all images
// const imgs = require.context('../assets/', false, /\.png$/);

// import common images
const imgs = require.context('../assets@min/', false, /\.png$/);

import map from "./map";

export default {
  name:'file-icons',
  components: {
  },
  props: {
    name:{
      type:String,
      required:true,
      default:'',
    },
    width:{
      type:Number,
      required:false,
      default:20,
    },
    height:{
      type:Number,
      required:false,
      default:20,
    },
    style:{
      type:Object,
      required:false,
      default:() => {return {}}
    },
    isFolder:{
      type:Boolean,
      required:false,
      default:false,
    },
    isMulti:{
      type:Boolean,
      required:false,
      default:false,
    },
    isLink:{
      type:Boolean,
      required:false,
      default:false,
    },
  },
  setup(props) {
    const base_addr = './';

    // retrieve icons based on file suffixes
    const icon = computed(() => {
      // multi
      if(props.isMulti === true) return imgs(base_addr + 'multi.png');
      // folder
      if(props.isFolder === true) return imgs(base_addr + 'folder.png');
      // file
      let suffix = '';
      if(props.name && props.name.length > 0) {
        // get file name suffix
        let index = props.name.lastIndexOf('.');
        if(index != -1) suffix = props.name.substring(index + 1).toLowerCase();
        else suffix = '';
        try {
          if(map[suffix]) return imgs(base_addr + map[suffix] + '.png');
          else return imgs(base_addr + 'kk.png');
        } catch(error) {
          // png does not exist
          return imgs(base_addr + 'kk.png');
        }
      }
      return imgs(base_addr + 'kk.png');
    });

    // icon style
    const iconStyle = computed(() => {
      return {
        ...props.style,
        width:props.width + 'px',
        height:props.height + 'px',
      }
    });

    // link icon
    const link = computed(() => {      
      return imgs(base_addr + 'link.png');
    });

    // link style
    const linkStyle = computed(() => {
      return {
        position:'absolute',
        top:'0px',
        left:'0px',
        width:props.width + 'px',
        height:props.height + 'px',
      }
    });

    // span style
    const spanStyle = computed(() => {
      return {
        position:'relative',
        display:'inline-block',
        width:props.width + 'px',
        height:props.height + 'px',
      }
    });
  
    return {
      icon,
      iconStyle,
      link,
      linkStyle,
      spanStyle,
    }
  },
}
</script>

<style scoped>
/* forbid dragging images */
.file-icons-vue-img {
  user-select: none;
  -webkit-user-drag: none; /* Safari */
  -khtml-user-drag: none; /* Konqueror HTML */
  -moz-user-drag: none; /* Firefox */
  -o-user-drag: none; /* Opera */
}
</style>