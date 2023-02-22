//a maioria das pessoas fariam dessa forma, sem usar a função filter
/* 
const numbers = [10, 18, 1, 15]

let res = []

for (const n of numbers) {
    if (n > 10) 
    {
        res.push(n)
    }
} 

console.log(res)
//assim ele filtra os números maiores que 10
 */

//--------------------------------------------------------------------------------

//usando filter

const numbers = [10, 18, 1, 15]

/* 
const gt10 = function (item)
{
    return item > 10 //true / false
}

let res = numbers.filter(gt10)
console.log(res) */


//também posso declarar a função dentro do filter

let res = numbers.filter(function (item){
    return item > 10
})

console.log(res)

// ou arrow function

let res1 = numbers.filter((n) => n > 10)
console.log(res1)
