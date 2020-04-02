var hexToRGB = require("./hex-to-RGB.js");


if (process.argv[2] == "hex"){
    console.log("RGB: " + hexToRGB(process.argv[3]).r + "," + hexToRGB(process.argv[3]).g + ","
        + hexToRGB(process.argv[3]).b);
}