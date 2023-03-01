let masBtn = document.querySelector('.favButton')
let cerrarBtn = document.querySelector('.cerrarPop')

let popup = document.querySelector('.popup')

//datos del form
let nombreT = document.getElementById("nombreTarea");
let tipoT = document.getElementById("tipoTarea");
let descripcionT = document.getElementById("descripcionTarea");


let listaT = document.getElementById('contenedorLista')




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







//Botón agregar y función
let add = document.getElementById('addData')
add.addEventListener('click', () => {

    let nuevaT = `
            <h1>${nombreT.value} (${tipoT.value})</h1>`

                listaT.innerHTML += nuevaT;

})

