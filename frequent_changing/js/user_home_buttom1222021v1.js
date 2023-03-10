// material icon init
feather.replace();

jQuery(".select_multiple").select2({
    multiple: true,
    placeholder: 'Select',
    allowClear: true
});
jQuery('.select_multiple').val('placeholder').trigger("change");
let ir_precision_h = jQuery("#ir_precision").val();
let window_height = jQuery(window).height();
let main_header_height = jQuery('.main-header').height();
let user_panel_height = jQuery('.user-panel').height();
let left_menu_height_should_be = (parseFloat(window_height) - (parseFloat(main_header_height) + parseFloat(
    user_panel_height))).toFixed(ir_precision_h);
left_menu_height_should_be = (parseFloat(left_menu_height_should_be) - parseFloat(60)).toFixed(ir_precision_h);

var base_url,csrf_value_;

base_url = jQuery("#base_url_").val();
let csrf_name_ = jQuery("#csrf_name_").val();
csrf_value_ = jQuery("#csrf_value_").val();
let not_closed_yet = jQuery("#not_closed_yet").val();
let opening_balance = jQuery("#opening_balance").val();
let customer_due_receive = jQuery("#customer_due_receive").val();
let paid_amount = jQuery("#paid_amount").val();
let in_ = jQuery("#in_").val();
let cash = jQuery("#cash").val();
let paypal = jQuery("#paypal").val();
let sale = jQuery("#sale").val();
let card = jQuery("#card").val();
let register_not_open = jQuery("#register_not_open").val();
let currency = '';

jQuery.ajax({
    url: base_url+"Register/checkRegisterAjax",
    method: "POST",
    data: {
        csrf_name_: csrf_value_
    },
    success: function(response) {
        if (response == '2') {
            jQuery('#close_register_button').css('display', 'none');
        } else {
            jQuery('#close_register_button').css('display', 'block'); 
        }
    },
    error: function() {
        alert("error");
    }
});

jQuery('#register_details').on('click', function(e) {

    console.log("123");

    e.preventDefault();
    jQuery.ajax({
        url: base_url+"Sale/registerDetailCalculationToShowAjax",
        method: "POST",
        data: {
            csrf_name_: csrf_value_
        },
        cache : false,
        processData: false, 
        success: function(response) {
            // console.log(response);
            if (!IsJsonString(response)) {
                swal(
                    {
                        title: warning + "!",
                        text: register_not_open,
                        confirmButtonColor: "#3c8dbc",
                        confirmButtonText: ok,
                        showCancelButton: true
                    },
                    function () {
                        window.location.replace(base_url + 'Register/openRegister');
                    }
                );
            }else{
                response = JSON.parse(response);
                jQuery('#myModal').modal('show');
                jQuery('#opening_closing_register_time').show();
                jQuery('#opening_register_time').html(response.opening_date_time);
                let opening_balance_text = jQuery("#opening_balance").val();
                let customer_due_receive_text = jQuery("#customer_due_receive").val();
                let sale_text = jQuery("#sale").val();

                let t1 = response.opening_date_time.split(/[- :]/);
                let d1 = new Date(Date.UTC(t1[0], t1[1] - 1, t1[2], t1[3], t1[4], t1[5]));
                let t2 = '';
                if(response.closing_date_time){
                    t2 = response.closing_date_time.split(/[- :]/);
                }

                let d2 = new Date(Date.UTC(t2[0], t2[1] - 1, t2[2], t2[3], t2[4], t2[5]));

                if (d1 > d2) {
                    jQuery('#closing_register_time').html(not_closed_yet);
                } else {
                    jQuery('#closing_register_time').html(response.closing_date_time);
                }


                let register_detail_modal_content = '';
                let customer_due_receive = (response.customer_due_receive == null) ? 0 : response
                    .customer_due_receive;
                let opening_balance = (response.opening_balance == null) ? 0 : response
                    .opening_balance;
                let sale_due_amount = (response.sale_due_amount == null) ? 0 : response
                    .sale_due_amount;
                let sale_in_card = (response.sale_in_card == null) ? 0 : response.sale_in_card;
                let sale_in_cash = (response.sale_in_cash == null) ? 0 : response.sale_in_cash;
                let sale_in_paypal = (response.sale_in_paypal == null) ? 0 : response
                    .sale_in_paypal;
                let sale_paid_amount = (response.sale_paid_amount == null) ? 0 : response
                    .sale_paid_amount;
                let sale_total_payable_amount = (response.sale_total_payable_amount == null) ? 0 :
                    response.sale_total_payable_amount;

                let balance = (parseFloat(opening_balance) + parseFloat(sale_paid_amount) +
                    parseFloat(customer_due_receive)).toFixed(ir_precision_h);
                register_detail_modal_content += '<p>'+opening_balance_text+': ' +
                    currency + ' ' + opening_balance + '</p>';
                // register_detail_modal_content += '<p>Sale Total Amount: '+currency+' '+sale_total_payable_amount+'</p>';
                register_detail_modal_content +=
                    '<p>'+sale_text+' ('+paid_amount+'): ' +
                    currency + ' ' + sale_paid_amount + '</p>';
                // register_detail_modal_content += '<p>Sale Due Amount: '+currency+' '+sale_due_amount+'</p>';
                // register_detail_modal_content += '<p>&nbsp;</p>';
                register_detail_modal_content +=
                    '<p>'+customer_due_receive_text+': ' + currency + ' ' +
                    customer_due_receive + '</p>';
                register_detail_modal_content +=
                    '<p>Balance {'+opening_balance+' + '+sale+' ('+paid_amount+') + '+customer_due_receive+'}: ' +
                    currency + ' ' + balance + '</p>';
                register_detail_modal_content +=
                    '<p style="width:100%;border-bottom:1px solid #b5d6f6;line-height:0px;">&nbsp;</p>';

                register_detail_modal_content +=response.payment_html_content;
                jQuery('#register_details_body').html(register_detail_modal_content);
                // $('#myModal').modal('hide');
            }

        },
        error: function() {
            alert("error");
        }
    });
});

