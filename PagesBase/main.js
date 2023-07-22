import {text} from "./texto.js";

let historyText = document.getElementById("historyText"); //Parrafo de la historia
let nextButton=document.getElementById("button-next"); //Boton de Continuar

let contenedorParrafo=document.getElementById("historyContainer");
let alturaInicial=contenedorParrafo.offsetHeight;

console.log(text);

nextButton.addEventListener("click",activatePrinting);
    
function activatePrinting(){
    let contadorsito=0;

    historyText.textContent="";
    let cont=0;
    let intervalo;
    let textToPrint=text.initial[contadorsito];
    
    function test(){
        historyText.textContent+=textToPrint[cont];
        cont++;
        textToPrint[cont]??clearInterval(intervalo);
    }
    intervalo=setInterval(test, 30);
    contadorsito++;
}
/*
function activatePrinting(){
        historyText.textContent="";
        let cont=0;
        let intervalo;
        let textToPrint="SAMPLE TEXT  ".repeat(200);
        
        function test(){
            historyText.textContent+=textToPrint[cont];
            cont++;
            textToPrint[cont]??clearInterval(intervalo);
            console.log(contenedorParrafo.offsetHeight);
            if( contenedorParrafo.offsetHeight>alturaInicial){
                contenedorParrafo.style.height=alturaInicial+'px';
                historyText.textContent=historyText.textContent.slice(0,-1);
                console.log("latest: "+contenedorParrafo.offsetHeight);
                clearInterval(intervalo);
            }
        }
        intervalo=setInterval(test, 1);
}
/*
/****BOTONES******/



  
