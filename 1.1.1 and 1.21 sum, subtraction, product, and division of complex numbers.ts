/*
Write a program that accepts two complex numbers and outputs their: sum, subtraction, product, and division,
*/
import readlineAsync from "./readline-async.js";

interface Complex {
    a: number;
    b: number;
}

const add  = (c1: Complex, c2: Complex): Complex => ({a: c1.a + c2.a, b: c1.b + c2.b });
const subtract  = (c1: Complex, c2: Complex): Complex => ({a: c1.a - c2.a, b: c1.b - c2.b });
const multiply = (c1: Complex, c2: Complex): Complex => ({a: c1.a * c2.a - c1.b * c2.b , b: });


const run = async () => {
    console.log('Add, subtact, multiply, divide complex numbers');
    console.log('Strict Format: (a+bi)/(a+bi) # divide two complex numbers')
    const line = "(1+2i)/(1.0+2i)";  //await readlineAsync();
    const match = line.replace(/ /g,'').match(/\((?<c1>.*)\)(?<op>[+,-,*,//])(?<c2>\(.*\))/) as RegExpMatchArray;
    const {groups} = match || {};
    if(!groups) return console.error(`bad complex expression ${line} provided`);
}



export default run;

