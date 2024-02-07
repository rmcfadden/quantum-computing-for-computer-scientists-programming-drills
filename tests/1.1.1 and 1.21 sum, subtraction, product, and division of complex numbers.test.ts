import  run from "../src/1.1.1 and 1.21 sum, subtraction, product, and division of complex numbers";

test("complex add", async () => {
    expect(await run('(-10.2-4.2i)+(-16+9i)')).toBe("-26.2+4.8i")
});

test("complex subtract", async () => {
    expect(await run('(99.111+11.2i)-(-5+111i)')).toBe("104.111-99.8i")
});

test("complex multiply", async () => {
    expect(await run('(1+2i)*(-1.0-2i)')).toBe("3-4i")
});

test("complex divide", async () => {
    expect(await run('(1+2i)/(-1.0-2i)')).toBe("-1+0i")
});

test("complex divide 2", async () => {
    expect(await run('(2-6i)/(1+1i)')).toBe("-2-4i")
});

test("complex divide 3", async () => {
    expect(await run('(234-9i)/(-123+22i)')).toBe("-1.856145519759175-0.25882277589188496i")
});