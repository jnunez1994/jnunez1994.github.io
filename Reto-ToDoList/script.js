
let masBtn = document.querySelector('.favButton')
let cerrarBtn = document.querySelector('.cerrarPop')
let cerrarBtn2 = document.getElementById('cerrar')

let inicio = document.querySelector('.Inicio')

let popup = document.querySelector('.popup')

//contenedor de todas las tareas
let listaT = document.getElementById("tareasT")

//datos del form
let formTareas = document.querySelector('#datosTareas')

let nombreT = document.getElementById("nombreTarea");
let tipoT = document.getElementById("tipoTarea");
let descripcionT = document.getElementById("descripcionTarea");






//btn + para abrir popup
masBtn.addEventListener('click', () => {
    popup.classList.add('active')
    masBtn.disabled=true
})

//btn X para cerrar popup
cerrarBtn.addEventListener('click',() => {
    popup.classList.remove('active')
    masBtn.disabled=false
})

//btn cerrar para cerrar popup
cerrarBtn2.addEventListener('click',() => {
    popup.classList.remove('active')
    masBtn.disabled=false
})


//Botón agregar y función

let addButton = document.getElementById('addData').addEventListener('click', function(){
        
    let nuevaT = `<div class="lista">
                <h5>${nombreT.value}</h5>
                </div>`
                
        listaT.innerHTML += nuevaT

        popup.classList.remove('active')
        masBtn.disabled=false
})

