var hexToRGB = require("./hex-to-RGB.js");
var rgbToHex = require("./rgb-to-hex.js");


if (process.argv[2] == "hex"){
    console.log("RGB: " + hexToRGB(process.argv[3]).r + "," + hexToRGB(process.argv[3]).g + ","
        + hexToRGB(process.argv[3]).b);
}else if (process.argv[2] == "rgb"){
    console.log(rgbToHex(parseInt(process.argv[3]), parseInt(process.argv[4]), parseInt(process.argv[5])));
}