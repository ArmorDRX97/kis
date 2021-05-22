$(document).ready(function () {
    $('.main-carousel').owlCarousel({
        center: true,
        items:2,
        loop:true,
        autoWidth: true,
        dots: false,
        nav:true,
        navText: ["<i class='icon icon-right icon-rotate-180'></i>","<i class='icon icon-right'></i>"]
    })

    $('.special-carousel').owlCarousel({
        items:4,
        loop:true,
        margin: 20,
        dots: false,
        nav:true,
        navText: ["<i class='icon icon-right icon-rotate-180'></i>","<i class='icon icon-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            766:{
              items: 2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    })

    let overlay = $('.overlay');
    let menu = $('.menu-bar');
    let list = $('.menu-list');

    menu.click(function () {
        overlay.addClass('show');
        list.addClass('open');
    })

    overlay.click(function () {
        overlay.removeClass('show');
        list.removeClass('open');
    })


    let overlayFilter = $('.overlay-filter');
    let filter = $('.filter-mobile');
    let filterBlock = $('.filters-block');

    filter.click(function () {
        overlayFilter.toggleClass('show');
        filterBlock.toggleClass('open');
    })

    overlayFilter.click(function () {
        overlayFilter.removeClass('show');
        filterBlock.removeClass('open');
    })

    $('.filter-action').click(function () {
        $(this).next().toggleClass('open');
    })


})
