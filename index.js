const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter up to three characters: ', text => {
    rl.question('Enter text color (keyword or hexadecimal): ', textColor => {
        rl.question('Choose a shape (circle/triangle/square): ', shape => {
            rl.question('Enter shape color (keyword or hexadecimal): ', shapeColor => {
                rl.close();

                const svgContent = `
                    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                        <${shape} cx="150" cy="100" r="50" fill="${shapeColor}" />
                        <text x="150" y="100" text-anchor="middle" alignment-baseline="central" fill="${textColor}">
                            ${text}
                        </text>
                    </svg>
                `;

                fs.writeFileSync('logo.svg', svgContent);
                console.log('Generated logo.svg');
            });
        });
    });
});
