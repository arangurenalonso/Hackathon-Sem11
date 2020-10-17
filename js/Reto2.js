let calculadora=document.querySelector('#calculadora')
calculadora.addEventListener('click',obtenerValor)

let resultado=document.querySelector('#Resultado')
let operActual='';
let operAnterior='';
let operacion=undefined;


function obtenerValor(e){
    e.preventDefault();
    console.log(e.target.innerText=="+")
   
    if(e.target.classList.contains('Borrar')){
        limpiarpantalla();
   }
   if(e.target.classList.contains('numero')){
        Resultado= e.target.innerText
        agregarNumero(Resultado)
   }
   if(e.target.classList.contains('Operador')){
        Resultado2= e.target.innerText
        seleccionarOperacion(Resultado2)
   }  
   if(e.target.classList.contains('igual')){
    Resultado3= e.target.innerText
    seleccionoigual(Resultado3)
   }
  
}
function seleccionarOperacion(op){
    if(operActual===""){
        return
   }else{
    console.log("seleccionarOperacion")
    console.log(op=="+")
       calcular(op)
   }
   operacion=op.toString();
   operAnterior=operActual;
   operActual='';
}
function calcular(resultado){
    let calculo;
    let anterior=parseFloat(operAnterior);
    console.log(anterior)
    let actual=parseFloat(operActual);
    console.log(actual)

    if(isNaN(anterior)||isNaN(actual)){
        return
    }
    switch(resultado){
        case "+":calculo = anterior+actual;
        break;
        case "-":calculo = anterior-actual;
        break;
        case "*":calculo = anterior*actual;
        break;
        case "/":calculo = anterior/actual;
        break;
        default: calculo="hubo un error"
    }
    operActual=calculo
    operacion=undefined;
    operAnterior=''
}

function agregarNumero(num){
    operActual=operActual.toString()+num.toString();
    actualizarDisplay();
}   
function actualizarDisplay(){
    resultado.value=operActual
}
function limpiarpantalla(){
    resultado.value=""
    operActual='';
    operAnterior='';
    operacion=undefined;
}
function seleccionoigual(igual){
    actualizarDisplay()
}

limpiarpantalla()