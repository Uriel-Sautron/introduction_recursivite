const isPrimeNumber = (n, x = n - 1) => {
    if (x === 1) return true;
    else if (n % x === 0) return false;
    else return isPrimeNumber(n, x - 1)
}
console.log(isPrimeNumber(4));


const findSupPrime = (n) => {
    if (isPrimeNumber(n) === true) return n;
    return findSupPrime(n + 1);
}
console.log(findSupPrime(14));