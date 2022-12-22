
// web7 start

var register_report_datatable, datatable_food_sale, datatable_daily_sale, datatable_detailed_sale,datatable_stock_report,datatable_alert_stock,datatable_kitchen_performance,attendance_datatable,customer_due_datatable,supplier_due_datatable,food_menu_sale_cat_datatable,consumption_menus_datatable,consumption_modifier_datatable,supplier_report_datatable,supplier_due_report_datatable,customer_report_datatable,customer_due_report_datatable,daily_purchase_datatable,daily_summary_report_expenses_datatable,daily_summary_report_supplier_due_datatable,daily_summary_report_customer_due_datatable,daily_summary_report_wastes_datatable,sale_report_datatable;

var supplier_due_expenses_datatable,datatable_expenses_stock_report,datatable_expenses_alert_stock,waste_expenses_report_datatable,purchase_report_datatable,transfers_report_datatable,expense_report_datatable,food_stock_expenses_datatable,food_menu_datatable,units_datatable,ingredients_datatable,modifiers_datatable,food_menu_categories_datatable,ingredient_categories_datatable,suppliers_datatable,expense_datatable,payment_methods_datatable,tables_datatable,customer_due_expenses_datatable,manage_user_datatable,attendances_datatables;

function report_section_get(evt,section_name){
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	   tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	   tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(section_name).style.display = "block";
	evt.currentTarget.className += " active";
  jQuery(".section_employee_user").empty();
}

function master_section_get(evt,section_name){
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
     tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
     tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(section_name).style.display = "block";
  evt.currentTarget.className += " active";

  jQuery(".section_employee_user").empty();

}

localStorage.setItem("paginationActivePage", 1);

// var jQuery = $.noConflict(); // avoid conflict with other frameworks also using the dollar sign

