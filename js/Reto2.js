let calculadora=document.querySelector('#calculadora')
calculadora.addEventListener('click',obtenerValor)

let resultado=document.querySelector('#Resultado')
let operActual='';
let operAnterior='';
let operacion=undefined;


function obtenerValor(e){
    e.preventDefault();
   
    if(e.target.classList.contains('Borrar')){
        limpiarpantalla();
        actualizarDisplay();
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
    calcular()
    actualizarDisplay()
   }
  
}
function seleccionarOperacion(signoOperacion){
    operacion=signoOperacion;
    if(operActual===""){
        return
   }else{
       calcular()
   }
      operAnterior=operActual;
   operActual='';
}
function calcular(){
    let calculo;
    let anterior=parseFloat(operAnterior);
    let actual=parseFloat(operActual);

    if(isNaN(anterior)||isNaN(actual)){
        return
    }
    switch(operacion){
        case "+":calculo = anterior+actual;
        break;
        case "-":calculo = anterior-actual;
        break;
        case "*":calculo = anterior*actual;
        break;
        case "/":calculo = anterior/actual;
        break;
        default: return;
    }
    operActual=calculo
    operacion=undefined
    operAnterior=''
}

function agregarNumero(num){
    operActual=operActual.toString()+num.toString();
    actualizarDisplay();
}   
function limpiarpantalla(){
    operActual='';
    operAnterior='';
    operacion=undefined;

}
function actualizarDisplay(){    
    resultado.value=operActual
}

