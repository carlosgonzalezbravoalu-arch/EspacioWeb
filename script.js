let contador = 0;

function cambiarMensaje() { contador++;

const mensaje = document.getElementById("mensaje");

if (contador === 1) {
    mensaje.innerHTML = "¡Has pulsado el botón por primera vez!";
    mensaje.style.color = "#2980b9";
} else if (contador === 2) {
    mensaje.innerHTML = "¡Has vuelto a pulsar el botón!";
    mensaje.style.color = "#27ae60";
} else {
    mensaje.innerHTML = "¡Llevas " + contador + " clics! Sigue probando.";
    mensaje.style.color = "#8e44ad";
}


}
