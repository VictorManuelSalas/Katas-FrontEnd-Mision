document.getElementById("arrows").addEventListener("click", activar);
function activar() {
    document.getElementById("arrows").classList.toggle('active');
};

//Este es para mostrar el menu al darle clic al icono de flecha en la parte de preparacion antes de la vacuna
document.getElementById("down-1").addEventListener("click", mostrar_texto_oculto1);

function mostrar_texto_oculto1() {
    document.getElementById("text-preparation-before1").classList.toggle('lola1')
};

document.getElementById("down-2").addEventListener("click", mostrar_texto_oculto2);

function mostrar_texto_oculto2() {
    document.getElementById("text-preparation-before2").classList.toggle('lola2')
}

document.getElementById("down-3").addEventListener("click", mostrar_texto_oculto3);

function mostrar_texto_oculto3() {
    document.getElementById("text-preparation-before3").classList.toggle('lola3')
}

document.getElementById("down-4").addEventListener("click", mostrar_texto_oculto4);

function mostrar_texto_oculto4() {
    document.getElementById("text-preparation-before4").classList.toggle('lola4')
}

document.getElementById("down-5").addEventListener("click", mostrar_texto_oculto5);

function mostrar_texto_oculto5() {
    document.getElementById("text-preparation-before5").classList.toggle('lola5')
}



