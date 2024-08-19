function encriptar(){
    var texto = document.getElementById("campoTexto").value;
    var encriptado = texto.replace(/(a|e|i|o|u)/g, function(match){
        if (match === "a") return "ai";
        if (match === "e") return "enter";
        if (match === "i") return "imes";
        if (match === "o") return "ober";
        if (match === "u") return "ufta";
    });
    document.getElementById("elTexto").innerText = encriptado;
}

function desencriptar(){
    var texto = document.getElementById("campoTexto").value;
    var desencriptado = texto.replace(/(ai|enter|imes|ober|ufta)/g, function(match){
        if (match === "ai") return "a";
        if (match === "enter") return "e";
        if (match === "imes") return "i";
        if (match === "ober") return "o";
        if (match === "ufta") return "u";
    });
    document.getElementById("elTexto").innerText = desencriptado;
}