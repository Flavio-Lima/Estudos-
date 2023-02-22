const person = {
    name: 'Flávio',
    age: 25,
    address: {
        street: 'Rua Helio maia',
        city: 'Nova Friburgo'
    },
}

person.name = 'Carol' // posso trocar no nome, mesmo sendo constantes, isso em objeto e array
person.hairColor = 'black' // também posso acrescentar novos em tempo de execução 

console.log(person.hairColor)
console.log(person.name)
console.log(person.age)

//console.log(`${person.name} tem ${person.age} anos e reside na cidade de ${person.address.city}`)