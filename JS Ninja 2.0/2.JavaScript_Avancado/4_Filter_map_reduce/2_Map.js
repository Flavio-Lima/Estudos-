//retorna um Array manipulado

/* 
const numbers = [1, 2, 3, 4, 5]
const double = numbers.map((n) => n * 2) 
console.log(double)
 */

/* 
const fahrenheit = [0, 32, 45, 46, 47, 91, 93, 121]
const celcius = fahrenheit.map((temp) => Math.round(((temp - 32) * 5) /9))
console.log(celcius)
 */

const people = 
[
    {name: "felIpe", age: 40},
    {name: "Flavio", age: 14},
    {name: "davi", age: 16}
]

const peopleNormalized = people.map((p) => p.name.toLocaleUpperCase())
console.log(peopleNormalized)
