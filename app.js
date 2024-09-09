function pesquisar() {
    // Esta função é responsável por pesquisar os dados e exibir os resultados na página.
 
    // Seleciona o elemento HTML com o ID "resultados-pesquisa" onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById ("campo-pesquisa").value
   
    // se campoPesquisa for uma string sem nada 
    if(campoPesquisa == ""){
        section.innerHTML = "Nenhum atleta foi encontrado.";
        return
    }

    // .toLowerCase faz a comparação deixando todas as letras minusculas
    campoPesquisa = campoPesquisa.toLowerCase()

    // console.log(section); // Este console.log é útil para depuração, mas pode ser removido.
    
    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada objeto (dado) dentro do array de dados.
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLocaleLowerCase()
        // se titulo includes campoPesquisa
        // || é o ou do js
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa))
         {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
                <p class="descricao-meta">${dado.descricao} </p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
            `;
        }
            // então, faça...

        console.log( dado.titulo.includes(campoPesquisa))
        // Para cada dado, cria uma nova div com as informações do dado.
        
    }
        // ! significa se não esxistir
    if (!resultados) {
        resultados = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte.</p>"
    }
    
    // Atribui a string com todos os resultados ao conteúdo HTML do elemento section.
    section.innerHTML = resultados;
}

