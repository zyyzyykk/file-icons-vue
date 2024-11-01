<template>
  <span :style="computedSpanStyle" >
    <img class="file-icons-vue-img" :src="icon" :style="computedIconStyle" >
    <img class="file-icons-vue-img" :src="link" :style="computedLinkStyle" v-if="isLink && !isMulti" >
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
    iconStyle:{
      type:Object,
      required:false,
      default:() => {return {}}
    },
    linkStyle:{
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

    // width
    const computedWidth = computed(() => {
      return (Number.isInteger(props.width) && props.width > 0) ? props.width : 20;
    });

    // height
    const computedHeight = computed(() => {
      return (Number.isInteger(props.height) && props.height > 0) ? props.height : 20;
    });

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
    const computedIconStyle = computed(() => {
      return {
        ...props.iconStyle,
        width:computedWidth.value + 'px',
        height:computedHeight.value + 'px',
      }
    });

    // link icon
    const link = computed(() => {      
      return imgs(base_addr + 'link.png');
    });

    // link style
    const computedLinkStyle = computed(() => {
      return {
        ...props.linkStyle,
        position:'absolute',
        top:'0px',
        left:'0px',
        width:computedWidth.value + 'px',
        height:computedHeight.value + 'px',
      }
    });

    // span style
    const computedSpanStyle = computed(() => {
      return {
        display:'inline-block',
        ...props.style,
        width:computedWidth.value + 'px',
        height:computedHeight.value + 'px',
        position:'relative',
      }
    });
  
    return {
      icon,
      computedIconStyle,
      link,
      computedLinkStyle,
      computedSpanStyle,
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