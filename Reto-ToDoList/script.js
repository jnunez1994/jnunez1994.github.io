//datos del modal
let nombreT = document.getElementById("nombreTarea");
let tipoT = document.getElementById("tipoTarea");
let descripcionT = document.getElementById("descripcionTarea");
//let prioridadT = ;

let listaT = document.getElementById("contenedorLista");

//Botón agregar y función
let add = document.getElementById("addData");

add.addEventListener("click", () => {

    let nuevaT = `<div class="lista">
            <h1>${nombreT.value} (${tipoT.value})</h1>
            
            <p>${descripcionT.value}</p>
                <div>`

                listaT.innerHTML += nuevaT;

})