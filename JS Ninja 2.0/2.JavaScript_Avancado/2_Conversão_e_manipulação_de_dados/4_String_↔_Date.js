//console.log(new Date()) // retorna dia hora... data atual do computador 

// transformar uma string em uma data

//Date -> Formato ISO (mes/dia/ano) -> (mm/dd/yyyy)
//console.log(new Date('07/20/2022'))

// também pode ser feito da seguinte forma
//console.log(new Date('2022-07-20')) //ano-mes-dia
//console.log(new Date('2022 07 20')) 

//transformar data em string
console.log(new Date().toString())
console.log(new Date().toISOString()) // para o formato iso

//OBS, SEMPRE TRABALHAR COM FORMATO ISO!!!