jQuery('#register_close').on('click', function() {
    let r = confirm("Are you sure to close register?");

    if (r == true) {
        jQuery.ajax({
            url: base_url+"Sale/closeRegister",
            method: "POST",
            data: {
                csrf_name_: csrf_value_
            },
            success: function(response) {
                swal({
                    title: 'Alert',
                    text: 'Register closed successfully!!',
                    confirmButtonColor: '#b6d6f6'
                });
                jQuery('#close_register_button').hide();

            },
            error: function() {
                alert("error");
            }
        });
    }
});

function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

function todaysSummary() {

    jQuery.ajax({
        url: base_url+"Report/todayReport",
        method: 'get',
        dataType: 'json',
        data: {
        csrf_name_: csrf_value_
    },
    success: function(data) {
        jQuery("#purchase_today_").text(currency + data
            .total_purchase_amount);
        jQuery("#sale_today").text(currency + data
            .total_sales_amount);
        jQuery("#totalVat").text(currency + data
            .total_sales_vat);
        jQuery("#Expense").text(currency + data
            .expense_amount);
        jQuery("#supplierDuePayment").text(currency + data
            .supplier_payment_amount);
        jQuery("#customerDueReceive").text(currency + data
            .customer_receive_amount);
        jQuery("#waste_today").text(currency + data
            .total_loss_amount);
        jQuery("#balance").text(currency + data.balance);
        jQuery.ajax({
            url: base_url+'Report/todayReportCashStatus',
            method: 'get',
            datatype: 'json',
            data: {
                csrf_name_: csrf_value_
        },
        success: function(data) {
            let json = jQuery.parseJSON(data);
            let i = 1;
            let html = '<table class="table">';
            jQuery.each(json, function(index, value) {
                html += '<tr><td style="width: 86%">' + i + '. Sale in ' +
                    value.name +
                    '</td> <td><'+currency+' ' +
                value.total_sales_amount + '</td></tr>';
                i++;
            });
            html += '</table>';
            jQuery("#showCashStatus").html(html);
        }
    });
    }
});
    jQuery("#todaysSummary").modal("show");
}

display_date_time();
function getNewDateTime() {
    let refresh = 1000; // Refresh rate in milli seconds
    setTimeout(display_date_time, refresh);
}
function display_date_time() {
    //for date and time
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    let yyyy = today.getFullYear();
    if (dd < 10) {
        dd = "0" + dd;
    }
    if (mm < 10) {
        mm = "0" + mm;
    }
    let time_a = new Date().toLocaleTimeString();
    let today_date = yyyy + "-" + mm + "-" + dd;

    jQuery("#closing_register_time").html(today_date+" "+time_a);
    /* recursive call for new time*/
    getNewDateTime();
}