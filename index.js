const dbDicas = [
  {
    id: 1,
    titulo: "Grid vs Flex-Box",
    linguagem: "CSS",
    categoria: "FrontEnd",
    descricao:
      "A diferença crucial entre flexbox e grid, além do primeiro ser unidimensional e o outro ser bi-dimensional, é que o controle do layout no grid vem do container e no flexbox vem dos elementos.",
    video: "https://www.youtube.com/watch?v=x-4z_u8LcGc",
  },
];

//FUNÇÕES PARA SETAR E COLETAR ITEM DO LOCALSTORAGE//

const getLocalStorage = () => JSON.parse(localStorage.getItem("db_dicas"));
const setLocalStorage = () =>
  localStorage.setItem("db_dicas", JSON.stringify(dbDicas));
setLocalStorage();

//FUNÇÃO PARA SALVAR OS DADOS DA DICA ENVIADA NO FORMULARIO//

let dica = {};
const salvarDica = () => {
  dica = {
    id: dbDicas.length + 1,
    titulo: document.querySelector("#titulo").value,
    linguagem: document.querySelector("#linguagem").value,
    categoria: document.querySelector("#categoria").value,
    descricao: document.querySelector("#descricao").value,
    linkVideo: document.querySelector("#link-video").value,
  };
  dbDicas.push(dica);
};

//FUNÇÃO PARA CARREGAR ITENS NA TELA//

const divContainerCards = document.getElementById("container-card-dica");
const divCards = document.createElement("div");
divContainerCards.appendChild(divCards);

function carregarCardsArray() {
  let array = getLocalStorage();
  array.forEach((item) => {
    let botaoExcluir, botaoEditar, botaoVideo;

    divCards.style.backgroundColor = "white";
    divCards.style.padding = "10px";
    divCards.style.maxWidth = "630px";
    divCards.style.borderRadius = "5px";

    const divTitulo = document.createElement("div");
    divTitulo.innerHTML += item.titulo;
    divCards.appendChild(divTitulo);
    divTitulo.style.padding = "10px";
    divTitulo.style.textAlign = "center";
    divTitulo.style.fontSize = "18px";

    const divLinguagem = document.createElement("div");
    divLinguagem.innerHTML += `Linguagem/Skill: ${item.linguagem}`;
    divCards.appendChild(divLinguagem);
    divLinguagem.style.padding = "3px";

    const divCategoria = document.createElement("div");
    divCategoria.innerHTML += `Categoria: ${item.categoria}`;
    divCards.appendChild(divCategoria);
    divCategoria.style.padding = "3px";

    const divDescricao = document.createElement("div");
    divDescricao.innerHTML += `Descrição: ${item.descricao}`;
    divCards.appendChild(divDescricao);
    divDescricao.style.maxWidth = "610px";
    divDescricao.style.padding = "3px";

    const divBotoesCards = document.createElement("div");
    divCards.appendChild(divBotoesCards);
    divBotoesCards.style.display = "flex";
    divBotoesCards.style.gap = "10px";
    divBotoesCards.style.padding = "3px";

    const divBotaoExcluir = document.createElement("div");
    divBotoesCards.appendChild(divBotaoExcluir);
    botaoExcluir = document.createElement("button");
    botaoExcluir.innerHTML += `<i class="fa-regular fa-trash-can"></i>`;
    divBotaoExcluir.appendChild(botaoExcluir);
    botaoExcluir.style.padding = "5px";
    botaoExcluir.style.borderRadius = "50%";
    botaoExcluir.style.backgroundColor = "white";

    //FUNCAO PARA O BOTAO EXCLUIR - ainda não está funcionando//

    botaoExcluir.onclick = function () {
      console.log("houve um clique");
    };

    const divBotaoEditar = document.createElement("div");
    divBotoesCards.appendChild(divBotaoEditar);
    botaoEditar = document.createElement("button");
    botaoEditar.innerHTML += `<i class="fa-regular fa-pen-to-square">`;
    divBotaoEditar.appendChild(botaoEditar);
    botaoEditar.style.padding = "5px";
    botaoEditar.style.borderRadius = "50%";
    botaoEditar.style.backgroundColor = "white";

    //FUNCAO PARA O BOTAO EDITAR - ainda não está funcionando//

    botaoEditar.onclick = function () {
      console.log("houve um clique");
    };

    if (item.linkVideo != "") {
      divBotaoVideo = document.createElement("div");
      divBotoesCards.appendChild(divBotaoVideo);
      botaoVideo = document.createElement("button");
      botaoVideo.innerHTML += `<i class="fa-solid fa-video"></i>`;
      divBotaoVideo.appendChild(botaoVideo);
      botaoVideo.style.padding = "5px";
      botaoVideo.style.borderRadius = "50%";
      botaoVideo.style.backgroundColor = "white";
      botaoVideo.onclick = function () {
        window.location.href = item.video;
      };
    }
  });
}
carregarCardsArray();

//FUNÇÃO PARA CRIAR NOVOS CARDS DE DICAS EM TELA//

