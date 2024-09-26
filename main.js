let inputText = document.getElementById("input-tarea")
let btnAdd = document.getElementById("add")
let btnDel = document.getElementById("delete")
let lista = document.getElementById("lista")

function mostrarTareasGuardadas() {
    let tareasGuardados = JSON.parse(localStorage.getItem('textos')) || []

    lista.innerHTML = ''

    // console.log(tareasGuardados)

    tareasGuardados.forEach(function(texto) {
        let li = document.createElement('li')
        li.textContent = texto
        lista.appendChild(li)
    })
}

mostrarTareasGuardadas()

function agregar() {
    let tareaAgregada = inputText.value

    if (tareaAgregada) {
        let tareasGuardados = JSON.parse(localStorage.getItem('textos')) || []

        tareasGuardados.push(tareaAgregada)

        localStorage.setItem('textos', JSON.stringify(tareasGuardados))

        mostrarTareasGuardadas()

        inputText.value = ""
    }
}

function borrar() {
    
}

document.getElementById("add").addEventListener("click", agregar)
document.getElementById("delete").addEventListener("click", borrar)