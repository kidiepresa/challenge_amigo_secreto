// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
 const lista = document.getElementById("listaAmigos")

function agregarAmigo(){
    const input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre) {
        
        const nuevoNombre = document.createElement("li");
        nuevoNombre.textContent = nombre;
        lista.appendChild(nuevoNombre);
        input.value = "";
        input.focus();
    }else{
        alert("Por favor, ingrese un nombre válido.")
    }
}


function sortearAmigo(){
    const resultado = document.getElementById("resultado");
    const nombres = document.querySelectorAll("li")
    let numero = Math.floor(Math.random() * nombres.length);
    resultado.textContent = "El amigo secreto sorteado es: " + nombres[numero].textContent; 
    lista.innerHTML = "";
}