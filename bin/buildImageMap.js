const fs = require("node:fs");
const ImageMap = require("../image-map/ImageMap.common");

console.log(ImageMap.default);

let str = JSON.stringify(ImageMap.default);

fs.writeFile("src/package/ImageMap.json", str, () => {

});


