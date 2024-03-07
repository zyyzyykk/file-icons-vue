
const imgs = require.context('../assets/', false, /\.png$/);
// const imgs = require.context('../assets@min/', false, /\.png$/);

const ImageMap = {};

imgs.keys().forEach(key=>{
    ImageMap[key] = imgs(key)
});

module.exports = ImageMap
