let len = 7;
let symbol = '*';
let result = '';
let space = ' ';

//квадрат

for (let i = 0; i < len; i++) {
    for (j = 0; j < len; j++) {
        result = result + symbol;
    }

    console.log(result);
    result = '';
}

console.log(space);

//стрілка вниз

for (let i = 0; i < len; i++) {
    for (j = 0; j < i; j++) {
        result = result + space;
    }
    
    for (let k = 0; k < len - i * 2; k++) { 
        result += symbol;
    }

    console.log(result);
    result = '';
}

console.log(space)

//стрілка вгору

for (let i = 1; i <= len; i++) {
    for (j = 1; j <= len - i; j++) {
        result = result + space;
    }
    
    for (let k = 0; k < 2 * i - 1; k++) {
        result += symbol;
    }

    console.log(result);
    result = '';
}

console.log(space);

//стрілка вліво

for (let i = 1; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
        result += space;
    }

    for (let k = 0; k < i; k++) {
        result += symbol;
    }

    console.log(result);
    result = '';
}

for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
        result += symbol;
    }
  
    for (let k = 0; k < i; k++) {
        result = space + result;
    }
  
    console.log(result);
    result = '';
}

console.log(space);

//стрілка вправо

for (let i = 1; i < len; i++) {

    for (let j = 0; j < i; j++) {
        result += symbol;
    }

    console.log(result);
    result = '';
}

for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      result += symbol;
    }
  
    console.log(result);
    result = '';
}