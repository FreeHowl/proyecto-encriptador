function copiar(){
    const copiado = document.getElementById("elTexto").innerText;
    navigator.clipboard.writeText(copiado);
}

function encriptar(){
    //captura el valor del area de texto
    var texto = document.getElementById("campoTexto").value;
    //condicion de acentos y mayusculas
    var Permitido = /^[a-z0-9 ]*$/;
    //si el valor del area de texto contiene los caracteres no permitidos, emite mensaje
    if (!Permitido.test(texto)){
        document.getElementById("elTexto").innerText = "No se permite mayusculas ni acentos.";
    } else {
        //si no hay caracteres no permitidos, procede a identificar las vocales y reemplazarlas
        var encriptado = texto.replace(/(a|e|i|o|u)/g, function(match){
            if (match === "a") return "ai";
            if (match === "e") return "enter";
            if (match === "i") return "imes";
            if (match === "o") return "ober";
            if (match === "u") return "ufta";
        });
        //cambia el texto de la seccion "elTexto" por el texto encriptado
        document.getElementById("elTexto").innerText = encriptado;
        //hace aparecer el boton "Copiar"
        document.getElementById("botonCopiar").style.display = "inline-block";
    }

}

function desencriptar(){
    var texto = document.getElementById("campoTexto").value;
    var Permitido = /^[a-z0-9 ]*$/;
    if (!Permitido.test(texto)){
        document.getElementById("elTexto").innerText = "No se permite mayusculas ni acentos.";
    }else {
        var desencriptado = texto.replace(/(ai|enter|imes|ober|ufta)/g, function(match){
            if (match === "ai") return "a";
            if (match === "enter") return "e";
            if (match === "imes") return "i";
            if (match === "ober") return "o";
            if (match === "ufta") return "u";
        });
    document.getElementById("elTexto").innerText = desencriptado;
    }
}