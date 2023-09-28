function add(a, b){
return (a + b);
}

function subtract(a, b){
    return (a - b);
}

function multiply(a, b){
    return (a * b);
}

function divide(a, b){
    return (a / b);
}

function increment(n){
    return n +=1;
}

function decrement(n){
    return n -=1;
}

function makeInt(n){
    const partedInteger = parseInt(n, 10);
    return partedInteger;
}

function preserveDecimal(n){
   n = parseFloat(n);
   return n;
}