// Menu interactivo desplegable
let boton = document.getElementById('icono');
let enlaces = document.getElementById('enlaces');
let contador = 0;

boton.addEventListener('click', function(){
    if(contador == 0){
        enlaces.className = ('enlaces dos');
        contador=1;
    }else{
         enlaces.classList.remove('dos');
         enlaces.className = ('enlaces uno');
         contador = 0;
    }
})

// Slider 
let slider = document.querySelector('.slider-contenedor');
let sliderIndividual = document.querySelectorAll('.contenido-slider');
let cuenta = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 7000;

window.addEventListener('resize', function(){
    width = sliderIndividual[0].clientWidth;
})

setInterval(function(){
    slides();
}, intervalo);

function slides(){
    slider.style.transform = "translate("+(-width*cuenta)+"px)";
    slider.style.transition = 'transform 3s';
    cuenta++;

    if(cuenta == sliderIndividual.length){
        setTimeout(function(){
            slider.style.transform = 'translate(0px)';
            slider.style.transition = 'transform 0s';
            cuenta=1;
        }, 2800);
    }
};