const listaInicial = [
  {
    titulo: "Grid vs Flex-Box",
    linguagem: "CSS",
    categoria: "FrontEnd",
    descricao:
      "A diferença crucial entre flexbox e grid, além do primeiro ser unidimensional e o outro ser bi-dimensional, é que o controle do layout no grid vem do container e no flexbox vem dos elementos.",
    video: "https://www.youtube.com/watch?v=x-4z_u8LcGc",
  }
];

//SETAR E COLETAR ITEM DO LOCALSTORAGE

const getLocalStorage = () => JSON.parse(localStorage.getItem("db_dicas"));
const dbDicas = getLocalStorage();

if (dbDicas == null) {
  localStorage.setItem("db_dicas", JSON.stringify(listaInicial));
}
if (listaInicial.length > dbDicas.length) {
  localStorage.setItem("db_dicas", JSON.stringify(listaInicial));
} else {
  localStorage.setItem("db_dicas", JSON.stringify(dbDicas));
}

//FUNÇÃO A SER EXECUTADA NO ENVIO DO FORMULÁRIO

const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function (event) {
  event.preventDefault();

    salvarDica();
    contarCategorias();

  window.alert("SUCESSO! \n Dica cadastrada na base do conhecimento.");

  formulario.reset();
});

//SALVAR OS DADOS DA DICA ENVIADA PELO FORMULARIO

const salvarDica = () => {
  (titulo = document.querySelector("#titulo").value),
    (linguagem = document.querySelector("#linguagem").value),
    (categoria = document.querySelector("#categoria").value),
    (descricao = document.querySelector("#descricao").value),
    (video = document.querySelector("#link-video").value);

  dica = {
    titulo: titulo,
    linguagem: linguagem,
    categoria: categoria,
    descricao: descricao,
    video: video,
  };

  dbDicas.push(dica);
  localStorage.setItem("db_dicas", JSON.stringify(dbDicas));

  carregarCards(dbDicas);
};

//FUNÇÃO CARREGAR ITENS NA TELA

const divContainerCards = document.getElementById("container-card-dica");

function carregarCards(array) {
  divContainerCards.innerHTML = "";

  var novoCard;

  array.forEach((dica, index) => {
    if (dica.video != "") {
      novoCard = `<div id="div-cards">
    <h1 id="titulo-card">${dica.titulo}</h1>
    <div id="conteudo-card">
    <p><strong>Linguagem/Skill:</strong> ${dica.linguagem}</p>
    <p><strong>Categoria:</strong> ${dica.categoria}</p>
    <p>${dica.descricao}</p>
    <div id="botoes-card-video">
    <button id="excluir-card" class="botao-card" onclick="excluir(${index})"><i class="fa-solid fa-trash-can"></i></button>
    <button id="editar-card" class="botao-card" onclick="editar(${index})"><i class="fa-solid fa-pen-to-square"></i></button>
    <button id="video-card" class="botao-card" onclick="mostrarVideo(${index})"><i class="fa-solid fa-video"></i></button>
    </div>
    </div>
    </div>
    `;
    } else {
      novoCard = `<div id="div-cards">
    <h1 id="titulo-card">${dica.titulo}</h1>
    <div id="conteudo-card">
    <p><strong>Linguagem/Skill:</strong> ${dica.linguagem}</p>
    <p><strong>Categoria:</strong> ${dica.categoria}</p>
    <p>${dica.descricao}</p> 
    <div id="botoes-card">
    <button id="excluir-card" class="botao-card" onclick="excluir(${index})"><i class="fa-solid fa-trash-can"></i></button>
    <button id="editar-card" class="botao-card" onclick="editar(${index})"><i class="fa-solid fa-pen-to-square"></i></button>
    </div>
    </div>
    </div>
    `;
    }
    divContainerCards.innerHTML += novoCard;
  });
}

//CHAMAR FUNÇÃO PARA CARREGAR ITENS NA TELA
carregarCards(dbDicas);

//FUNÇÃO EXCLUSÃO

function excluir(index) {
  dbDicas.forEach((dica, indexDicas) => {
    if (indexDicas == index) {
      if (
        confirm("DELETANDO!\nVocê tem certeza que deseja deletar esta dica?") ==
        true
      ) {
        dbDicas.splice(index, 1);
      }
    }
  });

  divContainerCards.innerHTML = "";
  localStorage.setItem("db_dicas", JSON.stringify(dbDicas));
  carregarCards(dbDicas);
  contarCategorias();
}

