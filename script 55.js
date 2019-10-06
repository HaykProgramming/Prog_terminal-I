
let matrix = [];
let side = 30;
let grassArr = [];
let grassEaterArr = [];
let vagrArr = []
let rainArr =[];
let jurcrichArr = []

function setup() {
    matrixGenerator(20, 50, 40, 6, 3, 5);
    frameRate(8);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let grass = new Grass(x, y);
                grassArr.push(grass);
            }
            if (matrix[y][x] == 2) {
                let grassEater = new GrassEater(x, y);
                grassEaterArr.push(grassEater);
            }
            if (matrix[y][x] == 3) {
                let vagr = new Vagr(x, y);
                vagrArr.push(vagr);
            }
            if (matrix[y][x] == 4) {
                let rain = new Rain(x, y);
                rainArr.push(rain);
            }
            if (matrix[y][x] == 5) {
                let jurcrich = new Jurcrich(x, y);
                jurcrichArr.push(jurcrich);
            }
        }
    }
    function matrixGenerator(matrixSize, grass , grassEater,  vagr, rain, jurcrich){
        for (let i = 0; i < matrixSize; i++) {
           matrix[i] = [];
            for (let o = 0; o < matrixSize; o++) {
                matrix[i][o] = 0;
            }
        }
        for (let i = 0; i < grass; i++) {
            let customX = Math.floor(random(0, matrixSize));
            let customY = Math.floor(random(0, matrixSize));
            matrix[customY][customX] = 1;
        }
        for (let i = 0; i < grassEater; i++) {
            let customX = Math.floor(random(0, matrixSize));
            let customY = Math.floor(random(0, matrixSize));
            matrix[customY][customX] = 2;
        }
        for (let i = 0; i < vagr; i++) {
            let customX = Math.floor(random(0, matrixSize));
            let customY = Math.floor(random(0, matrixSize));
            matrix[customY][customX] = 3;
        }
        for (let i = 0; i < rain; i++) {
            let customX = Math.floor(random(0, matrixSize));
            let customY = Math.floor(random(0, matrixSize));
            matrix[customY][customX] = 4;
        }
        for (let i = 0; i < jurcrich; i++) {
            let customX = Math.floor(random(0, matrixSize));
            let customY = Math.floor(random(0, matrixSize));
            matrix[customY][customX] = 5;
        }
    }
}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("orange");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
            }
            else if (matrix[y][x] == 5) {
                fill("magenta");
            }
            rect(x * side, y * side, side, side);

        }
    }
    for (var i in grassArr) {
        grassArr[i].mul();
    }

    for (var i in grassEaterArr) {
        grassEaterArr[i].eat();
    }
    for (var i in vagrArr) {
        vagrArr[i].utel();
    }
    for (var i in rainArr) {
        rainArr[i].ml();
    }
    for (var i in jurcrichArr) {
        jurcrichArr[i].kcel();
        console.log(52)
    }
}
