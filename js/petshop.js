// ==============================
// FUNÇÃO PRINCIPAL DO SISTEMA
// ==============================
// Essa função é chamada quando o usuário clica no botão "Cadastrar"
function cadastrarPet() {

  // ==============================
  // 1) PEGAR DADOS DIGITADOS
  // ==============================

  // Pega o texto digitado no campo com id="nome"
  let nomePet = document.getElementById("nome").value;

  // Pega o texto digitado no campo com id="especie"
  let especiePet = document.getElementById("especie").value;


  // ==============================
  // 2) DESCOBRIR O SEXO DO PET
  // ==============================

  // Procura qual radio (opção) do grupo "sexo" está marcado
  let opcaoSexo = document.querySelector('input[name="sexo"]:checked');

  // Define um valor inicial, caso nada esteja marcado
  let sexoPet = "Não informado";

  // Se existir uma opção marcada...
  if (opcaoSexo) {
    // ... então pega o valor dessa opção
    sexoPet = opcaoSexo.value;
  }


  // ==============================
  // 3) PEGAR OS SERVIÇOS MARCADOS
  // ==============================

  // Pega todos os checkboxes com a classe "serv" que estão marcados
  let servicosSelecionados = document.querySelectorAll(".serv:checked");

  // Cria uma variável vazia para guardar os serviços em forma de texto
  let listaServicos = "";

  // Laço FOR: passa por cada checkbox marcado
  // cont começa em 0 e vai até o tamanho da lista de serviços
  for (let cont = 0; cont < servicosSelecionados.length; cont++) {

    // Em cada volta do laço, pega o valor do serviço
    let nomeServico = servicosSelecionados[cont].value;

    // Junta (concatena) esse valor na variável listaServicos
    listaServicos += nomeServico + " ";
  }


  // ==============================
  // 4) SALVAR OS DADOS PARA A PRÓXIMA PÁGINA
  // ==============================

  // Guarda os dados no localStorage (memória do navegador)
  localStorage.setItem("nomePet", nomePet);
  localStorage.setItem("especiePet", especiePet);
  localStorage.setItem("sexoPet", sexoPet);
  localStorage.setItem("listaServicos", listaServicos);


  // ==============================
  // 5) ABRIR A PÁGINA DO COMPROVANTE
  // ==============================

  // Redireciona para outra página
  window.location.href = "comprovante.html";
}

// ==============================
// FUNÇÃO PARA O CARROSSEL
// ==============================

const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel(){
  idx++;
  if(idx > img.length - 1){
    idx = 0;
  }
  imgs.style.transform = `translateX(${-idx * 30}px)`;
}

setInterval(carrossel, 5000);
