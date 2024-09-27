let inputText = document.getElementById("input-tarea")
let btnAdd = document.getElementById("add")
let btnDel = document.getElementById("delete")
let lista = document.getElementById("lista")

function mostrarTareasGuardadas() {

    let tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || []

    
    lista.innerHTML = ''

    
    tareasGuardadas.forEach(function(tarea) {
        let li = document.createElement('li')
        li.textContent = tarea.texto

        
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox'
        checkbox.checked = tarea.completada
        checkbox.addEventListener('change', function() {
            tarea.completada = checkbox.checked
            guardarTareas(tareasGuardadas)
        })

        
        li.prepend(checkbox)

        
        lista.appendChild(li)
    })
}

function guardarTareas(tareas) {
    localStorage.setItem('tareas', JSON.stringify(tareas))
}

function agregar() {
    let tareaAgregada = inputText.value

    if (tareaAgregada) {
        
        let tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || []

        
        let nuevaTarea = {
            texto: tareaAgregada,
            completada: false
        }

        
        tareasGuardadas.push(nuevaTarea)

        
        guardarTareas(tareasGuardadas)

        
        mostrarTareasGuardadas()

        
        inputText.value = ""
    }
}

function borrar() {
    
    let tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || []

    
    let tareasRestantes = tareasGuardadas.filter(function(tarea) {
        return !tarea.completada
    })

    
    guardarTareas(tareasRestantes)

    
    mostrarTareasGuardadas()
}

document.getElementById("add").addEventListener("click", agregar)
document.getElementById("delete").addEventListener("click", borrar)


mostrarTareasGuardadas()
