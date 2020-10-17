const btn=document.querySelector('#btn')


btn.addEventListener('click',agregarLista)

function agregarLista(e){
    const listaNoCompletado=document.querySelector('#NoCompletado')
    
    const input=document.querySelector('#input')

    if(!(input.value=='')){

        const info={
            descripcion:input.value,
            }

        const nuevaLista=document.createElement('li')
        nuevaLista.innerHTML=`<li class="TareaLista-item TareaLista-item--NoCompletado">${info.descripcion}
                <button class="TareaLista-Boton agregarACompletado" >agregar</button>
                <button class="TareaLista-Boton eliminarlista">eliminar</button>
            </li>
            `
        listaNoCompletado.appendChild(nuevaLista)
    }
}
/////////////////////Lista de NO Completado/////////////////////////////////////

let listaNoCompletado=document.querySelector('#NoCompletado')
listaNoCompletado.addEventListener('click',agregarCompletado)

function agregarCompletado(e){
    e.preventDefault();
    if(e.target.classList.contains('agregarACompletado')){
        let Agregarlista=e.target.parentElement;
       pasarValor(Agregarlista)
    }
    if(e.target.classList.contains('eliminarlista')){
        let listaAEliminar=e.target.parentElement;
        eliminarLista(listaAEliminar)
    }
}

function eliminarLista(lista){
    const padre=lista.parentElement;
    padre.remove()
}

function pasarValor(lista){
    const listaCompletado=document.querySelector('#Completado')

    console.log(lista);
    const info={
        descripcion:lista.firstChild.textContent,
        }
    console.log(info)
    const nuevaListaTareaCompletada=document.createElement('li');
    
    nuevaListaTareaCompletada.innerHTML=`<li class="TareaLista-item TareaLista-item--Completado">${info.descripcion}
                <button class="TareaLista-Boton eliminarlista">eliminar</button>
            </li>
            `
    listaCompletado.appendChild(nuevaListaTareaCompletada)  
    lista.remove()          
}  
/////////////////////Lista de Completado/////////////////////////////////////
let listaCompletado=document.querySelector('#Completado')

listaCompletado.addEventListener('click',EliminarElemento)

function EliminarElemento(e){
    e.preventDefault();
    if(e.target.classList.contains('eliminarlista')){
        let listaAEliminar=e.target.parentElement;
        eliminarLista(listaAEliminar)
    }
}
