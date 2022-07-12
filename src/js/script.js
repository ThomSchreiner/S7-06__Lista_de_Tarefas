let urgencia = {
    urgente: "ponto-laranja",
    prioritario: "ponto-amarelo",
    normal: "ponto-verde"
}

function criarTarefa(valorTarefa) {

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

criarTarefa(tarefas)

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


let sectionProdutos = document.querySelector(".tarefas")
sectionProdutos.addEventListener("click", removerItem)

function removerItem(event){
    if(event.target.tagName == "IMG") {
        let ul = event.target.closest("ul")
        ul.removeChild(event.target.closest("li"))
    }
}
