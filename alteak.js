// funciones pa que funcione el menu


function desplegarMenu() {
    document.getElementById('menu').classList.toggle('activo');
}


//funcion para al darle click redirija a c/seccion con lode onlcick con su id

function mostrarSeccion(id) {
    var secciones = document.getElementsByClassName('seccion');
    for (var i = 0; i < secciones.length; i++) {
        secciones[i].classList.remove('activa');
    }

    document.getElementById(id).classList.add('activa');

    document.getElementById('menu').classList.remove('activo');

}


// funciones pa que funcione al darle click a la img de menu de proyectos lleve a la pagina de ese proyectp
//tambien pa cerrarlo y añado el scroll paara que cuando abra el proy. vaya arriba o sino 
//queda en la posi, en la que estaba en la pag anterior y no quiero eso claramente
//viva MDN webdocs de ahi lo saque :) 

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





// pointer en la img pa que sepan que se puede entra a la img completa y una supesta animacion que eh no funciona en todas las imgs :(
// confesion use IA para este :(
document.addEventListener('DOMContentLoaded', () => {
    const imagenes = document.querySelectorAll('.ondara-galeria img, .ondara-img-principal img, .dior-galeria img, .dior-img-principal img, .napoli-galeria img, .napoli-sup-imgs img, .soleris-galeria img, .imagen-grande-soleris img, .giralia-galeria img, .imagen-grande-giralia img, .perfume-galeria img, .imagen-grande-singular img, .zentide-galeria img, .imagen-banner-zentide img, .cuadricula-fotos-modelo img, .bloque-medio img, .bloque-inferior img');

    imagenes.forEach(foto => {
        foto.style.cursor = 'pointer';
        foto.addEventListener('click', () => {
            abrirFoto(foto.src);
        });
    });
});





//  animacion de las secciones pa que se vea bonito use IA para este tambien
// lo siento no soy buena en animaciones de JS

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
//lo busque en google no sabia como hacerlo
function reproducirVideo(elementoDiv) {
    var video = elementoDiv.querySelector('video');
    var icono = elementoDiv.querySelector('.play-icon');

    video.play();
    video.controls = true;
    icono.style.display = 'none';
}





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