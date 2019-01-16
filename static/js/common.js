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
$(function() {

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
    $('select').selectric({
        // maxHeight: 100
    });
    //$(".scroll__table").clone(true).appendTo('#table-scroll').addClass('clone');
    // $(".table__scroll").jScrollPane({
    // });
    $('.top-nav a').on('click', handler);

    function handler(e){
        e.preventDefault();
        var $this = $(this);
        var tabItemId = $this.attr('href');
        $('.top-nav a').removeClass('active');
        $this.addClass('active');

        $('.content__tab').removeClass('tab-active');
        $(tabItemId).addClass('tab-active');
    }
});


