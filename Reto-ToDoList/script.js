let nombreT = document.getElementById("recipient-name")
let tareaT= document.getElementById("tipos")
let descripcionT= document.getElementById('message-text')

let listaT= document.getElementById('tareasTodas')



let addButton = document.getElementById('addData').addEventListener('click', function(){
    let nuevaTarea = `<li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
        <div class="fw-bold">${nombreT.value} </div>
        ${descripcionT.value}
    </div>
    <span class="badge bg-primary rounded-pill">14</span>
</li> `
    
    
    listaT.innerHTML += nuevaTarea
    
})


