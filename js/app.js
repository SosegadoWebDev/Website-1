$(document).ready(function () {
    M.AutoInit();
    console.log("Ready..")
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });
    setInterval(() => {
        $('.carousel').carousel("next")
    }, 5000);
    $(".brand-logo").fadeOut(0)
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $(".div-section-top").fadeOut(0)
            $('.nav-bar').addClass("nav-fixed")
            $(".nav-wrapper a").addClass("font-normal")
            if ($(this).scrollTop() > $("#div-initial").height() - $("#div-initial").height() * 0.30) {
                $(".brand-logo").fadeIn(0)
            } else {
                $(".brand-logo").fadeOut(0)
            }
        } else {
            $(".brand-logo").fadeOut(0)
            $(".div-section-top").fadeIn()
            $('.nav-bar').removeClass("nav-fixed")
            $(".nav-wrapper a").removeClass("font-normal")
        }
    })
    $(".card-tabs li").on("click", function (e) {
        var currentValue = $(".card-content p")[0]
        function changeValue(textValue) {
            $(".card-content p").fadeOut("slow", function () {
                $(".card-content p").fadeIn()
                currentValue.innerText = textValue
            })
        }
        switch (e.target.innerText) {
            case "OBJETIVO":
                var textValue = "Ofrecemos solidez y confianza basada en nuestra trayectoria. La actividad se ha ido complejizando a través de los años y hemos sabido responder a los nuevos desafíos. Tenemos como objetivo mejorar continuamente nuestra calidad de servicios"
                changeValue(textValue)
                break
            case "VISIÓN":
                var textValue = "Ser reconocidos como una empresa de referencia en el mercado por nuestra capacidad de brindar soluciones integrales basándonos en el perfeccionamiento continuo de nuestros servicios y en la excelencia de nuestro equipo de trabajo."
                changeValue(textValue)
                break
            case "VALORES":
                var textValue = "Atención personalizada, honestidad, transparencia, responsabilidad y trabajo en equipo, mejora continua y vocación de servicio."
                changeValue(textValue)
                break
        }
    })
    $("button").on("click", function (event) {
        Swal.fire('Estás a punto de ser redireccionado!')
    })
})