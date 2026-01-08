// funciones pa que funcione el menu


function desplegarMenu() {
    document.getElementById('menu').classList.toggle('activo');
}

function mostrarSeccion(id) {
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(seccion => {
        seccion.classList.remove('activa');
    });

    document.getElementById(id).classList.add('activa');

    document.getElementById('menu').classList.remove('activo');

}


function verProyecto(id) {
    mostrarSeccion(id);
    window.scrollTo(0, 0);
}

function cerrarProyecto() {
    mostrarSeccion('proyectos');
}





// funciones pa mirar imgs completas

function abrirFoto(src) {
    var visor = document.getElementById('visor');
    var imgVisor = document.getElementById('img-visor');

    imgVisor.src = src;
    visor.classList.add('activo');
}

function cerrarFoto() {
    var visor = document.getElementById('visor');
    visor.classList.remove('activo');
}





// pa que funcione en todas las galerias, use IA para este :(
document.addEventListener('DOMContentLoaded', () => {
    const imagenes = document.querySelectorAll('.ondara-galeria img, .dior-galeria img, .napoli-galeria img, .soleris-galeria img, .giralia-galeria img, .perfume-galeria img, .zentide-galeria img, .bloque-inferior-singular img, .cuadricula-fotos-modelo img, .bloque-medio img, .bloque-inferior img');

    imagenes.forEach(foto => {
        foto.style.cursor = 'pointer';
        foto.addEventListener('click', () => {
            abrirFoto(foto.src);
        });
    });
});





//  animacion de las secciones pa que se vea bonito
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('mostrar');
        } else {
            entrada.target.classList.remove('mostrar');
        }
    });
});

const elementosAnimados = document.querySelectorAll('.animado');
elementosAnimados.forEach(elemento => observador.observe(elemento));







//funcion del video pa que reproduzca
function reproducirVideo(elementoDiv) {
    var video = elementoDiv.querySelector('video');
    var icono = elementoDiv.querySelector('.play-icon');

    video.play(); //lo busque en google no sabia como hacerlo
    video.controls = true;
    icono.style.display = 'none';
}


requestAnimationFrame(animacion);






//funcion para el formulario de contacto Graciasss Joeeel

const form = document.getElementById('contactForm');
const nombreInput = document.getElementById('nombre');
const subjectInput = document.getElementById('subject');
const bodyInput = document.getElementById('mensaje');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = encodeURIComponent(nombreInput.value);
    const subject = encodeURIComponent(subjectInput.value);
    const mensaje = encodeURIComponent(bodyInput.value);

    const body = `Hola, soy ${nombre}.%0D%0A%0D%0A${mensaje}`;

    const mailtoLink = `mailto:alteakdesigns@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
});