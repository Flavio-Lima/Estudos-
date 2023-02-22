// faz iteração sobre um objeto.

const person = {
    name: "Flavio",
    age: 40,
    city: "Nova Friburgo"
}

//formas que temos de chamar um elemento que está dentro do objeto
//obj.prop
//objeto.['prop']

for (const prop in person) // prop de propriedade
{
    console.log(`Prop: ${prop} - ${person[prop]}`)
}