//FUNÇÃO EDIÇÃO

function editar(index) {
  dbDicas.forEach((dica, indexDicas) => {
    if (indexDicas == index) {
      alert(
        "EDIÇÃO!\nAs informações da dica selecionada para edição foram enviadas para o formulário lateral.\nRealize as devidas edições e clique em Salvar para finalizar."
      );
      document.querySelector("#titulo").value = dica.titulo;
      document.querySelector("#linguagem").value = dica.linguagem;
      document.querySelector("#categoria").value = dica.categoria;
      document.querySelector("#descricao").value = dica.descricao;
      document.querySelector("#link-video").value = dica.video;

      dbDicas.splice(index, 1);
    };
  });
};

//FUNÇÃO MOSTRAR VIDEO

function mostrarVideo(index) {
  array = getLocalStorage();
  array.forEach((dica, indexDicas) => {
    if (indexDicas == index) {
      // url = window.location.href = dica.video;
      winOpen = window.open((window.location.href = dica.video), "_blank");
    };
  });
};

//CONTAGEM DAS CATEGORIAS

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
    (item) => item.categoria === "SoftSkill"
  ).length;

  //MOSTRAR NOS CARDS CONTADORES

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

//FUNÇÃO PARA FILTRAR CARDS DICAS POR CATEGORIA CLICANDO NOS CARDS CONTADORES

const botaoTotal = document.getElementById("botao-contador-total");
const botaoFrontend = document.getElementById("botao-contador-frontend");
const botaoBackend = document.getElementById("botao-contador-backend");
const botaoFullstack = document.getElementById("botao-contador-fullstack");
const botaoSoftskill = document.getElementById("botao-contador-softskill");

var localizaCategoria;

botaoTotal.addEventListener("click", function () {
  const dbDicas = getLocalStorage();
  carregarCards(dbDicas);
});

botaoFrontend.addEventListener("click", function () {
  const dbDicas = getLocalStorage();
  localizaCategoria = dbDicas.filter((dica) => dica.categoria === "FrontEnd");
  if (localizaCategoria.length >= 1) {
    carregarCards(localizaCategoria);
  } else {
    alert("Ainda não há nenhuma dica de FrontEnd cadastrada.");
  }
});

botaoBackend.addEventListener("click", function () {
  const dbDicas = getLocalStorage();
  localizaCategoria = dbDicas.filter((dica) => dica.categoria === "BackEnd");
  if (localizaCategoria.length >= 1) {
    carregarCards(localizaCategoria);
  } else {
    alert("Ainda não há nenhuma dica de BackEnd cadastrada.");
  }
});

botaoFullstack.addEventListener("click", function () {
  const dbDicas = getLocalStorage();
  localizaCategoria = dbDicas.filter((dica) => dica.categoria === "FullStack");
  if (localizaCategoria >= 1) {
    carregarCards(localizaCategoria);
  } else {
    alert("Ainda não há nenhuma dica de FullStack cadastrada.");
  }
});

botaoSoftskill.addEventListener("click", function () {
  const dbDicas = getLocalStorage();
  localizaCategoria = dbDicas.filter((dica) => dica.categoria === "SoftSkill");
  if (localizaCategoria >= 1) {
    carregarCards(localizaCategoria);
  } else {
    alert("Ainda não há nenhuma dica de SoftSkill cadastrada.");
  }
});

//FUNÇÃO DE FILTRO DA BARRA DE PESQUISA

const pesquisar = document.getElementById("botao-pesquisar");
pesquisar.onclick = function (array) {
  itemDePesquisa = document.getElementById("input-pesquisa").value;

  resultadoDaBusca = dbDicas.find((dica) => dica.titulo === itemDePesquisa);

  if (resultadoDaBusca != null) {
    carregarCards([resultadoDaBusca]);
    console.log(resultadoDaBusca);
  } else {
    window.alert("Não foi encontrado nenhum resultado com este título.");
  };
};

limparPesquisa = document.getElementById("botao-limpar-pesquisa");
limparPesquisa.onclick = function () {
  itemDePesquisa.value = '';
  carregarCards(dbDicas);
};
