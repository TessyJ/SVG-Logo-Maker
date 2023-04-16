const readline = require('readline')

const read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

//prompt user to enter text for logo
read.question("Enter Text for logo (Up to 3 characters): ", (text) =>{

    // prompt usesr to enter text color for logo
    read.question("Enter text color (text or hexadecimal): ", (textcolor) =>{

        // prompt user to select shape for logo
        read.question("Choose shape for logo (Circle, Square Or Triangle): " , (shape) =>{

            // prompt user to choose logo color
            read.question("Enter shape color (text or hexadecimal):",(shape) => {

                //function to generate logo
            })
        })
    })
})