jQuery(document).ready(function () {

    // jQuery("#register_report_tab").trigger("click");

    jQuery('.graph_name').on('click',function(){
        var graphname = jQuery(this).data('graphname');
        // console.log(graphname);

        jQuery("#graphname_value").html("<i class='fa fa-refresh fa-spin'></i> Please wait...! ");

        setTimeout(function(){ 
          jQuery("#graphname_value").text(graphname);
        }, 800);


    });

    jQuery('.checkbox_userAll').on('click',function(){
        jQuery(".checkbox_user").trigger("click");
    });

    jQuery('.checkbox_user').on('click',function(){

        var get_count = jQuery(this).attr('data-check-user-count');

        if(jQuery(this).is(":checked") == true){
            jQuery(".check_user_count_"+get_count).removeAttr('disabled');
            jQuery(".check_user_count_"+get_count).val('1');
         }
         if (!jQuery(this).is(":checked")) {
            jQuery(".check_user_count_"+get_count).attr('disabled', 'disabled');
            jQuery(".check_user_count_"+get_count).val('');
         }

    });

    console.log('custom min js load . . .');

    jQuery(document).on('click', '#logout-btn', function() {
        localStorage.setItem('active_menu', 1);  
    });

    var BASEURL = jQuery("#base_url_").val();

    jQuery(document).on( 'click', '#delete_btn_sp_due', function () { 
      var dataid = this.getAttribute('data-id');
      swal({
        title: "Are you sure?",
        text: "You will not be able to recover this supplier payment!",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "Yes, Delete it!",
        cancelButtonText: "No, Cancel pls!",
        closeOnConfirm: false,
        closeOnCancel: false
      },
      function(isConfirm) {
        if (isConfirm) {
          jQuery.ajax({
                url: BASEURL+'SupplierPayment/deleteSupplierPaymentNew',
                dataType: "json",
                type: "Post", 
                data: { dataid : dataid },
                success: function (data) {
                    console.log(data);  
                    if(data == '1'){
                        swal("Deleted!", "Selected supplier payment has been deleted.", "success");
                        supplier_due_datatable.ajax.reload();
                    }
                }, 
            }); 
        } else {
          swal("Cancelled", "Your delete request has been cancelled :)", "error");
        }
      });
    });

    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      /* your code here */
    } else {
        jQuery('.main-sidebar .sidebar-toggle .inner-circle').click();
    }

    console.log("---------- url ----------");
    console.log(BASEURL + "Report/registerReportNew");

    register_report_datatable = jQuery('#register_report_datatable').DataTable({ 
        responsive: true,
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
        buttons: [
              {
                extend: "print",
                text: '<i class="fa fa-print"></i> Print',
                titleAttr: "print",
              },
              {
                extend: "copyHtml5",
                text: '<i class="fa fa-files-o"></i> Copy',
                titleAttr: "Copy",
              },
              {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel-o"></i> Excel',
                titleAttr: "Excel",
              },
              {
                extend: "csvHtml5",
                text: '<i class="fa fa-file-text-o"></i> CSV',
                titleAttr: "CSV",
              },
              {
                extend: "pdfHtml5",
                text: '<i class="fa fa-file-pdf-o"></i> PDF',
                titleAttr: "PDF",
              },
            ],
        language: {
          paginate: {
            previous: "<i class='fa fa-chevron-left'></i>",
            next: "<i class='fa fa-chevron-right'></i>",
          },
        },
        "ajax" : {
            url : BASEURL + "Report/registerReportNew",
            type : "POST",
            data: {
                filter_data : function(){ return $("#section_one_form").serialize(); } 
            },
        },
        // scrollX: true,
          // paging: false,
        // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [ 
            {data : "key"},
            {data : "opening_balance_date_time"},
            {data : "opening_balance"},
            {data : "sale_paid_amount"},
            {data : "customer_due_receive"},
            {data : "closing_balance_date_time"},
            {data : "closing_balance"},
            {data : "html_p"},
         ]
    });

    jQuery("#section_one_form").submit(function(e){
        e.preventDefault();
        register_report_datatable.ajax.reload();
    });

    // food sale data table and filter
    datatable_food_sale = jQuery('#datatable_food_sale').DataTable({
        responsive: true,
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
        buttons: [
              {
                extend: "print",
                text: '<i class="fa fa-print"></i> Print',
                titleAttr: "print",
              },
              {
                extend: "copyHtml5",
                text: '<i class="fa fa-files-o"></i> Copy',
                titleAttr: "Copy",
              },
              {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel-o"></i> Excel',
                titleAttr: "Excel",
              },
              {
                extend: "csvHtml5",
                text: '<i class="fa fa-file-text-o"></i> CSV',
                titleAttr: "CSV",
              },
              {
                extend: "pdfHtml5",
                text: '<i class="fa fa-file-pdf-o"></i> PDF',
                titleAttr: "PDF",
              },
            ],
            language: {
              paginate: {
                previous: "<i class='fa fa-chevron-left'></i>",
                next: "<i class='fa fa-chevron-right'></i>",
              },
            },
        "ajax" : {
            url : BASEURL + "Report/foodMenuSalesNew",
            type : "POST",
            data: {
                filter_data : function(){ return $("#food_sale_form").serialize(); } 
            },
        }, 
          // paging: false,
        // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [ 
            {data : 'id'},
            {data : "code"},
            {data : "menu_name"}, 
            {data : "totalQty"},
         ]
    });

    jQuery("#food_sale_form").submit(function(e){
        e.preventDefault();
        datatable_food_sale.ajax.reload();
    });
 
    // food sale data table and filter
    daily_purchase_datatable = jQuery('#daily_purchase_datatable').DataTable({
        responsive: true,
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
          language: {
            paginate: {
              previous: "<i class='fa fa-chevron-left'></i>",
              next: "<i class='fa fa-chevron-right'></i>",
            },
          },
        "ajax" : {
            url : BASEURL + "Report/dailySummaryReportNew",
            type : "POST",
            data: {
                filter_data : function(){ return $("#daily_summary_report_form").serialize(); } 
            },
        }, 
          // paging: false,
        // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [ 
            {data : 'sn'},
            {data : "supplier_id"},
            {data : "reference_no"}, 
            {data : "grand_total"},
            {data : "paid"},
            {data : "due"},
         ],
        "drawCallback": function (settings) {
          var api = this.api();
          var json = api.ajax.json();
          if (json != undefined) {
            html = "<tr><td>&nbsp;</td><td>&nbsp;</td><td class='ir_fw_txt_right'>Sum</td><td> $"+json.sum_of_gtotal+" </td><td> $"+json.sum_of_paid+"</td><td> $"+json.sum_of_due+"</td></tr>";
            $("#daily_purchase_datatable>tbody").append(html);
          }
        },
    });

    daily_summary_report_sales_datatable = jQuery('#daily_summary_report_sales_datatable').DataTable({
        responsive: true,
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
          language: {
            paginate: {
              previous: "<i class='fa fa-chevron-left'></i>",
              next: "<i class='fa fa-chevron-right'></i>",
            },
          },
        "ajax" : {
            url : BASEURL + "Report/dailySummaryReportSales",
            type : "POST",
            data: {
                filter_data : function(){ return $("#daily_summary_report_form").serialize(); } 
            },
        }, 
          // paging: false,
        // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [ 
            {data : 'sn'},
            {data : "sale_no"},
            {data : "order_type"}, 
            {data : "table_id"},
            {data : "customer_id"},
            {data : "total_payable"},
            {data : "total_discount_amount"},
            {data : "paid_amount"},
            {data : "due_amount"},
         ],
        "drawCallback": function (settings) {
          var api = this.api();
          var json = api.ajax.json();
          if (json != undefined) {

            html = "<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td class='ir_fw_txt_right'>Sum</td><td> $"+json.sum_of_stotal_payable+"</td><td>$"+json.sum_of_sdisc_actual+"</td><td>$"+json.sum_of_spaid_amount+"</td><td>$"+json.sum_of_sdue_amount+"</td></tr>";

            // html = "<tr><td>&nbsp;</td><td>&nbsp;</td><td class='ir_fw_txt_right'>Sum</td><td> $"+json.sum_of_gtotal+" </td><td> $"+json.sum_of_paid+"</td><td> $"+json.sum_of_due+"</td></tr>";
            $("#daily_summary_report_sales_datatable>tbody").append(html);
          }
        },
    });

    daily_summary_report_expenses_datatable = jQuery('#daily_summary_report_expenses_datatable').DataTable({
        responsive: true,
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
          language: {
            paginate: {
              previous: "<i class='fa fa-chevron-left'></i>",
              next: "<i class='fa fa-chevron-right'></i>",
            },
          },
        "ajax" : {
            url : BASEURL + "Report/dailySummaryReportExpenses",
            type : "POST",
            data: {
                filter_data : function(){ return $("#daily_summary_report_form").serialize(); } 
            },
        }, 
          // paging: false,
        // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [ 
            {data : "sn"},
            {data : "amount"},
            {data : "category_id"}, 
            {data : "employee_id"},
            {data : "note"},
         ],
        "drawCallback": function (settings) {
          var api = this.api();
          var json = api.ajax.json();
          if (json != undefined) {
            html = "<tr><td class='ir_fw_txt_right'> Sum </td><td>&nbsp; $"+json.sum_of_eamount+"</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>";
            $("#daily_summary_report_expenses_datatable>tbody").append(html);
          }
        },
    });

    daily_summary_report_supplier_due_datatable = jQuery('#daily_summary_report_supplier_due_datatable').DataTable({
        responsive: true,
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
          language: {
            paginate: {
              previous: "<i class='fa fa-chevron-left'></i>",
              next: "<i class='fa fa-chevron-right'></i>",
            },
          },
        "ajax" : {
            url : BASEURL + "Report/dailySummaryReportSupplierDue",
            type : "POST",
            data: {
                filter_data : function(){ return $("#daily_summary_report_form").serialize(); } 
            },
        }, 
          // paging: false,
        // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [ 
            {data : "sn"},
            {data : "amount"},
            {data : "supplier_id"}, 
            {data : "note"},
         ],
        "drawCallback": function (settings) {
          var api = this.api();
          var json = api.ajax.json();
          if (json != undefined) {
            html = "<tr><td class='ir_fw_txt_right'> Sum </td><td>&nbsp; $"+json.sum_of_eamount+"</td><td>&nbsp;</td><td>&nbsp;</td></tr>";
            $("#daily_summary_report_supplier_due_datatable>tbody").append(html);
          }
        },
    });

    daily_summary_report_customer_due_datatable = jQuery('#daily_summary_report_customer_due_datatable').DataTable({
        responsive: true,
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
          language: {
            paginate: {
              previous: "<i class='fa fa-chevron-left'></i>",
              next: "<i class='fa fa-chevron-right'></i>",
            },
          },
        "ajax" : {
            url : BASEURL + "Report/dailySummaryReportCustomerDue",
            type : "POST",
            data: {
                filter_data : function(){ return $("#daily_summary_report_form").serialize(); } 
            },
        }, 
          // paging: false,
        // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [ 
            {data : "sn"},
            {data : "amount"},
            {data : "customer_id"}, 
            {data : "note"},
         ],
        "drawCallback": function (settings) {
          var api = this.api();
          var json = api.ajax.json();
          if (json != undefined) {
            html = "<tr><td class='ir_fw_txt_right'> Sum </td><td>&nbsp; $"+json.sum_of_eamount+"</td><td>&nbsp;</td><td>&nbsp;</td></tr>";
            $("#daily_summary_report_customer_due_datatable>tbody").append(html);
          }
        },
    });

    daily_summary_report_wastes_datatable = jQuery('#daily_summary_report_wastes_datatable').DataTable({
        responsive: true,
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
          language: {
            paginate: {
              previous: "<i class='fa fa-chevron-left'></i>",
              next: "<i class='fa fa-chevron-right'></i>",
            },
          },
        "ajax" : {
            url : BASEURL + "Report/dailySummaryReportwastes",
            type : "POST",
            data: {
                filter_data : function(){ return $("#daily_summary_report_form").serialize(); } 
            },
        }, 
          // paging: false,
        // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [ 
            {data : "sn"},
            {data : "reference_no"},
            {data : "total_loss"}, 
            {data : "employee_id"},
            {data : "note"},
         ],
        "drawCallback": function (settings) {
          var api = this.api();
          var json = api.ajax.json();
          if (json != undefined) {
            html = "<tr><td class='ir_fw_txt_right'> Sum </td><td>&nbsp; $"+json.sum_of_eamount+"</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>";
            $("#daily_summary_report_wastes_datatable>tbody").append(html);
          }
        },
    });

    jQuery("#daily_summary_report_form").submit(function(e){
        e.preventDefault();
        daily_purchase_datatable.ajax.reload();
        daily_summary_report_sales_datatable.ajax.reload();
        daily_summary_report_supplier_due_datatable.ajax.reload();
    });
 
    // consumption data table and filter
    consumption_menus_datatable = jQuery('#consumption_menus_datatable').DataTable({
        responsive: true,
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
        buttons: [
              {
                extend: "print",
                text: '<i class="fa fa-print"></i> Print',
                titleAttr: "print",
              },
              {
                extend: "copyHtml5",
                text: '<i class="fa fa-files-o"></i> Copy',
                titleAttr: "Copy",
              },
              {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel-o"></i> Excel',
                titleAttr: "Excel",
              },
              {
                extend: "csvHtml5",
                text: '<i class="fa fa-file-text-o"></i> CSV',
                titleAttr: "CSV",
              },
              {
                extend: "pdfHtml5",
                text: '<i class="fa fa-file-pdf-o"></i> PDF',
                titleAttr: "PDF",
              },
            ],
            language: {
              paginate: {
                previous: "<i class='fa fa-chevron-left'></i>",
                next: "<i class='fa fa-chevron-right'></i>",
              },
            },
        "ajax" : {
            url : BASEURL + "Report/consumptionReportMenuNew",
            type : "POST",
            data: {
                filter_data : function(){ return $("#consumption_report_form").serialize(); } 
            },
        }, 
          // paging: false,
        // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [ 
            {data : 'id'},
            {data : "ingredient_code"},
            {data : "total_consumption"}, 
            {data : "last_purchase_price"},
         ],
        "drawCallback": function (settings) {
          var api = this.api();
          var json = api.ajax.json();
          if (json != undefined) {
            html = "<tr><td class='ir_txt_center'></td><td> </td><td> Total </td><td>"+json.totalTK+"</td></tr>";
            $("#consumption_menus_datatable>tbody").append(html);
          }
        },

    });
    consumption_modifier_datatable = jQuery('#consumption_modifier_datatable').DataTable({
        responsive: true,
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
        buttons: [
              {
                extend: "print",
                text: '<i class="fa fa-print"></i> Print',
                titleAttr: "print",
              },
              {
                extend: "copyHtml5",
                text: '<i class="fa fa-files-o"></i> Copy',
                titleAttr: "Copy",
              },
              {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel-o"></i> Excel',
                titleAttr: "Excel",
              },
              {
                extend: "csvHtml5",
                text: '<i class="fa fa-file-text-o"></i> CSV',
                titleAttr: "CSV",
              },
              {
                extend: "pdfHtml5",
                text: '<i class="fa fa-file-pdf-o"></i> PDF',
                titleAttr: "PDF",
              },
            ],
            language: {
              paginate: {
                previous: "<i class='fa fa-chevron-left'></i>",
                next: "<i class='fa fa-chevron-right'></i>",
              },
            },
        "ajax" : {
            url : BASEURL + "Report/consumptionReportModifierNew",
            type : "POST",
            data: {
                filter_data : function(){ return $("#consumption_report_form").serialize(); } 
            },
        }, 
          // paging: false,
    // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [ 
            {data : 'id'},
            {data : "ingredient_code"},
            {data : "total_consumption"}, 
            {data : "last_purchase_price"},
         ],
        "drawCallback": function (settings) {
          var api = this.api();
          var json = api.ajax.json();
          if (json != undefined) {
            html = "<tr><td class='ir_txt_center'></td><td> </td><td> Total </td><td>"+json.totalTK+"</td></tr>";
            $("#consumption_modifier_datatable>tbody").append(html);
          }
        },
    });

    jQuery("#consumption_report_form").submit(function(e){
        e.preventDefault();
        consumption_menus_datatable.ajax.reload();
        consumption_modifier_datatable.ajax.reload();
    });

    supplier_report_datatable = jQuery('#supplier_report_datatable').DataTable({
        responsive: true,
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
        buttons: [
              {
                extend: "print",
                text: '<i class="fa fa-print"></i> Print',
                titleAttr: "print",
              },
              {
                extend: "copyHtml5",
                text: '<i class="fa fa-files-o"></i> Copy',
                titleAttr: "Copy",
              },
              {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel-o"></i> Excel',
                titleAttr: "Excel",
              },
              {
                extend: "csvHtml5",
                text: '<i class="fa fa-file-text-o"></i> CSV',
                titleAttr: "CSV",
              },
              {
                extend: "pdfHtml5",
                text: '<i class="fa fa-file-pdf-o"></i> PDF',
                titleAttr: "PDF",
              },
            ],
            language: {
              paginate: {
                previous: "<i class='fa fa-chevron-left'></i>",
                next: "<i class='fa fa-chevron-right'></i>",
              },
            },
        "ajax" : {
            url : BASEURL + "Report/supplierReportNew",
            type : "POST",
            data: {
                filter_data : function(){ return $("#supplier_report_form").serialize(); } 
            },
        }, 
          // paging: false,
    // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [ 
            {data : "sn"},
            {data : "date"},
            {data : "reference_no"}, 
            {data : "grand_total"},
            {data : "paid"},
            {data : "due"},
         ]
    });

    supplier_due_report_datatable = jQuery('#supplier_due_report_datatable').DataTable({
        responsive: true,
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
        buttons: [
              {
                extend: "print",
                text: '<i class="fa fa-print"></i> Print',
                titleAttr: "print",
              },
              {
                extend: "copyHtml5",
                text: '<i class="fa fa-files-o"></i> Copy',
                titleAttr: "Copy",
              },
              {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel-o"></i> Excel',
                titleAttr: "Excel",
              },
              {
                extend: "csvHtml5",
                text: '<i class="fa fa-file-text-o"></i> CSV',
                titleAttr: "CSV",
              },
              {
                extend: "pdfHtml5",
                text: '<i class="fa fa-file-pdf-o"></i> PDF',
                titleAttr: "PDF",
              },
            ],
            language: {
              paginate: {
                previous: "<i class='fa fa-chevron-left'></i>",
                next: "<i class='fa fa-chevron-right'></i>",
              },
            },
        "ajax" : {
            url : BASEURL + "Report/supplierReportNew2",
            type : "POST",
            data: {
                filter_data : function(){ return $("#supplier_report_form").serialize(); } 
            },
        }, 
          // paging: false,
    // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [ 
            {data : "sn"},
            {data : "date"},
            {data : "amount"}, 
            {data : "note"},
 
         ] 
    });

    jQuery("#supplier_report_form").submit(function(e){
        e.preventDefault();
        supplier_report_datatable.ajax.reload();
        supplier_due_report_datatable.ajax.reload();
    });

    customer_report_datatable = jQuery('#customer_report_datatable').DataTable({
        responsive: true,
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
        buttons: [
              {
                extend: "print",
                text: '<i class="fa fa-print"></i> Print',
                titleAttr: "print",
              },
              {
                extend: "copyHtml5",
                text: '<i class="fa fa-files-o"></i> Copy',
                titleAttr: "Copy",
              },
              {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel-o"></i> Excel',
                titleAttr: "Excel",
              },
              {
                extend: "csvHtml5",
                text: '<i class="fa fa-file-text-o"></i> CSV',
                titleAttr: "CSV",
              },
              {
                extend: "pdfHtml5",
                text: '<i class="fa fa-file-pdf-o"></i> PDF',
                titleAttr: "PDF",
              },
            ],
            language: {
              paginate: {
                previous: "<i class='fa fa-chevron-left'></i>",
                next: "<i class='fa fa-chevron-right'></i>",
              },
            },
        "ajax" : {
            url : BASEURL + "Report/customerReportNew",
            type : "POST",
            data: {
                filter_data : function(){ return $("#customer_report_form").serialize(); } 
            },
        }, 
          // paging: false,
    // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [ 
            {data : "sn"},
            {data : "sale_date"},
            {data : "sale_no"}, 
            {data : "total_payable"},
            {data : "paid_amount"},
            {data : "due_amount"},
         ]
    });

    customer_due_report_datatable = jQuery('#customer_due_report_datatable').DataTable({
        responsive: true,
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
        buttons: [
              {
                extend: "print",
                text: '<i class="fa fa-print"></i> Print',
                titleAttr: "print",
              },
              {
                extend: "copyHtml5",
                text: '<i class="fa fa-files-o"></i> Copy',
                titleAttr: "Copy",
              },
              {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel-o"></i> Excel',
                titleAttr: "Excel",
              },
              {
                extend: "csvHtml5",
                text: '<i class="fa fa-file-text-o"></i> CSV',
                titleAttr: "CSV",
              },
              {
                extend: "pdfHtml5",
                text: '<i class="fa fa-file-pdf-o"></i> PDF',
                titleAttr: "PDF",
              },
            ],
            language: {
              paginate: {
                previous: "<i class='fa fa-chevron-left'></i>",
                next: "<i class='fa fa-chevron-right'></i>",
              },
            },
        "ajax" : {
            url : BASEURL + "Report/customerReportNewDue",
            type : "POST",
            data: {
                filter_data : function(){ return $("#customer_report_form").serialize(); } 
            },
        }, 
          // paging: false,
    // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [ 
            {data : "sn"},
            {data : "date"},
            {data : "amount"}, 
            {data : "note"},
 
         ] 
    });

    jQuery("#customer_report_form").submit(function(e){
        e.preventDefault();
        customer_report_datatable.ajax.reload();
        customer_due_report_datatable.ajax.reload();
    });

    // daily sale data table and filter
    datatable_daily_sale = jQuery('#datatable_daily_sale').DataTable({
        responsive: true,
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
        buttons: [
              {
                extend: "print",
                text: '<i class="fa fa-print"></i> Print',
                titleAttr: "print",
              },
              {
                extend: "copyHtml5",
                text: '<i class="fa fa-files-o"></i> Copy',
                titleAttr: "Copy",
              },
              {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel-o"></i> Excel',
                titleAttr: "Excel",
              },
              {
                extend: "csvHtml5",
                text: '<i class="fa fa-file-text-o"></i> CSV',
                titleAttr: "CSV",
              },
              {
                extend: "pdfHtml5",
                text: '<i class="fa fa-file-pdf-o"></i> PDF',
                titleAttr: "PDF",
              },
            ],
            language: {
              paginate: {
                previous: "<i class='fa fa-chevron-left'></i>",
                next: "<i class='fa fa-chevron-right'></i>",
              },
            },
        "ajax" : {
            url : BASEURL + "Report/saleReportByDateNew",
            type : "POST",
            data: {
                filter_data : function(){ return $("#daily_sale_form").serialize(); } 
            },
        }, 
          // paging: false,
    // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [ 
            {data : 'id'},
            {data : "sale_date"},
            {data : "total_payable"},  
         ]
    });

    jQuery("#daily_sale_form").submit(function(e){
        e.preventDefault();
        datatable_daily_sale.ajax.reload();
    });

    // detailed sale data table and filter
    datatable_detailed_sale = jQuery('#datatable_detailed_sale').DataTable({
        responsive: true,
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
        buttons: [
              {
                extend: "print",
                text: '<i class="fa fa-print"></i> Print',
                titleAttr: "print",
              },
              {
                extend: "copyHtml5",
                text: '<i class="fa fa-files-o"></i> Copy',
                titleAttr: "Copy",
              },
              {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel-o"></i> Excel',
                titleAttr: "Excel",
              },
              {
                extend: "csvHtml5",
                text: '<i class="fa fa-file-text-o"></i> CSV',
                titleAttr: "CSV",
              },
              {
                extend: "pdfHtml5",
                text: '<i class="fa fa-file-pdf-o"></i> PDF',
                titleAttr: "PDF",
              },
            ],
            language: {
              paginate: {
                previous: "<i class='fa fa-chevron-left'></i>",
                next: "<i class='fa fa-chevron-right'></i>",
              },
            },
        "ajax" : {
            url : BASEURL + "Report/detailedSaleReportNew",
            type : "POST",
            data: {
                filter_data : function(){ return $("#detailed_sale_form").serialize(); } 
            },
        }, 
          // paging: false,
    // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [ 
            {data : "id"},
            {data : "sale_date"},
            {data : "sale_no"},
            {data : "total_items"},
            {data : "sub_total"},
            {data : "delivery_row_total"},  
            {data : "service_row_total"},  
            {data : "total_discount_amount"},  
            {data : "vat"},  
            {data : "total_payable"},  
            {data : "name"},  
         ]
    });

    jQuery("#detailed_sale_form").submit(function(e){
        e.preventDefault();
        datatable_detailed_sale.ajax.reload();
    });

    // detailed sale data table and filter
    datatable_stock_report = jQuery('#datatable_stock_report').DataTable({
        responsive: true,
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
        buttons: [
              {
                extend: "print",
                text: '<i class="fa fa-print"></i> Print',
                titleAttr: "print",
              },
              {
                extend: "copyHtml5",
                text: '<i class="fa fa-files-o"></i> Copy',
                titleAttr: "Copy",
              },
              {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel-o"></i> Excel',
                titleAttr: "Excel",
              },
              {
                extend: "csvHtml5",
                text: '<i class="fa fa-file-text-o"></i> CSV',
                titleAttr: "CSV",
              },
              {
                extend: "pdfHtml5",
                text: '<i class="fa fa-file-pdf-o"></i> PDF',
                titleAttr: "PDF",
              },
            ],
            language: {
              paginate: {
                previous: "<i class='fa fa-chevron-left'></i>",
                next: "<i class='fa fa-chevron-right'></i>",
              },
            },
        "ajax" : {
            url : BASEURL + "Report/inventoryReportNew",
            type : "POST",
            data: {
                filter_data : function(){ return $("#stock_report_form").serialize(); } 
            },
        }, 
          // paging: false,
    // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [ 
            {data : "id"},
            {data : "code"},
            {data : "category"},
            {data : "stock_cost"},
            {data : "total_stock"},
            {data : "alert_quantity"},
         ]
    });

    jQuery("#stock_report_form").submit(function(e){
        e.preventDefault();
        datatable_stock_report.ajax.reload();
    });

    // detailed sale data table and filter
    datatable_expenses_stock_report = jQuery('#datatable_expenses_stock_report').DataTable({
        responsive: true,
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
        buttons: [
              {
                extend: "print",
                text: '<i class="fa fa-print"></i> Print',
                titleAttr: "print",
              },
              {
                extend: "copyHtml5",
                text: '<i class="fa fa-files-o"></i> Copy',
                titleAttr: "Copy",
              },
              {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel-o"></i> Excel',
                titleAttr: "Excel",
              },
              {
                extend: "csvHtml5",
                text: '<i class="fa fa-file-text-o"></i> CSV',
                titleAttr: "CSV",
              },
              {
                extend: "pdfHtml5",
                text: '<i class="fa fa-file-pdf-o"></i> PDF',
                titleAttr: "PDF",
              },
            ],
            language: {
              paginate: {
                previous: "<i class='fa fa-chevron-left'></i>",
                next: "<i class='fa fa-chevron-right'></i>",
              },
            },
        "ajax" : {
            url : BASEURL + "Report/inventoryReportNew",
            type : "POST",
            data: {
                filter_data : function(){ return $("#expenses_stock_report_form").serialize(); } 
            },
        }, 
          // paging: false,
    // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [ 
            {data : "id"},
            {data : "code"},
            {data : "category"},
            {data : "stock_cost"}, 
            {data : "alert_quantity"},
         ]
    });

    jQuery("#expenses_stock_report_form").submit(function(e){
        e.preventDefault();
        datatable_expenses_stock_report.ajax.reload();
    });

    // detailed sale data table and filter
    datatable_alert_stock = jQuery('#datatable_alert_stock').DataTable({
        responsive: true,
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
        buttons: [
              {
                extend: "print",
                text: '<i class="fa fa-print"></i> Print',
                titleAttr: "print",
              },
              {
                extend: "copyHtml5",
                text: '<i class="fa fa-files-o"></i> Copy',
                titleAttr: "Copy",
              },
              {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel-o"></i> Excel',
                titleAttr: "Excel",
              },
              {
                extend: "csvHtml5",
                text: '<i class="fa fa-file-text-o"></i> CSV',
                titleAttr: "CSV",
              },
              {
                extend: "pdfHtml5",
                text: '<i class="fa fa-file-pdf-o"></i> PDF',
                titleAttr: "PDF",
              },
            ],
            language: {
              paginate: {
                previous: "<i class='fa fa-chevron-left'></i>",
                next: "<i class='fa fa-chevron-right'></i>",
              },
            },
        "ajax" : {
            url : BASEURL + "Report/getInventoryAlertListNew",
            // type : "POST",
            // data: {
            //     filter_data : function(){ return $("#detailed_sale_form").serialize(); } 
            // },
        }, 
          // paging: false,
    // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [ 
            {data : "id"},
            {data : "code"},
            {data : "category"},
            {data : "stock_amount"},
            {data : "alert_quantity"},
         ]
    });

    // detailed sale data table and filter
    jQuery('#datatable_expenses_alert_stock').DataTable({
        responsive: true,
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
        buttons: [
              {
                extend: "print",
                text: '<i class="fa fa-print"></i> Print',
                titleAttr: "print",
              },
              {
                extend: "copyHtml5",
                text: '<i class="fa fa-files-o"></i> Copy',
                titleAttr: "Copy",
              },
              {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel-o"></i> Excel',
                titleAttr: "Excel",
              },
              {
                extend: "csvHtml5",
                text: '<i class="fa fa-file-text-o"></i> CSV',
                titleAttr: "CSV",
              },
              {
                extend: "pdfHtml5",
                text: '<i class="fa fa-file-pdf-o"></i> PDF',
                titleAttr: "PDF",
              },
            ],
            language: {
              paginate: {
                previous: "<i class='fa fa-chevron-left'></i>",
                next: "<i class='fa fa-chevron-right'></i>",
              },
            },
        "ajax" : {
            url : BASEURL + "Report/getExpenseInventoryAlertListNew",
        }, 
          // paging: false,
    // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [ 
            {data : "key"},
            {data : "reference_no"},
            {data : "date"},
            {data : "ing_count"},
            {data : "employee_id"},
            {data : "note"},
            {data : "user_id"},
            {data : "action"},
         ]
    });

    // detailed sale data table and filter
    datatable_kitchen_performance = jQuery('#datatable_kitchen_performance').DataTable({
        responsive: true,
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
        buttons: [
              {
                extend: "print",
                text: '<i class="fa fa-print"></i> Print',
                titleAttr: "print",
              },
              {
                extend: "copyHtml5",
                text: '<i class="fa fa-files-o"></i> Copy',
                titleAttr: "Copy",
              },
              {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel-o"></i> Excel',
                titleAttr: "Excel",
              },
              {
                extend: "csvHtml5",
                text: '<i class="fa fa-file-text-o"></i> CSV',
                titleAttr: "CSV",
              },
              {
                extend: "pdfHtml5",
                text: '<i class="fa fa-file-pdf-o"></i> PDF',
                titleAttr: "PDF",
              },
            ],
            language: {
              paginate: {
                previous: "<i class='fa fa-chevron-left'></i>",
                next: "<i class='fa fa-chevron-right'></i>",
              },
            },
        "ajax" : {
            url : BASEURL + "Report/kitchenPerformanceReportNew",
            type : "POST",
            data: {
                filter_data : function(){ return $("#kitchen_performance_form").serialize(); } 
            },
        }, 
          // paging: false,
    // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [ 
            {data : 'id'},
            {data : "sale_date"},
            {data : "sale_no"},
            {data : "order_type"}, 
            {data : "order_time"},
            {data : "cooking_start_time"},
            {data : "cooking_done_time"},
            {data : "time_taken"},
         ]
    });

    jQuery("#kitchen_performance_form").submit(function(e){
        e.preventDefault();
        datatable_kitchen_performance.ajax.reload();
    });

    // detailed sale data table and filter
    attendance_datatable = jQuery('#attendance_datatable').DataTable({
        responsive: true,
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
        buttons: [
              {
                extend: "print",
                text: '<i class="fa fa-print"></i> Print',
                titleAttr: "print",
              },
              {
                extend: "copyHtml5",
                text: '<i class="fa fa-files-o"></i> Copy',
                titleAttr: "Copy",
              },
              {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel-o"></i> Excel',
                titleAttr: "Excel",
              },
              {
                extend: "csvHtml5",
                text: '<i class="fa fa-file-text-o"></i> CSV',
                titleAttr: "CSV",
              },
              {
                extend: "pdfHtml5",
                text: '<i class="fa fa-file-pdf-o"></i> PDF',
                titleAttr: "PDF",
              },
            ],
            language: {
              paginate: {
                previous: "<i class='fa fa-chevron-left'></i>",
                next: "<i class='fa fa-chevron-right'></i>",
              },
            },
        "ajax" : {
            url : BASEURL + "Report/attendanceReportNew",
            type : "POST",
            data: {
                filter_data : function(){ return $("#attendance_form").serialize(); } 
            },
        }, 
          // paging: false,
    // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [ 
            {data : 'id'},
            {data : "reference_no"},
            {data : "sale_date"},
            {data : "employee_id"}, 
            {data : "in_time"},
            {data : "out_time"},
            {data : "time_taken"},
         ]
    });

    jQuery("#attendance_form").submit(function(e){
        e.preventDefault();
        attendance_datatable.ajax.reload();
    });

    // detailed sale data table and filter
    supplier_due_datatable = jQuery('#supplier_due_datatable').DataTable({
        responsive: true,
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
        buttons: [
              {
                extend: "print",
                text: '<i class="fa fa-print"></i> Print',
                titleAttr: "print",
              },
              {
                extend: "copyHtml5",
                text: '<i class="fa fa-files-o"></i> Copy',
                titleAttr: "Copy",
              },
              {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel-o"></i> Excel',
                titleAttr: "Excel",
              },
              {
                extend: "csvHtml5",
                text: '<i class="fa fa-file-text-o"></i> CSV',
                titleAttr: "CSV",
              },
              {
                extend: "pdfHtml5",
                text: '<i class="fa fa-file-pdf-o"></i> PDF',
                titleAttr: "PDF",
              },
            ],
            language: {
              paginate: {
                previous: "<i class='fa fa-chevron-left'></i>",
                next: "<i class='fa fa-chevron-right'></i>",
              },
            },
        "ajax" : {
            url : BASEURL + "Report/supplierDueReportNew",
            type : "POST",
            data: {
                filter_data : function(){ return $("#supplier_due_form").serialize(); } 
            },
        }, 
          // paging: false,
    // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [ 
            {data : 'id'},
            {data : "name"},
            {data : "totalDue"},
         ]
    });

    jQuery("#supplier_due_form").submit(function(e){
        e.preventDefault();
        supplier_due_datatable.ajax.reload();
    });

    // expenses
    supplier_due_expenses_datatable = jQuery('#supplier_due_expenses_datatable').DataTable({
        responsive: true,
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
        buttons: [
              {
                extend: "print",
                text: '<i class="fa fa-print"></i> Print',
                titleAttr: "print",
              },
              {
                extend: "copyHtml5",
                text: '<i class="fa fa-files-o"></i> Copy',
                titleAttr: "Copy",
              },
              {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel-o"></i> Excel',
                titleAttr: "Excel",
              },
              {
                extend: "csvHtml5",
                text: '<i class="fa fa-file-text-o"></i> CSV',
                titleAttr: "CSV",
              },
              {
                extend: "pdfHtml5",
                text: '<i class="fa fa-file-pdf-o"></i> PDF',
                titleAttr: "PDF",
              },
            ],
            language: {
              paginate: {
                previous: "<i class='fa fa-chevron-left'></i>",
                next: "<i class='fa fa-chevron-right'></i>",
              },
            },
        "ajax" : {
            url : BASEURL + "Report/expenseDailySummaryReportSupplierDue",
            // type : "POST",
            // data: {
            //     filter_data : function(){ return $("#supplier_due_expenses_form").serialize(); } 
            // },
        },
          // paging: false,
    // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [ 
            {data : "sn"},
            {data : "date"},
            {data : "supplier_id"},
            {data : "amount"}, 
            {data : "note"},
            {data : "added_by"},
            {data : "actions"},
         ],
    });
        
    customer_due_expenses_datatable = jQuery('#customer_due_expenses_datatable').DataTable({
        responsive: true,
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
        buttons: [
              {
                extend: "print",
                text: '<i class="fa fa-print"></i> Print',
                titleAttr: "print",
              },
              {
                extend: "copyHtml5",
                text: '<i class="fa fa-files-o"></i> Copy',
                titleAttr: "Copy",
              },
              {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel-o"></i> Excel',
                titleAttr: "Excel",
              },
              {
                extend: "csvHtml5",
                text: '<i class="fa fa-file-text-o"></i> CSV',
                titleAttr: "CSV",
              },
              {
                extend: "pdfHtml5",
                text: '<i class="fa fa-file-pdf-o"></i> PDF',
                titleAttr: "PDF",
              },
            ],
        language: {
          paginate: {
            previous: "<i class='fa fa-chevron-left'></i>",
            next: "<i class='fa fa-chevron-right'></i>",
          },
        },
        "ajax" : {
            url : BASEURL + "Report/expenseCustomerDue",
        },
          // paging: false,
    // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [ 
            {data : "sn"},
            {data : "reference_no"},
            {data : "date"},
            {data : "customer_id"}, 
            {data : "amount"},
            {data : "payment_id"},
            {data : "note"},
            {data : "added_by"},
            {data : "actions"},
         ],
    });
       
    jQuery(document).on( 'click', '#delete_btn_exp_cust_due', function () { 
      var dataid = this.getAttribute('data-id');
      swal({
        title: "Are you sure?",
        text: "You will not be able to recover this customer due!",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "Yes, Delete it!",
        cancelButtonText: "No, Cancel pls!",
        closeOnConfirm: false,
        closeOnCancel: false
      },
      function(isConfirm) {
        if (isConfirm) {
          jQuery.ajax({
                url: BASEURL+'Customer_due_receive/deleteCustomerDueReceiveNew',
                dataType: "json",
                type: "Post", 
                data: { dataid : dataid },
                success: function (data) {
                    console.log(data);  
                    if(data == '1'){ 
                        swal("Deleted!", "Selected customer due has been deleted.", "success"); 
                        customer_due_expenses_datatable.ajax.reload();
                    }
                }, 
            }); 
        } else {
          swal("Cancelled", "Your delete request has been cancelled :)", "error");
        }
      });
    });
    // detailed sale data table and filter
    customer_due_datatable = jQuery('#customer_due_datatable').DataTable({
        responsive: true,
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
        buttons: [
              {
                extend: "print",
                text: '<i class="fa fa-print"></i> Print',
                titleAttr: "print",
              },
              {
                extend: "copyHtml5",
                text: '<i class="fa fa-files-o"></i> Copy',
                titleAttr: "Copy",
              },
              {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel-o"></i> Excel',
                titleAttr: "Excel",
              },
              {
                extend: "csvHtml5",
                text: '<i class="fa fa-file-text-o"></i> CSV',
                titleAttr: "CSV",
              },
              {
                extend: "pdfHtml5",
                text: '<i class="fa fa-file-pdf-o"></i> PDF',
                titleAttr: "PDF",
              },
            ],
            language: {
              paginate: {
                previous: "<i class='fa fa-chevron-left'></i>",
                next: "<i class='fa fa-chevron-right'></i>",
              },
            },
        "ajax" : {
            url : BASEURL + "Report/customerDueReportNew",
            type : "POST",
            data: {
                filter_data : function(){ return $("#customer_due_form").serialize(); } 
            },
        }, 
          // paging: false,
    // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [ 
            {data : 'id'},
            {data : "name"},
            {data : "totalDue"},
         ]
    });

    jQuery("#customer_due_form").submit(function(e){
        e.preventDefault();
        customer_due_datatable.ajax.reload();
    });

    // detailed sale data table and filter
    purchase_by_date_datatable = jQuery('#purchase_by_date_datatable').DataTable({
        responsive: true,
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
        buttons: [
              {
                extend: "print",
                text: '<i class="fa fa-print"></i> Print',
                titleAttr: "print",
              },
              {
                extend: "copyHtml5",
                text: '<i class="fa fa-files-o"></i> Copy',
                titleAttr: "Copy",
              },
              {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel-o"></i> Excel',
                titleAttr: "Excel",
              },
              {
                extend: "csvHtml5",
                text: '<i class="fa fa-file-text-o"></i> CSV',
                titleAttr: "CSV",
              },
              {
                extend: "pdfHtml5",
                text: '<i class="fa fa-file-pdf-o"></i> PDF',
                titleAttr: "PDF",
              },
            ],
            language: {
              paginate: {
                previous: "<i class='fa fa-chevron-left'></i>",
                next: "<i class='fa fa-chevron-right'></i>",
              },
            },
        "ajax" : {
            url : BASEURL + "Report/purchaseReportByDateNew",
            type : "POST",
            data: {
                filter_data : function(){ return $("#purchase_by_date_form").serialize(); } 
            },
        }, 
          // paging: false,
    // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [ 
            {data : 'id'},
            {data : "reference_no"},
            {data : "date"},
            {data : "supplier_id"}, 
            {data : "grand_total"},
            {data : "paid"},
            {data : "due"},
            {data : "ingredients_id"},
            {data : "user_id"},
         ]
    });

    jQuery("#purchase_by_date_form").submit(function(e){
        e.preventDefault();
        purchase_by_date_datatable.ajax.reload();
    });

    // detailed sale data table and filter
    expense_report_datatable = jQuery('#expense_report_datatable').DataTable({
        responsive: true,
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
        buttons: [
              {
                extend: "print",
                text: '<i class="fa fa-print"></i> Print',
                titleAttr: "print",
              },
              {
                extend: "copyHtml5",
                text: '<i class="fa fa-files-o"></i> Copy',
                titleAttr: "Copy",
              },
              {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel-o"></i> Excel',
                titleAttr: "Excel",
              },
              {
                extend: "csvHtml5",
                text: '<i class="fa fa-file-text-o"></i> CSV',
                titleAttr: "CSV",
              },
              {
                extend: "pdfHtml5",
                text: '<i class="fa fa-file-pdf-o"></i> PDF',
                titleAttr: "PDF",
              },
            ],
            language: {
              paginate: {
                previous: "<i class='fa fa-chevron-left'></i>",
                next: "<i class='fa fa-chevron-right'></i>",
              },
            },
        "ajax" : {
            url : BASEURL + "Report/expenseReportNew",
            type : "POST",
            data: {
                filter_data : function(){ return $("#expense_report_form").serialize(); } 
            },
        }, 
          // paging: false,
        // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [ 
            {data : "id"},
            {data : "date"},
            {data : "amount"},
            {data : "categoryName"}, 
            {data : "EmployeedName"}, 
         ]
    });

    jQuery("#expense_report_form").submit(function(e){
        e.preventDefault();
        expense_report_datatable.ajax.reload();
    });

    expenses_new_datatable = jQuery('#expenses_new_datatable').DataTable({
        responsive: true,
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
        buttons: [
              {
                extend: "print",
                text: '<i class="fa fa-print"></i> Print',
                titleAttr: "print",
              },
              {
                extend: "copyHtml5",
                text: '<i class="fa fa-files-o"></i> Copy',
                titleAttr: "Copy",
              },
              {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel-o"></i> Excel',
                titleAttr: "Excel",
              },
              {
                extend: "csvHtml5",
                text: '<i class="fa fa-file-text-o"></i> CSV',
                titleAttr: "CSV",
              },
              {
                extend: "pdfHtml5",
                text: '<i class="fa fa-file-pdf-o"></i> PDF',
                titleAttr: "PDF",
              },
            ],
        language: {
          paginate: {
            previous: "<i class='fa fa-chevron-left'></i>",
            next: "<i class='fa fa-chevron-right'></i>",
          },
        },
        "ajax" : {
            url : BASEURL + "Report/expenseNew",
            // type : "POST",
            // data: {
            //     filter_data : function(){ return $("#expense_report_form").serialize(); } 
            // },
        }, 
          // paging: false,
        // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [ 
            {data : "key"},
            {data : "date"},
            {data : "amount"},
            {data : "category_id"}, 
            {data : "employee_id"}, 
            {data : "note"}, 
            {data : "user_id"}, 
            {data : "action"}, 
         ]
    });
 
    jQuery(document).on( 'click', '#delete_btn_exp_data', function () { 
      var dataid = this.getAttribute('data-id');
      swal({
        title: "Are you sure?",
        text: "You will not be able to recover this expense data!",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "Yes, Delete it!",
        cancelButtonText: "No, Cancel pls!",
        closeOnConfirm: false,
        closeOnCancel: false
      },
      function(isConfirm) {
        if (isConfirm) {
          jQuery.ajax({
                url: BASEURL+'Expense/deleteExpenseNew',
                dataType: "json",
                type: "Post", 
                data: { dataid : dataid },
                success: function (data) {
                    console.log(data);  
                    if(data == '1'){
                        swal("Deleted!", "Selected expense has been deleted.", "success");
                        expenses_new_datatable.ajax.reload();
                    }
                }, 
            }); 
        } else {
          swal("Cancelled", "Your delete request has been cancelled :)", "error");
        }
      });
    });

    // detailed sale data table and filter
    waste_expenses_report_datatable = jQuery('#waste_expenses_report_datatable').DataTable({
        responsive: true,
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
        buttons: [
              {
                extend: "print",
                text: '<i class="fa fa-print"></i> Print',
                titleAttr: "print",
              },
              {
                extend: "copyHtml5",
                text: '<i class="fa fa-files-o"></i> Copy',
                titleAttr: "Copy",
              },
              {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel-o"></i> Excel',
                titleAttr: "Excel",
              },
              {
                extend: "csvHtml5",
                text: '<i class="fa fa-file-text-o"></i> CSV',
                titleAttr: "CSV",
              },
              {
                extend: "pdfHtml5",
                text: '<i class="fa fa-file-pdf-o"></i> PDF',
                titleAttr: "PDF",
              },
            ],
        language: {
          paginate: {
            previous: "<i class='fa fa-chevron-left'></i>",
            next: "<i class='fa fa-chevron-right'></i>",
          },
        },
        "ajax" : {
            url : BASEURL + "Report/wasteExpenseReportNew",
            type : "POST",
            data: {
                filter_data : function(){ return $("#waste_report_form").serialize(); } 
            },
        }, 
          // paging: false,
        // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [ 
            {data : "key"},
            {data : "reference_no"},
            {data : "date"},
            {data : "total_loss"}, 
            {data : "ingredient_id"}, 
            {data : "employee_id"}, 
            {data : "note"}, 
            {data : "user_id"}, 
            {data : "action"}, 
         ]
    });

    // detailed sale data table and filter

    purchase_report_datatable = jQuery('#purchase_report_datatable').DataTable({
        responsive: true,
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
        buttons: [
              {
                extend: "print",
                text: '<i class="fa fa-print"></i> Print',
                titleAttr: "print",
              },
              {
                extend: "copyHtml5",
                text: '<i class="fa fa-files-o"></i> Copy',
                titleAttr: "Copy",
              },
              {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel-o"></i> Excel',
                titleAttr: "Excel",
              },
              {
                extend: "csvHtml5",
                text: '<i class="fa fa-file-text-o"></i> CSV',
                titleAttr: "CSV",
              },
              {
                extend: "pdfHtml5",
                text: '<i class="fa fa-file-pdf-o"></i> PDF',
                titleAttr: "PDF",
              },
        ],
        language: {
          paginate: {
            previous: "<i class='fa fa-chevron-left'></i>",
            next: "<i class='fa fa-chevron-right'></i>",
          },
        },    
        "ajax" : {
            url : BASEURL + "Purchase/getPurchasesNew", 
        }, 
          // paging: false,
        // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [ 
            {data : "key"},
            {data : "reference_no"},
            {data : "date"},
            {data : "supplier_id"},   
            {data : "grand_total"},  
            {data : "due"},  
            {data : "user_id"},  
            {data : "action"},  
         ]
    });

    transfers_report_datatable = jQuery('#transfers_report_datatable').DataTable({
        responsive: true,
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
        buttons: [
              {
                extend: "print",
                text: '<i class="fa fa-print"></i> Print',
                titleAttr: "print",
              },
              {
                extend: "copyHtml5",
                text: '<i class="fa fa-files-o"></i> Copy',
                titleAttr: "Copy",
              },
              {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel-o"></i> Excel',
                titleAttr: "Excel",
              },
              {
                extend: "csvHtml5",
                text: '<i class="fa fa-file-text-o"></i> CSV',
                titleAttr: "CSV",
              },
              {
                extend: "pdfHtml5",
                text: '<i class="fa fa-file-pdf-o"></i> PDF',
                titleAttr: "PDF",
              },
        ],
        language: {
          paginate: {
            previous: "<i class='fa fa-chevron-left'></i>",
            next: "<i class='fa fa-chevron-right'></i>",
          },
        },    
        "ajax" : {
            url : BASEURL + "Transfer/getTransfersNew", 
        }, 
          // paging: false,
        // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [ 
            {data : "key"},
            {data : "reference_no"},
            {data : "date"},
            {data : "to_outlet_id"},   
            {data : "status_data"},  
            {data : "received_date"},  
            {data : "user_id"},  
            {data : "action"},  
         ]
    });

    jQuery(document).on( 'click', '#delete_btn_purchase', function () { 
      var dataid = this.getAttribute('data-id');
      swal({
        title: "Are you sure?",
        text: "You will not be able to recover this purchase report data!",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "Yes, Delete it!",
        cancelButtonText: "No, Cancel pls!",
        closeOnConfirm: false,
        closeOnCancel: false
      },
      function(isConfirm) {
        if (isConfirm) {
          jQuery.ajax({
                url: BASEURL+'Purchase/deletePurchaseNew',
                dataType: "json",
                type: "Post", 
                data: { dataid : dataid },
                success: function (data) {
                    console.log(data);  
                    if(data == '1'){
                        swal("Deleted!", "Selected purchase report has been deleted.", "success");
                        purchase_report_datatable.ajax.reload();
                    }
                }, 
            }); 
        } else {
          swal("Cancelled", "Your delete request has been cancelled :)", "error");
        }
      });
    });

    jQuery(document).on( 'click', '#delete_btn_transfer', function () { 
      var dataid = this.getAttribute('data-id');
      swal({
        title: "Are you sure?",
        text: "You will not be able to recover this transfer report data!",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "Yes, Delete it!",
        cancelButtonText: "No, Cancel pls!",
        closeOnConfirm: false,
        closeOnCancel: false
      },
      function(isConfirm) {
        if (isConfirm) {
          jQuery.ajax({
                url: BASEURL+'Transfer/deleteTransferNew',
                dataType: "json",
                type: "Post", 
                data: { dataid : dataid },
                success: function (data) {
                    console.log(data);  
                    if(data == 1){
                        swal("Deleted!", "Selected transfer report has been deleted.", "success");
                        transfers_report_datatable.ajax.reload();
                    } else if(data == 'error_transfer') {
                        swal("Cancelled", "Only Admin user can delete transfer data.", "error");
                    }
                    // if(data == 'error_transfer'){
                    //     swal("Deleted!", "Selected transfer report has been deleted.", "success");
                    //     purchase_report_datatable.ajax.reload();
                    // }
                }, 
            }); 
        } else {
          swal("Cancelled", "Your delete request has been cancelled :)", "error");
        }
      });
    });

    waste_report_datatable = jQuery('#waste_report_datatable').DataTable({
        responsive: true,
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
        buttons: [
              {
                extend: "print",
                text: '<i class="fa fa-print"></i> Print',
                titleAttr: "print",
              },
              {
                extend: "copyHtml5",
                text: '<i class="fa fa-files-o"></i> Copy',
                titleAttr: "Copy",
              },
              {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel-o"></i> Excel',
                titleAttr: "Excel",
              },
              {
                extend: "csvHtml5",
                text: '<i class="fa fa-file-text-o"></i> CSV',
                titleAttr: "CSV",
              },
              {
                extend: "pdfHtml5",
                text: '<i class="fa fa-file-pdf-o"></i> PDF',
                titleAttr: "PDF",
              },
            ],
            language: {
              paginate: {
                previous: "<i class='fa fa-chevron-left'></i>",
                next: "<i class='fa fa-chevron-right'></i>",
              },
            },
        "ajax" : {
            url : BASEURL + "Report/wasteReportNew",
            type : "POST",
            data: {
                filter_data : function(){ return $("#waste_report_form").serialize(); } 
            },
        }, 
          // paging: false,
        // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [ 
            {data : "key"},
            {data : "reference_no"},
            {data : "date"},
            {data : "total_loss"}, 
            {data : "ingredient_id"}, 
            {data : "employeed_name"}, 
         ]
    });

    jQuery(document).on( 'click', '#delete_btn_exp_wst', function () { 
      var dataid = this.getAttribute('data-id');
      swal({
        title: "Are you sure?",
        text: "You will not be able to recover this waste report data!",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "Yes, Delete it!",
        cancelButtonText: "No, Cancel pls!",
        closeOnConfirm: false,
        closeOnCancel: false
      },
      function(isConfirm) {
        if (isConfirm) {
          jQuery.ajax({
                url: BASEURL+'Waste/deleteWasteNew',
                dataType: "json",
                type: "Post", 
                data: { dataid : dataid },
                success: function (data) {
                    console.log(data);  
                    if(data == '1'){
                        swal("Deleted!", "Selected waste report has been deleted.", "success");
                        waste_expenses_report_datatable.ajax.reload();
                    }
                }, 
            }); 
        } else {
          swal("Cancelled", "Your delete request has been cancelled :)", "error");
        }
      });
    });

    jQuery("#waste_report_form").submit(function(e){
        e.preventDefault();
        waste_report_datatable.ajax.reload();
    });

    // detailed sale data table and filter
    tax_report_datatable = jQuery('#tax_report_datatable').DataTable({
        responsive: true,
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
        buttons: [
              {
                extend: "print",
                text: '<i class="fa fa-print"></i> Print',
                titleAttr: "print",
              },
              {
                extend: "copyHtml5",
                text: '<i class="fa fa-files-o"></i> Copy',
                titleAttr: "Copy",
              },
              {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel-o"></i> Excel',
                titleAttr: "Excel",
              },
              {
                extend: "csvHtml5",
                text: '<i class="fa fa-file-text-o"></i> CSV',
                titleAttr: "CSV",
              },
              {
                extend: "pdfHtml5",
                text: '<i class="fa fa-file-pdf-o"></i> PDF',
                titleAttr: "PDF",
              },
            ],
            language: {
              paginate: {
                previous: "<i class='fa fa-chevron-left'></i>",
                next: "<i class='fa fa-chevron-right'></i>",
              },
            },
        "ajax" : {
            url : BASEURL + "Report/vatReportNew",
            type : "POST",
            data: {
                filter_data : function(){ return $("#tax_report_form").serialize(); } 
            },
        }, 
          // paging: false,
    // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [ 
            {data : "sn"},
            {data : "sale_date"},
            {data : "total_payable"},
            {data : "total_vat"}, 
         ]
    });

    jQuery("#tax_report_form").submit(function(e){
        e.preventDefault();
        tax_report_datatable.ajax.reload();
    });

    // detailed sale data table and filter
    food_menu_sale_cat_datatable = jQuery('#food_menu_sale_cat_datatable').DataTable({
        responsive: true, 
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
        buttons: [
              {
                extend: "print",
                text: '<i class="fa fa-print"></i> Print',
                titleAttr: "print",
              },
              {
                extend: "copyHtml5",
                text: '<i class="fa fa-files-o"></i> Copy',
                titleAttr: "Copy",
              },
              {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel-o"></i> Excel',
                titleAttr: "Excel",
              },
              {
                extend: "csvHtml5",
                text: '<i class="fa fa-file-text-o"></i> CSV',
                titleAttr: "CSV",
              },
              {
                extend: "pdfHtml5",
                text: '<i class="fa fa-file-pdf-o"></i> PDF',
                titleAttr: "PDF",
              },
            ],
            language: {
              paginate: {
                previous: "<i class='fa fa-chevron-left'></i>",
                next: "<i class='fa fa-chevron-right'></i>",
              },
            },
        "ajax" : {
            url : BASEURL + "Report/foodMenuSaleByCategoriesNew",
            type : "POST",
            data: {
                filter_data : function(){ return $("#food_menu_sale_cat_form").serialize(); } 
            },
        }, 
          // paging: false,
    // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [ 
            {data : "id"},
            {data : "code"},
            {data : "menu_name"},
            {data : "category_name"}, 
            {data : "total_qty"}, 
            {data : "sale_value"}, 
            {data : "sell_price"}, 
         ],
         "drawCallback": function (settings) {

          var api = this.api();
          var json = api.ajax.json();
          if (json != undefined) {
            html = "<tr><th class='ir_w2_txt_center'></th><th></th><th></th><th> Total (Amount X Qty) </th><th>"+ json.total_qty +"</th><th>"+ json.total_amount +"</th><th>"+ json.total_average +"</th></tr>";
            $("#food_menu_sale_cat_datatable>tbody").append(html);
          }
        },
    });

    jQuery("#food_menu_sale_cat_form").submit(function(e){
        e.preventDefault();
        food_menu_sale_cat_datatable.ajax.reload();
    });

    // detailed sale data table and filter
    food_stock_expenses_datatable = jQuery('#food_stock_expenses_datatable').DataTable({
        responsive: true, 
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
        buttons: [
              {
                extend: "print",
                text: '<i class="fa fa-print"></i> Print',
                titleAttr: "print",
              },
              {
                extend: "copyHtml5",
                text: '<i class="fa fa-files-o"></i> Copy',
                titleAttr: "Copy",
              },
              {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel-o"></i> Excel',
                titleAttr: "Excel",
              },
              {
                extend: "csvHtml5",
                text: '<i class="fa fa-file-text-o"></i> CSV',
                titleAttr: "CSV",
              },
              {
                extend: "pdfHtml5",
                text: '<i class="fa fa-file-pdf-o"></i> PDF',
                titleAttr: "PDF",
              },
            ],
        language: {
          paginate: {
            previous: "<i class='fa fa-chevron-left'></i>",
            next: "<i class='fa fa-chevron-right'></i>",
          },
        },
        "ajax" : {
            url : BASEURL + "Report/foodMenuSaleByCategoriesExpenseNew",
            type : "POST",
            data: {
                filter_data : function(){ return $("#food_stock_expenses_form").serialize(); } 
            },
        }, 
          // paging: false,
    // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [ 
            {data : "id"},
            {data : "code"},
            {data : "category_id"},
            {data : "totalStock"},  
         ], 
    });

    jQuery("#food_stock_expenses_form").submit(function(e){
        e.preventDefault();
        food_stock_expenses_datatable.ajax.reload();
    });

    // detailed sale data table and filter
    food_transfer_datatable = jQuery('#food_transfer_datatable').DataTable({
        responsive: true, 
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
        buttons: [
              {
                extend: "print",
                text: '<i class="fa fa-print"></i> Print',
                titleAttr: "print",
              },
              {
                extend: "copyHtml5",
                text: '<i class="fa fa-files-o"></i> Copy',
                titleAttr: "Copy",
              },
              {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel-o"></i> Excel',
                titleAttr: "Excel",
              },
              {
                extend: "csvHtml5",
                text: '<i class="fa fa-file-text-o"></i> CSV',
                titleAttr: "CSV",
              },
              {
                extend: "pdfHtml5",
                text: '<i class="fa fa-file-pdf-o"></i> PDF',
                titleAttr: "PDF",
              },
            ],
            language: {
              paginate: {
                previous: "<i class='fa fa-chevron-left'></i>",
                next: "<i class='fa fa-chevron-right'></i>",
              },
            },
        "ajax" : {
            url : BASEURL + "Report/foodTransferReportNew",
            type : "POST",
            data: {
                filter_data : function(){ return $("#food_transfer_form").serialize(); } 
            },
        },
          // paging: false,
    // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [ 
            {data : "id"},
            {data : "received_date"},
            {data : "from_outlet_id"},
            {data : "to_outlet_id"}, 
            {data : "foods"},
         ]
    });

    jQuery("#food_transfer_form").submit(function(e){
        e.preventDefault();
        food_transfer_datatable.ajax.reload();
    });

    // detailed sale data table and filter
    sale_report_datatable = jQuery('#sale_report_datatable').DataTable({
        responsive: true,
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
        buttons: [
              {
                extend: "print",
                text: '<i class="fa fa-print"></i> Print',
                titleAttr: "print",
              },
              {
                extend: "copyHtml5",
                text: '<i class="fa fa-files-o"></i> Copy',
                titleAttr: "Copy",
              },
              {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel-o"></i> Excel',
                titleAttr: "Excel",
              },
              {
                extend: "csvHtml5",
                text: '<i class="fa fa-file-text-o"></i> CSV',
                titleAttr: "CSV",
              },
              {
                extend: "pdfHtml5",
                text: '<i class="fa fa-file-pdf-o"></i> PDF',
                titleAttr: "PDF",
              },
        ],
        language: {
          paginate: {
            previous: "<i class='fa fa-chevron-left'></i>",
            next: "<i class='fa fa-chevron-right'></i>",
          },
        },    
        "ajax" : {
            url : BASEURL + "Report/saleReportNew", 
        }, 
          // paging: false,
    // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [ 
            {data : "key"},
            {data : "sale_no"},
            {data : "order_type"},
            {data : "sale_date"},   
            {data : "customer_name"}, 
            {data : "total_payable"}, 
            {data : "name"}, 
            {data : "full_name"}, 
            {data : "action"}, 
         ]
    });

    jQuery(document).on( 'click', '#delete_sale_report', function () { 
      var dataid = this.getAttribute('data-id');
      swal({
        title: "Are you sure?",
        text: "You will not be able to recover this sale report!",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "Yes, Delete it!",
        cancelButtonText: "No, Cancel pls!",
        closeOnConfirm: false,
        closeOnCancel: false
      },
      function(isConfirm) {
        if (isConfirm) {
          jQuery.ajax({
                url: BASEURL+'Sale/deleteSaleNew',
                dataType: "json",
                type: "Post", 
                data: { dataid : dataid },
                success: function (data) {
                    console.log(data);  
                    if(data == '1'){
                        swal("Deleted!", "Selected sale report has been deleted.", "success");
                        sale_report_datatable.ajax.reload();
                    }
                }, 
            }); 
        } else {
          swal("Cancelled", "Your delete request has been cancelled :)", "error");
        }
      });
    });

    // detailed sale data table and filter
    ingredient_categories_datatable = jQuery('#ingredient_categories_datatable').DataTable({
        responsive: true,
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
        buttons: [
              {
                extend: "print",
                text: '<i class="fa fa-print"></i> Print',
                titleAttr: "print",
              },
              {
                extend: "copyHtml5",
                text: '<i class="fa fa-files-o"></i> Copy',
                titleAttr: "Copy",
              },
              {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel-o"></i> Excel',
                titleAttr: "Excel",
              },
              {
                extend: "csvHtml5",
                text: '<i class="fa fa-file-text-o"></i> CSV',
                titleAttr: "CSV",
              },
              {
                extend: "pdfHtml5",
                text: '<i class="fa fa-file-pdf-o"></i> PDF',
                titleAttr: "PDF",
              },
        ],
        language: {
          paginate: {
            previous: "<i class='fa fa-chevron-left'></i>",
            next: "<i class='fa fa-chevron-right'></i>",
          },
        },    
        "ajax" : {
            url : BASEURL + "IngredientCategory/ingredientCategories_datatable", 
        }, 
          // paging: false,
    // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [ 
            {data : "sn"},
            {data : "category_name"},
            {data : "description"},
            {data : "added_by"},   
            {data : "action"},  
         ]
    });

    jQuery(document).on( 'click', '#delete_btn_ingredient_cat', function () { 
      var dataid = this.getAttribute('data-id');
      swal({
        title: "Are you sure?",
        text: "You will not be able to recover this ingredient categories !",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "Yes, Delete it!",
        cancelButtonText: "No, Cancel pls!",
        closeOnConfirm: false,
        closeOnCancel: false
      },
      function(isConfirm) {
        if (isConfirm) {
          jQuery.ajax({
                url: BASEURL+'IngredientCategory/deleteIngredientCategoryNew',
                dataType: "json",
                type: "Post", 
                data: { dataid : dataid },
                success: function (data) {
                    console.log(data);  
                    if(data == '1'){
                        swal("Deleted!", "Selected ingredient categories has been deleted.", "success");
                        ingredient_categories_datatable.ajax.reload();
                    }
                }, 
            }); 
        } else {
          swal("Cancelled", "Your delete request has been cancelled :)", "error");
        }
      });
    });
 
    // detailed sale data table and filter
    manage_user_datatable = jQuery('#manage_user_datatable').DataTable({
        responsive: true,
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
        buttons: [
              {
                extend: "print",
                text: '<i class="fa fa-print"></i> Print',
                titleAttr: "print",
              },
              {
                extend: "copyHtml5",
                text: '<i class="fa fa-files-o"></i> Copy',
                titleAttr: "Copy",
              },
              {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel-o"></i> Excel',
                titleAttr: "Excel",
              },
              {
                extend: "csvHtml5",
                text: '<i class="fa fa-file-text-o"></i> CSV',
                titleAttr: "CSV",
              },
              {
                extend: "pdfHtml5",
                text: '<i class="fa fa-file-pdf-o"></i> PDF',
                titleAttr: "PDF",
              },
        ],
        language: {
          paginate: {
            previous: "<i class='fa fa-chevron-left'></i>",
            next: "<i class='fa fa-chevron-right'></i>",
          },
        },    
        "ajax" : {
            url : BASEURL + "User/manage_user_datatable", 
        }, 
          // paging: false,
    // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [ 
            {data : "key"},
            {data : "full_name"},
            {data : "designation"},
            {data : "email_address"},   
            {data : "active_status"}, 
            {data : "outlets"}, 
            {data : "action"},  
         ]
    });

    jQuery(document).on( 'click', '#delete_user_data', function () { 
      var dataid = this.getAttribute('data-id');
      swal({
        title: "Are you sure?",
        text: "You will not be able to recover this user !",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "Yes, Delete it!",
        cancelButtonText: "No, Cancel pls!",
        closeOnConfirm: false,
        closeOnCancel: false
      },
      function(isConfirm) {
        if (isConfirm) {
          jQuery.ajax({
                url: BASEURL+'User/deleteUserNew',
                dataType: "json",
                type: "Post", 
                data: { dataid : dataid },
                success: function (data) {
                    console.log(data);  
                    if(data == '1'){
                        swal("Deleted!", "Selected user has been deleted.", "success");
                        manage_user_datatable.ajax.reload();
                    }
                }, 
            }); 
        } else {
          swal("Cancelled", "Your delete request has been cancelled :)", "error");
        }
      });
    });

    // detailed sale data table and filter
    attendances_datatables = jQuery('#attendances_datatables').DataTable({
        responsive: true,
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
        buttons: [
              {
                extend: "print",
                text: '<i class="fa fa-print"></i> Print',
                titleAttr: "print",
              },
              {
                extend: "copyHtml5",
                text: '<i class="fa fa-files-o"></i> Copy',
                titleAttr: "Copy",
              },
              {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel-o"></i> Excel',
                titleAttr: "Excel",
              },
              {
                extend: "csvHtml5",
                text: '<i class="fa fa-file-text-o"></i> CSV',
                titleAttr: "CSV",
              },
              {
                extend: "pdfHtml5",
                text: '<i class="fa fa-file-pdf-o"></i> PDF',
                titleAttr: "PDF",
              },
        ],
        language: {
          paginate: {
            previous: "<i class='fa fa-chevron-left'></i>",
            next: "<i class='fa fa-chevron-right'></i>",
          },
        },    
        "ajax" : {
            url : BASEURL + "User/attendances_datatables", 
        }, 
          // paging: false,
    // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [ 
            {data : "key"},
            {data : "reference_no"},
            {data : "date"},
            {data : "employee_id"},   
            {data : "in_time"}, 
            {data : "out_time"}, 
            {data : "update_time"},  
            {data : "time_count"},  
            {data : "note"},  
            {data : "userName"},  
            {data : "action"},  
         ]
    });

    jQuery(document).on( 'click', '#attendance_delete_btn', function () { 
      var dataid = this.getAttribute('data-id');
      swal({
        title: "Are you sure?",
        text: "You will not be able to recover this attendance record !",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "Yes, Delete it!",
        cancelButtonText: "No, Cancel pls!",
        closeOnConfirm: false,
        closeOnCancel: false
      },
      function(isConfirm) {
        if (isConfirm) {
          jQuery.ajax({
                url: BASEURL+'Attendance/deleteAttendanceNew',
                dataType: "json",
                type: "Post", 
                data: { dataid : dataid },
                success: function (data) {
                    console.log(data);  
                    if(data == '1'){
                        swal("Deleted!", "Selected attendance record has been deleted.", "success");
                        attendances_datatables.ajax.reload();
                    }
                }, 
            }); 
        } else {
          swal("Cancelled", "Your delete request has been cancelled :)", "error");
        }
      });
    });

    // detailed sale data table and filter
    units_datatable = jQuery('#units_datatable').DataTable({
        responsive: true,
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
        buttons: [
              {
                extend: "print",
                text: '<i class="fa fa-print"></i> Print',
                titleAttr: "print",
              },
              {
                extend: "copyHtml5",
                text: '<i class="fa fa-files-o"></i> Copy',
                titleAttr: "Copy",
              },
              {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel-o"></i> Excel',
                titleAttr: "Excel",
              },
              {
                extend: "csvHtml5",
                text: '<i class="fa fa-file-text-o"></i> CSV',
                titleAttr: "CSV",
              },
              {
                extend: "pdfHtml5",
                text: '<i class="fa fa-file-pdf-o"></i> PDF',
                titleAttr: "PDF",
              },
        ],
        language: {
          paginate: {
            previous: "<i class='fa fa-chevron-left'></i>",
            next: "<i class='fa fa-chevron-right'></i>",
          },
        },    
        "ajax" : {
            url : BASEURL + "Unit/UnitsDatatable", 
        }, 
          // paging: false,
    // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [ 
            {data : "sn"},
            {data : "unit_name"},
            {data : "description"},
            {data : "actions"},
         ]
    });

    jQuery(document).on( 'click', '#delete_btn_unit', function () { 
      var dataid = this.getAttribute('data-id');
      swal({
        title: "Are you sure?",
        text: "You will not be able to recover this unit!",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "Yes, Delete it!",
        cancelButtonText: "No, Cancel pls!",
        closeOnConfirm: false,
        closeOnCancel: false
      },
      function(isConfirm) {
        if (isConfirm) {
          jQuery.ajax({
                url: BASEURL+'Unit/deleteUnitNew',
                dataType: "json",
                type: "Post", 
                data: { dataid : dataid },
                success: function (data) {
                    console.log(data);  
                    if(data == '1'){
                        swal("Deleted!", "Selected unit has been deleted.", "success");
                        units_datatable.ajax.reload();
                    }
                }, 
            }); 
        } else {
          swal("Cancelled", "Your delete request has been cancelled :)", "error");
        }
      });
    });

    // detailed sale data table and filter
    ingredients_datatable = jQuery('#ingredients_datatable').DataTable({
        responsive: true,
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
        buttons: [
              {
                extend: "print",
                text: '<i class="fa fa-print"></i> Print',
                titleAttr: "print",
              },
              {
                extend: "copyHtml5",
                text: '<i class="fa fa-files-o"></i> Copy',
                titleAttr: "Copy",
              },
              {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel-o"></i> Excel',
                titleAttr: "Excel",
              },
              {
                extend: "csvHtml5",
                text: '<i class="fa fa-file-text-o"></i> CSV',
                titleAttr: "CSV",
              },
              {
                extend: "pdfHtml5",
                text: '<i class="fa fa-file-pdf-o"></i> PDF',
                titleAttr: "PDF",
              },
        ],
        language: {
          paginate: {
            previous: "<i class='fa fa-chevron-left'></i>",
            next: "<i class='fa fa-chevron-right'></i>",
          },
        },    
        "ajax" : {
            url : BASEURL + "Ingredient/ingredientsDatatable", 
        }, 
          // paging: false,
    // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [ 
            {data : "sn"},
            {data : "code"},
            {data : "name"},
            {data : "category_id"},
            {data : "purchase_price"},
            {data : "alert_quantity"},
            {data : "unit_id"},
            {data : "user_id"},
            {data : "actions"},
         ]
    });

    jQuery(document).on( 'click', '#delete_btn_ingredients', function () { 
      var dataid = this.getAttribute('data-id');
      swal({
        title: "Are you sure?",
        text: "You will not be able to recover this ingredient!",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "Yes, Delete it!",
        cancelButtonText: "No, Cancel pls!",
        closeOnConfirm: false,
        closeOnCancel: false
      },
      function(isConfirm) {
        if (isConfirm) {
          jQuery.ajax({
                url: BASEURL+'Ingredient/deleteIngredientNew',
                dataType: "json",
                type: "Post", 
                data: { dataid : dataid },
                success: function (data) {
                    console.log(data);  
                    if(data == '1'){
                        swal("Deleted!", "Selected ingredient has been deleted.", "success");
                        ingredients_datatable.ajax.reload();
                    }
                }, 
            }); 
        } else {
          swal("Cancelled", "Your delete request has been cancelled :)", "error");
        }
      });
    });

    // detailed sale data table and filter
    modifiers_datatable = jQuery('#modifiers_datatable').DataTable({
        responsive: true,
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
        buttons: [
              {
                extend: "print",
                text: '<i class="fa fa-print"></i> Print',
                titleAttr: "print",
              },
              {
                extend: "copyHtml5",
                text: '<i class="fa fa-files-o"></i> Copy',
                titleAttr: "Copy",
              },
              {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel-o"></i> Excel',
                titleAttr: "Excel",
              },
              {
                extend: "csvHtml5",
                text: '<i class="fa fa-file-text-o"></i> CSV',
                titleAttr: "CSV",
              },
              {
                extend: "pdfHtml5",
                text: '<i class="fa fa-file-pdf-o"></i> PDF',
                titleAttr: "PDF",
              },
        ],
        language: {
          paginate: {
            previous: "<i class='fa fa-chevron-left'></i>",
            next: "<i class='fa fa-chevron-right'></i>",
          },
        },    
        "ajax" : {
            url : BASEURL + "Modifier/modifiersDatatable", 
        }, 
          // paging: false,
    // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [ 
            {data : "sn"},
            {data : "name"},
            {data : "price"},
            {data : "description"},
            {data : "user_id"},
            {data : "user_id"},
            {data : "actions"}, 
         ]
    });

    jQuery(document).on( 'click', '#delete_btn_modifiers', function () { 
      var dataid = this.getAttribute('data-id');
      swal({
        title: "Are you sure?",
        text: "You will not be able to recover this modifier!",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "Yes, Delete it!",
        cancelButtonText: "No, Cancel pls!",
        closeOnConfirm: false,
        closeOnCancel: false
      },
      function(isConfirm) {
        if (isConfirm) {
          jQuery.ajax({
                url: BASEURL+'Modifier/deleteModifierNew',
                dataType: "json",
                type: "Post", 
                data: { dataid : dataid },
                success: function (data) {
                    console.log(data);  
                    if(data == '1'){
                        swal("Deleted!", "Selected modifier has been deleted.", "success");
                        modifiers_datatable.ajax.reload();
                    }
                }, 
            }); 
        } else {
          swal("Cancelled", "Your delete request has been cancelled :)", "error");
        }
      });
    });

    // detailed sale data table and filter
    food_menu_categories_datatable = jQuery('#food_menu_categories_datatable').DataTable({
        responsive: true,
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
        buttons: [
              {
                extend: "print",
                text: '<i class="fa fa-print"></i> Print',
                titleAttr: "print",
              },
              {
                extend: "copyHtml5",
                text: '<i class="fa fa-files-o"></i> Copy',
                titleAttr: "Copy",
              },
              {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel-o"></i> Excel',
                titleAttr: "Excel",
              },
              {
                extend: "csvHtml5",
                text: '<i class="fa fa-file-text-o"></i> CSV',
                titleAttr: "CSV",
              },
              {
                extend: "pdfHtml5",
                text: '<i class="fa fa-file-pdf-o"></i> PDF',
                titleAttr: "PDF",
              },
        ],
        language: {
          paginate: {
            previous: "<i class='fa fa-chevron-left'></i>",
            next: "<i class='fa fa-chevron-right'></i>",
          },
        },    
        "ajax" : {
            url : BASEURL + "FoodMenuCategory/foodMenuCategoriesDatatable", 
        }, 
          // paging: false,
    // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [ 
            {data : "sn"},
            {data : "category_name"},
            {data : "description"},
            {data : "user_id"},
            {data : "actions"},
         ]
    });

    jQuery(document).on( 'click', '#delete_btn_foodMenuCategories', function () { 
      var dataid = this.getAttribute('data-id');
      swal({
        title: "Are you sure?",
        text: "You will not be able to recover this food menu categorie!",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "Yes, Delete it!",
        cancelButtonText: "No, Cancel pls!",
        closeOnConfirm: false,
        closeOnCancel: false
      },
      function(isConfirm) {
        if (isConfirm) {
          jQuery.ajax({
                url: BASEURL+'FoodMenuCategory/deleteFoodMenuCategoryNew',
                dataType: "json",
                type: "Post", 
                data: { dataid : dataid },
                success: function (data) {
                    console.log(data);  
                    if(data == '1'){
                        swal("Deleted!", "Selected food menu categorie has been deleted.", "success");
                        food_menu_categories_datatable.ajax.reload();
                    }
                }, 
            }); 
        } else {
          swal("Cancelled", "Your delete request has been cancelled :)", "error");
        }
      });
    });

    // detailed sale data table and filter
    food_menu_datatable = jQuery('#food_menu_datatable').DataTable({
        responsive: true, 
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
        buttons: [
              {
                extend: "print",
                text: '<i class="fa fa-print"></i> Print',
                titleAttr: "print",
              },
              {
                extend: "copyHtml5",
                text: '<i class="fa fa-files-o"></i> Copy',
                titleAttr: "Copy",
              },
              {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel-o"></i> Excel',
                titleAttr: "Excel",
              },
              {
                extend: "csvHtml5",
                text: '<i class="fa fa-file-text-o"></i> CSV',
                titleAttr: "CSV",
              },
              {
                extend: "pdfHtml5",
                text: '<i class="fa fa-file-pdf-o"></i> PDF',
                titleAttr: "PDF",
              },
            ],
        language: {
          paginate: {
            previous: "<i class='fa fa-chevron-left'></i>",
            next: "<i class='fa fa-chevron-right'></i>",
          },
        },
        "ajax" : {
            url : BASEURL + "FoodMenu/foodMenusDatatable",
            type : "POST",
            data: {
                filter_data : function(){ return $("#food_menu_form").serialize(); } 
            },
        }, 
          // paging: false,
    // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [ 
            {data : "id"},
            {data : "code"},
            {data : "name"},
            {data : "category_id"},  
            {data : "sale_price"},  
            {data : "total_ing"},  
            {data : "user_id"},  
            {data : "action"},  
         ], 
    });

    jQuery("#food_menu_form").submit(function(e){
        e.preventDefault();
        food_menu_datatable.ajax.reload();
    });

    jQuery(document).on( 'click', '#delete_btn_foodMenus', function () { 
      var dataid = this.getAttribute('data-id');
      swal({
        title: "Are you sure?",
        text: "You will not be able to recover this food menus!",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "Yes, Delete it!",
        cancelButtonText: "No, Cancel pls!",
        closeOnConfirm: false,
        closeOnCancel: false
      },
      function(isConfirm) {
        if (isConfirm) {
          jQuery.ajax({
                url: BASEURL+'FoodMenu/deleteFoodMenuNew',
                dataType: "json",
                type: "Post", 
                data: { dataid : dataid },
                success: function (data) {
                    console.log(data);  
                    if(data == '1'){
                        swal("Deleted!", "Selected food menus has been deleted.", "success");
                        food_menu_datatable.ajax.reload();
                    }
                }, 
            }); 
        } else {
          swal("Cancelled", "Your delete request has been cancelled :)", "error");
        }
      });
    });

    // detailed sale data table and filter
    suppliers_datatable = jQuery('#suppliers_datatable').DataTable({
        responsive: true,
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
        buttons: [
              {
                extend: "print",
                text: '<i class="fa fa-print"></i> Print',
                titleAttr: "print",
              },
              {
                extend: "copyHtml5",
                text: '<i class="fa fa-files-o"></i> Copy',
                titleAttr: "Copy",
              },
              {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel-o"></i> Excel',
                titleAttr: "Excel",
              },
              {
                extend: "csvHtml5",
                text: '<i class="fa fa-file-text-o"></i> CSV',
                titleAttr: "CSV",
              },
              {
                extend: "pdfHtml5",
                text: '<i class="fa fa-file-pdf-o"></i> PDF',
                titleAttr: "PDF",
              },
        ],
        language: {
          paginate: {
            previous: "<i class='fa fa-chevron-left'></i>",
            next: "<i class='fa fa-chevron-right'></i>",
          },
        },    
        "ajax" : {
            url : BASEURL + "Supplier/suppliersDatatable", 
        }, 
          // paging: false,
    // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [
            {data : "sn"},
            {data : "name"},
            {data : "contact_person"},
            {data : "phone"},
            {data : "email"},
            {data : "address"},
            {data : "address"},
            {data : "user_id"},
            {data : "actions"},
         ]
    });

    jQuery(document).on( 'click', '#delete_btn_supplier', function () { 
      var dataid = this.getAttribute('data-id');
      swal({
        title: "Are you sure?",
        text: "You will not be able to recover this supplier!",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "Yes, Delete it!",
        cancelButtonText: "No, Cancel pls!",
        closeOnConfirm: false,
        closeOnCancel: false
      },
      function(isConfirm) {
        if (isConfirm) {
          jQuery.ajax({
                url: BASEURL+'Supplier/deleteSupplierNew',
                dataType: "json",
                type: "Post", 
                data: { dataid : dataid },
                success: function (data) {
                    console.log(data);  
                    if(data == '1'){
                        swal("Deleted!", "Selected supplier has been deleted.", "success");
                        suppliers_datatable.ajax.reload();
                    }
                }, 
            }); 
        } else {
          swal("Cancelled", "Your delete request has been cancelled :)", "error");
        }
      });
    });

    // detailed sale data table and filter
    customers_datatable = jQuery('#customers_datatable').DataTable({
        responsive: true,
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
        buttons: [
              {
                extend: "print",
                text: '<i class="fa fa-print"></i> Print',
                titleAttr: "print",
              },
              {
                extend: "copyHtml5",
                text: '<i class="fa fa-files-o"></i> Copy',
                titleAttr: "Copy",
              },
              {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel-o"></i> Excel',
                titleAttr: "Excel",
              },
              {
                extend: "csvHtml5",
                text: '<i class="fa fa-file-text-o"></i> CSV',
                titleAttr: "CSV",
              },
              {
                extend: "pdfHtml5",
                text: '<i class="fa fa-file-pdf-o"></i> PDF',
                titleAttr: "PDF",
              },
        ],
        language: {
          paginate: {
            previous: "<i class='fa fa-chevron-left'></i>",
            next: "<i class='fa fa-chevron-right'></i>",
          },
        },    
        "ajax" : {
            url : BASEURL + "Customer/customersDatatable", 
        }, 
          // paging: false,
    // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [
            {data : "sn"},
            {data : "name"},
            {data : "phone"},
            {data : "email"},
            {data : "date_of_birth"},
            {data : "date_of_anniversary"},
            {data : "address"},
            {data : "user_id"},
            {data : "action"},
         ]
    });

    jQuery(document).on( 'click', '#delete_btn_customers', function () { 
      var dataid = this.getAttribute('data-id');
      swal({
        title: "Are you sure?",
        text: "You will not be able to recover this customers!",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "Yes, Delete it!",
        cancelButtonText: "No, Cancel pls!",
        closeOnConfirm: false,
        closeOnCancel: false
      },
      function(isConfirm) {
        if (isConfirm) {
          jQuery.ajax({
                url: BASEURL+'Customer/deleteCustomerNew',
                dataType: "json",
                type: "Post", 
                data: { dataid : dataid },
                success: function (data) {
                    console.log(data);  
                    if(data == '1'){
                        swal("Deleted!", "Selected customers has been deleted.", "success");
                        customers_datatable.ajax.reload();
                    }
                }, 
            }); 
        } else {
          swal("Cancelled", "Your delete request has been cancelled :)", "error");
        }
      });
    });

    // detailed sale data table and filter
    expense_datatable = jQuery('#expense_datatable').DataTable({
        responsive: true,
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
        buttons: [
              {
                extend: "print",
                text: '<i class="fa fa-print"></i> Print',
                titleAttr: "print",
              },
              {
                extend: "copyHtml5",
                text: '<i class="fa fa-files-o"></i> Copy',
                titleAttr: "Copy",
              },
              {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel-o"></i> Excel',
                titleAttr: "Excel",
              },
              {
                extend: "csvHtml5",
                text: '<i class="fa fa-file-text-o"></i> CSV',
                titleAttr: "CSV",
              },
              {
                extend: "pdfHtml5",
                text: '<i class="fa fa-file-pdf-o"></i> PDF',
                titleAttr: "PDF",
              },
        ],
        language: {
          paginate: {
            previous: "<i class='fa fa-chevron-left'></i>",
            next: "<i class='fa fa-chevron-right'></i>",
          },
        },    
        "ajax" : {
            url : BASEURL + "expenseItems/expenseItemsDatatable", 
        }, 
          // paging: false,
    // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [
            {data : "sn"},
            {data : "name"},
            {data : "description"},
            {data : "user_id"},
            {data : "actions"}, 
         ]
    });

    jQuery(document).on( 'click', '#delete_btn_expense', function () { 
      var dataid = this.getAttribute('data-id');
      swal({
        title: "Are you sure?",
        text: "You will not be able to recover this expense!",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "Yes, Delete it!",
        cancelButtonText: "No, Cancel pls!",
        closeOnConfirm: false,
        closeOnCancel: false
      },
      function(isConfirm) {
        if (isConfirm) {
          jQuery.ajax({
                url: BASEURL+'expenseItems/deleteexpenseItemNew',
                dataType: "json",
                type: "Post", 
                data: { dataid : dataid },
                success: function (data) {
                    console.log(data);  
                    if(data == '1'){
                        swal("Deleted!", "Selected expense has been deleted.", "success");
                        expense_datatable.ajax.reload();
                    }
                }, 
            }); 
        } else {
          swal("Cancelled", "Your delete request has been cancelled :)", "error");
        }
      });
    });

    // detailed sale data table and filter
    payment_methods_datatable = jQuery('#payment_methods_datatable').DataTable({
        responsive: true,
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
        buttons: [
              {
                extend: "print",
                text: '<i class="fa fa-print"></i> Print',
                titleAttr: "print",
              },
              {
                extend: "copyHtml5",
                text: '<i class="fa fa-files-o"></i> Copy',
                titleAttr: "Copy",
              },
              {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel-o"></i> Excel',
                titleAttr: "Excel",
              },
              {
                extend: "csvHtml5",
                text: '<i class="fa fa-file-text-o"></i> CSV',
                titleAttr: "CSV",
              },
              {
                extend: "pdfHtml5",
                text: '<i class="fa fa-file-pdf-o"></i> PDF',
                titleAttr: "PDF",
              },
        ],
        language: {
          paginate: {
            previous: "<i class='fa fa-chevron-left'></i>",
            next: "<i class='fa fa-chevron-right'></i>",
          },
        },    
        "ajax" : {
            url : BASEURL + "PaymentMethod/paymentMethodsDatatable", 
        }, 
          // paging: false,
    // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [
            {data : "sn"},
            {data : "name"},
            {data : "description"},
            {data : "user_id"},
            {data : "actions"}, 
         ]
    });

    jQuery(document).on( 'click', '#delete_btn_payment_methods', function () { 
      var dataid = this.getAttribute('data-id');
      swal({
        title: "Are you sure?",
        text: "You will not be able to recover this payment methods!",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "Yes, Delete it!",
        cancelButtonText: "No, Cancel pls!",
        closeOnConfirm: false,
        closeOnCancel: false
      },
      function(isConfirm) {
        if (isConfirm) {
          jQuery.ajax({
                url: BASEURL+'PaymentMethod/deletePaymentMethodNew',
                dataType: "json",
                type: "Post", 
                data: { dataid : dataid },
                success: function (data) {
                    console.log(data);  
                    if(data == '1'){
                        swal("Deleted!", "Selected payment methods has been deleted.", "success");
                        payment_methods_datatable.ajax.reload();
                    }
                }, 
            }); 
        } else {
          swal("Cancelled", "Your delete request has been cancelled :)", "error");
        }
      });
    });

    // detailed sale data table and filter
    tables_datatable = jQuery('#tables_datatable').DataTable({
        responsive: true,
        "bAutoWidth": false, 
        dom: "frtip",
        dom: '<"top-left-item col-sm-12 col-md-12"lf B> t <"bottom-left-item col-sm-12 col-md-12 "i p>',
        buttons: [
              {
                extend: "print",
                text: '<i class="fa fa-print"></i> Print',
                titleAttr: "print",
              },
              {
                extend: "copyHtml5",
                text: '<i class="fa fa-files-o"></i> Copy',
                titleAttr: "Copy",
              },
              {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel-o"></i> Excel',
                titleAttr: "Excel",
              },
              {
                extend: "csvHtml5",
                text: '<i class="fa fa-file-text-o"></i> CSV',
                titleAttr: "CSV",
              },
              {
                extend: "pdfHtml5",
                text: '<i class="fa fa-file-pdf-o"></i> PDF',
                titleAttr: "PDF",
              },
        ],
        language: {
          paginate: {
            previous: "<i class='fa fa-chevron-left'></i>",
            next: "<i class='fa fa-chevron-right'></i>",
          },
        },    
        "ajax" : {
            url : BASEURL + "Table/tablesDatatable", 
        }, 
          // paging: false,
    // searching: false,
        "deferRender": true,
        "responsive": true,
        "columns" : [
            {data : "sn"},
            {data : "name"},
            {data : "sit_capacity"},
            {data : "position"},
            {data : "description"}, 
            {data : "outlet_id"}, 
            {data : "user_id"}, 
            {data : "actions"}, 
         ]
    });

    jQuery(document).on( 'click', '#delete_btn_Table', function () { 
      var dataid = this.getAttribute('data-id');
      swal({
        title: "Are you sure?",
        text: "You will not be able to recover this table record!",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "Yes, Delete it!",
        cancelButtonText: "No, Cancel pls!",
        closeOnConfirm: false,
        closeOnCancel: false
      },
      function(isConfirm) {
        if (isConfirm) {
          jQuery.ajax({
                url: BASEURL+'Table/deleteTableNew',
                dataType: "json",
                type: "Post", 
                data: { dataid : dataid },
                success: function (data) {
                    console.log(data);  
                    if(data == '1'){
                        swal("Deleted!", "Selected table record has been deleted.", "success");
                        tables_datatable.ajax.reload();
                    }
                }, 
            }); 
        } else {
          swal("Cancelled", "Your delete request has been cancelled :)", "error");
        }
      });
    });
 
    // Food Menu Sale
    jQuery(document).on("click", "#submit_food_filter", function () {
        foodMenuSalesFilter();
    });
 

});