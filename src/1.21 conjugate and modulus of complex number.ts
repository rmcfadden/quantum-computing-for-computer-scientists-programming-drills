/*
Write a program that accepts a omplex numbers and outputs the modulus and conjugate
*/
import readlineAsync from "./readline-async";
import {Complex, parseComplex, modulus, conjugate, complexToString } from "./complex"


type operatatorType = (c2: Complex) => Complex;
const operatorLookup = new Map<string, operatatorType>([["%", modulus],["c", conjugate],]);

const run = async (expression?: string) => {
    const line = (expression ?? await readlineAsync()).replace(/(s+)/,'');
    const operator = line[0];
    const complexLine = line.slice(1);
    const complex = parseComplex(complexLine);
    const operation = operatorLookup.get(operator);
    if(!operation) throw new Error(`operator ${operator} `);
    const result = operation(complex);
    return complexToString(result);
}

export default run;