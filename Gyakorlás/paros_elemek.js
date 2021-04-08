const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenSum = 
     arr.filter(x => x % 2 === 0)
        .reduce((a, b) => a + b);

console.log(evenSum);

const oddSum =
    arr.filter(x => x % 2 === 1)
        .reduce((a, b) => a + b );

console.log(oddSum);

const reszsum = (accumulator, elem) => {
    const elojel = elem % 2 === 0 ? 1 : -1;
    return accumulator + elojel * elem
}

const sum = 
    arr.reduce( reszsum, 0);

console.log(sum);