const fs = require("fs");
const path = require("path");


const generateSvg = (text, textColor, shape, shapeColor) => {
  console.log(text, textColor, shape, shapeColor);
};

const saveSvg = (svgData,fileName,callback) => {

    // construct file path
    const filePath = path.join(__dirname,'..','examples',fileName)

    // Write Generate SVG to file

    fs.writeFileSync(filePath,svgData, (err) =>{
        (err) ? callback(err) : callback(null)
    })
};

module.exports = {
  generateSvg,
  saveSvg,
};

