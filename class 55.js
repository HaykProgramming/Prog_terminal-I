class Grass { 

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.directions = [];
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        this.multiply++;
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);

        if (newCell && this.multiply >= 8) {

            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 1;

            let grass = new Grass(x, y);
            grassArr.push(grass);


            this.multiply = 0;
        }
    }
}
class GrassEater {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.life = 26;
        this.directions = [];
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);

        if (newCell) {

            let x = newCell[0];
            let y = newCell[1];


            matrix[y][x] = 2;

            // sarqum em OBJ lscnum grassArr-i mej 
            let grassEater = new GrassEater(x, y);
            grassEaterArr.push(grassEater);

            this.life = 0;
        }
    }
    eat() {
        let emptyCells = this.chooseCell(1);
        let newCell = random(emptyCells);

        if (newCell) {
            this.life++;

            let x = newCell[0];
            let y = newCell[1];

            // matrixi mej gru mem MEK -> 1
            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;


            for (let i in grassArr) {
                if (grassArr[i].x == x && grassArr[i].y == y) {
                    grassArr.splice(i, 1)
                }
            }

            this.y = y;
            this.x = x;

            if (this.life >= 28) {
                this.mul();
            }
        } else {
            this.move()
        }
    }
    move() {
        this.life--;
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);

        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];

            // matrixi mej gru mem MEK -> 1
            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;

            this.y = y;
            this.x = x;
        }
        if (this.life < 0) {

            this.die();
        }
    }
    die() {
        matrix[this.y][this.x] = 0;

        for (let i in grassEaterArr) {
            if (grassEaterArr[i].x == this.x && grassEaterArr[i].y == this.y) {
                grassEaterArr.splice(i, 1)
            }
        }
    }
}
class Vagr {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.kyanq = 56;
        this.directions = [];
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);

        if (newCell) {

            let x = newCell[0];
            let y = newCell[1];


            matrix[y][x] = 3;


            let vagr = new Vagr(x, y);
            vagrArr.push(vagr);

            this.kyanq = 0;
        }
    }
    utel() {
        let emptyCells = this.chooseCell(2);
        let newCell = random(emptyCells);

        if (newCell) {
            this.life++;

            let x = newCell[0];
            let y = newCell[1];


            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;


            for (let i in grassEaterArr) {
                if (grassEaterArr[i].x == x && grassEaterArr[i].y == y) {
                    grassEaterArr.splice(i, 1)
                }
            }

            this.y = y;
            this.x = x;

            if (this.kyanq >= 58) {
                this.mul();
            }
        } else {
            this.move()
        }
    }
    move() {
        this.kyanq--;
        let emptyCells = this.chooseCell(0);
        let emptyCells1 = this.chooseCell(1);
        let newCell = random(emptyCells.concat(emptyCells1));

        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];


            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            this.y = y;
            this.x = x;
        }
        if (this.kyanq < 0) {
            this.die();
        }
    }
    die() {
        matrix[this.y][this.x] = 0;

        for (let i in vagrArr) {
            if (vagrArr[i].x == this.x && vagrArr[i].y == this.y) {
                vagrArr.splice(i, 1)
            }
        }
    }
}
class Rain {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.mp = 0;
        this.directions = [];
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    ml() {
        this.mp++;
        let emptyCellss = this.chooseCell(0)
        let emptyCells = this.chooseCell(1);
        let newCell = random(emptyCellss.concat(emptyCells));

        if (newCell && this.mp >= 10) {

            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 4;

            let rain = new Rain(x, y);
            rainArr.push(rain);


            this.mp = 0;

        }
    }
}
class Jurcrich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.jizn = 92;
        this.directions = [];
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);

        if (newCell) {

            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 5;

            let jurcrich = new Jurcrich(x, y);
            jurcrichArr.push(jurcrich);

            this.jizn = 0;
        }
    }
    kcel() {
        let emptyCells = this.chooseCell(4);
        let newCell = random(emptyCells);

        if (newCell) {
            this.jizn++;

            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;


            for (let i in rainArr) {
                if (rainArr[i].x == x && rainArr[i].y == y) {
                    rainArr.splice(i, 1)
                }
            }

            this.y = y;
            this.x = x;

            if (this.jizn >= 92) {
                this.mul();
            }
        } else {
            this.move()
        }
    }
    move() {
        this.jizn--;
        let emptyCells = this.chooseCell(0);
        let emptyCells3 = this.chooseCell(1);
        let newCell = random(emptyCells.concat(emptyCells3));

        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;

            this.y = y;
            this.x = x;
        }
        if (this.jizn < 0) {
            this.die();
        }
    }
    die() {
        matrix[this.y][this.x] = 0;

        for (let i in jurcrichArr) {
            if (jurcrichArr[i].x == this.x && jurcrichArr[i].y == this.y) {
                jurcrichArr.splice(i, 1)
            }
        }
    }
}