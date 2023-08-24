//imports fs and readline files
const fs = require('fs');
const readline = require('readline');

//creates interface for user reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Prompts questions for creating the logo type
rl.question('Enter up to three characters: ', text => {
    rl.question('Enter text color (keyword or hexadecimal): ', textColor => {
        rl.question('Choose a shape (circle/triangle/square): ', shape => {
            rl.question('Enter shape color (keyword or hexadecimal): ', shapeColor => {
                rl.close();

                // Creates the logo based on user input
                const svgContent = `
                    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                        <${shape} cx="150" cy="100" r="50" fill="${shapeColor}" />
                        <text x="150" y="100" text-anchor="middle" alignment-baseline="central" fill="${textColor}">
                            ${text}
                        </text>
                    </svg>
                `;

                //Creates file named "logo.svg"
                fs.writeFileSync('logo.svg', svgContent);

                //console logs the logo being generated
                console.log('Generated logo.svg');
            });
        });
    });
});
