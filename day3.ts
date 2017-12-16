
//day3(325489);

let done3b = false;
let target3b = 325489;
day3b();

function day3(day3Input: number) {

    let width = getWidth(day3Input);
    let ring = (width - 1) / 2;
    let lastOnRing = (width * width);
    let stepsOnRing = Math.abs((lastOnRing - day3Input - ring) % (width - 1));
    if (stepsOnRing > ring) {
        stepsOnRing -= ring;
    }

    console.log('input:', day3Input, ': total steps', ring + stepsOnRing);
}

function getWidth(day3Input: number) {
    let width = 1;
    while ((width) * (width) < day3Input) {
        width += 2;
    }
    return width;
}

function day3b() {

    let width = 9;
    let array = new Array<Array<number>>();

    for (let i = 0; i < width; i++) {
        array[i] = new Array<number>(width);
        for (let x = 0; x < array[i].length; x++) {
            array[i][x] = 0;
        }
    }
    setValue(0, 0, 1, array);

    let ring = 0;
    while (!done3b) {
        fillNextRing(++ring, array);
    }

    console.log('ring:', ring);
}

function fillNextRing(ring: number, array: number[][]) {

    for (let y1 = ring - 1; y1 >= -ring;  y1--) {
        setValue(ring, y1, getNeighborsValue(ring, y1, array), array);
    }

    for (let x1 = ring - 1; x1 >= -ring;  x1--) {
        setValue(x1, -ring, getNeighborsValue(x1, -ring, array), array);
    }

    for (let y1 = -ring + 1; y1 <= ring; y1++) {
        setValue(-ring, y1, getNeighborsValue(-ring, y1, array), array);
    }

    for (let x1 = -ring + 1; x1 <= ring ; x1++) {
        setValue(x1, ring, getNeighborsValue(x1, ring, array), array);
    }

}

function getValue(x: number, y: number, array: number[][]): number {

    let x1 = x + (array[0].length - 1) / 2;
    let y1 = y + (array[0].length - 1) / 2;

    return array[y1][x1];
}

function getNeighborsValue(x: number, y: number, array: number[][]): number {

    let result = 0;
    let radius = (array[0].length - 1) / 2;

    let x1 = x - 1; if (Math.abs(x1) > radius) { x1++; }
    let x2 = x + 1; if (x2 > radius) { x2--; }
    let y1 = y - 1; if (Math.abs(y1) > radius) { y1++; }
    let y2 = y + 1; if (y2 > radius) { y2--; }

    for (let yi = y1; yi <= y2; yi++) {
        for (let xi = x1; xi <= x2; xi++) {
            result += getValue(xi, yi, array);
        }
    }

    return result;
}

function setValue(x: number, y: number, value: number, array: number[][]) {

    let x1 = x + (array[0].length - 1) / 2;
    let y1 = y + (array[0].length - 1) / 2;

    if (!done3b && value > target3b) {
        console.log('result 3b:', value);
        done3b = true;
    }

    array[y1][x1] = value;
}
