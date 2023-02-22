//if ternário.

let texto = "A"
let valor

// forma tradicional faríamos da seguinte maneira.

if (texto == "A") 
{
    valor = 10
}
else
{
    valor = 20
}


// agora para fazer o if ternário seguimos da seguinte forma.
// variável = (condição) ? IF : ELSE

valor = (texto == "A") ? 10 : 20

console.log("valor = ", valor) 