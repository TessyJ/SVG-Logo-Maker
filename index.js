const readline = require('readline')
const {generateSvg,saveSvg} = require('./lib/shapes')

const read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

//prompt user to enter text for logo
read.question("Enter Text for logo (Up to 3 characters): ", (text) =>{

    // prompt usesr to enter text color for logo
    read.question("Enter text color (text or hexadecimal): ", (textColor) =>{

        // prompt user to select shape for logo
        read.question("Choose shape for logo (Circle, Square Or Triangle): " , (shape) =>{

            // prompt user to choose logo color
            read.question("Enter shape color (text or hexadecimal):",(shapeColor) => {

                //function to generate logo
                const svg = generateSvg(text,textColor,shape,shapeColor)

                //save SVG to file
                saveSvg(svg, text+'.svg', (err) => {
                    if(err){
                        console.error(`failed to genertae SVG File: ${err}`)
                    } else{
                        console.log(`SVG File (${text}.svg has been generated`)
                    }
                    read.close()
                })
            })
        })
    })
})