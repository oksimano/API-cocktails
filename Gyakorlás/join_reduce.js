const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const eredmeny = 
    data.filter(x => x % 3 === 0)
        .map(x => `<div>${x}</div>`)
        .join('\n');

console.log(eredmeny);




const eredmenyReduce = 
    data.filter(x => x % 3 === 0)
        .map(x => `<div>${x}</div>`)
        .reduce((a, b) => a + '\n' + b, '');

console.log(eredmenyReduce);



