function encriptar(){
    var texto = document.getElementById("campoTexto").value;
    var separado = texto.split('')

    for (let i = 0; i < separado.length + 1; i++){
        if (separado[i]=="a"){
            separado[i] = "ai";
        }else if (separado[i]=="e"){
            separado[i] = "enter";
        }else if (separado[i]=="i"){
            separado[i] = "imes";
        }else if (separado[i]=="o"){
            separado[i] = "ober";
        }else if (separado[i]=="u"){
            separado[i] = "ufat"
        }
   }
   var resultado = separado.toString();
   var sinComas = resultado.split(",");
   var junto = sinComas.join("");
    console.log(junto);
    document.getElementById("elTexto").innerText = junto;
}
