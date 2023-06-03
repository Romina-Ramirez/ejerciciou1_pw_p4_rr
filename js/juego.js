var botones = document.getElementsByClassName("boton")
var intento = 0

function comprobar(opcion) {
    var resultado = document.getElementById("resultado")
    var opcion = document.getElementById(opcion).textContent
    var intentos = document.getElementById("intentos")

    if (opcion == "excadrill") {
        resultado.innerHTML = "Felicitaciones, has seleccionado la opción correcta."
        resultado.style.backgroundColor = "blue"
        resultado.style.border = "2px solid black"
        resultado.style.fontFamily = "'Times New Roman', Times, serif"
        resultado.style.color = "floralwhite"
        intento += 1
        intentos.innerHTML = "Intentos: " + intento
        comprobarIntentos(intento)
        for (var i = 0; i < botones.length; i++) {
            botones[i].disabled = true;
        }
        document.getElementById("imagen").src = "../img/pcolor.jpg"
    } else {
        resultado.innerHTML = "Pokémon incorrecto, intentalo nuevamente."
        intento += 1
        intentos.innerHTML = "Intentos: " + intento
    }

    if (intento == 3) {
        for (var i = 0; i < botones.length; i++) {
            botones[i].disabled = true;
        }
    }

}

function comprobarIntentos(int) {
    var puntaje = document.getElementById("puntaje")
    if (int == 1) {
        puntaje.innerHTML = "Puntaje: 5"
    } else if (int == 2) {
        puntaje.innerHTML = "Puntaje: 3"
    } else if (int == 3) {
        puntaje.innerHTML = "Puntaje: 1"
    }
}

function reiniciar() {
    document.getElementById("resultado").innerHTML = "Resultado"
    document.getElementById("resultado").style.removeProperty("border")
    document.getElementById("resultado").style.removeProperty("background-color")
    document.getElementById("resultado").style.removeProperty("font-family")
    document.getElementById("resultado").style.color = "black"
    document.getElementById("intentos").innerHTML = "Intentos: 0"
    document.getElementById("puntaje").innerHTML = "Puntaje: 0"
    document.getElementById("imagen").src = "../img/pnegro.jpg"
    intento = 0
    for (var i = 0; i < botones.length; i++) {
        botones[i].disabled = false;
    }

}