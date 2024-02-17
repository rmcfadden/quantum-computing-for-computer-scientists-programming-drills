
/*
Write a program that converts a complex number from it's Cartesian representation to its polar representation and vice versa
*/
import readlineAsync from "./readline-async";
import {Complex, parseComplex, complexToString } from "./complex"
import {Polar, parsePolar,  polarToString } from "./polar"

const complexToPolar = (expression: string) => {
    const c1 = parseComplex(expression);
    return {p: Math.sqrt(c1.a * c1.a + c1.b * c1.b),  q: c1.b === 0 ? 0 : Math.atan(c1.a / c1.b) } as Polar;
}

const polarToComplex = (expression: string) => {
    const p = parsePolar(expression);
    return { a: p.p * Math.cos(p.q) , b: p.p * Math.sign(p.q)} as Complex;
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