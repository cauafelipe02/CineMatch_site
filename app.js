function pesquisar(dados, sectionClass, sectionId) {
    // Obtém a seção HTML onde os resultados serão exibidos
    const campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let tags = "";
  
    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
  
      // Separa o título em palavras minuscula
      titulo = dado.titulo.toLowerCase();
      tags = dado.tags.toLowerCase();
  
      //Se o titulo estiver includes no campoPesquisa
      if (titulo.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Adiciona um novo item de resultado à string resultados
        resultados += `
          <div class="item-resultado">
            <img src="${dado.image}" alt="${dado.alt}">
            <h2>${dado.titulo}</h2>
          </div>
        `;
      }
    }
  
    // Seleciona todas as seções com a classe especificada
    const section = document.querySelector(`.${sectionClass}#${sectionId}`);
  
    // Verifica se há resultados antes de atualizar o conteúdo da seção
    if (resultados) {
        section.innerHTML = resultados;
        section.classList.remove('hidden');
    } else {
        section.classList.add('hidden');
    }
      
  }
  
// Chamar a função de pesquisa para ambas as seções no carregamento da página
window.onload = () => {
    pesquisar(dados, 'resultado-pesquisa', 'resultado-pesquisa-marvel');
    pesquisar(dadosDisney, 'resultado-pesquisa', 'resultado-pesquisa-disney');

    // Adicionar evento de pesquisa para atualizar os resultados
    document.getElementById("campo-pesquisa").addEventListener("input", () => {
        pesquisar(dados, 'resultado-pesquisa', 'resultado-pesquisa-marvel');
        pesquisar(dadosDisney, 'resultado-pesquisa', 'resultado-pesquisa-disney');

            // Verifica se o campo de pesquisa está vazio
    if (!campoPesquisa) {
        // Se estiver vazio, remove a classe 'hidden' de todas as seções
        const todasSecoes = document.querySelectorAll('.resultado-pesquisa');
        todasSecoes.forEach(secao => {
            secao.classList.remove('hidden');
        });
    }
    });
};