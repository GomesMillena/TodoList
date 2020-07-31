//objeto pai de todos---Executa o evento DomContentLoaded queando ele for carregado

window.addEventListener("DOMContentLoaded", function () {
  const btnadd = document.querySelector("#todoSubmit");
  btnadd.addEventListener("click", addTarefa);
  const btnMark = document.querySelector("#todoMarcarTodos");
  btnMark.addEventListener("click", markAll);
  const btnClean = document.querySelector("#todoRemoverTodos");
  btnClean.addEventListener("click", cleanAll);
  let dragging = null;
});

function addTarefa(e) {
  e.preventDefault();


  const task = document.querySelector("#todoInput").value.trim();

  //coloquei a condição if para que o espaço em branco não seja válido
  if (!task) {
    alert("Please Adicione uma Tarefa");
  } else {
    //Criando o elemento p / add o valor do input do usuario dentro do elemento
    //e addTarefa addEventListener para funcao de completar a tarefa;
    // const item = document.createElement('p');
    const item = document.createElement("p");
    item.classList.add("paragrafo");
    item.innerText = task;
    item.addEventListener("click", markList);

    // Criando o elemento span p add o valor x e também adicionar
    //addEventListener  para deletar a tarefa ao clicar;
    const btnChek = document.createElement("span");
    btnChek.innerText = "X";
    btnChek.addEventListener("click", deleteList);

    //Elemento pai do elemento p; criado p/ ser as tarefas incluidas
    //pelo usuario no navegador;
    const li = document.createElement("li");
    li.setAttribute('draggable', true);
 //Drag and Drop
     
 li.addEventListener('dragstart', function(e){
    dragging = e.target.closest('li');
})

 li.addEventListener('dragover', function(e){
    e.preventDefault();
    const node = e.target.closest('li');
    this.style.opacity = "1"
    this.style.cursor = "move"
    this.insertBefore(dragging, node);
})

li.addEventListener('dragend', function(e){
    dragging = null;
})

    li.appendChild(item);
    li.appendChild(btnChek);

    const lista = document.querySelector("#todoLista");
    lista.appendChild(li);

    const form = document.querySelector("form");
    form.reset();

  }
}

//criando função para dar checked e oncheked
//this representa quem ta chamando a função
function markList() {
  this.classList.toggle("checked");
}

//criando função para para deletar tarefa a tarefa através do btnCheked
function deleteList() {
  //Parente Node é uma propriedade que pega o elemento pai do elemento atual,
  this.parentNode.remove();
}

// Criando function para marcar todas as tarefas
function markAll() {
  // criando variável itens para pegar todos os elementos p dentro de li
  const itens = document.querySelectorAll("li p");
  console.log(itens);

  //Criando um for para conseguir agrupar os li;
  //nessa cons p é chamado o "p"(tarefas);
  //objeto é um conjunto de parametros(nome e valor) e métodos(function)
  for (let i = 0; i < itens.length; i++) {
    //criandoo um novo método p/ chamar a função markList
    itens[i].markList = markList;
    //aqui estamos executando  a função
    itens[i].markList();
  }
}

function cleanAll() {
  //criando variável clanItens para limpar todas as li
  const cleanItens = document.querySelectorAll("li p");
  console.log(cleanItens);

  //criando um for para compor dentro deste bloco a exclusão dos elementos Li
  //através do button todoRemoverTodos
  for (let i = 0; i < cleanItens.length; i++) {
    // criandoo um novo método p/ chamar a função deletList
    cleanItens[i].deleteList = deleteList;
    // aqui vamos executar a função ao qual foi chamada
    cleanItens[i].deleteList();
  }
}






 
