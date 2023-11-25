$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    //slide up script

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation script

    var typed = new Typed(".typing", {
        strings: ["Software Developer.", "Web Designer."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Software Developer.", "Web Designer."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});


// traductor al ingles

function traducir() {
    // Obtén el texto original
    var spanish = document.getElementById("spanish");

    // Usa el servicio de traducción de Google Translate (puedes reemplazarlo con otra opción)
    // Aquí utilizo la API de Google Translate para traducir de español a inglés
    var urlTraduccion = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=es&tl=en&dt=t&q=" + encodeURIComponent(spanish.innerText);

    // Realiza la solicitud de traducción
    fetch(urlTraduccion)
        .then(response => response.json())
        .then(data => {
            // Extrae y muestra el texto traducido
            var inglish = data[0][0][0];
            spanish.innerText = inglish;
        })
        .catch(error => {
            console.error('Error al traducir:', error);
        });
}
