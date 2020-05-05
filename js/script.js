$(document).ready(function() {
    jQuery(function($) {
        $(".our_phone").mask("+7(999) 999-99-99");
        $(".our_phone__popup").mask("+7(999) 999-99-99");
    });
});

$(document).ready(function() {
    $('.btn_1').on("click", function() {
        $('.section-popup').show(500)
    });
    $('.btn_2').on("click", function() {
        $('.section-popup').show(500)
    });
    $('.btn_4').on("click", function() {
        $('.section-popup').show(500)
    });
    $('.btn_5').on("click", function() {
        $('.section-popup').show(500)
    });
    $('.btn_7').on("click", function() {
        $('.section-popup').show(500)
    });
    $('.btn_8').on("click", function() {
        $('.section-popup').show(500)
    });
    $('.section-popup_close').on("click", function() {
        $('.section-popup').hide(500)
    });
    $('.section-advantages_certificate').on("click", function() {
        $('.section-popup_certificate').fadeIn(700)
    });
    $('.close_certificate').on("click", function() {
        $('.section-popup_certificate').fadeOut(700)
    });
});

$(document).mouseup(function(e) {
    var popup = $('.section-popup_box');
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
        $('.section-popup').hide(500);
    }
});
$(document).mouseup(function(e) {
    var popup = $('.popup_certificate__wrap');
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
        $('.section-popup_certificate').fadeOut(700);
    }
});

$('#form_1').submit(function(event) {
    event.preventDefault();
    var nameNum = $('#form_1 input[type="text"]').val().length;
    var nameEmpty = $('#form_1 input[type="text"]').val();
    var telLeng = $('#form_1 input[type="tel"]').val().length;
    if (nameNum < 3) {
        $('#form_1 input[type="text"]').attr('style', 'box-shadow: 0px 0px 5px red;');
        $('#form_1 input[type="tel"]').attr('style', 'box-shadow: 0px 0px 5px red;');
        $('.signature_name_1').show(500);
        $('.signature_phone_1').show(500);
    return false;
    }
       
    $('.signature_name_1').hide(500);
    $('#form_1 input[type="text"]').attr('style', 'box-shadow: 0px 0px 5px none;');

    if (telLeng < 9) {
        $('#form_1 input[type="tel"]').attr('style', 'box-shadow: 0px 0px 5px red;');
        $('.signature_phone_1').show(500);
    return false;
    }
    
    $('#form_1 input[type="tel"]').attr('style', 'box-shadow: 0px 0px 5px none;');
    $('.signature_phone_1').hide(500);

    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $('.section-thanks').show(500);
        $(this).find("input").val("");
        $("#form_1").trigger("reset");
        $("#form_2").trigger("reset");
        $("#form_3").trigger("reset");
        yaCounter50722720.reachGoal('form', function() {});
        return true;
    });
    return false;
});

$('#form_2').submit(function(event) {
    event.preventDefault();
    var nameNum = $('#form_2 input[type="text"]').val().length;
    var nameEmpty = $('#form_2 input[type="text"]').val();
    var telLeng = $('#form_2 input[type="tel"]').val().length;
    if (nameNum < 3) {
        $('#form_2 input[type="text"]').attr('style', 'box-shadow: 0px 0px 5px red;');
        $('#form_2 input[type="tel"]').attr('style', 'box-shadow: 0px 0px 5px red;');
        $('.signature_name_2').show(500);
        $('.signature_phone_2').show(500);
        return false;
    }
    $('.signature_name_2').hide(500);
    $('#form_2 input[type="text"]').attr('style', 'box-shadow: none;');

    if (telLeng < 9) {
        $('#form_2 input[type="tel"]').attr('style', 'box-shadow: 0px 0px 5px red;');
        $('.signature_phone_1').show(500);
        return false;
    }
    $('#form_2 input[type="tel"]').attr('style', 'box-shadow: none;');
    $('.signature_phone_2').hide(500);

    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $('.section-thanks').show(500);
        $(this).find("input").val("");
        $("#form_1").trigger("reset");
        $("#form_2").trigger("reset");
        $("#form_3").trigger("reset");
        yaCounter50722720.reachGoal('form', function() {});
        return true;
    });
    return false;
});

