$(document).ready(function () {
    var owl = $('.main-carousel');
    owl.owlCarousel({
        center: true,
        items:2,
        loop:true,
        autoWidth: true,
        dots: true,
        nav:false,
        dotsContainer: '#carousel-custom-dots',
    })

    $('.owl-dot').click(function () {
        owl.trigger('to.owl.carousel', [$(this).index(), 300]);
    });

    $('.customNextBtn').click(function() {
        owl.trigger('next.owl.carousel');
    })

    $('.customPrevBtn').click(function() {
        owl.trigger('prev.owl.carousel');
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

    $('.item-carousel').owlCarousel({
        loop:true,
        margin:20,
        items: 1,
        nav: false,
        autoplay: true
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
        $(this).toggleClass('active');
        $(this).next().toggleClass('open');
    })


})


$('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;

    $this.addClass('select-hidden');
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }

    var $listItems = $list.children('li');

    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });

    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });

    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});
