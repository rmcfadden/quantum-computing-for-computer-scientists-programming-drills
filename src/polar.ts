interface Polar {
    p: number;
    q: number;
}

const parsePolar = (c: string): Polar => {
    const [p,q] = c.split(',');
    return {p: parseInt(p),q: parseInt(q)};
}
const polarToString = (c: Polar) => `${c.p},${c.q}`;

export {Polar, parsePolar,polarToString};