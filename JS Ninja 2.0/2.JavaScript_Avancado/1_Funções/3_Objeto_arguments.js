function sum ()
{
    //arguments(argumentos) é um objeto que nos retorna todos os parâmetros de uma função(ou seja, todos os argumentos)
    let resultado = 0

    for (const n of arguments)
    {
        resultado += n
    }

    return resultado
}

console.log(sum(1,1, 3 , 10, 4, 1, 3, 4))

//esse forma é ideal para quando não sabemos quantos argumentos irão colocar em nossa função