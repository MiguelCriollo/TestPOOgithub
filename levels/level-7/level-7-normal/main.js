import {text} from "./texto.js";



const historyText = document.getElementById("historyText"); //Parrafo de la historia
const nextButton=document.getElementById("button-next"); //Boton de Continuar
const deleteActualText=()=>{ //Borrar contenido
    historyText.textContent="";
};


let countForInitialText=0; //Contador para recorrer todos los textos
let decisionTaken=false;
let activateNextPage=false;

function inabilitateButton(button,boolean){
    button.disabled = boolean;
}
    
function printTextInto(textToPrint,printInto){
    let intervalo,cont=0;
    function printLoop(){
        printInto.textContent+=textToPrint[cont];
        cont++;
        textToPrint[cont]??(clearInterval(intervalo),inabilitateButton(nextButton,false),nextPage);
    }
    intervalo=setInterval(printLoop, 3);
}

function initialPrinting(){
    deleteActualText();
    printTextInto(text.initial[countForInitialText],historyText);
    countForInitialText++;
}

function nextPage(){
    let opacidad = 1;
    const intervalo = setInterval(() => {
        opacidad -= 0.05;
        document.body.style.opacity = opacidad;
        if (opacidad <= 0) {
            clearInterval(intervalo); // Detener el intervalo cuando la opacidad sea 0
        }
    }, 50);
    setTimeout(function() {
        window.location.href = "../../level-8/level-8-normal/eight.html";
    }, 3000);
}

/****BOTONES******/

function nextButtonClick(){

    inabilitateButton(nextButton,true);

    if(!decisionTaken){
        initialPrinting();
        if(countForInitialText >= text.initial.length){
            optionA_Button.style.display="block";
            optionB_Button.style.display="block";
            nextButton.style.display="none";
        }
    }else{
        deleteActualText();
        if(!activateNextPage){
            activateNextPage=true;
            printTextInto(text.finalText,historyText);
        }else{
            nextPage();
        }    
    }
}



function optionsButtonClick(event){
    deleteActualText();
    optionA_Button.style.display="none";
    optionB_Button.style.display="none";
    nextButton.style.display="block";

    printTextInto(text.initial,historyText);
}

nextButton.addEventListener("click",nextButtonClick);

/*
Para desbordamiento:
let contenedorParrafo=document.getElementById("historyContainer");
let alturaInicial=contenedorParrafo.offsetHeight;
if( contenedorParrafo.offsetHeight>alturaInicial){
            contenedorParrafo.style.height=alturaInicial+'px';
            historyText.textContent=historyText.textContent.slice(0,-1);
            console.log("latest: "+contenedorParrafo.offsetHeight);
            clearInterval(intervalo);
        }
*/