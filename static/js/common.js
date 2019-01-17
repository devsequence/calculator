$(function() {
    if ($(document).height() <= $(window).height())
        $("footer.footer").addClass("navbar-fixed-bottom");

});
$(function() {
    (function quantityProducts() {
        var $quantityArrowMinus = $(".number__down");
        var $quantityArrowPlus = $(".number__up");
        $quantityArrowMinus.click(quantityMinus);
        $quantityArrowPlus.click(quantityPlus);
        function quantityMinus() {
            var $quantityNum = $(this).siblings('.input-number');
            if ($quantityNum.val() >= 1) {
                $quantityNum.val(+$quantityNum.val() - 1);
            }
        }
        function quantityPlus() {
            var $quantityNum = $(this).siblings('.input-number');
            $quantityNum.val(+$quantityNum.val() + 1);
        }
    })();
});
function all() {
    var sum = 0;
    $(".tab-active .calculator__item input").each(function() {
        sum += +this.value;
    });
    return sum; // an add function shouldn't really "alert"
}
$('.calculate').on('click',function() {
    alert(all());
});
$(".reset").on('click', function () {
    $('.input-number').val('0')
});
$(function() {
    $('select').selectric({});
    $('.top-nav a').on('click', handler);
    function handler(e){
        e.preventDefault();
        var $this = $(this),
            tabItemId = $this.attr('href'),
            $thisParent = $this.parents('.header');

        $('.top-nav a').removeClass('active');
        $this.addClass('active');
        $('.content__tab').removeClass('tab-active');
        $(tabItemId).addClass('tab-active');

        if($thisParent.hasClass('header-nav__visible')){
            $('.top-btn').removeClass('top-btn-open').addClass('top-btn-close');
            $thisParent.removeClass('header-nav__visible').addClass('header-nav__hidden');
        }else{}
    }
});
$(window).on('resize', function(){
    var win = $(this);
    if (win.width() <= 768) {
        $('.header').addClass('header-nav__hidden');
    }else{
        $('.header').removeClass('header-nav__hidden');
    }
});
function checkResize() {
    var windowSize = $(window).width();
    if (windowSize <= 768) {
        $('.header').addClass('header-nav__hidden');
    }else{
        $('.header').removeClass('header-nav__hidden');
    }
}
checkResize();
$('.top-btn').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    if($this.hasClass('top-btn-open')){
        $this.removeClass('top-btn-open').addClass('top-btn-close');
        $('.header').removeClass('header-nav__visible').addClass('header-nav__hidden');
    }else{
        $this.addClass('top-btn-open').removeClass('top-btn-close');
        $('.header').removeClass('header-nav__hidden').addClass('header-nav__visible');
    }
});
$(".top-nav a").on('click',function () {
    $('html, body').animate({
        scrollTop: $(".tabs__content").offset().top - 110
    }, 500);
});

