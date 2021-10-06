var palabra=document.getElementById("palabra");
var letra=document.getElementById("letra");
var resultado=document.getElementById("resultado");
var cajaFallos=document.getElementById("cajaFallos");
var palabraA;
var guiones;

/*Modo de juego: primero tecleas la palabra, después das al tabulador para poder teclear la letra en su input (se borrará el contenido del 
input después de teclear cada letra). Los aciertos se mostrarán en el input de resultado y los fallos en el propio HTML con etiquetas <p>*/

//Evento en el que al perder el foco del input palabra, se forman los guiones
document.addEventListener("blur", crearGuiones, true);
letra.addEventListener("keyup", buscarCaracter, false)

//Reemplaza cada caracter de la palabra insertada por guiones y los muestra en el espacio de resultado
function crearGuiones(){
    palabraA=palabra.value;
    guiones=palabraA.replace(/[a-z]/gi, "-");
    resultado.value=guiones;
    
}

//Busca el caracter insertado en la palabra y si lo encuentra, sustituye el guion por dicho caracter.
function buscarCaracter(){
    if (letra.value==""){
        return;
    };
    
    palabraA=palabra.value.toUpperCase();
    var caracterBuscar=(letra.value).toUpperCase();
    var posicion=palabraA.indexOf(caracterBuscar);
    var es_acierto=false;

    while(posicion>-1){
        //Cambia el guion por el caracter introducido
        guiones=guiones.substring(0, posicion)+caracterBuscar+guiones.substr(posicion+1, guiones.length);
        
        //Copia en resultado los guiones con la letra acertada
        resultado.value=guiones;

        //Para seguir buscando, la posición tiene que aumentar (+1)
        posicion=palabraA.indexOf(caracterBuscar, posicion+1);
        es_acierto=true;
    }

    //Borra la última letra tecleada en el input
    letra.value=null;
   
    //En caso de que el caracter insertado no coincida con ninguno de la palabra, lo muestra en párrafos  
    if (!palabraA.includes(caracterBuscar)){
        var fallos=document.createElement("p");
        var letraFallada=document.createTextNode(caracterBuscar);
        fallos.appendChild(letraFallada);
        cajaFallos.appendChild(fallos);
        }
}
    
