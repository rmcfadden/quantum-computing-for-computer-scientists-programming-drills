import  run from "../src/1.3.1 convert complex number in cartesian point to polar cordinates";

test("complex toPolar", async () => {
    expect(await run('topolar -3+4i')).toBe("5,-0.643501");
});

test("polar to complex", async () => {
    expect(await run('tocomplex -5,-0.6435')).toBe("5,-0.6435");
});
