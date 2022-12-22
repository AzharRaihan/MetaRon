$(document).ready(function () {
  const bodyElement = $("body");
  const win = $(window);
  const doc = $(document);

  /**
   *
   * Start Perfect Scrollbar
   */

  const foodItems = document.querySelector(".category_items");
  const foodItemsPs = new PerfectScrollbar(foodItems, {
    wheelSpeed: 2,
    wheelPropagation: true,
    minScrollbarLength: 20,
  });
  foodItemsPs.update();

  const categoryList = document.querySelector(".category-list > .list-of-item");
  const categoryListPs = new PerfectScrollbar(categoryList, {
    wheelSpeed: 2,
    wheelPropagation: true,
    minScrollbarLength: 20,
  });
  categoryListPs.update();

  const notification_list_holder = document.querySelector(
    "#notification_list_holder"
  );
  const notification_list_holderPs = new PerfectScrollbar(
    notification_list_holder,
    {
      wheelSpeed: 2,
      wheelPropagation: true,
      minScrollbarLength: 20,
    }
  );
  notification_list_holderPs.update();

  const mergeTablePs = new PerfectScrollbar(
    document.querySelector('.merge-table-content'),
    {
      wheelSpeed: 2,
      wheelPropagation: true,
      minScrollbarLength: 20,
    }
  );
  mergeTablePs.update();
  /**
   *
   * End Perfect Scrollbar
   */

  /**
   *
   * Start All OWL Carousel
   */
  $(".default-slider").owlCarousel({
    loop: true,
    margin: 10,
    items: 1,
  });

  $(".menu-bar-slider").owlCarousel({
    loop: true,
    margin: 10,
    autoWidth: true,
    dots: false,
    nav: true,
    navText: [`<i class="bi bi-caret-left-fill"></i>`, `<i class="bi bi-caret-right-fill"></i>`]
  });

  /**
   *
   * End All OWL Carousel
   */

  $(".slider-wrapper")
    .find(".uk-slider-items")
    .on("click", ".menu-btn", function () {
      $(".slider-wrapper")
        .find(".uk-slider-items")
        .find(".menu-btn")
        .removeClass("selected");
      $(this).addClass("selected");
    });

  $(document).ready(function () {
    $(".easy-get").on("click", () => {
      console.log("super");
    });
  });

  /**
   * Set Height in cart item box
   */
  const addHeightOnCart = () => {

    const h1 = $("#app-header").height();
    const h2 = $("#bottom_absolute").height();
    const h3 = $(".order_table_header_row").height();
    const wh = $(window).height();


    $(".cardIsEmpty").css("height", wh - (h1 + h2 + h3 + 60));
    console.log(wh - (h1 + h2 + h3 + 60))
  }

  addHeightOnCart();
  win.on('resize', function () {
    addHeightOnCart()
  })


  /**
   * Button Selected Trigger
   */
  bodyElement.on("click", ".focus-btn", function () {
    bodyElement.find(".focus-btn").removeClass("selected");
    $(this).addClass("selected");
  });


  bodyElement.on("click", ".focus-cart", function () {
    bodyElement.find(".focus-cart").removeClass("selected");
    $(this).addClass("selected");
    let qty = $(this).find(".qty_item_custom").text();
    $(".qty_container").val(qty);

  });

  bodyElement.on("click", ".get_note", function () {
    $(".get_note").removeClass("selected");
    $(this).addClass("selected");
    let note = $(this).text();
    $("#modal_item_note").val(note);
  });


  bodyElement.on("click", ".single_notification_checkbox", function () {
    if (this.checked) {
      $(this).parent().parent().parent().addClass("selected");
    } else {
      $(this).parent().parent().parent().removeClass("selected");
    }
  });


  /**
   * Finalize Modal Button Show
   */
  $('#roin-show-paymentType').on('click', function () {
    $('.roin-paymentType-btn').addClass('active')
    $('.roin-creditor-btn').removeClass('active')
    $('.roin-browser-btn').removeClass('active')
  })

  $('#roin-show-creditor').on('click', function () {
    $('.roin-paymentType-btn').removeClass('active')
    $('.roin-creditor-btn').addClass('active')
    $('.roin-browser-btn').removeClass('active')
  })

  $('#roin-show-room').on('click', function () {
    $('.roin-paymentType-btn').removeClass('active')
    $('.roin-creditor-btn').removeClass('active')
    $('.roin-browser-btn').addClass('active')
  });
});


/**
 *
 * Alert Modal
 */

var alertModal = ({ modalName, normalTxt, htmlTxt, btnClose }) => {
  if (normalTxt) {
    $(`#open-${modalName}-modal`).find('.append-html').text(normalTxt)
  }
  if (htmlTxt) {
    $(`#open-${modalName}-modal`).find('.append-html').html(htmlTxt)
  }

  if (btnClose) {
    $(`#open-${modalName}-modal`).find('.close-btn').children('button').text(btnClose.text !== '' ? btnClose.text : 'Close');
  }
  UIkit.modal(document.querySelector(`#open-${modalName}-modal`)).show();
}


var alertModalCustom = ({ modalName, normalTxt,re_open_modal, htmlTxt, btnClose }) => {
  if (normalTxt) {
    $(`#open-${modalName}-modal`).find('.append-html').text(normalTxt)
  }
  if (htmlTxt) {
    $(`#open-${modalName}-modal`).find('.append-html').html(htmlTxt)
  }
  if (btnClose) {
    $(`#open-${modalName}-modal`).find('.close-btn').children('button').text(btnClose.text !== '' ? btnClose.text : 'Close');
  }
  if(re_open_modal){
    $(".put_attr_custom_alert").attr("uk-toggle",re_open_modal);
  }
  UIkit.modal(document.querySelector(`#open-${modalName}-modal`)).show();
}



