
// Define the base class for SVG shapes
class svgShape {
    constructor() {
        this.color = ''
        this.fontColor = ''
        this.text = ''
    }

    // Define methods to set the color, text, and font color of the shape
    defineColor(color) {
        this.color = (color);
    }   

    defineText(text) {
        this.text = (text);
    }

    defineFontColor(fontColor) {
        this.fontColor = (fontColor);
    }

}

// Define the Triangle class that extends the base svgShape class
class Triangle extends svgShape {
    constructor(color, text, fontColor) {
        super();
        this.color = color;
        this.text = text;
        this.fontColor = fontColor;
        this.axisY = 130;
      }

    // Define the render method for the Triangle class
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

// Define the Square class that extends the base svgShape class
class Square extends svgShape {
    constructor(color, text, fontColor) {
        super();
        this.color = color;
        this.text = text;
        this.fontColor = fontColor;
        this.axisY = 110;
      }

    // Define the render method for the Square class
    render() { 
        return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`
    }
}

// Define the Circle class that extends the base svgShape class
class Circle extends svgShape {
    constructor(color, text, fontColor) {
        super();
        this.color = color;
        this.text = text;
        this.fontColor = fontColor;
        this.axisY = 113;
      }

    // Define the render method for the Circle class
    render() { 
        return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`
    }
}

// Export the classes for use in other modules
module.exports = {
    Triangle,
    Square,
    Circle,
}
