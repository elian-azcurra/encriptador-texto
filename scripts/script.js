
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

// Declaración de variables
var textoUtilizado  = document.getElementById("input-texto");
var textoModificado = document.getElementById("textoModificado");
var botEncriptar    = document.getElementById("botEncriptar");
var botDesencriptar = document.getElementById("botDesencriptar");
var botCopiar       = document.getElementById("botCopiar");

botEncriptar.addEventListener("click", encriptar);
botDesencriptar.addEventListener("click", desencriptar);
botCopiar.addEventListener("click", copiar);

textoUtilizado.focus();

// Función ENCRIPTAR
function encriptar() {
    var texto = document.getElementById("input-texto").value;
        texto = (texto.toLowerCase());

        texto = texto.replaceAll("e", "enter");    
        texto = texto.replaceAll("i", "imes");
        texto = texto.replaceAll("a", "ai");
        texto = texto.replaceAll("o", "ober");    
        texto = texto.replaceAll("u", "ufar");

        document.getElementById("textoModificado").value = texto;
        document.getElementById("input-texto").value = "";
        
} 

// Función DESENCRIPTAR
function desencriptar() {

    var texto = document.getElementById("input-texto").value;
        texto = texto.replaceAll("enter", "e");    
        texto = texto.replaceAll("imes", "i"); 
        texto = texto.replaceAll("ai", "a");   
        texto = texto.replaceAll("ober", "o");    
        texto = texto.replaceAll("ufar", "u"); 

        document.getElementById("textoModificado").value = texto;
        document.getElementById("input-texto").value = "";

    }

// Función COPIAR
    function copiar() {

        var copiarTexto = document.getElementById("textoModificado");
        copiarTexto.select();
        document.execCommand("copy");
        document.getElementById("input-texto").value = "";

    }