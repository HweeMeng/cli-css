var hexToRGB = require("./hex-to-RGB.js");
var rgbToHex = require("./rgb-to-hex.js");
var rgbToHSL = require("./rgb-to-hsl.js");


if (process.argv[2] == "hex"){
    console.log("RGB: " + hexToRGB(process.argv[3]).r + "," + hexToRGB(process.argv[3]).g + ","
        + hexToRGB(process.argv[3]).b);
    let red = parseInt(hexToRGB(process.argv[3]).r);
    let green = parseInt(hexToRGB(process.argv[3]).g);
    let blue = parseInt(hexToRGB(process.argv[3]).b);
    console.log("HSL: " + rgbToHSL(red,green,blue));
}else if (process.argv[2] == "rgb"){
    console.log("RGB: " + rgbToHex(parseInt(process.argv[3]), parseInt(process.argv[4]), parseInt(process.argv[5])));
    console.log("HSL: " + rgbToHSL(parseInt(process.argv[3]), parseInt(process.argv[4]), parseInt(process.argv[5])));
    // hsl to *360
}