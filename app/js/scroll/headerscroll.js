$(function () {
    // Высота меню
    var navbarHeight = $(".navbar").innerHeight();
    // топ паддинг у блока about
    // var aboutPaddingTop = $(".about").css('paddingTop');
    // расположение меню в документе
    var navbarPosition = $(".navbar").offset().top;
    var navbar = $(".navbar");
    var navbarBrand = $(".navbar__brand");
    var about = $(".about");

    function Anchor() {
        var obj = $(this);
        $("html, body").animate(
            {scrollTop: $(obj.attr("href")).offset().top}, 500)
    }

    $(window).scroll(function () {
        // Текущее положение относительно документа
        var position = $(document).scrollTop();

        // Обнуляем все если шапка на своем месте
        if (position <= navbarPosition) {
            navbar.removeClass("navbar--fixed visible");
            about.css({'margin-top': ""});
            // navbarBrand.removeClass("navbar__brand--rotate180 navbar__brand--rotate360");
        }

        if (position > navbarPosition + navbarHeight) {
            navbar.addClass("hidden");
            // navbarBrand.addClass("navbar__brand--rotate180");
        }
        else
            // фикс: при скроле больше высоты меню и возврате меню появляется
            if (position < navbarPosition + navbarHeight) {
                navbar.removeClass("hidden");
            }

        if (position > navbarPosition + 200) {
            navbar.removeClass("hidden");
            navbar.addClass("navbar--fixed visible");
            // navbarBrand.addClass("navbar__brand--rotate360");
            about.css({'margin-top': navbarHeight});
        }
    })

    $("a").click(Anchor);

});