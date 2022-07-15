let urgencia = {
    urgente: "ponto-laranja",
    prioritario: "ponto-amarelo",
    normal: "ponto-verde"
}

function renderizarTarefa(valorTarefa) {
    document.querySelectorAll("ul").forEach(element => { element.innerHTML = "" });

    for(let i = 0; i < valorTarefa.length; i++) {

        let liTarefa = criarCardTarefa(valorTarefa[i])
        let ul = ""
        
        if(valorTarefa[i].tipo == "urgente") {
            ul = document.querySelector(".urgente")
            ul.appendChild(liTarefa)
        } else if(valorTarefa[i].tipo == "prioritario") {
            ul = document.querySelector(".prioritario")
            ul.appendChild(liTarefa)
        } else if(valorTarefa[i].tipo == "normal") {
            ul = document.querySelector(".normal")
            ul.appendChild(liTarefa)
        }
    }
}

renderizarTarefa(tarefas)

function criarCardTarefa(tarefaAtual) {

    let li = document.createElement("li")
    let divNome = document.createElement("div")
    let divPonto = document.createElement("div")
    let pNome = document.createElement("p")
    let button = document.createElement("button")
    let img = document.createElement("img")

    divNome.classList.add("tarefa-nome")
    divPonto.classList.add(urgencia[tarefaAtual.tipo])
    pNome.innerText = tarefaAtual.titulo
    img.src = "src/img/Lixeira.png"
    img.alt = "Icone Lixeira"
    
    divNome.appendChild(divPonto)
    divNome.appendChild(pNome)
    button.appendChild(img)
    li.appendChild(divNome)
    li.appendChild(button)
    
    return li
}


// Botão de Excluir Tarefa
let sectionProdutos = document.querySelector(".tarefas")
sectionProdutos.addEventListener("click", removerItem)

function removerItem(event){
    if(event.target.tagName == "IMG") {
        let ul = event.target.closest("ul")
        ul.removeChild(event.target.closest("li"))
    }
}


// Bloco de Inserir Tarefa
let formInserirTarefa = document.querySelector("main form")
formInserirTarefa.addEventListener("click", adicionarItem)

function adicionarItem(event) {
    let input = formInserirTarefa.children[0].children[0]
    let botao = formInserirTarefa.children[0].children[1]
    
    // Evitar que a página recarregue com o clique no Botão(Formulário)
    event.preventDefault()

    if(event.target.tagName == "BUTTON" && input.value !== "" && botao.value !== "") {
        tarefas.push({
            titulo: input.value,
            tipo:   botao.value
        })
        
        input.value = ""
        botao.value = ""
        renderizarTarefa(tarefas)
    }
}


// Campo de Pesquisa
let divPesquisa = document.querySelector(".barra-pesquisa")
divPesquisa.addEventListener("click", filtrarPesquisa)
divPesquisa.addEventListener("keyup", filtrarPesquisa)

function filtrarPesquisa(event) {
    let input = divPesquisa.firstElementChild
    let resultadoBusca = []

    resultadoBusca = tarefas.filter((element) => {
        let tarefa = element.titulo.toLowerCase()
        return tarefa.includes(input.value.toLowerCase())
    })

    if(event.target.tagName == "IMG"){
        input.value = ""
    }

    renderizarTarefa(resultadoBusca)
}
