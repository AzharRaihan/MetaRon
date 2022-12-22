function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

//change door shop to backoffice

//$(".pos_outlet_info.irestora_font_div_pos").html("Back Office") ;

//replace open menu with back office

$('#open__menu').attr('id', 'open__menu_old').hide();
$(".pos_outlet_info.irestora_font_div_pos").attr("id", "open__menu").css('cursor', 'pointer');

$('.pos_outlet_info_ro_toggle').on('click', function () {

    if ($('#main_part').hasClass('show-ro')) {
        document.cookie = "ro-cookie=2";
        $('#main_part').removeClass('show-ro')
        $('.pos_outlet_info_ro_toggle .fas').removeClass('fa-angle-right');
        $('.pos_outlet_info_ro_toggle .fas').addClass('fa-angle-left');
    } else {
        document.cookie = "ro-cookie=1";
        $('#main_part').addClass('show-ro');

        $('.pos_outlet_info_ro_toggle .fas').removeClass('fa-angle-left');
        $('.pos_outlet_info_ro_toggle .fas').addClass('fa-angle-right');
    }

})

$('.search-category-form table td:first-child').prepend('<i class="fa fa-qrcode"></i>');

roCookie = getCookie("ro-cookie");
if (roCookie == "1" || roCookie == "") {
    var element = document.getElementById("main_part");
    element.classList.add("show-ro");
    $('.pos_outlet_info_ro_toggle .fas').removeClass('fa-angle-left');
    $('.pos_outlet_info_ro_toggle .fas').addClass('fa-angle-right');
} else {
    $('.pos_outlet_info_ro_toggle .fas').removeClass('fa-angle-right');
    $('.pos_outlet_info_ro_toggle .fas').addClass('fa-angle-left');
}

$('.for_create_invoice_and_close').click(function () {
    $(".invoice_btn_class").eq(1).click();
})
$('.for_create_bill_and_close').click(function () {
    $('#create_bill_and_close').click();
})
$('.for_invoice_btn_class_split_bill').click(function () {
    $(".invoice_btn_class").eq(0).click();
})



$(".datepicker_custom").on("changeDate", function (event) {
  $.fn.lastTenFeatureButtonClick() ;
});

$(".datepicker_custom").on("show", function (event) {
    if( ! $('.datepicker-days').find('.future-sale-caption').length ) {        
        $('.datepicker-days').prepend("<div class='future-sale-caption'>Future Sales</div>");
    }
});



