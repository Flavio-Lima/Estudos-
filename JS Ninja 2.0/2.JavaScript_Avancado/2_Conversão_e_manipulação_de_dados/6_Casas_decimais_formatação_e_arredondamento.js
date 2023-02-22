// toFixed() semrpe arredonda 0,5 para cima, tomar cuidade
// Math.ceil() arredonda para cima
// Math.floor() arredonda para baixo
// Math.round() parecido com o floor
// new Intl.NumberFormat().formar()

let value = 1234.255

console.log(value.toFixed(1))

console.log(Math.ceil(value))
console.log(Math.floor(value))
console.log(Math.round(value))

//Para trabalhar com formatação de moeda, vou fazer para real brasileiro.
console.log(
    new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",        
    }).format(value)
)