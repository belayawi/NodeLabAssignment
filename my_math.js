
const pi = 3.14;

const add = function(x, y){
    return x + y;
}

const subtract = function(x, y){
    return x - y;
}

const multiply = function(x, y){
    return x * y;
}

const divide = function( x, y){
    if(y!=0){
        return x/y;
    }
}

module.exports ={
    pi,
    add,
    subtract,
    multiply,
    divide
}