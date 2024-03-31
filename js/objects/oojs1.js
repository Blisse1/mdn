class Shape {
    name; 
    sides; 
    sideLength; 

    constructor(name, sides, sideLength){
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }

    calcPerimeter(){
        console.log(`${this.sides * this.sideLength}`);     
    }
}

const square = new Shape("square", 4, 5);

const triangle = new Shape("triangle", 3, 3);

class Square extends Shape {
    constructor(sideLength){
        super(sideLength);
        this.name = "square";
        this.sides = 4;
        this.sideLength = sideLength;
    }
    calcArea(){
        console.log(`${this.sideLength * this.sideLength}`);     
    }
    calcPerimeter(){
        console.log(`${this.sides * this.sideLength}`);     
    }
}
const squareII = new Square(4);
const squareIV = new Square(4);
console.log(squareIV.name);
console.log(squareIV.sides);
console.log(squareIV.sideLength);
squareIV.calcArea();
squareIV.calcPerimeter();
