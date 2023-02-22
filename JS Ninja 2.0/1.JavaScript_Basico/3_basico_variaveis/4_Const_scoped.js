
// escopo global
const x =10 
console.log("x = ", x)
        
{//escopo local
    console.log("x = ", x)
                       
    const y = 30            
}
        
console.log("x = ", x)
console.log("y = ", y) 

//constantes não são possíveis serem redeclaradas, e também nao podem ser lidas fora de um escopo local, caso seja declara dentro dele.

   