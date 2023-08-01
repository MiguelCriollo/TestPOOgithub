import {text} from "./text.js";

const historyText = document.getElementById("historyText"); //Parrafo de la historia
const nextButton=document.getElementById("button-next"); //Boton de Continuar

const deleteActualText=()=>{historyText.textContent="";};

const optionA_Button=document.getElementById("optionA");
const optionB_Button=document.getElementById("optionB");

optionA_Button.textContent=text.D1.text;
optionB_Button.textContent=text.D2.text;

let countForInitialText=1; //Contador para recorrer todos los textos
let decisionTaken=false;
let activateNextPage=false;
let interval;

let statesOfPrinting={
    initial:false,
    decision:false,
    final:false
}

printTextInto(text.initial[0],historyText,1);

function inabilitateButton(button,boolean){
    button.disabled = boolean;
}
    
function printTextInto(textToPrint,printInto,msInterval){
    let counterTextList=0;

    interval=setInterval(()=>{
        printInto.textContent+=textToPrint[counterTextList];
        counterTextList++;
        textToPrint[counterTextList]??(clearInterval(interval));
    }, msInterval);
}

function printAllText(){
    deleteActualText();

}
function initialPrinting(){
    deleteActualText();
    printTextInto(text.initial[countForInitialText],historyText,1);
    countForInitialText++;
}

function nextPage(){
    let opacidad = 1;
    const interval = setInterval(() => {
        opacidad -= 0.05;
        document.body.style.opacity = opacidad;
        if (opacidad <= 0) {
            clearInterval(interval); // Detener el interval cuando la opacidad sea 0
        }
    }, 50);

    
    let newList=[true,false,false]
    updatePlayerObject(newList);
    console.log(getPlayerObject());
    setTimeout(function() {
        window.location.href = "../level-1/first.html";
    }, 3000);
      
}


function nextButtonClick(){

    clearInterval(interval);

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
            printTextInto(text.finalText,historyText,3);
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

    if(event.target.id==="optionA"){
        printTextInto(text.D1.postD,historyText);
        decisionTaken=true;
        playerObjects=[true,false,false]
    }else{
        printTextInto(text.D2.postD,historyText);
        //COLOCAR AQUI PANTALLA MUERTE
    }
}

nextButton.addEventListener("click",nextButtonClick);
optionA_Button.addEventListener("click",optionsButtonClick);
optionB_Button.addEventListener("click",optionsButtonClick);
  
/*
Para desbordamiento:
let contenedorParrafo=document.getElementById("historyContainer");
let alturaInicial=contenedorParrafo.offsetHeight;
if( contenedorParrafo.offsetHeight>alturaInicial){
            contenedorParrafo.style.height=alturaInicial+'px';
            historyText.textContent=historyText.textContent.slice(0,-1);
            console.log("latest: "+contenedorParrafo.offsetHeight);
            clearInterval(interval);
        }
*/