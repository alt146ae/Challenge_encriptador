console.log("Hola mundo");

function encriptar(){
    let texto = document.getElementById ("texto").value;
    let titulomensaje= document.getElementById ("titulo-mensaje");
    let parrafo =document.getElementById ("parrafo");
    let muneco = document.getElementById ("mono");

    let textocifrado = texto
                        .replace(/e/gi, "enter")
                        .replace(/i/gi, "imes")
                        .replace(/a/gi, "ai")
                        .replace(/o/gi, "ober")
                        .replace(/u/gi, "ufat");

    if (texto.length!=0){
        document.getElementById ("texto").value =textocifrado;
        titulomensaje.textContent = "Texto encriptado con exito";
        parrafo.textContent = "";
        muneco.src = "./img/encriptado.jpg";
    }else{
    muneco.src = "./img/muneco.png";
    titulomensaje.textContent = "Ningun mensaje fue encontrado";
    parrafo.textContent ="Ingresa el texto que deseas encripar o desencriptar"
    swal("Ooops", "Debes ingresar un texto", "error");
    //alert("Debes ingresar algun texto")
    }
}

function descencriptar(){
    let texto = document.getElementById ("texto").value;
    let titulomensaje= document.getElementById ("titulo-mensaje");
    let parrafo =document.getElementById ("parrafo");
    let muneco = document.getElementById ("mono");


    let textocifrado = texto
                    .replace(/enter/gi, "e")
                    .replace(/imes/gi, "i")
                    .replace(/ai/gi, "a")
                    .replace(/ober/gi, "o")
                    .replace(/ufat/gi, "u");
    if (texto.length!=0){
        document.getElementById ("texto").value =textocifrado;
        titulomensaje.textContent = "Texto desencriptado con exito";
        parrafo.textContent = "";
        muneco.src = "./img/desencriptado.jpg";
       }
    else{
        muneco.src = "./img/muneco.png";
        titulomensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent ="Ingresa el texto que deseas encripar o desencriptar"
        swal("Ooops", "Debes ingresar un texto", "error");
        }
}
