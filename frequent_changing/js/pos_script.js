$('a[href="#"]').attr("href", "javascript:void(0)");
//get value from hidden fileds on main_screen view
const body_el = $("body");
let base_url = $("base").attr("data-base");
let outlet_name = $("#outlet_name").val();
let txt_kot = $("#txt_kot").val();
let invoice_logo = $("#invoice_logo").val();
let outlet_address = $("#outlet_address").val();
let outlet_phone = $("#outlet_phone").val();
let outlet_tax_registration_no = $("#outlet_tax_registration_no").val();
let token_no = $("#token_no").val();
let associate_user_name = $("#associate_user_name").val();
let invoice_footer = $("#invoice_footer").val();
let inv_total_item = $("#inv_total_item").val();
let txt_balance = $("#txt_balance").val();
let inv_sub_total = $("#inv_sub_total").val();
let inv_discount = $("#inv_discount").val();
let inv_service_charge = $("#inv_service_charge").val();
let inv_delivery_charge = $("#inv_delivery_charge").val();
let inv_tips = $("#inv_tips").val();
let inv_grand_total = $("#inv_grand_total").val();
let inv_paid_amount = $("#inv_paid_amount").val();
let inv_due_amount = $("#inv_due_amount").val();
let inv_total_payable = $("#inv_total_payable").val();
let inv_payment_method = $("#inv_payment_method").val();
let inv_usage_points = $("#inv_usage_points").val();
let inv_invoice_no = $("#inv_invoice_no").val();
let inv_offline = $("#inv_offline").val();
let inv_online = $("#inv_online").val();
let inv_phone = $("#inv_phone").val();
let inv_tax_registration_no = $("#inv_tax_registration_no").val();
let inv_date = $("#inv_date").val();
let status_txt = $("#status_txt").val();
let inv_checkout = $("#inv_checkout").val();
let inv_sales_associate = $("#inv_sales_associate").val();
let inv_customer = $("#inv_customer").val();
let inv_address = $("#inv_address").val();
let inv_gst_number = $("#inv_gst_number").val();
let inv_waiter = $("#inv_waiter").val();
let inv_table = $("#inv_table").val();
let inv_delivery_status = $("#inv_delivery_status").val();
let inv_order_type = $("#inv_order_type").val();
let inv_vat = $("#inv_vat").val();
let inv_charge = $("#inv_charge").val();
let inv_dine = $("#inv_dine").val();
let inv_take_away = $("#inv_take_away").val();
let inv_delivery = $("#inv_delivery").val();
let inv_bill_no = $("#inv_bill_no").val();
let inv_token_number = $("#inv_token_number").val();
let collect_tax = $("base[data-collect-tax]").attr("data-collect-tax");
let currency = $("base[data-currency]").attr("data-currency");
let role = $("base[data-role]").attr("data-role");
let collect_gst = $("base[data-collect-gst]").attr("data-collect-gst");
let gst_state_code = $("base[data-gst-state-code]").attr("data-gst-state-code");
let csrf_value_ = $("#csrf_value_").val();
let ir_precision = $("#ir_precision").val();
let register_close = $("#register_close").val();
let warning = $("#warning").val();
let a_error = $("#a_error").val();
let ok = $("#ok").val();
let cancel = $("#cancel").val();
let please_select_order_to_proceed = $("#please_select_order_to_proceed").val();
let exceeciding_seat = $("#exceeciding_seat").val();
let seat_greater_than_zero = $("#seat_greater_than_zero").val();
let are_you_sure_cancel_booking = $("#are_you_sure_cancel_booking").val();
let are_you_delete_notification = $("#are_you_delete_notification").val();
let no_notification_select = $("#no_notification_select").val();
let are_you_delete_all_hold_sale = $("#are_you_delete_all_hold_sale").val();
let no_hold = $("#no_hold").val();
let sure_delete_this_hold = $("#sure_delete_this_hold").val();
let please_select_hold_sale = $("#please_select_hold_sale").val();
let delete_only_for_admin = $("#delete_only_for_admin").val();
let this_item_is_under_cooking_please_contact_with_admin = $(
  "#this_item_is_under_cooking_please_contact_with_admin"
).val();
let this_item_already_cooked_please_contact_with_admin = $(
  "#this_item_already_cooked_please_contact_with_admin"
).val();
let sure_delete_this_order = $("#sure_delete_this_order").val();
let sure_remove_this_order = $("#sure_remove_this_order").val();
let sure_cancel_this_order = $("#sure_cancel_this_order").val();
let please_select_an_order = $("#please_select_an_order").val();
let cart_not_empty = $("#cart_not_empty").val();
let cart_not_empty_want_to_clear = $("#cart_not_empty_want_to_clear").val();
let progress_or_done_kitchen = $("#progress_or_done_kitchen").val();
let order_in_progress_or_done = $("#order_in_progress_or_done").val();
let close_order_without = $("#close_order_without").val();
let want_to_close_order = $("#want_to_close_order").val();
let please_select_open_order = $("#please_select_open_order").val();
let cart_empty = $("#cart_empty").val();
let select_a_customer = $("#select_a_customer").val();
let select_a_waiter = $("#select_a_waiter").val();
let delivery_not_possible_walk_in = $("#delivery_not_possible_walk_in").val();
let txt_err_pos_1 = $("#txt_err_pos_1").val();
let txt_err_pos_2 = $("#txt_err_pos_2").val();
let txt_err_pos_3 = $("#txt_err_pos_3").val();
let txt_err_pos_4 = $("#txt_err_pos_4").val();
let txt_err_pos_5 = $("#txt_err_pos_5").val();
let fullscreen_1 = $("#fullscreen_1").val();
let fullscreen_2 = $("#fullscreen_2").val();
let update_order = $("#update_order").val();
let place_order = $("#place_order").val();
let note_txt = $("#note_txt").val();
let price_txt = $("#price_txt").val();
let modifiers_txt = $("#modifiers_txt").val();
let waiter_app_status = $("#waiter_app_status").val();
let item_add_success = $("#item_add_success").val();
let delivery_for_customer_must_address = $(
  "#delivery_for_customer_must_address"
).val();
let select_dine_take_delivery = $("#select_dine_take_delivery").val();
let added_running_order = $("#added_running_order").val();
let selected_variation = $("#selected_variation").val();

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
    tippy(".time__date", {
        content:
        `<div style="text-align:center"><span>` +
        today_date +
        `</span><br><span>` +
        time_a +
        `</span></div>`,
        allowHTML: true,
        animation: "scale",
    });
    $("#closing_register_time").html(today_date + " " + time_a);
    /* recursive call for new time*/
    getNewDateTime();
}

function check_current_qty(item_id, item_quantity) {
  let result = "";
  $.ajax({
    url: base_url + "Authentication/checkQty",
    method: "post",
    async: false,
    dataType: "json",
    data: {
      curr_qty: item_quantity,
      item_id: item_id,
      csrf_name_: csrf_value_,
    },
    success: function (response) {
      result = response;
    },
    error: function () {},
  });
  return result;
}
function pOrAmount(value) {

    if(value){
        if (value.indexOf("%") > -1) {
            return value;
        } else {
            let value_tmp = (value.split("%"));
            return Number(value_tmp[0]).toFixed(ir_precision);
        }
    }else{
        return value;
    }
}
function getCurrentDate() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();
  today = yyyy + "-" + mm + "-" + dd;
  return today;
}

$(document).ready(function (elementId) {
  $(document).on("click", "#edit_customer", function (e) {
    let selected_customer = $("#walk_in_customer").val();

    if (selected_customer != "") {
      if (selected_customer == 1) {
          alertModalCustom({modalName:"danger_update", normalTxt: (txt_err_pos_1),re_open_modal:"target: #customer-choose-modal"});
      } else {
        get_customer_for_edit(selected_customer);
      }
    }
  });
  /**
   * Add Datepicker in form pos screen
   */
  let open_invoice_date_hidden = $("#open_invoice_date_hidden").val();

  $(".datepicker_custom")
    .datepicker({
      autoclose: true,
      format: "yyyy-mm-dd",
      startDate: "0",
      todayHighlight: true,
    })
    .datepicker("update", open_invoice_date_hidden);

  $(".datepicker_custom").on("changeDate", function (event) {
    $("#open_invoice_date_hidden").val(event.format());
  });

  function getPlanText(txt) {
    let new_str = txt.replace(/'/g, " ").replace(/"/g, " ");
    return new_str;
  }
  $(document).on("keyup", "#search_running_orders", function (e) {
    let string = $(this).val().toLowerCase();
    $(".select_running_order").find('.running_order_right_arrow').each(function (i, obj) {
      let order_number = $(this).attr("data-order_no").toLowerCase();
      let table_name = $(this).parent().find(".running_order_table_name").text().toLowerCase();
      let waiter_name = $(this).attr("data-waiter").toLowerCase();
      let customer_name = $(this).attr("data-customer").toLowerCase();
      if (
        order_number.includes(string) ||
        table_name.includes(string) ||
        waiter_name.includes(string) ||
        customer_name.includes(string)
      ) {
        $(this).parent().parent().parent().css("display", "block");
      } else {
        $(this).parent().parent().parent().css("display", "none");
      }
    });
  });
  $(document).on("keyup", "#search_hold_sale", function (e) {
    let string = $(this).val().toLowerCase();

    $(".single_hold_sale").each(function (i, obj) {
      let customer_name = $(this).find(".second_column").html().toLowerCase();
      let customer_phone = $(this).find(".third_column").html().toLowerCase();
      if (customer_name.includes(string) || customer_phone.includes(string)) {
        $(this).css("display", "flex");
      } else {
        $(this).css("display", "none");
      }
    });
  });
  $(document).on("keyup", "#search_sales_custom_modal", function (e) {
    let string = $(this).val().toLowerCase();

    $(".single_last_ten_sale").each(function (i, obj) {
      let customer_name = $(this).find(".second_column").html().toLowerCase();
      if (customer_name.includes(string)) {
        $(this).css("display", "flex");
      } else {
        $(this).css("display", "none");
      }
    });
  });

  $(document).on("keyup", "#search_future_custom_modal", function (e) {
    let string = $(this).val().toLowerCase();

    $(".single_future_sale").each(function (i, obj) {
      let customer_name = $(this).find(".second_column").html().toLowerCase();
      if (customer_name.includes(string)) {
        $(this).css("display", "flex");
      } else {
        $(this).css("display", "none");
      }
    });
  });
  $(document).on("keyup", "#walk_in_customer", function (e) {
    $("#select2-walk_in_customer-container").css("border", "none");
    checkIsDiplomat();
    do_addition_of_item_and_modifiers_price();
  });
  $(document).on("keyup", "#select_waiter", function (e) {
    $("#select2-select_waiter-container").css("border", "none");
  });
  $(document).on("click", "#kitchen_waiter_bar_button", function (e) {
    $("#kitchen_bar_waiter_panel_button_modal").addClass("active");
    $(".pos__modal__overlay").fadeIn(200);
  });
  $(document).on("click", "#submit_table_modal", function (e) {
    $("#show_tables_modal2").removeClass("active");
    $(".pos__modal__overlay").fadeOut(300);
  });
  function checkQty(tbl_id) {}
  $(document).on("click", ".bottom_add", function (e) {
    let table_id = $(this).attr("id").substr(38);
    let order_number = $(
      "#single_table_order_details_bottom_order_" + table_id
    ).val();
    order_number = order_number == "" ? "New" : order_number;
    let person = $(
      "#single_table_order_details_bottom_person_" + table_id
    ).val();
    let available_sit = $("#sit_available_number_" + table_id).html();
    let sit_capacity_number = $("#sit_capacity_number_" + table_id).html();
    let total_person = 0;

    $(".person_tbl_" + table_id).each(function () {
      let tmp_v = Number($(this).html());
      total_person += tmp_v;
    });

    if (Number(person) + total_person > parseInt(sit_capacity_number)) {
      swal({
        title: warning + "!",
        text: exceeciding_seat,
        confirmButtonText: ok,
        confirmButtonColor: "#b6d6f6",
      });
      return false;
    }
    let now_available =
      parseInt(sit_capacity_number) - (Number(person) + total_person);
    if (Number(person) + total_person <= 0) {
      swal({
        title: warning + "!",
        text: seat_greater_than_zero,
        confirmButtonText: ok,
        confirmButtonColor: "#b6d6f6",
      });
      return false;
    }

    $("#sit_available_number_" + table_id).html(now_available);

    let table_book_row = "";
    table_book_row +=
      '<div class="single_row new_book_to_table" id="new_order_table_' +
      table_id +
      '">';
    table_book_row +=
      '<div class=" column first_column">' +
      order_number +
      "</div>";
    table_book_row += '<div class=" column second_column">-</div>';
    table_book_row +=
      '<div class=" column third_column person_tbl_' +
      table_id +
      '">' +
      person +
      "</div>";
    table_book_row +=
      '<div class=" column forth_column"><i class="fas fa-trash-alt remove_new_order_row_icon" id="single_row_table_delete_' +
      table_id +
      '"></i></div>';
    table_book_row += "</div>";
    $("#single_table_order_details_top_" + table_id).append($(table_book_row));
    $("#single_table_order_details_bottom_" + table_id).hide();
  });

  $(document).on("click", ".remove_table_order", function () {
    let orders_table_id = $(this).attr("id").substr(19);
    let this_action = $(this).parent().parent();
    swal(
      {
        title: warning + "!",
        text: are_you_sure_cancel_booking,
        confirmButtonColor: "#3c8dbc",
        confirmButtonText: ok,
        showCancelButton: true,
      },
      function () {
        this_action.remove();
        $.ajax({
          url: base_url + "Sale/remove_a_table_booking_ajax",
          method: "POST",
          data: {
            orders_table_id: orders_table_id,
            csrf_irestoraplus: csrf_value_,
          },
          success: function (response) {
            response = JSON.parse(response);
            let current_available_sit = $(
              "#sit_available_number_" + response.table_id
            ).html();
            let cancelled_sit_number = response.persons;
            let new_available_sit =
              parseInt(current_available_sit) + parseInt(cancelled_sit_number);
            $("#sit_available_number_" + response.table_id).html(
              new_available_sit
            );
            // $('#single_notification_row_'+response).remove();
          },
          error: function () {
            alert(a_error);
          },
        });
      }
    );
  });
  $(document).on("click", "#please_read_table_modal_button", function (e) {
    $("#please_read_modal").addClass("active");
    $(".pos__modal__overlay").fadeIn(200);
  });
  $(document).on(
    "click",
    "#please_read_close_button,#please_read_close_button_cross",
    function (e) {
      $(this).parent().parent().removeClass("active").addClass("inActive");
      setTimeout(function () {
        $(".modal").removeClass("inActive");
      }, 1000);
    }
  );

  $(document).on(
    "click",
    "#table_modal_cancel_button,#proceed_without_table_button",
    function (e) {
      $(".new_book_to_table").remove();
      $(".single_table_order_details_holder .bottom").css("display", "block");
      $(this)
        .parent()
        .parent()
        .parent()
        .parent()
        .removeClass("active")
        .addClass("inActive");
      setTimeout(function () {
        $(".modal").removeClass("inActive");
      }, 1000);
      $(".pos__modal__overlay").fadeOut(300);
      reset_table_modal();
    }
  );
  $(document).on("click", "#table_modal_cancel_button2", function (e) {
    $(".new_book_to_table").remove();
    $(".single_table_order_details_holder .bottom").css("display", "block");
    $(this)
      .parent()
      .parent()
      .parent()
      .parent()
      .removeClass("active")
      .addClass("inActive");
    setTimeout(function () {
      $(".modal").removeClass("inActive");
    }, 1000);
    $(".pos__modal__overlay").fadeOut(300);
    reset_table_modal();
  });
  $(document).on("click", ".remove_new_order_row_icon", function () {
    let this_table_id = $(this).attr("id").substr(24);

    $(this).parent().parent().remove();
    let person = $(
      "#single_table_order_details_bottom_person_" + this_table_id
    ).val();
    let available_sit = $("#sit_available_number_" + this_table_id).html();
    let total_person = 0;
    let sit_capacity_number = $("#sit_capacity_number_" + this_table_id).html();
    $(".person_tbl_" + this_table_id).each(function () {
      let tmp_v = Number($(this).html());
      total_person += tmp_v;
    });

    if (total_person > parseInt(sit_capacity_number)) {
      swal({
        title: warning + "!",
        text: exceeciding_seat,
        confirmButtonText: ok,
        confirmButtonColor: "#b6d6f6",
      });
      return false;
    }
    let now_available = parseInt(sit_capacity_number) - total_person;
    if (total_person <= 0) {
      swal({
        title: warning + "!",
        text: seat_greater_than_zero,
        confirmButtonText: ok,
        confirmButtonColor: "#b6d6f6",
      });
      $("#sit_available_number_" + this_table_id).html(now_available);
      return false;
    }

    $("#sit_available_number_" + this_table_id).html(now_available);

    $("#single_table_order_details_bottom_" + this_table_id).css(
      "display",
      "block"
    );
    $("#single_table_order_details_bottom_person_" + this_table_id).val("1");
  });
  $(document).on("keydown", function (e) {
    if (e.ctrlKey && e.shiftKey && e.which == 70) {
      $("#search").focus();
    }
  });
  let interval;


  function tableModal() {
    let _body_height = $(window).height();
    $(".select_table_modal_info_holder2").css(
      "height",
      _body_height / 2 + 100 + "px"
    );
    $(window).resize(function () {
      let _body_height = $(window).height();
      $(".select_table_modal_info_holder2").css(
        "height",
        _body_height / 2 + 100 + "px"
      );
    });
  }
  tableModal();
  $(document).on("click", ".overlayForCalculator", function (e) {
    $("#calculator_main").fadeOut(333);
    $(".overlayForCalculator").fadeOut(111);
    $(".main_left").removeClass("active");
    if ($("#show_running_order").attr("data-isActive") === "false") {
      $("#show_running_order").attr("data-isActive", "true");
    } else {
      $("#show_running_order").attr("data-isActive", "false");
    }
  });
  set_calculator_position();
  $(document).on("click", "#notification_remove_all", function (e) {
    if ($(".single_notification_checkbox:checked").length > 0) {
      swal(
        {
          title: warning + "!",
          text: are_you_delete_notification,
          confirmButtonColor: "#3c8dbc",
          confirmButtonText: ok,
          showCancelButton: true,
        },
        function () {
          let notifications = "";
          let j = 1;
          let checkbox_length = $(
            ".single_notification_checkbox:checked"
          ).length;
          $(".single_notification_checkbox:checked").each(function (i, obj) {
            if (j == checkbox_length) {
              notifications += $(this).val();
            } else {
              notifications += $(this).val() + ",";
            }
            j++;
          });
          if (notifications != "") {
            let notifications_array = notifications.split(",");
            notifications_array.forEach(function (entry) {
              $("#single_notification_row_" + entry).remove();
            });
            //Then read the values from the array where 0 is the first
            //Since we skipped the first element in the array, we start at 1
            $.ajax({
              url: base_url + "Sale/remove_multiple_notification_ajax",
              method: "POST",
              data: {
                notifications: notifications,
                csrf_irestoraplus: csrf_value_,
              },
              success: function (response) {
                // $('#single_notification_row_'+response).remove();
              },
              error: function () {
                alert(a_error);
              },
            });
          }
        }
      );
    } else {
      swal({
        title: warning,
        text: no_notification_select,
        confirmButtonText: ok,
        confirmButtonColor: "#b6d6f6",
      });
    }
  });
  $(document).on("click", ".single_serve_b", function () {
    let notification_id = $(this).attr("id").substr(26);
    $.ajax({
      url: base_url + "Sale/remove_notication_ajax",
      method: "POST",
      data: {
        notification_id: notification_id,
        csrf_irestoraplus: csrf_value_,
      },
      success: function (response) {
        $("#single_notification_row_" + response).remove();
      },
      error: function () {
        alert(a_error);
      },
    });
  });
  $(document).on("change", "#select_all_notification", function (e) {
    if ($(this).is(":checked")) {
      $(".single_notification_checkbox").prop("checked", true);
      $(".single_row_notification").addClass('selected');
    } else {
      $(".single_notification_checkbox").prop("checked", false);
        $(".single_row_notification").removeClass('selected');
    }
  });
  // for same modal
  $(document).on("click", "#notification_close", function (e) {
    $(".pos__modal__overlay").fadeOut(300);

    $(".single_notification_checkbox").prop("checked", false);
    $("#select_all_notification").prop("checked", false);
    $(this)
      .parent()
      .parent()
      .parent()
      .removeClass("active")
      .addClass("inActive");
    setTimeout(function () {
      $(".modal").removeClass("inActive");
      $("#notification_counter").hide();
    }, 1000);
  });
  // for same modal
  $(document).on("click", "#notification_close2", function (e) {
    $("#notification_list_modal").removeClass("active");
    $(".pos__modal__overlay").fadeOut(300);

    $(".single_notification_checkbox").prop("checked", false);
    $("#select_all_notification").prop("checked", false);
  });
  $(document).on("click", "#notification_button", function (e) {
    $("#notification_list_modal").addClass("active");
    $(".pos__modal__overlay").fadeIn(200);
  });
  $(document).on("click", "#open_hold_sales", function (e) {
    $(".modifier_item_details_holder").empty();
    get_all_hold_sales();
  });
  // $(document).on("mouseover", ".single_last_ten_sale", function () {
  //   $(this).css("background-color", "#f7f7f7");
  // });
  // $(document).on("mouseout", ".single_last_ten_sale", function () {
  //   $(this).css("background-color", "#ffffff");
  //   if ($(this).attr("data-selected") == "selected") {
  //     $(this).css("background-color", "#f7f7f7");
  //   }
  // });
  $(document).on("click", ".single_hold_sale", function () {
    //get hold id
    let hold_id = $(this).attr("id").substr(5);
    $(".single_hold_sale").css("background-color", "#ffffff");
    $(".single_hold_sale").attr("data-selected", "unselected");
    $(this).css("background-color", "#f7f7f7");
    $(this).attr("data-selected", "selected");
    //get all info of hold based on hold_id
    $.ajax({
      url: base_url + "Sale/get_single_hold_info_by_ajax",
      method: "POST",
      data: {
        hold_id: hold_id,
        csrf_irestoraplus: csrf_value_,
      },
      success: function (response) {
        response = JSON.parse(response);
        let order_type = "";
        let order_type_id = 0;
        $("#hold_waiter_id").html(response.waiter_id);
        $("#hold_waiter_name").html(response.waiter_name);
        $("#hold_customer_id").html(response.customer_id);
        $("#hold_customer_name").html(response.customer_name);
        $("#hold_table_id").html(response.table_id);
        $("#hold_table_name").html(response.table_name);
        if (response.order_type == 1) {
          order_type = "Dine In";
          order_type_id = 1;
        } else if (response.order_type == 2) {
          order_type = "Take Away";
          order_type_id = 2;
        } else if (response.order_type == 3) {
          order_type = "Delivery";
          order_type_id = 3;
        }
        $("#hold_order_type").html(order_type);
        $("#hold_order_type_id").html(order_type_id);
        let draw_table_for_hold_order = "";
          let total_items_in_cart_with_quantity = 0;
        for (let key in response.items) {
          //construct div
          let this_item = response.items[key];

          let selected_modifiers = "";
          let selected_modifiers_id = "";
          let selected_modifiers_price = "";
          let modifiers_price = 0;
          let total_modifier = this_item.modifiers.length;
          let i = 1;
          let item_id = this_item.food_menu_id;
          let draw_table_for_order_tmp_modifier_tax = "";
            total_items_in_cart_with_quantity+=Number(this_item.qty);

          for (let mod_key in this_item.modifiers) {
            let this_modifier = this_item.modifiers[mod_key];
            let modifier_id_custom = this_modifier.modifier_id;
            //get selected modifiers
            if (i == total_modifier) {
              selected_modifiers += this_modifier.name;
              selected_modifiers_id += this_modifier.modifier_id;
              selected_modifiers_price += this_modifier.modifier_price;
              modifiers_price = (
                parseFloat(modifiers_price) +
                parseFloat(this_modifier.modifier_price)
              ).toFixed(ir_precision);
            } else {
              selected_modifiers += this_modifier.name + ", ";
              selected_modifiers_id += this_modifier.modifier_id + ",";
              selected_modifiers_price += this_modifier.modifier_price + ",";
              modifiers_price = (
                parseFloat(modifiers_price) +
                parseFloat(this_modifier.modifier_price)
              ).toFixed(ir_precision);
            }

            let tax_information = "";
            // iterate over each item in the array
            tax_information = this_modifier.menu_taxes;
            tax_information = IsJsonString(tax_information)
              ? JSON.parse(tax_information)
              : "";
            draw_table_for_order_tmp_modifier_tax +=
              '<span class="item_vat_modifier ir_display_none item_vat_modifier_' +
              item_id +
              '" data-item_id="' +
              item_id +
              '"  data-modifier_price="' +
              this_modifier.modifier_price +
              '" data-modifier_id="' +
              modifier_id_custom +
              '" id="item_vat_percentage_table' +
              item_id +
              "" +
              modifier_id_custom +
              '">' +
              JSON.stringify(tax_information) +
              "</span>";
            i++;
          }
          let discount_value =
            this_item.menu_discount_value != ""
              ? this_item.menu_discount_value
              : "0.00";
          draw_table_for_hold_order +=
            '<div class="single_item_modifier" id="hold_order_for_item_' +
            this_item.food_menu_id +
            '">';
          draw_table_for_hold_order += '<div class="first_portion">';
          draw_table_for_hold_order +=
            '<span class="item_vat_hold ir_display_none" id="hold_item_vat_percentage_table' +
            this_item.food_menu_id +
            '">' +
            this_item.menu_vat_percentage +
            "</span>";
          draw_table_for_hold_order +=
            '<span class="item_discount_hold ir_display_none" id="hold_item_discount_table' +
            this_item.food_menu_id +
            '">' +
            this_item.discount_amount +
            "</span>";
          draw_table_for_hold_order +=
            '<span class="item_price_without_discount_hold ir_display_none" id="hold_item_price_without_discount_' +
            this_item.food_menu_id +
            '">' +
            this_item.menu_price_without_discount +
            "</span>";
          draw_table_for_hold_order +=
            '<div class="single_order_column_hold first_column column"><span id="hold_item_name_table_' +
            this_item.food_menu_id +
            '">' +
            this_item.menu_name +
            "</span></div>";
          draw_table_for_hold_order +=
            '<div class="single_order_column_hold second_column column">' +
            currency +
            ' <span id="hold_item_price_table_' +
            this_item.food_menu_id +
            '">' +
            this_item.menu_unit_price +
            "</span></div>";
          draw_table_for_hold_order +=
            '<div class="single_order_column_hold third_column column"><span id="hold_item_quantity_table_' +
            this_item.food_menu_id +
            '">' +
            this_item.qty +
            "</span></div>";
          draw_table_for_hold_order +=
            '<div class="single_order_column_hold forth_column column"><span class="hold_special_textbox" id="hold_percentage_table_' +
            this_item.food_menu_id +
            '">' +
            discount_value +
            "</span></div>";
          draw_table_for_hold_order +=
            '<div class="single_order_column_hold fifth_column column">' +
            currency +
            ' <span id="hold_item_total_price_table_' +
            this_item.food_menu_id +
            '">' +
            this_item.menu_price_with_discount +
            "</span></div>";
          draw_table_for_hold_order += "</div>";
          if (selected_modifiers != "") {
            draw_table_for_hold_order += '<div class="second_portion">';
            draw_table_for_hold_order +=
              '<span id="hold_item_modifiers_id_table_' +
              this_item.food_menu_id +
              '" class="ir_display_none">' +
              selected_modifiers_id +
              "</span>";
            draw_table_for_hold_order +=
              '<span id="hold_item_modifiers_price_table_' +
              this_item.food_menu_id +
              '" class="ir_display_none">' +
              selected_modifiers_price +
              "</span>";
            draw_table_for_hold_order +=
              '<div class="single_order_column_hold first_column column"><span  class="modifier_txt_custom"  id="hold_item_modifiers_table_' +
              this_item.food_menu_id +
              '">' +
              selected_modifiers +
              "</span></div>";
            draw_table_for_hold_order +=
              '<div class="single_order_column_hold second_column column">' +
              currency +
              ' <span id="hold_item_modifiers_price_table_' +
              this_item.food_menu_id +
              '">' +
              (modifiers_price * this_item.qty).toFixed(ir_precision) +
              "</span></div>";
            draw_table_for_hold_order += "</div>";
          }
          if (this_item.menu_note != "") {
            draw_table_for_hold_order += '<div class="third_portion">';
            draw_table_for_hold_order +=
              '<div class="single_order_column_hold first_column column modifier_txt_custom">' +
              note_txt +
              ': <span id="hold_item_note_table_' +
              this_item.food_menu_id +
              '">' +
              this_item.menu_note +
              "</span></div>";
            draw_table_for_hold_order += "</div>";
          }

          draw_table_for_hold_order += "</div>";
        }
        //add to top
        $(".item_modifier_details .modifier_item_details_holder").empty();
        $(".item_modifier_details .modifier_item_details_holder").prepend(
          draw_table_for_hold_order
        );

        $("#total_items_in_cart_hold").html(total_items_in_cart_with_quantity);
        let sub_total_discount_hold =
          response.sub_total_discount_value != ""
            ? response.sub_total_discount_value
            : "0.00";

        $("#sub_total_show_hold").html(
          Number(response.sub_total).toFixed(ir_precision)
        );
        $("#sub_total_hold").html(
          Number(response.sub_total).toFixed(ir_precision)
        );
        $("#total_item_discount_hold").html(
          response.total_item_discount_amount
        );
        $("#discounted_sub_total_amount_hold").html(
          response.sub_total_discount_amount
        );
        $("#sub_total_discount_hold").html(
          Number(sub_total_discount_hold).toFixed(ir_precision)
        );
        $("#sub_total_discount_amount_hold").html(
          Number(response.sub_total_with_discount).toFixed(ir_precision)
        );
        let total_vat_section_to_show = "";
        $.each(JSON.parse(response.sale_vat_objects), function (key, value) {
          total_vat_section_to_show +=
            '<span class="tax_field_order_details" id="tax_field_order_details_' +
            value.tax_field_id +
            '">' +
            value.tax_field_type +
            ": " +
            currency +
            ' <span class="tax_field_amount_order_details" id="tax_field_amount_order_details_' +
            value.tax_field_id +
            '">' +
            Number(value.tax_field_amount).toFixed(ir_precision) +
            "</span></span>";
        });
        $("#all_items_vat_hold").html(total_vat_section_to_show);
        $("#all_items_discount_hold").html(
          Number(response.total_discount_amount).toFixed(ir_precision)
        );
        $("#all_items_vat_hold").html(
          Number(response.vat).toFixed(ir_precision)
        );
        if (Number(response.delivery_charge_actual_charge)) {
          $("#delivery_charge_hold").html(response.delivery_charge);
        } else {
          $("#delivery_charge_hold").html((0).toFixed(ir_precision));
        }

        $("#total_payable_hold").html(
          Number(response.total_payable).toFixed(ir_precision)
        );

        $("#hold_table_name").empty();
        let html_table = response.orders_table_text;
        $("#hold_table_name").append(html_table);
      },
      error: function () {
        alert(a_error);
      },
    });
  });
  $(document).on("click", ".single_last_ten_sale", function () {
    //get sale id
    let sale_id = $(this).attr("id").substr(9);
    $(".single_last_ten_sale").css("background-color", "#ffffff");
    $(".single_last_ten_sale").attr("data-selected", "unselected");
    $(this).css("background-color", "#cfcfcf");
    $(this).attr("data-selected", "selected");
    //get all info of sale based on sale_id
    $.ajax({
      url: base_url + "Sale/get_all_information_of_a_sale_ajax",
      method: "POST",
      data: {
        sale_id: sale_id,
        csrf_irestoraplus: csrf_value_,
      },
      success: function (response) {
        response = JSON.parse(response);
        let order_type = "";
        let order_type_id = 0;
        let invoice_type = "";
          let tables_booked = response.orders_table_text;
        $("#last_10_waiter_id").html(response.waiter_id);
        $("#last_10_waiter_name").html(response.waiter_name);
        $("#last_10_customer_id").html(response.customer_id);
        $("#last_10_customer_name").html(response.customer_name);
        $("#last_10_table_id").html(response.table_id);
        $("#last_10_table_name").html(response.orders_table_text);
        $("#open_invoice_date_hidden").val(response.sale_date);

        $(".datepicker_custom")
          .datepicker({
            autoclose: true,
            format: "yyyy-mm-dd",
            startDate: "0",
            todayHighlight: true,
          })
          .datepicker("update", response.sale_date);

        if (response.order_type == 1) {
          order_type = "Dine In";
          order_type_id = 1;
          invoice_type = "A ";
        } else if (response.order_type == 2) {
          order_type = "Take Away";
          order_type_id = 2;
          invoice_type = "B ";
        } else if (response.order_type == 3) {
          order_type = "Delivery";
          order_type_id = 3;
          invoice_type = "C ";
        }
        $("#last_10_order_type").html(order_type);
        $("#last_10_order_type_id").html(order_type_id);
        $("#last_10_order_invoice_no").html(
          invoice_type + "" + response.sale_no
        );
        let draw_table_for_last_ten_sales_order = "";

        for (let key in response.items) {
          //construct div
          let this_item = response.items[key];

          let selected_modifiers = "";
          let selected_modifiers_id = "";
          let selected_modifiers_price = "";
          let modifiers_price = 0;
          let total_modifier = this_item.modifiers.length;
          let i = 1;
          let item_id = this_item.food_menu_id;
          let draw_table_for_order_tmp_modifier_tax = "";
          for (let mod_key in this_item.modifiers) {
            let this_modifier = this_item.modifiers[mod_key];
            let modifier_id_custom = this_modifier.modifier_id;
            //get selected modifiers
            if (i == total_modifier) {
              selected_modifiers += this_modifier.name;
              selected_modifiers_id += this_modifier.modifier_id;
              selected_modifiers_price += this_modifier.modifier_price;
              modifiers_price = (
                parseFloat(modifiers_price) +
                parseFloat(this_modifier.modifier_price)
              ).toFixed(ir_precision);
            } else {
              selected_modifiers += this_modifier.name + ", ";
              selected_modifiers_id += this_modifier.modifier_id + ",";
              selected_modifiers_price += this_modifier.modifier_price + ",";
              modifiers_price = (
                parseFloat(modifiers_price) +
                parseFloat(this_modifier.modifier_price)
              ).toFixed(ir_precision);
            }
            let tax_information = "";
            // iterate over each item in the array
            tax_information = this_modifier.menu_taxes;
            tax_information = IsJsonString(tax_information)
              ? JSON.parse(tax_information)
              : "";
            draw_table_for_order_tmp_modifier_tax +=
              '<span class="item_vat_modifier ir_display_none item_vat_modifier_' +
              item_id +
              '" data-item_id="' +
              item_id +
              '"  data-modifier_price="' +
              this_modifier.modifier_price +
              '" data-modifier_id="' +
              modifier_id_custom +
              '" id="item_vat_percentage_table' +
              item_id +
              "" +
              modifier_id_custom +
              '">' +
              JSON.stringify(tax_information) +
              "</span>";
            i++;
          }
          let discount_value =
            this_item.menu_discount_value != ""
              ? this_item.menu_discount_value
              : "0.00";
          draw_table_for_last_ten_sales_order +=
            '<div class="single_item_modifier" id="last_10_order_for_item_' +
            this_item.food_menu_id +
            '">';
          draw_table_for_last_ten_sales_order +=
            '<div class="first_portion">';
          draw_table_for_last_ten_sales_order +=
            '<span class="item_vat_hold ir_display_none" id="last_10_item_vat_percentage_table' +
            this_item.food_menu_id +
            '">' +
            this_item.menu_vat_percentage +
            "</span>";
          draw_table_for_last_ten_sales_order +=
            '<span class="item_discount_hold ir_display_none" id="last_10_item_discount_table' +
            this_item.food_menu_id +
            '">' +
            this_item.discount_amount +
            "</span>";
          draw_table_for_last_ten_sales_order +=
            '<span class="item_price_without_discount_hold ir_display_none" id="last_10_item_price_without_discount_' +
            this_item.food_menu_id +
            '">' +
            this_item.menu_price_without_discount +
            "</span>";
          draw_table_for_last_ten_sales_order +=
            '<div class="single_order_column_hold first_column column"><span id="last_10_item_name_table_' +
            this_item.food_menu_id +
            '">' +
            this_item.menu_name +
            "</span></div>";
          draw_table_for_last_ten_sales_order +=
            '<div class="single_order_column_hold second_column column">' +
            currency +
            ' <span id="last_10_item_price_table_' +
            this_item.food_menu_id +
            '">' +
            this_item.menu_unit_price +
            "</span></div>";
          draw_table_for_last_ten_sales_order +=
            '<div class="single_order_column_hold third_column column"><span id="last_10_item_quantity_table_' +
            this_item.food_menu_id +
            '">' +
            this_item.qty +
            "</span></div>";
          draw_table_for_last_ten_sales_order +=
            '<div class="single_order_column_hold forth_column column"><span class="hold_special_textbox" id="last_10_percentage_table_' +
            this_item.food_menu_id +
            '">' +
            discount_value +
            "</span></div>";
          draw_table_for_last_ten_sales_order +=
            '<div class="single_order_column_hold fifth_column column">' +
            currency +
            ' <span id="last_10_item_total_price_table_' +
            this_item.food_menu_id +
            '">' +
            this_item.menu_price_with_discount +
            "</span></div>";
          draw_table_for_last_ten_sales_order += "</div>";
          if (selected_modifiers != "") {
            draw_table_for_last_ten_sales_order +=
              '<div style="display: flex;justify-content: space-between;padding: 0px 35px 0px 14px;" class="second_portion">';
            draw_table_for_last_ten_sales_order +=
              '<span id="last_10_item_modifiers_id_table_' +
              this_item.food_menu_id +
              '" class="ir_display_none">' +
              selected_modifiers_id +
              "</span>";
            draw_table_for_last_ten_sales_order +=
              '<span id="last_10_item_modifiers_price_table_' +
              this_item.food_menu_id +
              '" class="ir_display_none">' +
              selected_modifiers_price +
              "</span>";
            draw_table_for_last_ten_sales_order +=
              '<div class="single_order_column_hold first_column column"><span class="modifier_txt_custom" id="last_10_item_modifiers_table_' +
              this_item.food_menu_id +
              '">' +
              selected_modifiers +
              "</span></div>";
            draw_table_for_last_ten_sales_order +=
              '<div class="single_order_column_hold second_column column">' +
              currency +
              ' <span id="last_10_item_modifiers_price_table_' +
              this_item.food_menu_id +
              '">' +
              modifiers_price +
              "</span></div>";
            draw_table_for_last_ten_sales_order += "</div>";
          }
          if (this_item.menu_note != "") {
            draw_table_for_last_ten_sales_order +=
              '<div class="third_portion">';
            draw_table_for_last_ten_sales_order +=
              '<div class="single_order_column_hold first_column column modifier_txt_custom" >' +
              note_txt +
              ': <span id="last_10_item_note_table_' +
              this_item.food_menu_id +
              '">' +
              this_item.menu_note +
              "</span></div>";
            draw_table_for_last_ten_sales_order += "</div>";
          }

          draw_table_for_last_ten_sales_order += "</div>";
        }
        //add to top
        $(".item_modifier_details .modifier_item_details_holder").empty();
        $(".item_modifier_details .modifier_item_details_holder").prepend(
          draw_table_for_last_ten_sales_order
        );
        let total_items_in_cart_with_quantity = 0;
        $(
          ".last_ten_sales_holder .modifier_item_details_holder .single_item_modifier .first_portion .third_column span"
        ).each(function (i, obj) {
          total_items_in_cart_with_quantity =
            parseInt(total_items_in_cart_with_quantity) +
            parseInt($(this).html());
        });
        $("#total_items_in_cart_last_10").html(
          total_items_in_cart_with_quantity
        );
        let sub_total_discount_last_10 =
          response.sub_total_discount_value != ""
            ? response.sub_total_discount_value
            : "0.00";
        $("#sub_total_show_last_10").html(response.sub_total);
        $("#sub_total_last_10").html(response.sub_total);
        $("#total_item_discount_last_10").html(
          response.total_item_discount_amount
        );
        $("#discounted_sub_total_amount_last_10").html(
          response.sub_total_discount_amount
        );
        $("#sub_total_discount_last_10").html(
          Number(sub_total_discount_last_10).toFixed(ir_precision)
        );
        $("#sub_total_discount_amount_last_10").html(
          response.sub_total_with_discount
        );
        let total_vat_section_to_show = "";
        $.each(JSON.parse(response.sale_vat_objects), function (key, value) {
          total_vat_section_to_show +=
            '<span class="tax_field_order_details" id="tax_field_order_details_' +
            value.tax_field_id +
            '">' +
            value.tax_field_type +
            ":  " +
            currency +
            ' <span class="tax_field_amount_order_details" id="tax_field_amount_order_details_' +
            value.tax_field_id +
            '">' +
            Number(value.tax_field_amount).toFixed(ir_precision) +
            "</span></span>";
        });
        $("#all_items_vat_last_10").html(total_vat_section_to_show);
        $("#all_items_discount_last_10").html(
          Number(response.total_discount_amount).toFixed(ir_precision)
        );

        if (Number(response.delivery_charge_actual_charge)) {
          $("#delivery_charge_last_10").html(response.delivery_charge);
        } else {
          $("#delivery_charge_last_10").html((0).toFixed(ir_precision));
        }

        $("#total_payable_last_10").html(
          Number(response.total_payable).toFixed(ir_precision)
        );
        $("#recent_sale_modal_details_vat").html(
          Number(response.vat).toFixed(ir_precision)
        );
      },
      error: function () {
        alert(a_error);
      },
    });
  });
  $(document).on("click", "#delete_all_hold_sales_button", function (e) {
    if ($(".single_hold_sale").length > 0) {
      swal(
        {
          title: warning + "!",
          text: are_you_delete_all_hold_sale,
          confirmButtonColor: "#3c8dbc",
          confirmButtonText: ok,
          showCancelButton: true,
        },
        function () {
          //delete all information of hold based on hold_id
          $.ajax({
            url: base_url + "Sale/delete_all_holds_with_information_by_ajax",
            method: "POST",
            data: {
              csrf_irestoraplus: csrf_value_,
            },
            success: function (response) {
              if (response == 1) {
                $(
                  ".hold_sale_modal_info_holder .detail_hold_sale_holder .hold_sale_left .detail_holder"
                ).empty();
              }

              $("#hold_waiter_id").html("");
              $("#hold_waiter_name").html("");
              $("#hold_customer_id").html("");
              $("#hold_customer_name").html("");
              $("#hold_table_id").html("");
              $("#hold_table_name").html("");
              $("#hold_order_type").html("");
              $("#hold_order_type_id").html("");
              $(".item_modifier_details .modifier_item_details_holder").empty();
              $("#total_items_in_cart_hold").html("0");
              $("#sub_total_show_hold").html(Number(0).toFixed(ir_precision));
              $("#sub_total_hold").html(Number(0).toFixed(ir_precision));
              $("#total_item_discount_hold").html(
                Number(0).toFixed(ir_precision)
              );
              $("#discounted_sub_total_amount_hold").html(
                Number(0).toFixed(ir_precision)
              );
              $("#sub_total_discount_hold").html("");
              $("#sub_total_discount_amount_hold").html(
                Number(0).toFixed(ir_precision)
              );
              $("#all_items_vat_hold").html(Number(0).toFixed(ir_precision));
              $("#all_items_discount_hold").html(
                Number(0).toFixed(ir_precision)
              );
              $("#all_items_vat_hold").html(Number(0).toFixed(ir_precision));
              $("#delivery_charge_hold").html(Number(0).toFixed(ir_precision));
              $("#total_payable_hold").html(Number(0).toFixed(ir_precision));

                UIkit.modal("#open-draft-sale-modal").hide();
            },
            error: function () {
              alert(a_error);
            },
          });
        }
      );
    } else {
        alertModal({modalName:"danger", normalTxt: no_hold});
    }
  });
  $(document).on("click", "#hold_delete_button", function (e) {
    if ($(".single_hold_sale[data-selected=selected]").length > 0) {
      let hold_id = $(".single_hold_sale[data-selected=selected]")
        .attr("id")
        .substr(5);
      swal(
        {
          title: warning + "!",
          text: sure_delete_this_hold,
          confirmButtonColor: "#3c8dbc",
          confirmButtonText: ok,
          showCancelButton: true,
        },
        function () {
          //delete all information of hold based on hold_id
          $.ajax({
            url: base_url + "Sale/delete_all_information_of_hold_by_ajax",
            method: "POST",
            data: {
              hold_id: hold_id,
              csrf_irestoraplus: csrf_value_,
            },
            success: function (response) {
              get_all_hold_sales();

              $("#hold_waiter_id").html("");
              $("#hold_waiter_name").html("");
              $("#hold_customer_id").html("");
              $("#hold_customer_name").html("");
              $("#hold_table_id").html("");
              $("#hold_table_name").html("");
              $("#hold_order_type").html("");
              $("#hold_order_type_id").html("");
              $(".item_modifier_details .modifier_item_details_holder").empty();
              $("#total_items_in_cart_hold").html("0");
              $("#sub_total_show_hold").html(Number(0).toFixed(ir_precision));
              $("#sub_total_hold").html(Number(0).toFixed(ir_precision));
              $("#total_item_discount_hold").html(
                Number(0).toFixed(ir_precision)
              );
              $("#discounted_sub_total_amount_hold").html(
                Number(0).toFixed(ir_precision)
              );
              $("#sub_total_discount_hold").html("");
              $("#sub_total_discount_amount_hold").html(
                Number(0).toFixed(ir_precision)
              );
              $("#all_items_vat_hold").html(Number(0).toFixed(ir_precision));
              $("#all_items_discount_hold").html(
                Number(0).toFixed(ir_precision)
              );
              $("#all_items_vat_hold").html(Number(0).toFixed(ir_precision));
              $("#delivery_charge_hold").html(Number(0).toFixed(ir_precision));
              $("#total_payable_hold").html(Number(0).toFixed(ir_precision));
              // $('#show_sale_hold_modal').slideUp(333);
            },
            error: function () {
              alert(a_error);
            },
          });
        }
      );
    } else {
      swal({
        title: warning + "!",
        text: please_select_hold_sale,
        confirmButtonText: ok,
        confirmButtonColor: "#b6d6f6",
      });
    }
  });
  $(document).on("click", "#last_ten_delete_button", function (e) {
    if ($(".single_last_ten_sale[data-selected=selected]").length > 0) {
      let sale_id = $(".single_last_ten_sale[data-selected=selected]")
        .attr("id")
        .substr(9);
      if (role != "Admin") {
        swal({
          title: warning,
          text: delete_only_for_admin,
          confirmButtonText: ok,
          confirmButtonColor: "#b6d6f6",
        });
        return false;
      } else {
        swal(
          {
            title: warning + "!",
            text: sure_delete_this_order,
            confirmButtonColor: "#3c8dbc",
            confirmButtonText: ok,
            showCancelButton: true,
          },
          function () {
            //delete all information of sale based on sale_id
            $.ajax({
              url: base_url + "Sale/cancel_particular_order_ajax",
              method: "POST",
              data: {
                sale_id: sale_id,
                csrf_irestoraplus: csrf_value_,
              },
              success: function (response) {
                $("#last_ten_" + sale_id).remove();
                $(".modifier_item_details_holder").empty();
                $("#last_10_order_type").html("");
                $("#last_10_order_invoice_no").html("");
                $("#last_10_waiter_name").html("");
                $("#last_10_customer_name").html("");
                $("#last_10_table_name").html("");
                $("#total_items_in_cart_last_10").html("0");
                $("#sub_total_show_last_10").html(
                  Number(0).toFixed(ir_precision)
                );
                $("#sub_total_discount_last_10").html(
                  Number(0).toFixed(ir_precision)
                );
                $("#all_items_discount_last_10").html(
                  Number(0).toFixed(ir_precision)
                );
                $("#recent_sale_modal_details_vat").html(
                  Number(0).toFixed(ir_precision)
                );
                $("#delivery_charge_last_10").html(
                  Number(0).toFixed(ir_precision)
                );
                $("#total_payable_last_10").html(
                  Number(0).toFixed(ir_precision)
                );
              },
              error: function () {
                alert(a_error);
              },
            });
          }
        );
      }
    } else {
      swal({
        title: warning + "!",
        text: please_select_an_order,
        confirmButtonText: ok,
        confirmButtonColor: "#b6d6f6",
      });
    }
  });
  $(document).on("click", "#last_ten_print_invoice_button", function (e) {
    $("#print_type").val(1);
    if ($(".single_last_ten_sale[data-selected=selected]").length > 0) {
      let sale_id = $(".single_last_ten_sale[data-selected=selected]")
        .attr("id")
        .substr(9);
      print_invoice(sale_id);
    } else {
      swal({
        title: warning + "!",
        text: please_select_an_order,
        confirmButtonText: ok,
        confirmButtonColor: "#b6d6f6",
      });
    }
  });
  $(document).on("click", "#print_last_invoice", function (e) {
    $("#print_type").val(1);
    let sale_id = $("#last_invoice_id").val();
    if (sale_id) {
      print_invoice(sale_id);
    } else {
      swal({
        title: warning + "!",
        text: txt_err_pos_4,
        confirmButtonText: ok,
        confirmButtonColor: "#b6d6f6",
      });
    }
  });
  $(document).on("click", "#hold_edit_in_cart_button", function (e) {
    let this_action = $(this);

    if ($(".single_hold_sale[data-selected=selected]").length > 0) {
        let hold_id = $(".single_hold_sale[data-selected=selected]")
            .attr("id")
            .substr(5);
      //get total items in cart
      let total_items_in_cart = $(".order_holder .single_order").length;

      if (total_items_in_cart > 0) {
        swal(
          {
            title: warning + "!",
            text: cart_not_empty,
            confirmButtonColor: "#3c8dbc",
            confirmButtonText: ok,
            showCancelButton: true,
          },
          function () {
            $(".order_holder").empty();
            clearFooterCartCalculation();
            get_details_of_a_particular_hold(hold_id, this_action);
             UIkit.modal("#open-draft-sale-modal").hide();
          }
        );
      } else {
        clearFooterCartCalculation();
        get_details_of_a_particular_hold(hold_id, this_action);
         UIkit.modal("#open-draft-sale-modal").hide();
      }
    } else {
        alertModal({modalName:"danger", normalTxt: please_select_hold_sale})
    }
  });
  $(document).on(
    "click",
    "#hold_sales_close_button,#hold_sales_close_button_cross",
    function (e) {
      $("#hold_waiter_id").html("");
      $("#hold_waiter_name").html("");
      $("#hold_customer_id").html("");
      $("#hold_customer_name").html("");
      $("#hold_table_id").html("");
      $("#hold_table_name").html("");
      $("#hold_order_type").html("");
      $("#hold_order_type_id").html("");

      $(".item_modifier_details .modifier_item_details_holder").empty();
      $("#total_items_in_cart_hold").html("0");
      $("#sub_total_show_hold").html(Number(0).toFixed(ir_precision));
      $("#sub_total_hold").html(Number(0).toFixed(ir_precision));
      $("#total_item_discount_hold").html(Number(0).toFixed(ir_precision));
      $("#discounted_sub_total_amount_hold").html(
        Number(0).toFixed(ir_precision)
      );
      $("#sub_total_discount_hold").html("");
      $("#sub_total_discount_amount_hold").html(
        Number(0).toFixed(ir_precision)
      );
      $("#all_items_vat_hold").html(Number(0).toFixed(ir_precision));
      $("#all_items_discount_hold").html(Number(0).toFixed(ir_precision));
      $("#all_items_vat_hold").html(Number(0).toFixed(ir_precision));
      $("#delivery_charge_hold").html(Number(0).toFixed(ir_precision));
      $("#total_payable_hold").html(Number(0).toFixed(ir_precision));

      $(this)
        .parent()
        .parent()
        .parent()
        .parent()
        .parent()
        .parent()
        .parent()
        .parent()
        .removeClass("active")
        .addClass("inActive");
      setTimeout(function () {
        $(".modal").removeClass("inActive");
      }, 1000);
      $(".pos__modal__overlay").fadeOut(300);
    }
  );

  function singleOrder(){
      $("#cancel_order_button").show();
      $(".check_exist_payment").remove();

      $("#print_type").val(1);

      let select_running_order_obj = $(".select_running_order").parent().hasClass("active");
      if (select_running_order_obj) {
          let sale_id = $(".select_running_order").parent().parent().find(".active").attr("data-id");
          $("#direct_order_id").val(sale_id);
          $.ajax({
              url: base_url + "Sale/get_all_information_of_a_sale_ajax",
              method: "POST",
              data: {
                  sale_id: sale_id,
                  csrf_irestoraplus: csrf_value_,
              },
              success: function (response) {
                  response = JSON.parse(response);
                  $("#finalize_total_payable").html(response.total_payable);
                  $("#selected_invoice_sale_customer").val(response.customer_id);
                  $("#pay_amount_invoice_input").val("0");
                  $("#payment_amount_pad").val("0");
                UIkit.modal(document.getElementById('finalize_order_modal')).show();

                // $("#finalize_order_modal").addClass("active");
                  // $(".pos__modal__overlay").fadeIn(200);
                  $("#open_invoice_date_hidden").val(response.sale_date);


                  $(".datepicker_custom")
                      .datepicker({
                          autoclose: true,
                          format: "yyyy-mm-dd",
                          startDate: "0",
                          todayHighlight: true,
                      })
                      .datepicker("update", response.sale_date);

                  $("#finalize_update_type").html("2"); //when 2 update payment method, close time and order_status to 3
                  calculate_create_invoice_modal();
              },
              error: function () {
                  alertModal({modalName:"danger", normalTxt: a_error});
              },
          });
      } else {
          alertModal({modalName:"danger", normalTxt: please_select_order_to_proceed});
      }
  }
    $(document).on("click","#order_details_create_invoice_close_order_button", function (e) {
        singleOrder();
        }
    );
    $(document).on("click",".single_pay", function (e) {
        singleOrder();
    });
    function get_total_vat_for_split(customer_id, obj_tax,total_row_amount) {

        let all_item_total_vat_amount = 0;
        let tax_object = {};
        let tax_name = [];

        let tax_type = Number($("#tax_type").val());
        let customer_gst_number = "";
        for (let m in window.customers) {
            let this_customer = window.customers[m];
            if (this_customer.customer_id == customer_id) {
                customer_gst_number = this_customer.gst_number;
            }
        }

        let customer_state_code =
            customer_gst_number != "" ? customer_gst_number.substr(0, 2) : "";
        let same_state = false;
        if (customer_state_code == gst_state_code) {
            same_state = true;
        }
        if (customer_state_code == "") {
            same_state = true;
        }
        let item_total_price = total_row_amount;
        let tax_information = (obj_tax);
        if (tax_information.length > 0) {
            for(let k in tax_information){
                if(tax_name.includes(tax_information[k].tax_field_name)){
                    let previous_value = tax_object["" + tax_information[k].tax_field_name];
                    let current_value  = 0;
                    let tax_type = Number($("#tax_type").val());
                    if(tax_type==1){
                        current_value = parseFloat((parseFloat(parseFloat(tax_information[k].tax_field_percentage)*parseFloat(item_total_price))/parseFloat(100)));
                    }else{
                        current_value = (parseFloat(item_total_price) - (parseFloat(item_total_price)/(1+(tax_information[k].tax_field_percentage/100)))).toFixed(ir_precision);
                    }

                    tax_object["" + tax_information[k].tax_field_name] = (parseFloat(previous_value)+ Number(current_value)).toFixed(ir_precision);
                }else{
                    tax_name.push(tax_information[k].tax_field_name);
                    let current_value  = 0;
                    let tax_type = Number($("#tax_type").val());

                    if(tax_type==1){
                        current_value = parseFloat((parseFloat(parseFloat(tax_information[k].tax_field_percentage)*parseFloat(item_total_price))/parseFloat(100)));
                    }else{
                        current_value = (parseFloat(item_total_price) - parseFloat(item_total_price)/(1+(tax_information[k].tax_field_percentage/100))).toFixed(ir_precision);
                    }
                    tax_object["" + tax_information[k].tax_field_name] = (Number(current_value)).toFixed(ir_precision);
                }
            }
        }
        return tax_object;
    }
    function get_total_vat_for_split_sale_table() {
        let customer_id = $("#selected_invoice_sale_customer").val();
        let all_item_total_vat_amount = 0;
        let tax_object = {};
        let tax_name = [];

        let customer_gst_number = "";
        for (let m in window.customers) {
            let this_customer = window.customers[m];
            if (this_customer.customer_id == customer_id) {
                customer_gst_number = this_customer.gst_number;
            }
        }

        let customer_state_code =
            customer_gst_number != "" ? customer_gst_number.substr(0, 2) : "";
        let same_state = false;
        if (customer_state_code == gst_state_code) {
            same_state = true;
        }
        if (customer_state_code == "") {
            same_state = true;
        }
        let this_action = '';
        let select_active_pagination = $(".active_pagination").parent().find(".active").attr("data-num");
        if (select_active_pagination && select_active_pagination!=undefined) {
            status = true;
            this_action = $("#set_active_div"+select_active_pagination);
        }

        /*$(".custom_li_split").each(function() {
            let row_div =  $(this).attr("data-row");
            if($("#myCheckbox_"+row_div).is(":checked")){
                this_action = $(this);
            }
        });*/

        this_action.find('.row_box_item').each(function() {
            let right_food_menu_id = Number($(this).attr('data-id'));
            let tax_menu_row = '';
            let tax_type = Number($("#tax_type").val());
            let item_total_price = Number($(this).find('.total_right_box').html());
            let selected_box_action = $(this).find(".split_modifier_name");
            $('.row_items_spit').each(function () {
                let left_food_menu_id = Number($(this).attr('data-id'));
                if (right_food_menu_id === left_food_menu_id) {
                    tax_menu_row = $(this).find('.menu_taxes').html();
                    if (tax_menu_row) {
                        let tax_information = JSON.parse(tax_menu_row);
                        if (tax_information.length > 0) {
                            for(let k in tax_information){
                                if(tax_name.includes(tax_information[k].tax_field_name)){
                                    let previous_value = tax_object["" + tax_information[k].tax_field_name];
                                    let current_value  = 0;
                                    if(tax_type==1){
                                        current_value = parseFloat((parseFloat(parseFloat(tax_information[k].tax_field_percentage)*parseFloat(item_total_price))/parseFloat(100)));
                                    }else{
                                        current_value = (parseFloat(item_total_price) - (parseFloat(item_total_price)/(1+(tax_information[k].tax_field_percentage/100)))).toFixed(ir_precision);
                                    }
                                    tax_object["" + tax_information[k].tax_field_name] = (parseFloat(previous_value)+ Number(current_value)).toFixed(ir_precision);
                                }else{
                                    tax_name.push(tax_information[k].tax_field_name);
                                    let current_value  = 0;
                                    if(tax_type==1){
                                        current_value = parseFloat((parseFloat(parseFloat(tax_information[k].tax_field_percentage)*parseFloat(item_total_price))/parseFloat(100)));
                                    }else{
                                        current_value = (parseFloat(item_total_price) - parseFloat(item_total_price)/(1+(tax_information[k].tax_field_percentage/100))).toFixed(ir_precision);
                                    }
                                    tax_object["" + tax_information[k].tax_field_name] = (Number(current_value)).toFixed(ir_precision);
                                }
                            }
                        }
                    }
                    //check tax for modifier
                    let mm = 0;
                    selected_box_action.each(function () {
                        let modifier_id_split = Number($(this).attr("data-modifier_id"));
                        item_total_price = Number($(this).parents().parents().find('.modifier_right_box').eq(mm).text());
                        mm++;
                        for (let i = 0; i < window.only_modifiers.length; i++) {
                            // look for the entry with a matching `id` value
                            if (Number(only_modifiers[i].menu_modifier_id) == modifier_id_split) {
                                tax_menu_row = only_modifiers[i].tax_information;
                                if (tax_menu_row) {
                                    let tax_information = JSON.parse(tax_menu_row);
                                    if (tax_information.length > 0) {
                                        for(let k in tax_information){
                                            if(tax_name.includes(tax_information[k].tax_field_name)){
                                                let previous_value = tax_object["" + tax_information[k].tax_field_name];
                                                let current_value  = 0;
                                                if(tax_type==1){
                                                    current_value = parseFloat((parseFloat(parseFloat(tax_information[k].tax_field_percentage)*parseFloat(item_total_price))/parseFloat(100)));
                                                }else{
                                                    current_value = (parseFloat(item_total_price) - (parseFloat(item_total_price)/(1+(tax_information[k].tax_field_percentage/100)))).toFixed(ir_precision);
                                                }
                                                tax_object["" + tax_information[k].tax_field_name] = (parseFloat(previous_value)+ Number(current_value)).toFixed(ir_precision);
                                            }else{
                                                tax_name.push(tax_information[k].tax_field_name);
                                                let current_value  = 0;
                                                if(tax_type==1){
                                                    current_value = parseFloat((parseFloat(parseFloat(tax_information[k].tax_field_percentage)*parseFloat(item_total_price))/parseFloat(100)));
                                                }else{
                                                    current_value = (parseFloat(item_total_price) - parseFloat(item_total_price)/(1+(tax_information[k].tax_field_percentage/100))).toFixed(ir_precision);
                                                }
                                                tax_object["" + tax_information[k].tax_field_name] = (Number(current_value)).toFixed(ir_precision);
                                            }
                                        }
                                    }
                                }
                            }
                        }

                    });

                }
            });
        });

        return tax_object;
    }
    function generateSplitSaleNo(p_sale_id) {

        $.ajax({
            url: base_url + "Sale/get_all_information_of_a_sale_ajax",
            method: "POST",
            data: {
                sale_id: p_sale_id,
                csrf_irestoraplus: csrf_value_,
            },
            success: function (response) {
                response = JSON.parse(response);
                if(response !== null) {
                    $(".total_split_sale").append('<span>1</span>');
                }
            },
            error: function () {
                alert(a_error);
            },
        });
    }
    function getCustomers(){
        $.ajax({
            url: base_url + "Sale/get_all_customers_for_this_user",
            method: "GET",
            success: function (response) {
                let data = JSON.parse(response);
                $('.customer_lists_parent').pagination({
                    showNext: false,
                    showPrevious: false,
                    showPageNumbers: true,
                    pageRange: null,
                    pageSize: 16,
                    dataSource: data,
                    ajax: {
                        beforeSend: function () {
                            $('.customer_lists_parent').html('Loading data...');
                        }
                    },
                    callback: function (response, pagination) {
                        let data_html = "";
                        let walk_in_customer = $("#walk_in_customer").val();
                        for (let key in response) {
                            let phone = '';
                            let active_customer  = '';
                            if(response[key].id==1 && walk_in_customer==1){
                                active_customer = 'active_customer';
                            }
                            if(response[key].phone){
                                phone ='('+response[key].phone+')';
                            }
                            data_html += '<div><button style="height: 77px;" id="customer_active_'+response[key].id+'" class="secondary-btn get_active_customer '+active_customer+'" data-id="'+response[key].id+'">'+response[key].name+' '+phone+'</button></div>';
                        }
                        $(".customer_lists").html(data_html);
                    }
                })
            },
            error: function () {

            },
        });
    }
    $(document).on("click", ".get_customers", function () {
        getCustomers();
    });

    function cal_split_modal_left(){
        let tax_total = 0;
        let sub_total = 0;

        $(".row_items_spit").each(function() {
            let sale_row_id = Number($(this).attr('id').substr(15));

            let tmp_added_qty = 0;
            $(".qty_right_box_"+sale_row_id).each(function() {
                let added_qty = Number($(this).html());
                if(!sale_row_id){
                    added_qty = 0;
                }
                if(isNaN(added_qty)){
                    added_qty = 0;
                }
                tmp_added_qty+=added_qty;
            });


            let left_added_qty = Number($("#row_items_spit_"+sale_row_id).find('.item_qty_split').attr('data-added_qty_original'));
            if(!sale_row_id){
                left_added_qty = 0;
            }
            if(isNaN(left_added_qty)){
                left_added_qty = 0;
            }
            if(sale_row_id){
                $("#row_items_spit_"+sale_row_id).find('.item_qty_split').html(left_added_qty - tmp_added_qty);
            }

            let item_qty_split = Number($(this).find('.item_qty_split').html());
            let split_modifier_total = 0;
            let split_modifier_tax = 0;
            $(this).find(".split_modifier_price").each(function() {
                let per_unit_price = Number($(this).attr("data-per_unit_price"));
                let split_tax_per_unit = Number($(this).attr("data-split_tax_per_unit"));
                split_modifier_total+=(per_unit_price*item_qty_split);
                split_modifier_tax += (split_tax_per_unit * item_qty_split);
                $(this).html((per_unit_price*item_qty_split).toFixed(ir_precision));
            });

            let item_price_split = Number($(this).find('.item_price_split').html());

            let item_dis_split = Number($(this).find('.item_dis_split').html());

            $(this).find('.item_total_split').html(Number((item_price_split * item_qty_split) - item_dis_split).toFixed(ir_precision));
            let item_total_split = Number($(this).find('.item_total_split').html());
            sub_total+=item_total_split+split_modifier_total;
            let item_vat_per_unit = Number($(this).attr('data-tax_per_unit'));
            if(isNaN(item_vat_per_unit)) {
                item_vat_per_unit = 0;
            }

            tax_total+=(item_vat_per_unit*item_qty_split) + (split_modifier_tax);
        });

        $("#split_left_sub_total").html(sub_total.toFixed(ir_precision));
        $("#split_left_tax").html((tax_total).toFixed(ir_precision));
        let split_left_discount = Number($("#split_left_discount").html());
        let split_left_charge = Number($("#split_left_charge").html());
        let tax_type = Number($("#tax_type").val());
        if(tax_type!==1){
            tax_total = 0;
        }
        let total_payable  = sub_total + tax_total + split_left_charge - split_left_discount;
        $("#split_left_total_payable").html((total_payable).toFixed(ir_precision));
    }
    function split_bill(){
        let select_running_order_obj = $(".select_running_order").parent().hasClass("active");
        if (select_running_order_obj) {
            $("#sub_total_discount_finalize").val('');
            let sale_id = $(".select_running_order").parent().parent().find(".active").attr("data-id");
          $.ajax({
            url: base_url + "Sale/get_all_information_of_a_sale_ajax",
            method: "POST",
            data: {
                sale_id: sale_id,
                csrf_irestoraplus: csrf_value_,
            },
            success: function (response) {
                 response = JSON.parse(response);
                if(response !== null) {
                    $(".current_object_tables").html(JSON.stringify(response.orders_table));
                    $(".current_text_tables").html(response.orders_table_text);
                    $(".customer_name_spit_hidden").val(response.customer_name);

                    $("#open_invoice_date_hidden").val(response.sale_date);
                    $(".datepicker_custom")
                        .datepicker({
                            autoclose: true,
                            format: "yyyy-mm-dd",
                            startDate: "0",
                            todayHighlight: true,
                        })
                        .datepicker("update", response.sale_date);

                    let html_row = '';
                    let j =1;
                    for (let key in response.items) {
                        //construct div
                        let this_item = response.items[key];
                        let tax_per_unit = 0;

                        $.each((this_item.item_vat), function(key, value){
                            tax_per_unit +=Number(value.item_vat_amount_for_unit_item);
                        });

                        let vat_amount = collect_tax == "Yes" ? get_total_vat_for_split(response.customer_id,JSON.parse(this_item.menu_taxes),this_item.menu_price_with_discount) : null;

                        let total_vat_amount = 0;
                        $.each(vat_amount, function (key, value) {
                            let vat_tmp = 0;
                            if (value && value != "NaN") {
                                vat_tmp = Number(value).toFixed(ir_precision);
                            }
                            total_vat_amount = (parseFloat(total_vat_amount) + parseFloat(vat_tmp));
                        });
                        let tax_per_unit_tmp = (Number(total_vat_amount)/(Number(this_item.qty))).toFixed(ir_precision);

                        let split_menu_combo_items =  '';
                        let split_menu_combo_items_plan_text =  '';
                        let split_menu_note =  '';

                        let split_modifier_name = '';
                        let split_modifier_price = '';
                        let modifier_ids_custom = [];
                        let modifier_names_custom = [];
                        let modifier_prices_custom = [];

                        let total_modifier = this_item.modifiers.length;
                        let i = 1;
                        for (let mod_key in this_item.modifiers) {
                            let this_modifier = this_item.modifiers[mod_key];

                            let tmp_mod_name_m_n = this_modifier.name;
                            let tmp_mod_name_m_p = Number(this_modifier.modifier_price).toFixed(ir_precision);
                            let split_vat_amount = collect_tax == "Yes" ? get_total_vat_for_split(response.customer_id,JSON.parse(this_modifier.menu_taxes),(Number(tmp_mod_name_m_p) * Number(this_item.qty))) : null;

                            let total_split_vat_amount = 0;
                            $.each(split_vat_amount, function (key, value) {
                                let vat_tmp = 0;
                                if (value && value != "NaN") {
                                    vat_tmp = Number(value).toFixed(ir_precision);
                                }
                                total_split_vat_amount = (parseFloat(total_split_vat_amount) + parseFloat(vat_tmp));
                            });

                            let split_tax_per_unit_tmp = (Number(total_split_vat_amount)/Number(this_item.qty)).toFixed(ir_precision);

                            split_modifier_name += '<br><span data-modifier_id="'+this_modifier.modifier_id+'" class="split_modifier_name">' + this_modifier.name + "</span>";
                            split_modifier_price +='<br><span  data-split_tax_per_unit="'+split_tax_per_unit_tmp+'"  data-per_unit_price="'+this_modifier.modifier_price+'" class="split_modifier_price">' + this_modifier.modifier_price + "</span>";

                        }

                        let is_free_item = '';
                        let tmp_j = 0;
                        if(Number(this_item.is_free)){
                            is_free_item = 'is_free_bg';
                            tmp_j = (j-1);
                        }
                        let discount_value =
                            this_item.discount_amount != ""
                                ? this_item.discount_amount
                                : 0;
                        let discount_per_unit = (Number(discount_value)/Number(this_item.qty));



                        html_row+='<tr class="row_items_spit focus-cart" id="row_items_spit_'+tmp_j+'" data-sale_row_id="'+j+'" data-tax_per_unit="'+tax_per_unit_tmp+'" data-id="'+this_item.food_menu_id+'">\n' +
                            '   <td style="padding: 4px;"><div class="ir_display_none menu_taxes">'+(this_item.menu_taxes)+'</div><span class="item_name_split" data-combo_text="'+split_menu_combo_items+'"  data-combo_text_plan_text="'+split_menu_combo_items_plan_text+'" data-main_name="'+this_item.menu_name+'">'+this_item.menu_name+''+split_menu_combo_items+''+split_modifier_name+'</span></td>\n' +
                            '   <td class="text_right">&nbsp; <span class="item_price_split">'+Number(this_item.menu_unit_price).toFixed(ir_precision)+'</span></td>\n' +
                            '   <td>&nbsp; <span id="left_qty_split_'+this_item.food_menu_id+'" data-added_qty_original="'+this_item.qty+'" class="item_qty_split check_amount_required">'+this_item.qty+'</span></td>\n' +
                            '   <td class="text_right">&nbsp; <span id="item_dis_split_'+this_item.food_menu_id+'" data-discount_per_unit="'+discount_per_unit+'" class="item_dis_split">'+Number(discount_value).toFixed(ir_precision)+'</span></td>\n' +
                            '   <td class="text_right">&nbsp; <span class="item_total_split">'+Number(this_item.menu_price_with_discount).toFixed(ir_precision)+'</span>'+split_modifier_price+'</td>\n' +
                            '   <td class="text_right" style="text-align: right">&nbsp; <b class="btn_minus_plus"><i data-is_free_item="'+this_item.is_free+'" class="fa fa-minus row_items_spit_minus '+is_free_item+'"></i> &nbsp;<i data-is_free_item="'+this_item.is_free+'" class="fa fa-plus row_items_spit_plus '+is_free_item+'"></i></b></td>\n' +
                            '</tr>';
                        j++;
                    }
                    $("#split_modal_tbl_body").html(html_row);
                    $("#selected_invoice_sale_customer").val(response.customer_id);
                    $("#select_waiter").val(response.waiter_id);
                    $("#maximum_spit").html(response.number_of_guest);
                    $("#spit_modal_input").attr('max',response.number_of_guest);
                    $("#spit_modal_input").val(response.number_of_guest);
                    $("#split_order_date_time").val(response.date_time);
                    $("#split_charge_type").val(response.charge_type);
                    $("#split_order_time").val(response.order_time);
                    $("#split_left_discount").html(Number(response.sub_total_discount_amount).toFixed(ir_precision));
                    $("#split_left_charge").html(Number(response.delivery_charge_actual_charge).toFixed(ir_precision));
                    $("#split_left_discount").attr('data-original_left_amount',Number(response.sub_total_discount_amount).toFixed(ir_precision));
                    $("#split_left_charge").attr('data-original_left_amount',Number(response.delivery_charge_actual_charge).toFixed(ir_precision));
                    /*$("#order_split_modal").addClass("active");
                    $(".pos__modal__overlay").fadeIn(200);*/
                    cal_split_modal_left();

                }
            },
            error: function () {
                alert(a_error);
            },
        });
        } else {
            alertModal({modalName:"danger", normalTxt: please_select_open_order})
        }
    }

    $(document).on("click", "#add_spit_box", function (e) {
        let maximum_spit = Number($("#maximum_spit").html());
        let spit_modal_input = Number($("#spit_modal_input").val());
        let customer_name_spit_hidden = ($("#customer_name_spit_hidden").val());
        if(spit_modal_input>maximum_spit){
            let maximum_spit_is = $("#maximum_spit_is").val();
            alertModalCustom({modalName:"danger_update", normalTxt: (maximum_spit_is+" "+maximum_spit),re_open_modal:"target: #open-split-bill-modal"})
        }else{
            let html = '';
            let counter_checker = 1;
            let customer_info = $("#walk_in_customer").html();
            let div_split_arr = [];
            let data_html = "";
            let html_li_pagination = '';
            let div_display = 'block';
            for(let i=1;i<=spit_modal_input;i++){
              if(i==1){
                html_li_pagination+='<li class="active_pagination paginationjs-page J-paginationjs-page active" data-num="'+i+'"><a>1</a></li>';
              }else{
                  div_display = 'none';
                html_li_pagination+='<li class="active_pagination paginationjs-page J-paginationjs-page" data-num="'+i+'"><a>1</a></li>';
              }
                div_split_arr.push(i);
                let is_checked = '';
                let is_class = '';
                if(counter_checker==1){
                    counter_checker++;
                    is_checked = 'checked';
                    is_class = 'active';
                }
                html+='<li class="custom_li_split" data-row="'+i+'">\n' +
                    '                                        <i class="fas fa-times removeItem remove_box_right '+is_class+'"></i><input type="checkbox" '+is_checked+' value="'+i+'" class="class_check_split"  id="myCheckbox_'+i+'" />\n' +
                    '                                        <label class="label_c_split" for="myCheckbox_'+i+'">\n' +
                    '                                            <select class="form-control select2 split_customer_id"  style="width: 100%">\n' + customer_info +
                    '                                            </select>\n' +
                    '                                            <table class="spit_tb_tr" style="width: 100%">\n' +
                    '                                            </table>\n' +
                    '                                            <div class="table_wrapper">\n' +
                    '                                                <table class="split_tbl_width">\n' +
                    '    <tr>\n' +
                    '        <td>&nbsp;'+inv_sub_total+': <span class="subtotal_right_box">'+(0).toFixed(ir_precision)+'</span> </td>\n' +
                    '        <td>&nbsp;&nbsp;'+inv_discount+': <span class="discount_right_box" data-added_amount="0">'+(0).toFixed(ir_precision)+'</span><span class="remove_inline_right_split remove_inline_right_split_discount">X</span></td>\n' +
                    '        <td>&nbsp;&nbsp;'+inv_vat+': <span class="tax_right_box" >'+(0).toFixed(ir_precision)+'</span></td>\n' +
                    '    </tr>\n' +
                    '    <tr>\n' +
                    '        <td>&nbsp;'+inv_charge+': <span class="charge_right_box"  data-added_amount="0">'+(0).toFixed(ir_precision)+'</span><span class="remove_inline_right_split remove_inline_right_split_charge">X</span></td>\n' +
                    '        <td>&nbsp;&nbsp;'+inv_total_payable+': <span class="total_payable_right_box"  data-added_amount="0">'+(0).toFixed(ir_precision)+'</span></td>\n' +
                    '    </tr>\n' +
                    '</table><button type="button" class="goto_to_payment bg__green"><i class="fas fa-file-invoice"></i>  '+inv_checkout+'</button>\n' +
                    '                                            </div>\n' +
                    '                                        </label>\n' +
                    '                                    </li>';


                data_html += '<div style="display:'+div_display+'" id="set_active_div'+i+'" class="main-content-box set_active_div">\n' +
                    '                                        <h3 class="title">'+customer_name_spit_hidden+'</h3>\n' +
                    '                                        <div class="table">\n' +
                    '                                            <header>\n' +
                    '                                                <p><b>Item</b></p>\n' +
                    '                                                <p><b>Price</b></p>\n' +
                    '                                                <p><b>Qty</b></p>\n' +
                    '                                                <p><b>Disc</b></p>\n' +
                    '                                                <p><b>Total</b></p>\n' +
                    '                                            </header>\n' +
                    '                                            <div class="body spit_tb_tr">\n' +
                    '                                                <!-- End Single Item -->\n' +
                    '                                            </div>\n' +
                    '\n' +
                    '                                            <ul class="footer">\n' +
                    '                                                <li><b>'+inv_sub_total+': <span class="subtotal_right_box">'+(0).toFixed(ir_precision)+'</span></b></li>\n' +
                    '                                                <li><b>'+inv_discount+': <span class="discount_right_box" data-added_amount="0">'+(0).toFixed(ir_precision)+'</span><span class="remove_inline_right_split remove_inline_right_split_discount">X</span></b></li>\n' +
                    '                                                <li><b>'+inv_vat+': <span class="tax_right_box" >'+(0).toFixed(ir_precision)+'</span></b></li>\n' +
                    '                                                <li><b>'+inv_charge+': <span class="charge_right_box"  data-added_amount="0">'+(0).toFixed(ir_precision)+'</span><span class="remove_inline_right_split remove_inline_right_split_charge">X</span></b></li>\n' +
                    '                                                <li><b>'+inv_total_payable+': <span class="total_payable_right_box"  data-added_amount="0">'+(0).toFixed(ir_precision)+'</span></b></li>\n' +
                    '                                            </ul>\n' +
                    '                                        </div>\n' +
                    '                                    </div>';

            }
            $(".custom_ul_split").html(html);

            $(".split_div").html(data_html);
            let pagination_html = '<div class="paginationjs">\n' +
                '                                    <div class="paginationjs-pages">\n' +
                '                                        <ul>\n' +html_li_pagination+
                '                                        </ul>\n' +
                '                                    </div>\n' +
                '                                </div>';

            $(".pagination_custom").html(pagination_html);

            $('.select2').select2();


            split_bill();
        }
    });
    body_el.on('click','.custom_li_split', function (e) {
        body_el.find('.custom_li_split .removeItem').removeClass('active');
        $(this).find('.removeItem').addClass('active');
    });
    $(document).on("click", ".custom_li_split", function (e) {
        let row =  $(this).attr("data-row");
        $(".class_check_split").prop('checked',false);
        $("#myCheckbox_"+row).prop('checked',true);
    });
    function setAnimationForSpit(this_action,destination_action) {
        let imgToDrag = this_action.eq(0);
        let cart = destination_action.find(".row_box_item");
        if (imgToDrag) {
            let top_ = Number(imgToDrag.offset().top);

            let imgClone = imgToDrag
                .clone()
                .offset({
                    top: top_,
                    left: imgToDrag.offset().left,
                })
                .css({
                    opacity: "0.8",
                    position: "absolute",
                    height: "150px",
                    width: "150px",
                    zIndex: "1111111111",
                })
                .appendTo($("body"))
                .animate(
                    {
                        top: cart.offset().top + 10,
                        left: cart.offset().left + 10,
                        width: "75px",
                        height: "75px",
                    },
                    1000,
                    "easeInOutExpo"
                );
            imgClone.animate(
                {
                    width: 0,
                    height: 0,
                },
                function () {
                    $(this).detach();
                }
            );
        }
    }
    function setAnimationForSpitMinus(this_action,destination_action,destination_action1,current_qty) {
        let cart = destination_action;
        let imgToDrag = this_action.eq(0);

        if (imgToDrag) {
            let top_ = Number(imgToDrag.offset().top);

            let imgClone = imgToDrag
                .clone()
                .offset({
                    top: top_,
                    left: imgToDrag.offset().left,
                })
                .css({
                    opacity: "0.8",
                    position: "absolute",
                    height: "150px",
                    width: "150px",
                    zIndex: "1000",
                })
                .appendTo($("body"))
                .animate(
                    {
                        top: cart.offset().top + 10,
                        left: cart.offset().left + 10,
                        width: "75px",
                        height: "75px",
                    },
                    1000,
                    "easeInOutExpo"
                );
            imgClone.animate(
                {
                    width: 0,
                    height: 0,
                },
                function () {
                    $(this).detach();
                }
            );
        }
    }
    function cal_split_modal(){
        let status = false;
        let this_action = '';
        let select_active_pagination = $(".active_pagination").parent().find(".active").attr("data-num");
        if (select_active_pagination && select_active_pagination!=undefined) {
            status = true;
            this_action = $("#set_active_div"+select_active_pagination);
        }
        /*
        $(".custom_li_split").each(function() {
            let row_div =  $(this).attr("data-row");
            if($("#myCheckbox_"+row_div).is(":checked")){
                status = true;
                this_action = $(this);
            }
        });*/

        let total_right_box_dis = 0;
        this_action.find('.dis_right_box').each(function() {
            let inline_total_tr_dis = Number($(this).html());
            total_right_box_dis+=inline_total_tr_dis;
        });

        let total_right_box_sub_total = 0;
        this_action.find('.total_right_box').each(function() {
            let inline_total_tr = Number($(this).html());
            total_right_box_sub_total+=inline_total_tr;
            let tmp_modifier_price = 0;
            $(this).parent().find('.modifier_right_box').each(function() {
                tmp_modifier_price += Number($(this).html());
            });

        });

        let total_right_box_tax_per_unit = 0;
        this_action.find('.row_box_item').each(function() {
            let inline_total_tr_tax = Number($(this).attr('data-total_vat_per_unit'));
            let inline_total_tr_tax_qty = Number($(this).find('.qty_right_box').html());
            let tmp_modifier_tax = 0;

            $(this).find('.modifier_right_box').each(function() {
                let modifier_tax = Number($(this).attr('data-per_tax_modifier_right_box'));
                tmp_modifier_tax+=(modifier_tax*inline_total_tr_tax_qty);
                let modifier_price = Number($(this).attr('data-per_unit_modifier_right_box'));
                $(this).html((modifier_price*inline_total_tr_tax_qty).toFixed(ir_precision));
                total_right_box_sub_total+=(modifier_price*inline_total_tr_tax_qty);
            });


            total_right_box_tax_per_unit+=(inline_total_tr_tax*inline_total_tr_tax_qty)+(tmp_modifier_tax);
        });

        let previous_added_amount_discount_right_box = Number(this_action.find('.discount_right_box').attr('data-added_amount'));
        let previous_added_amount_charge_right_box = Number(this_action.find('.charge_right_box').attr('data-added_amount'));
        this_action.find('.discount_right_box').html((Number(total_right_box_dis)+ previous_added_amount_discount_right_box).toFixed(ir_precision));
        this_action.find('.subtotal_right_box').html((Number(total_right_box_sub_total)).toFixed(ir_precision));
        this_action.find('.tax_right_box').html((Number(total_right_box_tax_per_unit)).toFixed(ir_precision));
        this_action.find('.charge_right_box').html((previous_added_amount_charge_right_box).toFixed(ir_precision));
        let discount_attr = Number(this_action.find('.discount_right_box').attr('data-added_amount'));
        let inline_tax = Number(this_action.find('.tax_right_box').html());
        let tax_type = Number($("#tax_type").val());
        if(tax_type!==1){
            inline_tax = 0;
        }
        let total_payable_right_box = Number(this_action.find('.subtotal_right_box').html()) - discount_attr + inline_tax + Number(this_action.find('.charge_right_box').html());

        this_action.find('.total_payable_right_box').html((total_payable_right_box).toFixed(ir_precision));

        let vat_amount_tmp = collect_tax == "Yes" ? get_total_vat_for_split_sale_table() : null;

        let html_modal = "";
        let total_tax_custom = 0;
        $.each(vat_amount_tmp, function (key, value) {
            let row_id = 1;
            let key_value = key;
            html_modal +="<div class='tax_field row set_active_tax' data-tax_field_id='" +
                row_id +
                "'  data-tax_field_type='" +
                key_value +
                "'  data-tax_field_amount='" +
                value +
                "'><div>"+key_value+"</div><div>"+Number(value).toFixed(ir_precision)+"</div></div>";
        });
        $("#tax_details").html(html_modal);
    }
    function hide_current_modal(obj){
        obj.removeClass("active")
            .addClass("inActive");
        setTimeout(function () {
            $(".modal").removeClass("inActive");
        }, 1000);
        $(".pos__modal__overlay").fadeOut(300);
    }
    $(document).on("click", ".row_items_spit_plus", function (e) {
        let id = Number($(this).parent().parent().parent().attr('data-id'));
        let sale_row_id = Number($(this).parent().parent().parent().attr('data-sale_row_id'));
        let name = $(this).parent().parent().parent().find('.item_name_split').html();
        let main_name = $(this).parent().parent().parent().find('.item_name_split').attr('data-main_name');
        let combo_text_plan_text = $(this).parent().parent().parent().find('.item_name_split').attr('data-combo_text_plan_text');
        let combo_text = $(this).parent().parent().parent().find('.item_name_split').attr('data-combo_text');

        let qty = Number($(this).parent().parent().parent().find('.item_qty_split').html());
        let item_price_split = ($(this).parent().parent().parent().find('.item_price_split').html());
        let discount_per_unit = Number($(this).parent().parent().parent().find('.item_dis_split').attr('data-discount_per_unit'));
        let tax_per_unit = Number($(this).parent().parent().parent().attr('data-tax_per_unit'));
        let quantity_not_available = $("#quantity_not_available").val();
        if(qty>0){
            let status = false;
            let this_action = '';
            let select_active_pagination = $(".active_pagination").parent().find(".active").attr("data-num");
            if (select_active_pagination && select_active_pagination!=undefined) {
                status = true;
                this_action = $("#set_active_div"+select_active_pagination);
            }
           /* $(".custom_li_split").each(function() {
                let row_div =  $(this).attr("data-row");
                if($("#myCheckbox_"+row_div).is(":checked")){
                    status = true;
                    this_action = $(this);
                }
            });*/
            if(status==true){
                let tmp_qty_minus = (qty-1);
                $(this).parent().parent().parent().find('.item_qty_split').html(tmp_qty_minus);

                let inline_right_box_sub_total = (Number(item_price_split) - Number(discount_per_unit)).toFixed(ir_precision);

                let modifier_right_box = '';
                $(this).parent().parent().parent().find('.split_modifier_price').each(function() {
                    let per_tax_modifier_right_box= $(this).attr('data-split_tax_per_unit');
                    let per_unit_modifier_right_box= $(this).attr('data-per_unit_price');
                    modifier_right_box+='<br><span class="modifier_right_box"  data-per_tax_modifier_right_box="'+per_tax_modifier_right_box+'" data-per_unit_modifier_right_box="'+per_unit_modifier_right_box+'">'+per_unit_modifier_right_box+'</span>';
                });


                let html = '   <tr class="row_box_item" data-total_vat_per_unit="'+tax_per_unit+'" data-id="'+id+'">\n' +
                    '                                                    <td class="padding_5 name_right_box" data-combo_text="'+combo_text_plan_text+'"  data-main_name="'+main_name+'">'+name+'</td>\n' +
                    '                                                    <td class="price_right_box">'+item_price_split+'</td>\n' +
                    '                                                    <td class="qty_right_box">1</td>\n' +
                    '                                                    <td data-dis_per_right_box="'+discount_per_unit+'" class="dis_right_box">'+(discount_per_unit).toFixed(ir_precision)+'</td>\n' +
                    '                                                    <td><span class="total_right_box">'+inline_right_box_sub_total+'</span>'+modifier_right_box+'</td>\n' +
                    '                                                    <td class="last_td"><i data-sale_row_id="'+sale_row_id+'" class="fas fa-times-circle remove_spit_box"></i></td>\n' +
                    '                                                </tr>';



                let html_update = '<div class="row focus-btn row_box_item" data-sale_row_id="'+sale_row_id+'"   data-total_vat_per_unit="'+tax_per_unit+'" data-id="'+id+'">\n' +
                    '                                                    <p class="name name_right_box"  data-combo_text="'+combo_text_plan_text+'"  data-main_name="'+main_name+'">\n' + name +
                    '                                                    </p>\n' +
                    '                                                    <p class="price_right_box">'+item_price_split+'</p>\n' +
                    '                                                    <p class="qty_right_box">1</p>\n' +
                    '                                                    <p data-dis_per_right_box="'+discount_per_unit+'" class="dis_right_box">'+(discount_per_unit).toFixed(ir_precision)+'</p>\n' +
                    '                                                    <p><span class="total_right_box">'+inline_right_box_sub_total+'</span>'+modifier_right_box+'</p>\n' +
                    '                                                </div>';



                let status_box_item = false;
                let increase_action = '';
                let current_qty = 0;
                let action_tr_last = '';
                this_action.find('.row_box_item').each(function() {
                    let box_row_id =  Number($(this).attr("data-id"));
                    if(box_row_id===id){
                        action_tr_last = $(this);
                        current_qty = Number(action_tr_last.find('.qty_right_box').html());
                        status_box_item = true;
                    }

                });

                let current_qty_split = 0;
                if(status_box_item==true){
                    let tmp_discount = Number(discount_per_unit*(current_qty+1));
                    let tmp_total = (Number(item_price_split*(current_qty+1)) - tmp_discount).toFixed(ir_precision);
                    action_tr_last.find('.qty_right_box').html(current_qty+1);
                    action_tr_last.find('.dis_right_box').html(tmp_discount);
                    action_tr_last.find('.total_right_box').html(tmp_total);
                    current_qty_split = current_qty+1;
                }else{
                    this_action.find('.spit_tb_tr').append(html_update);
                    current_qty_split = 1;
                }

                let current_discount = Number($(this).parent().parent().parent().find('.item_dis_split').html());
                $(this).parent().parent().parent().find('.item_dis_split').html((current_discount-discount_per_unit).toFixed(ir_precision));
                //set free item row
                cal_split_modal();
                cal_split_modal_left();
                setAnimationForSpit($(this).parent().parent().parent().find('.item_name_split'),this_action.find('.spit_tb_tr'));

            }else{
                let please_select_a_box_on_right_side_for_assign_item = $("#please_select_a_box_on_right_side_for_assign_item").val();
                alertModalCustom({modalName:"danger_update", normalTxt: please_select_a_box_on_right_side_for_assign_item,re_open_modal:"target: #open-split-bill-modal"})
            }
        }else{
            alertModalCustom({modalName:"danger_update", normalTxt: quantity_not_available,re_open_modal:"target: #open-split-bill-modal"})
        }
    });
    $(document).on("click", ".remove_box_right", function (e) {
        $(this).parent().find(".row_box_item").each(function() {
            let id = $(this).attr('data-id');
            let remove_qty = Number($(this).find('.qty_right_box').html());
            let current_qty = Number($("#left_qty_split_"+id).html());
            $("#left_qty_split_"+id).html(remove_qty+current_qty);
            let right_total_discount = Number($(this).find('.dis_right_box').html());
            let current_discount = Number($("#item_dis_split_"+id).html());
            $("#item_dis_split_"+id).html((current_discount+right_total_discount).toFixed(ir_precision));
        });
        let discount_right_box= Number($(this).parent().find(".discount_right_box").attr('data-added_amount'));
        let charge_right_box= Number($(this).parent().find(".charge_right_box").html());


        let split_left_discount= Number($("#split_left_discount").html());
        let split_left_charge = Number($("#split_left_charge").html());


        $("#split_left_discount").html((discount_right_box + split_left_discount).toFixed(ir_precision));
        $("#split_left_charge").html((charge_right_box + split_left_charge).toFixed(ir_precision));
        $(this).parent().remove();
        cal_split_modal_left();

    });
    $(document).on("click", ".remove_spit_box", function (e) {
        let select_active_pagination = $(".active_pagination").parent().find(".active").attr("data-num");
        let this_action = '';
        if (select_active_pagination && select_active_pagination!=undefined) {
            this_action = $("#set_active_div"+select_active_pagination);

            let id = this_action.find('.row_box_item').attr("data-id");
            let sale_row_id = this_action.find('.row_box_item').attr("data-sale_row_id");
            let this_selected_action = this_action.find('.selected');
            let remove_qty = Number(this_selected_action.find('.qty_right_box').html());
            if(remove_qty){
                let current_qty = Number($("#left_qty_split_"+id).html());
                $("#left_qty_split_"+id).html(remove_qty+current_qty);
                let right_total_discount = Number(this_selected_action.find('.dis_right_box').html());
                let current_discount = Number($("#item_dis_split_"+id).html());
                $("#item_dis_split_"+id).html((current_discount+right_total_discount).toFixed(ir_precision));
                let free_item_div_id = sale_row_id;
                this_selected_action.parent().find(".remove_free_item_div_"+free_item_div_id).remove();
                this_selected_action.remove();
                cal_split_modal();
                cal_split_modal_left();
            }

        }
    });
    $(document).on("click", ".row_items_spit_minus", function (e) {
        let id = Number($(this).parent().parent().parent().attr('data-id'));
        let sale_row_id = Number($(this).parent().parent().parent().attr('data-sale_row_id'));
        let item_price_split = ($(this).parent().parent().parent().find('.item_price_split').html());
        let discount_per_unit = Number($(this).parent().parent().parent().find('.item_dis_split').attr('data-discount_per_unit'));
        let tax_per_unit = Number($(this).parent().parent().parent().attr('data-tax_per_unit'));

        let status = false;
        let this_action = '';
        let select_active_pagination = $(".active_pagination").parent().find(".active").attr("data-num");
        if (select_active_pagination && select_active_pagination!=undefined) {
            status = true;
            this_action = $("#set_active_div"+select_active_pagination);
        }
       /* $(".custom_li_split").each(function() {
            let row_div =  $(this).attr("data-row");
            if($("#myCheckbox_"+row_div).is(":checked")){
                status = true;
                this_action = $(this);
            }
        });*/
        if(status==true){
            let status_box_item = false;
            let increase_action = '';
            let current_qty = 0;
            let action_tr_last = '';
            this_action.find('.row_box_item').each(function() {
                let box_row_id =  Number($(this).attr("data-id"));
                if(box_row_id===id){
                    action_tr_last = $(this);
                    current_qty = Number(action_tr_last.find('.qty_right_box').html());
                    status_box_item = true;
                }

            });
            let current_qty_split =0;
            if(status_box_item==true){
                if(current_qty>0){
                    let tmp_discount = Number(discount_per_unit*(current_qty-1));
                    let tmp_total = (Number(item_price_split*(current_qty-1)) - tmp_discount).toFixed(ir_precision);
                    action_tr_last.find('.qty_right_box').html(current_qty-1);
                    action_tr_last.find('.dis_right_box').html(tmp_discount);
                    action_tr_last.find('.total_right_box').html(tmp_total);
                    let left_item_qty_split = Number($(this).parent().parent().parent().find('.item_qty_split').html());
                    $(this).parent().parent().parent().find('.item_qty_split').html((left_item_qty_split+1));

                    let current_discount = Number($(this).parent().parent().parent().find('.item_dis_split').html());
                    $(this).parent().parent().parent().find('.item_dis_split').html((current_discount+discount_per_unit).toFixed(ir_precision));

                    if(current_qty==1){
                        action_tr_last.remove();
                    }
                    current_qty_split = current_qty-1;
                }
            }else{
                let this_item_not_added_on_your_selected_customer = $("#this_item_not_added_on_your_selected_customer").val();
                 alertModalCustom({modalName:"danger_update", normalTxt: this_item_not_added_on_your_selected_customer,re_open_modal:"target: #open-split-bill-modal"})
            }
            //set free item row
            cal_split_modal();
            cal_split_modal_left();
            setAnimationForSpitMinus(action_tr_last.find('.name_right_box'),$(this).parent().parent().parent().find('.item_name_split'),this_action.find('.subtotal_right_box'),current_qty);
        }else{
            let please_select_a_box_on_right_side_for_assign_item = $("#please_select_a_box_on_right_side_for_assign_item").val();
             alertModalCustom({modalName:"danger_update", normalTxt: please_select_a_box_on_right_side_for_assign_item,re_open_modal:"target: #open-split-bill-modal"})
        }
    });
    $(document).on("click", ".btn_minus_plus_right", function (e) {

        let status = false;
        $("#spit_small_modal_input").focus();
        let this_action = '';
        let select_active_pagination = $(".active_pagination").parent().find(".active").attr("data-num");
        if (select_active_pagination && select_active_pagination!=undefined) {
            status = true;
            this_action = $("#set_active_div"+select_active_pagination);
        }
        let amount = Number($(this).parent().parent().find('.split_left_amount').html());
        let amount_not_available= $("#amount_not_available").val();
        if(amount>0){
            if(status==true){
                if(Number(this_action.find('.row_box_item').length)){
                    let type = Number($(this).attr("data-type"));
                    $("#split_active_amount").val(type);
                    let title = ($(this).attr("data-title"));
                    amount = $(this).parent().parent().find('.split_left_amount').html();
                    $(".title_modal_label").html(title+"(+)");
                    $("#spit_small_modal_input").attr('placeholder',title+"(+)");
                    $("#spit_small_modal_input").attr('data-original_amount',amount);
                    $("#split_active_amount_status").val(2);

                    let input_modal_previous_amount = 0;
                    if(type==1){
                        input_modal_previous_amount = this_action.find('.discount_right_box').attr('data-added_amount');
                    }else if (type==2){
                        input_modal_previous_amount = this_action.find('.charge_right_box').attr('data-added_amount');
                    }

                    $("#spit_small_modal_input").attr('data-input_modal_previous_amount',input_modal_previous_amount);
                    UIkit.modal(document.getElementById('open-split-charge')).show();
                }else{
                    let you_need_to_add_at_least_1_item_on_right_selected_customer = $("#you_need_to_add_at_least_1_item_on_right_selected_customer").val();
                    alertModalCustom({modalName:"danger_update", normalTxt: you_need_to_add_at_least_1_item_on_right_selected_customer,re_open_modal:"target: #open-split-bill-modal"});
                }
            }else{
                let please_select_a_box_on_right_side_for_assign_item = $("#please_select_a_box_on_right_side_for_assign_item").val();
                alertModalCustom({modalName:"danger_update", normalTxt: please_select_a_box_on_right_side_for_assign_item,re_open_modal:"target: #open-split-bill-modal"});
            }
        }else{
            alertModalCustom({modalName:"danger_update", normalTxt: amount_not_available,re_open_modal:"target: #open-split-bill-modal"});
        }

    });
    $(document).on("click", "#add_small_modal_amount", function (e) {
        let spit_small_modal_input = Number($("#spit_small_modal_input").val());
        let original_amount = Number($("#spit_small_modal_input").attr('data-original_amount'));

        let status = false;
        let this_action = '';
        let select_active_pagination = $(".active_pagination").parent().find(".active").attr("data-num");
        if (select_active_pagination && select_active_pagination!=undefined) {
            status = true;
            this_action = $("#set_active_div"+select_active_pagination);
        }
        let input_modal_previous_amount = Number($("#spit_small_modal_input").attr('data-input_modal_previous_amount'));
        let split_active_amount_status = Number($("#split_active_amount_status").val());
        let tmp_total = 0;
        if(split_active_amount_status==1){
            tmp_total = original_amount-input_modal_previous_amount;
        }else{
            tmp_total = original_amount+input_modal_previous_amount;
        }

        if(spit_small_modal_input>tmp_total){
            let more_then_original_amount = $("#more_then_original_amount").val();
            alertModalCustom({modalName:"danger_update", normalTxt: more_then_original_amount,re_open_modal:"target: #open-split-bill-modal"});
        }else{
            let split_active_amount = Number($("#split_active_amount").val());
            if(split_active_amount==1){
                this_action.find('.discount_right_box').attr('data-added_amount',spit_small_modal_input);
            }else if(split_active_amount==2){
                this_action.find('.charge_right_box').attr('data-added_amount',spit_small_modal_input);
            }

            let split_right_discount_tmp = 0;
            let split_right_charge_tmp = 0;


            $(".discount_right_box").each(function() {
                split_right_discount_tmp += Number($(this).attr('data-added_amount'));
            });
            $(".charge_right_box").each(function() {
                split_right_charge_tmp += Number($(this).attr('data-added_amount'));
            });


            if(split_active_amount==1){
                let split_left_discount_tmp =  Number($("#split_left_discount").attr('data-original_left_amount'));
                $("#split_left_discount").html((split_left_discount_tmp - Number(split_right_discount_tmp)).toFixed(ir_precision));
            }else if(split_active_amount==2){
                let split_left_charge_tmp =  Number($("#split_left_charge").attr('data-original_left_amount'));
                $("#split_left_charge").html((split_left_charge_tmp - Number(split_right_charge_tmp)).toFixed(ir_precision));
            }
            UIkit.modal(document.getElementById('open-split-bill-modal')).show();
            $("#spit_small_modal_input").val('');
            cal_split_modal();
            cal_split_modal_left();
        }
    });
    $(document).on("click", ".remove_inline_right_split_discount", function (e) {
        let get_amount = Number($(this).parent().find('.discount_right_box').attr('data-added_amount'));
        let item_discount_old = Number($(this).parent().find('.discount_right_box').html());
        let new_discount = item_discount_old - get_amount;
        $(this).parent().find('.discount_right_box').attr('data-added_amount',0);
        $(this).parent().find('.discount_right_box').html(Number(new_discount).toFixed(ir_precision));

        let get_amount_all = Number($(this).parent().find('.discount_right_box').html());
        let split_left_discount = Number($("#split_left_discount").html());

        $("#split_left_discount").html(Number(get_amount+split_left_discount).toFixed(ir_precision));
        let current_previous_add_item_dis = get_amount_all - get_amount;

        $(this).parent().find('.discount_right_box').html((current_previous_add_item_dis).toFixed(ir_precision));
        cal_split_modal_left();
        cal_split_modal();
    });
    $(document).on("click", ".remove_inline_right_split_charge", function (e) {
        let get_amount = Number($(this).parent().find('.charge_right_box').html());
        let split_left_charge= Number($("#split_left_charge").html());
        $("#split_left_charge").html(Number(get_amount+split_left_charge).toFixed(ir_precision));
        $(this).parent().find('.charge_right_box').html((0).toFixed(ir_precision));
        $(this).parent().find('.charge_right_box').attr('data-added_amount',(0));
        cal_split_modal_left();
        cal_split_modal();
    });

    $(document).on("click", ".goto_to_payment", function (e) {
        e.preventDefault();
        $(".payment_method").val("");
        $(".check_exist_payment").remove();

        let sale_id_split = $("#last_future_sale_id").val();
        $(".total_split_sale").empty();
        $(".total_split_sale").append('<span>1</span>');
        generateSplitSaleNo(sale_id_split);

        let select_active_pagination = $(".active_pagination").parent().find(".active").attr("data-num");
        let this_action = "";
        if (select_active_pagination && select_active_pagination!=undefined) {
            this_action = $("#set_active_div"+select_active_pagination);
        }

        if(this_action.find('.row_box_item').length) {
            let status = false;
            $(".check_amount_required").each(function (i, obj) {
                let value = Number($(this).html());
                if (value) {
                    status = true;
                }
            });
            if (status == true) {
                let some_of_your_cart_amounts_are_not_spitted_yet = $("#some_of_your_cart_amounts_are_not_spitted_yet").val();
                 alertModalCustom({modalName:"danger_update", normalTxt: some_of_your_cart_amounts_are_not_spitted_yet,re_open_modal:"target: #open-split-bill-modal"})
            } else {
              /*  let obj_modal = $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent();
                hide_current_modal(obj_modal);

                */
                //set split details amount
                let total_payable = this_action.find(".total_payable_right_box").html();
                let customer_id = this_action.find(".split_customer_id").val();

                $("#finalize_total_payable").html(total_payable);
                $("#due_amount_invoice_input").val(total_payable);
                $("#selected_invoice_sale_customer").val(customer_id);
                $("#pay_amount_invoice_input").val("0");
                $("#payment_amount_pad").val("0");
                $("#finalize_update_type").html("2"); //when 2 update payment method, close time and order_status to 3
                $(this).attr('data-is_remove', 'yes');
                cal_split_modal();
                calculate_create_invoice_modal();
                // $("#finalize_order_modal").addClass("active");
                // $(".pos__modal__overlay").fadeIn(200);
                UIkit.modal(document.getElementById('finalize_order_modal')).show();

            }
        }else{
            let please_add_at_least_1_item_before_checkout = $("#please_add_at_least_1_item_before_checkout").val();
             alertModalCustom({modalName:"danger_update", normalTxt: please_add_at_least_1_item_before_checkout,re_open_modal:"target: #open-split-bill-modal"})

        }

    });


    $(document).on("click",".split_bill",function (e) {
        $("#cancel_order_button").hide();
        // Open Modal
        UIkit.modal(document.querySelector('#open-split-bill-modal')).show();

        $("#is_split_bill").val(1);
        $("#spit_modal_input").val('');
        split_bill();
        $(".split_div").empty();
        $(".pagination_custom").empty();
    });
    $(document).on("click",".merge_bill",function (e) {

        $.ajax({
            url: base_url + "Sale/get_all_marge_bill",
            method: "POST",
            dataType:'json',
            success: function (response) {
              if(response.status==true){
                  $(".merge_list").html(response.html);
                  UIkit.modal(document.getElementById('open-table-marge')).show();
              }else{
                  alertModalCustom({modalName:"danger_update", normalTxt: "There is no order for merge!",re_open_modal:"target: #open-table-marge"})

                  swal({
                      title: warning + "!",
                      text: "There is no order for merge!",
                      confirmButtonText: ok,
                      confirmButtonColor: "#b6d6f6",
                  });
              }

            },
            error: function () {
                alert(a_error);
            },
        });

    });
    $(document).on("click","#merge_now",function (e) {
        let select_table_obj = $(".pointer_merge").hasClass("active_merge_table");
        let total_merge_active = $(".pointer_merge").parent().find(".active_merge_table").length;
        if (select_table_obj && Number(total_merge_active)>=2) {
            swal(
                {
                    title: warning + "!",
                    text: "Are you sure you want to merge?",
                    confirmButtonColor: "#3c8dbc",
                    confirmButtonText: ok,
                    showCancelButton: true,
                },
                function () {
                    let check_sale_ids = [];
                    $(".pointer_merge").parent().find(".active_merge_table").each(function() {
                        let this_id = $(this).attr('data-id');
                        check_sale_ids.push(this_id);
                    });
                    $.ajax({
                        url: base_url + "Sale/set_merge_data",
                        method: "POST",
                        dataType:'json',
                        data:{ids:check_sale_ids},
                        success: function (response) {
                            if(response.status==true){
                                alertModal({modalName:"done", normalTxt: response.msg});
                            }else{
                                alertModalCustom({modalName:"danger_update", normalTxt: "Something is wrong with merge, please try again!",re_open_modal:"target: #open-table-marge"})
                            }

                        },
                        error: function () {
                            alert(a_error);
                        },
                    });
                }
            );
        }else{
            alertModalCustom({modalName:"danger_update", normalTxt: "Please select more then two order for merge.",re_open_modal:"target: #open-table-marge"})
        }
    });
    $(document).on("click","#create_invoice_and_close",function (e) {

      $(".payment_method").val("");
        $("#cancel_order_button").show();
      $("#print_type").val(1);
        let select_running_order_obj = $(".select_running_order").parent().hasClass("active");
        if (select_running_order_obj) {
            let sale_id = $(".select_running_order").parent().parent().find(".active").attr("data-id");
          $.ajax({
              url: base_url + "Sale/get_all_information_of_a_sale_ajax",
              method: "POST",
              data: {
                  sale_id: sale_id,
                  csrf_irestoraplus: csrf_value_,
              },
              success: function (response) {
                  response = JSON.parse(response);
                  $("#finalize_total_payable").html(response.total_payable);
                  $("#selected_invoice_sale_customer").val(response.customer_id);
                  $("#pay_amount_invoice_input").val("0");
                  $("#payment_amount_pad").val("0");
                  UIkit.modal(document.getElementById('finalize_order_modal')).show();
                  // $("#finalize_order_modal").addClass("active");
                  // $(".pos__modal__overlay").fadeIn(200);
                  $("#open_invoice_date_hidden").val(response.sale_date);

                  $(".datepicker_custom")
                      .datepicker({
                          autoclose: true,
                          format: "yyyy-mm-dd",
                          startDate: "0",
                          todayHighlight: true,
                      })
                      .datepicker("update", response.sale_date);

                  $("#finalize_update_type").html("2"); //when 2 update payment method, close time and order_status to 3
                  calculate_create_invoice_modal();
              },
              error: function () {
                  alert(a_error);
              },
          });
      } else {
            alertModal({modalName:"danger", normalTxt: please_select_order_to_proceed});
      }
    }
  );

  $(document).on("keyup", "#pay_amount_invoice_input", function (e) {
    let this_value = $.trim($(this).val());
    if (isNaN(this_value)) {
      $(this).val("");
    }
    let paid_amount = $(this).val() != "" ? $(this).val() : 0;

    remove_last_two_digit_without_percentage(paid_amount, $(this));
    calculate_create_invoice_modal();
  });

  $(document).on("click", "#finalize_order_cancel_button", function (e) {
    reset_finalize_modal();
    $(this)
      .parent()
      .parent()
      .parent()
      .parent()
      .removeClass("active")
      .addClass("inActive");
    setTimeout(function () {
      $(".modal").removeClass("inActive");
    }, 1000);
    $(".pos__modal__overlay").fadeOut(300);
  });
  $(document).on("click", "#previous_category", function (e) {
    let parent_width = Math.ceil($(".select_category_inside").width());
    let child_width = Math.ceil($(".select_category_inside_inside").width());
    let fixed_to_move = child_width - parent_width;
    let current_position = parseInt(
      $(".select_category_inside_inside").css("margin-left")
    );
    let updated_position = current_position + 50;
    let update_position_unsigned = Math.abs(updated_position);
    if (0 > updated_position) {
      $(".select_category_inside_inside").css(
        "margin-left",
        updated_position + "px"
      );
    } else if (0 < updated_position) {
      $(".select_category_inside_inside").css("margin-left", "0px");
    }
  });
  $(document).on("click", "#kitchen_status_button", function (e) {
      let select_running_order_obj = $(".select_running_order").parent().hasClass("active");
      if (select_running_order_obj) {
          let sale_id = $(".select_running_order").parent().parent().find(".active").attr("data-id");
      $.ajax({
        url: base_url + "Sale/get_all_information_of_a_sale_ajax",
        method: "POST",
        data: {
          sale_id: sale_id,
          csrf_irestoraplus: csrf_value_,
        },
        success: function (response) {
          reset_time_interval();
          all_time_interval_operation();
          let order_object = JSON.parse(response);
          let order_type = order_object.order_type;
          let order_number = "";
          let order_type_name = "";
          $("#open_invoice_date_hidden").val(order_object.sale_date);

          $(".datepicker_custom")
            .datepicker({
              autoclose: true,
              format: "yyyy-mm-dd",
              startDate: "0",
              todayHighlight: true,
            })
            .datepicker("update", order_object.sale_date);

          if (order_type == 1) {
            order_number = "A " + order_object.sale_no;
            order_type_name = "Dine In";
          } else if (order_type == 2) {
            order_number = "B " + order_object.sale_no;
            order_type_name = "Take Away";
          } else if (order_type == 3) {
            order_number = "C " + order_object.sale_no;
            order_type_name = "Delivery";
          }
            let tables_booked = order_object.orders_table_text;

          let waiter_name =
            order_object.waiter_name == "" || order_object.waiter_name == null
              ? ""
              : order_object.waiter_name;
          let customer_name =
            order_object.customer_name == "" ||
            order_object.customer_name == null
              ? ""
              : order_object.customer_name;
          let table_name =
            order_object.table_name == "" || order_object.table_name == null
              ? ""
              : order_object.table_name;
          let order_time = new Date(Date.parse(order_object.date_time));
          let now = new Date();

          let days = parseInt((now - order_time) / (1000 * 60 * 60 * 24));
          let hours = parseInt(
            (Math.abs(now - order_time) / (1000 * 60 * 60)) % 24
          );
          let minute = parseInt(
            (Math.abs(now.getTime() - order_time.getTime()) / (1000 * 60)) % 60
          );
          let second = parseInt(
            (Math.abs(now.getTime() - order_time.getTime()) / 1000) % 60
          );
          minute = minute.toString();
          second = second.toString();
          minute = minute.length == 1 ? "0" + minute : minute;
          second = second.length == 1 ? "0" + second : second;

          let order_placed_at =
            "Order Placed at: " +
            order_time.getHours() +
            ":" +
            order_time.getMinutes() +
            "";
          let item_list_to_show = "";
          for (let key in order_object.items) {
            let single_item = order_object.items[key];
            if (single_item.item_type == "Kitchen Item") {
              let item_name = single_item.menu_name;
              let background_color = "";
              let current_condition = "In the queue";
              if (single_item.cooking_status == "Started Cooking") {
                let cooking_start_time = new Date(
                  Date.parse(single_item.cooking_start_time)
                );
                let now = new Date();

                let item_days = parseInt(
                  (now - cooking_start_time) / (1000 * 60 * 60 * 24)
                );
                let item_hours = parseInt(
                  (Math.abs(now - cooking_start_time) / (1000 * 60 * 60)) % 24
                );
                let item_minute = parseInt(
                  (Math.abs(now.getTime() - cooking_start_time.getTime()) /
                    (1000 * 60)) %
                    60
                );
                let item_second = parseInt(
                  (Math.abs(now.getTime() - cooking_start_time.getTime()) /
                    1000) %
                    60
                );
                item_minute = item_minute.toString();
                item_second = item_second.toString();
                item_minute =
                  item_minute.length == 1 ? "0" + item_minute : item_minute;
                item_second =
                  item_second.length == 1 ? "0" + item_second : item_second;
                //this is dynamic style
                background_color = 'style="background-color:#ADD8E6;"';
                current_condition =
                  "Started Cooking " +
                  item_minute +
                  ":" +
                  item_second +
                  " Min Ago";
              } else if (single_item.cooking_status == "Done") {
                let cooking_start_time = new Date(
                  Date.parse(single_item.cooking_start_time)
                );
                let now = new Date();

                let item_days = parseInt(
                  (now - cooking_start_time) / (1000 * 60 * 60 * 24)
                );
                let item_hours = parseInt(
                  (Math.abs(now - cooking_start_time) / (1000 * 60 * 60)) % 24
                );
                let item_minute = parseInt(
                  (Math.abs(now.getTime() - cooking_start_time.getTime()) /
                    (1000 * 60)) %
                    60
                );
                let item_second = parseInt(
                  (Math.abs(now.getTime() - cooking_start_time.getTime()) /
                    1000) %
                    60
                );
                item_minute = item_minute.toString();
                item_second = item_second.toString();
                item_minute =
                  item_minute.length == 1 ? "0" + item_minute : item_minute;
                item_second =
                  item_second.length == 1 ? "0" + item_second : item_second;
                //this is dynamic styles
                background_color = ' style="background-color:#90EE90;"';
                current_condition =
                  "Done Cooking " +
                  item_minute +
                  ":" +
                  item_second +
                  " Min Ago";
              }
              item_list_to_show +='<tr style="width: 100%;border-top: 1px solid #e2e2e2;border-bottom: 1px solid #e2e2e2;">\n' +
                  '                                            <td style="padding: 10px 0px 10px 0px;">'+ item_name +' </td>\n' +
                  '                                            <td style="width: 27%;text-align: center">'+ single_item.qty +'</td>\n' +
                  '                                            <td style="text-align: center">'+ current_condition +'</td>\n' +
                  '                                        </tr>';
            }
          }
          $("#kitchen_status_item_details_tmp").empty();
          $("#kitchen_status_order_number").html("");
          $("#kitchen_status_order_number").html(order_number);
          $("#kitchen_status_order_type").html("");
          $("#kitchen_status_order_type").html(order_type_name);
          $("#kitchen_status_waiter_name").html("");
          $("#kitchen_status_waiter_name").html(waiter_name);
          $("#kitchen_status_customer_name").html("");
          $("#kitchen_status_customer_name").html(customer_name);
          $("#kitchen_status_table").html("");
          $("#kitchen_status_table").html(order_object.orders_table_text);
          $("#kitchen_status_order_placed").html("");
          $("#kitchen_status_order_placed").html(order_placed_at);
          $("#kitchen_status_ordered_minute").html("");
          $("#kitchen_status_ordered_minute").html(minute);
          $("#kitchen_status_ordered_second").html("");
          $("#kitchen_status_ordered_second").html(second);
          $("#kitchen_status_item_details_tmp").html(item_list_to_show);

          setInterval(function () {
            let s = $("#kitchen_status_ordered_second").text();
            let m = $("#kitchen_status_ordered_minute").text();
            s = parseInt(s);
            m = parseInt(m);
            s++;
            if (s == 60) {
              m++;
              s = 0;
            }
            m = m.toString();
            s = s.toString();
            m = m.length == 1 ? "0" + m : m;
            s = s.length == 1 ? "0" + s : s;
            $("#kitchen_status_ordered_second").html(s);
            $("#kitchen_status_ordered_minute").html(m);
          }, 1000);
        },
        error: function () {
          alert(a_error);
        },
      });
          UIkit.modal("#open-kitchen-status-modal").show();
    } else {
          alertModal({modalName:"danger", normalTxt: please_select_open_order});
    }
  });
  $(document).on("click", "#kitchen_status_close_button", function (e) {
    $(this)
      .parent()
      .parent()
      .parent()
      .removeClass("active")
      .addClass("inActive");
    setTimeout(function () {
      $(".modal").removeClass("inActive");
    }, 1000);
    $(".pos__modal__overlay").fadeOut(200);
  });
  $(document).on("click", "#submit_transfer_table", function (e) {
      let select_table_obj = $(".get_transfer_tbl_id").hasClass("active_get_transfer_tbl_id");
      if (select_table_obj) {
          let transfer_select = $(".get_transfer_tbl_id").parent().find(".active_get_transfer_tbl_id").attr("data-id");
          let sale_id = $(".select_running_order").parent().parent().find(".active").attr("data-id");
          $.ajax({
              url:
              base_url + "Sale/setTable",
              method: "post",
              dataType:'json',
              data: {
                  sale_id: sale_id,
                  new_table_id: transfer_select,
                  csrf_irestoraplus: csrf_value_,
              },
              success: function (response) {
                  UIkit.modal(document.querySelector('#open-transfer-table')).hide();
                  alertModal({modalName:"done", normalTxt: "Transfer successfully."});
              },
              error: function () {
                  alert(a_error);
              },
          });
      }else{
        alertModalCustom({modalName:"danger_update", normalTxt: "Please select your transfer table.",re_open_modal:"target: #open-transfer-table"})
      }
  });

    $(document).on("click", "#transfer_table", function (e) {
        let select_running_order_obj = $(".select_running_order").parent().hasClass("active");
        if (select_running_order_obj) {
            let sale_id = $(".select_running_order").parent().parent().find(".active").attr("data-id");
            let running_order_table_name = $(".holder .order_details .single_order[data-selected=selected]").find(".running_order_table_name").text();
            $.ajax({
                url:
                base_url + "Sale/getTables",
                method: "post",
                dataType:'json',
                data: {
                    sale_id: sale_id,
                    csrf_irestoraplus: csrf_value_,
                },
                success: function (response) {
                    $("#selected_order_table").html(response.table_name);
                    $('.transfer_table_div_parent').pagination({
                        showNext: false,
                        showPrevious: false,
                        showPageNumbers: true,
                        pageRange: null,
                        pageSize: 20,
                        dataSource: response.sale_table,
                        ajax: {
                            beforeSend: function () {
                                $('.transfer_table_div_parent').html('Loading data...');
                            }
                        },
                        callback: function (response, pagination) {
                            let data_html = "";
                            for (let key in response) {
                                data_html += '<div><button class="secondary-btn get_transfer_tbl_id" data-id="'+response[key].id+'">'+response[key].name+'</button></div>';
                            }
                            $(".transfer_table_div").html(data_html);
                        }
                    });

                    UIkit.modal(document.querySelector('#open-transfer-table')).show()

                },
                error: function () {
                    alert(a_error);
                },
            });
        } else {
              alertModal({modalName:"danger", normalTxt: please_select_open_order})
        }
    });


  $(document).on(
    "click",
    "#help_close_button,#help_close_button_cross",
    function (e) {
      $(this).parent().parent().removeClass("active").addClass("inActive");
      setTimeout(function () {
        $(".modal").removeClass("inActive");
      }, 1000);
      $(".pos__modal__overlay").fadeOut(300);
    }
  );
    function pagi_resoans(){
        $('.parent_reasons_div').pagination({
            showNext: false,
            showPrevious: false,
            showPageNumbers: true,
            pageRange: null,
            pageSize: 7,
            dataSource: window.reasons_obects,
            ajax: {
                beforeSend: function () {
                    $('.parent_reasons_div').html('Loading data...');
                }
            },
            callback: function (response, pagination) {
                let data_html = "";
                for (let key in response) {
                    data_html += '<li>\n' +
                        '                                            <label for="item'+key+'" class="reason_parent">\n' +
                        '                                                '+response[key].name+' <input type="checkbox" value="'+response[key].name+'" class="reasons" id="item'+key+'"> <span class="checkmark"></span>\n' +
                        '                                            </label>\n' +
                        '                                        </li>';
                }
                $(".reasons_div").html(data_html);
            }
        })
    }
    function pagi_tables(){
        $('.table_div_parent').pagination({
            showNext: false,
            showPrevious: false,
            showPageNumbers: true,
            pageRange: null,
            pageSize: 20,
            dataSource: window.tabel_obects,
            ajax: {
                beforeSend: function () {
                    $('.table_div_parent').html('Loading data...');
                }
            },
            callback: function (response, pagination) {
                let data_html = "";
                for (let key in response) {
                    data_html += '<div class="single_order_table area_all_table area_table_'+response[key].area+'" id="single_table_info_holder_'+response[key].id+'">\n' +
                        ' <button data-id="'+response[key].id+'" class="table_name secondary-btn focus-btn">\n' +
                        '   <span id="sit_name_'+response[key].id+'">'+response[key].name+'</span>\n' +
                        ' </button>\n' +
                        '</div>';
                }
                $(".table_div").html(data_html);
            }
        })
    }
    pagi_tables();
  $(document).on(
    "click",
    "#kitchen_bar_waiter_modal_close_button_cross",
    function (e) {
      $("#kitchen_bar_waiter_panel_button_modal").slideUp(333);
    }
  );
  $(document).on("click", "#next_category", function (e) {
    let parent_width = Math.ceil($(".select_category_inside").width());
    let child_width = Math.ceil($(".select_category_inside_inside").width());
    let fixed_to_move = child_width - parent_width;
    let current_position = parseInt(
      $(".select_category_inside_inside").css("margin-left")
    );
    let updated_position = current_position - 50;
    let update_position_unsigned = Math.abs(updated_position);
    if (fixed_to_move > update_position_unsigned) {
      $(".select_category_inside_inside").css(
        "margin-left",
        updated_position + "px"
      );
    } else {
      $(".select_category_inside_inside").css(
        "margin-left",
        "-" + fixed_to_move + "px"
      );
    }
  });
  //this is to set height when site load
  let height_should_be =
    parseInt($(window).height()) -
    parseInt($(".top_header_part").height()) -
    20;
  $(".main_left").css("height", height_should_be + "px");
  $(".main_middle").css("height", height_should_be + "px");
  $(".main_right").css("height", height_should_be - 10 + "px");
  //end

  //load first category's items default at site load
  $(".specific_category_items_holder:first").show("1000");

  //end

  //get all images based on category when category button is clicked
  $(document).on("click", ".category_button", function (e) {
    let str = $(this).attr("id");
    let res = str.substr(16);
    $("#searched_item_found").remove();
    $(".specific_category_items_holder").fadeOut(0);
    $("#category_" + res).css("display", "grid");
  });
  //get all images based on category when category button is clicked
  $(document).on("click", ".veg_bev_item", function (e) {
    let status = $(this).attr("data-status");
    $(".specific_category_items_holder").fadeOut(0);
    let foundItems = searchItemAndConstructGallery("");
    let searched_category_items_to_show =
      '<div id="searched_item_found" class="specific_category_items_holder 003">';
    for (let key in foundItems) {
      if (foundItems.hasOwnProperty(key)) {
        if (status == "veg" && foundItems[key].veg_item_status == "yes") {
          if (foundItems[key].parent_id == "0") {
            searched_category_items_to_show +=
              '<div class="single_item animate__animated animate__flipInX"   data-price="' +
              foundItems[key].price +
              '"  data-is_variation="' +
              foundItems[key].is_variation +
              '"  data-parent_id="' +
              foundItems[key].parent_id +
              '"    id="item_' +
              foundItems[key].item_id +
              '">';
            searched_category_items_to_show +=
              '<img src="' + foundItems[key].image + '" alt="" width="141">';
            searched_category_items_to_show +=
              '<p class="item_name" data-tippy-content="' +
              foundItems[key].item_name +
              '">' +
              foundItems[key].item_name +
              " (" +
              foundItems[key].item_code +
              ")</p>";
            searched_category_items_to_show +=
              '<p class="item_price">' +
              price_txt +
              ": " +
              foundItems[key].price +
              "</p>";

            searched_category_items_to_show += "</div>";
          }
        } else if (
          status == "bev" &&
          foundItems[key].beverage_item_status == "yes"
        ) {
          if (foundItems[key].parent_id == "0") {
            searched_category_items_to_show +=
              '<div class="single_item animate__animated animate__flipInX"  data-price="' +
              foundItems[key].price +
              '"   data-is_variation="' +
              foundItems[key].is_variation +
              '"  data-parent_id="' +
              foundItems[key].parent_id +
              '"  id="item_' +
              foundItems[key].item_id +
              '">';
            searched_category_items_to_show +=
              '<img src="' + foundItems[key].image + '" alt="" width="141">';
            searched_category_items_to_show +=
              '<p class="item_name" data-tippy-content="' +
              foundItems[key].item_name +
              '">' +
              foundItems[key].item_name +
              " (" +
              foundItems[key].item_code +
              ")</p>";
            searched_category_items_to_show +=
              '<p class="item_price">' +
              price_txt +
              ": " +
              foundItems[key].price +
              "</p>";

            searched_category_items_to_show += "</div>";
          }
        } else if (
          status == "bar" &&
          foundItems[key].bar_item_status == "yes"
        ) {
          if (foundItems[key].parent_id == "0") {
            searched_category_items_to_show +=
              '<div class="single_item animate__animated animate__flipInX"  data-price="' +
              foundItems[key].price +
              '"  data-is_variation="' +
              foundItems[key].is_variation +
              '"  data-parent_id="' +
              foundItems[key].parent_id +
              '" id="item_' +
              foundItems[key].item_id +
              '">';
            searched_category_items_to_show +=
              '<img src="' + foundItems[key].image + '" alt="" width="141">';
            searched_category_items_to_show +=
              '<p class="item_name" data-tippy-content="' +
              foundItems[key].item_name +
              '">' +
              foundItems[key].item_name +
              " (" +
              foundItems[key].item_code +
              ")</p>";
            searched_category_items_to_show +=
              '<p class="item_price">' +
              price_txt +
              ": " +
              foundItems[key].price +
              "</p>";

            searched_category_items_to_show += "</div>";
          }
        }
      }
    }
    searched_category_items_to_show += "<div>";
    $("#searched_item_found").remove();
    $(".specific_category_items_holder").fadeOut(0);
    $(".category_items").prepend(searched_category_items_to_show);

    tippy(".item_name", {
      placement: "bottom-start",
    });
  });
  //when anything is searched
  $(document).on("keyup", "#search", function (e) {
    // if (e.keyCode == 13) {
    let searched_string = $(this).val().trim();
    if (searched_string) {
      let foundItems = searchItemAndConstructGallery(searched_string);
      let searched_category_items_to_show =
        '<div id="searched_item_found" class="specific_category_items_holder 002">';

      for (let key in foundItems) {
        if (foundItems.hasOwnProperty(key)) {
          if (foundItems[key].parent_id == "0") {
            searched_category_items_to_show +=
              '<div class="single_item animate__animated animate__flipInX"  data-price="' +
              foundItems[key].price +
              '" data-is_variation="' +
              foundItems[key].is_variation +
              '"  data-parent_id="' +
              foundItems[key].parent_id +
              '"  id="item_' +
              foundItems[key].item_id +
              '">';
            searched_category_items_to_show +=
              '<img src="' + foundItems[key].image + '" alt="" width="141">';
            searched_category_items_to_show +=
              '<p class="item_name" data-tippy-content="' +
              foundItems[key].item_name +
              '">' +
              foundItems[key].item_name +
              " (" +
              foundItems[key].item_code +
              ")</p>";
            searched_category_items_to_show +=
              '<p class="item_price">' +
              price_txt +
              ": " +
              foundItems[key].price +
              "</p>";
            searched_category_items_to_show +=
              '<span class="item_vat_percentage ir_display_none">' +
              foundItems[key].vat_percentage +
              "</span>";
            searched_category_items_to_show += "</div>";
          }
        }
      }
      searched_category_items_to_show += "<div>";
      $("#searched_item_found").remove();
      $(".specific_category_items_holder").fadeOut(0);
      $(".category_items").prepend(searched_category_items_to_show);
      // }
      tippy(".item_name", {
        placement: "bottom-start",
      });
    } else {
      $("#button_category_show_all1").click();
    }
  });
  $(document).on("click", "#dine_in_button,#take_away_button,#delivery_button", function (e) {
      $(".main_top").find("button").attr("data-selected", "unselected");
      $(this).attr("data-selected", "selected");
      $("#table_button").attr("disabled", false);
    $("#is_diplomat_hidden").val(1);
      //set default delivery or service charge modal
      let service_amount = $("#service_amount").val();
      let delivery_amount = $("#delivery_amount").val();
      $("#delivery_charge").val("");
      let is_diplomat_txt = $("#is_diplomat_txt").val();
      $(".is_diplomat").html(is_diplomat_txt);
      $(".is_diplomat").attr("data-check_value",1);
      $("#charge_type").val("service");

      if ($(this).attr("id") == "dine_in_button") {
        $("#delivery_charge").val(service_amount);
        $("#charge_type").val("service");
      } else if ($(this).attr("id") == "take_away_button") {
        $("#table_button").attr("disabled", true);
        $(".single_table_div[data-table-checked=checked]").attr(
          "data-table-checked",
          "unchecked"
        );
        // $('.single_table_div[data-table-checked=checked]').css('background-color', 'red');
      } else if ($(this).attr("id") == "delivery_button") {
        $("#table_button").attr("disabled", true);
        $("#delivery_charge").val(delivery_amount);
        $("#charge_type").val("delivery");
        $(".single_table_div[data-table-checked=checked]").attr(
          "data-table-checked",
          "unchecked"
        );
      }
      checkIsDiplomat();
      do_addition_of_item_and_modifiers_price();
    }
  );
  function openProductEditModal(parent_id, item_name, id) {
    let single_order_element_object = $(this).parent().parent().parent();
    let row_number = 0;
    let menu_id = Number(id);
    let item_price = 0;
    let item_vat_percentage = "";
    let item_discount_input_value = 0;
    let item_discount_amount = 0;
    let item_price_without_discount = 0;
    let item_quantity = 1;
    let item_price_with_discount = 0;
    let modifiers_price = 0;

    let note = "";
    let modifiers_id = "";

    let modifiers_price_as_per_item_quantity = 0;
    let total_price = 0;

    $("#modal_item_row").html(row_number);
    $("#vr01_modal_price_variable").html(0);
    $("#modal_item_id").html(menu_id);
    $("#item_name_modal_custom").html(item_name);
    $("#modal_item_price").html(item_price);
    $("#modal_item_price_variable").html(item_price_with_discount);
    $("#modal_item_price_variable_without_discount").html(
      item_price_without_discount
    );

    $("#modal_item_vat_percentage").html(item_vat_percentage);
    $("#modal_discount_amount").html(item_discount_amount);
    $("#item_quantity_modal").val(item_quantity);
    $("#modal_modifiers_unit_price_variable").html(modifiers_price);
    $("#modal_modifier_price_variable").html(
      modifiers_price_as_per_item_quantity
    );
    $("#modal_discount").val(item_discount_input_value);
    $("#modal_item_note").val(note);
    $("#modal_total_price").val(total_price);
    //add modifiers to pop up associated to menu
    let foundItems_variations = get_variations_search_by_menu_id(
      menu_id,
      window.items
    );

    let variations = "";
    let variations_update = "";
    let html_li_pagination_vr = "";
    let display_none_vr = "";
    let i = 1;
    let vri = 1;
    for (let key1 in foundItems_variations) {
      let vr01_selected_order_type_object = $(".main_top").find(
        "button[data-selected=selected]"
      );
      item_price = parseFloat(foundItems_variations[key1].price).toFixed(
        ir_precision
      );
      variations_update+="<div  style='display: "+display_none_vr+";' class='vr01_modal_class vr01_modal_class"+vri+"' data-id='" +
          foundItems_variations[key1].item_id +
          "' data-code='" +
          foundItems_variations[key1].item_code +
          "'  data-item_name_tmp='" +
          foundItems_variations[key1].item_name_tmp +
          "' data-price='" +
          item_price +
          "' data-selected='unselected' data-menu_tax='" +
          foundItems_variations[key1].tax_information +
          "'><button class='secondary-btn focus-btn2'>" + foundItems_variations[key1].item_name + "<span class='vr01_modal_price'> <span>"+price_txt + ":</span> "+item_price +"</span></button></div>";
        if(i==1){
            html_li_pagination_vr+='<li class="active_pagination_vr paginationjs-page J-paginationjs-page active" data-num="'+vri+'"><a>1</a></li>';
        }else{
          if(i%3==0){
              vri++;
              html_li_pagination_vr+='<li class="active_pagination_vr paginationjs-page J-paginationjs-page" data-num="'+vri+'"><a>1</a></li>';
              display_none_vr = 'none';
          }
        }
      i++;
    }

    let foundItems = search_by_menu_id(menu_id, window.items);
    let originalMenu = foundItems[0].modifiers;
    let modifiers = "";
    let modifiers_single = "";
    let html_li_pagination_modifier = "";
      let modifiers_update = "";
    let display_none_modifir = "";
    i = 1;
    vri = 1;
    for (let key in originalMenu) {
      let selectedOrNot = "unselected";
      let backgroundColor = "";
      if (
        typeof modifiers_id !== "undefined" &&
        modifiers_id.includes(originalMenu[key].menu_modifier_id)
      ) {
        selectedOrNot = "selected";
        //this is dynamic style
        // backgroundColor = 'style="background-color:#B5D6F6;"';
      } else {
        selectedOrNot = "unselected";
        backgroundColor = "";
      }
      /*new_added_zak*/
      let style_content = "";
      let tmp_class = "";
      let tmp_price = originalMenu[key].menu_modifier_price;
      let modifier_ingrs = "";
      let blank_div = "";
      if (Number(originalMenu[key].type) == 2) {
        style_content = "none";
        tmp_class = "single_modifier";
        modifier_ingrs = get_modifier_ingrs_search_by_menu_modi_id(
          originalMenu[key].modifier_row_id,
          window.item_modifier_ingrs
        );
        let modifier_ingrs_length = Number(modifier_ingrs.length);
        if (modifier_ingrs_length % 2 != 0) {
          blank_div =
            "\n" +
            '<div class="vr01_modal_class_mod" data-selected="unselected" style="\n' +
            "    pointer-events: none;\n" +
            '"></div>';
        }
      }
        modifiers_update +=
            "<div " +
            backgroundColor +
            '  style="display:'+display_none_modifir+'" class="modal_modifiers'+vri+' modal_modifiers ' +
            tmp_class +
            '" data-type="' +
            originalMenu[key].type +
            '" style="display:' +
            style_content +
            '"  data-menu_tax="' +
            originalMenu[key].tax_information +
            '"  data-price="' +
            originalMenu[key].menu_modifier_price +
            '" data-selected="' +
            selectedOrNot +
            '" id="modifier_' +
            originalMenu[key].menu_modifier_id +
            '">';
        modifiers_update +=
            '<button class="secondary-btn focus-btn2 '+selectedOrNot+'"><span class="p">'+originalMenu[key].menu_modifier_name+'</span> <span class="modifier_price"> <span>' +
            price_txt +
            ":</span> " +
            originalMenu[key].menu_modifier_price +
            "</span></div>";
        modifiers_update += "</div>";
            if(i==1){
                html_li_pagination_modifier+='<li class="active_pagination_modifier paginationjs-page J-paginationjs-page active" data-num="'+vri+'"><a>1</a></li>';
            }else{
                if(i%3==0){
                    vri++;
                    html_li_pagination_modifier+='<li class="active_pagination_modifier paginationjs-page J-paginationjs-page" data-num="'+vri+'"><a>1</a></li>';
                    display_none_modifir = 'none';
                }
            }
            i++;

      if (Number(originalMenu[key].type) == 2) {
        for (let key1 in modifier_ingrs) {
          modifiers_single +=
            "<div class='vr01_modal_class_mod vr01_modal_class_mod_" +
            originalMenu[key].menu_modifier_id +
            " mod_main_row_div_" +
            modifier_ingrs[key1].inline_mod_row +
            "' data-id='" +
            modifier_ingrs[key1].inline_mod_row +
            "'   data-parent_id='" +
            originalMenu[key].menu_modifier_id +
            "'  data-price='" +
            modifier_ingrs[key1].menu_ingr_price +
            "' data-selected='unselected' data-menu_tax='" +
            originalMenu[key].tax_information +
            "'>";
          modifiers_single +=
            `<input class="margin_for_vr01_mod  margin_for_vr01_mod_` +
            originalMenu[key].menu_modifier_id +
            `  mod_main_row_value_` +
            modifier_ingrs[key1].inline_mod_row +
            `"  data-id="` +
            originalMenu[key].menu_modifier_id +
            `_` +
            modifier_ingrs[key1].inline_mod_row +
            `"   name="vr01_name_mod" type="radio"/>`;
          modifiers_single +=
            "<p>" +
            originalMenu[key].menu_modifier_name +
            "(" +
            modifier_ingrs[key1].menu_ingr_name +
            ") <span> " +
            price_txt +
            ": " +
            modifier_ingrs[key1].menu_ingr_price +
            " </span></p>";
          modifiers_single += "</div>";
        }
      }
      /*new_added_zak*/
    }
    if(variations_update){
        $(".variation_div_modal").show();
        $(".section3_vr").empty();
        $(".section3_vr").prepend(variations_update);

        let pagination_html = '<div class="paginationjs" style="margin-top: 0px;">\n' +
            '                                    <div class="paginationjs-pages">\n' +
            '                                        <ul>\n' +html_li_pagination_vr+
            '                                        </ul>\n' +
            '                                    </div>\n' +
            '                                </div>';

        $(".pagination_custom_vr").html(pagination_html);
    }else{
        $(".variation_div_modal").hide();
    }


      if(modifiers_update){
          $(".modifier_div_modal").show();
          $(".section3_new").empty();
          $(".section3_new").prepend(modifiers_update);

         let pagination_html = '<div class="paginationjs" style="margin-top: 0px;">\n' +
              '                                    <div class="paginationjs-pages">\n' +
              '                                        <ul>\n' +html_li_pagination_modifier+
              '                                        </ul>\n' +
              '                                    </div>\n' +
              '                                </div>';

          $(".pagination_custom_modifier").html(pagination_html);

      }else{
          $(".modifier_div_modal").hide();
      }



    $("#item_modal .section3_new_single").empty();
    $("#item_modal .section3_new_single").prepend(modifiers_single);
    UIkit.modal(document.querySelector('#open-modifiers-notes-modal')).show()

/*    $("#item_modal").addClass("active");
    $(".pos__modal__overlay").fadeIn(200);*/
  }
  //when single ite is clicked pop-up modal is appeared
  $(document).on("click", ".single_item", function () {
    //add for vr01
    $("#modal_item_price").html(0);
    let selected_order_type_object = $(".main_top").find(
      "button[data-selected=selected]"
    );
    //get item/menu price from modal
    let item_price = 0;
    let item_id = $(this).attr("id").substr(5);

    //vr01
    let is_variation = $(this).attr("data-is_variation");
    let parent_id = $(this).attr("data-parent_id");
    let item_name = getPlanText($(this).find(".item_name").html());
    let when_clicking_on_item_in_pos = Number(
      $("#when_clicking_on_item_in_pos").val()
    );
    let status_continue = true;
    let if_exist = Number($("#item_quantity_table_" + item_id).html());
    if (when_clicking_on_item_in_pos == 2) {
      if (if_exist && if_exist != undefined) {
        $("#increase_item_table_" + item_id).click();
        //do calculation on table
        status_continue = false;
      }
    } else if (when_clicking_on_item_in_pos == 1) {
      if (if_exist && if_exist != undefined) {
        $("#edit_item_" + item_id).click();
        //do calculation on table
        status_continue = false;
      }
    }
    //get tax information
    let tax_information = "";
    /*added_new_zakir*/
    let item_type = "";
    /*end_added_new_zakir*/
    for (let i = 0; i < window.items.length; i++) {
      // look for the entry with a matching `code` value
      if (items[i].item_id == item_id) {
        tax_information = items[i].tax_information;
      }
    }
    if (status_continue == true) {
      if (is_variation == "Yes") {
        $("#is_variation_product").html(100);
        openProductEditModal(item_id, item_name, item_id);
      } else {
        item_price = parseFloat($(this).attr("data-price")).toFixed(
          ir_precision
        );
        let row_number = $("#modal_item_row").html();
        //get item/menu id from modal

        let stock_not_available = $("#stock_not_available").val();
        let has_kitchen = $("#has_kitchen").val();
        let qty_current = 1;
        $(".single_order_column").each(function () {
          let qty_counter = Number(
            $(this)
              .find("#item_quantity_table_" + item_id)
              .html()
          );
          if (qty_counter && qty_counter != "NAN") {
            qty_current += qty_counter;
          }
        });
        if (!check_current_qty(item_id, qty_current) && has_kitchen == "No") {
          swal({
            title: warning + "!",
            text: stock_not_available,
            confirmButtonText: ok,
            confirmButtonColor: "#b6d6f6",
          });
        } else {
          //get item/menu name from modal

          //get item/menu vat percentage from modal
          let item_vat_percentage = $(this).find(".item_vat_percentage").html();
          item_vat_percentage =
            item_vat_percentage == "" ? "0.00" : item_vat_percentage;
          //discount amount from modal
          let item_discount_amount = parseFloat(0).toFixed(ir_precision);

          //discount input value of modal
          let discount_input_value = 0;

          //get item/menu price from modal without discount
          let item_total_price_without_discount =
            parseFloat(item_price).toFixed(ir_precision);

          tax_information = IsJsonString(tax_information)
            ? JSON.parse(tax_information)
            : "";
          if (tax_information.length > 0) {
            for (let k in tax_information) {
              tax_information[k].item_vat_amount_for_unit_item = (
                (parseFloat(item_price) *
                  parseFloat(tax_information[k].tax_field_percentage)) /
                parseFloat(100)
              ).toFixed(ir_precision);
              tax_information[k].item_vat_amount_for_all_quantity = (
                parseFloat(tax_information[k].item_vat_amount_for_unit_item) *
                parseFloat(1)
              ).toFixed(ir_precision);
            }
          }

          //get vat amount for specific item/menu
          let item_vat_amount_for_unit_item = (
            (parseFloat(item_price) * parseFloat(item_vat_percentage)) /
            parseFloat(100)
          ).toFixed(ir_precision);

          //get item/menu total price from modal
          let item_total_price = parseFloat(item_price).toFixed(ir_precision);

          //get item/menu quantity from modal
          let item_quantity = "1";

          //get vat amount for specific item/menu
          let item_vat_amount_for_all_quantity = (
            parseFloat(item_vat_amount_for_unit_item) *
            parseFloat(item_quantity)
          ).toFixed(ir_precision);

          //get selected modifiers
          let selected_modifiers = "";
          let selected_modifiers_id = "";
          let selected_modifiers_price = "";

          //get modifiers price
          let modifiers_price = parseFloat(0).toFixed(ir_precision);

          //get note
          let note = "";

          //construct div
          let draw_table_for_order = "";

          draw_table_for_order +=
            row_number > 0
              ? ""
              : '<div data-cp_type="1" class="single_order focus-cart customer_panel" data-id="' +
                item_id +
                '" id="order_for_item_' +
                item_id +
                '">';
          draw_table_for_order += '<div class="first_portion">';
          draw_table_for_order +=
            '<span class="item_previous_id ir_display_none" id="item_previous_id_table' +
            item_id +
            '"></span>';
          draw_table_for_order +=
            '<span class="item_cooking_done_time ir_display_none" id="item_cooking_done_time_table' +
            item_id +
            '"></span>';
          draw_table_for_order +=
            '<span class="item_cooking_start_time ir_display_none" id="item_cooking_start_time_table' +
            item_id +
            '"></span>';
          draw_table_for_order +=
            '<span class="item_cooking_status ir_display_none" id="item_cooking_status_table' +
            item_id +
            '"></span>';
          draw_table_for_order +=
            '<span class="item_type ir_display_none" id="item_type_table' +
            item_id +
            '">' +
            item_type +
            "</span>";
          draw_table_for_order +=
            '<span class="item_vat ir_display_none" id="item_vat_percentage_table' +
            item_id +
            '">' +
            JSON.stringify(tax_information) +
            "</span>";
          draw_table_for_order +=
            '<span class="item_discount ir_display_none" id="item_discount_table' +
            item_id +
            '">' +
            item_discount_amount +
            "</span>";
          draw_table_for_order +=
            '<span class="item_price_without_discount ir_display_none" id="item_price_without_discount_' +
            item_id +
            '">' +
            item_total_price_without_discount +
            "</span>";
          $("#is_variation_product").html(
            search_by_menu_id_getting_parent_id(item_id, window.items)
          );
          draw_table_for_order +=
            '<div class="single_order_column first_column cart_item_counter  arabic_text_left" data-id="' +
            item_id +
            '"> <span class="arabic_text_left 1_cp_name_' +
            item_id +
            '"  id="item_name_table_' +
            item_id +
            '">' +
            item_name +
            "</span></div>";
          draw_table_for_order +=
            '<div class="single_order_column second_column">' +
            currency +
            ' <span class="custom_unit_price 1_cp_price_' +
            item_id +
            '" id="item_price_table_' +
            item_id +
            '">' +
            item_price +
            "</span></div>";
          draw_table_for_order +=
            '<div class="single_order_column third_column"> <span class="qty_item_custom 1_cp_qty_' +
            item_id +
            '" id="item_quantity_table_' +
            item_id +
            '">' +
            item_quantity +
            '</span> </div>';
          draw_table_for_order +=
            '<div class="single_order_column forth_column"><input type="" name="" placeholder="Amt or %" class="1_cp_discount_' +
            item_id +
            ' discount_cart_input" id="percentage_table_' +
            item_id +
            '" value="' +
            discount_input_value +
            '" disabled></div>';
          draw_table_for_order +=
            '<div class="single_order_column fifth_column">' +
            currency +
            ' <span class="1_cp_total_' +
            item_id +
            '" id="item_total_price_table_' +
            item_id +
            '">' +
            item_total_price +
            "</span></div>";
          draw_table_for_order += "</div>";

          if (selected_modifiers != "") {
            draw_table_for_order +=
              '<div  style="display:flex;"  data-id="' + item_id + '" class="second_portion">';
            draw_table_for_order +=
              '<span id="item_modifiers_id_table_' +
              item_id +
              '" class="ir_display_none">' +
              selected_modifiers_id +
              "</span>";
            draw_table_for_order +=
              '<span id="item_modifiers_price_table_' +
              item_id +
              '" class="ir_display_none">' +
              selected_modifiers_price +
              "</span>";
            draw_table_for_order +=
              '<div class="single_order_column first_column cart_item_counter  arabic_text_left"  data-id="' +
              item_id +
              '"><span class="modifier_txt_custom" id="item_modifiers_table_' +
              item_id +
              '">' +
              selected_modifiers +
              "</span></div>";
            draw_table_for_order +=
              '<div class="single_order_column fifth_column">' +
              currency +
              ' <span id="item_modifiers_price_table_' +
              item_id +
              '">' +
              modifiers_price +
              "</span></div>";
            draw_table_for_order += "</div>";
          }
          if (note != "") {
            draw_table_for_order += '<div class="third_portion">';
            draw_table_for_order +=
              '<div class="single_order_column first_column cart_item_counter  arabic_text_left modifier_txt_custom"  data-id="' +
              item_id +
              '">' +
              note_txt +
              ': <span id="item_note_table_' +
              item_id +
              '">' +
              note +
              "</span></div>";
            draw_table_for_order += "</div>";
          }

          draw_table_for_order += row_number > 0 ? "" : "</div>";

          //add to top if new it or update the row
          if (row_number > 0) {
            $(
              ".order_holder .single_order[data-single-order-row-no=" +
                row_number +
                "]"
            ).empty();
            $(
              ".order_holder .single_order[data-single-order-row-no=" +
                row_number +
                "]"
            ).html(draw_table_for_order);
          } else {
            $(".order_holder").prepend(draw_table_for_order);
          }
          if (waiter_app_status == "Yes") {
            $.notifyBar({ cssClass: "success", html: item_add_success });
          }
          checkIsDiplomat();
          reset_on_modal_close_or_add_to_cart();
          // return false;
          //do calculation on table
          do_addition_of_item_and_modifiers_price();
        }
      }
    }
  });
  $(document).on("click", "#cancel_button", function (e) {
    //get total items in cart
    let total_items_in_cart = $(".order_holder .single_order").length;
    if (total_items_in_cart > 0) {
      swal(
        {
          title: warning + "!",
          text: cart_not_empty_want_to_clear,
          confirmButtonColor: "#3c8dbc",
          confirmButtonText: ok,
          showCancelButton: true,
        },
        function () {
          $(".order_table_holder .order_holder").empty();
          clearFooterCartCalculation();
          // $(".main_top").find("button").css("background-color", "#109ec5");
          $(".main_top").find("button").attr("data-selected", "unselected");
          $("#table_button").attr("disabled", false);
          $(".single_table_div[data-table-checked=checked]").attr(
            "data-table-checked",
            "unchecked"
          );

          let wid = $("#default_waiter_hidden").val();

          if (wid) {
            if (waiter_app_status != "Yes") {
              $("#select_waiter").val(wid);
            }
          } else {
            if (waiter_app_status != "Yes") {
              $("#select_waiter").val("");
            }
          }

          $("#place_edit_order").html(place_order);
        }
      );
    }
  });

  $(document).on("click", ".edit_item", function () {
    //add for vr01
      if($(".focus-cart").hasClass("selected")){
          $("#modal_item_price").html(0);
          $("#vr01_modal_price_variable").html(0);
          $("#is_variation_product").html(0);
          $(".variation_div_modal").hide();
          $(".section3_vr").empty();
          $(".prom_txt").html("");
          $("#modal_discount").removeAttr("readonly");

          let single_order_element_object = $(".focus-cart").parent().find(".selected");
          let menu_id = Number($(".focus-cart").parent().find(".selected").attr("data-id"));

          let item_price = single_order_element_object.find("#item_price_table_" + menu_id).html();

          let parent_id = Number(single_order_element_object.find('.edit_item').attr("data-parent_id"));
          let check_parent_id = 0;
          let check_parent_price = 0;
          if (parent_id) {
              $("#vr01_modal_price_variable").html(item_price);
              $(".variation_div_modal").show();
              $("#is_variation_product").html(parent_id);

              let foundItems_variations = get_variations_search_by_menu_id(
                  parent_id,
                  window.items
              );

              let variations = "";
              let variations_update = "";
              let html_li_pagination_vr = "";
              let display_none_vr = "";
              let i = 1;
              let vri = 1;

              for (let key1 in foundItems_variations) {
                  let item_price = 0;
                  item_price = parseFloat(foundItems_variations[key1].price).toFixed(
                      ir_precision
                  );
                  let check_status = "";
                  let selected_status = "unselected";
                  if (menu_id == Number(foundItems_variations[key1].item_id)) {
                      selected_status = "selected";
                      check_status = "checked";
                  }

                  variations_update+="<div  style='display: "+display_none_vr+";' class='vr01_modal_class vr01_modal_class"+vri+"' data-id='" +
                      foundItems_variations[key1].item_id +
                      "' data-code='" +
                      foundItems_variations[key1].item_code +
                      "'  data-item_name_tmp='" +
                      foundItems_variations[key1].item_name_tmp +
                      "' data-price='" +
                      item_price +
                      "' data-selected='"+selected_status+"' data-menu_tax='" +
                      foundItems_variations[key1].tax_information +
                      "'><button class='secondary-btn focus-btn2 "+selected_status+"'>" + foundItems_variations[key1].item_name + "<span class='vr01_modal_price'> <span>"+price_txt + ":</span> "+item_price +"</span></button></div>";
                  if(i==1){
                      html_li_pagination_vr+='<li class="active_pagination_vr paginationjs-page J-paginationjs-page active" data-num="'+vri+'"><a>1</a></li>';
                  }else{
                      if(i%3==0){
                          vri++;
                          html_li_pagination_vr+='<li class="active_pagination_vr paginationjs-page J-paginationjs-page" data-num="'+vri+'"><a>1</a></li>';
                          display_none_vr = 'none';
                      }
                  }
                  i++;

              }

              //vr01
              $(".section3_vr").empty();
              $(".section3_vr").prepend(variations_update);

              let pagination_html = '<div class="paginationjs" style="margin-top: 0px;">\n' +
                  '                                    <div class="paginationjs-pages">\n' +
                  '                                        <ul>\n' +html_li_pagination_vr+
                  '                                        </ul>\n' +
                  '                                    </div>\n' +
                  '                                </div>';

              $(".pagination_custom_vr").html(pagination_html);
          }

          let row_number = single_order_element_object.attr("data-single-order-row-no");

          let item_name = single_order_element_object
              .find("#item_name_table_" + menu_id)
              .html();

          let item_vat_percentage = single_order_element_object
              .find("#item_vat_percentage_table" + menu_id)
              .html();
          let item_discount_input_value = single_order_element_object
              .find("#percentage_table_" + menu_id)
              .val();
          let item_discount_amount = single_order_element_object
              .find("#item_discount_table" + menu_id)
              .html();
          let item_price_without_discount = single_order_element_object
              .find("#item_price_without_discount_" + menu_id)
              .html();
          let item_quantity = single_order_element_object
              .find("#item_quantity_table_" + menu_id)
              .html();
          let item_price_with_discount = parseFloat(
              single_order_element_object
                  .find("#item_total_price_table_" + menu_id)
                  .html()
          ).toFixed(ir_precision);
          let modifiers_price = parseFloat(0).toFixed(ir_precision);
          let cooking_status = single_order_element_object
              .find("#item_cooking_status_table" + menu_id)
              .html();
          if (
              single_order_element_object.find("#item_modifiers_price_table_" + menu_id)
                  .length > 0
          ) {
              let comma_separeted_modifiers_price = single_order_element_object
                  .find("#item_modifiers_price_table_" + menu_id)
                  .html();
              let modifiers_price_array =
                  comma_separeted_modifiers_price != ""
                      ? comma_separeted_modifiers_price.split(",")
                      : "";
              modifiers_price_array.forEach(function (modifier_price) {
                  modifiers_price = (
                      parseFloat(modifiers_price) + parseFloat(modifier_price)
                  ).toFixed(ir_precision);
              });
              parseFloat(
                  single_order_element_object
                      .find("#item_modifiers_price_table_" + menu_id)
                      .html()
              ).toFixed(ir_precision);
          }

          let note = single_order_element_object
              .find("#item_note_table_" + menu_id)
              .html();

          $(".get_note").removeClass("selected");

          $(".get_note").each(function() {
              let this_note = $(this).text();
              if(note==this_note){
                  $(this).addClass("selected");
              }
          });

          let modifiers_id = "";
          if (
              single_order_element_object.find("#item_modifiers_id_table_" + menu_id)
                  .length > 0
          ) {
              let comma_seperted_modifiers_id = single_order_element_object
                  .find("#item_modifiers_id_table_" + menu_id)
                  .html();
              modifiers_id =
                  comma_seperted_modifiers_id != ""
                      ? comma_seperted_modifiers_id.split(",")
                      : "";
          }
          let modifiers_price_as_per_item_quantity = (
              parseFloat(modifiers_price) * parseFloat(item_quantity)
          ).toFixed(ir_precision);
          let total_price = (
              parseFloat(item_price_with_discount) +
              parseFloat(modifiers_price_as_per_item_quantity)
          ).toFixed(ir_precision);

          $("#modal_item_row").html(row_number);
          $("#modal_item_id").html(menu_id);
          $("#item_name_modal_custom").html(item_name);
          $("#modal_item_price").html(item_price);
          $("#modal_item_price_variable").html(item_price_with_discount);
          $("#modal_item_price_variable_without_discount").html(
              item_price_without_discount
          );

          $("#modal_item_vat_percentage").html(item_vat_percentage);
          $("#modal_discount_amount").html(item_discount_amount);
          $("#item_quantity_modal").val(item_quantity);
          $("#modal_modifiers_unit_price_variable").html(modifiers_price);
          $("#modal_modifier_price_variable").html(
              modifiers_price_as_per_item_quantity
          );
          $("#modal_discount").val(item_discount_input_value);
          $("#modal_item_note").val(note);
          $("#modal_total_price").val(total_price);
          //add modifiers to pop up associated to menu
          let foundItems = search_by_menu_id(menu_id, window.items);

          let originalMenu = foundItems[0].modifiers;
          let modifiers = "";

          let html_li_pagination_modifier = "";
          let modifiers_update = "";
          let display_none_modifir = "";
          let i = 1;
          let vri = 1;



          if (parent_id) {
              foundItems = search_by_menu_id(parent_id, window.items);
              originalMenu = foundItems[0].modifiers;
              modifiers = "";
              let html_li_pagination_modifier = "";
              let modifiers_update = "";
              let display_none_modifir = "";
              i = 1;
              vri = 1;
              for (let key in originalMenu) {
                  let selectedOrNot = "unselected";
                  let backgroundColor = "";
                  if (
                      typeof modifiers_id !== "undefined" &&
                      modifiers_id.includes(originalMenu[key].menu_modifier_id)
                  ) {
                      selectedOrNot = "selected";
                      //this is dynamic style
                      // backgroundColor = 'style="background-color:#B5D6F6;"';
                  } else {
                      selectedOrNot = "unselected";
                      backgroundColor = "";
                  }

                  /*new_added_zak*/
                  let style_content = "";
                  let tmp_class = "";
                  let tmp_price = originalMenu[key].menu_modifier_price;
                  let modifier_ingrs = "";
                  let blank_div = "";
                  if (Number(originalMenu[key].type) == 2) {
                      style_content = "none";
                      tmp_class = "single_modifier";
                      modifier_ingrs = get_modifier_ingrs_search_by_menu_modi_id(
                          originalMenu[key].modifier_row_id,
                          window.item_modifier_ingrs
                      );
                      let modifier_ingrs_length = Number(modifier_ingrs.length);
                      if (modifier_ingrs_length % 2 != 0) {
                          blank_div =
                              "\n" +
                              '<div class="vr01_modal_class_mod" data-selected="unselected" style="\n' +
                              "    pointer-events: none;\n" +
                              '"></div>';
                      }
                  }

                  modifiers_update +=
                      "<div " +
                      backgroundColor +
                      '  style="display:'+display_none_modifir+'" class="modal_modifiers'+vri+' modal_modifiers ' +
                      tmp_class +
                      '" data-type="' +
                      originalMenu[key].type +
                      '" style="display:' +
                      style_content +
                      '"  data-menu_tax="' +
                      originalMenu[key].tax_information +
                      '"  data-price="' +
                      originalMenu[key].menu_modifier_price +
                      '" data-selected="' +
                      selectedOrNot +
                      '" id="modifier_' +
                      originalMenu[key].menu_modifier_id +
                      '">';
                  modifiers_update +=
                      '<button class="secondary-btn focus-btn2 '+selectedOrNot+'"><span class="p">'+originalMenu[key].menu_modifier_name+'</span> <span class="modifier_price"> <span>' +
                      price_txt +
                      ":</span> " +
                      originalMenu[key].menu_modifier_price +
                      "</span></div>";
                  modifiers_update += "</div>";
                  if(i==1){
                      html_li_pagination_modifier+='<li class="active_pagination_modifier paginationjs-page J-paginationjs-page active" data-num="'+vri+'"><a>1</a></li>';
                  }else{
                      if(i%3==0){
                          vri++;
                          html_li_pagination_modifier+='<li class="active_pagination_modifier paginationjs-page J-paginationjs-page" data-num="'+vri+'"><a>1</a></li>';
                          display_none_modifir = 'none';
                      }
                  }
                  i++;
              }
              $(".section3_new").empty();
              if(modifiers_update){
                  $(".modifier_div_modal").show();
                  $(".section3_new").prepend(modifiers_update);
                  let pagination_html = '<div class="paginationjs" style="margin-top: 0px;">\n' +
                      '                                    <div class="paginationjs-pages">\n' +
                      '                                        <ul>\n' +html_li_pagination_modifier+
                      '                                        </ul>\n' +
                      '                                    </div>\n' +
                      '                                </div>';

                  $(".pagination_custom_modifier").html(pagination_html);
              }else{
                  $(".modifier_div_modal").hide();
              }
          }else{
              for (let key in originalMenu) {
                  let selectedOrNot = "unselected";
                  let backgroundColor = "";
                  if (
                      typeof modifiers_id !== "undefined" &&
                      modifiers_id.includes(originalMenu[key].menu_modifier_id)
                  ) {
                      selectedOrNot = "selected";
                      //this is dynamic style
                      // backgroundColor = 'style="background-color:#B5D6F6;"';
                  } else {
                      selectedOrNot = "unselected";
                      backgroundColor = "";
                  }

                  /*new_added_zak*/
                  let style_content = "";
                  let tmp_class = "";
                  let tmp_price = originalMenu[key].menu_modifier_price;
                  let modifier_ingrs = "";
                  let blank_div = "";
                  let modifier_full_name = originalMenu[key].menu_modifier_name;
                  if (Number(originalMenu[key].type) == 2) {
                      style_content = "none";
                      tmp_class = "single_modifier";
                      modifier_ingrs = get_modifier_ingrs_search_by_menu_modi_id(
                          originalMenu[key].modifier_row_id,
                          window.item_modifier_ingrs
                      );
                      let modifier_ingrs_length = Number(modifier_ingrs.length);
                      if (modifier_ingrs_length % 2 != 0) {
                          blank_div =
                              "\n" +
                              '<div class="vr01_modal_class_mod" data-selected="unselected" style="\n' +
                              "    pointer-events: none;\n" +
                              '"></div>';
                      }

                      for (let key1 in modifier_ingrs) {
                          $(
                              ".hidden_mod_cart_" +
                              menu_id +
                              "_" +
                              originalMenu[key].menu_modifier_id
                          ).each(function () {
                              let this_value = $(this).val();
                              if (
                                  this_value ===
                                  originalMenu[key].menu_modifier_id +
                                  "_" +
                                  modifier_ingrs[key1].inline_mod_row
                              ) {
                                  modifier_full_name =
                                      originalMenu[key].menu_modifier_name +
                                      "(" +
                                      modifier_ingrs[key1].menu_ingr_name +
                                      ")";
                              }
                          });
                      }
                  }

                  modifiers_update +=
                      "<div " +
                      backgroundColor +
                      '  style="display:'+display_none_modifir+'" class="modal_modifiers'+vri+' modal_modifiers ' +
                      tmp_class +
                      '" data-type="' +
                      originalMenu[key].type +
                      '" style="display:' +
                      style_content +
                      '"  data-menu_tax="' +
                      originalMenu[key].tax_information +
                      '"  data-price="' +
                      originalMenu[key].menu_modifier_price +
                      '" data-selected="' +
                      selectedOrNot +
                      '" id="modifier_' +
                      originalMenu[key].menu_modifier_id +
                      '">';
                  modifiers_update +=
                      '<button class="secondary-btn focus-btn2 '+selectedOrNot+'"><span class="p">'+originalMenu[key].menu_modifier_name+'</span> <span class="modifier_price"> <span>' +
                      price_txt +
                      ":</span> " +
                      originalMenu[key].menu_modifier_price +
                      "</span></div>";
                  modifiers_update += "</div>";
                  if(i==1){
                      html_li_pagination_modifier+='<li class="active_pagination_modifier paginationjs-page J-paginationjs-page active" data-num="'+vri+'"><a>1</a></li>';
                  }else{
                      if(i%3==0){
                          vri++;
                          html_li_pagination_modifier+='<li class="active_pagination_modifier paginationjs-page J-paginationjs-page" data-num="'+vri+'"><a>1</a></li>';
                          display_none_modifir = 'none';
                      }
                  }
                  i++;

              }
              $(".section3_new").empty();
              if(modifiers_update){
                  $(".modifier_div_modal").show();
                  $(".section3_new").prepend(modifiers_update);
                  let pagination_html = '<div class="paginationjs" style="margin-top: 0px;">\n' +
                      '                                    <div class="paginationjs-pages">\n' +
                      '                                        <ul>\n' +html_li_pagination_modifier+
                      '                                        </ul>\n' +
                      '                                    </div>\n' +
                      '                                </div>';

                  $(".pagination_custom_modifier").html(pagination_html);
              }else{
                  $(".modifier_div_modal").hide();
              }

          }


          if (Number(check_parent_id)) {
              $("#modifier_" + check_parent_id).attr("data-price", check_parent_price);
              $("#modifier_" + check_parent_id)
                  .find(".modifier_price")
                  .html("<span>" + price_txt + ":</span> " + check_parent_price);
          }
          UIkit.modal("#open-modifiers-notes-modal").show();
      }else{
          alertModal({modalName:"danger", normalTxt: "Please select a item row from cart!"});
          return false;
      }
  });
  $(document).on("click", "#close_item_modal", function (e) {
    reset_on_modal_close_or_add_to_cart();
    $(this)
      .parent()
      .parent()
      .parent()
      .parent()
      .removeClass("active")
      .addClass("inActive");
    setTimeout(function () {
      $(".modal").removeClass("inActive");
    }, 1000);
  });
  $(document).on("click", "#close_add_customer_modal", function (e) {
    $("#customer_name_modal").css("border", "1px solid #B5D6F6");
    $("#customer_phone_modal").css("border", "1px solid #B5D6F6");
    $(this)
      .parent()
      .parent()
      .parent()
      .parent()
      .removeClass("active")
      .addClass("inActive");
    setTimeout(function () {
      $(".modal").removeClass("inActive");
    }, 1000);
    $(".pos__modal__overlay").fadeOut(300);
    reset_on_modal_close_or_add_customer();
  });
  $(document).on("click", ".modal_modifiers", function (e) {
    //get modifier price when it's selected
    let modifier_price = parseFloat($(this).attr("data-price")).toFixed(
      ir_precision
    );
    let this_id = $(this).attr("id").split("_");
    //get total modifier price
    // let total_modifier_price = parseFloat($('#modal_modifier_price_variable').html()).toFixed(ir_precision);
    let total_modifier_price = parseFloat(
      $("#modal_modifiers_unit_price_variable").html()
    ).toFixed(ir_precision);

    let update_modifier_price = 0;
    //add current modifier price to total modifier price
    console.log(total_modifier_price);
    if ($(this).attr("data-selected") == "unselected") {
      // $(this).css("background-color", "#B5D6F6");
      $(this).attr("data-selected", "selected");
      $(this).find(".focus-btn2").addClass("selected");
      $(this).children("input").prop("checked", true);
      if (e.which === 1) {
        $(".vr01_modal_class_mod_" + this_id[1] + ":first").attr(
          "data-selected",
          "selected"
        );
        $(".margin_for_vr01_mod_" + this_id[1] + ":first").prop(
          "checked",
          true
        );
      }

      update_modifier_price = (
        parseFloat(total_modifier_price) + parseFloat(modifier_price)
      ).toFixed(ir_precision);
    } else if ($(this).attr("data-selected") == "selected") {
      $(this).attr("data-selected", "unselected");
      $(this).find(".focus-btn2").removeClass("selected");
      $(this).children("input").prop("checked", false);

      $(".vr01_modal_class_mod_" + this_id[1]).attr(
        "data-selected",
        "unselected"
      );
      $(".margin_for_vr01_mod_" + this_id[1]).prop("checked", false);

      update_modifier_price = (
        parseFloat(total_modifier_price) - parseFloat(modifier_price)
      ).toFixed(ir_precision);
    }

    let checkbox = $(this).children('input[type="checkbox"]');
    /*checkbox.prop('checked', checkbox.prop('checked'));*/

    //update total modifier price html element
    // $('#modal_modifier_price_variable').html(update_modifier_price);
    $("#modal_modifiers_unit_price_variable").html(update_modifier_price);

    //update all total with item price
    update_all_total_price();
  });
  $(document).on("click", ".vr01_modal_class:visible", function (e) {
    //get modifier price when it's selected
    let vr01_modal_price = parseFloat($(this).attr("data-price")).toFixed(
      ir_precision
    );
    let item_id = $(this).attr("data-id");

    let modal_item_vat_percentage = $(this).attr("data-menu_tax");
    let item_name_tmp = $(this).attr("data-item_name_tmp");
    let modal_code = $(this).attr("data-code");
    $("#modal_item_id").html(item_id);

    $(".vr01_modal_class").attr("data-selected", "unselected");
    $(".vr01_modal_class").find(".focus-btn2").removeClass("selected");

    if ($(this).attr("data-selected") == "unselected") {
      $(this).attr("data-selected", "selected");
      $(this).find(".focus-btn2").addClass("selected");
      $(this).children("input").prop("checked", true);
    } else if ($(this).attr("data-selected") == "selected") {
      $(this).attr("data-selected", "unselected");
      $(this).find(".focus-btn2").removeClass("selected");
    }



    $("#vr01_modal_price_variable").html(vr01_modal_price);
    $("#modal_item_vat_percentage").html(modal_item_vat_percentage);
    $("#item_name_modal_custom").html(item_name_tmp + " (" + modal_code + ")");

    //update all total with item price
    update_all_vr01_total_price();
  });
  $(document).on("click", ".vr01_modal_class_mod:visible", function (e) {
    //get modifier price when it's selected
    $(".single_modifier").attr("data-selected", "unselected");
    $(".single_modifier").children("input").prop("checked", false);

    let item_id = $(this).attr("data-id");
    let price = $(this).attr("data-price");
    let parent_id = $(this).attr("data-parent_id");
    $(".vr01_modal_class_mod").attr("data-selected", "unselected");

    if ($(this).attr("data-selected") == "unselected") {
      $(this).attr("data-selected", "selected");
      $(this).children("input").prop("checked", true);
    } else if ($(this).attr("data-selected") == "selected") {
      $(this).attr("data-selected", "unselected");
    }

    if ($("#modifier_" + parent_id).attr("data-selected") == "unselected") {
      if (e.which === 1) {
        $("#modifier_" + parent_id).click();
        $("#modifier_" + parent_id).attr("data-price", price);
        $("#modifier_" + parent_id)
          .find(".modifier_price")
          .html("<span>" + price_txt + ":</span> " + price);
      }
    }

    //update all total with item price
    update_all_vr01_total_price();
  });
  //initialize item list
  show_all_items();
  //show all when all button is clicked
  $(document).on(
    "click",
    "#button_category_show_all,#button_category_show_all1",
    function () {
      $(".specific_category_items_holder").fadeOut(0);
      let foundItems = searchItemAndConstructGallery("");
      let searched_category_items_to_show =
        '<div id="searched_item_found" class="specific_category_items_holder 003">';

      for (let key in foundItems) {
        if (foundItems.hasOwnProperty(key)) {
          if (foundItems[key].parent_id == "0") {
            searched_category_items_to_show +=
              '<div class="single_item animate__animated animate__flipInX"  data-price="' +
              foundItems[key].price +
              '"  data-is_variation="' +
              foundItems[key].is_variation +
              '"  data-parent_id="' +
              foundItems[key].parent_id +
              '"   id="item_' +
              foundItems[key].item_id +
              '">';
            searched_category_items_to_show +=
              '<img src="' + foundItems[key].image + '" alt="" width="141">';
            searched_category_items_to_show +=
              '<p class="item_name" data-tippy-content="' +
              foundItems[key].item_name +
              '">' +
              foundItems[key].item_name +
              " (" +
              foundItems[key].item_code +
              ")</p>";
            searched_category_items_to_show +=
              '<p class="item_price">' +
              price_txt +
              ": " +
              foundItems[key].price +
              "</p>";
            searched_category_items_to_show += "</div>";
          }
        }
      }
      searched_category_items_to_show += "<div>";
      $("#searched_item_found").remove();
      $(".specific_category_items_holder").fadeOut(0);
      $(".category_items").prepend(searched_category_items_to_show);
      tippy(".item_name", {
        placement: "bottom-start",
      });
    }
  );
  $(document).on("click", "#increase_item_modal", function (e) {
    //get recent item price
    let current_item_price_modal = parseFloat(
      $("#modal_item_price").html()
    ).toFixed(ir_precision);
    //get current item quantity
    let current_item_quantity = parseInt($("#item_quantity_modal").val());
    //increase quantity
    current_item_quantity++;
    //update quantity
    $("#item_quantity_modal").val(current_item_quantity);

    //update all total with item price
    update_all_total_price();
  });
  $(document).on(
    "dblclick",
    ".holder .order_details > .single_order",
    function () {
      let sale_id = $(this).attr("id").substr(6);
      get_details_of_a_particular_order_for_modal(sale_id);
    }
  );

  // $(document).on("click", "#plus_button", function (e) {
  //   $("#add_customer_modal").addClass("active");
  //   $(".pos__modal__overlay").fadeIn(200);
  // });
  $(document).on("click", ".modify_order_table_modal", function (e) {
    let table_id = $(this).attr("id").substr(19);
    //get total items in cart
    let total_items_in_cart = $(".order_holder .single_order").length;

    if (total_items_in_cart > 0) {
      swal(
        {
          title: warning + "!",
          text: cart_not_empty,
          confirmButtonColor: "#3c8dbc",
          confirmButtonText: ok,
          showCancelButton: true,
        },
        function () {
          $(".order_holder").empty();
          $.ajax({
            url:
              base_url + "Sale/get_all_information_of_a_sale_by_table_id_ajax",
            method: "post",
            data: {
              table_id: table_id,
              csrf_irestoraplus: csrf_value_,
            },
            success: function (response) {
              response = JSON.parse(response);
              arrange_info_on_the_cart_to_modify(response);
              $(".single_table_div[data-table-checked=checked]").css(
                "background-color",
                "#ffffff"
              );
              $(".single_table_div[data-table-checked=checked]").attr(
                "data-table-checked",
                "unchecked"
              );
              $("#show_tables_modal").slideUp(333);
            },
            error: function () {
              alert(a_error);
            },
          });
        }
      );
    } else {
      $.ajax({
        url: base_url + "Sale/get_all_information_of_a_sale_by_table_id_ajax",
        method: "post",
        data: {
          table_id: table_id,
          csrf_irestoraplus: csrf_value_,
        },
        success: function (response) {
          response = JSON.parse(response);
          arrange_info_on_the_cart_to_modify(response);
          $(".single_table_div[data-table-checked=checked]").css(
            "background-color",
            "#ffffff"
          );
          $(".single_table_div[data-table-checked=checked]").attr(
            "data-table-checked",
            "unchecked"
          );
          $("#show_tables_modal").slideUp(333);
        },
        error: function () {
          alert(a_error);
        },
      });
    }
  });
  $(document).on("click", "#dine_in_button", function (e) {
    if ($(".order_table_holder .order_holder > .modification").length > 0) {
      let sale_id = $(
        ".order_table_holder .order_holder > .modification"
      ).html();
      let sale_no = $(".order_table_holder .order_holder > .modification").attr(
        "data-sale-no"
      );
    }
    if (typeof sale_no !== "undefined") {
      $("#order_number_or_new_text").html(sale_no);
      $(".bottom_order").val(sale_no);
    } else {
      $("#order_number_or_new_text").html("New");
    }
/*    $("#show_tables_modal2").addClass("active");
    $(".pos__modal__overlay").fadeIn(200);*/
      UIkit.modal("#open-tables-modal").show();

    let proceed_to_payment = $("#proceed_to_payment").val();
    $(".bottom_person").val("1");
  });
  $(document).on("click", "#order_details_close_button", function (e) {
    $(this)
      .parent()
      .parent()
      .parent()
      .removeClass("active")
      .addClass("inActive");
    setTimeout(function () {
      $(".modal").removeClass("inActive");
    }, 1000);
    $(".pos__modal__overlay").fadeOut(300);
  });
  $(document).on("click", "#order_details_close_button2", function (e) {
    $("#order_detail_modal").removeClass("active");
    $(".pos__modal__overlay").fadeOut(300);
  });

  $("#close_order_button,#order_details_close_order_button").on(
    "click",
    function () {
      if (
        $(".holder .order_details > .single_order[data-selected=selected]")
          .length > 0
      ) {
        let sale_id = $(
          ".holder .order_details .single_order[data-selected=selected]"
        )
          .attr("id")
          .substr(6);
        if ($("#open_orders_order_status_" + sale_id).html() == "1") {
          swal({
            title: warning + "!",
            text: close_order_without,
            confirmButtonText: ok,
            confirmButtonColor: "#b6d6f6",
          });
          return false;
        }
        swal(
          {
            title: warning + "!",
            text: sure_delete_this_order,
            confirmButtonColor: "#3c8dbc",
            confirmButtonText: ok,
            showCancelButton: true,
          },
          function () {
            close_order(sale_id, 0);
          }
        );
      } else {
        alertModal({modalName:"danger", normalTxt: please_select_open_order})
        // swal({
        //   title: warning + "!",
        //   text: please_select_open_order,
        //   confirmButtonText: ok,
        //   confirmButtonColor: "#b6d6f6",
        // });
      }
    }
  );
  $(document).on("click", "#decrease_item_modal", function (e) {
    //get recent item price
    let current_item_price_modal = parseFloat(
      $("#modal_item_price").html()
    ).toFixed(ir_precision);
    //get current item quantity
    let current_item_quantity = parseInt($("#item_quantity_modal").val());

    //decrease quantity if greater than 1
    if (current_item_quantity > 1) current_item_quantity--;

    //update quantity

    $("#item_quantity_modal").val(current_item_quantity);
    //update all total with item price
    update_all_total_price();
  });
  $("#last_ten_sales_close_button,#last_ten_sales_close_button_cross").on(
    "click",
    function () {
      $(this)
        .parent()
        .parent()
        .parent()
        .parent()
        .parent()
        .parent()
        .parent()
        .parent()
        .removeClass("active")
        .addClass("inActive");
      setTimeout(function () {
        $(".modal").removeClass("inActive");
      }, 1000);
      $(".pos__modal__overlay").fadeOut(300);
      reset_last_10_sales_modal();
    }
  );
  $("#customer_dob_modal").datepicker({
    dateFormat: "yy-mm-dd",
    changeYear: true,
    changeMonth: true,
    showMonthAfterYear: true, //this is what you are looking for
    maxDate: 0,
  });
  $("#customer_doa_modal").datepicker({
    dateFormat: "yy-mm-dd",
    changeYear: true,
    changeMonth: true,
    showMonthAfterYear: true, //this is what you are looking for
    maxDate: 0,
  });
  $(document).on("click", "#last_ten_sales_button", function (e) {

    $.ajax({
      url: base_url + "Sale/get_last_10_sales_ajax",
      method: "GET",
      success: function (response) {
        let orders = JSON.parse(response);
        let last_10_orders = "";
        for (let key in orders) {
          let order_name = "";
          if (orders[key].order_type == "1") {
            order_name = "A " + orders[key].sale_no;
          } else if (orders[key].order_type == "2") {
            order_name = "B " + orders[key].sale_no;
          } else if (orders[key].order_type == "3") {
            order_name = "C " + orders[key].sale_no;
          }
            let tables_booked = orders[key].orders_table_text;
          let phone_text_ = "";
          if (orders[key].phone) {
            phone_text_ = " (" + orders[key].phone + ")";
          }

          let table_name =
            orders[key].table_name != null ? orders[key].table_name : "&nbsp;";
          last_10_orders +=
            '<div class="single_last_ten_sale" id="last_ten_' +
            orders[key].id +
            '" data-selected="unselected">';
          last_10_orders +=
            '<div class="first_column column">' + order_name + "</div>";
          last_10_orders +=
            '<div class="second_column column">' +
            orders[key].customer_name +
            phone_text_ +
            "</div>";
          last_10_orders +=
            '<div class="third_column column">' + tables_booked + "</div>";
          last_10_orders += "</div>";
        }
        $(".last_ten_sales_holder .hold_list_holder .detail_holder ").empty();
        $(".last_ten_sales_holder .hold_list_holder .detail_holder ").prepend(
          last_10_orders
        );
      },
      error: function () {
        alert(a_error);
      },
    });
  });

  $(document).on("click", "#cancel_order_button", function (e) {
    e.preventDefault();
      let select_running_order_obj = $(".select_running_order").parent().hasClass("active");
      if (select_running_order_obj) {
          pagi_resoans();
        UIkit.modal(document.querySelector('#open-close-without-payment')).show();
      } else {
          alertModal({modalName:"danger", normalTxt: please_select_order_to_proceed});
      }
  });


  $(document).on("click", "#create_bill_and_close", function (e) {
      let select_running_order_obj = $(".select_running_order").parent().hasClass("active");
      if (select_running_order_obj) {
          UIkit.modal(document.querySelector('#open-bill-language')).show();
     /* $("#bill_modal_print").addClass("active");
      $(".pos__modal__overlay").fadeIn(200);*/
    } else {
        alertModal({modalName:"danger", normalTxt: please_select_open_order})
    }
  });


  $(document).on("click", "#bill_order_action", function (e) {
    $("#print_type").val(2);
      let select_running_order_obj = $(".select_running_order").parent().hasClass("active");
      if (select_running_order_obj) {
          let sale_id = $(".select_running_order").parent().parent().find(".active").attr("data-id");
      let this_action = $(this);
      let print_type_bill = $(".print_type_bill").val();
      let selected_language =    $(".set_active_bill_language").parent().find(".active_bill_language").attr("data-lang");
      if(selected_language==''){
          selected_language = "english";
      }
      if (print_type_bill == "web_browser") {
        let newWindow = open(
          base_url + "Sale/print_bill/" + sale_id + "/" + selected_language,
          "Print Invoice",
          "width=450,height=550"
        );
        newWindow.focus();
        newWindow.onload = function () {
          newWindow.document.body.insertAdjacentHTML("afterbegin");
        };
      } else {
        $("#finalize_order_modal").removeClass("active");
        $(".pos__modal__overlay").fadeOut(300);
        $.ajax({
          url: base_url + "Authentication/printSaleBillByAjax",
          method: "post",
          dataType: "json",
          data: {
            sale_id: sale_id,
          },
          success: function (data) {
            if (data.printer_server_url) {
              $.ajax({
                url:
                  data.printer_server_url +
                  "print_server/irestora_printer_server.php",
                method: "post",
                dataType: "json",
                data: {
                  content_data: JSON.stringify(data.content_data),
                },
                success: function (data) {},
                error: function () {},
              });
            }
          },
          error: function () {},
        });
      }
    } else {
      swal({
        title: warning + "!",
        text: please_select_order_to_proceed + "!",
        confirmButtonText: ok,
        confirmButtonColor: "#b6d6f6",
      });
    }
  });

  $(document).on("click", "#cancel_order_action", function (e) {
    let cancel_reason_id = $(".reasons:checked").val();
    let select_running_order_obj = $(".reason_parent").parent().hasClass("active_reasons");
      if (select_running_order_obj) {
          let sale_id = $(".select_running_order").parent().parent().find(".active").attr("data-id");
      swal(
        {
          title: warning + "!",
          text: sure_cancel_this_order,
          confirmButtonColor: "#3c8dbc",
          confirmButtonText: ok,
          showCancelButton: true,
        },
        function () {
          cancel_order(sale_id, cancel_reason_id);
            UIkit.modal(document.getElementById('open-close-without-payment')).hide();
        }
      );
    } else {
          alertModalCustom({modalName:"danger_update", normalTxt: "Please select a cancellation reason.",re_open_modal:"target: #open-close-without-payment"})
    }
  });

  //when add to card button is clicked information goes to table of middle to top
  $(document).on("click", "#add_to_cart", function (e) {
    //vr01
    let is_variation_product = Number($("#is_variation_product").html());
    let margin_for_vr01_mod = Number($(".margin_for_vr01_mod").length);
    let status = false;
    let status_ = false;
    $(".vr01_modal_class").each(function () {
      if ($(this).attr("data-selected") == "selected") {
        status = true;
        status_ = true;
      }
    });

    if (is_variation_product && !status) {
        alertModalCustom({modalName:"danger_update", normalTxt: selected_variation,re_open_modal:"target: #open-modifiers-notes-modal"});
    } else {
      let row_number = $("#modal_item_row").html();

      //get item/menu id from modal
      let item_id = $("#modal_item_id").html();
      //remove if it is edited update of previous added item based on id
      // if($('#order_for_item_'+item_id).length>0){
      // 	$('#order_for_item_'+item_id).remove();
      // }
      //get item/menu name from modal
      let item_name = $("#item_name_modal_custom").html();
      //get item/menu vat percentage from modal
      let item_vat_percentage = $("#modal_item_vat_percentage").html();
      item_vat_percentage =
        item_vat_percentage == "" ? "0.00" : item_vat_percentage;
      //discount amount from modal
      let item_discount_amount = parseFloat(
        $("#modal_discount_amount").html()
      ).toFixed(ir_precision);

      //discount input value of modal
      let discount_input_value = $("#modal_discount").val();

      //get item/menu price from modal

      let item_price = parseFloat($("#modal_item_price").html()).toFixed(
        ir_precision
      );
      if (is_variation_product) {
        item_price = parseFloat($("#vr01_modal_price_variable").html()).toFixed(
          ir_precision
        );
      }

      //get item/menu price from modal without discount
      let item_total_price_without_discount = parseFloat(
        $("#modal_item_price_variable_without_discount").html()
      ).toFixed(ir_precision);

      //get vat amount for specific item/menu
      let item_vat_amount_for_unit_item = (
        (parseFloat(item_price) * parseFloat(item_vat_percentage)) /
        parseFloat(100)
      ).toFixed(ir_precision);

      //get item/menu total price from modal
      let item_total_price = parseFloat(
        $("#modal_item_price_variable").html()
      ).toFixed(ir_precision);

      //get item/menu quantity from modal
      let item_quantity = $("#item_quantity_modal").val();

      //get vat amount for specific item/menu
      let item_vat_amount_for_all_quantity = (
        parseFloat(item_vat_amount_for_unit_item) * parseFloat(item_quantity)
      ).toFixed(ir_precision);

      //get selected modifiers
      let selected_modifiers = "";
      let selected_modifiers_id = "";
      let selected_tmp_mul_mod_id = "";
      let selected_modifiers_price = "";
      //get tax information

      let j = 1;
      let draw_table_for_order_tmp_modifier_tax = "";
      let tmp_mul_mod_html_hidden = "";
      $(".modal_modifiers[data-selected=selected]").each(function (i, obj) {
        let modifier_id_custom = $(this).attr("id").substr(9);
        /*new_added_zak*/
        let tmp_mul_type_mod_name = "";
        let tmp_mul_mod_id = 0;
        let tmp_modifier_name = $(this).find(".p").html();
        if (
          $(".margin_for_vr01_mod_" + modifier_id_custom + ":checked")
            .parent()
            .find("p")
            .html()
        ) {
          tmp_modifier_name = $(
            ".margin_for_vr01_mod_" + modifier_id_custom + ":checked"
          )
            .parent()
            .find("p")
            .html();
          tmp_mul_mod_id = $(
            ".margin_for_vr01_mod_" + modifier_id_custom + ":checked"
          ).attr("data-id");
          tmp_mul_mod_html_hidden +=
            '<input type="hidden" class="hidden_mod_cart_' +
            item_id +
            "_" +
            modifier_id_custom +
            '"  value="' +
            tmp_mul_mod_id +
            '">';
          selected_tmp_mul_mod_id += tmp_mul_mod_id;
          selected_tmp_mul_mod_id += ",";
        }

        /*end_new_added_zak*/
        if (j == $(".modal_modifiers[data-selected=selected]").length) {
          selected_modifiers += tmp_modifier_name;
          selected_modifiers_id += $(this).attr("id").substr(9);
          selected_modifiers_price += $(this).attr("data-price");
        } else {
          selected_modifiers += tmp_modifier_name + ", ";
          selected_modifiers_id += $(this).attr("id").substr(9) + ",";
          selected_modifiers_price += $(this).attr("data-price") + ",";
        }
        let tax_information = "";
        // iterate over each item in the array
        tax_information = $(this).attr("data-menu_tax");
        // iterate over each item in the array
        for (let i = 0; i < window.item_modifiers.length; i++) {
          // look for the entry with a matching `code` value
          if (
            item_modifiers[i].menu_modifier_id ==
            Number($(this).attr("id").substr(9))
          ) {
            tax_information = item_modifiers[i].tax_information;
          }
        }
        tax_information = IsJsonString(tax_information)
          ? JSON.parse(tax_information)
          : "";
        if (tax_information.length > 0) {
          for (let k in tax_information) {
            tax_information[k].item_vat_amount_for_unit_item = (
              (parseFloat($(this).attr("data-price")) *
                parseFloat(tax_information[k].tax_field_percentage)) /
              parseFloat(100)
            ).toFixed(ir_precision);
            tax_information[k].item_vat_amount_for_all_quantity = (
              parseFloat(tax_information[k].item_vat_amount_for_unit_item) *
              parseFloat(1)
            ).toFixed(ir_precision);
          }
        }
        draw_table_for_order_tmp_modifier_tax +=
          '<span class="item_vat_modifier ir_display_none item_vat_modifier_' +
          item_id +
          '" data-item_id="' +
          item_id +
          '"  data-modifier_price="' +
          $(this).attr("data-price") +
          '" data-modifier_id="' +
          modifier_id_custom +
          '" id="item_vat_percentage_table' +
          item_id +
          "" +
          modifier_id_custom +
          '">' +
          JSON.stringify(tax_information) +
          "</span>";

        j++;
      });

      let tax_information_item = "";
      for (let i = 0; i < window.items.length; i++) {
        // look for the entry with a matching `code` value
        if (items[i].item_id == item_id) {
          tax_information_item = items[i].tax_information;
        }
      }

      tax_information_item = IsJsonString(tax_information_item)
        ? JSON.parse(tax_information_item)
        : "";
      if (tax_information_item.length > 0) {
        for (let k in tax_information_item) {
          tax_information_item[k].item_vat_amount_for_unit_item = (
            (parseFloat(item_price) *
              parseFloat(tax_information_item[k].tax_field_percentage)) /
            parseFloat(100)
          ).toFixed(ir_precision);
          tax_information_item[k].item_vat_amount_for_all_quantity = (
            parseFloat(tax_information_item[k].item_vat_amount_for_unit_item) *
            parseFloat(1)
          ).toFixed(ir_precision);
        }
      }

      //get modifiers price
      let modifiers_price = parseFloat(
        $("#modal_modifier_price_variable").html()
      ).toFixed(ir_precision);

      //get note
      let note = escape_output($("#modal_item_note").val());

      //construct div
      let draw_table_for_order = "";
      draw_table_for_order +=
        row_number > 0
          ? ""
          : '<div data-cp_type="1"  class="single_order focus-cart customer_panel"  data-id="' +
            item_id +
            '"  id="order_for_item_' +
            item_id +
            '">';

      draw_table_for_order += '<div class="first_portion">';
      draw_table_for_order +=
        '<span class="item_previous_id ir_display_none" id="item_previous_id_table' +
        item_id +
        '"></span>';
      draw_table_for_order +=
        '<span class="item_cooking_done_time ir_display_none" id="item_cooking_done_time_table' +
        item_id +
        '"></span>';
      draw_table_for_order +=
        '<span class="item_cooking_start_time ir_display_none" id="item_cooking_start_time_table' +
        item_id +
        '"></span>';
      draw_table_for_order +=
        '<span class="item_cooking_status ir_display_none" id="item_cooking_status_table' +
        item_id +
        '"></span>';
      draw_table_for_order +=
        '<span class="item_type ir_display_none" id="item_type_table' +
        item_id +
        '"></span>';
      draw_table_for_order +=
        '<span class="item_vat ir_display_none" id="item_vat_percentage_table' +
        item_id +
        '">' +
        JSON.stringify(tax_information_item) +
        "</span>";
      draw_table_for_order +=
        '<span class="item_discount ir_display_none" id="item_discount_table' +
        item_id +
        '">' +
        item_discount_amount +
        "</span>";
      draw_table_for_order +=
        '<span class="item_price_without_discount ir_display_none" id="item_price_without_discount_' +
        item_id +
        '">' +
        item_total_price_without_discount +
        "</span>";
      $("#is_variation_product").html(
        search_by_menu_id_getting_parent_id(item_id, window.items)
      );

      draw_table_for_order +=
        '<div class="single_order_column first_column cart_item_counter  arabic_text_left"  data-id="' +
        item_id +
        '"><i data-parent_id="' +
        search_by_menu_id_getting_parent_id(item_id, window.items) +
        '" class="edit_item txt_5" id="edit_item_' +
        item_id +
        '"></i> <span class="arabic_text_left 1_cp_name_' +
        item_id +
        '"  id="item_name_table_' +
        item_id +
        '">' +
        item_name +
        "</span></div>";
      draw_table_for_order +=
        '<div class="single_order_column second_column">' +
        currency +
        ' <span class="custom_unit_price 1_cp_price_' +
        item_id +
        '" id="item_price_table_' +
        item_id +
        '">' +
        item_price +
        "</span></div>";
      draw_table_for_order +=
        '<div class="single_order_column third_column"> <span class="1_cp_qty_' +
        item_id +
        ' qty_item_custom" id="item_quantity_table_' +
        item_id +
        '">' +
        item_quantity +
        '</span></div>';
      draw_table_for_order +=
        '<div class="single_order_column forth_column"><input type="" name="" placeholder="Amt or %" class="1_cp_discount_' +
        item_id +
        ' discount_cart_input" id="percentage_table_' +
        item_id +
        '" value="' +
        discount_input_value +
        '" disabled></div>';
      draw_table_for_order +=
        '<div class="single_order_column fifth_column">' +
        currency +
        ' <span class="1_cp_total_' +
        item_id +
        '" id="item_total_price_table_' +
        item_id +
        '">' +
        item_total_price +
        '</span></div>';
      draw_table_for_order += "</div>";
      if (selected_modifiers != "") {
        draw_table_for_order += '<div style="display:flex;" class="second_portion">';
        draw_table_for_order += draw_table_for_order_tmp_modifier_tax;
        draw_table_for_order +=
          '<span id="item_modifiers_id_table_' +
          item_id +
          '" class="ir_display_none">' +
          selected_modifiers_id +
          "</span>";
        draw_table_for_order +=
          '<span id="item_modifiers_mul_id_table_' +
          item_id +
          '" class="ir_display_none">' +
          selected_tmp_mul_mod_id +
          "</span>";
        draw_table_for_order +=
          '<span id="item_modifiers_price_table_' +
          item_id +
          '" class="ir_display_none">' +
          selected_modifiers_price +
          "</span>";
        draw_table_for_order +=
          '<div class="single_order_column first_column cart_item_counter  arabic_text_left"  data-id="' +
          item_id +
          '"><span class="modifier_txt_custom" id="item_modifiers_table_' +
          item_id +
          '">' +
          selected_modifiers +
          "</span></div>";
        draw_table_for_order +=
          '<div class="single_order_column  fifth_column">' +
          currency +
          ' <span id="item_modifiers_price_table_' +
          item_id +
          '">' +
          modifiers_price +
          "</span></div>";

        draw_table_for_order += tmp_mul_mod_html_hidden + "</div>";
      }
      if (note != "") {
        draw_table_for_order += '<div class="third_portion">';
        draw_table_for_order +=
          '<div class="single_order_column first_column cart_item_counter  arabic_text_leftmodifier_txt_custom"  data-id="' +
          item_id +
          '">' +
          note_txt +
          ': <span id="item_note_table_' +
          item_id +
          '">' +
          note +
          "</span></div>";
        draw_table_for_order += "</div>";
      }

      let modal_item_name_row = $("#modal_item_name_row").html();
      let modal_promo_type_row = Number($("#modal_promo_type_row").html());
      let modal_discount_row = $("#modal_discount_row").html();
      let modal_get_food_menu_id_row = $("#modal_get_food_menu_id_row").html();
      let modal_qty_row = Number($("#modal_qty_row").html());
      let modal_get_qty_row = Number($("#modal_get_qty_row").html());

      let counting_qty =
        parseInt(item_quantity / modal_qty_row) * modal_get_qty_row;

      draw_table_for_order += row_number > 0 ? "" : "</div>";

      //add to top if new it or update the row
      if (row_number > 0) {
        $(
          ".order_holder .single_order[data-single-order-row-no=" +
            row_number +
            "]"
        ).empty();
        $(
          ".order_holder .single_order[data-single-order-row-no=" +
            row_number +
            "]"
        ).html(draw_table_for_order);
        $(
          ".order_holder .single_order[data-single-order-row-no=" +
            row_number +
            "]"
        ).attr("id", "order_for_item_" + item_id);
      } else {
        $(".order_holder").prepend(draw_table_for_order);
      }
      checkIsDiplomat();
      reset_on_modal_close_or_add_to_cart();
        UIkit.modal("#open-modifiers-notes-modal").hide();
      // return false;
      //do calculation on table
      do_addition_of_item_and_modifiers_price();
    }
  });
  //when plus sign is clicked in the table
  $(document).on(
    "click",
    ".single_order .first_portion .third_column .increase_item_table",
    function () {
      let item_id = $(this).attr("id").substr(20);
      let stock_not_available = $("#stock_not_available").val();
      let has_kitchen = $("#has_kitchen").val();
      let qty_current = 1;
      $(".single_order_column").each(function () {
        let qty_counter = Number(
          $(this)
            .find("#item_quantity_table_" + item_id)
            .html()
        );
        if (qty_counter && qty_counter != "NAN") {
          qty_current += qty_counter;
        }
      });
      if (!check_current_qty(item_id, qty_current) && has_kitchen == "No") {
        swal({
          title: warning + "!",
          text: stock_not_available,
          confirmButtonText: ok,
          confirmButtonColor: "#b6d6f6",
        });
      } else {
        let single_order_element_object = $(this).parent().parent().parent();
        //get item id

        //get this item quantity
        let item_quantity = $(this).parent().find("span").html();

        //get this item's unit price
        let unit_price = $(this)
          .parent()
          .parent()
          .find(".second_column span")
          .html();
        let cooking_status = single_order_element_object
          .find("#item_cooking_status_table" + item_id)
          .html();
        /*if (cooking_status != "" && cooking_status !== undefined) {
          swal({
            title: warning + "!",
            text: progress_or_done_kitchen,
            confirmButtonText: ok,
            confirmButtonColor: "#b6d6f6",
          });
          return false;
        }*/
        //increase item quantity
        item_quantity++;

        //increase item's total price based on unit price and quantity
        let updated_total_price = (
          parseFloat(item_quantity) * parseFloat(unit_price)
        ).toFixed(ir_precision);

        //update total price of this item to view
        $(this)
          .parent()
          .parent()
          .find(".item_price_without_discount")
          .html(updated_total_price);

        //update quantity of this item to view
        $(this).parent().find("span").html(item_quantity);

        //do calculation on update values
        do_addition_of_item_and_modifiers_price();
      }
    }
  );
  //when - sign is clicked in the table
  $(document).on(
    "click",
    ".single_order .first_portion .third_column .decrease_item_table",
    function () {
      let single_order_element_object = $(this).parent().parent().parent();
      //get item id
      let item_id = $(this).attr("id").substr(20);
      //get this item quantity
      let item_quantity = $(this).parent().find("span").html();
      //get this item's unit price
      let unit_price = $(this)
        .parent()
        .parent()
        .find(".second_column span")
        .html();
      let cooking_status = single_order_element_object
        .find("#item_cooking_status_table" + item_id)
        .html();

    /*  if (cooking_status != "" && cooking_status !== undefined) {
        swal({
          title: warning + "!",
          text: progress_or_done_kitchen,
          confirmButtonText: ok,
          confirmButtonColor: "#b6d6f6",
        });
        return false;
      }*/
      //decrease item quantity if greater then 1 or remove full item from table
      if (item_quantity > 1) {
        //decrease item quantity
        item_quantity--;

        //decrease item's total price based on unit price and quantity
        let updated_total_price = (
          parseFloat(item_quantity) * parseFloat(unit_price)
        ).toFixed(ir_precision);

        //update total price of this item to view
        $(this)
          .parent()
          .parent()
          .find(".item_price_without_discount")
          .html(updated_total_price);

        //update quantity of this item to view
        $(this).parent().find("span").html(item_quantity);

        //do calculation on update values
        do_addition_of_item_and_modifiers_price();
      } else {
        $("#order_for_item_" + item_id).remove();
        // clearFooterCartCalculation();
        do_addition_of_item_and_modifiers_price();
      }
      //decrease item's total price bsed on unit price and quantity
    }
  );
  //add discount for specific item
  $(document).on(
    "keyup",
    ".single_order .first_portion .forth_column input",
    function (e) {
      let this_value = $.trim($(this).val());
      if (isNaN(this_value)) {
        $(this).val("");
      }
      do_addition_of_item_and_modifiers_price();
    }
  );
  //add discount for specific item in modal
  $(document).on("keyup", "#modal_discount", function (e) {
    let this_value = $(this).val();
    if (
      $.trim(this_value) == "" ||
      $.trim(this_value) == "%" ||
      $.trim(this_value) == "%%" ||
      $.trim(this_value) == "%%%" ||
      $.trim(this_value) == "%%%%"
    ) {
    } else {
      let Disc_fields = this_value.split("%");
      let discP = Disc_fields[1];
      if (discP == "") {
      } else {
        if (isNaN(this_value)) {
          $(this).val("");
        }
      }
    }

    update_all_total_price();
  });
  $(document).on("click", "#submit_discount_custom", function (e) {
    checkDiscountType();
  });
  $(document).on("click", "#cancel_discount_modal", function (e) {
    $("#sub_total_discount").val("");
    $("#sub_total_discount1").val("");
    checkDiscountType();
    do_addition_of_item_and_modifiers_price();
  });
  $(document).on("click", "#cancel_charge_value", function (e) {
    do_addition_of_item_and_modifiers_price();
  });

  $(document).on("keyup", "#sub_total_discount1", function (e) {
    //if the letter is not digit then display error and don't type anything
    let this_value = $.trim($(this).val());
    if (isNaN(this_value)) {
      $(this).val("");
      this_value = "";
    }

    $("#sub_total_discount").val(this_value);
    checkDiscountType();
    do_addition_of_item_and_modifiers_price();
  });
  function checkDiscountType() {
    let set_discount_type = $(".set_discount_type").parent().find(".selected").length;
    let this_value = '';

      if (set_discount_type) {
          this_value = $(".set_discount_type").parent().find(".selected").attr("data-value");
      }

    let sub_total_discount_value = $("#sub_total_discount1").val();

    if (this_value == "percentage") {
      if (parseFloat(sub_total_discount_value)) {
        $("#sub_total_discount").val(
          parseFloat(sub_total_discount_value) + "%"
        );
        do_addition_of_item_and_modifiers_price();
      }
    } else if(this_value == "fixed") {
      if (parseFloat(sub_total_discount_value)) {
        $("#sub_total_discount").val(parseFloat(sub_total_discount_value));
        do_addition_of_item_and_modifiers_price();
      }else{
          $("#sub_total_discount").val(parseFloat(0));
          do_addition_of_item_and_modifiers_price();
      }
    }
  }

  $(document).on("click", ".set_discount_type", function () {
      checkDiscountType();
  });
  $(document).on("click", ".set_charge_type", function () {
     let charge_type = $(this).attr("data-value");
     $("#charge_type").val(charge_type);
      do_addition_of_item_and_modifiers_price();
  });

  $(document).on("keyup", "#delivery_charge", function (e) {
    //if the letter is not digit then display error and don't type anything
    let this_value = $.trim($(this).val());
    if (isNaN(this_value)) {
      /* $(this).val("");*/
    }
    do_addition_of_item_and_modifiers_price();
  });
  // sound effect
  let placeOrderSound = new Howl({
    src: [base_url + "assets/media/alert_alarm.mp3"],
  });
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
    /*let customer_id = $("#walk_in_customer").val();*/
    let customer_id = $("#walk_in_customer").val();
    let waiter_id = $("#select_waiter").val();
    let sale_vat_objects = [];
    $("#tax_details .tax_field").each(function (i, obj) {
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
          if(customer_id==1){
              alertModal({modalName:"danger", normalTxt: "Delivery is not possible for Walk-in Customer, Please choose another!!"});
              return false;
          }
        if (customer_id == "") {

        }
        if (customer_id == "1") {
          /*$("#select2-walk_in_customer-container").css(
            "border",
            "1px solid red"
          );
          let op1 = $("#walk_in_customer").data("select2");
          let op2 = $("#select_waiter").data("select2");
          op1.open();
          op2.close();
          return false;*/
        }

        let address_available = searchCustomerAddress(customer_id);
        if (address_available[0].customer_address == "") {
          /*$("#select2-walk_in_customer-container").css(
            "border",
            "1px solid red"
          );
          let op1 = $("#walk_in_customer").data("select2");
          let op2 = $("#select_waiter").data("select2");
          op1.open();
          op2.close();
          return false;*/
        }
      } else if (selected_order_type_object.attr("id") == "dine_in_button") {
        order_type = 1;
        if (waiter_id == "") {
            alertModal({modalName:"danger", normalTxt: "Please select a waiter!"});
            return false;
        }
        if (customer_id == "") {
          /*$("#select2-walk_in_customer-container").css(
            "border",
            "1px solid red"
          );
          let op1 = $("#walk_in_customer").data("select2");
          let op2 = $("#select_waiter").data("select2");
          op1.open();
          op2.close();
          return false;*/
        }
      } else if (selected_order_type_object.attr("id") == "take_away_button") {
        order_type = 2;

        if (waiter_id == "") {
            alertModal({modalName:"danger", normalTxt: "Please select a waiter!"});
            return false;
        }
        if (customer_id == "") {
        /*  $("#select2-walk_in_customer-container").css(
            "border",
            "1px solid red"
          );
          let op1 = $("#walk_in_customer").data("select2");
          let op2 = $("#select_waiter").data("select2");
          op1.open();
          op2.close();
          return false;*/
        }
      }

      let is_diplomat = $("#is_diplomat_hidden").val();
      let table_name = $.trim($(".single_order_table").find('.selected').text());
      let table_id = $(".single_order_table").find('.selected').attr("data-id");
      let number_of_guest = $("#number_of_guest").val();

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

        $("#is_diplomat_hidden").val(1);
      add_sale_by_ajax(order_object, sale_id);

      $(".order_table_select").val("").change();
      $(".payment_method").val("");
      $("#walk_in_customer").val(1);
      $("#is_ignore_change").val('');
    } else {
        alertModal({modalName:"danger", normalTxt: "You must select Dine-in, Take Away or Delivery!"});
    }
  });
    function finalizeForQuickBill(){
        let sale_id =   $("#direct_order_id").val();
        $.ajax({
            url: base_url + "Sale/get_all_information_of_a_sale_ajax",
            method: "POST",
            data: {
                sale_id: sale_id,
                csrf_irestoraplus: csrf_value_,
            },
            success: function (response) {
                response = JSON.parse(response);
                $("#finalize_total_payable").html(response.total_payable);
                $("#selected_invoice_sale_customer").val(response.customer_id);
                $("#pay_amount_invoice_input").val("0");
                $("#payment_amount_pad").val("0");
                UIkit.modal(document.getElementById('finalize_order_modal')).show();

                // $("#finalize_order_modal").addClass("active");
                // $(".pos__modal__overlay").fadeIn(200);
                $("#open_invoice_date_hidden").val(response.sale_date);


                $(".datepicker_custom")
                    .datepicker({
                        autoclose: true,
                        format: "yyyy-mm-dd",
                        startDate: "0",
                        todayHighlight: true,
                    })
                    .datepicker("update", response.sale_date);

                $("#finalize_update_type").html("2"); //when 2 update payment method, close time and order_status to 3
                calculate_create_invoice_modal();
            },
            error: function () {
                alertModal({modalName:"danger", normalTxt: a_error});
            },
        });
    }
  $(document).on("click", ".direct_invoice", function (e) {

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
      /*let customer_id = $("#walk_in_customer").val();*/
      let customer_id = $("#walk_in_customer").val();
      let waiter_id = $("#select_waiter").val();
      let sale_vat_objects = [];
      $("#tax_details .tax_field").each(function (i, obj) {
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
              if(customer_id==1){
                  alertModal({modalName:"danger", normalTxt: "Delivery is not possible for Walk-in Customer, Please choose another!!"});
                  return false;
              }
              order_type = 3;
              if (customer_id == "") {
                  /* $("#select2-walk_in_customer-container").css(
                     "border",
                     "1px solid red"
                   );
                   let op1 = $("#walk_in_customer").data("select2");
                   let op2 = $("#select_waiter").data("select2");
                   op1.open();
                   op2.close();
                   return false;*/
              }
              if (customer_id == "1") {
                  /*$("#select2-walk_in_customer-container").css(
                    "border",
                    "1px solid red"
                  );
                  let op1 = $("#walk_in_customer").data("select2");
                  let op2 = $("#select_waiter").data("select2");
                  op1.open();
                  op2.close();
                  return false;*/
              }

              let address_available = searchCustomerAddress(customer_id);
              if (address_available[0].customer_address == "") {
                  /*$("#select2-walk_in_customer-container").css(
                    "border",
                    "1px solid red"
                  );
                  let op1 = $("#walk_in_customer").data("select2");
                  let op2 = $("#select_waiter").data("select2");
                  op1.open();
                  op2.close();
                  return false;*/
              }
          } else if (selected_order_type_object.attr("id") == "dine_in_button") {
              order_type = 1;
              if (waiter_id == "") {
                  alertModal({modalName:"danger", normalTxt: "Please select a waiter!"});
                  return false;
              }
              if (customer_id == "") {
                  /*$("#select2-walk_in_customer-container").css(
                    "border",
                    "1px solid red"
                  );
                  let op1 = $("#walk_in_customer").data("select2");
                  let op2 = $("#select_waiter").data("select2");
                  op1.open();
                  op2.close();
                  return false;*/
              }
          } else if (selected_order_type_object.attr("id") == "take_away_button") {
              order_type = 2;

              if (waiter_id == "") {
                  alertModal({modalName:"danger", normalTxt: "Please select a waiter!"});
                  return false;
              }
              if (customer_id == "") {
                  /*  $("#select2-walk_in_customer-container").css(
                      "border",
                      "1px solid red"
                    );
                    let op1 = $("#walk_in_customer").data("select2");
                    let op2 = $("#select_waiter").data("select2");
                    op1.open();
                    op2.close();
                    return false;*/
              }
          }

          let is_diplomat = $("#is_diplomat_hidden").val();
          let table_name = $.trim($(".single_order_table").find('.selected').text());
          let table_id = $(".single_order_table").find('.selected').attr("data-id");
          let number_of_guest = $("#number_of_guest").val();

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

              $("#is_diplomat_hidden").val(1);
              add_sale_by_ajax(order_object, sale_id);
              finalizeForQuickBill();

          $(".order_table_select").val("").change();
          $(".payment_method").val("");
          $("#walk_in_customer").val(1);
          $("#is_ignore_change").val('');


      } else {
          alertModal({modalName:"danger", normalTxt: "You must select Dine-in, Take Away or Delivery!"});
      }
  });
  $(document).on("click", ".proceed_to_payment", function (e) {
    $(this)
      .parent()
      .parent()
      .parent()
      .parent()
      .parent()
      .parent()
      .parent()
      .parent()
      .removeClass("active")
      .addClass("inActive");
    setTimeout(function () {
      $(".modal").removeClass("inActive");
    }, 1000);
    $(".pos__modal__overlay").fadeOut(300);
      let sale_id = $(".holder .order_details .single_order[data-selected=selected]").attr("id");
      if((sale_id) && sale_id!=undefined){
          $(".is_ignore_change").val('Yes');
          $("#modify_order").click();
      }
      setTimeout(function () {
          $("#direct_invoice").click();
      }, 500);

  });
  $(document).on(
    "click",
    "#print_invoice,#order_details_create_invoice_button",
    function (e) {
      if (
        $(".holder .order_details > .single_order[data-selected=selected]")
          .length > 0
      ) {
        let sale_id = $(
          ".holder .order_details .single_order[data-selected=selected]"
        )
          .attr("id")
          .substr(6);
        $.ajax({
          url: base_url + "Sale/get_all_information_of_a_sale_ajax",
          method: "POST",
          data: {
            sale_id: sale_id,
            csrf_irestoraplus: csrf_value_,
          },
          success: function (response) {
            response = JSON.parse(response);
            $("#finalize_total_payable").html(response.total_payable);
            $("#pay_amount_invoice_input").val(response.total_payable);
            $("#payment_amount_pad").val(response.total_payable);
            $("#finalize_order_modal").addClass("active");
            $(".pos__modal__overlay").fadeIn(200);
            $("#open_invoice_date_hidden").val(response.sale_date);

            $(".datepicker_custom")
              .datepicker({
                autoclose: true,
                format: "yyyy-mm-dd",
                startDate: "0",
                todayHighlight: true,
              })
              .datepicker("update", response.sale_date);

            $("#finalize_update_type").html("1"); //when 1 just update payment method and order status to 2 invoice order
            calculate_create_invoice_modal();
          },
          error: function () {
            alert(a_error);
          },
        });
      } else {
      alertModal({modalName:"danger", normalTxt: please_select_open_order})

        // swal({
        //   title: warning + "!",
        //   text: please_select_open_order,
        //   confirmButtonText: ok,
        //   confirmButtonColor: "#b6d6f6",
        // });
      }
    }
  );
    function getPadOne (str) {
        str = str.toString();
        return (str.length < 2 ? getPadOne("0" + str, 2) : str);
    }
    function getPad (str) {
        str = str.toString();
        return "-"+(str.length < 2 ? getPadOne("0" + str, 2) : str);
    }
  $(document).on("click", "#finalize_order_button", function (e) {
    let due_amount_invoice_input = Number($("#due_amount_invoice_input").val());
    let customer_id = $("#selected_invoice_sale_customer").val();
    let status = true;
    if (customer_id == 1) {
      if (due_amount_invoice_input) {
        status = false;
      }
    }
    if (status == true) {
      $("#print_type").val(1);
        let sale_id = $("#direct_order_id").val();
      if (sale_id > 0) {
          let is_split_bill = Number($("#is_split_bill").val());
          let payment_method_type = "";
          let payment_method_value = "";
          let paid_amount = $("#pay_amount_invoice_input").val();
          let due_amount = $("#due_amount_invoice_input").val();
          let invoice_create_type = $("#finalize_update_type").html();

          $(".payment_method").each(function () {
              let this_value = $(this).text();
              if (this_value == "" || isNaN(this_value)) {
              } else {
                  payment_method_type += $(this).attr("data-payment_id");
                  payment_method_type += ",";
                  payment_method_value += $(this).text();
                  payment_method_value += ",";
              }
          });
          if(is_split_bill!=1){
              $("#last_invoice_id").val(sale_id);
              UIkit.modal(document.getElementById('finalize_order_modal')).hide();
              print_invoice_and_close(
                  sale_id,
                  payment_method_type,
                  payment_method_value,
                  invoice_create_type,
                  paid_amount,
                  due_amount
              );
          }else{
              let delivery_partner_id = '';
              let order_status = 1;
              let open_invoice_date_hidden = $("#open_invoice_date_hidden").val();

              let selected_action = '';
              let select_active_pagination = $(".active_pagination").parent().find(".active").attr("data-num");
              if (select_active_pagination && select_active_pagination!=undefined) {
                  selected_action = $("#set_active_div"+select_active_pagination);
              }
              /*
                let selected_action = '';
                $(".goto_to_payment").each(function (i, obj) {
                    let is_remove = $(this).attr('data-is_remove');
                    if(is_remove==="yes"){
                        selected_action = $(this);
                    }
                });
          */

              let cart_modal_total_item_text = 0;
              selected_action.find(".qty_right_box").each(function (i, obj) {
                  let qty_tmp = Number($(this).html());
                  cart_modal_total_item_text+=qty_tmp;
              });

              let split_customer_id = selected_action.find('.split_customer_id').val();
              let sub_total = selected_action.find('.subtotal_right_box').html();
              let total_vat = selected_action.find('.tax_right_box').html();
              let total_payable = selected_action.find('.total_payable_right_box').html();
              let discount_subtotal = Number(selected_action.find('.discount_right_box').attr('data-added_amount'));
              let discount_item = Number(selected_action.find('.discount_right_box').html()) - discount_subtotal;
              let delivery_charge = Number(selected_action.find('.charge_right_box').html());
              let total_discount_amount = discount_subtotal + discount_item;
              let sub_total_with_discount = sub_total + discount_subtotal;
              let is_last_split_tmp = $(".split_tbl_width").length;


              let sale_vat_objects = [];
              $("#tax_details .tax_field").each(function (i, obj) {
                  let tax_field_id = $(this).attr("data-tax_field_id");
                  let tax_field_type = $(this).attr("data-tax_field_type");
                  let tax_field_amount = $(this).attr("data-tax_field_amount");
                  sale_vat_objects.push({
                      tax_field_id: tax_field_id,
                      tax_field_type: tax_field_type,
                      tax_field_amount: Number(tax_field_amount).toFixed(ir_precision),
                  });
              });

              let total_split_value = $(".total_split_sale span").length;
              if(!total_split_value){
                  total_split_value = "1";
              }

              let customer_id = $("#walk_in_customer").val();
              let waiter_id = $("#select_waiter").val();

              let given_amount_input = $("#given_amount_input").val();
              let change_amount_input = $("#change_amount_input").val();
              let finalie_order_invoice_language = $("#finalie_order_invoice_language").val();
              let total_split_value_txt = (getPad(total_split_value));

              let order_info = "{";
              order_info += '"customer_id":"' + customer_id + '",';
              order_info += '"split_counter":"' + total_split_value_txt + '",';
              order_info += '"payment_method_type":"' + payment_method_type + '",';
              order_info += '"payment_method_value":"' + payment_method_value + '",';
              order_info += '"given_amount_input":"' + given_amount_input + '",';
              order_info += '"change_amount_input":"' + change_amount_input + '",';
              order_info += '"finalie_order_invoice_language":"' + finalie_order_invoice_language + '",';
              order_info += '"paid_amount":"' + paid_amount + '",';
              order_info += '"due_amount":"' + due_amount + '",';
              order_info += '"waiter_id":"' + waiter_id + '",';
              order_info += '"remove_vat":"",';
              order_info += '"is_last_split":"' + is_last_split_tmp + '",';
              order_info += '"split_sale_id":"' + sale_id + '",';
              order_info += '"table_name":"",';
              order_info += '"table_id":"",';
              order_info += '"number_of_guest":"1",';
              order_info += '"is_diplomat":"",';
              order_info += '"open_invoice_date_hidden":"' + open_invoice_date_hidden + '",';
              order_info += '"total_items_in_cart":"' + cart_modal_total_item_text + '",';
              order_info += '"sub_total":"' + sub_total + '",';
              order_info += '"charge_type":"",';
              order_info += '"total_vat":"' + total_vat + '",';
              order_info += '"total_payable":"' + total_payable + '",';
              order_info +=
                  '"total_item_discount_amount":"' + discount_item + '",';
              order_info +=
                  '"sub_total_with_discount":"' + sub_total_with_discount + '",';
              order_info +=
                  '"sub_total_discount_amount":"' + discount_subtotal + '",';
              order_info += '"total_discount_amount":"' + total_discount_amount + '",';
              order_info += '"delivery_charge":"' + delivery_charge + '",';
              order_info +=
                  '"delivery_charge_actual_charge":"' +
                  delivery_charge +
                  '",';
              order_info +=
                  '"sub_total_discount_value":"' + discount_subtotal + '",';
              order_info +=
                  '"sub_total_discount_type":"fixed",';
              // order_info += '"selected_table":"'+selected_table+'",';
              order_info += '"order_type":"",';
              order_info += '"order_status":"3",';
              order_info += '"sale_vat_objects":' + JSON.stringify(sale_vat_objects) + ",";

              let items_info = "";
              items_info += '"items":';
              items_info += "[";
              if (selected_action.find(".row_box_item").length > 0) {
                  let k = 1;
                  selected_action.find(".row_box_item").each(function (i, obj) {

                      let item_id = $(this).attr("data-id");
                      let item_name = $(this).find(".name_right_box").attr('data-main_name');
                      let menu_combo_items = $(this).find(".name_right_box").attr('data-combo_text');
                      let item_vat = '0';
                      let item_discount = $(this).find(".dis_right_box").html();
                      let discount_type =  "fixed";

                      let item_previous_id = 0;
                      let item_cooking_done_time = 0
                      let item_cooking_start_time = 0;
                      let item_cooking_status = '';
                      let item_type = '';
                      let item_price_without_discount = Number($(this).find(".price_right_box").html()) * Number($(this).find(".qty_right_box").html());
                      let item_unit_price = $(this).find(".price_right_box").html();;
                      let item_quantity = $(this).find(".qty_right_box").html();
                      let tmp_qty = $(this).find(".qty_right_box").html();
                      let rounding_amount_hidden = $(this).find("#rounding_amount_hidden").val();
                      let p_qty = $(this).find(".qty_right_box").html();
                      let item_price_with_discount =  $(this).find(".total_right_box").html();
                      let item_discount_amount = item_discount;
                      let is_last_split = $(".split_tbl_width").length;

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

                      let ji = 1;
                      let modifier_vat = "";

                      let split_modifiers_id = '';
                      let split_modifiers_name = '';
                      let split_modifiers_price = '';

                      $(this).find(".split_modifier_name").each(function (i, obj) {
                          if (i == $(this).find(".split_modifier_name").length) {
                              split_modifiers_id += $(this).attr("data-modifier_id")+ ",";
                              split_modifiers_name += $(this).text()+ ",";
                              split_modifiers_price += $(this).parents().parents().find('.modifier_right_box').eq(i).text()+ ",";
                          } else {
                              split_modifiers_id += $(this).attr("data-modifier_id");
                              split_modifiers_name += $(this).text();
                              split_modifiers_price += $(this).parents().parents().find('.modifier_right_box').eq(i).text();
                          }
                      });

                       modifier_vat = "";
                      $(".item_vat_modifier_" + item_id).each(function (i, obj) {
                          if (ji == $(".item_vat_modifier_" + item_id).length) {
                              modifier_vat += $(this).html();
                          } else {
                              modifier_vat += $(this).html() + "|||";
                          }
                          ji++;
                      });

                      if ( $(this).find(".split_modifier_name").length > 0) {
                          items_info +=
                              ',"modifiers_id":"' +
                              split_modifiers_id  +
                              '", "modifiers_name":"' + split_modifiers_name+'", "modifiers_price":"' +
                              split_modifiers_price +
                              '", "modifier_vat":""';
                      } else {
                          items_info +=
                              ',"modifiers_id":"", "modifiers_name":"", "modifiers_price":"", "modifier_vat":""';
                      }

                      items_info +=
                          k == selected_action.find(".row_box_item").length ? "}" : "},";
                      k++;
                  });
              }
              items_info += "]";
              order_info += items_info + "}";

              add_sale_by_ajax_split((order_info), sale_id,'');

              //update split box
              let is_show_split_modal = false;
              let remove_div_action = '';
              $(".active_pagination").each(function (i, obj) {
                  let is_remove = $(this).attr('data-is_remove');
                  if(is_remove==="yes"){
                      is_show_split_modal = true;
                      remove_div_action = $(this);
                  }
              });


              let select_active_pagination_tmp = $(".active_pagination").parent().find(".active").attr("data-num");
              let this_action = "";
              if (select_active_pagination_tmp && select_active_pagination_tmp!=undefined) {
                  is_show_split_modal = true;
                  remove_div_action = $(".active_pagination").parent().find(".active");
              }

              if(is_split_bill==1 && is_show_split_modal && ($(".active_pagination").length>1)){
                  //set total split bill box, and remove last generated_invoice
                  let current_split = Number($("#maximum_spit").html());
                  $("#spit_modal_input").attr('max',(current_split-1));
                  $("#spit_modal_input").val((current_split-1));
                  $("#maximum_spit").html((current_split-1));
                  remove_div_action.remove();
                  let select_first = $(".active_pagination").eq(0).attr("data-num");
                  $("#set_active_div"+select_active_pagination_tmp).remove();
                  $("#set_active_div"+select_first).show();
                  $(".active_pagination").eq(0).addClass("active");
                  UIkit.modal(document.querySelector('#open-split-bill-modal')).show();
              }
          }
        reset_finalize_modal();
      } else {
        alertModal({modalName:"danger", normalTxt: please_select_open_order})
        // swal({
        //   title: warning + "!",
        //   text: please_select_open_order,
        //   confirmButtonText: ok,
        //   confirmButtonColor: "#b6d6f6",
        // });
      }
    } else {
        alertModalCustom({modalName:"danger_update", normalTxt: "Due amount not allow for walk in customer!",re_open_modal:"target: #finalize_order_modal"})
    }
  });
  $(document).on("click", "#add_customer", function (e) {
    let customer_id = $("#customer_id_modal").val();
    let customer_name = $("#customer_name_modal").val();
    let customer_phone = $("#customer_phone_modal").val();
    let customer_email = $("#customer_email_modal").val();
    let customer_dob = $("#customer_dob_modal").val();
    let customer_doa = $("#customer_doa_modal").val();
    let customer_delivery_address = $("#customer_delivery_address_modal").val();
    let customer_gst_number = $("#customer_gst_number_modal").val();
    let error = 0;

    $("#customer_name_modal").css("border", "1px solid #B5D6F6");
    $("#customer_phone_modal").css("border", "1px solid #B5D6F6");

    if (customer_name == "") {
      $("#customer_name_modal").css("border", "1px solid red");
      error++;
    }

    if (customer_phone == "") {
      $("#customer_phone_modal").css("border", "1px solid red");
      error++;
    }
    if (error != 0) {
      return false;
    }

    let this_action = $(this);
    $.ajax({
      url: base_url + "Sale/add_customer_by_ajax",
      method: "POST",
      data: {
        customer_id: customer_id,
        customer_name: customer_name,
        customer_phone: customer_phone,
        customer_email: customer_email,
        customer_dob: customer_dob,
        customer_doa: customer_doa,
        customer_delivery_address: customer_delivery_address,
        customer_gst_number: customer_gst_number,
        csrf_irestoraplus: csrf_value_,
      },
      success: function (response) {
        let customer_id_last = response;
        if (response > 0) {
          $("#walk_in_customer").val(response);
          $.ajax({
            url: base_url + "Sale/get_all_customers_for_this_user",
            method: "GET",
            success: function (response) {
              response = JSON.parse(response);
              let option_customers = "";
              let i = 1;
              let selected_id = "";
              let selected_name = "";
              for (let key in response) {
                if (i == response.length) {
                  // console.log(response[key].id+' '+response[key].name);
                  // selected_id = response[key].id;
                  // selected_name = response[key].name;
                  option_customers +=
                    '<option value="' +
                    response[key].id +
                    '" selected>' +
                    response[key].name +
                    " " +
                    response[key].phone +
                    "</option>";
                  let new_customer = {
                    customer_id: response[key].id, //your artist variable
                    customer_name: response[key].name, //your title variable
                    customer_address: response[key].address, //your title variable
                    gst_number: response[key].gst_number,
                  };
                  window.customers.push(new_customer);
                } else {
                  option_customers +=
                    '<option value="' +
                    response[key].id +
                    '">' +
                    response[key].name +
                    " " +
                    response[key].phone +
                    "</option>";
                }
                i++;
              }
              $("#walk_in_customer").html(option_customers);
              // $('#walk_in_customer').select2('data', {id: selected_id, text: selected_name});
              reset_on_modal_close_or_add_customer();
                getCustomers();
                UIkit.modal(document.getElementById('open-customer-list')).show();
                setTimeout(function () {
                    $("#walk_in_customer").val(customer_id_last);
                    $(".get_active_customer").eq(0).addClass("active_customer");
                }, 1000);
            },
            error: function () {
              alert(a_error);
            },
          });
        }
      },
      error: function () {
        alert(a_error);
      },
    });

    return false;
  });
  $("#direct_invoice").on("mouseover", function () {
    $("#direct_invoice_button_tool_tip").slideDown();
  });
  $("#direct_invoice").on("mouseleave", function () {
    $("#direct_invoice_button_tool_tip").slideUp();
  });
  $("#modify_order").on("mouseleave", function () {
    $("#modify_button_tool_tip").slideUp();
  });
  //tooltip modify order button
  let modify_order_button = $("#modify_order");
  // let modify_order_button = modify_order_button.position();
  let modify_order_top =
    modify_order_button.offset().top - $(document).scrollTop();
  let modify_order_left =
    modify_order_button.offset().left - $(document).scrollLeft();
  let modify_order_width = (
    parseFloat(modify_order_button.width()) + parseFloat(30)
  ).toFixed(ir_precision);
  let modify_order_height = modify_order_button.height();
  let modify_order_half_height = (
    parseFloat(modify_order_height) / parseFloat(50)
  ).toFixed(ir_precision);
  let order_tool_tip_top = document
    .getElementById("modify_order")
    .getBoundingClientRect().top;

  $("#modify_button_tool_tip").css("top", order_tool_tip_top + "px");
  $("#modify_button_tool_tip").css("left", modify_order_width + "px");
});
//update all price of modal
function update_all_total_price() {
  //get item quantity
  let item_quantity = parseFloat($("#item_quantity_modal").val()).toFixed(
    ir_precision
  );
  //get item unit price
  let item_unit_price = parseFloat($("#modal_item_price").html()).toFixed(
    ir_precision
  );

  //get item total price without discount

  let is_variation_product = Number($("#is_variation_product").html());
  if (is_variation_product) {
    item_unit_price = parseFloat(
      $("#vr01_modal_price_variable").html()
    ).toFixed(ir_precision);
  }

  //get item total price without discount
  let item_total_price_without_discount = (
    parseFloat(item_quantity) * parseFloat(item_unit_price)
  ).toFixed(ir_precision);
  //set item total price without discount
  $("#modal_item_price_variable_without_discount").html(item_total_price_without_discount);

  //get discount from modal
  let discount_on_modal = $("#modal_discount").val();
  discount_on_modal = discount_on_modal != "" ? discount_on_modal : 0;

  //remove last digits if number is more than 2 digits after decimal
  remove_last_two_digit_with_percentage(
    discount_on_modal,
    $("#modal_discount")
  );

  //get discount actual amount on item price
  let actual_modal_discount_amount = get_particular_item_discount_amount(
    discount_on_modal,
    item_total_price_without_discount
  );
  //set actual discount amouto hidden modal element
  $("#modal_discount_amount").html(
    parseFloat(actual_modal_discount_amount).toFixed(ir_precision)
  );

  //get item price after discount
  let item_price_after_discount = (
    parseFloat(item_total_price_without_discount) -
    parseFloat(actual_modal_discount_amount)
  ).toFixed(ir_precision);

  //set item total price with discount
  $("#modal_item_price_variable").html(item_price_after_discount);

  //get modifiers unit sum price
  let modifiers_unit_sum_price = 0;
  $(".modal_modifiers").each(function () {
    if ($(this).attr("data-selected") == "selected") {
      let this_price = Number($(this).attr("data-price"));
      modifiers_unit_sum_price += this_price;
    }
  });

  //set modifiers price as per item quantity
  let modifiers_price = (
    parseFloat(modifiers_unit_sum_price) * parseFloat(item_quantity)
  ).toFixed(ir_precision);
  $("#modal_modifier_price_variable").html(modifiers_price);
  //add items and modifiers price
  let all_price = (
    parseFloat(item_price_after_discount) + parseFloat(modifiers_price)
  ).toFixed(ir_precision);

  //show to all total
  $("#modal_total_price").val(all_price);
}
function update_all_vr01_total_price() {
  //get item quantity
  let item_quantity = parseFloat($("#item_quantity_modal").val()).toFixed(
    ir_precision
  );
  //get item unit price
  let item_unit_price = parseFloat(
    $("#vr01_modal_price_variable").html()
  ).toFixed(ir_precision);
  //get item total price without discount
  let item_total_price_without_discount = (
    parseFloat(item_quantity) * parseFloat(item_unit_price)
  ).toFixed(ir_precision);
  //set item total price without discount
  $("#modal_item_price_variable_without_discount").html(
    item_total_price_without_discount
  );

  //get discount from modal
  let discount_on_modal = $("#modal_discount").val();
  discount_on_modal = discount_on_modal != "" ? discount_on_modal : 0;

  //remove last digits if number is more than 2 digits after decimal
  remove_last_two_digit_with_percentage(
    discount_on_modal,
    $("#modal_discount")
  );

  //get discount actual amount on item price
  let actual_modal_discount_amount = get_particular_item_discount_amount(
    discount_on_modal,
    item_total_price_without_discount
  );
  //set actual discount amouto hidden modal element
  $("#modal_discount_amount").html(
    parseFloat(actual_modal_discount_amount).toFixed(ir_precision)
  );

  //get item price after discount
  let item_price_after_discount = (
    parseFloat(item_total_price_without_discount) -
    parseFloat(actual_modal_discount_amount)
  ).toFixed(ir_precision);

  //set item total price with discount
  $("#modal_item_price_variable").html(item_price_after_discount);

  //get modifiers unit sum price
  let modifiers_unit_sum_price = 0;
  $(".modal_modifiers").each(function () {
    if ($(this).attr("data-selected") == "selected") {
      let this_price = Number($(this).attr("data-price"));
      modifiers_unit_sum_price += this_price;
    }
  });

  //set modifiers price as per item quantity
  let modifiers_price = (
    parseFloat(modifiers_unit_sum_price) * parseFloat(item_quantity)
  ).toFixed(ir_precision);
  $("#modal_modifier_price_variable").html(modifiers_price);
  //add items and modifiers price
  let all_price = (
    parseFloat(item_price_after_discount) + parseFloat(modifiers_price)
  ).toFixed(ir_precision);

  //show to all total
  $("#modal_total_price").val(all_price);
}
// ==================================================
function show_all_items() {
  $(".specific_category_items_holder").hide();

  setTimeout(function () {
    let foundItems = searchItemAndConstructGallery("");
    let searched_category_items_to_show =
      '<div id="searched_item_found" class="specific_category_items_holder">';
    for (let key in foundItems) {
      if (foundItems.hasOwnProperty(key)) {
        let veg_status = "no";
        if (foundItems[key].veg_item_status == "yes") {
          veg_status = "yes";
        }
        let beverage_status = "no";
        if (foundItems[key].beverage_item_status == "yes") {
          beverage_status = "yes";
        }

        if (foundItems[key].parent_id == "0") {
          searched_category_items_to_show +=
            '<div class="single_item animate__animated all_item_custom" data-price="' +
            foundItems[key].price +
            '"   data-is_variation="' +
            foundItems[key].is_variation +
            '"  data-parent_id="' +
            foundItems[key].parent_id +
            '" data-veg_status="' +
            veg_status +
            '" data-beverage_status="' +
            beverage_status +
            '" id="item_' +
            foundItems[key].item_id +
            '">';
          searched_category_items_to_show +=
            '<img src="' + foundItems[key].image + '" alt="" width="141">';
          searched_category_items_to_show +=
            '<p class="item_name" data-tippy-content="' +
            foundItems[key].item_name +
            '">' +
            foundItems[key].item_name +
            " (" +
            foundItems[key].item_code +
            ")</p>";
          searched_category_items_to_show +=
            '<p class="item_price">' +
            price_txt +
            ": " +
            foundItems[key].price +
            "</p>";
          searched_category_items_to_show +=
            '<span class="item_vat_percentage ir_display_none">' +
            foundItems[key].vat_percentage +
            "</span>";
          searched_category_items_to_show += "</div>";
        }
      }
    }
    searched_category_items_to_show += "<div>";
    $("#searched_item_found").remove();
    $(".specific_category_items_holder").fadeOut(0);
    $(".category_items").prepend(searched_category_items_to_show);
    tippy(".item_name", {
      placement: "bottom-start",
    });
  }, 100);

  //call this function to adjust the height of left side order list
  adjust_left_side_order_list();

  //call this function to adjust the height of right side item list
  adjust_right_side_item_list();

  adjust_middle_side_cart_list();
  $(document).on("click", ".single_table_div", function (e) {
    if ($(this).attr("data-table-checked") != "busy") {
      $(
        ".single_table_div[data-table-checked=checked],.single_table_div[data-table-checked=unchecked]"
      ).attr("data-table-checked", "unchecked");
      $(
        ".single_table_div[data-table-checked=checked],.single_table_div[data-table-checked=unchecked]"
      ).css("background-color", "#ffffff");
      $(this).css("background-color", "#b6d6f6");
      $(this).attr("data-table-checked", "checked");
    }
  });
  $(document).on("click", "#close_select_table_modal", function (e) {
    $(".single_table_div[data-table-checked=checked]").css(
      "background-color",
      "#ffffff"
    );
    $(".single_table_div[data-table-checked=checked]").attr(
      "data-table-checked",
      "unchecked"
    );
    $("#show_tables_modal").slideUp(333);
  });
  $(document).on("click", "#selected_table_done", function (e) {
    $("#show_tables_modal").slideUp(333);
  });
  $(document).on("click", "#refresh_order", function (e) {
    $(this).css("color", "#495057");
    $("#stop_refresh_for_search").html("yes");
    set_new_orders_to_view_for_interval();
  });
  $(document).on("click", ".holder .order_details .single_order", function () {
    let sale_id = $(this).attr("id").substr(6);
    $("#last_future_sale_id").val(sale_id);
    $(".holder .order_details .single_order").attr(
      "data-selected",
      "unselected"
    );
    $(".holder .order_details .single_order").css(
      "background-color",
      "#ffffff"
    );
    $(this).attr("data-selected", "selected");
    $(this).css("background-color", "#ecf0f1");
    $("#refresh_order").css("color", "#dc3545");
    sale_id = $(this).attr("id").substr(6);
    let flexible_div = $(this).find(".inside_single_order_container").height();
  });

  $("body").on("click", ".select_running_order", function () {
    $(".select_running_order").parent().removeClass("active");
    $(this).parent().addClass("active");
  });
  $("body").on("click", ".set_active_bill_language", function () {
    $(".set_active_bill_language").removeClass("active_bill_language");
    $(this).addClass("active_bill_language");
  });
  $("body").on("click", ".get_payment", function () {
    $(".get_payment").removeClass("active_payment");
    $(this).addClass("active_payment");
  });
  $("body").on("click", ".pointer_merge", function () {
      if($(this).hasClass('active_merge_table')){
          $(this).removeClass("active_merge_table");
      }else{
          $(this).addClass("active_merge_table");
      }
  });
  $("body").on("click", ".get_transfer_tbl_id", function () {
    $(".get_transfer_tbl_id").removeClass("active_get_transfer_tbl_id");
    $(this).addClass("active_get_transfer_tbl_id");
  });
  $("body").on("click", ".check_exist_payment", function () {
    $(".check_exist_payment").removeClass("active_check_exist_payment");
    $(this).addClass("active_check_exist_payment");
  });

  $("body").on("click", ".invoice_lang", function () {
    let this_invoice_lang = $(this).attr("data-lang");
    $("#finalie_order_invoice_language").val(this_invoice_lang);

    $(".invoice_lang").removeClass("active_invoice_lang");
    $(this).addClass("active_invoice_lang");
  });

  $("body").on("click", ".running_order_right_arrow", function () {
      let customer = $(this).attr("data-customer");
      let table = $(this).attr("data-table");
      let waiter = $(this).attr("data-waiter");
      let order_no = $(this).attr("data-order_no");
      let started_cooking = $(this).attr("data-started_cooking");
      let time_counter = $(this).attr("data-time_counter");
      let done = $(this).attr("data-done");
      let split_time = time_counter.split(":");
      $(".counter_min").html(split_time[0]);
      $(".counter_sec").html(split_time[1]);
      $(".customer_txt").html(customer);
      $(".table_txt").html(table);
      $(".waiter_txt").html(waiter);
      $(".order_no_txt").html(order_no);
      $(".started_cooking_txt").html(started_cooking);
      $(".done_txt").html(done);


      UIkit.modal(document.getElementById('open-single-running-order')).show();
  });

  $(document).on("click", "#modify_order", function (e) {
      let select_running_order_obj = $(".select_running_order").parent().hasClass("active");
      if (select_running_order_obj) {
      //get total items in cart
      let total_items_in_cart = $(".order_holder .single_order").length;

      if (total_items_in_cart > 0) {
        swal(
          {
            title: warning + "!",
            text: txt_err_pos_5,
            confirmButtonColor: "#3c8dbc",
            confirmButtonText: ok,
            showCancelButton: true,
          },
          function () {
            $(".order_holder").empty();
              let sale_id = $(".select_running_order").parent().parent().find(".active").attr("data-id");
            get_details_of_a_particular_order(sale_id);
            UIkit.modal("#open-running-order").hide();
          }
        );
      } else {
          let sale_id = $(".select_running_order").parent().parent().find(".active").attr("data-id");
        get_details_of_a_particular_order(sale_id);
        UIkit.modal("#open-running-order").hide();
      }
    } else {
      alertModal({modalName:"danger", normalTxt: please_select_open_order})
      // swal({
      //   title: warning + "!",
      //   text: please_select_open_order,
      //   confirmButtonText: ok,
      //   confirmButtonColor: "#b6d6f6",
      // });
    }
  });
    $(document).on("click", "#open_order", function (e) {
        let select_running_order_obj = $(".select_running_order").parent().hasClass("active");
        if (select_running_order_obj) {
            //get total items in cart
            let total_items_in_cart = $(".order_holder .single_order").length;

            if (total_items_in_cart > 0) {
                swal(
                    {
                        title: warning + "!",
                        text: txt_err_pos_5,
                        confirmButtonColor: "#3c8dbc",
                        confirmButtonText: ok,
                        showCancelButton: true,
                    },
                    function () {
                        $(".order_holder").empty();
                        let sale_id = $(".select_running_order").parent().parent().find(".active").attr("data-id");
                        get_details_of_a_particular_order(sale_id);
                        UIkit.modal("#open-running-order").hide();
                    }
                );
            } else {
                let sale_id = $(".select_running_order").parent().parent().find(".active").attr("data-id");
                get_details_of_a_particular_order(sale_id);
                UIkit.modal("#open-running-order").hide();
            }
        } else {
            alertModal({modalName:"danger", normalTxt: please_select_open_order})
            // swal({
            //   title: warning + "!",
            //   text: please_select_open_order,
            //   confirmButtonText: ok,
            //   confirmButtonColor: "#b6d6f6",
            // });
        }
    });
  $(document).on("click", "#single_order_details", function (e) {
      let select_running_order_obj = $(".select_running_order").parent().hasClass("active");
    if (select_running_order_obj) {
        let sale_id = $(".select_running_order").parent().parent().find(".active").attr("data-id");
          get_details_of_a_particular_order_for_modal(sale_id);
    } else {
      alertModal({modalName:"danger", normalTxt: please_select_open_order})
    }
  });
  $(document).on("click", "#hold_sale", function (e) {
    if ($(".order_holder .single_order").length > 0) {
      $.ajax({
        url: base_url + "Sale/get_new_hold_number_ajax",
        method: "GET",
        success: function (response) {
          UIkit.modal(document.querySelector('#open-draft-modal')).show();
          $("#hold_generate_input").val(response);
        },
        error: function () {
          alert(a_error);
        },
      });
    } else {
      alertModal({modalName: 'danger', normalTxt: cart_empty})
      // swal({
      //   title: warning + "!",
      //   text: cart_empty,
      //   confirmButtonText: ok,
      //   confirmButtonColor: "#b6d6f6",
      // });
    }
    // $('#show_sale_hold_modal').show();
  });
  $(document).on("click", "#close_hold_modal", function (e) {
    $(this)
      .parent()
      .parent()
      .parent()
      .parent()
      .removeClass("active")
      .addClass("inActive");
    setTimeout(function () {
      $(".modal").removeClass("inActive");
    }, 1000);
    $(".pos__modal__overlay").fadeOut(300);

    $("#hold_generate_input").val("");
    $("#hold_generate_input").css("border", "1px solid #a0a0a0");
  });
  $(document).on("click", "#hold_cart_info", function (e) {
    let hold_number = $("#hold_generate_input").val();
    if (hold_number == "") {
      $("#hold_generate_input").css("border", "1px solid #dc3545");
      return false;
    } else {
      $("#hold_generate_input").css("border", "1px solid #a0a0a0");
    }
    let selected_order_type_object = $(".main_top")
      .find("button[data-selected=selected]")
      .attr("data-selected", "unselected");
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
    let delivery_charge = $("#delivery_charge").val();
    let sub_total_discount_value = $("#sub_total_discount").val();
    let sub_total_discount_type = "";
    let sale_vat_objects = [];
    $("#tax_details .tax_field").each(function (i, obj) {
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
      alertModal({modalName:"danger", normalTxt: cart_empty})

      // swal({
      //   title: warning + "!",
      //   text: cart_empty,
      //   confirmButtonText: ok,
      //   confirmButtonColor: "#b6d6f6",
      // });
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
    let selected_table = 0;

    if ($(".single_table_div[data-table-checked=checked]").length > 0) {
      selected_table = $(".single_table_div[data-table-checked=checked]")
        .attr("id")
        .substr(13); //1; //demo
    }

    let order_type = 0;
    if (selected_order_type_object.attr("id") == "delivery_button") {
      order_type = 3;
    } else if (selected_order_type_object.attr("id") == "dine_in_button") {
      order_type = 1;
    } else if (selected_order_type_object.attr("id") == "take_away_button") {
      order_type = 2;
    }
      let is_diplomat = $("#is_diplomat_hidden").val();


    let customer_id = $("#walk_in_customer").val();
    let waiter_id = $("#select_waiter").val();
      let table_name = $(".single_order_table").find('.selected').text();
      let table_id = $(".single_order_table").find('.selected').attr("data-id");
      let number_of_guest = $("#number_of_guest").val();


    let order_status = 1;
    let open_invoice_date_hidden = $("#open_invoice_date_hidden").val();
    let order_info = "{";
    order_info += '"customer_id":"' + customer_id + '",';
    order_info += '"waiter_id":"' + waiter_id + '",';
      order_info += '"table_name":"' + table_name + '",';
      order_info += '"table_id":"' + table_id + '",';
      order_info += '"number_of_guest":"' + number_of_guest + '",';
    order_info += '"is_diplomat":"' + is_diplomat + '",';
    order_info +=
      '"open_invoice_date_hidden":"' + open_invoice_date_hidden + '",';
    order_info += '"total_items_in_cart":"' + total_items_in_cart + '",';
    order_info += '"charge_type":"' + charge_type + '",';
    order_info += '"sub_total":"' + sub_total + '",';
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
      '"sub_total_discount_value":"' + sub_total_discount_value + '",';
    order_info +=
      '"sub_total_discount_type":"' + sub_total_discount_type + '",';
    order_info += '"selected_table":"' + selected_table + '",';
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
        let item_price_without_discount = $(this)
          .find(".item_price_without_discount")
          .html();
        let item_unit_price = $(this)
          .find("#item_price_table_" + item_id)
          .html();
        let item_quantity = $(this)
          .find("#item_quantity_table_" + item_id)
          .html();
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
          '",';
        items_info +=
          '"item_price_with_discount":"' +
          item_price_with_discount +
          '","item_discount_amount":"' +
          item_discount_amount +
          '"';

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
        items_info += k == $(".order_holder .single_order").length ? "}" : "},";
        k++;
      });
    }
    items_info += "]";

    order_info += items_info + "}";

    let order_object = JSON.stringify(order_info);
      $("#is_diplomat_hidden").val(1);
    add_hold_by_ajax(order_object, hold_number);
  });
}
$(".marquee").marquee({
  //speed in milliseconds of the marquee
  duration: 5000,
  //gap in pixels between the tickers
  gap: 250,
  //time in milliseconds before the marquee will start animating
  delayBeforeStart: 0,
  //'left' or 'right'
  direction: "left",
  //true or false - should the marquee be duplicated to show an effect of continues flow
  duplicated: true,
});
//this function adjust the left side order list height
function adjust_left_side_order_list() {
  let left_side_button_holder_height = $(
    "#left_side_button_holder_absolute"
  ).height();
  let main_left_portion_height = $(".main_left").height();
  let header_of_left_portion_height = $(".main_left h3").height();
  let height_left_button_holder_and_header = (
    parseFloat(left_side_button_holder_height) +
    parseFloat(header_of_left_portion_height)
  ).toFixed(ir_precision);
  let remaining_height_for_list = (
    parseFloat(main_left_portion_height) -
    parseFloat(height_left_button_holder_and_header) -
    parseFloat(35)
  ).toFixed(ir_precision);
  // $(".order_details").css("height", remaining_height_for_list - 20 + "px");
}
//this function adjust the left side order list height
function adjust_middle_side_cart_list() {
  let middle_side_bottom_holder_height = $("#bottom_absolute").height();
  let main_middle_portion_height = $(".main_middle").height();
  let order_table_header_row = $(".order_table_header_row").height();
  let header_of_middle_portion_height = $(".main_middle .main_top").height();
  let height_middle_bottom_holder_and_header = (
    parseFloat(middle_side_bottom_holder_height) +
    parseFloat(header_of_middle_portion_height) +
    parseFloat(order_table_header_row)
  ).toFixed(ir_precision);
  let remaining_height_for_cart = (
    parseFloat(main_middle_portion_height) -
    parseFloat(height_middle_bottom_holder_and_header)
  ).toFixed(ir_precision);

  // $(".main_middle .order_holder").css(
  //   "height",
  //   remaining_height_for_cart - 40 + "px"
  // );
}
//this function adjust the right side item list height
function adjust_right_side_item_list() {
  let main_right_portion_height = $(".main_right").height();
  let search_item_input_height = $("#search").height();
  let top_header_height = $(".top_header").height();

  let search_item_input_margin_bottom = parseFloat(
    $("#search").css("margin-bottom")
  );
  let select_category_height = $(".select_category").height();
  let select_category_margin_bottom = parseFloat(
    $(".select_category").css("margin-bottom")
  );
  let search_input_total_height = (
    parseFloat(search_item_input_height) +
    parseFloat(search_item_input_margin_bottom)
  ).toFixed(ir_precision);
  let select_category_total_height = (
    parseFloat(select_category_height) +
    parseFloat(select_category_margin_bottom)
  ).toFixed(ir_precision);
  let total_height_except_item_list = (
    parseFloat(search_input_total_height) +
    parseFloat(select_category_total_height)
  ).toFixed(ir_precision);
  let remaining_height_for_item_list = (
    parseFloat(main_right_portion_height) -
    parseFloat(total_height_except_item_list) -
    parseFloat(13)
  ).toFixed(ir_precision);

  // $("#secondary_item_holder").css("height", main_right_portion_height + "px");
  // $(".category_items").css("height", main_right_portion_height - 35 + "px");
}
//KOT
$(document).on("change", "#kot_check_all", function (e) {
  if ($(this).is(":checked")) {
    $(".kot_item_checkbox").prop("checked", true);
  } else {
    $(".kot_item_checkbox").prop("checked", false);
  }
});
function print_kot(sale_id) {
  let print_type_kot = $(".print_type_kot").val();
  if (print_type_kot == "web_browser") {
    let newWindow = open(
      base_url + "Sale/print_kot/" + sale_id,
      "Print KOT",
      "width=450,height=550"
    );
    newWindow.focus();

    newWindow.onload = function () {
      newWindow.document.body.insertAdjacentHTML("afterbegin");
    };
  } else {
    $.ajax({
      url: base_url + "Authentication/printSaleKotByAjax",
      method: "post",
      dataType: "json",
      data: {
        sale_id: sale_id,
      },
      success: function (data) {
        if (data.printer_server_url) {
          $.ajax({
            url:
              data.printer_server_url +
              "print_server/irestora_printer_server.php",
            method: "post",
            dataType: "json",
            data: {
              content_data: JSON.stringify(data.content_data),
            },
            success: function (data) {},
            error: function () {},
          });
        }
      },
      error: function () {},
    });
  }
}

$(document).on("click", ".kot_content_column .single_modifier", function () {
  let current_selection = $(this).attr("data-selected");
  if (current_selection == "selected") {
    $(this).attr("data-selected", "unselected");
    $(this).css("background-color", "#E0E0E0");
  } else if (current_selection == "unselected") {
    $(this).attr("data-selected", "selected");
    // $(this).css("background-color", "#B5D6F6");
  }
});
$(document).on("click", "#select_all_kot_modal", function (e) {
    $(".kitchen_ids").prop("checked",true);
});
$(document).on("click", "#print_kot_modal", function (e) {

    let sale_id = $(
        ".holder .order_details .single_order[data-selected=selected]"
    )
        .attr("id")
        .substr(6);


    let kitchen_id = '';
    $(".kitchen_ids:checked").each(
        function (i, obj) {
            if (i == ($(".kitchen_ids:checked").length - 1)) {
                kitchen_id += $(this).val();
            } else {
                kitchen_id += $(this).val() + ",";
            }
        }
    );

    if(kitchen_id){
        $.ajax({
            url: base_url + "Authentication/selectedKitchenPrinting",
            method: "post",
            dataType: "json",
            data: {selected_order_no: Number(sale_id),kitchen_id: kitchen_id},
            success: function (data) {
                if (data.printer_server_url) {
                    $.ajax({
                        url:
                        data.printer_server_url +
                        "print_server/irestora_printer_server.php",
                        method: "post",
                        dataType: "json",
                        data: {
                            content_data: JSON.stringify(data.content_data),print_type:data.print_type,
                        },
                        success: function (data) {},
                        error: function () {},
                    });
                }
            },
            error: function () {},
        });
    }

    $(this)
        .parent()
        .parent()
        .parent()
        .removeClass("active")
        .addClass("inActive");
    setTimeout(function () {
        $(".modal").removeClass("inActive");
        $(".kitchen_ids").prop("checked",false)
    }, 1000);
    $(".pos__modal__overlay").fadeOut(300);

});
$(document).on("click", "#print_kot", function (e) {
    let select_running_order_obj = $(".select_running_order").parent().hasClass("active");
    if (select_running_order_obj) {
        let sale_id = $(".select_running_order").parent().parent().find(".active").attr("data-id");
        get_details_of_a_particular_order_for_kot_modal(sale_id);
  } else {
    alertModal({modalName:"danger", normalTxt: please_select_open_order})
  }
});
$(document).on("click", ".print_kot_pos_screen", function (e) {
    let select_running_order_obj = $(".select_running_order").parent().hasClass("active");
    if (select_running_order_obj) {
        let sale_id = $(".select_running_order").parent().parent().find(".active").attr("data-id");
        get_details_of_a_particular_order_for_kot_modal(sale_id);
  } else {
    alertModal({modalName:"danger", normalTxt: please_select_open_order})
  }
});
$(document).on("click", "#order_details_print_kot_button", function (e) {
    let select_running_order_obj = $(".select_running_order").parent().hasClass("active");
    if (select_running_order_obj) {
        let sale_id = $(".select_running_order").parent().parent().find(".active").attr("data-id");
    print_kot(sale_id);
  } else {
    alertModal({modalName:"danger", normalTxt: please_select_open_order})
    // swal({
    //   title: warning + "!",
    //   text: please_select_open_order,
    //   confirmButtonText: ok,
    //   confirmButtonColor: "#b6d6f6",
    // });
  }
});
$(document).on("click", ".decrease_item_kot_modal", function () {
  let item_detail_id = $(this).attr("id").substr(24);
  let qty_element = $("#kot_modal_item_qty_" + item_detail_id);
  let qty_element_fixed = $("#kot_modal_item_qty_fixed_" + item_detail_id);
  let qty = parseInt(qty_element.html());
  if (qty > 1) {
    qty--;
  }
  qty_element.html(qty);
});
$(document).on("click", ".increase_item_kot_modal", function () {
  let item_detail_id = $(this).attr("id").substr(24);
  let qty_element = $("#kot_modal_item_qty_" + item_detail_id);
  let qty_element_fixed = $("#kot_modal_item_qty_fixed_" + item_detail_id);
  let qty = parseInt(qty_element.html());
  let qty_fixed = parseInt(qty_element_fixed.html());
  if (qty < qty_fixed) {
    qty++;
  }

  qty_element.html(qty);
});
$(document).on("click", "#cancel_kot_modal", function (e) {
  $("#kot_check_all").prop("checked", false);
  $("#kot_modal_modified_or_not").hide();
  $(this).parent().parent().parent().removeClass("active").addClass("inActive");
  setTimeout(function () {
    $(".modal").removeClass("inActive");
  }, 1000);
  $(".pos__modal__overlay").fadeOut(300);
});
$(document).on("click", "#cancel_kot_modal2", function (e) {
  $("#kot_check_all").prop("checked", false);
  $("#kot_modal_modified_or_not").hide();
  $(this).parent().parent().parent().removeClass("active").addClass("inActive");
  setTimeout(function () {
    $(".modal").removeClass("inActive");
  }, 1000);
  $(".pos__modal__overlay").fadeOut(300);
});

/*inline css use for offline printing of invoice, bill*/
let style_print = `<style>
              body {
                        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
                        font-size: 14px;
                        line-height: 1.42857143;
                        color: #333;
                        background-color: #fff;
                    }
                     #wrapper {
                    max-width: 480px;
                    margin: 0px auto;
                }
                .text-right{
                    width: 50% !important;
                      text-align: right !important;
                }
                
                @media print {
                   #wrapper {
                        max-width: 480px;
                    }
                    .text-right{
                        width: 50% !important;
                       text-align: right !important;
                    }
                    .arabic_text_left_is{
                        unicode-bidi: isolate-override !important;
                    }
                }
                .arabic_text_left_is{
                    unicode-bidi: isolate-override !important;
                }
                #barcode_invoice canvas{
                    width: 25% !important;
                }
                    .ir_txt_center {
                      text-align: center !important;
                    }
                    .ir_wid_70 {
                      width: 70%; !important;
                    }
                    .ir_wid_90 {
                      width: 90%; !important;
                    }
                    @media print {
                      .no-print {
                        display: none;
                      }
                    
                      #wrapper {
                        margin: 0 auto;
                      }
                    
                      .no-border {
                        border: none !important;
                      }
                    
                      .border-bottom {
                        border-bottom: 1px solid #ddd !important;
                      }
                    
                      table tfoot {
                        display: table-row-group;
                      }
                      .ir_txt_center {
                        text-align: center !important;
                      }
                      .ir_txt_right {
                        text-align: right !important;
                      }
                      .ir_wid_70 {
                        width: 70%; !important;
                      }
                      .ir_wid_90 {
                        width: 90%; !important;
                      }
                      .arabic_text_left_is{
                        unicode-bidi: isolate-override !important;
                      }
                    }
                    .arabic_text_left_is{
                      unicode-bidi: isolate-override !important;
                    }
                    #barcode_invoice canvas{
                      width: 25% !important;
                    }       
                    .text-center{
                            text-align: center;
                    }     
                    h3{
                    font-size: 25px;
                    padding: 0px;
                    margin: 0px;
                    }    
                    h4{
                   margin-top: 0px;
                    font-size: 20px;
                    } 
                    .p_txt{
                        margin-top: 0px;
                        margin-bottom: 0px;
                    }
                   .text_left{
                   text-align: left !important;
                   }
                    .ir_txt_center {
                      text-align: center !important;
                    }
                    .table {
                        width: 100%;
                        max-width: 100%;
                        margin-bottom: 20px;
                    }
                    table {
                        background-color: transparent;
                    }
                    
                    table {
                        border-spacing: 0;
                        border-collapse: collapse;
                    }
                    .table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {
                        padding: 5px;
                        line-height: 1.42857143;
                        vertical-align: top;
                        border-top: 1px solid #ddd;
                    }
                    .table-striped>tbody>tr:nth-of-type(odd) {
                            background-color: #f9f9f9;
                        }
                        .btn {
                            border-radius: 0;
                            margin-bottom: 5px;
                            text-decoration: none;
                        }
                        .btn-block {
                            display: block;
                            width: 100%;
                        }
                        .btn-primary {
                            color: #fff;
                            background-color: #3c8dbc;
                            border-color: #2e6da4;
                        }
                        .btn {
                            display: inline-block;
                            padding: 6px 12px;
                            margin-bottom: 0;
                            font-size: 14px;
                            font-weight: 400;
                            line-height: 1.42857143;
                            text-align: center;
                            white-space: nowrap;
                            vertical-align: middle;
                            -ms-touch-action: manipulation;
                            touch-action: manipulation;
                            cursor: pointer;
                            -webkit-user-select: none;
                            -moz-user-select: none;
                            -ms-user-select: none;
                            user-select: none;
                            background-image: none;
                            border: 1px solid transparent;
                            border-radius: 4px;
                        }
              </style>`;
function sn_counter(){
    $(".kot_container").each(function() {
        let sn_counter = $(this).find(".sn_counter");
        let i = 1;
        sn_counter.each(function() {
            $(this).html(i);
            i++;
        });
    });
}
function getExistKitchen(kitchen_id,existing_array){
    let status = true;
    for(let i=0;i<existing_array.length;i++){
        if(Number(kitchen_id) == existing_array[i]){
            status = false;
        }
    }
    return status;
}
function get_details_of_a_particular_order_for_kot_modal(sale_id) {
    let print_type_kot = $(".print_type_kot").val();
    if (print_type_kot == "web_browser") {
        $.ajax({
            url: base_url + "Sale/get_all_information_of_a_sale_ajax",
            method: "POST",
            data: {
                sale_id: sale_id,
                csrf_irestoraplus: csrf_value_,
            },
            success: function (response) {
                let order = JSON.parse(response);
                // console.log(order);
                let order_type = "";
                let total_item_counter = 0;
                let order_number = "";

                if(order !== null) {
                    if (order.order_type == 1) {
                        order_type = inv_dine;
                    } else if (order.order_type == 2) {
                        order_type = inv_take_away;
                    } else if (order.order_type == 3) {
                        order_type = inv_delivery;
                    }
                }

                let inv_p_waiter = (order.waiter_name != undefined && order.waiter_name)?` <b>`+inv_waiter+`: </b> `+order.waiter_name+ `<br/>`: "";
                let inv_p_table = (order.orders_table_text != undefined && order.orders_table_text)?` <h4  style="margin: 0px">`+inv_table+`: `+order.orders_table_text+ `</h4>`: "";

                let invoice_print =``;
                invoice_print+= `<!doctype html>
                <html>
                
                <head>
                    <meta charset="utf-8">
                    <title>`+inv_invoice_no+` : `+order.sale_no+`</title>
                    <script src="`+base_url+`assets/bower_components/jquery/dist/jquery.min.js"></script>
                    <script src="`+base_url+`assets/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
                ${style_print}
                </head>
                <body>
                    <div id="wrapper">
                        <div id="receiptData">
                            <div id="receipt-data">`;

                let header_txt1 =`<div class="text-center">`;
                let header_txt =`
                                      `+inv_p_table+`
                                      <h4 style="margin: 0px"> `+inv_order_type+`: `+order_type+`</h4>
                                    <p>
                                    <b>`+inv_customer+`: </b>`+order.customer_name+` &nbsp;`+inv_p_waiter+`
                                        <b>`+inv_invoice_no+`: </b>` +order.sale_no+` &nbsp;<b>`+inv_date+`: </b>`+ order.date_time+`<br><br>
                                    </p>
                                </div>
                                <div class="ir_clear"></div>
                                <table class="table table-condensed">
                                    <tbody>`;

                let sl=1;
                let total_kitchen_arr = [];

                $(".current_kot_items").empty();
                for (let key in order.items) {
                    //construct div
                    let this_item = order.items[key];
                    if(Number(this_item.kitchen_id)){
                        if(getExistKitchen(this_item.kitchen_id,total_kitchen_arr)){
                            total_kitchen_arr.push(this_item.kitchen_id);
                            let html_div = '<table data-kitchen_name="'+this_item.kitchen_name+'" class="kot_container kot_container_'+this_item.kitchen_id+'"></table>';
                            $(".current_kot_items").append(html_div);
                        }
                    }
                }
                for (let key in order.items) {
                    let row_of_item = '';
                    //construct div
                    let this_item = order.items[key];
                    let total_modifier = 0;
                    if(this_item.modifiers_id!='' && this_item.modifiers_id!=undefined ){
                        total_modifier = (this_item.modifiers_id.split(',')).length;
                    }
                    let modifier_ids_custom = [];
                    let modifier_names_custom = [];
                    let modifier_prices_custom = [];
                    if(total_modifier){
                        modifier_ids_custom = this_item.modifiers_id.split(',');
                        modifier_names_custom = this_item.modifiers_name.split(',');
                        modifier_prices_custom = this_item.modifiers_price.split(',');
                    }

                    let i = 1;
                    total_item_counter+=Number(this_item.qty);
                    row_of_item+=`<tr>`;
                    row_of_item+=`<td class="no-border border-bottom ir_wid_90"># <span class="sn_counter">`+sl+`</span>: `+this_item.menu_name;

                    row_of_item+=`</td>`;
                    row_of_item+=`<td class="no-border border-bottom text-right">`;
                    row_of_item+=  this_item.qty;
                    row_of_item+=`</td>`;
                    row_of_item+=`</tr>`;
                    for (let mod_key in modifier_names_custom) {
                        let tmp_mod_name_m_n = modifier_names_custom[mod_key];
                        row_of_item+=`<tr>`;
                        row_of_item+=`<td class="no-border border-bottom" style="padding-left: 38px;">`;
                        row_of_item+=`<small></small>`;
                        row_of_item += tmp_mod_name_m_n;
                        row_of_item+=`</td>`;
                        row_of_item+=`<td class="no-border border-bottom text-right">`;
                        row_of_item += this_item.qty;
                        row_of_item+=`</td>`;
                        row_of_item+=`</tr>`;
                    }
                    sl++;
                    if(Number(this_item.kitchen_id)){
                        $(".kot_container_"+this_item.kitchen_id).append(row_of_item);
                        sn_counter();
                    }
                }
                let footer_text = `</tbody>
                                </table>`;

                let separate_kot = '';
                for(let k=0;k<total_kitchen_arr.length;k++){
                    let get_html = $(".kot_container_"+total_kitchen_arr[k]).html();
                    let this_kitchen_name = $(".kot_container_"+total_kitchen_arr[k]).attr("data-kitchen_name");
                    invoice_print+=header_txt1;
                    invoice_print+=`<h3>`+txt_kot+`: `+this_kitchen_name+`</h3>`;
                    invoice_print+=header_txt;
                    invoice_print+=get_html;
                    invoice_print+=footer_text;
                    invoice_print+="<br>";
                }

                invoice_print+= ` </div>
                            <div class="ir_clear"></div>
                        </div>
                
                        <div id="buttons"  class="no-print ir_pt_tr">
                            <hr>
                            <span class="pull-right col-xs-12">
                                <a class="btn btn-block btn-primary" href="javascript:eval('window.print()')"/>Print</a> </span>
                            <div class="ir_clear"></div>
                            <div class="col-xs-12 ir_bg_p_c_red">
                                <p class="ir_font_txt_transform_none">
                                    Please follow these steps before you print for first time:
                                </p>
                                <p class="ir_font_capitalize">
                                    1. Disable Header and Footer in browser's print setting<br>
                                    For Firefox: File &gt; Page Setup &gt; Margins &amp; Header/Footer &gt; Headers & Footers &gt; Make
                                    all --blank--<br>
                                    For Chrome: Menu &gt; Print &gt; Uncheck Header/Footer in More Options
                                </p>
                            </div>
                            <div class="ir_clear"></div>
                        </div>
                    </div>
                    <script src="`+base_url+`assets/dist/js/print/jquery-2.0.3.min.js"></script>
                    <script src="`+base_url+`assets/dist/js/print/custom.js"></script>
                    <script>
                        $(function() {
                          setTimeout(function(){ window.print(); }, 1000); 
                         
                        });
                    </script>
                </body>
                
                </html>`;
                reset_finalize_modal();
                var popup = window.open("", "popup","width=100","height=600");
                popup.document.write(invoice_print);
                popup.document.close();
                popup.focus();


            },
            error: function () {
                alert(a_error);
            },
        });
    }else{
        $("#kot_list_modal").addClass("active");
        $(".pos__modal__overlay").fadeIn(200);
    }

}
//BOT
$(document).on("change", "#bot_check_all", function (e) {
  if ($(this).is(":checked")) {
    $(".bot_item_checkbox").prop("checked", true);
  } else {
    $(".bot_item_checkbox").prop("checked", false);
  }
});
function print_bot(sale_id) {
  let print_type_bot = $(".print_type_bot").val();
  if (print_type_bot == "web_browser") {
    let newWindow = open(
      base_url + "Sale/print_bot/" + sale_id,
      "Print BOT",
      "width=450,height=550"
    );
    newWindow.focus();

    newWindow.onload = function () {
      newWindow.document.body.insertAdjacentHTML("afterbegin");
    };
  } else {
    $.ajax({
      url: base_url + "Authentication/printSaleBotByAjax",
      method: "post",
      dataType: "json",
      data: {
        sale_id: sale_id,
      },
      success: function (data) {
        if (data.printer_server_url) {
          $.ajax({
            url:
              data.printer_server_url +
              "print_server/irestora_printer_server.php",
            method: "post",
            dataType: "json",
            data: {
              content_data: JSON.stringify(data.content_data),
            },
            success: function (data) {},
            error: function () {},
          });
        }
      },
      error: function () {},
    });
  }
}
$(document).on("click", "#print_bot_modal", function (e) {
  let order_number = $("#bot_modal_order_number").html();
  let order_date = $("#bot_modal_order_date").html();
  let customer_name = $("#bot_modal_customer_name").html();
  let table_name = $("#bot_modal_table_name").html();
  let waiter_name = $("#bot_modal_waiter_name").html();
  let order_type = $("#bot_modal_order_type").html();

  let order_info = "{";
  order_info += '"order_number":"' + order_number + '",';
  order_info += '"order_date":"' + order_date + '",';
  order_info += '"customer_name":"' + customer_name + '",';
  order_info += '"table_name":"' + table_name + '",';
  order_info += '"waiter_name":"' + waiter_name + '",';
  order_info += '"order_type":"' + order_type + '",';
  let items_info = "";
  items_info += '"items":';
  items_info += "[";

  let order_details_id = "";
  let j = 1;
  let checkbox_length = $(
    ".single_bot_row .bot_check_column .bot_item_checkbox:checked"
  ).length;
  $(".single_bot_row .bot_check_column .bot_item_checkbox:checked").each(
    function (i, obj) {
      if (j == checkbox_length) {
        order_details_id += $(this).val();
      } else {
        order_details_id += $(this).val() + ",";
      }
      j++;
    }
  );
  if (order_details_id != "") {
    let order_details_id_array = order_details_id.split(",");
    let k = 1;
    let item_array_length = order_details_id_array.length;

    order_details_id_array.forEach(function (entry) {
      let single_bot_row = $("#bot_for_item_" + entry);
      let bot_item_name = single_bot_row.find(".bot_item_name_column").html();
      let bot_item_qty = $("#bot_modal_item_qty_" + entry).html();
      let tmp_qty = $("#tmp_qty_" + entry).val();
      let p_qty = $("#p_qty_" + entry).val();

      items_info +=
        '{"bot_item_name":"' +
        bot_item_name +
        '", "bot_item_qty":"' +
        bot_item_qty +
        '", "tmp_qty":"' +
        tmp_qty +
        '", "p_qty":"' +
        p_qty +
        '"';
      let modifiers = "";
      let m = 1;
      $(".single_modifier:visible").each(function (i, obj) {
        let this_id = $(this).attr("data-item-detail-id");
        if (this_id == entry) {
          modifiers += $(this).html() + ",";
        }
      });
      let tmp_note = $("#bot_modal_note_" + entry).val();
      items_info += ',"modifiers":"' + modifiers + '"';
      items_info += ',"notes":"' + tmp_note + '"';
      items_info += k == item_array_length ? "}" : "},";
      k++;
    });
  }
  items_info += "]";
  order_info += items_info + "}";

  let order_object = JSON.stringify(order_info);

  $.ajax({
    url: base_url + "Sale/add_temp_bot_ajax",
    method: "POST",
    data: {
      order: order_object,
      csrf_irestoraplus: csrf_value_,
    },
    success: function (response) {
      if (response > 0) {
        $("#bot_list_modal").removeClass("active");
        $(".pos__modal__overlay").fadeOut(300);

        let print_type_bot = $(".print_type_bot").val();
        if (print_type_bot == "web_browser") {
          let newWindow = open(
            base_url + "Sale/print_temp_bot/" + Number(response),
            "Print BOT",
            "width=450,height=550"
          );
          newWindow.focus();
          newWindow.onload = function () {
            newWindow.document.body.insertAdjacentHTML("afterbegin");
          };
        } else {
          $.ajax({
            url: base_url + "Authentication/printSaleTempBotByAjax",
            method: "post",
            dataType: "json",
            data: {
              sale_id: Number(response),
            },
            success: function (data) {
              if (data.printer_server_url) {
                $.ajax({
                  url:
                    data.printer_server_url +
                    "print_server/irestora_printer_server.php",
                  method: "post",
                  dataType: "json",
                  data: {
                    content_data: JSON.stringify(data.content_data),
                  },
                  success: function (data) {},
                  error: function () {},
                });
              }
            },
            error: function () {},
          });
        }
      }
    },
    error: function () {
      alert(a_error);
    },
  });
});
$(document).on("click", ".bot_content_column .single_modifier", function () {
  let current_selection = $(this).attr("data-selected");
  if (current_selection == "selected") {
    $(this).attr("data-selected", "unselected");
    $(this).css("background-color", "#E0E0E0");
  } else if (current_selection == "unselected") {
    $(this).attr("data-selected", "selected");
    // $(this).css("background-color", "#B5D6F6");
  }
});
$(document).on("click", "#print_bot", function (e) {
    let select_running_order_obj = $(".select_running_order").parent().hasClass("active");
    if (select_running_order_obj) {
        let sale_id = $(".select_running_order").parent().parent().find(".active").attr("data-id");
    get_details_of_a_particular_order_for_bot_modal(sale_id);
    $("#bot_check_all").prop("checked", true);
  } else {
    alertModal({modalName:"danger", normalTxt: please_select_open_order})
  }
});
$(document).on("click", ".print_bot_pos_screen", function (e) {
    let select_running_order_obj = $(".select_running_order").parent().hasClass("active");
    if (select_running_order_obj) {
        let sale_id = $(".select_running_order").parent().parent().find(".active").attr("data-id");
    get_details_of_a_particular_order_for_bot_modal(sale_id);
    $("#bot_check_all").prop("checked", true);
  } else {
    alertModal({modalName:"danger", normalTxt: please_select_open_order})
  }
});
$(document).on("click", "#order_details_print_bot_button", function (e) {
  if (
    $(".holder .order_details > .single_order[data-selected=selected]").length >
    0
  ) {
    let sale_id = $(
      ".holder .order_details .single_order[data-selected=selected]"
    )
      .attr("id")
      .substr(6);
    print_bot(sale_id);
  } else {
    alertModal({modalName:"danger", normalTxt: please_select_open_order})
    // swal({
    //   title: warning + "!",
    //   text: please_select_open_order,
    //   confirmButtonText: ok,
    //   confirmButtonColor: "#b6d6f6",
    // });
  }
});
$(document).on("click", ".decrease_item_bot_modal", function () {
  let item_detail_id = $(this).attr("id").substr(24);
  let qty_element = $("#bot_modal_item_qty_" + item_detail_id);
  let qty_element_fixed = $("#bot_modal_item_qty_fixed_" + item_detail_id);
  let qty = parseInt(qty_element.html());
  if (qty > 1) {
    qty--;
  }
  qty_element.html(qty);
});

$(document).on("click", ".increase_item_bot_modal", function () {
  let item_detail_id = $(this).attr("id").substr(24);
  let qty_element = $("#bot_modal_item_qty_" + item_detail_id);
  let qty_element_fixed = $("#bot_modal_item_qty_fixed_" + item_detail_id);
  let qty = parseInt(qty_element.html());
  let qty_fixed = parseInt(qty_element_fixed.html());
  if (qty < qty_fixed) {
    qty++;
  }

  qty_element.html(qty);
});
$(document).on("click", "#cancel_bot_modal", function (e) {
  $("#bot_check_all").prop("checked", false);
  $("#bot_modal_modified_or_not").hide();
  $(this).parent().parent().parent().removeClass("active").addClass("inActive");
  setTimeout(function () {
    $(".modal").removeClass("inActive");
  }, 1000);
  $(".pos__modal__overlay").fadeOut(300);
});
$(document).on("click", "#cancel_bot_modal2", function (e) {
  $("#bot_check_all").prop("checked", false);
  $("#bot_modal_modified_or_not").hide();
  $(this).parent().parent().parent().removeClass("active").addClass("inActive");
  setTimeout(function () {
    $(".modal").removeClass("inActive");
  }, 1000);
  $(".pos__modal__overlay").fadeOut(300);
});
function get_details_of_a_particular_order_for_bot_modal(sale_id) {
  $.ajax({
    url: base_url + "Sale/get_all_information_of_a_sale_ajax",
    method: "POST",
    data: {
      sale_id: sale_id,
      csrf_irestoraplus: csrf_value_,
    },
    success: function (response) {
      response = JSON.parse(response);
      let order_type = "";
      let order_type_id = 0;
      let order_number = "";
        let tables_booked = response.orders_table_text;
      $("#bot_modal_customer_id").html(response.customer_id);
      $("#bot_modal_customer_name").html(response.customer_name);
      $("#bot_modal_waiter_name").html(response.waiter_name);
      $("#bot_modal_order_date").html(response.date_time);
      $("#open_invoice_date_hidden").val(response.sale_date);

      $(".datepicker_custom")
        .datepicker({
          autoclose: true,
          format: "yyyy-mm-dd",
          startDate: "0",
          todayHighlight: true,
        })
        .datepicker("update", response.sale_date);

      $("#bot_modal_table_name").html(response.orders_table_text);

      if (response.modified == "Yes") {
        $("#bot_modal_modified_or_not").show();
      }

      if (response.order_type == 1) {
        order_type = "Dine In";
        order_type_id = 1;
        order_number = "A " + response.sale_no;
      } else if (response.order_type == 2) {
        order_type = "Take Away";
        order_type_id = 2;
        order_number = "B " + response.sale_no;
        $("#bot_modal_waiter_name").html("None");
      } else if (response.order_type == 3) {
        order_type = "Delivery";
        order_type_id = 3;
        order_number = "C " + response.sale_no;
        $("#bot_modal_waiter_name").html("None");
      }
      $("#bot_modal_order_number").html(order_number);
      $("#bot_modal_order_type").html(order_type);
      let draw_table_for_bot_modal = "";

      for (let key in response.items) {
        //construct div
        let this_item = response.items[key];

        let selected_modifiers = "";
        let selected_modifiers_id = "";
        let selected_modifiers_price = "";
        let modifiers_price = 0;
        let total_modifier = this_item.modifiers.length;
        let i = 1;
        for (let mod_key in this_item.modifiers) {
          let this_modifier = this_item.modifiers[mod_key];
          //get selected modifiers
          if (i == total_modifier) {
            selected_modifiers += this_modifier.name;
            selected_modifiers_id += this_modifier.modifier_id;
            selected_modifiers_price += this_modifier.modifier_price;
            modifiers_price = (
              parseFloat(modifiers_price) +
              parseFloat(this_modifier.modifier_price)
            ).toFixed(ir_precision);
          } else {
            selected_modifiers += this_modifier.name + ", ";
            selected_modifiers_id += this_modifier.modifier_id + ",";
            selected_modifiers_price += this_modifier.modifier_price + ",";
            modifiers_price = (
              parseFloat(modifiers_price) +
              parseFloat(this_modifier.modifier_price)
            ).toFixed(ir_precision);
          }
          i++;
        }
        let selected_modifiers_array = selected_modifiers.split(",");
        let selected_modifiers_id_array = selected_modifiers_id.split(",");
        let selected_modifiers_price_array =
          selected_modifiers_price.split(",");
        let modifier_divs = "";
        let modifier_length = selected_modifiers_array.length;
        if (modifier_length > 0) {
          for (let index = 0; index < modifier_length; index++) {
            modifier_divs +=
              selected_modifiers_array[index] != ""
                ? "<span>" + selected_modifiers_array[index] + "</span>, "
                : "";
          }
        }

        let discount_value =
          this_item.menu_discount_value != ""
            ? this_item.menu_discount_value
            : "0.00";
        if (this_item.item_type == "Bar Item") {
          draw_table_for_bot_modal +=
            '<div class="single_bot_row" id="bot_for_item_' +
            this_item.id +
            '">';
          draw_table_for_bot_modal +=
            '<div class="bot_content_column bot_check_column">';
          draw_table_for_bot_modal +=
            '<input checked class="bot_item_checkbox" id="bot_item_checkbox_' +
            this_item.id +
            '" type="checkbox" name="" value="' +
            this_item.id +
            '">';
          draw_table_for_bot_modal += "</div>";
          draw_table_for_bot_modal +=
            '<input type="hidden" value="' +
            this_item.menu_note +
            '" id="bot_modal_note_' +
            this_item.id +
            '"> <div  class="bot_content_column bot_item_name_column txt_10">';
          draw_table_for_bot_modal += this_item.menu_name;
          draw_table_for_bot_modal += modifier_divs
            ? "<br>" + modifiers_txt + ": " + modifier_divs
            : "";
          draw_table_for_bot_modal += this_item.menu_note
            ? "<br>Notes: " + this_item.menu_note
            : "";
          draw_table_for_bot_modal += "</div>";
          draw_table_for_bot_modal +=
            '<div class="bot_content_column bot_qty_column">';
          draw_table_for_bot_modal +=
            '<i  id="decrease_item_bot_modal_' +
            this_item.id +
            '" class="fal fa-minus decrease_item_bot_modal txt_5"></i>';
          draw_table_for_bot_modal +=
            ' <span class="txt_11" id="bot_modal_item_qty_fixed_' +
            this_item.id +
            '">' +
            this_item.qty +
            '</span><span id="bot_modal_item_qty_' +
            this_item.id +
            '">' +
            this_item.qty +
            '</span> <input type="hidden"  class="tmp_qty"   name="tmp_qty" value="' +
            this_item.tmp_qty +
            '" id="tmp_qty_' +
            this_item.id +
            '"><input type="hidden" class="p_qty" name="p_qty" value="' +
            this_item.qty +
            '" id="p_qty_' +
            this_item.id +
            '">';
          draw_table_for_bot_modal +=
            '<i   id="increase_item_bot_modal_' +
            this_item.id +
            '" class="fal fa-plus increase_item_bot_modal txt_5"></i>';
          draw_table_for_bot_modal += "</div>";
          draw_table_for_bot_modal += "</div>";
        }
      }

      //add to top
      $("#bot_list_holder").empty();
      $("#bot_list_holder").prepend(draw_table_for_bot_modal);
      $("#print_bot_modal").click();
    },
    error: function () {
      alert(a_error);
    },
  });
}
$(window).on("resize", function () {
  let height_should_be =
    parseInt($(window).height()) -
    parseInt($(".top_header_part").height()) -
    20;
  $(".main_left").css("height", height_should_be + "px");
  $(".main_middle").css("height", height_should_be + "px");
  $(".main_right").css("height", height_should_be - 10 + "px");

  adjust_left_side_order_list();
  adjust_right_side_item_list();
  adjust_middle_side_cart_list();
});
$(window).on("load", function () {
  adjust_middle_side_cart_list();
});
function calculate_create_invoice_modal() {
  let total_payable = $("#finalize_total_payable").html();
  let total_paid = 0;
  let focus = 1;
  $(".payment_method").each(function () {
    let this_value = Number($(this).text());
    if (this_value == "" || isNaN(this_value)) {
    } else {
      this_value = Number($(this).text());
      total_paid += this_value;
    }
  });

  let paid_amount = total_paid;
  let due_amount = (
    parseFloat(total_payable) - parseFloat(paid_amount)
  ).toFixed(ir_precision);


  $("#pay_amount_invoice_input").val(total_paid.toFixed(ir_precision));
  $("#due_amount_invoice_input").val(due_amount);
  $("#payment_amount_pad").val(due_amount);
  if (due_amount > 0) {
    $("#finalize_order_button").addClass("no_access_button");
    $("#finalize_order_button").removeClass("bg__green");
  } else {
      $("#finalize_order_button").removeClass("no_access_button");
      $("#finalize_order_button").addClass("bg__green");
  }
}
// ===============================================
// add all prices of item and modifiers
function do_addition_of_item_and_modifiers_price() {
  //set all hidden discount amount and original item price
  set_all_hidden_item_discount_amount();
  //set visible discounted item price to table
  set_all_visible_discounted_item_price();

  //set total discount amount of items
  set_total_items_discount_for_subtotal();

  //set all hidden discount amount and original item price
  set_all_items_modifiers_amount();

  let total_of_all_items_and_modifiers = get_total_of_all_items_and_modifiers();
  //get total items in cart
  let total_items_in_cart = $(".order_holder .single_order").length;
  //set row number for every single item
  $(".order_holder .single_order").each(function (i, obj) {
    $(this).attr("data-single-order-row-no", i + 1);
  });
  //if there is no item in cart reset necessary field and value
  if (total_items_in_cart < 1) {
    $("#discounted_sub_total_amount").html(Number(0).toFixed(ir_precision));
    $("#sub_total_discount").val("");
    $("#sub_total_discount_amount").html(Number(0).toFixed(ir_precision));
    $("#all_items_discount").html(Number(0).toFixed(ir_precision));
  }
  let total_items_in_cart_with_quantity = 0;
  $(".qty_item_custom").each(function (i, obj) {
    total_items_in_cart_with_quantity =
      parseInt(total_items_in_cart_with_quantity) + parseInt($(this).html());
  });

  //set total items in cart to view
  $("#total_items_in_cart").html(total_items_in_cart);
  $("#total_items_in_cart_with_quantity").html(
    total_items_in_cart_with_quantity
  );
  //set sub total
  $("#sub_total").html(total_of_all_items_and_modifiers);
  $("#sub_total_show").html(total_of_all_items_and_modifiers);

  //get the value of the delivery charge amount

  let delivery_charge_amount = 0;

  let selected_btn_value = "";
  let countable_d_c = "no";

    let this_id_name = $(".main_top").find("button[data-selected=selected]").attr("id");

    let charge_type_custom = $("#charge_type").val();

    if (this_id_name && this_id_name!=undefined) {
        if (
            charge_type_custom == "delivery" &&
            this_id_name != "take_away_button" &&
            this_id_name != "dine_in_button"
        ) {
            countable_d_c = "yes";
        }
        if (
            charge_type_custom == "service" &&
            this_id_name != "take_away_button" &&
            this_id_name != "delivery_button"
        ) {
            countable_d_c = "yes";
        }
    }

  let waiter_app_status1 = $("#waiter_app_status").val();
  if (waiter_app_status1 == "Yes") {
    countable_d_c = "yes";
  }
  let sub_total_show = Number($("#sub_total_show").html());

  if ($("#delivery_charge").val() != "" && countable_d_c == "yes") {

    delivery_charge_amount = get_particular_item_discount_amount(
      $("#delivery_charge").val(),
      sub_total_show
    );
    $("#show_charge_amount").html(
      Number(delivery_charge_amount).toFixed(ir_precision)
    );
  } else {
    $("#show_charge_amount").html(Number(0).toFixed(ir_precision));
  }
  //check wether value is valid or not
  /*  remove_last_two_digit_without_percentage(
    delivery_charge_amount,
    $("#delivery_charge")
  );*/

  //get subtotal amount
  let sub_total_amount = $("#sub_total").html();

  let sub_total_discount_amount = 0;
  //get subtotal discount amount
  if ($("#sub_total_discount").val() != "") {
    sub_total_discount_amount = $("#sub_total_discount").val();
    let tmt_value_sub_total = sub_total_discount_amount.split("%");
    if (tmt_value_sub_total[1] == "") {
      $("#show_discount_amount").html(sub_total_discount_amount);
    } else {
      $("#show_discount_amount").html(
        Number(sub_total_discount_amount).toFixed(ir_precision)
      );
    }
  } else {
    $("#show_discount_amount").html(Number(0).toFixed(ir_precision));
  }

  let sub_total_discount_value = $("#sub_total_discount").val();

  //check wether value is valid or not
  remove_last_two_digit_with_percentage(
    sub_total_discount_amount,
    $("#sub_total_discount")
  );
  sub_total_discount_amount = get_sub_total_discount_amount(
    sub_total_discount_amount,
    sub_total_amount
  );

  //if sub total discount amount is greater than subtotal then make it blank
  if (parseFloat(sub_total_discount_amount) > parseFloat(sub_total_amount)) {
    $("#sub_total_discount").val("");
    do_addition_of_item_and_modifiers_price();
    return false;
  }
  //get total item discount amount
  let total_item_discount_amount = parseFloat(
    $("#total_item_discount").html()
  ).toFixed(ir_precision);

  //get all discount of table
  let total_discount = (
    parseFloat(sub_total_discount_amount) +
    parseFloat(total_item_discount_amount)
  ).toFixed(ir_precision);

  //set sub total discount amount
  $("#sub_total_discount_amount").html(sub_total_discount_amount);

  //set sub total amount after discount in a hidden field
  let discounted_sub_total_amount = (
    parseFloat(sub_total_amount) - parseFloat(sub_total_discount_amount)
  ).toFixed(ir_precision);
  $("#discounted_sub_total_amount").html(discounted_sub_total_amount);
  //get vat amount
  let vat_amount = collect_tax == "Yes" ? get_total_vat() : null;

    let set_active_tax = $(".set_active_tax").parent().find(".active_tax");
    let is_diplomat_hidden = Number($("#is_diplomat_hidden").val());

    if (set_active_tax.length || is_diplomat_hidden===2) {
    vat_amount = null;
   }
  let total_vat_section_to_show = "";
  let html_modal = "";
  let total_tax_custom = 0;

  $.each(vat_amount, function (key, value) {
    let row_id = 1;
    let key_value = key.split("_");
    total_vat_section_to_show +=
      '<span class="tax_field" id="tax_field_' +
      row_id +
      '">' +
      key_value[0] +
      "</span>: " +
      currency +
      ' <span class="tax_field_amount" id="tax_field_amount_' +
      row_id +
      '">' +
      value +
      "</span><br/>";

      html_modal +="<div class='tax_field row set_active_tax' data-tax_field_id='" +
      row_id +
      "'  data-tax_field_type='" +
      key_value[0] +
      "'  data-tax_field_amount='" +
      value +
      "'><div>"+key_value[0]+"</div><div>"+value+"</div></div>";
    total_tax_custom += Number(value);
  });

  if (total_tax_custom) {
    $("#show_vat_modal").html(total_tax_custom.toFixed(ir_precision));
  } else {
    $("#show_vat_modal").html(Number(0).toFixed(ir_precision));
  }
  $("#tax_details").html(html_modal);
  //set vat amount to view
  // $('#all_items_vat').html(vat_amount);
  $("#all_items_vat").html(total_vat_section_to_show);

  //set total discount
  $("#all_items_discount").html(total_discount);

  //calculate total payable amount
  let total_payable_to_show = "";
  let total_vat_amount = 0;

  let tax_type = Number($("#tax_type").val());

  if (tax_type == 1) {
    $.each(vat_amount, function (key, value) {
      let vat_tmp = 0;
      if (value && value != "NaN") {
        vat_tmp = value;
      }
      total_vat_amount = (
        parseFloat(total_vat_amount) + parseFloat(vat_tmp)
      ).toFixed(2);
    });
  }

  let total_payable = (
    parseFloat(discounted_sub_total_amount) +
    parseFloat(total_vat_amount) +
    parseFloat(delivery_charge_amount)
  ).toFixed(ir_precision);

  //set total payable amount to view
  $("#total_payable").html(total_payable);
  if (!Number($("#total_items_in_cart_with_quantity").html())) {
    $("#total_payable").html(Number(0).toFixed(ir_precision));
    $("#show_charge_amount").html(Number(0).toFixed(ir_precision));
  }
}
function set_all_items_modifiers_amount() {
  $(".order_holder .single_order").each(function (i, obj) {
    let modifiers_price = parseFloat(0).toFixed(ir_precision);
    let item_id = $(this).attr("id").substr(15);

    let item_quantity = $(this)
      .find("#item_quantity_table_" + item_id)
      .html();

    if ($(this).find("#item_modifiers_price_table_" + item_id).length > 0) {
      let comma_separeted_modifiers_price = $(this)
        .find("#item_modifiers_price_table_" + item_id)
        .html();
      let modifiers_price_array =
        comma_separeted_modifiers_price != ""
          ? comma_separeted_modifiers_price.split(",")
          : "";
      modifiers_price_array.forEach(function (modifier_price) {
        modifiers_price = (
          parseFloat(modifiers_price) + parseFloat(modifier_price)
        ).toFixed(ir_precision);
      });
      let modifiers_price_as_per_item_quantity = (
        parseFloat(item_quantity) * parseFloat(modifiers_price)
      ).toFixed(ir_precision);
      $(this)
        .find(".fifth_column #item_modifiers_price_table_" + item_id)
        .html(modifiers_price_as_per_item_quantity);
    }
  });
}
function set_total_items_discount_for_subtotal() {
  let total_discount = 0;
  $(".single_order .first_portion .fifth_column span").each(function (i, obj) {
    let this_item_discount_amount = parseFloat(
      $(this).parent().parent().find(".item_discount").html()
    ).toFixed(ir_precision);
    total_discount = (
      parseFloat(total_discount) + parseFloat(this_item_discount_amount)
    ).toFixed(ir_precision);
  });
  $("#total_item_discount").html(total_discount);
}
function set_all_hidden_item_discount_amount() {
  $(".single_order .first_portion .fifth_column span").each(function (i, obj) {
    let this_item_original_price = parseFloat(
      $(this).parent().parent().find(".item_price_without_discount").html()
    ).toFixed(ir_precision);
    let item_discount_value = $(this)
      .parent()
      .parent()
      .find(".forth_column input")
      .val();
    item_discount_value = item_discount_value != "" ? item_discount_value : 0;
    let actual_discount_amount = get_particular_item_discount_amount(
      item_discount_value,
      this_item_original_price
    );
    $(this)
      .parent()
      .parent()
      .find(".item_discount")
      .html(actual_discount_amount);
  });
}
function set_all_visible_discounted_item_price() {
  $(".single_order .first_portion .fifth_column span").each(function (i, obj) {
    let this_item_original_price = parseFloat(
      $(this).parent().parent().find(".item_price_without_discount").html()
    ).toFixed(ir_precision);
    let item_discount_value = $(this)
      .parent()
      .parent()
      .find(".forth_column input")
      .val();
    item_discount_value = item_discount_value != "" ? item_discount_value : 0;
    let actual_discount_amount = get_particular_item_discount_amount(
      item_discount_value,
      this_item_original_price
    );
    let discounted_item_price = (
      parseFloat(this_item_original_price) - parseFloat(actual_discount_amount)
    ).toFixed(ir_precision);
    $(this)
      .parent()
      .parent()
      .find(".fifth_column span")
      .html(discounted_item_price);
  });
}
function get_total_of_all_items_and_modifiers() {
  //get all items total price and add
  let all_item_total_price = 0;
  let all_item_total_vat_amount = 0;
  let this_item_discount = 0;
  $(".single_order .first_portion .fifth_column span").each(function (i, obj) {
    all_item_total_price = (
      parseFloat(all_item_total_price) + parseFloat($(this).html())
    ).toFixed(ir_precision);
  });

  //get all modifiers price and add
  let all_modifiers_total_price = 0;
  $(".single_order .second_portion .fifth_column span").each(function (i, obj) {
    all_modifiers_total_price = (
      parseFloat(all_modifiers_total_price) + parseFloat($(this).html())
    ).toFixed(ir_precision);
  });
  return (
    parseFloat(all_item_total_price) + parseFloat(all_modifiers_total_price)
  ).toFixed(ir_precision);
}
function get_total_vat() {
  let all_item_total_vat_amount = 0;
  let tax_object = {};
  let tax_name = [];
  let customer_id = $("#walk_in_customer").val();
  let customer_gst_number = "";
  for (let m in window.customers) {
    let this_customer = window.customers[m];
    if (this_customer.customer_id == customer_id) {
      customer_gst_number = this_customer.gst_number;
    }
  }
  let customer_state_code =
    customer_gst_number != "" ? customer_gst_number.substr(0, 2) : "";
  let same_state = false;
  if (customer_state_code == gst_state_code) {
    same_state = true;
  }
  if (customer_state_code == "") {
    same_state = true;
  }

  $(".single_order .first_portion .fifth_column span").each(function (i, obj) {
    let this_item_quantity = parseFloat(
      $(this).parent().parent().find(".third_column span").html()
    ).toFixed(ir_precision);
    let this_item_price = parseFloat(
      $(this).parent().parent().find(".second_column span").html()
    ).toFixed(ir_precision);
    let item_total_price = parseFloat(
      $(this).parent().parent().find(".fifth_column span").html()
    ).toFixed(ir_precision);
    let tax_information = JSON.parse(
      $(this).parent().parent().find(".item_vat").html()
    );

    if (tax_information.length > 0) {
      // console.log(tax_information);
      for (let k in tax_information) {
        if (tax_name.includes(tax_information[k].tax_field_name)) {
          var previous_value =
            tax_object[
              "" +
                tax_information[k].tax_field_name +
                "_" +
                tax_information[k].tax_field_id
            ];
          let current_value = 0;
          let tax_type = Number($("#tax_type").val());
          if (tax_type == 1) {
            current_value = parseFloat(
              parseFloat(
                parseFloat(tax_information[k].tax_field_percentage) *
                  parseFloat(item_total_price)
              ) / parseFloat(100)
            );
          } else {
            current_value = (
              parseFloat(item_total_price) -
              parseFloat(item_total_price) /
                (1 + tax_information[k].tax_field_percentage / 100)
            ).toFixed(2);
          }

          tax_object[
            "" +
              tax_information[k].tax_field_name +
              "_" +
              tax_information[k].tax_field_id
          ] = (parseFloat(previous_value) + Number(current_value)).toFixed(2);
        } else {
          tax_name.push(tax_information[k].tax_field_name);
          let current_value = 0;
          let tax_type = Number($("#tax_type").val());

          if (tax_type == 1) {
            current_value = parseFloat(
              parseFloat(
                parseFloat(tax_information[k].tax_field_percentage) *
                  parseFloat(item_total_price)
              ) / parseFloat(100)
            );
          } else {
            current_value = (
              parseFloat(item_total_price) -
              parseFloat(item_total_price) /
                (1 + tax_information[k].tax_field_percentage / 100)
            ).toFixed(2);
          }
          tax_object[
            "" +
              tax_information[k].tax_field_name +
              "_" +
              tax_information[k].tax_field_id
          ] = Number(current_value).toFixed(2);
        }
      }
    }
  });
  $(".item_vat_modifier").each(function (i, obj) {
    let item_id_custom = $(this).attr("data-item_id");
    let this_item_modifer_quantity = parseFloat(
      $("#item_quantity_table_" + item_id_custom).html()
    ).toFixed(ir_precision);
    let this_item_modifier_price = parseFloat(
      $(this).attr("data-modifier_price")
    ).toFixed(ir_precision);

    let item_total_price =
      this_item_modifer_quantity * this_item_modifier_price;
    let tax_information = JSON.parse($(this).html());

    if (tax_information.length > 0) {
      // console.log(tax_information);
      for (let k in tax_information) {
        if (tax_name.includes(tax_information[k].tax_field_name)) {
          var previous_value =
            tax_object[
              "" +
                tax_information[k].tax_field_name +
                "_" +
                tax_information[k].tax_field_id
            ];
          let current_value = 0;
          let tax_type = Number($("#tax_type").val());
          if (tax_type == 1) {
            current_value = parseFloat(
              parseFloat(
                parseFloat(tax_information[k].tax_field_percentage) *
                  parseFloat(item_total_price)
              ) / parseFloat(100)
            );
          } else {
            current_value = (
              parseFloat(item_total_price) -
              parseFloat(item_total_price) /
                (1 + tax_information[k].tax_field_percentage / 100)
            ).toFixed(2);
          }

          tax_object[
            "" +
              tax_information[k].tax_field_name +
              "_" +
              tax_information[k].tax_field_id
          ] = (parseFloat(previous_value) + Number(current_value)).toFixed(2);
        } else {
          tax_name.push(tax_information[k].tax_field_name);
          let current_value = 0;
          let tax_type = Number($("#tax_type").val());

          if (tax_type == 1) {
            current_value = parseFloat(
              parseFloat(
                parseFloat(tax_information[k].tax_field_percentage) *
                  parseFloat(item_total_price)
              ) / parseFloat(100)
            );
          } else {
            current_value = (
              parseFloat(item_total_price) -
              parseFloat(item_total_price) /
                (1 + tax_information[k].tax_field_percentage / 100)
            ).toFixed(2);
          }
          tax_object[
            "" +
              tax_information[k].tax_field_name +
              "_" +
              tax_information[k].tax_field_id
          ] = Number(current_value).toFixed(2);
        }
      }
    }
  });

  let item_total_price = Number($("#show_charge_amount").html());
  let tax_information = JSON.parse($("#charge_tax_html").html());
  if (tax_information.length > 0 && item_total_price) {
    for (let k in tax_information) {
      if (tax_name.includes(tax_information[k].tax_field_name)) {
        var previous_value =
          tax_object[
            "" +
              tax_information[k].tax_field_name +
              "_" +
              tax_information[k].tax_field_id
          ];
        let current_value = 0;
        let tax_type = Number($("#tax_type").val());
        if (tax_type == 1) {
          current_value = parseFloat(
            parseFloat(
              parseFloat(tax_information[k].tax_field_percentage) *
                parseFloat(item_total_price)
            ) / parseFloat(100)
          );
        } else {
          current_value = (
            parseFloat(item_total_price) -
            parseFloat(item_total_price) /
              (1 + tax_information[k].tax_field_percentage / 100)
          ).toFixed(2);
        }

        tax_object[
          "" +
            tax_information[k].tax_field_name +
            "_" +
            tax_information[k].tax_field_id
        ] = (parseFloat(previous_value) + Number(current_value)).toFixed(2);
      } else {
        tax_name.push(tax_information[k].tax_field_name);
        let current_value = 0;
        let tax_type = Number($("#tax_type").val());

        if (tax_type == 1) {
          current_value = parseFloat(
            parseFloat(
              parseFloat(tax_information[k].tax_field_percentage) *
                parseFloat(item_total_price)
            ) / parseFloat(100)
          );
        } else {
          current_value = (
            parseFloat(item_total_price) -
            parseFloat(item_total_price) /
              (1 + tax_information[k].tax_field_percentage / 100)
          ).toFixed(2);
        }
        tax_object[
          "" +
            tax_information[k].tax_field_name +
            "_" +
            tax_information[k].tax_field_id
        ] = Number(current_value).toFixed(2);
      }
    }
  }

  return tax_object;
}
function get_all_item_discount() {
  let all_item_discount = 0;
  $(".single_order .first_portion .fifth_column span").each(function (i, obj) {
    let this_item_quantity = parseFloat(
      $(this).parent().parent().find(".third_column span").html()
    ).toFixed(ir_precision);
    let this_item_price = parseFloat(
      $(this).parent().parent().find(".second_column span").html()
    ).toFixed(ir_precision);
    let total_item_price_this_row = (
      parseFloat(this_item_quantity) * parseFloat(this_item_price)
    ).toFixed(ir_precision);
    let this_item_discount =
      $(this).parent().parent().find(".forth_column input").val() != ""
        ? $(this).parent().parent().find(".forth_column input").val()
        : 0;
    this_item_discount = get_particular_item_discount_amount(
      this_item_discount,
      total_item_price_this_row
    );
    $(this).parent().parent().find(".item_discount").html(this_item_discount);
    // let this_item_discount = (parseFloat(this_item_discount)+parseFloat($(this).parent().parent().find('.item_discount').html())).toFixed(ir_precision);
    all_item_discount = (
      parseFloat(all_item_discount) + parseFloat(this_item_discount)
    ).toFixed(ir_precision);
  });

  return all_item_discount;
}
function get_particular_item_discount_amount(discount, item_price) {
  if (discount.length > 0 && discount.substr(discount.length - 1) == "%") {
    return (
      (parseFloat(item_price) * parseFloat(discount)) /
      parseFloat(100)
    ).toFixed(ir_precision);
  } else {
    return parseFloat(discount).toFixed(ir_precision);
  }
}
function get_updated_sub_total() {
  //get all items total price and add
  let all_item_total_price = 0;
  let all_item_total_vat_amount = 0;
  let this_item_discount = 0;
  $(".single_order .first_portion .fifth_column span").each(function (i, obj) {
    let this_item_quantity = parseFloat(
      $(this).parent().parent().find(".third_column span").html()
    ).toFixed(ir_precision);
    let this_item_price = parseFloat(
      $(this).parent().parent().find(".second_column span").html()
    ).toFixed(ir_precision);
    let this_item_vat_percentage = parseFloat(
      $(this).parent().parent().find(".item_vat").html()
    ).toFixed(ir_precision);
    all_item_total_price = (
      parseFloat(all_item_total_price) +
      parseFloat(this_item_quantity) * parseFloat(this_item_price)
    ).toFixed(ir_precision);
    let this_item_vat_amount = (
      (parseFloat($(this).html()) * parseFloat(this_item_vat_percentage)) /
      parseFloat(100)
    ).toFixed(ir_precision);
    all_item_total_vat_amount = (
      parseFloat(all_item_total_vat_amount) + parseFloat(this_item_vat_amount)
    ).toFixed(ir_precision);

    let this_item_discount = (
      parseFloat(this_item_discount) +
      parseFloat($(this).parent().parent().find(".item_discount").html())
    ).toFixed(ir_precision);
  });

  //get total discount
  let total_discount = $("#all_items_discount");

  //get discount on sub total
  let sub_total_discount =
    $("#sub_total_discount").val() == "" ? $("#sub_total_discount").val() : 0;

  //get sub total
  let sub_total = parseFloat($("#sub_total").html()).toFixed(ir_precision);

  //get sub total discount amount
  let sub_total_discount_amount = get_sub_total_discount_amount(
    $sub_total_discount,
    $sub_total
  );

  //get all modifiers price and add
  let all_modifiers_total_price = 0;
  $(".single_order .second_portion .fifth_column span").each(function (i, obj) {
    all_modifiers_total_price = (
      parseFloat(all_modifiers_total_price) + parseFloat($(this).html())
    ).toFixed(ir_precision);
  });
  //set vat amount under sub total
  $("#all_items_vat").html(all_item_total_vat_amount);

  let total_of_all_items_and_modifiers =
    parseFloat(all_item_total_price) + parseFloat(all_modifiers_total_price);
  return total_of_all_items_and_modifiers;
}
function sub_total_get_amount($value) {}
function get_sub_total_discount_amount(sub_total_discount, sub_total) {
  if (
    sub_total_discount.length > 0 &&
    sub_total_discount.substr(sub_total_discount.length - 1) == "%"
  ) {
    return (
      (parseFloat(sub_total) * parseFloat(sub_total_discount)) /
      parseFloat(100)
    ).toFixed(ir_precision);
  } else {
    return parseFloat(sub_total_discount).toFixed(ir_precision);
  }
}
function reset_on_modal_close_or_add_to_cart() {
  $("#item_modal").removeClass("active");
  $(".pos__modal__overlay").fadeOut(300);
  $("#item_quantity_modal").val("1");
  $("#modal_modifier_price_variable").html("0");
  $("#modal_modifiers_unit_price_variable").html("0");
  $("#modal_item_note").val("");
  $("#modal_discount").val("");
  $("#modal_item_price_variable_without_discount").html("0");
  $("#modal_item_vat_percentage").html("0");
  $("#modal_item_row").html("0");
  $("#modal_discount_amount").html("0");
}
function reset_on_modal_close_or_add_customer() {
  $("#customer_id_modal").val("");
  $("#customer_name_modal").val("");
  $("#customer_phone_modal").val("");
  $("#customer_email_modal").val("");
  $("#customer_dob_modal").val("");
  $("#customer_doa_modal").val("");
  $("#customer_delivery_address_modal").val("");
  $("#customer_gst_number_modal").val("");
}
function upTime2(object, second, minute, hour) {
  let table_id = object.attr("id").substr(13);
  if (
    $("#booked_for_hour_" + table_id).html() == "00" &&
    $("#booked_for_minute_" + table_id).html() == "00" &&
    $("#booked_for_second_" + table_id).html() == "00"
  ) {
    return false;
  }
  second++;
  if (second == 60) {
    minute++;
    second = 0;
  }
  if (minute == 60) {
    hour++;
  }
  hour = hour.toString();
  minute = minute.toString();
  second = second.toString();
  hour = hour.length == 1 ? "0" + hour : hour;
  minute = minute.length == 1 ? "0" + minute : minute;
  second = second.length == 1 ? "0" + second : second;
  $("#booked_for_hour_" + table_id).html(hour);
  $("#booked_for_minute_" + table_id).html(minute);
  $("#booked_for_second_" + table_id).html(second);

  upTime2.to = setTimeout(function () {
    upTime2(object, second, minute, hour);
  }, 1000);
}
function clearFooterCartCalculation() {
  $("#sub_total_show").html(Number(0).toFixed(ir_precision));
  $("#sub_total").html(Number(0).toFixed(ir_precision));
  $("#total_item_discount").html(Number(0).toFixed(ir_precision));
  $("#discounted_sub_total_amount").html(Number(0).toFixed(ir_precision));
  $("#sub_total_discount").val("");
  $("#sub_total_discount1").val("");
  $("#sub_total_discount_amount").html(Number(0).toFixed(ir_precision));
  $("#all_items_vat").html(Number(0).toFixed(ir_precision));
  $("#all_items_discount").html(Number(0).toFixed(ir_precision));
  $("#total_items_in_cart").html("0");
  $("#total_items_in_cart_with_quantity").html("0");
  $("#total_payable").html(Number(0).toFixed(ir_precision));
  $("#show_vat_modal").html(Number(0).toFixed(ir_precision));
  $("#show_discount_amount").html(Number(0).toFixed(ir_precision));
  $("#show_charge_amount").html(Number(0).toFixed(ir_precision));
  $("#tax_details").empty();
    $("#is_diplomat_hidden").val(1);
}
function add_sale_and_direct_invoice_by_ajax(order_object, sale_id) {
  $.ajax({
    url: base_url + "Sale/add_sale_by_ajax",
    method: "POST",
    data: {
      order: order_object,
      sale_id: sale_id,
      close_order: 1,
      csrf_irestoraplus: csrf_value_,
    },
    success: function (response) {
      if (response > 0) {
        set_new_orders_to_view_and_select_last_one();
        // make_this_running_order_selected(response);
        let sale_id = response;
        $("#last_future_sale_id").val(sale_id);
        $("#open_invoice_date_hidden").val(getCurrentDate());

        $(".datepicker_custom")
          .datepicker({
            autoclose: true,
            format: "yyyy-mm-dd",
            startDate: "0",
            todayHighlight: true,
          })
          .datepicker("update", getCurrentDate());

        $.ajax({
          url: base_url + "Sale/get_all_information_of_a_sale_ajax",
          method: "POST",
          data: {
            sale_id: sale_id,
            csrf_irestoraplus: csrf_value_,
          },
          success: function (response) {
            response = JSON.parse(response);
            $("#finalize_total_payable").html(response.total_payable);
            $("#pay_amount_invoice_input").val(response.total_payable);
            $("#payment_amount_pad").val(response.total_payable);
            //open kot
            $("#finalize_order_modal").addClass("active");
            $(".pos__modal__overlay").fadeIn(200);
            $("#finalize_update_type").html("2"); //when 2 update payment method, close time and order_status to 3
            calculate_create_invoice_modal();
          },
          error: function () {
            alert(a_error);
          },
        });
        // print_invoice(response);
        // print_kot(response);
      }
    },
    error: function () {
      alert(a_error);
    },
  });
}
function add_sale_by_ajax(order_object, sale_id) {
  $.ajax({
    url: base_url + "Sale/add_sale_by_ajax",
    method: "POST",
    async:false,
    data: {
      order: order_object,
      sale_id: sale_id,
      close_order: 0,
      csrf_irestoraplus: csrf_value_,
    },
    success: function (response) {
      if (response > 0) {
        $("#open_invoice_date_hidden").val(getCurrentDate());
        $("#last_invoice_id").val(response);
        $("#direct_order_id").val(response);

        if (waiter_app_status == "Yes") {
          $("#show_running_order").click();
        }
        $(".datepicker_custom")
          .datepicker({
            autoclose: true,
            format: "yyyy-mm-dd",
            startDate: "0",
            todayHighlight: true,
          })
          .datepicker("update", getCurrentDate());
        set_new_orders_to_view(response);
      }
    },
    error: function () {
      alert(a_error);
    },
  });
}
set_new_orders_to_view('');
function add_sale_by_ajax_split(order_object, sale_id) {
    $.ajax({
        url: base_url + "Sale/add_sale_by_ajax_split",
        method: "POST",
        data: {
            order: order_object,
            sale_id_old_sale_id: sale_id,
            close_order: 0,
            csrf_irestoraplus: csrf_value_,
        },
        success: function (response) {
            $("#last_invoice_id").val(response);
            print_invoice(response);
        },
        error: function () {
            alert(a_error);
        },
    });
}
function add_hold_by_ajax(order_object, hold_number) {
  $.ajax({
    url: base_url + "Sale/add_hold_by_ajax",
    method: "POST",
    data: {
      order: order_object,
      hold_number: hold_number,
      csrf_irestoraplus: csrf_value_,
    },
    success: function (response) {
      $("#generate_sale_hold_modal").removeClass("active");
      $(".pos__modal__overlay").fadeOut(300);

      $(".order_holder").empty();
      clearFooterCartCalculation();
      $("#hold_generate_input").val("");
      $("#open_invoice_date_hidden").val(getCurrentDate());

      $(".datepicker_custom")
        .datepicker({
          autoclose: true,
          format: "yyyy-mm-dd",
          startDate: "0",
          todayHighlight: true,
        })
        .datepicker("update", getCurrentDate());

      // $(".main_top").find("button").css("background-color", "#109ec5");
      $(".main_top").find("button").attr("data-selected", "unselected");
      $("#table_button").attr("disabled", false);
      $(".single_table_div[data-table-checked=checked]").attr(
        "data-table-checked",
        "unchecked"
      );
      reset_customer_waiter_to_default();
    },
    error: function () {
      alert(a_error);
    },
  });
}
function set_new_orders_to_view(sale_id='') {
  $.ajax({
    url: base_url + "Sale/get_new_orders_ajax",
    method: "GET",
    success: function (response) {
      let data = JSON.parse(response);
        $('.running_order_div').pagination({
            showNext: false,
            showPrevious: false,
            showPageNumbers: true,
            pageRange: null,
            pageSize: 20,
            dataSource: data,
            ajax: {
                beforeSend: function () {
                    $('#waiter-list').html('Loading data...');
                }
            },
            callback: function (response, pagination) {
                let order_list_left = "";
                let i = 1;
                for (let key in response) {
                    let width = 100;
                    let total_kitchen_type_items = response[key].total_kitchen_type_items;
                    let total_kitchen_type_started_cooking_items =
                        response[key].total_kitchen_type_started_cooking_items;
                    let total_kitchen_type_done_items =
                        response[key].total_kitchen_type_done_items;
                    let splitted_width = (
                        parseFloat(width) / parseFloat(total_kitchen_type_items)
                    ).toFixed(ir_precision);
                    let percentage_for_started_cooking = (
                        parseFloat(splitted_width) *
                        parseFloat(total_kitchen_type_started_cooking_items)
                    ).toFixed(ir_precision);
                    let percentage_for_done_cooking = (
                        parseFloat(splitted_width) * parseFloat(total_kitchen_type_done_items)
                    ).toFixed(ir_precision);

                    let order_name = "";
                    let order_type = "";
                    if (response[key].order_type == "1") {
                        order_name = "A " + response[key].sale_no;
                        order_type = "Dine in";
                    } else if (response[key].order_type == "2") {
                        order_name = "B " + response[key].sale_no;
                        order_type = "Take Away";
                    } else if (response[key].order_type == "3") {
                        order_name = "C " + response[key].sale_no;
                        order_type = "Delivery";
                    }


                    let table_name = "";
                    let waiter_name =
                        response[key].waiter_name != null ? response[key].waiter_name : "";
                    let customer_name =
                        response[key].customer_name != null
                            ? response[key].customer_name
                            : "";
                    let minute = response[key].minute_difference;
                    let second = response[key].second_difference;

                    let tables_booked = response[key].orders_table_text;
                    order_list_left += '<div data-order_type="'+response[key].order_type+'" data-id="'+response[key].sales_id+'" data-started-cooking="0" data-done-cooking="0" class="single_order new_order_11" data-selected="unselected" id="order_11">' +
                        '<div class="select_running_order inside_single_order_container" tabindex="0" aria-expanded="false">' +
                        '<div class="single_order_content_holder_inside">' +
                        '<span id="open_orders_order_status_11" class="ir_display_none">1</span>' +
                        '<p><span class="running_order_customer_name">Cust: '+customer_name+'</span> <span class="running_order_customer_phone uk-hidden"></span> </p>  <i data-customer="'+customer_name+'" data-table="'+tables_booked+'" data-waiter="'+waiter_name+'" data-order_no="'+order_name+'" data-started_cooking="'+total_kitchen_type_items+'/'+total_kitchen_type_started_cooking_items+'" data-done="'+total_kitchen_type_items+'/'+total_kitchen_type_done_items+'" data-time_counter="'+minute+':'+second+'" class="far fa-chevron-right running_order_right_arrow"></i><p><span class="bold-txt">Table:</span> <span class="running_order_table_name">'+tables_booked+'</span></p></div><div class="order_condition"></div><div class="order_condition"></div></div></div>';
                    i++;
                }
                $("#order_details_holder").html(order_list_left);
            }
        })

      $(".order_table_holder .order_holder").empty();
      clearFooterCartCalculation();
      let waiter_app_status = $("#waiter_app_status").val();
      if (waiter_app_status == "No") {
        $(".main_top").find("button").attr("data-selected", "unselected");
      }
      $("#table_button").attr("disabled", false);
      $(".single_table_div[data-table-checked=checked]").attr(
        "data-table-checked",
        "unchecked"
      );
      reset_customer_waiter_to_default();
      reset_time_interval();
      all_time_interval_operation();

      reset_table_modal();
      if(sale_id!=''){
          createAnimation(sale_id);
      }
    },
    error: function () {
      alert(a_error);
    },
  });
}
$(document).on("click", ".running_order", function (e) {
    set_new_orders_to_view('');
});

function set_new_orders_to_view_future_add(sale_id) {
  $.ajax({
    url: base_url + "Sale/get_new_orders_ajax",
    method: "GET",
    success: function (response) {
      response = JSON.parse(response);
      let order_list_left = "";
      let i = 1;
      for (let key in response) {
        let width = 100;
        let total_kitchen_type_items = response[key].total_kitchen_type_items;
        let total_kitchen_type_started_cooking_items =
          response[key].total_kitchen_type_started_cooking_items;
        let total_kitchen_type_done_items =
          response[key].total_kitchen_type_done_items;
        let splitted_width = (
          parseFloat(width) / parseFloat(total_kitchen_type_items)
        ).toFixed(ir_precision);
        let percentage_for_started_cooking = (
          parseFloat(splitted_width) *
          parseFloat(total_kitchen_type_started_cooking_items)
        ).toFixed(ir_precision);
        let percentage_for_done_cooking = (
          parseFloat(splitted_width) * parseFloat(total_kitchen_type_done_items)
        ).toFixed(ir_precision);
        if (i == 1) {
          order_list_left +=
            '<div data-started-cooking="' +
            total_kitchen_type_started_cooking_items +
            '" data-done-cooking="' +
            total_kitchen_type_done_items +
            '" class="single_ordertxt_5 new_order_' +
            response[key].sales_id +
            '"  data-order_type="'+response[key].order_type+'"  data-selected="unselected" id="order_' +
            response[key].sales_id +
            '">';
        } else {
          order_list_left +=
            '<div data-started-cooking="' +
            total_kitchen_type_started_cooking_items +
            '" data-done-cooking="' +
            total_kitchen_type_done_items +
            '" class="single_ordernew_order_' +
            response[key].sales_id +
            '"  data-order_type="'+response[key].order_type+'"  data-selected="unselected" id="order_' +
            response[key].sales_id +
            '">';
        }
        order_list_left += '<div class="inside_single_order_container">';
        order_list_left +=
          '<div class="single_order_content_holder_inside">';
        let order_name = "";
        let order_type = "";
        if (response[key].order_type == "1") {
          order_name = "A " + response[key].sale_no;
          order_type = "Dine in"
        } else if (response[key].order_type == "2") {
          order_name = "B " + response[key].sale_no;
          order_type = "Take Away"
        } else if (response[key].order_type == "3") {
          order_name = "C " + response[key].sale_no;
          order_type = "Delivery"
        }

        let table_name = "";
        let waiter_name =
          response[key].waiter_name != null ? response[key].waiter_name : "";
        let customer_name =
          response[key].customer_name != null
            ? response[key].customer_name
            : "";
        let minute = response[key].minute_difference;
        let second = response[key].second_difference;

        let tables_booked = response[key].orders_table_text;

        order_list_left +=
          '<span id="open_orders_order_status_' +
          response[key].sales_id +
          '" class="ir_display_none">' +
          response[key].order_status +
          '</span> <p><span class="running_order_customer_name">Cust: ' +
          customer_name +
          '</span></p> <i class="far fa-chevron-right running_order_right_arrow" id="running_order_right_arrow_' +
          response[key].sales_id +
          '"></i>';
        order_list_left +=
          '<p>Order Type: <span class="running_order_type">' +
            order_type +
          "</span></p>";
        order_list_left +=
          '<p>Table: <span class="running_order_table_name">' +
          tables_booked +
          "</span></p>";
        order_list_left +=
          '<p>Waiter: <span class="running_order_waiter_name">' +
          waiter_name +
          "</span></p>";
        order_list_left +=
          '<p class="oder_list_class txt_1">Order: <span class="running_order_order_number">' +
          order_name +
          "</span></p>";
        order_list_left += "</div>";
        order_list_left += '<div class="order_condition">';
        order_list_left +=
          '<p class="order_on_processing">Started Cookiing: ' +
          total_kitchen_type_items +
          "/" +
          total_kitchen_type_started_cooking_items +
          "</p>";
        order_list_left +=
          '<p class="order_done">Done: ' +
          total_kitchen_type_items +
          "/" +
          total_kitchen_type_done_items +
          "</p>";
        order_list_left += "</div>";
        order_list_left += '<div class="order_condition">';
        order_list_left +=
          '<p  class="txt_4">Time Count: <span id="order_minute_count_' +
          response[key].sales_id +
          '">' +
          minute +
          '</span>:<span id="order_second_count_' +
          response[key].sales_id +
          '">' +
          second +
          "</span> M</p>";
        order_list_left += "</div>";
        order_list_left += "</div>";
        order_list_left += "</div>";
        i++;
      }
      $("#order_details_holder").html(order_list_left);
      $(".order_table_holder .order_holder").empty();
      clearFooterCartCalculation();
      // $(".main_top").find("button").css("background-color", "#109ec5");
      $(".main_top").find("button").attr("data-selected", "unselected");
      $("#table_button").attr("disabled", false);
      $(".single_table_div[data-table-checked=checked]").attr(
        "data-table-checked",
        "unchecked"
      );
      reset_customer_waiter_to_default();
      //reset_time_interval();
      ///all_time_interval_operation();

      reset_table_modal();
      createAnimation(sale_id);
    },
    error: function () {
      alert(a_error);
    },
  });
}
function set_new_orders_to_view_and_select_last_one() {
  $.ajax({
    url: base_url + "Sale/get_new_orders_ajax",
    method: "GET",
    success: function (response) {
      response = JSON.parse(response);
      let order_list_left = "";
      let i = 1;
      let last_key = response.length - 1;
      for (let key in response) {
        let width = 100;
        let total_kitchen_type_items = response[key].total_kitchen_type_items;
        let total_kitchen_type_started_cooking_items =
          response[key].total_kitchen_type_started_cooking_items;
        let total_kitchen_type_done_items =
          response[key].total_kitchen_type_done_items;
        let splitted_width = (
          parseFloat(width) / parseFloat(total_kitchen_type_items)
        ).toFixed(ir_precision);
        let percentage_for_started_cooking = (
          parseFloat(splitted_width) *
          parseFloat(total_kitchen_type_started_cooking_items)
        ).toFixed(ir_precision);
        let percentage_for_done_cooking = (
          parseFloat(splitted_width) * parseFloat(total_kitchen_type_done_items)
        ).toFixed(ir_precision);
        if (i == 1) {
          if (last_key == key) {
            order_list_left +=
              '<div data-started-cooking="' +
              total_kitchen_type_started_cooking_items +
              '" data-done-cooking="' +
              total_kitchen_type_done_items +
              '" class="single_ordertxt_6 new_order_' +
              response[key].sales_id +
              '"  data-selected="selected" id="order_' +
              response[key].sales_id +
              '">';
          } else {
            order_list_left +=
              '<div data-started-cooking="' +
              total_kitchen_type_started_cooking_items +
              '" data-done-cooking="' +
              total_kitchen_type_done_items +
              '" class="single_ordertxt_5 new_order_' +
              response[key].sales_id +
              '"  data-selected="unselected" id="order_' +
              response[key].sales_id +
              '">';
          }
        } else {
          if (last_key == key) {
            order_list_left +=
              '<div data-started-cooking="' +
              total_kitchen_type_started_cooking_items +
              '" data-done-cooking="' +
              total_kitchen_type_done_items +
              '" class="single_ordertxt_7 new_order_' +
              response[key].sales_id +
              '"  data-order_type="'+response[key].order_type+'"   data-selected="selected" id="order_' +
              response[key].sales_id +
              '">';
          } else {
            order_list_left +=
              '<div data-started-cooking="' +
              total_kitchen_type_started_cooking_items +
              '" data-done-cooking="' +
              total_kitchen_type_done_items +
              '" class="single_ordernew_order_' +
              response[key].sales_id +
              '"  data-order_type="'+response[key].order_type+'"  data-selected="unselected" id="order_' +
              response[key].sales_id +
              '">';
          }
        }
        order_list_left += '<div class="inside_single_order_container">';
        order_list_left +=
          '<div class="single_order_content_holder_inside">';
        let order_name = "";
        let order_type = "";
        if (response[key].order_type == "1") {
          order_name = "A " + response[key].sale_no;
          order_type = "Dine in";
        } else if (response[key].order_type == "2") {
          order_name = "B " + response[key].sale_no;
          order_type = "Take Away";
        } else if (response[key].order_type == "3") {
          order_name = "C " + response[key].sale_no;
          order_type = "Delivery";
        }

        let table_name = "";
        let waiter_name =
          response[key].waiter_name != null ? response[key].waiter_name : "";
        let customer_name =
          response[key].customer_name != null
            ? response[key].customer_name
            : "";

        let minute = response[key].minute_difference;
        let second = response[key].second_difference;

          let tables_booked = response[key].orders_table_text;

        order_list_left +=
          '<span id="open_orders_order_status_' +
          response[key].sales_id +
          '" class="ir_display_none">' +
          response[key].order_status +
          '</span><p><span class="running_order_customer_name">Cust: ' +
          customer_name +
          '</span></p> <i class="far fa-chevron-right running_order_right_arrow" id="running_order_right_arrow_' +
          response[key].sales_id +
          '"></i>';
        order_list_left +=
          '<p>Order Type: <span class="running_order_order_type">' +
            order_type +
          "</span></p>";
        order_list_left +=
          '<p>Table: <span class="running_order_table_name">' +
          tables_booked +
          "</span></p>";
        order_list_left +=
          '<p>Waiter: <span class="running_order_waiter_name">' +
          waiter_name +
          "</span></p>";

        order_list_left +=
          '<p class="oder_list_class txt_1">Order: <span class="running_order_order_number">' +
          order_name +
          "</span></p>";
        order_list_left += "</div>";
        order_list_left += '<div class="order_condition">';
        order_list_left +=
          '<p class="order_on_processing">Started Cookiing: ' +
          total_kitchen_type_items +
          "/" +
          total_kitchen_type_started_cooking_items +
          "</p>";
        order_list_left +=
          '<p class="order_done">Done: ' +
          total_kitchen_type_items +
          "/" +
          total_kitchen_type_done_items +
          "</p>";
        order_list_left += "</div>";
        order_list_left += '<div class="order_condition">';
        order_list_left +=
          '<p  class="txt_4">Time Count: <span id="order_minute_count_' +
          response[key].sales_id +
          '">' +
          minute +
          '</span>:<span id="order_second_count_' +
          response[key].sales_id +
          '">' +
          second +
          "</span> M</p>";
        order_list_left += "</div>";
        order_list_left += "</div>";
        order_list_left += "</div>";
        i++;
      }
      $("#order_details_holder").html(order_list_left);
      $(".order_table_holder .order_holder").empty();
      clearFooterCartCalculation();
      // $(".main_top").find("button").css("background-color", "#109ec5");
      $(".main_top").find("button").attr("data-selected", "unselected");
      $("#table_button").attr("disabled", false);
      $(".single_table_div[data-table-checked=checked]").attr(
        "data-table-checked",
        "unchecked"
      );
      reset_customer_waiter_to_default();
      reset_time_interval();
      all_time_interval_operation();

      reset_table_modal();
    },
    error: function () {
      alert(a_error);
    },
  });
}
function set_new_orders_to_view_for_interval() {
  $.ajax({
    url: base_url + "Sale/get_new_orders_ajax",
    method: "GET",
    success: function (response) {
      response = JSON.parse(response);
      let order_list_left = "";
      let i = 1;
      for (let key in response) {
        let width = 100;
        let total_kitchen_type_items = response[key].total_kitchen_type_items;
        let total_kitchen_type_started_cooking_items =
          response[key].total_kitchen_type_started_cooking_items;
        let total_kitchen_type_done_items =
          response[key].total_kitchen_type_done_items;
        let splitted_width = (
          parseFloat(width) / parseFloat(total_kitchen_type_items)
        ).toFixed(ir_precision);
        let percentage_for_started_cooking = (
          parseFloat(splitted_width) *
          parseFloat(total_kitchen_type_started_cooking_items)
        ).toFixed(ir_precision);
        let percentage_for_done_cooking = (
          parseFloat(splitted_width) * parseFloat(total_kitchen_type_done_items)
        ).toFixed(ir_precision);
        if (i == 1) {
          order_list_left +=
            '<div data-started-cooking="' +
            total_kitchen_type_started_cooking_items +
            '" data-done-cooking="' +
            total_kitchen_type_done_items +
            '" class="single_order txt_5 new_order_' +
            response[key].sales_id +
            '" data-order_type="'+response[key].order_type+'" data-selected="unselected" id="order_' +
            response[key].sales_id +
            '">';
        } else {
          order_list_left +=
            '<div data-started-cooking="' +
            total_kitchen_type_started_cooking_items +
            '" data-done-cooking="' +
            total_kitchen_type_done_items +
            '" class="single_order new_order_' +
            response[key].sales_id +
            '"  data-order_type="'+response[key].order_type+'"  data-selected="unselected" id="order_' +
            response[key].sales_id +
            '">';
        }
        order_list_left += '<div class="inside_single_order_container">';
        order_list_left +=
          '<div class="single_order_content_holder_inside">';
        let order_name = "";
        let order_type = "";
        if (response[key].order_type == "1") {
          order_name = "A " + response[key].sale_no;
          order_type = "Dine in";
        } else if (response[key].order_type == "2") {
          order_name = "B " + response[key].sale_no;
          order_type = "Take Away";
        } else if (response[key].order_type == "3") {
          order_name = "C " + response[key].sale_no;
          order_type = "Delivery";
        }
        let table_name =
          response[key].table_name != null ? response[key].table_name : "";
        let waiter_name =
          response[key].waiter_name != null ? response[key].waiter_name : "";
        let customer_name =
          response[key].customer_name != null
            ? response[key].customer_name
            : "";
        let minute = response[key].minute_difference;
        let second = response[key].second_difference;

          let tables_booked = response[key].orders_table_text;

        order_list_left +=
          '<p><span class="running_order_customer_name">Cust: ' +
          customer_name +
          "</span></p>";
        order_list_left +=
          '<p>Order Type: <span class="running_order_type">' +
            order_type +
          "</span></p>";
        order_list_left +=
          '<p>Table: <span class="running_order_table_name">' +
          tables_booked +
          "</span></p>";
        order_list_left +=
          '<p>Waiter: <span class="running_order_waiter_name">' +
          waiter_name +
          "</span></p>";
        order_list_left +=
          '<span id="open_orders_order_status_' +
          response[key].sales_id +
          '" class="ir_display_none">' +
          response[key].order_status +
          '</span><p   class="oder_list_class txt_8" >Order: <span class="running_order_order_number">' +
          order_name +
          '</span></p><i class="far fa-chevron-right running_order_right_arrow " id="running_order_right_arrow_' +
          response[key].sales_id +
          '"></i>';
        order_list_left += "</div>";
        order_list_left += '<div class="order_condition">';
        order_list_left +=
          '<p class="order_on_processing">Started Cooking: ' +
          total_kitchen_type_started_cooking_items +
          "/" +
          total_kitchen_type_items +
          "</p>";
        order_list_left +=
          '<p class="order_done">Done: ' +
          total_kitchen_type_done_items +
          "/" +
          total_kitchen_type_items +
          "</p>";
        order_list_left += "</div>";
        order_list_left += '<div class="order_condition">';
        order_list_left +=
          '<p class="txt_4">Time Count: <span id="order_minute_count_' +
          response[key].sales_id +
          '">' +
          minute +
          '</span>:<span id="order_second_count_' +
          response[key].sales_id +
          '">' +
          second +
          "</span> M</p>";
        order_list_left += "</div>";
        order_list_left += "</div>";
        order_list_left += "</div>";
        i++;
      }
      $("#order_details_holder").html(order_list_left);
    },
    error: function () {
      console.log("Left Order Refresh Ajax Error");
    },
  });
}
function reset_customer_waiter_to_default() {
  let wid = $("#default_waiter_hidden").val();

  if (waiter_app_status != "Yes") {
    if (wid) {
      $("#select_waiter").val(wid);
    } else {
      $("#select_waiter").val("");
    }
  }
  $("#place_edit_order").html(place_order);
}
function print_invoice_and_close(
  sale_id,
  payment_method_type,
  payment_method_value,
  invoice_create_type,
  paid_amount,
  due_amount
) {
  if (invoice_create_type == 1) {
    //if type is 1 then update order status to invoiced order, and update payment method type
    update_order_status_to_invoiced(
      sale_id,
      payment_method_type,
      payment_method_value,
      paid_amount,
      due_amount
    );
  } else if (invoice_create_type == 2) {
    //then change order status to close, close time update, payment method type update,
    close_order(
      sale_id,
      payment_method_type,
      payment_method_value,
      paid_amount,
      due_amount
    );
  }
  print_invoice(sale_id);
}

function get_all_hold_sales() {
  $.ajax({
    url: base_url + "Sale/get_all_holds_ajax",
    method: "GET",
    success: function (response) {
      let orders = JSON.parse(response);

      let held_orders = "";
      for (let key in orders) {
          let tables_booked = orders[key].orders_table_text;

        let phone_text_ = "";
        if (orders[key].phone) {
          phone_text_ = " (" + orders[key].phone + ")";
        }

        let customer_name =
          orders[key].customer_name == null || orders[key].customer_name == ""
            ? "&nbsp;"
            : orders[key].customer_name;
        let table_name = tables_booked;
        held_orders +=
          '<div style="cursor:pointer;" class="single_hold_sale" id="hold_' +
          orders[key].id +
          '" data-selected="unselected">';
        held_orders +=
          '<div class="first_column column">' +
          orders[key].hold_no +
          "</div>";
        held_orders +=
          '<div class="second_column column">' +
          customer_name +
          phone_text_ +
          "</div>";
        held_orders +=
          '<div class="third_column column">' + table_name + "</div>";
        held_orders += "</div>";
      }
      $(".hold_list_holder .detail_holder ").empty();
      $(".hold_list_holder .detail_holder ").prepend(held_orders);
    },
    error: function () {
      alert(a_error);
    },
  });
}
function update_order_status_to_invoiced(
  sale_id,
  payment_method_type,
  payment_method_value,
  paid_amount,
  due_amount
) {
  let given_amount_input = $("#given_amount_input").val();
  let change_amount_input = $("#change_amount_input").val();
  let finalie_order_invoice_language = $(
    "#finalie_order_invoice_language"
  ).val();
  $.ajax({
    url: base_url + "Sale/update_order_status_ajax",
    method: "POST",
    data: {
      sale_id: sale_id,
      close_order: false,
      paid_amount: paid_amount,
      due_amount: due_amount,
      payment_method_type: payment_method_type,
      payment_method_value: payment_method_value,
      given_amount_input: given_amount_input,
      change_amount_input: change_amount_input,
      invoice_lang: finalie_order_invoice_language,
      csrf_irestoraplus: csrf_value_,
    },
    success: function (response) {
      if (response > 1) {
        set_new_orders_to_view(sale_id);
      }
    },
    error: function () {
      alert(a_error);
    },
  });
}

function close_order(
  sale_id,
  payment_method_type,
  payment_method_value,
  paid_amount,
  due_amount
) {
  let given_amount_input = $("#given_amount_input").val();
  let change_amount_input = $("#change_amount_input").val();
  let finalie_order_invoice_language = $(
    "#finalie_order_invoice_language"
  ).val();
  $.ajax({
    url: base_url + "Sale/update_order_status_ajax",
    method: "POST",
    data: {
      sale_id: sale_id,
      close_order: true,
      paid_amount: paid_amount,
      due_amount: due_amount,
      payment_method_type: payment_method_type,
      payment_method_value: payment_method_value,
      given_amount_input: given_amount_input,
      change_amount_input: change_amount_input,
      invoice_lang: finalie_order_invoice_language,
      csrf_irestoraplus: csrf_value_,
    },
    success: function (response) {
      if (response > 1) {
        set_new_orders_to_view(sale_id);
      }
    },
    error: function () {
      alert(a_error);
    },
  });
}
function print_invoice(sale_id) {
  let newWindow = "";
  let print_type = $("#print_type").val();
  let print_type_invoice = $(".print_type_invoice").val();
  if (print_type_invoice == "web_browser") {
    newWindow = open(
      base_url + "Sale/print_invoice/" + Number(sale_id),
      "Print Invoice",
      "width=450,height=550"
    );

      newWindow.focus();
      newWindow.onload = function () {
          newWindow.document.body.insertAdjacentHTML("afterbegin");
      };
  } else {
    $("#finalize_order_modal").removeClass("active");
    $(".pos__modal__overlay").fadeOut(300);
    $.ajax({
      url: base_url + "Authentication/printSaleByAjax",
      method: "post",
      dataType: "json",
      data: {
        sale_id: sale_id,
      },
      success: function (data) {
        if (data.printer_server_url) {
          $.ajax({
            url:
              data.printer_server_url +
              "print_server/irestora_printer_server.php",
            method: "post",
            dataType: "json",
            data: {
              content_data: JSON.stringify(data.content_data),
            },
            success: function (data) {},
            error: function () {},
          });
        }
      },
      error: function () {},
    });
  }
}
function get_details_of_a_particular_hold(hold_id, this_action) {
  $.ajax({
    url: base_url + "Sale/get_single_hold_info_by_ajax",
    method: "POST",
    data: {
      hold_id: hold_id,
      csrf_irestoraplus: csrf_value_,
    },
    success: function (response) {
      response = JSON.parse(response);
      $("#open_invoice_date_hidden").val(response.sale_date);
      $(".datepicker_custom")
        .datepicker({
          autoclose: true,
          format: "yyyy-mm-dd",
          startDate: "0",
          todayHighlight: true,
        })
        .datepicker("update", response.sale_date);

      hold_id = response.id;
      let draw_table_for_order = "";

      for (let key in response.items) {
        //construct div
        let this_item = response.items[key];

        let selected_modifiers = "";
        let selected_modifiers_id = "";
        let selected_modifiers_price = "";
        let modifiers_price = 0;
        let total_modifier = this_item.modifiers.length;
        let i = 1;
        let item_id = this_item.food_menu_id;
        let draw_table_for_order_tmp_modifier_tax = "";
        for (let mod_key in this_item.modifiers) {
          let this_modifier = this_item.modifiers[mod_key];
          let modifier_id_custom = this_modifier.modifier_id;
          //get selected modifiers
          if (i == total_modifier) {
            selected_modifiers += this_modifier.name;
            selected_modifiers_id += this_modifier.modifier_id;
            selected_modifiers_price += this_modifier.modifier_price;
            modifiers_price = (
              parseFloat(modifiers_price) +
              parseFloat(this_modifier.modifier_price)
            ).toFixed(ir_precision);
          } else {
            selected_modifiers += this_modifier.name + ", ";
            selected_modifiers_id += this_modifier.modifier_id + ",";
            selected_modifiers_price += this_modifier.modifier_price + ",";
            modifiers_price = (
              parseFloat(modifiers_price) +
              parseFloat(this_modifier.modifier_price)
            ).toFixed(ir_precision);
          }
          let tax_information = "";
          // iterate over each item in the array
          tax_information = this_modifier.menu_taxes;
          tax_information = IsJsonString(tax_information)
            ? JSON.parse(tax_information)
            : "";
          draw_table_for_order_tmp_modifier_tax +=
            '<span class="item_vat_modifier ir_display_none item_vat_modifier_' +
            item_id +
            '" data-item_id="' +
            item_id +
            '"  data-modifier_price="' +
            this_modifier.modifier_price +
            '" data-modifier_id="' +
            modifier_id_custom +
            '" id="item_vat_percentage_table' +
            item_id +
            "" +
            modifier_id_custom +
            '">' +
            JSON.stringify(tax_information) +
            "</span>";
          i++;
        }

        draw_table_for_order +=
          '<div class="single_order focus-cart customer_panel" id="order_for_item_' +
          this_item.food_menu_id +
          '">';
        draw_table_for_order += '<div class="first_portion">';
        draw_table_for_order +=
          '<span class="item_vat ir_display_none" id="item_vat_percentage_table' +
          this_item.food_menu_id +
          '">' +
          this_item.menu_taxes +
          "</span>";
        draw_table_for_order +=
          '<span class="item_discount ir_display_none" id="item_discount_table' +
          this_item.food_menu_id +
          '">' +
          this_item.discount_amount +
          "</span>";
        draw_table_for_order +=
          '<span class="item_price_without_discount ir_display_none" id="item_price_without_discount_' +
          this_item.food_menu_id +
          '">' +
          this_item.menu_price_without_discount +
          "</span>";
        draw_table_for_order +=
          '<div class="single_order_column first_column"><i class="edit_item txt_5" id="edit_item_' +
          this_item.food_menu_id +
          '"></i> <span id="item_name_table_' +
          this_item.food_menu_id +
          '">' +
          this_item.menu_name +
          "</span></div>";
        draw_table_for_order +=
          '<div class="single_order_column second_column">' +
          currency +
          ' <span id="item_price_table_' +
          this_item.food_menu_id +
          '">' +
          this_item.menu_unit_price +
          "</span></div>";
        draw_table_for_order +=
          '<div class="single_order_column third_column"><span class="qty_item_custom" id="item_quantity_table_' +
          this_item.food_menu_id +
          '">' +
          this_item.qty +
          '</span> </div>';
        draw_table_for_order +=
          '<div class="single_order_column forth_column"><input type="" name="" placeholder="Amt or %" class="discount_cart_input" id="percentage_table_' +
          this_item.food_menu_id +
          '" value="' +
          this_item.menu_discount_value +
          '" disabled></div>';
        draw_table_for_order +=
          '<div class="single_order_column fifth_column">' +
          currency +
          ' <span id="item_total_price_table_' +
          this_item.food_menu_id +
          '">' +
          this_item.menu_price_with_discount +
          "</span></div>";
        draw_table_for_order += "</div>";
        if (selected_modifiers != "") {
          draw_table_for_order += '<div  style="display:flex;"  class="second_portion">';
          draw_table_for_order += draw_table_for_order_tmp_modifier_tax;
          draw_table_for_order +=
            '<span id="item_modifiers_id_table_' +
            this_item.food_menu_id +
            '" class="ir_display_none">' +
            selected_modifiers_id +
            "</span>";
          draw_table_for_order +=
            '<span id="item_modifiers_price_table_' +
            this_item.food_menu_id +
            '" class="ir_display_none">' +
            selected_modifiers_price +
            "</span>";
          draw_table_for_order +=
            '<div class="single_order_column first_column"><span class="modifier_txt_custom" id="item_modifiers_table_' +
            this_item.food_menu_id +
            '">' +
            selected_modifiers +
            "</span></div>";
          draw_table_for_order +=
            '<div class="single_order_column fifth_column">' +
            currency +
            ' <span id="item_modifiers_price_table_' +
            this_item.food_menu_id +
            '">' +
            modifiers_price +
            "</span></div>";
          draw_table_for_order += "</div>";
        }
        if (this_item.menu_note != "") {
          draw_table_for_order += '<div class="third_portion">';
          draw_table_for_order +=
            '<div class="single_order_column first_columnmodifier_txt_custom">' +
            note_txt +
            ': <span id="item_note_table_' +
            this_item.food_menu_id +
            '">' +
            this_item.menu_note +
            "</span></div>";
          draw_table_for_order += "</div>";
        }

        draw_table_for_order += "</div>";
      }
      //add to top
      $(".order_holder").prepend(draw_table_for_order);
      $("#total_items_in_cart").html(response.total_items);
      $("#sub_total_show").html(response.sub_total);
      $("#sub_total").html(response.sub_total);
      $("#total_item_discount").html(response.total_item_discount_amount);
      $("#discounted_sub_total_amount").html(
        response.sub_total_discount_amount
      );
      let html_modal = "";
      $.each(JSON.parse(response.sale_vat_objects), function (key, value) {
          html_modal +="<div class='tax_field row set_active_tax' data-tax_field_id='" +
              value.tax_field_id +
              "'  data-tax_field_type='" +
              value.tax_field_type +
              "'  data-tax_field_amount='" +
              value.tax_field_amount +
              "'><div>"+value.tax_field_type+"</div><div>"+Number(value.tax_field_amount).toFixed(ir_precision)+"</div></div>";
      });
      $("#tax_details").html(html_modal);

      $.each(JSON.parse(response.tables_booked), function (key_t, value_t) {
        let table_book_row = "";
        table_book_row +=
          '<div class="single_rownew_book_to_table" id="new_order_table_' +
          value_t.table_id +
          '">';
        table_book_row +=
          '<div class="column first_column">New</div>';
        table_book_row +=
          '<div class="column second_column">-</div>';
        table_book_row +=
          '<div class="column third_column person_tbl_' +
          value_t.table_id +
          '">' +
          value_t.persons +
          "</div>";
        table_book_row +=
          '<div class="column forth_column"><i class="fas fa-trash-alt remove_new_order_row_icon" id="single_row_table_delete_' +
          value_t.table_id +
          '"></i></div>';
        table_book_row += "</div>";
        $("#single_table_order_details_top_" + value_t.table_id).append(
          $(table_book_row)
        );
      });

      $("#sub_total_discount").val(response.sub_total_discount_value);
      $("#sub_total_discount_amount").html(response.sub_total_with_discount);
      $("#all_items_vat").html(response.vat);
      $("#show_vat_modal").html(response.vat);
      $("#all_items_discount").html(response.total_discount_amount);

      if (Number(response.delivery_charge_actual_charge)) {
        $("#delivery_charge").val(response.delivery_charge);
      } else {
        $("#delivery_charge").val((0).toFixed(ir_precision));
      }
        $("#is_diplomat_hidden").val(response.is_diplomat);

      $("#total_payable").html(response.total_payable);
      $("#charge_type").val(response.charge_type);
      //do calculation on table
      do_addition_of_item_and_modifiers_price();

      $("#hold_waiter_id").html("");
      $("#hold_waiter_name").html("");
      $("#hold_customer_id").html("");
      $("#hold_customer_name").html("");
      $("#hold_table_id").html("");
      $("#hold_table_name").html("");
      $("#hold_order_type").html("");
      $("#hold_order_type_id").html("");
      $(".item_modifier_details .modifier_item_details_holder").empty();
      $("#total_items_in_cart_hold").html("0");
      $("#sub_total_show_hold").html(Number(0).toFixed(ir_precision));
      $("#sub_total_hold").html(Number(0).toFixed(ir_precision));
      $("#total_item_discount_hold").html(Number(0).toFixed(ir_precision));
      $("#discounted_sub_total_amount_hold").html(
        Number(0).toFixed(ir_precision)
      );
      $("#sub_total_discount_hold").html("");
      $("#sub_total_discount_amount_hold").html(
        Number(0).toFixed(ir_precision)
      );
      $("#all_items_vat_hold").html(Number(0).toFixed(ir_precision));
      $("#all_items_discount_hold").html(Number(0).toFixed(ir_precision));
      $("#delivery_charge_hold").html(Number(0).toFixed(ir_precision));
      $("#total_payable_hold").html(Number(0).toFixed(ir_precision));
      this_action
        .parent()
        .parent()
        .parent()
        .parent()
        .parent()
        .parent()
        .parent()
        .parent()
        .removeClass("active")
        .addClass("inActive");
      setTimeout(function () {
        $(".modal").removeClass("inActive");
      }, 1000);
      $(".pos__modal__overlay").fadeOut(300);

      if (
        response.customer_id == "" ||
        response.customer_id == 0 ||
        response.customer_id == null
      ) {
        $("#walk_in_customer").val(1);
      } else {
        $("#walk_in_customer").val(response.customer_id);
      }

      if (
        response.waiter_id == "" ||
        response.waiter_id == 0 ||
        response.waiter_id == null
      ) {
        if (waiter_app_status != "Yes") {
          $("#select_waiter").val("");
        }
      } else {
        if (response.waiter_id) {
          if (waiter_app_status != "Yes") {
            $("#select_waiter").val(response.waiter_id);
          }
        } else {
          if (waiter_app_status != "Yes") {
            $("#select_waiter").val("");
          }
        }
      }
      if (response.order_type == "1") {
        // $(".main_top").find("button").css("background-color", "#109ec5");
        $(".main_top").find("button").attr("data-selected", "unselected");

        $("#table_button").attr("disabled", false);
      } else if (response.order_type == "2") {
        // $(".main_top").find("button").css("background-color", "#109ec5");
        $(".main_top").find("button").attr("data-selected", "unselected");

        // $("#take_away_button").css("background-color", "#B5D6F6");
        $("#take_away_button").attr("data-selected", "selected");

        $("#table_button").attr("disabled", false);
      } else if (response.order_type == "3") {
        // $(".main_top").find("button").css("background-color", "#109ec5");
        $(".main_top").find("button").attr("data-selected", "unselected");

        // $("#delivery_button").css("background-color", "#B5D6F6");
        $("#delivery_button").attr("data-selected", "selected");

        $("#table_button").attr("disabled", true);
        $(".single_table_div[data-table-checked=checked]").attr(
          "data-table-checked",
          "unchecked"
        );
        $(".single_table_div[data-table-checked=checked]").css(
          "background-color",
          "#ffffff"
        );
      } else {
        // $(".main_top").find("button").css("background-color", "#109ec5");
        $(".main_top").find("button").attr("data-selected", "unselected");
      }
      if (response.table_id > 0) {
        $(".single_table_div").attr("data-table-checked", "unchecked");
        $(".single_table_div").css("background-color", "#ffffff");
        if (
          $("#single_table_" + response.table_id).attr("data-table-checked") !=
          "busy"
        ) {
          $("#single_table_" + response.table_id).attr(
            "data-table-checked",
            "checked"
          );
          $("#single_table_" + response.table_id).css(
            "background-color",
            "#b6d6f6"
          );
        }
      }
    },
    error: function () {
      alert(a_error);
    },
  });
}
function get_details_of_a_particular_order_for_modal(sale_id) {
  $.ajax({
    url: base_url + "Sale/get_all_information_of_a_sale_ajax",
    method: "POST",
    data: {
      sale_id: sale_id,
      csrf_irestoraplus: csrf_value_,
    },
    success: function (response) {
      response = JSON.parse(response);
      let order_type = "";
      let order_type_id = 0;
      let order_number = "";
        let tables_booked = response.orders_table_text;
      $("#order_details_waiter_id").html(response.waiter_id);
      $("#order_details_waiter_name").html(response.waiter_name);
      $("#order_details_customer_id").html(response.customer_id);
      $("#order_details_customer_name").html(response.customer_name);
      $("#order_details_table_id").html(response.table_id);
      $("#order_details_table_name").html(response.orders_table_text);
      $("#open_invoice_date_hidden").val(response.sale_date);
      $(".datepicker_custom")
        .datepicker({
          autoclose: true,
          format: "yyyy-mm-dd",
          startDate: "0",
          todayHighlight: true,
        })
        .datepicker("update", response.sale_date);

      if (response.order_type == 1) {
        order_type = "Dine In";
        order_type_id = 1;
        order_number = "A " + response.sale_no;
      } else if (response.order_type == 2) {
        order_type = "Take Away";
        order_type_id = 2;
        order_number = "B " + response.sale_no;
      } else if (response.order_type == 3) {
        order_type = "Delivery";
        order_type_id = 3;
        order_number = "C " + response.sale_no;
      }
      $("#order_details_type").html(order_type);
      $("#order_details_type_id").html(order_type_id);
      $("#order_details_order_number").html(order_number);
      let draw_table_for_order_details = "";

      for (let key in response.items) {
        //construct div
        let this_item = response.items[key];

        let selected_modifiers = "";
        let selected_modifiers_id = "";
        let selected_modifiers_price = "";
        let modifiers_price = 0;
        let total_modifier = this_item.modifiers.length;
        let i = 1;
        let item_id = this_item.food_menu_id;
        let draw_table_for_order_tmp_modifier_tax = "";
        for (let mod_key in this_item.modifiers) {
          let this_modifier = this_item.modifiers[mod_key];
          let modifier_id_custom = this_modifier.modifier_id;
          //get selected modifiers
          if (i == total_modifier) {
            selected_modifiers += this_modifier.name;
            selected_modifiers_id += this_modifier.modifier_id;
            selected_modifiers_price += this_modifier.modifier_price;
            modifiers_price = (
              parseFloat(modifiers_price) +
              parseFloat(this_modifier.modifier_price)
            ).toFixed(ir_precision);
          } else {
            selected_modifiers += this_modifier.name + ", ";
            selected_modifiers_id += this_modifier.modifier_id + ",";
            selected_modifiers_price += this_modifier.modifier_price + ",";
            modifiers_price = (
              parseFloat(modifiers_price) +
              parseFloat(this_modifier.modifier_price)
            ).toFixed(ir_precision);
          }
          let tax_information = "";
          // iterate over each item in the array
          tax_information = this_modifier.menu_taxes;
          tax_information = IsJsonString(tax_information)
            ? JSON.parse(tax_information)
            : "";
          draw_table_for_order_tmp_modifier_tax +=
            '<span class="item_vat_modifier ir_display_none item_vat_modifier_' +
            item_id +
            '" data-item_id="' +
            item_id +
            '"  data-modifier_price="' +
            this_modifier.modifier_price +
            '" data-modifier_id="' +
            modifier_id_custom +
            '" id="item_vat_percentage_table' +
            item_id +
            "" +
            modifier_id_custom +
            '">' +
            JSON.stringify(tax_information) +
            "</span>";
          i++;
        }
        let discount_value =
          this_item.menu_discount_value != ""
            ? this_item.menu_discount_value
            : "0.00";
        draw_table_for_order_details +=
          '<div class="single_item_modifier" id="order_details_for_item_' +
          this_item.food_menu_id +
          '">';
        draw_table_for_order_details += '<div style="margin-bottom: 0px;padding-bottom: 0px;" class="first_portion">';
        draw_table_for_order_details +=
          '<span class="item_vat_hold ir_display_none" id="order_details_item_vat_percentage_table' +
          this_item.food_menu_id +
          '">' +
          this_item.menu_vat_percentage +
          "</span>";
        draw_table_for_order_details +=
          '<span class="item_discount_hold ir_display_none" id="order_details_item_discount_table' +
          this_item.food_menu_id +
          '">' +
          this_item.discount_amount +
          "</span>";
        draw_table_for_order_details +=
          '<span class="item_price_without_discount_hold ir_display_none" id="order_details_item_price_without_discount_' +
          this_item.food_menu_id +
          '">' +
          this_item.menu_price_without_discount +
          "</span>";
        draw_table_for_order_details +=
          '<div class="single_order_column_hold first_column column"><span id="order_details_item_name_table_' +
          this_item.food_menu_id +
          '">' +
          this_item.menu_name +
          "</span></div>";
        draw_table_for_order_details +=
          '<div class="single_order_column_hold second_column column">' +
          currency +
          ' <span id="order_details_item_price_table_' +
          this_item.food_menu_id +
          '">' +
          this_item.menu_unit_price +
          "</span></div>";
        draw_table_for_order_details +=
          '<div class="single_order_column_hold third_column column"><span class="qty_item_custom" id="order_details_item_quantity_table_' +
          this_item.food_menu_id +
          '">' +
          this_item.qty +
          "</span></div>";
        draw_table_for_order_details +=
          '<div class="single_order_column_hold forth_column column"><span class="order_details_special_textbox" id="order_details_percentage_table_' +
          this_item.food_menu_id +
          '">' +
          discount_value +
          "</span></div>";
        draw_table_for_order_details +=
          '<div class="single_order_column_hold fifth_column column">' +
          currency +
          ' <span id="order_details_item_total_price_table_' +
          this_item.food_menu_id +
          '">' +
          this_item.menu_price_with_discount +
          "</span></div>";
        draw_table_for_order_details += "</div>";
        if (selected_modifiers != "") {
          draw_table_for_order_details += '<div style="display: flex;justify-content: space-between;padding: 0px 35px 0px 14px;" class="second_portion">';
          draw_table_for_order_details +=
            '<span id="order_details_item_modifiers_id_table_' +
            this_item.food_menu_id +
            '" class="ir_display_none">' +
            selected_modifiers_id +
            "</span>";
          draw_table_for_order_details +=
            '<span id="order_details_item_modifiers_price_table_' +
            this_item.food_menu_id +
            '" class="ir_display_none">' +
            selected_modifiers_price +
            "</span>";
          draw_table_for_order_details +=
            '<div class="single_order_column_hold first_column column"><span class="modifier_txt_custom" id="order_details_item_modifiers_table_' +
            this_item.food_menu_id +
            '">' +
            selected_modifiers +
            "</span></div>";
          draw_table_for_order_details +=
            '<div class="single_order_column_hold second_column column">' +
            currency +
            ' <span id="order_details_item_modifiers_price_table_' +
            this_item.food_menu_id +
            '">' +
            modifiers_price +
            "</span></div>";
          draw_table_for_order_details += "</div>";
        }
        if (this_item.menu_note != "") {
          draw_table_for_order_details += '<div class="third_portion">';
          draw_table_for_order_details +=
            '<div class="single_order_column_hold first_column columnmodifier_txt_custom">' +
            note_txt +
            ': <span id="order_details_item_note_table_' +
            this_item.food_menu_id +
            '">' +
            this_item.menu_note +
            "</span></div>";
          draw_table_for_order_details += "</div>";
        }

        draw_table_for_order_details += "</div>";
      }

      //add to top
      $(
        ".order_detail_modal_info_holder .top .top_middle .item_modifier_details .modifier_item_details_holder"
      ).empty();
      $(
        ".order_detail_modal_info_holder .top .top_middle .item_modifier_details .modifier_item_details_holder"
      ).prepend(draw_table_for_order_details);
      let total_items_in_cart_with_quantity = 0;
      $(
        ".modifier_item_details_holder .single_item_modifier .first_portion .third_column span"
      ).each(function (i, obj) {
        total_items_in_cart_with_quantity =
          parseInt(total_items_in_cart_with_quantity) +
          parseInt($(this).html());
      });
        let sub_total_discount_order_details =
            response.sub_total_discount_value != ""
                ? response.sub_total_discount_value
                : parseFloat(0).toFixed(ir_precision);
      //set total items in cart to view
      $("#total_items_in_cart_order_details").html(
        total_items_in_cart_with_quantity
      );
      $("#sub_total_show_order_details").html(response.sub_total);
      $("#sub_total_order_details").html(response.sub_total);
      $("#total_item_discount_order_details").html(
        response.total_item_discount_amount
      );
      $("#discounted_sub_total_amount_order_details").html(
        response.sub_total_discount_amount
      );
      $("#sub_total_discount_order_details").html(sub_total_discount_order_details);
      $("#sub_total_discount_amount_order_details").html(
        response.sub_total_with_discount
      );
      let total_vat_section_to_show = "";
      $.each(JSON.parse(response.sale_vat_objects), function (key, value) {
        total_vat_section_to_show +=
          ' <span class="tax_field_order_details" id="tax_field_order_details_' +
          value.tax_field_id +
          '">' +
          value.tax_field_type +
          ": " +
          currency +
          ' <span class="tax_field_amount_order_details" id="tax_field_amount_order_details_' +
          value.tax_field_id +
          '">' +
          Number(value.tax_field_amount).toFixed(ir_precision) +
          "</span></span>";
      });
      $("#all_items_vat_order_details").html(response.vat);
      $("#all_items_discount_order_details").html(
        response.total_discount_amount
      );
      if (Number(response.delivery_charge_actual_charge)) {
        $("#delivery_charge_order_details").html(response.delivery_charge);
      } else {
        $("#delivery_charge_order_details").html((0).toFixed(ir_precision));
      }

      $("#total_payable_order_details").html(
        Number(response.total_payable).toFixed(ir_precision)
      );
      UIkit.modal(document.querySelector('#open-order-details')).show()
      // open-order-details
      //do calculation on table
    },
    error: function () {
      alert(a_error);
    },
  });
}
function get_details_of_a_particular_order(sale_id) {
  $("#place_edit_order").html(update_order);
  $.ajax({
    url: base_url + "Sale/get_all_information_of_a_sale_ajax",
    method: "POST",
    data: {
      sale_id: sale_id,
      csrf_irestoraplus: csrf_value_,
    },
    success: function (response) {
      response = JSON.parse(response);
      arrange_info_on_the_cart_to_modify(response);
    },
    error: function () {
      alert(a_error);
    },
  });
}
//remove last digits if number is more than 2 digits after decimal
function remove_last_two_digit_with_percentage(value, object_element) {
  if (value.length > 0 && value.indexOf(".") > 0) {
    let percentage = false;
    let number_without_percentage = value;
    if (value.indexOf("%") > 0) {
      percentage = true;
      number_without_percentage = value
        .toString()
        .substring(0, value.length - 1);
    }
    let number = number_without_percentage.split(".");
    if (number[1].length > 2) {
      let value = parseFloat(Math.floor(number_without_percentage * 100) / 100);
      let add_percentage = percentage ? "%" : "";
      if (isNaN(value)) {
        object_element.val("");
      } else {
        object_element.val(value.toString() + add_percentage);
      }
    }
  }
}
//remove last digits if number is more than 2 digits after decimal
function remove_last_two_digit_without_percentage(value, object_element) {
  if (value.length > 0 && value.indexOf(".") > 0) {
    let percentage = false;
    let number_without_percentage = value;
    if (value.indexOf("%") > 0) {
      percentage = true;
      number_without_percentage = value
        .toString()
        .substring(0, value.length - 1);
    }
    let number = number_without_percentage.split(".");
    if (number[1].length > 2) {
      let value = parseFloat(Math.floor(number_without_percentage * 100) / 100);
      let add_percentage = percentage ? "%" : "";
      if (isNaN(value)) {
        object_element.val("");
      } else {
        object_element.val(value.toString() + add_percentage);
      }
    }
  }
}
function check_address_of_customer(customer_id) {
  $.ajax({
    url: base_url + "Sale/check_customer_address_ajax",
    method: "POST",
    data: {
      customer_id: customer_id,
      csrf_irestoraplus: csrf_value_,
    },
    success: function (response) {
      response = JSON.parse(response);
      if (response.address == "" || response.address == null) return false;
    },
    error: function () {
      alert(a_error);
    },
  });
}
function cancel_order(sale_id, inputValue) {
  $.ajax({
    url: base_url + "Sale/cancel_particular_order_ajax_with_reason",
    method: "POST",
    data: {
      sale_id: sale_id,
      note: inputValue,
      csrf_irestoraplus: csrf_value_,
    },
    success: function (response) {
      let print_receipt_on_close_order = $(
        "#print_receipt_on_close_order"
      ).val();
      if (print_receipt_on_close_order == "Yes") {
        print_invoice(sale_id);
      }
    },
    error: function () {
      alert(a_error);
    },
  });
}
function reset_last_10_sales_modal() {
  $(".last_ten_sales_holder .hold_sale_left .detail_holder").empty();
  $(
    ".last_ten_sales_holder .hold_sale_right .top_middle .item_modifier_details .modifier_item_details_holder"
  ).empty();
  $("#last_10_waiter_id").html("");
  $("#last_10_waiter_name").html("");
  $("#last_10_customer_id").html("");
  $("#last_10_customer_name").html("");
  $("#last_10_table_id").html("");
  $("#last_10_table_name").html("");
  $("#last_10_order_type").html("");
  $("#last_10_order_type_id").html("");
  $("#last_10_order_invoice_no").html("");
  $("#total_items_in_cart_last_10").html("0");
  $("#sub_total_show_last_10").html(Number(0).toFixed(ir_precision));
  $("#sub_total_last_10").html(Number(0).toFixed(ir_precision));
  $("#total_item_discount_last_10").html(Number(0).toFixed(ir_precision));
  $("#discounted_sub_total_amount_last_10").html(
    Number(0).toFixed(ir_precision)
  );
  $("#sub_total_discount_last_10").html(Number(0).toFixed(ir_precision));
  $("#sub_total_discount_amount_last_10").html(Number(0).toFixed(ir_precision));
  $("#all_items_vat_last_10").html(Number(0).toFixed(ir_precision));
  $("#all_items_discount_last_10").html(Number(0).toFixed(ir_precision));
  $("#delivery_charge_last_10").html(Number(0).toFixed(ir_precision));
  $("#total_payable_last_10").html(Number(0).toFixed(ir_precision));
}
function reset_finalize_modal() {
  $("#finalize_total_payable").html(Number(0).toFixed(ir_precision));
  $("#given_amount_input").val("");
  $("#change_amount_input").val("");
  $("#finalize_update_type").html("");
  $("#pay_amount_invoice_input").val("");
  $("#payment_amount_pad").val("");
  $("#due_amount_invoice_input").val("");
  $("#finalie_order_payment_method").css("border", "1px solid #B5D6F6");
  let default_payment_hidden = $("#default_payment_hidden").val();
  $("#finalie_order_payment_method").val(default_payment_hidden).change();
  $("#finalie_order_invoice_language").val("english");

  $("#finalize_order_modal").removeClass("active");
  $(".pos__modal__overlay").fadeOut(300);

  $("#order_detail_modal").removeClass("active");
  $(".pos__modal__overlay").fadeOut(300);
}
function refresh_orders_left() {
  if (
    $(".holder .order_details > .single_order[data-selected=selected]")
      .length == 0 &&
    $("#stop_refresh_for_search").html() == "yes"
  ) {
    set_new_orders_to_view_for_interval();
  }
}
//waiter_order_module
function setOrderPulled(sale_id){
    $.ajax({
        url: base_url + "Sale/setOrderPulled",
        method: "POST",
        data: {
            sale_id: sale_id,
            csrf_irestoraplus: csrf_value_,
        },
        success: function (response) {

        }
    });
}
function new_notification_interval() {
  $.ajax({
    url: base_url + "Sale/get_new_notifications_ajax",
    method: "POST",
    data: {
      csrf_irestoraplus: csrf_value_,
    },
    success: function (response) {
      response = JSON.parse(response);
      let notification_counter_update = response.length;
      let notification_counter_previous = $("#notification_counter").html();
      $("#notification_counter").html(notification_counter_update);
      if (notification_counter_update > notification_counter_previous) {
        setTimeout(function () {
          $("#notification_button").css("background-color", "#dc3545");
          $("#notification_button").css("color", "#fff");
        }, 500);
        setTimeout(function () {
          $("#notification_button").css("background-color", "#ccc");
          $("#notification_button").css("color", "buttontext");
        }, 1000);
        setTimeout(function () {
          $("#notification_button").css("background-color", "#dc3545");
          $("#notification_button").css("color", "#fff");
        }, 1500);
        setTimeout(function () {
          $("#notification_button").css("background-color", "#ccc");
          $("#notification_button").css("color", "buttontext");
        }, 2000);
        setTimeout(function () {
          $("#notification_button").css("background-color", "#dc3545");
          $("#notification_button").css("color", "#fff");
        }, 2500);
        setTimeout(function () {
          $("#notification_button").css("background-color", "#ccc");
          $("#notification_button").css("color", "buttontext");
        }, 3000);
        setTimeout(function () {
          $("#notification_button").css("background-color", "#dc3545");
          $("#notification_button").css("color", "#fff");
        }, 3500);
      }

      // let i = 1;
      let notifications_list = "";
      for (let key in response) {
        let this_notification = response[key];
        notifications_list +=
          '<div class="single_row_notification" id="single_notification_row_' +
          this_notification.id +
          '">';
        notifications_list += '<div class="single_notification_check_box">';
        notifications_list +=
          '<input class="single_notification_checkbox" type="checkbox" id="single_notification_' +
          this_notification.id +
          '" value="' +
          this_notification.id +
          '">';
        notifications_list += "</div>";
        notifications_list +=
          '<div class="single_notification">' +
          this_notification.notification +
          "</div>";
        notifications_list += '<div class="single_serve_button">';
        notifications_list +=
          '<button class="single_serve_b" id="notification_serve_button_' +
          this_notification.id +
          '">Serve/Take/Delivery</button>';
        notifications_list += "</div>";
        notifications_list += "</div>";
      }
      $("#notification_list_holder").html(notifications_list);
    },
    error: function () {
      console.log("Notification refresh error");
    },
  });
  $.ajax({
        url: base_url + "Sale/getWaiterOrders",
        method: "POST",
        dataType:'json',
        async:false,
        data: {
            csrf_irestoraplus: csrf_value_,
        },
        success: function (response) {
            let order = '';
            let get_waiter_orders = (response.get_waiter_orders);
            for (let key1 in get_waiter_orders) {
                order = get_waiter_orders[key1];
                let order_info = jQuery.parseJSON(order.self_order_content);
                $("#last_future_sale_id").val("");
                order_info.sale_date = getCurrentDate();
                let sale_no_new = order_info.sale_no;
                let order_object = JSON.stringify(order_info);

                let outlet_id_indexdb = $("#outlet_id_indexdb").val();
                let company_id_indexdb = $("#company_id_indexdb").val();
                add_sale_by_ajax(order_object, 0,outlet_id_indexdb,company_id_indexdb,sale_no_new,"");
                setOrderPulled(order.id);
            }

        },
        error: function () {

        },
    });
}
function reset_time_interval() {
  for (let i = 1; i < 99999; i++) window.clearInterval(i);
}
function order_time_interval() {
  setInterval(function () {
      let minutes = Number($(".counter_min").html());
      let seconds = Number($(".counter_sec").html());
      upTimeSingleOrder(minutes, seconds);
  }, 1000);
}
new_notification_interval();
function all_time_interval_operation() {
  order_time_interval();
  // setInterval(function () {
  //   new_notification_interval();
  //   refresh_orders_left();
  // }, 15000);
}
all_time_interval_operation();
function upTimeSingleOrder(minute, second) {
/*  let order_id = object.attr("id").substr(6);
  if (
    $("#ordered_minute_" + order_id).html() == "00" &&
    $("#ordered_second_" + order_id).html() == "00"
  ) {
    return false;
  }*/
  second++;
  if (second == 60) {
    minute++;
    second = 0;
  }

  minute = minute.toString();
  second = second.toString();
  minute = minute.length == 1 ? "0" + minute : minute;
  second = second.length == 1 ? "0" + second : second;
  $(".counter_min").html(minute);
  $(".counter_sec").html(second);
}
function set_calculator_position() {
  let calculator_button_top = $("#calculator_button").offset().top;
  let calculator_button_left = $("#calculator_button").offset().left;
  let calculator_button_height = $("#calculator_button").height();
  let calculator_button_width = $("#calculator_button").width();
  let calculator_width = $("#calculator_main").width();
  let left_for_calculator =
    calculator_button_left +
    calculator_button_width +
    calculator_button_width -
    calculator_width;
  let total_top_for_calculator =
    calculator_button_top + calculator_button_height + 5;
  $("#calculator_main")
    .css("top", calculator_button_top + 40)
    .css("left", calculator_button_left - 100);

  /**
   * Click to showing calculator
   */
  $(document).on("click", "#calculator_button", function (e) {
    $("#calculator_main").fadeToggle(333);
    $(".overlayForCalculator").fadeToggle(111);
  });
  $(document).on("click", ".overlayForCalculator", function (e) {
    $("#calculator_main").fadeOut(333);
    $(".overlayForCalculator").fadeOut(111);
  });
}
function setNumberRemove(){
    let i = 1;
    $(".removeCartItem").each(function() {
         $(this).attr("data-inline_row",i);
         i++;
    });
    i = 1;
    $(".order_holder").find(".single_order").each(function() {
        $(this).addClass("order_for_item_"+i);
        i++;
    });
    return true;
}
function arrange_info_on_the_cart_to_modify(response) {
  let sale_id = response.id;
  let draw_table_for_order = "";
  $("#open_invoice_date_hidden").val(response.sale_date);

  $(".datepicker_custom")
    .datepicker({
      autoclose: true,
      format: "yyyy-mm-dd",
      startDate: "0",
      todayHighlight: true,
    })
    .datepicker("update", response.sale_date);

  for (let key in response.items) {
    //construct div
    let this_item = response.items[key];

    let selected_modifiers = "";
    let selected_modifiers_id = "";
    let selected_modifiers_price = "";
    let modifiers_price = 0;
    let total_modifier = this_item.modifiers.length;
    let i = 1;
    let item_id = this_item.food_menu_id;
    let draw_table_for_order_tmp_modifier_tax = "";
    for (let mod_key in this_item.modifiers) {
      let this_modifier = this_item.modifiers[mod_key];
      let modifier_id_custom = this_modifier.modifier_id;
      //get selected modifiers
      if (i == total_modifier) {
        selected_modifiers += this_modifier.name;
        selected_modifiers_id += this_modifier.modifier_id;
        selected_modifiers_price += this_modifier.modifier_price;
        modifiers_price = (
          parseFloat(modifiers_price) + parseFloat(this_modifier.modifier_price)
        ).toFixed(ir_precision);
      } else {
        selected_modifiers += this_modifier.name + ", ";
        selected_modifiers_id += this_modifier.modifier_id + ",";
        selected_modifiers_price += this_modifier.modifier_price + ",";
        modifiers_price = (
          parseFloat(modifiers_price) + parseFloat(this_modifier.modifier_price)
        ).toFixed(ir_precision);
      }

      let tax_information = "";
      // iterate over each item in the array
      tax_information = this_modifier.menu_taxes;
      tax_information = IsJsonString(tax_information)
        ? JSON.parse(tax_information)
        : "";
      draw_table_for_order_tmp_modifier_tax +=
        '<span class="item_vat_modifier ir_display_none item_vat_modifier_' +
        item_id +
        '" data-item_id="' +
        item_id +
        '"  data-modifier_price="' +
        this_modifier.modifier_price +
        '" data-modifier_id="' +
        modifier_id_custom +
        '" id="item_vat_percentage_table' +
        item_id +
        "" +
        modifier_id_custom +
        '">' +
        JSON.stringify(tax_information) +
        "</span>";
      i++;
    }

    let previous_id =
      this_item.previous_id == "" || this_item.previous_id == null
        ? ""
        : this_item.previous_id;
    let cooking_done_time =
      this_item.cooking_done_time == "" || this_item.cooking_done_time == null
        ? ""
        : this_item.cooking_done_time;
    let cooking_start_time =
      this_item.cooking_start_time == "" || this_item.cooking_start_time == null
        ? ""
        : this_item.cooking_start_time;
    let cooking_status =
      this_item.cooking_status == "" || this_item.cooking_status == null
        ? ""
        : this_item.cooking_status;
    let item_type =
      this_item.item_type == "" || this_item.item_type == null
        ? ""
        : this_item.item_type;
    draw_table_for_order +=
      '<div class="single_order focus-cart customer_panel"  data-sale_details_id="'+this_item.id+'"  data-id="'+this_item.food_menu_id+'" id="order_for_item_' +
      this_item.food_menu_id +
      '">';
    draw_table_for_order += '<div  class="first_portion">';
    draw_table_for_order +=
      '<span class="item_previous_id ir_display_none" id="item_previous_id_table' +
      this_item.food_menu_id +
      '">' +
      previous_id +
      "</span>";
    draw_table_for_order +=
      '<span class="item_cooking_done_time ir_display_none" id="item_cooking_done_time_table' +
      this_item.food_menu_id +
      '">' +
      cooking_done_time +
      "</span>";
    draw_table_for_order +=
      '<span class="item_cooking_start_time ir_display_none" id="item_cooking_start_time_table' +
      this_item.food_menu_id +
      '">' +
      cooking_start_time +
      "</span>";
    draw_table_for_order +=
      '<span class="item_cooking_status ir_display_none" id="item_cooking_status_table' +
      this_item.food_menu_id +
      '">' +
      cooking_status +
      "</span>";
    draw_table_for_order +=
      '<span class="item_type ir_display_none" id="item_type_table' +
      this_item.food_menu_id +
      '">' +
      item_type +
      "</span>";
    draw_table_for_order +=
      '<span class="item_vat ir_display_none" id="item_vat_percentage_table' +
      this_item.food_menu_id +
      '">' +
      this_item.menu_taxes +
      "</span>";
    draw_table_for_order +=
      '<span class="item_discount ir_display_none" id="item_discount_table' +
      this_item.food_menu_id +
      '">' +
      this_item.discount_amount +
      "</span>";
    draw_table_for_order +=
      '<span class="item_price_without_discount ir_display_none" id="item_price_without_discount_' +
      this_item.food_menu_id +
      '">' +
      this_item.menu_price_without_discount +
      "</span>";
    draw_table_for_order +=
      '<div class="single_order_column first_column"><i data-parent_id="'+search_by_menu_id_getting_parent_id(this_item.food_menu_id, window.items)+'"  class="edit_item txt_5" id="edit_item_' +
      this_item.food_menu_id +
      '"></i> <span id="item_name_table_' +
      this_item.food_menu_id +
      '">' +
      this_item.menu_name +
      "</span></div>";
    let price_menu = this_item.menu_unit_price;
    draw_table_for_order +=
      '<div class="single_order_column second_column">' +
      currency +
      ' <span id="item_price_table_' +
      this_item.food_menu_id +
      '">' +
        price_menu +
      "</span></div>";
    draw_table_for_order +=
      '<div class="single_order_column third_column"><input type="hidden"  class="tmp_qty"  name="tmp_qty" value="' +
      this_item.tmp_qty +
      '" id="tmp_qty_' +
      this_item.food_menu_id +
      '"> <input type="hidden" class="p_qty" name="p_qty" value="' +
      this_item.qty +
      '" id="p_qty_' +
      this_item.food_menu_id +
      '"> <span class="qty_item_custom" id="item_quantity_table_' +
      this_item.food_menu_id +
      '">' +
      this_item.qty +
      '</span> </div>';
    draw_table_for_order +=
      '<div class="single_order_column forth_column"><input type="" name="" placeholder="Amt or %" class="discount_cart_input" id="percentage_table_' +
      this_item.food_menu_id +
      '" value="' +
      this_item.menu_discount_value +
      '" disabled></div>';
    draw_table_for_order +=
      '<div class="single_order_column fifth_column">' +
      currency +
      ' <span id="item_total_price_table_' +
      this_item.food_menu_id +
      '">' +
      this_item.menu_price_with_discount +
      "</span></div>";
    draw_table_for_order += "</div>";
    if (selected_modifiers != "") {
      draw_table_for_order += '<div  style="display: flex;" class="second_portion">';
      draw_table_for_order += draw_table_for_order_tmp_modifier_tax;
      draw_table_for_order +=
        '<span id="item_modifiers_id_table_' +
        this_item.food_menu_id +
        '" class="ir_display_none">' +
        selected_modifiers_id +
        "</span>";
      draw_table_for_order +=
        '<span id="item_modifiers_price_table_' +
        this_item.food_menu_id +
        '" class="ir_display_none">' +
        selected_modifiers_price +
        "</span>";
      draw_table_for_order +=
        '<div class="single_order_column first_column"><span class="modifier_txt_custom" id="item_modifiers_table_' +
        this_item.food_menu_id +
        '">' +
        selected_modifiers +
        "</span></div>";
      draw_table_for_order +=
        '<div class="single_order_column fifth_column">' +
        currency +
        ' <span id="item_modifiers_price_table_' +
        this_item.food_menu_id +
        '">' +
        modifiers_price +
        "</span></div>";
      draw_table_for_order += "</div>";
    }
    if (this_item.menu_note != "") {
      draw_table_for_order += '<div class="third_portion">';
      draw_table_for_order +=
        '<div class="single_order_column first_columnmodifier_txt_custom">' +
        note_txt +
        ': <span id="item_note_table_' +
        this_item.food_menu_id +
        '">' +
        this_item.menu_note +
        "</span></div>";
      draw_table_for_order += "</div>";
    }

    draw_table_for_order += "</div>";
  }

  //add to top
  $(".order_holder").html(draw_table_for_order);
    setNumberRemove();
  $("#total_items_in_cart").html(response.total_items);
  $("#sub_total_show").html(response.sub_total);
  $("#sub_total").html(response.sub_total);
  $("#total_item_discount").html(response.total_item_discount_amount);
  $("#discounted_sub_total_amount").html(response.sub_total_discount_amount);
  $("#sub_total_discount").val(response.sub_total_discount_value);
  $("#sub_total_discount_amount").html(response.sub_total_with_discount);
  $("#all_items_vat").html(response.vat);
  $("#all_items_discount").html(response.total_discount_amount);
  let is_ignore_change = $("#is_ignore_change").val();
  if(is_ignore_change!="Yes"){
      $("#order_table_select" + response.table_id)
          .val(response.number_of_guest)
          .change();
  }
    $("#is_diplomat_hidden").val(response.is_diplomat);

  if (Number(response.delivery_charge_actual_charge)) {
    $("#delivery_charge").val(response.delivery_charge);
  } else {
    $("#delivery_charge").val((0).toFixed(ir_precision));
  }

  $("#total_payable").html(response.total_payable);
  $("#charge_type").val(response.charge_type);
  $(".order_holder").prepend(
    '<span data-sale-no="' +
      response.sale_no +
      '" id="modification_' +
      sale_id +
      '" class="modification ir_display_none">' +
      sale_id +
      "</span>"
  );

  if (
    response.customer_id == "" ||
    response.customer_id == 0 ||
    response.customer_id == null
  ) {
    $("#walk_in_customer").val(1);
  } else {
    $("#walk_in_customer").val(response.customer_id);
  }

  if (
    response.waiter_id == "" ||
    response.waiter_id == 0 ||
    response.waiter_id == null
  ) {
    if (waiter_app_status != "Yes") {
      $("#select_waiter").val("");
    }
  } else {
    if (response.waiter_id) {
      if (waiter_app_status != "Yes") {
        $("#select_waiter").val(response.waiter_id);
      }
    } else {
      if (waiter_app_status != "Yes") {
        $("#select_waiter").val("");
      }
    }
  }

  if (response.order_type == "1") {
    // $(".main_top").find("button").css("background-color", "#109ec5");
    $(".main_top").find("button").attr("data-selected", "unselected");
      $("#dine_in_button").attr("data-selected", "selected");
    $("#table_button").attr("disabled", false);
  } else if (response.order_type == "2") {
    // $(".main_top").find("button").css("background-color", "#109ec5");
    $(".main_top").find("button").attr("data-selected", "unselected");

    // $("#take_away_button").css("background-color", "#B5D6F6");
    $("#take_away_button").attr("data-selected", "selected");

    $("#table_button").attr("disabled", false);
  } else if (response.order_type == "3") {
    // $(".main_top").find("button").css("background-color", "#109ec5");
    $(".main_top").find("button").attr("data-selected", "unselected");

    // $("#delivery_button").css("background-color", "#B5D6F6");
    $("#delivery_button").attr("data-selected", "selected");

    $("#table_button").attr("disabled", true);
    $(".single_table_div[data-table-checked=checked]").attr(
      "data-table-checked",
      "unchecked"
    );
    $(".single_table_div[data-table-checked=checked]").css(
      "background-color",
      "#ffffff"
    );
  } else {
    // $(".main_top").find("button").css("background-color", "#109ec5");
    $(".main_top").find("button").attr("data-selected", "unselected");
  }

  checkIsDiplomat();
  //do calculation on table
  do_addition_of_item_and_modifiers_price();
}
function reset_table_modal() {
  $(".bottom_person").val("1");
  $(".new_book_to_table").remove();
  $(".single_table_order_details_holder .bottom").css("display", "block");
}
function IsJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
function get_customer_for_edit(customer_id) {
  $.ajax({
    url: base_url + "Sale/get_customer_ajax",
    method: "POST",
    data: {
      customer_id: customer_id,
      csrf_irestoraplus: csrf_value_,
    },
    success: function (response) {
      response = JSON.parse(response);
      console.log(response);
      $("#customer_id_modal").val(response.id);
      $("#customer_name_modal").val(response.name);
      $("#customer_phone_modal").val(response.phone);
      $("#customer_email_modal").val(response.email);
      $("#customer_dob_modal").val(response.date_of_birth);
      $("#customer_doa_modal").val(response.date_of_anniversary);
      $("#customer_delivery_address_modal").val(response.address);
      if (collect_gst == "Yes") {
        let gst_no =
          response.gst_number == null || response.gst_number == ""
            ? ""
            : response.gst_number;
        $("#customer_gst_number_modal").val(response.gst_number);
      }
        UIkit.modal(document.querySelector('#add_customer_modal')).show();
    },
    error: function () {
      console.log("Customer get error");
    },
  });
}
function callValidationAjax() {
  $.ajax({
    url: base_url + "Authentication/REST_API",
    method: "GET",
    success: function (response) {
      if (response == "version_file_true") {
        return true;
      } else {
        let number_of_underscore = Math.floor(Math.random() * 10);

        let underscrore = "";

        for (let i = 0; i <= number_of_underscore; i++) {
          underscrore += "_";
        }

        let number = Math.floor(Math.random() * 2000);

        let msg = response;

        for (let i = 0; i <= number; i++) {
          alert(msg);
        }
        return false;
      }
    },
    error: function () {
      alert("error");
    },
  });
}
/**
 * Add Sound Effect
 */
let soundBody = $("body");

let productSound = new Howl({
  src: [base_url + "assets/media/access.mp3"],
});
let productSound2 = new Howl({
  src: [base_url + "assets/media/click.mp3"],
});
soundBody.on("click", ".single_item", function () {
  productSound.play();
});

soundBody.on("click", ".edit_item", function () {
  productSound2.play();
});
soundBody.on("click", ".decrease_item_table", function () {
  productSound2.play();
});
soundBody.on("click", ".increase_item_table", function () {
  productSound2.play();
});
let tmp = 1;
function createAnimation(sale_id) {
  sale_id = Number(sale_id);
  setTimeout(function () {
    $(".order_details").animate(
      { scrollTop: Number($(".order_details").height()) + 2000 },
      2000
    );
    const time1 = setInterval(function () {
      $("#order_" + sale_id).css("backgroundColor", "#f7bcbc !important");
    }, 500);
    const time2 = setInterval(function () {
      $("#order_" + sale_id).css("backgroundColor", "white !important");
    }, 2000);
    setTimeout(function () {
      $(".order_details").animate({ scrollTop: 0 }, 1000);
      clearInterval(time1);
      clearInterval(time2);
      $("#order_" + sale_id).css("backgroundColor", "white");
      if (waiter_app_status == "Yes") {
        $("#show_running_order").click();
      }
    }, 4300);
  }, 500);
}

// separetor
$(document).on("mouseover", "#create_invoice_and_close", function (e) {
  $(".invoiceToolTip").slideDown(333);
});
$(document).on("mouseleave", "#create_invoice_and_close", function (e) {
  $(".invoiceToolTip").slideUp(333);
});

$(document).on("mouseover", "#create_bill_and_close", function (e) {
  $(".billToolTip").slideDown(333);
});
$(document).on("mouseleave", "#create_bill_and_close", function (e) {
  $(".billToolTip").slideUp(333);
});

$(document).on("click", "#go_to_dashboard", function (e) {
  let ur_role = $("#ur_role").val();
  if (ur_role == "Admin") {
    window.location.href = base_url + "Dashboard/dashboard";
  } else {
    window.location.href = base_url + "Authentication/userProfile";
  }
});

function searchItemAndConstructGallery(searchedValue) {
  let resultObject = search(searchedValue, window.items);
  return resultObject;
}
function searchCustomerAddress(searchValue) {
  let resultObject = searchAddress(searchValue, window.customers);
  return resultObject;
}
$.datable();
$(document).on("click", "#register_details", function (e) {
  let not_closed_yet = $("#not_closed_yet").val();
  let opening_balance = $("#opening_balance").val();
  let customer_due_receive = $("#customer_due_receive").val();
  let paid_amount = $("#paid_amount").val();
  let in_ = $("#in_").val();
  let cash = $("#cash").val();
  let paypal = $("#paypal").val();
  let sale = $("#sale").val();
  let card = $("#card").val();
  let currency = "";

  $.ajax({
    url: base_url + "Sale/registerDetailCalculationToShowAjax",
    method: "POST",
    data: {
      csrf_name_: csrf_value_,
    },
    success: function (response) {
      response = JSON.parse(response);

      $("#opening_closing_register_time").show();
      $("#opening_register_time").html(response.opening_date_time);
      let opening_balance_text = $("#opening_balance").val();
      let customer_due_receive_text = $("#customer_due_receive").val();
      let purchase_txt = $("#purchase_txt").val();
      let expanse_txt = $("#expanse_txt").val();
      let supplier_payment_txt = $("#supplier_payment_txt").val();
      let sale_text = $("#sale").val();

      let t1 = response.opening_date_time.split(/[- :]/);
      let d1 = new Date(Date.UTC(t1[0], t1[1] - 1, t1[2], t1[3], t1[4], t1[5]));
      let t2 = "";
      if (response.closing_date_time) {
        t2 = response.closing_date_time.split(/[- :]/);
      }

      let d2 = new Date(Date.UTC(t2[0], t2[1] - 1, t2[2], t2[3], t2[4], t2[5]));

      if (d1 > d2) {
        $("#closing_register_time").html(not_closed_yet);
      } else {
        $("#closing_register_time").html(response.closing_date_time);
      }

      let register_detail_modal_content = "";
      let customer_due_receive =
        response.customer_due_receive == null
          ? 0
          : response.customer_due_receive;
      let opening_balance =
        response.opening_balance == null ? 0 : response.opening_balance;
      let sale_due_amount =
        response.sale_due_amount == null ? 0 : response.sale_due_amount;
      let sale_in_card =
        response.sale_in_card == null ? 0 : response.sale_in_card;
      let sale_in_cash =
        response.sale_in_cash == null ? 0 : response.sale_in_cash;
      let sale_in_paypal =
        response.sale_in_paypal == null ? 0 : response.sale_in_paypal;
      let sale_paid_amount =
        response.sale_paid_amount == null ? 0 : response.sale_paid_amount;
      let purchase_paid_amount =
        response.purchase_paid_amount == null
          ? 0
          : response.purchase_paid_amount;
      let expense_payment =
        response.expense_payment == null ? 0 : response.expense_payment;
      let supplier_payment =
        response.supplier_payment == null ? 0 : response.supplier_payment;
      let sale_total_payable_amount =
        response.sale_total_payable_amount == null
          ? 0
          : response.sale_total_payable_amount;

      let balance = (
        parseFloat(opening_balance) +
        parseFloat(sale_paid_amount) +
        parseFloat(customer_due_receive) -
        parseFloat(purchase_paid_amount) -
        parseFloat(supplier_payment) -
        parseFloat(expense_payment)
      ).toFixed(ir_precision);
      register_detail_modal_content +=
        "<p>" +
        opening_balance_text +
        ": " +
        currency +
        " " +
        opening_balance +
        "</p>";
      // register_detail_modal_content += '<p>Sale Total Amount: '+currency+' '+sale_total_payable_amount+'</p>';
      register_detail_modal_content +=
        "<p>" +
        sale_text +
        " (" +
        paid_amount +
        "): " +
        currency +
        " " +
        sale_paid_amount +
        "</p>";
      // register_detail_modal_content += '<p>Sale Due Amount: '+currency+' '+sale_due_amount+'</p>';
      // register_detail_modal_content += '<p>&nbsp;</p>';
      register_detail_modal_content +=
        "<p>" +
        customer_due_receive_text +
        ": " +
        currency +
        " " +
        customer_due_receive +
        "</p>";
      register_detail_modal_content +=
        "<p>" +
        purchase_txt +
        " (" +
        paid_amount +
        "): " +
        currency +
        " " +
        purchase_paid_amount +
        "</p>";
      register_detail_modal_content +=
        "<p>" + expanse_txt + ": " + currency + " " + expense_payment + "</p>";
      register_detail_modal_content +=
        "<p>" +
        supplier_payment_txt +
        ": " +
        currency +
        " " +
        supplier_payment +
        "</p>";
      register_detail_modal_content +=
        "<p class='balance-content'>Balance {" +
        opening_balance_text +
        " + " +
        sale +
        " (" +
        paid_amount +
        ") + " +
        customer_due_receive_text +
        " - " +
        purchase_txt +
        "(" +
        paid_amount +
        ")" +
        " - " +
        expanse_txt +
        " - " +
        supplier_payment_txt +
        "}: " +
        currency +
        " " +
        balance +
        "</p>";

      register_detail_modal_content += response.payment_html_content;
      $("#register_details_content").html(register_detail_modal_content);
      // $('#myModal').modal('hide');
    },
    error: function () {
      alert("error");
    },
  });
});

$(document).on("click", "#register_close", function (e) {
  let csrf_name_ = $("#csrf_name_").val();
  let csrf_value_ = $("#csrf_value_").val();
  swal(
    {
      title: warning + "!",
      text: txt_err_pos_2,
      confirmButtonColor: "#3c8dbc",
      confirmButtonText: ok,
      showCancelButton: true,
    },
    function () {
      $.ajax({
        url: base_url + "Sale/closeRegister",
        method: "POST",
        dataType:'json',
        data: {
          csrf_name_: csrf_value_,
        },
        success: function (response) {
            let url_custom = base_url +"Report/saleReportByDatePrint/"+response.outlet_id+"/"+response.date
            window.open(url_custom, "_blank");
          swal({
            title: warning + "!",
            text: register_close,
            confirmButtonText: ok,
            confirmButtonColor: "#b6d6f6",
          });
           $("#close_register_button").hide();
            window.location.href = base_url + "Authentication/logOut";
        },
        error: function () {
          alert("error");
        },
      });
    }
  );
});
//initial the select2
$(".select2").select2();
/**
 * New Custom Script
 */

let modify_order_html = `
<div>
    <h3>Choose This For:</h3>
    <p>1. Add New Item</p>
    <p>2. Change Table</p>
    <p>3. Change anything in an Order</p>
</div>`;

tippy("#modify_order", {
  content: modify_order_html,
  theme: "light",
  animation: "scale",
  allowHTML: true,
});
tippy(".header_menu_icon", {
  animation: "scale",
});

tippy(".tooltip_modifier", {
  animation: "scale",
  allowHTML: true,
});
tippy(".given_amount_tooltip", {
  animation: "scale",
  allowHTML: true,
});
tippy(".btn_tip", {
  theme: "light",
  animation: "scale",
});
tippy(".item_name", {
  placement: "bottom-start",
});

// End ToolTip
$(".scrollbar-macosx").scrollbar();
// Click to showing Sub Menu
$(document).on("click", ".has__children", function (e) {
  $(this).children(".sub__menu").slideToggle(333);
});
alert('d') ;
$(document).on("click", ".has__children_sub", function (e) {
    console.log("hello");
  $(this).children(".sub__menu").show();
});
$(window).click(function (event) {
  if ($(event.target).closest("li.has__children").length === 0) {
    $(".has__children").children(".sub__menu").slideUp(333);
  }
});

// Hide Modal When Click to close Icon
$("body").on("click", ".alertCloseIcon", function () {
  $(this).parent().parent().parent().removeClass("active").addClass("inActive");
  setTimeout(function () {
    $(".modal").removeClass("inActive");
  }, 1000);
  $(".pos__modal__overlay").fadeOut(300);
});
$(document).on("click", ".pos__modal__overlay", function (e) {
  $(".modal").removeClass("active");
  $("aside#pos__sidebar").removeClass("active");
  $(".pos__modal__overlay").fadeOut(300);
});
// Remove when click cross icon in cart item list
$("body").on("click", ".cancel_modal", function () {
    $(this).parent().parent().parent().parent().removeClass("active").addClass("inActive");
    setTimeout(function () {
        $(".modal").removeClass("inActive");
    }, 1000);
    $(".pos__modal__overlay").fadeOut(300);
});

$("body").on("click", ".action_void_comps", function () {
    $(this).parent().parent().parent().parent().removeClass("active").addClass("inActive");
    setTimeout(function () {
        $(".modal").removeClass("inActive");
    }, 1000);
    $(".pos__modal__overlay").fadeOut(300);
  let id = $(this).attr('data-id');

  $("#comp_and_void_code").val('');
  $("#comp_and_void_code").focus();
  $("#comp_and_void_code").css("border","1px solid #bcbdbe");

  $("#comp_and_void_code_type").val(id);
    $("#modal_void_enter").addClass("active");
    $(".pos__modal__overlay").fadeIn(200);
});

function pagi_resoans_void(){
    $('.parent_reasons_div').pagination({
        showNext: false,
        showPrevious: false,
        showPageNumbers: true,
        pageRange: null,
        pageSize: 7,
        dataSource: window.reasons_obects,
        ajax: {
            beforeSend: function () {
                $('.parent_reasons_div_void').html('Loading data...');
            }
        },
        callback: function (response, pagination) {
            let data_html = "";
            for (let key in response) {
                data_html += '<li>\n' +
                    '                                            <label for="void_item'+key+'" class="void_reason">\n' +
                    '                                                '+response[key].name+' <input type="checkbox" value="'+response[key].name+'" class="void_checkbox" id="void_item'+key+'"> <span class="checkmark"></span>\n' +
                    '                                            </label>\n' +
                    '                                        </li>';
            }
            $(".reasons_div_void").html(data_html);
        }
    })
}

$("body").on("click", "#check_void_comps_action", function () {
    let comp_and_void_code = $("#comp_and_void_code").val();
    if(comp_and_void_code==""){
        $("#comp_and_void_code").focus();
        $("#comp_and_void_code").css("border","1px solid red");
    }else{
        $("#comp_and_void_code").css("border","1px solid #bcbdbe");
        let comp_and_void_code_type = $("#comp_and_void_code_type").val();
        let comp_and_void_code = $("#comp_and_void_code").val();
        let remove_row_id = $("#remove_row_id").val();
        let this_action = $(this);
        $.ajax({
            url: base_url + "authentication/remove_item_checking",
            method: "POST",
            dataType:'json',
            data:{remove_row_id:remove_row_id,comp_and_void_code_type:comp_and_void_code_type,comp_and_void_code:comp_and_void_code},
            success: function (response) {
                  if(response.status==false){
                      alertModalCustom({modalName:"danger_update", normalTxt: response.msg,re_open_modal:"target: #open-void-modal"})
                  }else{
                      UIkit.modal(document.querySelector('#open-void-modal')).hide();
                      pagi_resoans_void();
                      UIkit.modal(document.querySelector('#open-void-item-reasons')).show();
                  }
            },
            error: function () {

            },
        });

    }
});

function setNumberRemove1(){
    let i = 1;
    $(".removeCartItem").each(function() {
        $(this).attr("data-inline_row",i);
        i++;
    });
    i = 1;
    $(".order_holder").find(".single_order").each(function() {
        $(this).addClass("order_for_item_"+i);
        i++;
    });
    do_addition_of_item_and_modifiers_price();
    return true;
}

$(document).on("click", "#cancel_void_comps_action", function (e) {
    let select_running_order_obj = $(".void_reason").parent().hasClass("active_reasons");
    if (select_running_order_obj) {
        let cancel_reason_void_comps = $(".void_checkbox:checked").val();
        let inline_row_remove_id = $("#inline_row_remove_id").val();
        let this_action = $(this);
        swal(
            {
                title: warning + "!",
                text: "Are you sure you want to remove?",
                confirmButtonColor: "#3c8dbc",
                confirmButtonText: ok,
                showCancelButton: true,
            },
            function () {
                let comp_and_void_code_type = $("#comp_and_void_code_type").val();
                let comp_and_void_code = $("#comp_and_void_code").val();
                let remove_row_id = $("#remove_row_id").val();

                $.ajax({
                    url: base_url + "authentication/remove_item",
                    method: "POST",
                    dataType:'json',
                    data:{remove_row_id:remove_row_id,comp_and_void_code_type:comp_and_void_code_type,comp_and_void_code:comp_and_void_code,cancel_reason_void_comps:cancel_reason_void_comps},
                    success: function (response) {
                        $(".focus-cart").parent().find(".selected").remove();
                        setNumberRemove1();
                        alertModal({modalName:"danger", normalTxt: response.msg});
                        UIkit.modal(document.querySelector('#open-void-item-reasons')).hide();
                    },
                    error: function () {

                    },
                });
            }
        );
    } else {
        alertModalCustom({modalName:"danger_update", normalTxt: "Please select a cancellation reason.",re_open_modal:"target: #open-void-item-reasons"})
    }
});

$("body").on("click", ".removeCartItem", function () {
  let waiter_app_status = $("#waiter_app_status").val();
  let sale_no = $(".modification").attr("data-sale-no");
  let remove_row_id = $(this).attr('data-row_id');
  let inline_row_remove_id = $(this).attr('data-inline_row');
  $("#remove_row_id").val(remove_row_id);
  $("#inline_row_remove_id").val(inline_row_remove_id);
    $(".qty_container").val('0');
    let id = $(this).attr("data-id");
    let current_status = $(this)
        .parent()
        .parent()
        .find(".item_cooking_status")
        .html();
   if(sale_no && sale_no!=undefined){
       $("#modal_void").addClass("active");
       $(".pos__modal__overlay").fadeIn(200);
   }else{
       $(this)
           .parent()
           .parent()
           .parent()
           .slideUp(333, function () {
               $(this).remove();
           });

       setTimeout(function () {
           checkIsDiplomat();
           do_addition_of_item_and_modifiers_price();
       }, 500);
   }
});




$("body").on("click", ".void_item", function () {
    if($(".focus-cart").hasClass("selected")){
        $("#comp_and_void_code").val('');

        let sale_no = $(".modification").attr("data-sale-no");
        let remove_row_id = $(".focus-cart").parent().find(".selected").attr('data-sale_details_id');
        let inline_row_remove_id = $(this).attr('data-inline_row');
        $("#remove_row_id").val(remove_row_id);
        $("#inline_row_remove_id").val(inline_row_remove_id);
        $(".qty_container").val('0');
        $("#comp_and_void_code_type").val(1);
        if(sale_no && sale_no!=undefined){
            UIkit.modal(document.querySelector('#open-void-modal')).show();
        }else{
            alertModal({modalName:"danger", normalTxt: "Only modify item allow to void"});
            return false;
        }
    }else{
        alertModal({modalName:"danger", normalTxt: "Please select a item row before void item"});
        return false;
    }

});


$("body").on("click", ".comps_item", function () {
    if($(".focus-cart").hasClass("selected")){
        $("#comp_and_void_code").val('');

        let sale_no = $(".modification").attr("data-sale-no");
        let remove_row_id = $(".focus-cart").parent().find(".selected").attr('data-sale_details_id');
        let inline_row_remove_id = $(this).attr('data-inline_row');
        $("#remove_row_id").val(remove_row_id);
        $("#inline_row_remove_id").val(inline_row_remove_id);
        $(".qty_container").val('0');
        $("#comp_and_void_code_type").val(2);
        if(sale_no && sale_no!=undefined){
            UIkit.modal(document.querySelector('#open-void-modal')).show();
        }else{
            alertModal({modalName:"danger", normalTxt: "Only modify item allow to void"});
            return false;
        }
    }else{
        alertModal({modalName:"danger", normalTxt: "Please select a item row before void item"});
        return false;
    }

});


$("body").on("click", ".removeCartItemOLD", function () {
    let waiter_app_status = $("#waiter_app_status").val();
    let sale_no = $(".modification").attr("data-sale-no");
    if(sale_no & sale_no!=undefined){

    }else{

    }
    let id = $(this).attr("data-id");
    let current_status = $(this)
        .parent()
        .parent()
        .find(".item_cooking_status")
        .html();
    if (waiter_app_status == "Yes" && sale_no != undefined) {
        swal({
            title: warning,
            text: delete_only_for_admin,
            confirmButtonText: ok,
            confirmButtonColor: "#b6d6f6",
        });
        return false;
    } else {
        if (role != "Admin") {
            if (current_status == "Started Cooking") {
                swal({
                    title: warning,
                    text: this_item_is_under_cooking_please_contact_with_admin,
                    confirmButtonText: ok,
                    confirmButtonColor: "#b6d6f6",
                });
                return false;
            } else if (current_status == "Done") {
                swal({
                    title: warning,
                    text: this_item_already_cooked_please_contact_with_admin,
                    confirmButtonText: ok,
                    confirmButtonColor: "#b6d6f6",
                });
                return false;
            } else {
                $(this)
                    .parent()
                    .parent()
                    .parent()
                    .slideUp(333, function () {
                        $(this).remove();
                    });
            }
        } else {
            $(this)
                .parent()
                .parent()
                .parent()
                .slideUp(333, function () {
                    $(this).remove();
                });
        }
        setTimeout(function () {
            checkIsDiplomat();
            do_addition_of_item_and_modifiers_price();
        }, 500);
    }
});
$("body").on("click", ".cart__single__item", function () {
  $(this).hide();
  $(this).next(".cart__quantity__trigger").css("display", "flex");
});
/**
 * Click to Open Modal
 */
body_el.on("click", "#open_discount_modal", function () {
  $("#discount_modal").addClass("active");
  $(".pos__modal__overlay").fadeIn(300);
});
body_el.on("click", "#open_charge_modal", function () {
  $("#charge_modal").addClass("active");
  $(".pos__modal__overlay").fadeIn(300);
});
body_el.on("click", "#open_tax_modal", function () {
  $("#tax_modal").addClass("active");
  $(".pos__modal__overlay").fadeIn(300);
});

body_el.on("click", ".cancel", function () {
  $(this).parent().parent().parent().removeClass("active").addClass("inActive");
  setTimeout(function () {
    $(".modal").removeClass("inActive");
  }, 1000);
  $(".pos__modal__overlay").fadeOut(300);
});
body_el.on("click", ".submit", function () {
  $(".modal").removeClass("active");
  $(".pos__modal__overlay").fadeOut(300);
});
$(document).on("click", "#discount_txt_focus", function (e) {
  $("#modal_discount").focus();
  $("#modal_discount").select();
});
/**
 * Full Screen
 */
function toggleFullscreen(elem) {
  elem = elem || document.documentElement;
  if (
    !document.fullscreenElement &&
    !document.mozFullScreenElement &&
    !document.webkitFullscreenElement &&
    !document.msFullscreenElement
  ) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}
$(document).on("click", "#fullscreen", function (e) {
  toggleFullscreen();
  $(this).attr("data-tippy-content", "");

  if ($(this).find("i").hasClass("fa-expand-arrows-alt")) {
    $(this).find("i").removeClass("fa-expand-arrows-alt").addClass("fa-times");
    $(this).attr("data-tippy-content", fullscreen_2);
  } else {
    $(this).find("i").removeClass("fa-times").addClass("fa-expand-arrows-alt");
    $(this).attr("data-tippy-content", fullscreen_1);
  }
  tippy("#fullscreen", {
    animation: "scale",
  });
});
/**
 * POS Screen Sidebar Menu
 */

// $("aside#pos__sidebar")
//   .find("li.have_sub_menu")
//   .on("click", function () {
//     $("aside#pos__sidebar").find("li.have_sub_menu").removeClass("active");
//     $(this).toggleClass("active");
//   });
$(document).on("click", "#open__menu", function (e) {
  $("aside#pos__sidebar").addClass("active");
  $(".pos__modal__overlay").fadeIn(200);
});

// material icon init
feather.replace();

function escape_output(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace("'", "");
}

/**
 * Show and Hide Cart List and Product Item only for mobile devices
 */
$("#show_running_order").on("click", function () {
  $(".main_left").toggleClass("active");
  $(".overlayForCalculator").fadeToggle(100);
  if ($(this).attr("data-isActive") === "false") {
    $(this).attr("data-isActive", "true");
  } else {
    $(this).attr("data-isActive", "false");
  }
});

$("#show_cart_list").on("click", function () {
  $(".main_middle").slideDown(300);
  $(".main_right").slideUp(100);
});
$("#show_product").on("click", function () {
  $(".main_right").slideDown(300);
  $(".main_middle").slideUp(100);
});

$("#show_all_menu").on("click", function () {
  $(".all__menus").slideToggle(333);
});
// $(window).click(function (event) {
//   if ($(event.target).closest("#show_all_menu").length === 0) {
//     $(".all__menus").slideUp(333);
//   }
// });

$("#sale_hold_modal_order_details").on("click", function () {
  $(this).attr("data-selectedbtn", "selected");
  $("#sale_hold_modal_order_list").attr("data-selectedbtn", "unselected");

  $("#sale_hold_modal_order_details_list").fadeIn(300);
  $("#sale_hold_modal_order_info_list").fadeOut(0);
});
$("#sale_hold_modal_order_list").on("click", function () {
  $(this).attr("data-selectedbtn", "selected");
  $("#sale_hold_modal_order_details").attr("data-selectedbtn", "unselected");

  $("#sale_hold_modal_order_info_list").fadeIn(300);
  $("#sale_hold_modal_order_details_list").fadeOut(0);
});
/**
 * Recent Sales
 */
$("#recent_sales_order_details").on("click", function () {
  $(this).attr("data-selectedbtn", "selected");
  $("#recent_sales_order_list").attr("data-selectedbtn", "unselected");

  $("#recent_sales_order_details_list").fadeIn(300);
  $("#recent_sales_order_info_list").fadeOut(0);
});
$("#recent_sales_order_list").on("click", function () {
  $(this).attr("data-selectedbtn", "selected");
  $("#recent_sales_order_details").attr("data-selectedbtn", "unselected");

  $("#recent_sales_order_details_list").fadeOut(0);
  $("#recent_sales_order_info_list").fadeIn(300);
});

$(document).on("click", "#last_ten_feature_button", function (e) {
  remove_all_cart_future_info();

  $.ajax({
    url: base_url + "Sale/get_last_10_future_sales_ajax",
    method: "GET",
    success: function (response) {
      let orders = JSON.parse(response);
      let last_10_orders = "";
      let html_custom = ` `;
      for (let key in orders) {
        let order_name = "";
        if (orders[key].order_type == "1") {
          order_name = "A " + orders[key].sale_no;
        } else if (orders[key].order_type == "2") {
          order_name = "B " + orders[key].sale_no;
        } else if (orders[key].order_type == "3") {
          order_name = "C " + orders[key].sale_no;
        }
          let tables_booked = orders[key].orders_table_text;

        let phone_text_ = "";
        if (orders[key].phone) {
          phone_text_ = " (" + orders[key].phone + ")";
        }
        let bg_color = "";
        let ignore_status = "";
        if (orders[key].future_sale_status == 3) {
          bg_color = "#99e299";
          ignore_status = "No";
        }
        html_custom +=
          `<div data-ignore_status="` +
          ignore_status +
          `" style="background-color:` +
          bg_color +
          `" class="single_future_sale tbl_pointer_row_custom feuture_preview_row future_last_ten_custom_` +
          orders[key].id +
          `"  data-id="` +
          orders[key].id +
          `"  data-selected="unselected">
                                            <div class="item first_column column">` +
          order_name +
          `</div>
                                            <div class="item second_column column">` +
          orders[key].customer_name +
          phone_text_ +
          `</div>
                                            <div class="item third_column column">` +
          orders[key].sale_date +
          `</div>
                                        </div>`;
      }
      $(".detail_holder").empty();
      $(".detail_holder").prepend(html_custom);
    },
    error: function () {
      alert(a_error);
    },
  });
});

$(document).on("click", ".modal_hide", function () {
  $("#last_future_sale_id").val("");
  $(this).parent().parent().parent().removeClass("active").addClass("inActive");
  setTimeout(function () {
    $(".cus_pos_modal").removeClass("inActive");
  }, 1000);
  $(".pos__modal__overlay").fadeOut(300);
});

$(document).on("click", ".pos__modal__close", function () {
  $("#last_future_sale_id").val("");
  $(this).parent().parent().removeClass("active").addClass("inActive");
  setTimeout(function () {
    $(".cus_pos_modal").removeClass("inActive");
  }, 1000);
  $(".pos__modal__overlay").fadeOut(300);
});

$(document).on("click", ".pos__modal__overlay", function () {
  $(".pos__modal__overlay").fadeOut(300);
  $(".cus_pos_modal").removeClass("active");
});

$(document).on("click", "#draft_edit_modal", function () {
  let sale_id = $("#last_future_sale_id").val();
  if (sale_id > 0) {
    //get total items in cart
    let total_items_in_cart = $(".order_holder .single_order").length;

    if (total_items_in_cart > 0) {
      swal(
        {
          title: warning + "!",
          text: txt_err_pos_5,
          confirmButtonColor: "#3c8dbc",
          confirmButtonText: ok,
          showCancelButton: true,
        },
        function () {
          $(".order_holder").empty();
          get_details_of_a_particular_order(sale_id);
            UIkit.modal(document.querySelector('#open-future-sale-modal')).hide();
          remove_all_cart_future_info();
        }
      );
    } else {
      get_details_of_a_particular_order(sale_id);
        UIkit.modal(document.querySelector('#open-future-sale-modal')).hide();
      remove_all_cart_future_info();
    }
  } else {
    alertModal({modalName:"danger", normalTxt: please_select_open_order})
    // swal({
    //   title: warning + "!",
    //   text: please_select_open_order,
    //   confirmButtonText: ok,
    //   confirmButtonColor: "#b6d6f6",
    // });
  }
});
$(document).on("click", "#draft_edit_modal_invoice", function () {
  let sale_id = $("#last_future_sale_id").val();
  $("#print_type").val(1);
  let this_action = $(this);
  if (sale_id > 0) {
      UIkit.modal(document.querySelector('#open-future-sale-modal')).hide();

    $.ajax({
      url: base_url + "Sale/set_as_running_order",
      method: "POST",
      data: {
        sale_id: sale_id,
        status: 3,
        csrf_irestoraplus: csrf_value_,
      },
      success: function (response) {
        response = JSON.parse(response);
        $("#last_future_sale_id").val("");
        set_new_orders_to_view_future_add(sale_id);
        remove_all_cart_future_info();
      },
      error: function () {
        alert(a_error);
      },
    });
  } else {
    swal({
      title: warning + "!",
      text: please_select_order_to_proceed + "!",
      confirmButtonText: ok,
      confirmButtonColor: "#b6d6f6",
    });
  }
});
function remove_all_cart_future_info() {
  $("#last_10_waiter_id_").html("");
  $("#last_10_waiter_name_").html("");
  $("#last_10_customer_id_").html("");
  $("#last_10_customer_name_").html("");
  $("#last_10_table_id_").html("");
  $("#last_10_table_name_").html("");
  $("#last_10_order_type_").html("");
  $("#last_10_order_type_id_").html("");
  $(".all_items_vat_last_10_").html(Number(0).toFixed(ir_precision));
  $(".all_items_discount_last_10_").html(Number(0).toFixed(ir_precision));
  $(".delivery_charge_last_10_").html(Number(0).toFixed(ir_precision));
  $(".total_payable_last_10_").html(Number(0).toFixed(ir_precision));
  $(".recent_sale_modal_details_vat_").html(Number(0).toFixed(ir_precision));
  $(".item_order_details .modifier_item_details_holder").empty();
  $(".total_items_in_cart_last_10_").html("0");
  $(".sub_total_show_last_10_").html(Number(0).toFixed(ir_precision));
  $(".sub_total_last_10_").html(Number(0).toFixed(ir_precision));
  $(".total_item_discount_last_10_").html(Number(0).toFixed(ir_precision));
  $(".discounted_sub_total_amount_last_10_").html(
    Number(0).toFixed(ir_precision)
  );
  $(".sub_total_discount_last_10_").html(Number(0).toFixed(ir_precision));
  $(".sub_total_discount_amount_last_10_").html(
    Number(0).toFixed(ir_precision)
  );
}
$(document).on("click", ".feuture_preview_row", function () {
  //get sale id
  let sale_id = $(this).attr("data-id");
  $("#last_future_sale_id").val(sale_id);
  let this_a = $(this);
  $(".single_future_sale").each(function () {
    let ignore_status = $(this).attr("data-ignore_status");
    if (ignore_status != "No") {
      $(this).css("background-color", "white");
    }
  });
  let this_ignore_status = this_a.attr("data-ignore_status");
  if (this_ignore_status != "No") {
    this_a.css("background-color", "rgb(247, 247, 247)");
  }

  //get all info of sale based on sale_id
  $.ajax({
    url: base_url + "Sale/get_all_information_of_a_sale_ajax",
    method: "POST",
    data: {
      sale_id: sale_id,
      csrf_irestoraplus: csrf_value_,
    },
    success: function (response) {
      response = JSON.parse(response);
      let order_type = "";
      let order_type_id = 0;
      let invoice_type = "";
        let tables_booked = response.orders_table_text;
      if (response.order_type == 1) {
        order_type = "Dine In";
        order_type_id = 1;
        invoice_type = "A ";
      } else if (response.order_type == 2) {
        order_type = "Take Away";
        order_type_id = 2;
        invoice_type = "B ";
      } else if (response.order_type == 3) {
        order_type = "Delivery";
        order_type_id = 3;
        invoice_type = "C ";
      }
      $("#last_10_waiter_id_").html(response.waiter_id);
      $("#last_10_waiter_name_").html(response.waiter_name);
      $("#last_10_customer_id_").html(response.customer_id);
      $("#last_10_customer_name_").html(response.customer_name);
      $("#last_10_table_id_").html(response.table_id);
      $("#last_10_table_name_").html(response.orders_table_text);
      $("#last_10_order_type_").html(order_type);
      $("#last_10_order_type_id_").html(order_type_id);
      let draw_table_for_last_ten_sales_order = "";
      let draw_table_for_last_ten_sales_order_temp = "";

      for (let key in response.items) {
        //construct div
        let this_item = response.items[key];

        let selected_modifiers = "";
        let selected_modifiers_id = "";
        let selected_modifiers_price = "";
        let modifiers_price = 0;

        let total_modifier = this_item.modifiers.length;
        let i = 1;
        let item_id = this_item.food_menu_id;
        let draw_table_for_order_tmp_modifier_tax = "";
        for (let mod_key in this_item.modifiers) {
          let this_modifier = this_item.modifiers[mod_key];
          let modifier_id_custom = this_modifier.modifier_id;
          //get selected modifiers
          if (i == total_modifier) {
            selected_modifiers += this_modifier.name;
            selected_modifiers_id += this_modifier.modifier_id;
            selected_modifiers_price += this_modifier.modifier_price;
            modifiers_price = (
              parseFloat(modifiers_price) +
              parseFloat(this_modifier.modifier_price)
            ).toFixed(ir_precision);
          } else {
            selected_modifiers += this_modifier.name + ", ";
            selected_modifiers_id += this_modifier.modifier_id + ",";
            selected_modifiers_price += this_modifier.modifier_price + ",";
            modifiers_price = (
              parseFloat(modifiers_price) +
              parseFloat(this_modifier.modifier_price)
            ).toFixed(ir_precision);
          }
          let tax_information = "";
          // iterate over each item in the array
          tax_information = this_modifier.menu_taxes;
          tax_information = IsJsonString(tax_information)
            ? JSON.parse(tax_information)
            : "";
          draw_table_for_order_tmp_modifier_tax +=
            '<span class="item_vat_modifier ir_display_none item_vat_modifier_' +
            item_id +
            '" data-item_id="' +
            item_id +
            '"  data-modifier_price="' +
            this_modifier.modifier_price +
            '" data-modifier_id="' +
            modifier_id_custom +
            '" id="item_vat_percentage_table' +
            item_id +
            "" +
            modifier_id_custom +
            '">' +
            JSON.stringify(tax_information) +
            "</span>";
          i++;
        }
        let discount_value =
          this_item.menu_discount_value != ""
            ? this_item.menu_discount_value
            : "0.00";

        draw_table_for_last_ten_sales_order +=
          '<div class="focus-btn single_item_modifier" id="last_10_order_for_item_' +
          this_item.food_menu_id +
          '">';
        draw_table_for_last_ten_sales_order +=
          '<div class="first_portion">';
        draw_table_for_last_ten_sales_order +=
          '<span class="item_vat_hold ir_display_none" id="last_10_item_vat_percentage_table' +
          this_item.food_menu_id +
          '">' +
          this_item.menu_vat_percentage +
          "</span>";
        draw_table_for_last_ten_sales_order +=
          '<span class="item_discount_hold ir_display_none" id="last_10_item_discount_table' +
          this_item.food_menu_id +
          '">' +
          this_item.discount_amount +
          "</span>";
        draw_table_for_last_ten_sales_order +=
          '<span class="item_price_without_discount_hold ir_display_none" id="last_10_item_price_without_discount_' +
          this_item.food_menu_id +
          '">' +
          this_item.menu_price_without_discount +
          "</span>";
        draw_table_for_last_ten_sales_order +=
          '<div class="single_order_column_hold first_column column"><span id="last_10_item_name_table_' +
          this_item.food_menu_id +
          '">' +
          this_item.menu_name +
          "</span></div>";
        draw_table_for_last_ten_sales_order +=
          '<div class="single_order_column_hold second_column column">' +
          currency +
          ' <span id="last_10_item_price_table_' +
          this_item.food_menu_id +
          '">' +
          this_item.menu_unit_price +
          "</span></div>";
        draw_table_for_last_ten_sales_order +=
          '<div class="single_order_column_hold third_column column"><span id="last_10_item_quantity_table_' +
          this_item.food_menu_id +
          '">' +
          this_item.qty +
          "</span></div>";
        draw_table_for_last_ten_sales_order +=
          '<div class="single_order_column_hold forth_column column"><span class="hold_special_textbox" id="last_10_percentage_table_' +
          this_item.food_menu_id +
          '">' +
          discount_value +
          "</span></div>";
        draw_table_for_last_ten_sales_order +=
          '<div class="single_order_column_hold fifth_column column">' +
          currency +
          ' <span id="last_10_item_total_price_table_' +
          this_item.food_menu_id +
          '">' +
          this_item.menu_price_with_discount +
          "</span></div>";
        draw_table_for_last_ten_sales_order += "</div>";
        if (selected_modifiers != "") {
          draw_table_for_last_ten_sales_order +=
            '<div style="display: flex;justify-content: space-between;padding: 0px 35px 0px 14px;" class="second_portion">';
          draw_table_for_last_ten_sales_order +=
            '<span id="last_10_item_modifiers_id_table_' +
            this_item.food_menu_id +
            '" class="ir_display_none">' +
            selected_modifiers_id +
            "</span>";
          draw_table_for_last_ten_sales_order +=
            '<span id="last_10_item_modifiers_price_table_' +
            this_item.food_menu_id +
            '" class="ir_display_none">' +
            selected_modifiers_price +
            "</span>";
          draw_table_for_last_ten_sales_order +=
            '<div class="single_order_column_hold first_column column"><span class="modifier_txt_custom" id="last_10_item_modifiers_table_' +
            this_item.food_menu_id +
            '">' +
            selected_modifiers +
            "</span></div>";
          draw_table_for_last_ten_sales_order +=
            '<div class="single_order_column_hold second_column column">' +
            currency +
            ' <span id="last_10_item_modifiers_price_table_' +
            this_item.food_menu_id +
            '">' +
            modifiers_price +
            "</span></div>";
          draw_table_for_last_ten_sales_order += "</div>";
        }
        if (this_item.menu_note != "") {
          draw_table_for_last_ten_sales_order +=
            '<div class="third_portion">';
          draw_table_for_last_ten_sales_order +=
            '<div class="single_order_column_hold first_column column modifier_txt_custom" >' +
            note_txt +
            ': <span id="last_10_item_note_table_' +
            this_item.food_menu_id +
            '">' +
            this_item.menu_note +
            "</span></div>";
          draw_table_for_last_ten_sales_order += "</div>";
        }

        draw_table_for_last_ten_sales_order += "</div>";
      }
      //add to top
      $(".item_modifier_details .modifier_item_details_holder").empty();
      $(".item_modifier_details .modifier_item_details_holder").prepend(
        draw_table_for_last_ten_sales_order
      );
      let total_items_in_cart_with_quantity = 0;
      $(
        ".item_modifier_details .modifier_item_details_holder .single_item_modifier .first_portion .third_column span"
      ).each(function (i, obj) {
        total_items_in_cart_with_quantity =
          parseInt(total_items_in_cart_with_quantity) +
          parseInt($(this).html());
      });
      $(".total_items_in_cart_last_10_").html(
        total_items_in_cart_with_quantity
      );
      let sub_total_discount_last_10 =
        response.sub_total_discount_value != ""
          ? response.sub_total_discount_value
          : "0.00";
      $(".sub_total_show_last_10_").html(response.sub_total);
      $(".sub_total_last_10_").html(response.sub_total);
      $(".total_item_discount_last_10_").html(
        response.total_item_discount_amount
      );
      $(".discounted_sub_total_amount_last_10_").html(
        response.sub_total_discount_amount
      );
      $(".sub_total_discount_last_10_").html(sub_total_discount_last_10);
      $(".sub_total_discount_amount_last_10_").html(
        response.sub_total_with_discount
      );
      let total_vat_section_to_show = "";
      $.each(JSON.parse(response.sale_vat_objects), function (key, value) {
        total_vat_section_to_show +=
          '<span class="tax_field_order_details" id="tax_field_order_details_' +
          value.tax_field_id +
          '">' +
          value.tax_field_type +
          ":  " +
          currency +
          ' <span class="tax_field_amount_order_details" id="tax_field_amount_order_details_' +
          value.tax_field_id +
          '">' +
          Number(value.tax_field_amount).toFixed(ir_precision) +
          "</span></span>";
      });
      $(".all_items_vat_last_10_").html(total_vat_section_to_show);
      $(".all_items_discount_last_10_").html(
        Number(response.total_discount_amount).toFixed(ir_precision)
      );

      if (Number(response.delivery_charge_actual_charge)) {
        $(".delivery_charge_last_10_").html(response.delivery_charge);
      } else {
        $(".delivery_charge_last_10_").html((0).toFixed(ir_precision));
      }
      $(".total_payable_last_10_").html(
        Number(response.total_payable).toFixed(ir_precision)
      );
      $(".recent_sale_modal_details_vat_").html(
        Number(response.vat).toFixed(ir_precision)
      );
    },
    error: function () {
      alert(a_error);
    },
  });
});

$(document).on("click", "#draft_delete_modal", function (e) {
  let sale_id = $("#last_future_sale_id").val();
  let this_action = $(this);
  if (sale_id > 0) {
    if (role != "Admin") {
      swal({
        title: warning,
        text: delete_only_for_admin,
        confirmButtonText: ok,
        confirmButtonColor: "#b6d6f6",
      });
      return false;
    } else {
      swal(
        {
          title: warning + "!",
          text: sure_remove_this_order,
          confirmButtonColor: "#3c8dbc",
          confirmButtonText: ok,
          showCancelButton: true,
        },
        function () {
          $.ajax({
            url: base_url + "Sale/set_as_running_order",
            method: "POST",
            data: {
              sale_id: sale_id,
              status: 1,
              csrf_irestoraplus: csrf_value_,
            },
            success: function (response) {
              response = JSON.parse(response);
              $("#last_future_sale_id").val("");
              this_action
                .parent()
                .parent()
                .parent()
                .removeClass("active")
                .addClass("inActive");
              setTimeout(function () {
                $(".cus_pos_modal").removeClass("inActive");
              }, 1000);
              $(".pos__modal__overlay").fadeOut(300);
              remove_all_cart_future_info();
            },
            error: function () {
              alert(a_error);
            },
          });
        }
      );
    }
  } else {
    swal({
      title: warning + "!",
      text: please_select_an_order,
      confirmButtonText: ok,
      confirmButtonColor: "#b6d6f6",
    });
  }
});

setTimeout(function () {
  $("#show_tables_modal2").show();
}, 1000);
/**
 * All Script For All Mobile Devices
 */
$(window).on("load", function () {
  if ($(this).width() < 600) {
    $("#calculator_main").css("left", 10 + "px");
  }
});

$(window).on("resize", function () {
  if ($(this).width() < 600) {
    $("#calculator_main").css("left", 10 + "px");
  }
});
/**
 * Working This function only for mobile devices
 */
function forMobileDevice() {
  if (window.innerWidth < 600) {
    $(document).on("click", ".draft-sale .single_hold_sale", function () {
      $("#sale_hold_modal_order_details_list").fadeIn(300);
      $("#sale_hold_modal_order_info_list").fadeOut(200);
    });
    $(document).on("click", ".recent-sales .single_last_ten_sale", function () {
      $("#recent_sales_order_details_list").fadeIn(300);
      $("#recent_sales_order_info_list").fadeOut(200);
    });
  }
}
forMobileDevice();

$(window).on("load", function () {
  $(".preloader").fadeOut(500);
});
function checkIsDiplomat() {
  $(".order_holder .single_order").each(function (i, obj) {
    let item_id = Number($(this).attr("id").substr(15));
    let foundItems = search_by_menu_id(item_id, window.items);
    let sale_price_tmp = Number(foundItems[0].sale_price_tmp);
    let price = Number(foundItems[0].price);
    let tax_type = Number($("#tax_type").val());
    let is_modify = '';
      if ($(".order_table_holder .order_holder > .modification").length > 0) {
          is_modify = 1;
      }

    if (tax_type == 2 && is_modify=='') {
        let set_active_tax = $(".set_active_tax").parent().find(".active_tax");
        if (set_active_tax.length) {
        $(this)
          .find("#item_price_table_" + item_id)
          .html(sale_price_tmp.toFixed(ir_precision));
        let item_quantity = Number(
          $(this)
            .find("#item_quantity_table_" + item_id)
            .html()
        );
        let updated_total_price = (
          parseFloat(item_quantity) * parseFloat(sale_price_tmp)
        ).toFixed(ir_precision);

        //update total price of this item to view
        $(this).find(".item_price_without_discount").html(updated_total_price);
      } else {
        $(this)
          .find("#item_price_table_" + item_id)
          .html(price.toFixed(ir_precision));
        let item_quantity = Number(
          $(this)
            .find("#item_quantity_table_" + item_id)
            .html()
        );
        let updated_total_price = (
          parseFloat(item_quantity) * parseFloat(price)
        ).toFixed(ir_precision);

        //update total price of this item to view
        $(this).find(".item_price_without_discount").html(updated_total_price);
      }
    }
  });
  setTimeout(function () {
    do_addition_of_item_and_modifiers_price();
  }, 100);
}
$(document).on("click", ".is_diplomat", function (e) {
    let remove_vat = 0;
    let text_1 = $(this).attr("data-text_1");
    let text_2 = $(this).attr("data-text_2");
    let check_value = $(this).attr("data-check_value");
    let set_active_tax = $(".set_active_tax").parent().find(".active_tax");
    if (set_active_tax.length) {
        remove_vat = $("#show_vat_modal").text();
        $("#remove_vat").val(remove_vat);
        $(this).html(text_2);
        $(this).attr("data-check_value",2);
        $("#is_diplomat_hidden").val(2);
    }else{
      if(check_value==1){
          alertModal({modalName:"danger", normalTxt: "Please click on Tax row before remove"})
      }else{
          $(this).attr("data-check_value",1);
          $(this).html(text_1);
          $("#is_diplomat_hidden").val(1);
      }
    }
  checkIsDiplomat();
});

$(document).on("click", ".get_area_table", function (e) {
  let id = $(this).attr("data-id");
  if (id == "all") {
    $(".area_all_table").show(300);
  } else {
    $(".area_all_table").hide();
    $(".area_table_" + id).show(300);
  }
});
$(document).on("click", ".select_payment_type", function (e) {
   let amount = Number($("#payment_amount_pad").val());
   if(!amount){
       $("#payment_amount_pad").focus();
   }else{
       UIkit.modal(document.querySelector('#open-finalize-payment-type')).show();
   }
});
$(document).on("click", ".remove_payment_type", function (e) {
    let select_running_order_obj = $(".check_exist_payment").hasClass("active_check_exist_payment");
    if (select_running_order_obj) {
        $(".check_exist_payment").parent().find(".active_check_exist_payment").remove();
        calculate_create_invoice_modal();
    }
});
$(document).on("click", ".submit_payment_type", function (e) {
    let select_running_order_obj = $(".get_payment").hasClass("active_payment");
    if (select_running_order_obj) {
        let id = Number($(".get_payment").parent().parent().find(".active_payment").attr("data-id"));
        let exist_status = true;
        $(".check_exist_payment").each(function () {
            let this_id = Number($(this).attr("data-id"));
            alert(id);
            alert(this_id);
            if(this_id==id){
                exist_status = false;
            }
        });
        if(exist_status == true){
            let payment_name = $(".get_payment").parent().parent().find(".active_payment").text();
            let payment_amount_pad = $("#payment_amount_pad").val();
            let html = '<div class="value check_exist_payment" data-id="'+id+'">\n' +
                '                        <span>'+payment_name+'</span>\n' +
                '                        <span  data-payment_id="'+id+'" class="payment_method">'+Number(payment_amount_pad).toFixed(2)+'</span>\n' +
                '                    </div>';
            $(".put_payment_list").append(html);
             calculate_create_invoice_modal();
            $(".get_payment").removeClass("active_payment");
            UIkit.modal(document.querySelector('#finalize_order_modal')).show();
        }else{
            alertModalCustom({modalName:"danger_update", normalTxt: "Your selected payment already exist.",re_open_modal:"target: #open-finalize-payment-type"})
        }

    }else{
        alertModalCustom({modalName:"danger_update", normalTxt: "Please select payment type",re_open_modal:"target: #open-finalize-payment-type"})
    }
});

$(document).on("click", "#bill_show_details", function (e) {
  if (
    $(".holder .order_details > .single_order[data-selected=selected]").length >
    0
  ) {
    let sale_id = $(
      ".holder .order_details .single_order[data-selected=selected]"
    )
      .attr("id")
      .substr(6);
    $.ajax({
      url: base_url + "Sale/getBillDetails",
      method: "POST",
      data: { sale_id: sale_id },
      dataType: "json",
      success: function (response) {
        if (response) {
          $(".show_bill_modal_content").html(response);
          $(".pos__modal__overlay").fadeIn(300);
          $("#bill_modal").addClass("active");
        }
      },
      error: function () {},
    });
  } else {
    alertModal({modalName:"danger", normalTxt: please_select_open_order})
    // swal({
    //   title: warning + "!",
    //   text: please_select_open_order,
    //   confirmButtonText: ok,
    //   confirmButtonColor: "#b6d6f6",
    // });
  }
});

$(".have_sub_menu").on("click",".open-trigger", function () {
    $(this).parent().toggleClass("active");
  });

$(".have_sub_sub_menu").on("click",".open-trigger", function () {
    $(this).toggleClass("active");
  });

// Check or Uncheck All checkboxes
$(document).on('click', '.checkbox_userAll', function(e){
    let checked = $(this).is(':checked');
    if (checked) {
        $(".checkbox_user").each(function () {
            let id = $(this).attr('data-id');
            $(this).prop("checked", true);
            $("#order_merge_"+id).val(id);
        });
        $(".checkbox_userAll").prop("checked", true);
    } else {
        $(".checkbox_user").each(function () {
            let id = $(this).attr('data-id');
            $(this).prop("checked", false);
            $("#order_merge_"+id).val('');
        });
        $(".checkbox_userAll").prop("checked", false);
    }
});
$(document).on('click', '.checkbox_user', function(e){
    let id = $(this).attr('data-id');
    if ($(".checkbox_user").length == $(".checkbox_user:checked").length) {
        $(".checkbox_userAll").prop("checked", true);
        if($(this).is(':checked')){
            $("#order_merge_"+id).val(id);
        }else{
            $("#order_merge_"+id).val('');
        }
    } else {
        $(".checkbox_userAll").prop("checked", false);
        if($(this).is(':checked')){
            $("#order_merge_"+id).val(id);
        }else{
            $("#order_merge_"+id).val('');
        }
    }
});
$(document).on('click', '.set_active_tax', function(e){
    if($(this).hasClass('active_tax')){
      $(this).removeClass('active_tax');
    }else{
        $(this).addClass('active_tax');
    }
});


$(document).on('focus', '.easy-put', function(e){
    let this_field_id = $(this).attr("id");
    let this_value = Number($(this).val());
    if(!this_value){
        this_value = '';
    }
    show_easy_numpad(this_field_id,this_value);
});
function show_easy_numpad(this_field_id,this_value) {
    var easy_numpad = `
        <div class="easy-numpad-frame" id="easy-numpad-frame">
            <div class="easy-numpad-container">
                <div class="easy-numpad-output-container">
                    <p class="easy-numpad-output" id="easy-numpad-output">`+this_value+`</p>
                </div>
                <div class="easy-numpad-number-container">
                    <table>
                        <tr>
                            <td><a href="7" onclick="easynum()">7</a></td>
                            <td><a href="8" onclick="easynum()">8</a></td>
                            <td><a href="9" onclick="easynum()">9</a></td>
                            <td><a href="Del" class="del not-number" id="del" onclick="easy_numpad_del()"><i class="bi bi-backspace-fill"></i></a></td>
                        </tr>
                        <tr>
                            <td><a href="4" onclick="easynum()">4</a></td>
                            <td><a href="5" onclick="easynum()">5</a></td>
                            <td><a href="6" onclick="easynum()">6</a></td>
                            <td><a href="Clear" class="clear not-number" id="clear" onclick="easy_numpad_clear()">Clear</a></td>
                        </tr>
                        <tr>
                            <td><a href="1" onclick="easynum()">1</a></td>
                            <td><a href="2" onclick="easynum()">2</a></td>
                            <td><a href="3" onclick="easynum()">3</a></td>
                            <td><a href="Cancel" class="cancel not-number" id="cancel" onclick="easy_numpad_cancel()">Cancel</a></td>
                        </tr>
                        <tr>
                            <td colspan="2" onclick="easynum()"><a href="0">0</a></td>
                            <td onclick="easynum()"><a href=".">.</a></td>
                            <td><a href="Done" class="done not-number" id="done" onclick="easy_numpad_done('`+this_field_id+`')">Done</a></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    `;
    $('body').append(easy_numpad);
}

function easy_numpad_close() {
    $('#easy-numpad-frame').remove();
}

function easynum() {
    event.preventDefault();

    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
    if (navigator.vibrate) {
        navigator.vibrate(60);
    }

    var easy_num_button = $(event.target);
    var easy_num_value = easy_num_button.text();
    $('#easy-numpad-output').append(easy_num_value);
}
function easy_numpad_del() {
    event.preventDefault();
    var easy_numpad_output_val = $('#easy-numpad-output').text();
    var easy_numpad_output_val_deleted = easy_numpad_output_val.slice(0, -1);
    $('#easy-numpad-output').text(easy_numpad_output_val_deleted);
}
function easy_numpad_clear() {
    event.preventDefault();
    $('#easy-numpad-output').text("");
}
function easy_numpad_cancel() {
    event.preventDefault();
    $('#easy-numpad-frame').remove();
}
function checkDiscountType1() {
    let set_discount_type = $(".set_discount_type").parent().find(".selected").length;
    let this_value = '';

    if (set_discount_type) {
        this_value = $(".set_discount_type").parent().find(".selected").attr("data-value");
    }

    let sub_total_discount_value = $("#sub_total_discount1").val();

    if (this_value == "percentage") {
        if (parseFloat(sub_total_discount_value)) {
            $("#sub_total_discount").val(
                parseFloat(sub_total_discount_value) + "%"
            );
            do_addition_of_item_and_modifiers_price();
        }
    } else if(this_value == "fixed") {
        if (parseFloat(sub_total_discount_value)) {
            $("#sub_total_discount").val(parseFloat(sub_total_discount_value));
            do_addition_of_item_and_modifiers_price();
        }else{
            $("#sub_total_discount").val(parseFloat(0));
            do_addition_of_item_and_modifiers_price();
        }
    }
}
function easy_numpad_done(this_field_id) {
    event.preventDefault();
    /* var easy_numpad_output_val = $('#easy-numpad-output').text();
     $('.easy-put').val(easy_numpad_output_val);*/

    var easy_numpad_output_val =  $('#easy-numpad-output').text();
    let id_name = "#"+this_field_id;
    $(id_name).val(Number(easy_numpad_output_val));
    easy_numpad_close();

    if(this_field_id == "sub_total_discount1" || this_field_id == "delivery_charge"){
        checkDiscountType1();
        do_addition_of_item_and_modifiers_price();
    }
    if(this_field_id == "modal_discount"){
        update_all_total_price();
    }
    if(this_field_id == "given_amount_input"){
        let this_value = $.trim($("#given_amount_input").val());
        if (isNaN(this_value)) {
            $("#given_amount_input").val("");
        }
        //get the value of the delivery charge amount
        let given_amount = this_value != "" ? this_value : 0;

        //check wether value is valid or not
        remove_last_two_digit_without_percentage(given_amount, $("#given_amount_input"));

        given_amount = this_value != "" ? $("#given_amount_input").val() : 0;
        let total_payable = $("#finalize_total_payable").html();
        let total_change = (
            parseFloat(given_amount) - parseFloat(total_payable)
        ).toFixed(ir_precision);
        if(given_amount){
            $("#change_amount_input").val(total_change);
        }else{
            $("#change_amount_input").val('');
        }
    }


}
function checkSelected() {
    if($(".focus-cart").hasClass("selected")){
        return true;
    }else{
        alertModal({modalName:"danger", normalTxt: "Please select a item row before increase/decrease the quantity"});
        return false;
    }
}
const bodyElement = $("body");
bodyElement.on("click", ".qty_minus", function () {
    if(checkSelected()){
        let qty_container = Number($(".qty_container").val());
        let temp_qty = qty_container-1;
        $(".qty_container").val(temp_qty);
        $(".focus-cart").parent().find(".selected").find(".qty_item_custom").text(temp_qty);
        if(qty_container==1){
            $(".focus-cart").parent().find(".selected").remove();
        }
        //get this item's unit price
        let unit_price = $(".focus-cart").parent().find(".selected").find(".second_column span")
            .html();

        //increase item's total price based on unit price and quantity
        let updated_total_price = (
            parseFloat(temp_qty) * parseFloat(unit_price)
        ).toFixed(ir_precision);

        //update total price of this item to view
        $(".focus-cart").parent().find(".selected").find(".item_price_without_discount")
            .html(updated_total_price);
        //update quantity of this item to view

        do_addition_of_item_and_modifiers_price();
    }
});

$("body").on("click", ".get_active_customer", function () {
    let customer_id = $(this).attr('data-id');
    $("#walk_in_customer").val(customer_id);
    $(".get_active_customer").removeClass("active_customer");
    $(this).addClass("active_customer");
    UIkit.modal("#customer-choose-modal").show();
});
$("body").on("click", ".get_active_waiter", function () {
    let select_waiter = $(this).attr('data-id');
    $("#select_waiter").val(select_waiter);

    $(".get_active_waiter").removeClass("active_waiter");
    $(this).addClass("active_waiter");
    UIkit.modal("#open-waiter-list").hide();
});

$(document).on("keyup", ".search_customer", function (e) {
    let string = $(this).val().toLowerCase();
    $(".get_active_customer").each(function (i, obj) {
        let customer_name_phone = $(this).text().toLowerCase();
        if (
            customer_name_phone.includes(string)
        ) {
            $(this).parent().css("display", "block");
        } else {
            $(this).parent().css("display", "none");
        }
    });
});


$(document).on("click", ".get_waiters", function () {
    $.ajax({
        url: base_url + "Sale/getWaiters",
        method: "GET",
        success: function (response) {
            let data = JSON.parse(response);
            console.log(data)
            $('.waiter-list-parent').pagination({
                showNext: false,
                showPrevious: false,
                showPageNumbers: true,
                pageRange: null,
                pageSize: 16,
                dataSource: data,
                ajax: {
                    beforeSend: function () {
                        $('.waiter-list-parent').html('Loading data...');
                    }
                },
                callback: function (response, pagination) {
                    let data_html = "";
                    let select_waiter = $("#select_waiter").val();
                    for (let key in response) {
                        let phone = '';
                        let active_customer  = '';
                        if(response[key].id==1 && select_waiterr==1){
                            active_customer = 'active_customer';
                        }
                        if(response[key].phone){
                            phone ='('+response[key].phone+')';
                        }
                        data_html += '<div><button style="height: 77px;" id="waiter_active_'+response[key].id+'" class="secondary-btn get_active_waiter '+active_customer+'" data-id="'+response[key].id+'">'+response[key].full_name+' '+phone+'</button></div>';
                    }
                    $(".waiter-list").html(data_html);
                }
            })
        },
        error: function () {

        },
    });
});
bodyElement.on("click", ".qty_plus", function () {
    if(checkSelected()){
        let qty_container = Number($(".qty_container").val());
        let temp_qty = qty_container+1;
        $(".qty_container").val(temp_qty);
        $(".focus-cart").parent().find(".selected").find(".qty_item_custom").text(temp_qty);


        //get this item's unit price
        let unit_price = $(".focus-cart").parent().find(".selected").find(".second_column span")
            .html();

        //increase item's total price based on unit price and quantity
        let updated_total_price = (
            parseFloat(temp_qty) * parseFloat(unit_price)
        ).toFixed(ir_precision);

        //update total price of this item to view
        $(".focus-cart").parent().find(".selected").find(".item_price_without_discount")
            .html(updated_total_price);
        //update quantity of this item to view

        do_addition_of_item_and_modifiers_price();
    }
});

$(document).on("click", ".reason_parent", function (e) {
     $(".reasons").prop('checked',false);
    $(this).find(".reasons").prop('checked',true);

    $(".reason_parent").parent().removeClass("active_reasons");
    $(this).parent().addClass("active_reasons");
});

$(document).on("click", ".void_reason:visible", function (e) {
    $(".void_checkbox").prop('checked',false);
    $(".void_reason").parent().removeClass("active_reasons");
    $(this).find(".void_checkbox").prop('checked',true);
    $(this).parent().addClass("active_reasons");
});

$(document).on("click", ".active_pagination", function (e) {
    let this_id = $(this).attr("data-num");
    $(".set_active_div").hide();
    $("#set_active_div"+this_id).show();
    $(".active_pagination").removeClass("active");
    $(this).addClass("active");

});
$(document).on("click", ".active_pagination_vr", function (e) {
    let this_id = $(this).attr("data-num");
    $(".vr01_modal_class").hide();
    $(".vr01_modal_class"+this_id).show();
    $(".active_pagination_vr").removeClass("active");
    $(this).addClass("active");
});
$(document).on("click", ".active_pagination_modifier", function (e) {
    let this_id = $(this).attr("data-num");
    $(".modal_modifiers").hide();
    $(".modal_modifiers"+this_id).show();
    $(".active_pagination_modifier").removeClass("active");
    $(this).addClass("active");
});