function criarCardsDicas() {
  let botaoExcluir, botaoEditar, botaoVideo;

  divCards.style.backgroundColor = "white";
  divCards.style.padding = "10px";
  divCards.style.maxWidth = "630px";
  divCards.style.borderRadius = "5px";

  const divTitulo = document.createElement("div");
  divTitulo.innerHTML += dica.titulo;
  divCards.appendChild(divTitulo);
  divTitulo.style.padding = "10px";
  divTitulo.style.textAlign = "center";
  divTitulo.style.fontSize = "18px";
  divTitulo.style.padding = "3px";

  const divLinguagem = document.createElement("div");
  divLinguagem.innerHTML += `Linguagem/Skill: ${dica.linguagem}`;
  divCards.appendChild(divLinguagem);
  divLinguagem.style.padding = "3px";

  const divCategoria = document.createElement("div");
  divCategoria.innerHTML += `Categoria: ${dica.categoria}`;
  divCards.appendChild(divCategoria);
  divCards.style.padding = "3px";

  const divDescricao = document.createElement("div");
  divDescricao.innerHTML += `Descrição: ${dica.descricao}`;
  divCards.appendChild(divDescricao);
  divDescricao.style.maxWidth = "610px";
  divDescricao.style.padding = "3px";

  const divBotoesCards = document.createElement("div");
  divCards.appendChild(divBotoesCards);
  divBotoesCards.style.display = "flex";
  divBotoesCards.style.gap = "10px";
  divBotoesCards.style.padding = "3px";

  const divBotaoExcluir = document.createElement("div");
  divBotoesCards.appendChild(divBotaoExcluir);
  botaoExcluir = document.createElement("button");
  botaoExcluir.innerHTML += `<i class="fa-regular fa-trash-can"></i>`;
  divBotaoExcluir.appendChild(botaoExcluir);
  botaoExcluir.style.padding = "5px";
  botaoExcluir.style.borderRadius = "50%";
  botaoExcluir.style.backgroundColor = "white";

  //FUNCAO PARA O BOTAO EXCLUIR//

  botaoExcluir.onclick = function () {
    console.log("houve um clique");
  };

  const divBotaoEditar = document.createElement("div");
  divBotoesCards.appendChild(divBotaoEditar);
  botaoEditar = document.createElement("button");
  botaoEditar.innerHTML += `<i class="fa-regular fa-pen-to-square">`;
  divBotaoEditar.appendChild(botaoEditar);
  botaoEditar.style.padding = "5px";
  botaoEditar.style.borderRadius = "50%";
  botaoEditar.style.backgroundColor = "white";

  //FUNCAO PARA O BOTAO EDITAR//

  botaoEditar.onclick = function () {
    console.log("houve um clique");
  };

  if (dica.linkVideo != "") {
    divBotaoVideo = document.createElement("div");
    divBotoesCards.appendChild(divBotaoVideo);
    botaoVideo = document.createElement("button");
    botaoVideo.innerHTML += `<i class="fa-solid fa-video"></i>`;
    divBotaoVideo.appendChild(botaoVideo);
    botaoVideo.style.padding = "5px";
    botaoVideo.style.borderRadius = "50%";
    botaoVideo.style.backgroundColor = "white";
    botaoVideo.onclick = function () {
      window.location.href = dica.video;
    };
  }
}

//FUNÇÃO PARA REMOVER ITENS DA TELA//

function removerDicasDaTela() {
  divCards.parentNode.removeChild(divCards);
}

//FUNÇÃO PARA CONTAGEM DAS CATEGORIAS + MOSTRAR NOS CARDS CONTADORES//

const contarCategorias = () => {
  const array = getLocalStorage();
  const qtdetotal = array.length;
  const qtdeFrontend = array.filter(
    (item) => item.categoria === "FrontEnd"
  ).length;
  const qtdeBackend = array.filter(
    (item) => item.categoria === "BackEnd"
  ).length;
  const qtdeFullstack = array.filter(
    (item) => item.categoria === "FullStack"
  ).length;
  const qtdeSoftskill = array.filter(
    (item) => item.categoria === "SoftSkill/Comportamental"
  ).length;

  const divContadorTotal = document.getElementById("contador-total");
  divContadorTotal.innerHTML = `${qtdetotal}`;

  const divContadorFrontend = document.getElementById("contador-frontend");
  divContadorFrontend.innerHTML = `${qtdeFrontend}`;

  const divContadorBackend = document.getElementById("contador-backend");
  divContadorBackend.innerHTML = `${qtdeBackend}`;

  const divContadorFullstack = document.getElementById("contador-fullstack");
  divContadorFullstack.innerHTML = `${qtdeFullstack}`;

  const divContadorSoftskill = document.getElementById("contador-softskill");
  divContadorSoftskill.innerHTML = `${qtdeSoftskill}`;
};
contarCategorias();

//FUNÇÃO A SER EXECUTADA NO ENVIO DO FORMULÁRIO//

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  salvarDica();
  criarCardsDicas();
  setLocalStorage();
  contarCategorias();

  window.alert("SUCESSO! \n Dica cadastrada na base do conhecimento.");

  formulario.reset();
});

//FUNÇÃO DE FILTRO DA BARRA DE PESQUISA - ainda não está funcionando//

// let pesquisar = document.getElementById("botao-pesquisar");
// pesquisar.onclick = function () {
//   let cards = getLocalStorage();
//   let itemDePesquisa = document.getElementById("input-pesquisa").value;

//   resultadoDaBusca = cards.find((item) => item.titulo == itemDePesquisa);

//   if (resultadoDaBusca != null) {
//     removerDicasDaTela();
//     criarCardsDicas(resultadoDaBusca);
//   }
// };

// let limparPesquisa = document.getElementById("botao-limpar-pesquisa");
// limparPesquisa.onclick = function () {
//   let cards = getLocalStorage();
//   criarCardsDicas(cards);
//   console.log("foi clicado");
// };
