interface Complex {
    a: number;
    b: number;
}

const add  = (c1: Complex, c2: Complex): Complex => ({a: c1.a + c2.a, b: c1.b + c2.b });
const subtract  = (c1: Complex, c2: Complex): Complex => ({a: c1.a - c2.a, b: c1.b - c2.b });
const multiply = (c1: Complex, c2: Complex): Complex => ({a: c1.a * c2.a - c1.b * c2.b, b: c1.a * c2.b + c1.a * c2.b  });
const division = (c1: Complex, c2: Complex): Complex => {
    const denominator = c2.a * c2.a + c2.b * c2.b;
    const numeratorReal = c1.a * c2.a + c1.b * c2.b;
    const numeratorI = c2.a * c1.b - c1.a * c2.b;
    return {a: numeratorReal / denominator, b: numeratorI / denominator};
}
const modulus = (c: Complex) => ({a: Math.sqrt(c.a*c.a + c.b*c.b), b:0});
const conjugate = (c: Complex) => ({a: c.a, b: c.b * -1 });

const parseComplex = (c: string): Complex => {
    const match = c.replace(/ /g,'').match(/(?<a>.*)(?<b>[+,-].*)i/);
    const {groups} = match || {};
    if(!groups) throw new Error(`bad complex expression ${c} provided`);
    const {a,b} = groups;
    return {a: parseFloat(a), b: parseFloat(b)} as Complex;
};
const complexToString = (c: Complex) => `${c.a}${c.b < 0 ? '-' : '+'}${Math.abs(c.b)}i`;

export {Complex, parseComplex, add, subtract, multiply, division,conjugate,modulus, complexToString};