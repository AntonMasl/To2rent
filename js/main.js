const swup = new Swup();
init();
swup.on('contentReplaced', init);
function init() {
    $('.slider').slick({
        prevArrow: '<button type = "button" class = "slick-prev"><img src="images/prevArrow.svg"></button>',
        nextArrow: '<button type = "button" class = "slick-next"><img src="images/nextArrow.svg"></button>'
    });
}



