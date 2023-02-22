let nombreT = document.getElementById("recipient-name").value
let tareaT= document.getElementById("tipos").value
let descripcionT= document.getElementById('message-text').value

let listaT= document.getElementById('tareasTodas')

let nuevaTarea = `<li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">${nombreT} </div>
                        ${descripcionT}
                    </div>
                    <span class="badge bg-primary rounded-pill">14</span>
                </li> `

let addButton = document.getElementById('addData').addEventListener('click', function(){
        listaT.innerHTML += nuevaTarea
    
})


