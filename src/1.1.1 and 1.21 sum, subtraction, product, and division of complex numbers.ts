/*
Write a program that accepts two complex numbers and outputs their: sum, subtraction, product, and division,
*/
import readlineAsync from "./readline-async";
import {Complex, parseComplex, add, subtract, multiply, division, complexToString } from "./complex"


type operatatorType = (c1: Complex, c2: Complex) => Complex;
const operatorLookup = new Map<string, operatatorType>([["+", add],["-", subtract],["*", multiply],["/",division]]);

const run = async (expression?: string) => {
    const line = expression ?? await readlineAsync();
    const match = line.replace(/ /g,'').match(/\((?<c1>.*)\)(?<operator>[+,\-,*,//])\((?<c2>.*)\)/) as RegExpMatchArray;
    const {groups} = match || {};
    if(!groups) throw new Error(`bad complex expression ${line} provided`);
    const {c1, operator, c2} = groups;
    const complex1 = parseComplex(c1);
    const complex2 = parseComplex(c2);
    const operation = operatorLookup.get(operator);
    if(!operation) throw new Error(`operator ${operator} `);
    const result = operation(complex1, complex2);
    return complexToString(result);
}

const help = () => {
    // TODO
    console.log('Add, subtact, multiply, divide complex numbers');
    console.log('Strict Format: (a+bi)/(a+bi) # divide two complex numbers')
}

export default run;

