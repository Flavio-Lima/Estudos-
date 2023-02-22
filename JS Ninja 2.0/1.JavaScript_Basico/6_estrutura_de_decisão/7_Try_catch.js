try
{
    //executa algo...
    //consulta de API, banco de dados, arquivos...


    //apenas exemplos
    console.log("consultado o bando de dados...")
    throw 'Erro 1032 ao conectar com o banco de dados'
}
catch (error)
{
    //erro

    alert("Erro de execução genérico. Por favor, fale com o suporte.")
    console.error(error)
}
finally
{
    //sermpre executa ao final (opicional)
}