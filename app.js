const container = document.querySelector(".container");
const listaAtividades = document.querySelector(".lista_atividades");
const input = document.querySelector(".input");
const erro = document.querySelector(".erro");
const botaoCadastra = document.querySelector(".botao_adc");
const botaoLimparTodos = document.querySelector(".botao_del_todos");
const paleta1 = document.getElementById("paleta1");
const paleta2 = document.getElementById("paleta2");
const paleta3 = document.getElementById("paleta3");

paleta1.addEventListener("click", () => definePaleta("seagreen"));
paleta2.addEventListener("click", () => definePaleta("slateblue"));
paleta3.addEventListener("click", () => definePaleta("tomato"));

botaoCadastra.addEventListener("click", () => cadastraAtividade());
botaoLimparTodos.addEventListener("click", () => limparTodasAtividades());

function definePaleta(cor) {
  container.style.background = cor;
  listaAtividades.style.background = cor;
}

function criaAtividade() {
  const atividade = document.createElement("div");
  atividade.classList.add("atividade");
  const nomeAtividade = document.createElement("p");
  atividade.textContent = input.value;
  const botaoLimparAtividade = document.createElement("button");
  botaoLimparAtividade.textContent = "Limpar";
  botaoLimparAtividade.classList.add("botao_del");
  listaAtividades.appendChild(atividade);
  atividade.appendChild(nomeAtividade);
  atividade.appendChild(botaoLimparAtividade);
  botaoLimparAtividade.addEventListener("click", () =>
    limparAtividade(atividade)
  );
}

function limparAtividade(atividade) {
  listaAtividades.removeChild(atividade);
}

function limparTodasAtividades() {
  while (listaAtividades.firstElementChild) {
    listaAtividades.removeChild(listaAtividades.firstElementChild);
  }
}

function cadastraAtividade() {
  if (input.value.length > 3) {
    erro.style.display = "none";
    criaAtividade();
  } else {
    erro.style.display = "grid";
    erro.innerHTML = `${input.value} não é uma atividade válida!`;
  }
  limpaInput();
}

function limpaInput() {
  input.value = "";
}

window.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    cadastraAtividade();
  }
});
