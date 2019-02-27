
$(".burger, .overlay").click(function () { $(".burger").toggleClass("clicked"), $(".overlay").toggleClass("show"), $("nav").toggleClass("show"), $("body").toggleClass("overflow") }), $(".close-home-popup").click(function () { $(".home-popup-wrapper").toggleClass("hide-me") }), AOS.init({ duration: 600, disable: "mobile", once: !0 }), window.addEventListener("load", AOS.refresh), $(document).ready(function () { $(".search-submit, .close-search-btn").click(function (a) { a.stopPropagation(), $(".searchBar").toggle(), $(".search-input").focus() }) }), $(window).scroll(function () { $(this).scrollTop() >= 300 ? $("#return-to-top").fadeIn(200) : $("#return-to-top").fadeOut(200) }), $("#return-to-top").click(function () { $("body,html").animate({ scrollTop: 0 }, 500) });
$(function () { $(".hero-fullscreen-slider").slick({ dots: !1, infinite: !0, autoplay: !0, slidesToShow: 1, slidesToScroll: 1, arrows: !0 }) }), $(function () { $(".hero-full-width-slider").slick({ dots: !1, infinite: !0, autoplay: !0, slidesToShow: 1, slidesToScroll: 1, arrows: !0 }) }), $(".news-event-slider").slick({ dots: !1, speed: 800, slidesToShow: 2, slidesToScroll: 2, arrows: !0, prevArrow: $(".slider-prev"), nextArrow: $(".slider-next"), autoplay: !0, infinite: !0, responsive: [{ breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2, infinite: !0 } }, { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }] }), $(function () { $(".mobile-hero-slider").slick({ dots: !1, infinite: !0, autoplay: !0, slidesToShow: 1, slidesToScroll: 1, arrows: !0, adaptiveHeight: !0 }) }), $(function () { $(".page-banner-slider").slick({ dots: !1, infinite: !0, autoplay: !0, slidesToShow: 1, slidesToScroll: 1, arrows: !0 }) }), $(function () { $(".store-image-slider").slick({ dots: !1, infinite: !0, autoplay: !0, slidesToShow: 1, slidesToScroll: 1, arrows: !0 }) }), $(function () { $(".store-video-slider").slick({ dots: !1, infinite: !0, autoplay: !1, slidesToShow: 1, slidesToScroll: 1, arrows: !0, adaptiveHeight: !0 }) }), $(function () { $(".category-slider").slick({ dots: !0, infinite: !0, autoplay: !0, slidesToShow: 1, slidesToScroll: 1, arrows: !1, speed: 800 }) });
$(document).ready(function () {
    // Configure/customize these variables.
    var showChar = 100; // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "Show More >";
    var lesstext = "Close";
    $('.more-content').each(function () {
        var content = $(this).html();
        if (content.length > showChar) {
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
            var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
            $(this).html(html);
        }
    });
    $(".morelink").click(function () {
        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});
