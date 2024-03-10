import  run from "../src/1.3.1 convert complex number in cartesian point to polar cordinates";

test("complex toPolar", async () => {
    expect(await run('topolar 3+4i')).toBe("5,0.927295");
});

test("polar to complex", async () => {
    expect(await run('tocomplex 5,0.927295')).toBe("3.000001+3.999999i");
});
