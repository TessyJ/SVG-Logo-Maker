const fs = require("fs");
const path = require("path");


const generateSvg = (text, textColor, shape, shapeColor) => {
   let svgData =''
    switch (shape) {
      case "circle":
        svgData = `
          <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            <circle cx="150" cy="100" r="80" fill="${shapeColor}" />
            <text x="150" y="125"  font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
          </svg>
        `;
        break;
      case "triangle":
        svgData = `
          <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            <polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" />
            <text x="150" y="150" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
          </svg>
        `;
        break;
      case "square":
        svgData = `
          <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            <rect width="200" height="200" fill="${shapeColor}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
          </svg>
        `;
        break;
      default:
        throw new Error(`Invalid shape: ${shape}`);
    }

    return svgData

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

