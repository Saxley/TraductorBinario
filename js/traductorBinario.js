//VARIABLES
var conver, into, txt_box, aplicar, traduccion,DN,imgT;
DN=false;
//Busqueda x id
txt_box=document.getElementById("txt_box");
aplicar=document.getElementById("aplicar");
traduccion=document.getElementById("traduccion");
imgT=document.getElementById("tema");
//Listeners
aplicar.addEventListener("click", traducir);

//DICCIONARIO

//Traduccion
var alfabeto = [" ","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var num = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
//Tema
var link_src=["assets/Noche.png","assets/Dia.png"];
var color=["#000","#fff"];

//FUNCIONES

//BOTON TRADUCIR
function traducir(){
//ENTRADA Y CAPTURA DE DATOS
var text_final="";
into= txt_box.value;
into = into.toUpperCase();
into = into.split("");

//TRADUCTOR
for (i in into){
  for (i$ in alfabeto) {
    if (alfabeto[i$] == into[i]) {
      into[i] = num[i$];
    }
  }
  into[i] = into[i].toString(2);
  for (conver = 0; into[i].length < 4; conver++) {
    into[i] = "0"+into[i];
  }
  conver = into[i].length;
  switch (conver) {
    case 4:
      into[i] = "0100"+into[i];
      break;
    case 5:
      into[i] = "010"+into[i];
      break;
  }
  text_final=text_final+" "+into[i];
}
traduccion.innerHTML=text_final;
}


//BOTON TEMA
function tema(){
  if(DN){
    imgT.src=link_src[1];
    document.body.style.backgroundColor=color[1];
    document.body.style.color=color[0];
    aplicar.style.color=color[0];
    txt_box.style.color=color[0];
    DN=false;
  }else {
    imgT.src=link_src[0];
    document.body.style.backgroundColor=color[0];
    document.body.style.color=color[1];
    aplicar.style.color=color[1];
    aplicar.style.backgroundColor="transparent";
    txt_box.style.color=color[1];
    DN=true;
  }
}
