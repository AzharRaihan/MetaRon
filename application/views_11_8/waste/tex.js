$(document).on("click", "#place_order_operation", function (e) {
    let sale_id = 0;
    if ($(".order_table_holder .order_holder > .modification").length > 0) {
        sale_id = $(".order_table_holder .order_holder > .modification").html();
    }
    let selected_order_type_object = $(".main_top").find(
        "button[data-selected=selected]"
    );
    let total_items_in_cart = $(".order_holder .single_order").length;
    let sub_total = parseFloat($("#sub_total_show").html()).toFixed(
        ir_precision
    );
    let charge_type = $("#charge_type").val();
    let total_vat = parseFloat($("#all_items_vat").html()).toFixed(
        ir_precision
    );
    let total_payable = parseFloat($("#total_payable").html()).toFixed(
        ir_precision
    );
    let total_item_discount_amount = parseFloat(
        $("#total_item_discount").html()
    ).toFixed(ir_precision);
    let sub_total_with_discount = parseFloat(
        $("#discounted_sub_total_amount").html()
    ).toFixed(ir_precision);
    let sub_total_discount_amount = parseFloat(
        $("#sub_total_discount_amount").html()
    ).toFixed(ir_precision);
    let total_discount_amount = parseFloat(
        $("#all_items_discount").html()
    ).toFixed(ir_precision);
    let delivery_charge = "";
    let delivery_charge_actual_charge = "";
    let show_charge_amount_ = Number($("#show_charge_amount").html());
    if (show_charge_amount_) {
        delivery_charge = $("#delivery_charge").val();
        delivery_charge_actual_charge = $("#show_charge_amount").html();
    }
    let sub_total_discount_value = $("#sub_total_discount").val();
    let sub_total_discount_type = "";
    let customer_id = $("#walk_in_customer").val();
    let waiter_id = $("#select_waiter").val();
    let sale_vat_objects = [];
    $("#tax_row_show .tax_field").each(function (i, obj) {
        let tax_field_id = $(this).attr("data-tax_field_id");
        let tax_field_type = $(this).attr("data-tax_field_type");
        let tax_field_amount = $(this).attr("data-tax_field_amount");
        sale_vat_objects.push({
            tax_field_id: tax_field_id,
            tax_field_type: tax_field_type,
            tax_field_amount: Number(tax_field_amount).toFixed(ir_precision),
        });
    });
    if (total_items_in_cart == 0) {
        $(".cardIsEmpty").css("border", "2px solid red");
        setTimeout(function () {
            $(".cardIsEmpty").css("border", "none");
        }, 2000);
        placeOrderSound.play();
        return false;
    }
    if (
        sub_total_discount_value.length > 0 &&
        sub_total_discount_value.substr(sub_total_discount_value.length - 1) ==
        "%"
    ) {
        sub_total_discount_type = "percentage";
    } else {
        sub_total_discount_type = "fixed";
    }
    if (selected_order_type_object.length > 0) {
        let order_type = 1;
        if (selected_order_type_object.attr("id") == "delivery_button") {
            order_type = 3;
            if (customer_id == "") {
                $("#select2-walk_in_customer-container").css(
                    "border",
                    "1px solid red"
                );
                let op1 = $("#walk_in_customer").data("select2");
                let op2 = $("#select_waiter").data("select2");
                op1.open();
                op2.close();
                return false;
            }
            if (customer_id == "1") {
                $("#select2-walk_in_customer-container").css(
                    "border",
                    "1px solid red"
                );
                let op1 = $("#walk_in_customer").data("select2");
                let op2 = $("#select_waiter").data("select2");
                op1.open();
                op2.close();
                return false;
            }

            let address_available = searchCustomerAddress(customer_id);
            if (address_available[0].customer_address == "") {
                $("#select2-walk_in_customer-container").css(
                    "border",
                    "1px solid red"
                );
                let op1 = $("#walk_in_customer").data("select2");
                let op2 = $("#select_waiter").data("select2");
                op1.open();
                op2.close();
                return false;
            }
        } else if (selected_order_type_object.attr("id") == "dine_in_button") {
            order_type = 1;
            if (waiter_id == "") {
                $("#select2-select_waiter-container").css("border", "1px solid red");
                $("#select2-select_waiter-container").css("border", "1px solid red");
                let op1 = $("#walk_in_customer").data("select2");
                let op2 = $("#select_waiter").data("select2");
                op1.close();
                op2.open();
                return false;
            }
            if (customer_id == "") {
                $("#select2-walk_in_customer-container").css(
                    "border",
                    "1px solid red"
                );
                let op1 = $("#walk_in_customer").data("select2");
                let op2 = $("#select_waiter").data("select2");
                op1.open();
                op2.close();
                return false;
            }
        } else if (selected_order_type_object.attr("id") == "take_away_button") {
            order_type = 2;

            if (waiter_id == "") {
                $("#select2-select_waiter-container").css("border", "1px solid red");
                let op1 = $("#walk_in_customer").data("select2");
                let op2 = $("#select_waiter").data("select2");
                op1.close();
                op2.open();
                return false;
            }
            if (customer_id == "") {
                $("#select2-walk_in_customer-container").css(
                    "border",
                    "1px solid red"
                );
                let op1 = $("#walk_in_customer").data("select2");
                let op2 = $("#select_waiter").data("select2");
                op1.open();
                op2.close();
                return false;
            }
        }

        let is_diplomat = 1;
        if ($("#is_diplomat").prop("checked") == true) {
            is_diplomat = 2;
        }
        let table_name = "";
        let table_id = "";
        let number_of_guest = "";
        let get_data = 1;
        $(".order_table_select").each(function () {
            let this_value = Number($(this).val());
            if (this_value && get_data == 1) {
                table_name = $(this).attr("data-table_name");
                table_id = $(this).attr("data-table_id");
                number_of_guest = this_value;
                get_data++;
            }
        });

        let order_status = 1;
        let open_invoice_date_hidden = $("#open_invoice_date_hidden").val();
        let remove_vat = $("#remove_vat").val();
        let order_info = "{";
        order_info += '"customer_id":"' + customer_id + '",';
        order_info += '"waiter_id":"' + waiter_id + '",';
        order_info += '"remove_vat":"' + remove_vat + '",';
        order_info += '"table_name":"' + table_name + '",';
        order_info += '"table_id":"' + table_id + '",';
        order_info += '"number_of_guest":"' + number_of_guest + '",';
        order_info += '"is_diplomat":"' + is_diplomat + '",';
        order_info +=
            '"open_invoice_date_hidden":"' + open_invoice_date_hidden + '",';
        order_info += '"total_items_in_cart":"' + total_items_in_cart + '",';
        order_info += '"sub_total":"' + sub_total + '",';
        order_info += '"charge_type":"' + charge_type + '",';
        order_info += '"total_vat":"' + total_vat + '",';
        order_info += '"total_payable":"' + total_payable + '",';
        order_info +=
            '"total_item_discount_amount":"' + total_item_discount_amount + '",';
        order_info +=
            '"sub_total_with_discount":"' + sub_total_with_discount + '",';
        order_info +=
            '"sub_total_discount_amount":"' + sub_total_discount_amount + '",';
        order_info += '"total_discount_amount":"' + total_discount_amount + '",';
        order_info += '"delivery_charge":"' + delivery_charge + '",';
        order_info +=
            '"delivery_charge_actual_charge":"' +
            delivery_charge_actual_charge +
            '",';
        order_info +=
            '"sub_total_discount_value":"' + sub_total_discount_value + '",';
        order_info +=
            '"sub_total_discount_type":"' + sub_total_discount_type + '",';
        // order_info += '"selected_table":"'+selected_table+'",';
        order_info += '"order_type":"' + order_type + '",';
        order_info += '"order_status":"' + order_status + '",';
        order_info +=
            '"sale_vat_objects":' + JSON.stringify(sale_vat_objects) + ",";

        let orders_table = "";
        orders_table += '"orders_table":';
        orders_table += "[";
        let x = 1;
        let total_orders_table = $(".new_book_to_table").length;
        $(".new_book_to_table").each(function (i, obj) {
            let table_id = $(this).attr("id").substr(16);
            let person = $(this).find(".third_column").html();
            if (x == total_orders_table) {
                orders_table +=
                    '{"table_id":"' + table_id + '", "persons":"' + person + '"}';
            } else {
                orders_table +=
                    '{"table_id":"' + table_id + '", "persons":"' + person + '"},';
            }
            x++;
        });

        orders_table += "],";
        order_info += orders_table;
        let items_info = "";
        items_info += '"items":';
        items_info += "[";

        if ($(".order_holder .single_order").length > 0) {
            let k = 1;
            $(".order_holder .single_order").each(function (i, obj) {
                let item_id = $(this).attr("id").substr(15);
                let item_name = $(this)
                    .find("#item_name_table_" + item_id)
                    .html();
                let item_vat = $(this).find(".item_vat").html();
                let item_discount = $(this)
                    .find("#percentage_table_" + item_id)
                    .val();
                let discount_type = "";
                if (
                    item_discount.length > 0 &&
                    item_discount.substr(item_discount.length - 1) == "%"
                ) {
                    discount_type = "percentage";
                } else {
                    discount_type = "fixed";
                }
                let item_previous_id = $(this)
                    .find("#item_previous_id_table" + item_id)
                    .html();
                let item_cooking_done_time = $(this)
                    .find("#item_cooking_done_time_table" + item_id)
                    .html();
                let item_cooking_start_time = $(this)
                    .find("#item_cooking_start_time_table" + item_id)
                    .html();
                let item_cooking_status = $(this)
                    .find("#item_cooking_status_table" + item_id)
                    .html();
                let item_type = $(this)
                    .find("#item_type_table" + item_id)
                    .html();
                let item_price_without_discount = $(this)
                    .find(".item_price_without_discount")
                    .html();
                let item_unit_price = $(this)
                    .find("#item_price_table_" + item_id)
                    .html();
                let item_quantity = $(this)
                    .find("#item_quantity_table_" + item_id)
                    .html();
                let tmp_qty = $(this).find(".tmp_qty").val();
                let p_qty = $(this).find(".p_qty").val();
                let item_price_with_discount = $(this)
                    .find("#item_total_price_table_" + item_id)
                    .html();
                let item_discount_amount = (
                    parseFloat(item_price_without_discount) -
                    parseFloat(item_price_with_discount)
                ).toFixed(ir_precision);

                items_info +=
                    '{"item_id":"' +
                    item_id +
                    '", "item_name":"' +
                    item_name +
                    '", "item_vat":' +
                    item_vat +
                    ",";
                items_info +=
                    '"item_discount":"' +
                    item_discount +
                    '","discount_type":"' +
                    discount_type +
                    '","item_price_without_discount":"' +
                    item_price_without_discount +
                    '",';
                items_info +=
                    '"item_unit_price":"' +
                    item_unit_price +
                    '","item_quantity":"' +
                    item_quantity +
                    '","tmp_qty":"' +
                    tmp_qty +
                    '","p_qty":"' +
                    p_qty +
                    '",';
                items_info +=
                    '"item_previous_id":"' +
                    item_previous_id +
                    '","item_cooking_done_time":"' +
                    item_cooking_done_time +
                    '",';
                items_info +=
                    '"item_cooking_start_time":"' +
                    item_cooking_start_time +
                    '","item_cooking_status":"' +
                    item_cooking_status +
                    '","item_type":"' +
                    item_type +
                    '",';
                items_info +=
                    '"item_price_with_discount":"' +
                    item_price_with_discount +
                    '","item_discount_amount":"' +
                    item_discount_amount +
                    '"';
                let modifiers_tax_custom = "";
                let ji = 1;
                let modifier_vat = "";
                $(".item_vat_modifier_" + item_id).each(function (i, obj) {
                    if (ji == $(".item_vat_modifier_" + item_id).length) {
                        modifier_vat += $(this).html();
                    } else {
                        modifier_vat += $(this).html() + "|||";
                    }
                    ji++;
                });
                if ($(this).find(".second_portion").length > 0) {
                    let modifiers_id = $(this)
                        .find("#item_modifiers_id_table_" + item_id)
                        .html();
                    let modifiers_price = $(this)
                        .find("#item_modifiers_price_table_" + item_id)
                        .html();
                    items_info +=
                        ',"modifiers_id":"' +
                        modifiers_id +
                        '", "modifiers_price":"' +
                        modifiers_price +
                        '", "modifier_vat":' +
                        JSON.stringify(modifier_vat);
                } else {
                    items_info +=
                        ',"modifiers_id":"", "modifiers_price":"", "modifier_vat":""';
                }
                if ($(this).find(".third_portion").length > 0) {
                    let item_note = $(this)
                        .find("#item_note_table_" + item_id)
                        .html();
                    items_info += ',"item_note":"' + item_note + '"';
                } else {
                    items_info += ',"item_note":""';
                }
                items_info +=
                    k == $(".order_holder .single_order").length ? "}" : "},";
                k++;
            });
        }
        items_info += "]";
        order_info += items_info + "}";

        let order_object = JSON.stringify(order_info);

        $("#is_diplomat").prop("checked", false);
        add_sale_by_ajax(order_object, sale_id);

        $(".order_table_select").val("").change();
        $(".payment_method").val("");
        $("#is_ignore_change").val('');

        $("#dine_in_button").css("border", "unset");
        $("#take_away_button").css("border", "unset");
        $("#delivery_button").css("border", "unset");
    } else {
        $("#dine_in_button").css("border", "1px solid red");
        $("#take_away_button").css("border", "1px solid red");
        $("#delivery_button").css("border", "1px solid red");
    }
});