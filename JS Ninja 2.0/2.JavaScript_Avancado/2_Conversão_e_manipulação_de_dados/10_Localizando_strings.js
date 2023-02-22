let frase = "Eu sou a lenda!"

//PODEMOS usar includes para localizar um nome ou algum caracter específico em nossa frase,
//é interessante usar lower ou upper para avaliar, pois para nosso programa maiusculo e minusculo são diferentes.

console.log(frase.includes('!')) // retorna true
console.log(frase.toLowerCase().includes("eu"))