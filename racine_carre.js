const computeSquareRoot = (n, x = n) => {
    let guess = (x + (n / x)) / 2; //The Babylonian method
    if (x === 0) return 0;
    else if (x === guess) return guess;
    else return computeSquareRoot(n, guess)
}
console.log(computeSquareRoot(25));