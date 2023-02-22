let people = ["Flavio", "Felipe", "André", "Paulo", "Marcelo"]

//Retornar elementos específicos de um array
/* 
console.log(people[2])
console.log(people[people.length - 1]) // preciso usar menos 1. pq o array começa do 0 e o length vai ternar a quantidade total de elementos. para ver o ultimo elemente preciso fazer desse forma e por o menos 1


//----------------------------------------------------------------------------------

//Retronar "fatias" de um array

    //usar o slice para retornar alguns elementos do array

    console.log(people.slice(2)) // pedi para retornar a partir do elemento 2

    //também posso retronar uma quantia especifica. Exemplo do 1 ao 3
    console.log(people.slice(1, 3))

//----------------------------------------------------------------------------------
 */

/* 
//adicionar novos elementos no array (início e fim)

    people.push("Ana") //adiciona no final
    people.unshift("Maria") // adiciona no inicio do array
    console.log(people)



//----------------------------------------------------------------------------------


//remover elementos no array (início e fim)

people.pop() //remove elementos do fim do array
people.shift() // remove elementos do início do array
console.log(people)

    //se eu usar o pop no console ele me retorna o obejto que ele removeu. (me mostra qual)
    console.log(people.pop())
    console.log(people)


//----------------------------------------------------------------------------------

//remover "fatias" de um array
people.slice(1, 2) //o primeiro elemento é o indice que ele vai remover. o segundo elemento é a quantidade que vai remover contando o primeiro elemento.
//é diferente da forma que o slice trabalha.

console.log(people)

 */

//localizar elementos
//para descobrir em qual indicie um nome se encontra

let index = people.indexOf("Paulo")

//para remover o proprio paulo
people.slice(index, 1) //remova o elemnte de index. como a contagem é um, ele remove o próprio elemento e não conta nenhum para frente


console.log(index)