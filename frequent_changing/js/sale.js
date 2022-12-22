

// var jq = jQuery.noConflict();
// // "use strict";
// jq(function () {

// });




jQuery(document).ready(function () {



function change_date(id) {
  jQuery("#change_date_sale_modal").val("");
  jQuery("#sale_id_hidden").val("");
  jQuery("#sale_id_hidden").val(id);
  jQuery("#change_date_modal").modal("show");
  // $('#myModal').modal('hide');
  // alert(id);
}



 jQuery("#change_date_sale_modal").datepicker({
   dateFormat: "yy-mm-dd",
   changeYear: true,
   changeMonth: true,
   autoclose: true,
   showMonthAfterYear: true,
   maxDate: 0,
 });

var BASEURL = jq("#base_url_").val();

function viewInvoice(id) {
  let newWindow = open(
    // "print_invoice/" + id,
    BASEURL + "Sale/print_invoice/" + id,
    "Print Invoice",
    "width=450,height=550"
  );
  newWindow.focus();

  newWindow.onload = function () {
    newWindow.document.body.insertAdjacentHTML("afterbegin");
  };
}


  jq("#datatable").DataTable({
    autoWidth: false,
    ordering: true,
    order: [[3, "desc"]],
    // dom: "Bfrtip",
    dom: '<"top-left-item col-sm-12 col-md-6"lf> <"top-right-item col-sm-12 col-md-6"B> t <"bottom-left-item col-sm-12 col-md-6 "i><"bottom-right-item col-sm-12 col-md-6 "p>',
    buttons:[
      {
        extend:    'print',
        text:      '<i class="fa fa-print"></i> Print',
        titleAttr: 'print'
     },
      {
          extend:    'copyHtml5',
          text:      '<i class="fa fa-files-o"></i> Copy',
          titleAttr: 'Copy'
      },
      {
          extend:    'excelHtml5',
          text:      '<i class="fa fa-file-excel-o"></i> Excel',
          titleAttr: 'Excel'
      },
      {
          extend:    'csvHtml5',
          text:      '<i class="fa fa-file-text-o"></i> CSV',
          titleAttr: 'CSV'
      },
      {
          extend:    'pdfHtml5',
          text:      '<i class="fa fa-file-pdf-o"></i> PDF',
          titleAttr: 'PDF'
      }
    ],
    language: {
      paginate: {
        previous: "<i class='fa fa-chevron-left'></i>",
        next: "<i class='fa fa-chevron-right'></i>",
      },
    },
  });



  jQuery(document).on("click", "#close_change_date_modal", function () {
    jQuery("#change_date_sale_modal").val("");
    jQuery("#sale_id_hidden").val("");
  });
  jQuery(document).on("click", "#save_change_date", function () {
    let change_date = jQuery("#change_date_sale_modal").val();
    let sale_id = jQuery("#sale_id_hidden").val();
    let csrf_name_ = jQuery("#csrf_name_").val();
    let csrf_value_ = jQuery("#csrf_value_").val();
    $.ajax({
      url: base_url + "Sale/change_date_of_a_sale_ajax",
      method: "POST",
      data: {
        sale_id: sale_id,
        change_date: change_date,
        csrf_name_: csrf_value_,
      },
      success: function (response) {
        jQuery("#change_date_sale_modal").val("");
        jQuery("#sale_id_hidden").val("");
        jQuery("#change_date_modal").modal("hide");
      },
      error: function () {
        alert("error");
      },
    });
  });



});

