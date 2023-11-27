
// Import the required shapes from the shapes.js file
const { Triangle, Square, Circle } = require('./shapes.js');

// Define the test suite for the shapes
describe('Shapes', () => {
    // Test the rendering of a triangle
    test('Triangle renders correctly', () => {
        // Create a new triangle with the specified attributes
        const triangle = new Triangle('blue', 'ABC', 'white');
        
        // Define the expected output for the triangle's render method
        const expectedOutput = '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
        
        // Use Jest's expect function to check if the triangle's render method returns the expected output
        expect(triangle.render()).toEqual(expectedOutput);
    });

    // Test the rendering of a square
    test('Square renders correctly', () => {
        // Create a new square with the specified attributes
        const square = new Square('green', 'DEF', 'white');
        
        // Define the expected output for the square's render method
        const expectedOutput = '<rect x="100" y="50" width="100" height="100" fill="green" />';
        
        // Use Jest's expect function to check if the square's render method returns the expected output
        expect(square.render()).toEqual(expectedOutput);
    });
    
    // Test the rendering of a circle
    test('Circle renders correctly', () => {
        // Create a new circle with the specified attributes
        const circle = new Circle('blue', 'GHI', 'white');
        
        // Define the expected output for the circle's render method
        const expectedOutput = '<circle cx="150" cy="100" r="50" fill="blue" />';
        
        // Use Jest's expect function to check if the circle's render method returns the expected output
        expect(circle.render()).toEqual(expectedOutput);
    });
});
//
