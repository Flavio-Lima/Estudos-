let name = "Flávio";
let age = 25;

let addres = {
    street: "rua central",
    city: "Rio de janeiro"
}

//rodando o cod vemos que retorna object object. pois o js nao consegue transformar objeto em string
console.log(`${addres}`)

// para contornar devemos fazer o seguinte. usar a função JSON.stringify() que é uma função pronta que transforma nosso objeto em JSON para se fazer a leitura


console.log(`${JSON.stringify(addres)}`)
