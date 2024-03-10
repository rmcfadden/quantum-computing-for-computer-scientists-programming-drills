interface Polar {
    r: number;
    q: number;
}

const parsePolar = (c: string): Polar => {
    const [r,q] = c.split(',');
    return {r: parseFloat(r),q: parseFloat(q)};
}
const polarToString = (c: Polar) => `${c.r},${c.q}`;

export {Polar, parsePolar,polarToString};