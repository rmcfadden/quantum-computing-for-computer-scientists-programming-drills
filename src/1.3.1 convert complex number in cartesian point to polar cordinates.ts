
/*
Write a program that converts a complex number from it's Cartesian representation to its polar representation and vice versa
*/
import readlineAsync from "./readline-async";
import {Complex, parseComplex, complexToString } from "./complex"
import {Polar, parsePolar,  polarToString } from "./polar"

const round = (val: number, digits: number = 6) => Math.round(val * (Math.pow(10, digits))) / (Math.pow(10, digits));

const complexToPolar = (expression: string) => {
    const {a,b} = parseComplex(expression);
    return {r: round(Math.sqrt(a * a + b * b)),  q:a === 0 ? 0 : round(Math.atan(b / a))  } as Polar;
}

const polarToComplex = (expression: string) => {
    const {r,q} = parsePolar(expression);
    return { a: round(r * Math.cos(q)) , b: round(r * Math.sin(q))} as Complex;
}

const run = async (expression?: string) => {
    const line =  (expression ?? await readlineAsync()).replace(/ /g,'').toLowerCase();
    const isToPolar = line.indexOf('topolar') === 0;
    const isToComplex = line.indexOf('tocomplex')=== 0;
    if(!isToPolar && !isToComplex) throw new Error('Expected expression to start with toPolar or toComplex')
    const expressionPart = line.replace('topolar','').replace('tocomplex','')
    return isToPolar ? 
        polarToString(complexToPolar(expressionPart)) 
        : complexToString(polarToComplex(expressionPart));
}


export default run;