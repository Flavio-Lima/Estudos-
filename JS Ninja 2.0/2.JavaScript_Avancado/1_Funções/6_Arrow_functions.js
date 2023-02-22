const mult = (n) => {
    n *= n
    return n
}

// ou 

const mult2 = n2 => (n2 *= n2) // fazendo em uma linha, os parensetes funcionam como retorn

console.log(mult2(10))