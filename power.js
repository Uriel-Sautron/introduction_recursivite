const computePowerIt = (n, p) => {
    let result = 1;
    for (let i = 0; i < p; i++) result *= n
    return result
}
console.log(computePowerIt(5, 8));

const computePowerRec = (n, p) => {
    if (p === 0) return 1;
    return n * computePowerRec(n, p - 1);
}
console.log(computePowerRec(5, 8))