$('#form_3').submit(function(event) {
    event.preventDefault();
    var nameNum = $('#form_3 input[type="text"]').val().length;
    var nameEmpty = $('#form_3 input[type="text"]').val();
    var telLeng = $('#form_3 input[type="tel"]').val().length;
    if (nameNum < 3) {
        $('#form_3 input[type="text"]').attr('style', 'box-shadow: 0px 0px 5px red;');
        $('#form_3 input[type="tel"]').attr('style', 'box-shadow: 0px 0px 5px red;');
        $('.signature_name_3').show(500);
        $('.signature_phone_3').show(500);
        return false;
    }
    $('#form_3 input[type="text"]').attr('style', 'box-shadow: none;');
    $('.signature_name_3').hide(500);

    if (telLeng < 9) {
        $('#form_3 input[type="tel"]').attr('style', 'box-shadow: 0px 0px 5px red;');
        $('.signature_phone_3').show(500);
        return false;
    }

    $('#form_3 input[type="tel"]').attr('style', 'box-shadow: none;');
    $('.signature_phone_3').hide(500);
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $('.section-thanks').show(500);
        $(this).find("input").val("");
        $("#form_1").trigger("reset");
        $("#form_2").trigger("reset");
        $("#form_3").trigger("reset");
        yaCounter50722720.reachGoal('form', function() {});
        return true;
    });
    return false;
});
$('.section-popup_close').click(function() {
    $('.section-thanks').hide(500);
    $('.section-popup').hide(500);
});
$(document).mouseup(function(e) {
    var popup = $('.section-thanks_wrap');
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
        $('.section-thanks').hide(500);
    }
});

var one = $('div.one');
var two = $('div.two');
var three = $('div.three');
var replacement_1 = $('.replacement_1');
var replacement_2 = $('.replacement_2');
var levelling = $('.levelling');

function windowSize() {
    if ($(window).width() <= '474') {
        three.removeClass('col-3')
        two.removeClass('col-2')
        one.removeClass('col-7')
        three.addClass('col-6')
        two.addClass('col-6')
        one.addClass('col-12')
    }
    if ($(window).width() <= '767') {
        replacement_1.insertAfter(replacement_2);
    } else {
        replacement_2.insertAfter(replacement_1);
    }
    if ($(window).width() <= '991') {
        levelling.removeClass('align-items-start');
        levelling.addClass('align-items-center');
    } else {
        levelling.removeClass('align-items-center');
        levelling.addClass('align-items-start');
    }
    if ($(window).width() > '474') {
        three.removeClass('col-6')
        two.removeClass('col-6')
        one.removeClass('col-12')
        three.addClass('col-3')
        two.addClass('col-2')
        one.addClass('col-7')
    }
}
$(window).on('load resize', windowSize);
$('a[data-target^="scroll"]').bind('click.smoothscroll', function() {
    var target = $(this).attr('href');
    var bl_top = $(target).offset().top;
    $('body, html').animate({
        scrollTop: bl_top
    }, 700);
    return false;
});
$('.section-review_slider').slick({
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class="slider_arrow_review slider_arrow_review_left"></div>',
    nextArrow: '<div class=" slider_arrow_review slider_arrow_review_right"></div>',
    asNavFor: '.slider_sinh'
});
$('.slider_sinh').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.section-review_slider'
});
ymaps.ready(function() {
    var myMap = new ymaps.Map('map',{
        center: [55.726491, 37.647568],
        zoom: 15
    },{
        searchControlProvider: 'yandex#search'
    })
      , MyIconContentLayout = ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>')
      , myPlacemark = new ymaps.Placemark(myMap.getCenter(),{
        hintContent: 'Москва, улица Победы, 45',
        balloonContent: 'Москва, улица Победы, 45'
    },{
        iconLayout: 'default#image',
        iconImageHref: 'img/section-contacts/object.png',
        iconImageSize: [47, 47],
        iconImageOffset: [-40, -5]
    },{
        iconCaption: 'Москва, улица Победы, 45'
    });
    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects.add(myPlacemark);
});