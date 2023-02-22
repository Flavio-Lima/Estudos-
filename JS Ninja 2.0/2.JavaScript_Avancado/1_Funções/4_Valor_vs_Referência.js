function multi(n) {
    n *= n
    return n
}

let numVal = 10
console.log(multi(numVal));
console.log(numVal)

//----------------------------------------------------------

function multObj(obj){
    obj.value *= obj.value
    return obj
}

const numObj = { value: 10}
console.log(multObj(numObj))
console.log(numObj)

//variáveis do tipo objeto sao passadas como referencia, tudo que voce passar, será passado pelo próprio objeto, então tudo que manipular na função, 
//irá refletir no objeto que foi passado como parâmetro.
// o nome disso é chamado de comportamento por referencia. 