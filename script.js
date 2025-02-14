
let currentIndex = 0;
const carruselInner = document.querySelector('.carrusel-inner');
const totalImages = document.querySelectorAll('.carrusel img').length;

function moveCarrusel() {
    currentIndex = (currentIndex + 1) % totalImages;
    const offset = -currentIndex * 100; // Desplazamiento en porcentaje
    carruselInner.style.transform = `translateX(${offset}%)`;
}

setInterval(moveCarrusel, 3000); // Cambia de imagen cada 3 segundos

let contadorGolpes = 0; // Contador de golpes al topo
const golpesNecesarios = 1; // Número de golpes necesarios para ganar

function golpearTopo() {
    contadorGolpes++; // Incrementa el contador de golpes

    if (contadorGolpes >= golpesNecesarios) {
        // Muestra la alerta con SweetAlert2 y estilo San Valentín
        Swal.fire({
            title: '¡Felicidades! 💖',
            text: 'Tienes derecho a pasar la vida conmigo.',
            icon: 'success',
            background: '#ffcccb', // Fondo rosado
            color: '#8b0000', // Texto en rojo oscuro
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#ff4d4d', // Botón rojo
            customClass: {
                popup: 'sweet-alert-san-valentin', // Clase personalizada
                title: 'sweet-title-san-valentin', // Estilo del título
                content: 'sweet-content-san-valentin', // Estilo del contenido
                confirmButton: 'sweet-button-san-valentin' // Estilo del botón
            }
        }).then(() => {
            // Reproducir una canción de YouTube después de cerrar la alerta
            window.open('https://www.youtube.com/watch?v=Jn5GQJjHNeA', '_blank');
        });

        // Reinicia el contador de golpes
        contadorGolpes = 0;
    }

    // Mueve el topo a una nueva posición aleatoria
    const topo = document.getElementById('topo');
    topo.style.top = Math.random() * 80 + '%';
    topo.style.left = Math.random() * 80 + '%';
}

// Mueve el topo cada segundo
setInterval(() => {
    const topo = document.getElementById('topo');
    topo.style.top = Math.random() * 80 + '%';
    topo.style.left = Math.random() * 80 + '%';
}, 1000);
