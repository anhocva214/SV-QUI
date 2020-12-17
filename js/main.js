$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

$(document).ready(function () {
    $('.owl-carousel-banner').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ["<i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i>","<i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i>"],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }
    })
});

$(document).ready(function () {
    $('.owl-carousel-products').owlCarousel({
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            }
        }
    })
});