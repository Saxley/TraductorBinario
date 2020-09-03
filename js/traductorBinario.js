//VARIABLES
var  into, txt_box, aplicar, traduccion, DN, imgT,inverso,si;
DN = false;
si = true;
//Busqueda x id
txt_box = document.getElementById("txt_box");
aplicar = document.getElementById("aplicar");
traduccion = document.getElementById("traduccion");
imgT = document.getElementById("tema");
inverso=document.getElementById("cambio");
//Listeners
aplicar.addEventListener("click", election);
inverso.addEventListener("click", invertir);
//DICCIONARIO
//Tema
var link_src = ["assets/Noche.png", "assets/Dia.png"];
var color = ["#000", "#fff"];

//FUNCIONES
function invertir(){
  if(si){
    si=false;
    txt_box.placeholder="Binario a ABC";
  }else{
    si=true;
    txt_box.placeholder="ABC a Binario";
  }
}
function election(){
  if(si){
    traducir();
  }else if(!si){
    binario();
  }
}
//BOTON TRADUCIR
function traducir() {
  //ENTRADA Y CAPTURA DE DATOS
  var text_final = "";
  into = txt_box.value;
  //transforma el valor a un array (lo que tomara como referencia, tamañano del array)
  into = into.split("");
  //TRADUCTOR
  for (var i in into) {
    into[i] = into[i].charCodeAt();
    into[i] = into[i].toString(2);
    while (into[i].length < 8) {
      into[i] = "0"+into[i];
    }
    text_final = text_final+" "+into[i];
  }
  traduccion.innerHTML = text_final;
  txt_box.value="";
}
function binario(){
 //ENTRADA Y CAPTURA DE DATOS
  var text_final = "";
  into = txt_box.value;
  //transforma el valor a un array (lo que tomara como referencia, tamañano del array)
  into = into.split(" ");
  
  for(var i in into){
    into[i]=parseInt(into[i],2);
    into[i]=into[i].toString(10);
    into[i]=String.fromCharCode(into[i]);
    text_final = text_final+into[i];
  }
 traduccion.innerHTML = text_final;
 txt_box.value="";
}
//BOTON TEMA
function tema() {
  if (DN) {
    imgT.src = link_src[1];
    document.body.style.backgroundColor = color[1];
    document.body.style.color = color[0];
    aplicar.style.color = color[0];
    txt_box.style.color = color[0];
    DN = false;
  } else {
    imgT.src = link_src[0];
    document.body.style.backgroundColor = color[0];
    document.body.style.color = color[1];
    aplicar.style.color = color[1];
    aplicar.style.backgroundColor = "transparent";
    txt_box.style.color = color[1];
    DN = true;
  }
}