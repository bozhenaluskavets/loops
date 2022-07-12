const len = 7;
let symbol = '*';
let result = '';
let space = ' ';

//квадрат

console.log((symbol.repeat(len) + '\n').repeat(len));

//стрілка вниз

for (let stars = len; stars >= 0; stars = stars - 2) {
    console.log(space + symbol.repeat(stars));
    space += ' ';
}

//стрілка вгору

for (let stars = 1; stars <= len; stars += 2) {
    const spaces = (len - stars) / 2;
    console.log(' '.repeat(spaces), symbol.repeat(stars));
}

//стрілка вліво

for (let stars = 1; stars <= len / 2 + 1; stars++) {
    const spaces = (len / 2 - stars + 1);
    console.log(' '.repeat(spaces), symbol.repeat(stars));
}

for (let stars = len / 2; stars >= 1; stars--) {
    const spaces = (len / 2 - stars + 1);
    console.log(' '.repeat(spaces), symbol.repeat(stars));
}

//стрілка вправо

for (let stars = 1; stars <= len / 2 + 1; stars++) {
    console.log(symbol.repeat(stars));
}

for (let stars = len / 2; stars >= 1; stars--) {
    console.log(symbol.repeat(stars));
}

//ромб

for (let stars = 1; stars <= len; stars += 2) {
    const spaces = (len - stars) / 2;
    console.log(' '.repeat(spaces), symbol.repeat(stars));
}

for (let stars = len - 2; stars >= 0; stars = stars - 2) {
    const spaces = (len - stars) / 2;
    console.log(' '.repeat(spaces), symbol.repeat(stars));
}