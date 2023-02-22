const nomes = ["Felipe","Paulo","Marcelo", "Maria"]

/*
for (let i = 0; i < 3; i++) //nesse caso le de o indice de 0 a 2 
{
    console.log(nomes[i])
}
*/

//length percorre todo o array e mostra a quantidade de elementos ou exibe todos os elementos, depende do que voce deseja.
/*
for (let i = 0; i < nomes.length; i++) //nesse caso le de o indice de 0 a 2 
{
    console.log(nomes[i])
}
*/

//vamos ver o for of que vai nor permitir o mesmo resultado sem precisar ficar declarando todas aquelas variáveis.

for (const nome of nomes)
{
    console.log(nome)
}