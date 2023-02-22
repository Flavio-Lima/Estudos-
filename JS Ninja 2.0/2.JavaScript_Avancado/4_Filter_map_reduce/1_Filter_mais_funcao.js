const people = [
    {name: "FLAVIO", gender: "M", age: 22},
    {name: "JOÃO", gender: "M", age: 14},
    {name: "JOSE", gender: "M", age: 18},
    {name: "Marcos", gender: "M", age: 24},
    {name: "Carlos", gender: "M", age: 26},
    {name: "Maria", gender: "F", age: 19} 
]

const maiores = people.filter((p) => p.age >= 18)

//console.log(maiores)


//const maioresEmasc = people.filter((p) => p.age >= 18 && p.gender === "M")
const maioresEmasc = people.filter((p) => p.age >= 18 && p.age <= 25 && p.gender === "M")

console.log(maioresEmasc)