
let masBtn = document.querySelector('.favButton')
let cerrarBtn = document.querySelector('.cerrarPop')
let cerrarBtn2 = document.getElementById('cerrar')

let inicio = document.querySelector('.Inicio')

let popup = document.querySelector('.popup')

//contenedor de todas las tareas
let listaT = document.getElementById("tareasT")

//datos de los input
let formulario = document.getElementById('form')
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
        
    let nuevaT = `<div >
                <div> </div>

                <div class="lista">
                    <h2>${nombreT.value} (${tipoT.value})</h2>
                    <p>${descripcionT.value}</p>
                </div>
                
                <div> </div>
                </div>`
                
        listaT.innerHTML += nuevaT
        

        popup.classList.remove('active')
        masBtn.disabled=false
        document.getElementById("form")[0].value ="";
})

