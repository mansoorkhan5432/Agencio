window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
})

//mobile nav

$('.js-nav-icon').click(function() {
    var nav = $('.js-main-nav');
    var icon = $('.js-nav-icon i');

    nav.slideToggle(500);

    if (icon.hasClass('fas fa-bars')) {
        icon.addClass('far fa-times-circle');
        icon.removeClass('fas fa-bars');
    } else {
        icon.addClass('fas fa-bars');
        icon.removeClass('far fa-times-circle');
    }
});
