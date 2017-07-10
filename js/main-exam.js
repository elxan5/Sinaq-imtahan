$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        margin: 15,
        items:4,
        nav: true,
        autoHeight: true,
        autoplay :true,

        loop:true,
        navText: [
          "<i class='fa fa-chevron-left'></i>",
          "<i class='fa fa-chevron-right'></i>"
        ],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            480:{
                items:3,
                nav:true
            },
            768:{
                items:4,
                nav:true,
                loop:true
            }
        }
        })
})