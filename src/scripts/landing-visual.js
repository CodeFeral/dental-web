import { createNoise2D } from "./simplex-noise";


const colsCount = 40;
const rowsCount = 40;
const divisor = 0.030;
const deltaTime = 0.076;
const xTimeScalar = 0.5;

const cells = [];
let width;
let height;
let cellWidth;
let cellHeight;
let resize = false;
let time = 0;

function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;

    cellWidth = (width / colsCount);
    cellHeight = (height / rowsCount);

    resize = true;
}

class Cell {
    constructor(x, y, value) {
        this.x = x;
        this.y = y;
        this.value = value;
    }

    draw() {
        ctx.fillStyle = `rgba(255, 240, 222, ${this.value * 0.01})`;

        ctx.fillRect(
            this.x,
            this.y,
            cellWidth,
            cellHeight
        );
    }

}

function initializeCellsArray() {
    cells.length = 0;

    for (let x = 0; x < colsCount; x++) {
        const row = [];
        for (let y = 0; y < rowsCount; y++) {
            row.push(new Cell(
                x * cellWidth,
                y * cellHeight,
                0
            ));
        }
        cells.push(row);
    }
}

function draw() {
    if (resize) {
        initializeCellsArray();
        resize = false;
    }

    time += deltaTime;

    ctx.clearRect(0, 0, width, height);

    for (let x = 0; x < colsCount; x++) {
        for (let y = 0; y < rowsCount; y++) {
            const cell = cells[x][y];

            const noiseValue = noise2D(
                (x + (time * xTimeScalar)) * divisor,
                (y + time) * divisor
            );
            cell.value = ((noiseValue + 1) * 50);

            cell.draw();
        }
    }

    requestAnimationFrame(draw);
}

const canvas = document.getElementById('landing-canvas');
const ctx = canvas.getContext('2d');
const noise2D = createNoise2D();
window.addEventListener('resize', resizeCanvas);

resizeCanvas();

initializeCellsArray()
draw();