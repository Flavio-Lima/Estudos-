//replace - substituição
//replace espera dois parâmetros ('paralavra que deseja encontrar', 'palavra que vai substituir')

let frase = "Paulo é um camarada maneiro!"

console.log(frase.replace("Paulo", "Jhonn"))

//veja outro exemplo mais pratico

let value = 1234.556
console.log(value.toFixed(2).replace('.', ','))
//Método antigo de internacionalização de números (sem a API Intl)