const arrInt = (n) => {
    let int = []
    if (n <= 0) return int;
    for (let i = 0; i < n; i++) int.push(i + 1);
    return int;
}

const succList = (array) => {
    return array.map(x => x + 1)
}

const predList = (array) => {
    return array.map(x => x - 1)
}

const diff = (arr1, arr2) => {
    return arr1.filter(int => !arr2.includes(int))
}

const remove = (arr, int) => {
    return arr.filter(x => x != int)
}

const countValidQueens = (n) => {
    const listOfInt = arrInt(n)
}

const arrTest = arrInt(8)
console.log(succList(arrTest));
console.log(predList(arrTest));
console.log(diff(succList(arrTest), predList(arrTest)));