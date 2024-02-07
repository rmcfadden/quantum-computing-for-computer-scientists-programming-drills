import  run from "../src/1.21 conjugate and modulus of complex number";

test("complex conjugate", async () => {
    expect(await run('c -5+1i)')).toBe("-5-1i");
});

test("complex modulus", async () => {
    expect(await run('% -3+4i)')).toBe("5+0i");
});
