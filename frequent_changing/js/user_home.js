jQuery(document).ready(function($) {
    "use strict";
    let warning = jQuery("#warning").val();
    let a_error = jQuery("#a_error").val();
    let ok = jQuery("#ok").val();
    let cancel = jQuery("#cancel").val();
    let are_you_sure = jQuery("#are_you_sure").val();

    jQuery('[data-mask]').inputmask();
    jQuery('.select2').select2();
    jQuery(".delete").click(function(e) {
        e.preventDefault();
        let linkURL = this.href;
        warnBeforeRedirect(linkURL);
    });

    function warnBeforeRedirect(linkURL) {
        swal({
            title: warning+"!",
            text: are_you_sure+"?",
            cancelButtonText: cancel,
            confirmButtonText: ok,
            confirmButtonColor: '#3c8dbc',
            showCancelButton: true
        }, function() {
            window.location.href = linkURL;
        });
    }
    // //iCheck for checkbox and radio inputs
    // jQuery('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
    //     checkboxClass: 'icheckbox_minimal-blue',
    //     radioClass: 'iradio_minimal-blue'
    // })


    jQuery(document).on('keydown', '.integerchk', function(e) {
        return (
            keys == 8 ||
            keys == 9 ||
            keys == 13 ||
            keys == 46 ||
            keys == 110 ||
            keys == 86 ||
            keys == 190 ||
            (keys >= 35 && keys <= 40) ||
            (keys >= 48 && keys <= 57) ||
            (keys >= 96 && keys <= 105));
    });


    jQuery(document).on('click', '.menu_assign_class', function(e) {
      let this_menu_id = jQuery(this).attr("data-menu__cid");
        localStorage['active_menu'] = this_menu_id;
    });
    //set active menu for admin panel
    let active_menu_id = localStorage['active_menu'];
    let active_menu_tmp = jQuery(".active_menu_tmp").val();
    if(active_menu_tmp==''){
        jQuery(".menu__cid"+active_menu_id).addClass('active');
    }else{
        jQuery(".menu__cid"+active_menu_tmp).addClass('active');
    }


    jQuery(document).on('keyup', '.integerchk', function(e) {
        let ir_precision_integ = jQuery("#ir_precision").val();

        let input = jQuery(this).val();
        let ponto = input.split('.').length;
        let slash = input.split('-').length;
        if (ponto > 2)
            jQuery(this).val(input.substr(0, (input.length) - 1));
            jQuery(this).val(input.replace(/[^0-9]/, ''));
        if (slash > 2)
            jQuery(this).val(input.substr(0, (input.length) - 1));
        if (ponto == 2)
            jQuery(this).val(input.substr(0, (input.indexOf('.') + (Number(ir_precision_integ)+1))));
        if (input == '.')
            jQuery(this).val("");

    });

    //Date picker
    jQuery('#date').datepicker({
        format: 'yyyy-mm-dd',
        autoclose: true
    });
    jQuery('#dates2').datepicker({
        format: 'yyyy-mm-dd',
        autoclose: true
    });
    jQuery('.customDatepicker').datepicker({
        format: 'yyyy-mm-dd',
        autoclose: true
    });
    jQuery('.start_date_today').datepicker({
        format: 'yyyy-mm-dd',
        autoclose: true,
        startDate:'0'
    });
    jQuery(".datepicker_months").datepicker({
        format: 'yyyy-M',
        autoclose: true,
        viewMode: "months",
        minViewMode: "months"
    });

    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    let yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }
    today = yyyy + '-' + mm + '-' + dd;
});


