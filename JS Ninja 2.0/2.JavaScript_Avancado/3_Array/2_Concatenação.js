let set1 = [1, 2, 3, 4, 5]
let set2 = [6, 7, 8, 9 ,10]
let set3 = [11, 12]

console.log(typeof (set1 + set2)) //na pratica cria uma string (coersion)
console.log([set1, set2]) //cria um novo array com 2 sub-arrays
console.log(set1.concat(set2).concat(set3)) // cria um novo array concatenado

