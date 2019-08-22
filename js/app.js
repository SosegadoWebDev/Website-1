$(document).ready(function () {
    M.AutoInit();
    console.log("Ready..")
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });
    setInterval(() => {
        $('.carousel').carousel("next")
    }, 3000);
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
            case "OBJETIVOS":
                var textValue = "TEST OBJETIVOS CON FUNCION"
                changeValue(textValue)
                break
            case "VALORES":
                var textValue = "TEST VALORES"
                changeValue(textValue)
                break
            case "VISIÓN":
                var textValue = "TEST VISION"
                changeValue(textValue)
                break
        }
    })
})