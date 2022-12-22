
    function readFrameImage(input) {

        console.log("1"+input);

        if (input.files && input.files[0]) {
            var reader = new FileReader();

            console.log(reader);
            $("#remove_frame_cross_icon").val('');
            reader.onload = function (e) {
                $(".summary_head_avatar").removeClass("avatar");
                $(".frame-image-uploader-preview").css('background-image','');
                $(".loading--indicator--icon").removeClass("loading--indicator");
                $('.summary_head_avatar').css({"background-image":"url(" + e.target.result + ")" ,"width":"64px", "height":"64px"});
                $('.frame-image-uploader-preview').css({"background-image":"url(" + e.target.result + ")"});
                $(".Full_block").css('display','block');
            };

            reader.readAsDataURL(input.files[0]);
        }
    }

    function readFullImage(inputNew) {

      console.log("2"+inputNew);

      if (inputNew.files && inputNew.files[0]) {
        var readerNew = new FileReader();

        console.log(readerNew);
        $("#remove_full_cross_icon").val('');
        readerNew.onload = function (e) {
            $(".full-loading--indicator--icon").removeClass("loading--indicator");
            $('.full-image-uploader-preview').css({"background-image":"url(" + e.target.result + ")"});
            
            $('.second-img-element').attr('src', e.target.result);
            
            $(".format_buttons").css('display','block');
            $(".frame_button").addClass("button-active");
        };

        readerNew.readAsDataURL(inputNew.files[0]);
      }
    }

    function readPrintFiles(inputNew) {

      console.log("3"+inputNew);

      if (inputNew.files && inputNew.files[0]) {

        var readerNew = new FileReader();

        console.log(readerNew);
        $("#remove_print_cross_icon").val('');
        readerNew.onload = function (e) {
            $(".print-image-uploader-preview").css('background-image','');
            $(".print-loading--indicator--icon").removeClass("loading--indicator");
            $('.print-image-uploader-preview').css({"background-image":"url(" + e.target.result + ")"});
        };

        readerNew.readAsDataURL(inputNew.files[0]);

      }

    }

$(document).ready(function(){


    $("#show_item_description").change(function() {
        if(this.checked) {
            $(".summary_item_description").show();
        }else{
            $(".summary_item_description").hide();
        }
    });
    
    $("#show_total_savings").change(function() {
        if(this.checked) {
            $(".summary_total_saving").show();
        }else{
            $(".summary_total_saving").hide();
        }
    });
        
    $("#show_cart_level").change(function() {
        if(this.checked) {
            $(".summary_item_discount").show();
        }else{
            $(".summary_item_discount").hide();
        }
    });

      
    $("#show_location").change(function() {
        if(this.checked) {
            $(".summary_map").show();
        }else{
            $(".summary_map").hide();
        }
    });



    var show_location = $("#show_location").attr('data-show-location');

    var show_item = $("#show_item_description").attr('data-show-item');
    var show_total_saving = $("#show_total_savings").attr('data-show-total-saving');
    var show_cart_discount = $("#show_cart_level").attr('data-show-cart-discount');

    if(show_location == 1) {
        $(".summary_map").show();
    }else{
        $(".summary_map").hide();
    }

    if(show_item == 1) {
        $(".summary_item_description").show();
    }else{
        $(".summary_item_description").hide();
    }

    if(show_total_saving == 1) {
        $(".summary_total_saving").show();
    }else{
        $(".summary_total_saving").hide();
    }

    if(show_cart_discount == 1) {
        $(".summary_item_discount").show();
    }else{
        $(".summary_item_discount").hide();
    }



    var data_frame_img = $("#frame-img-data").attr('data-frame-img');
    var data_full_img = $("#full-img-data").attr('data-full-img');

    var remove_frame_cross_icon = $("#remove_frame_cross_icon ").attr("id");
    var remove_full_cross_icon = $("#remove_full_cross_icon ").attr("id");
    var remove_print_cross_icon = $("#remove_print_cross_icon ").attr("id");

    if(data_frame_img == 1){
        $(".Full_block").css('display','block');
        $(".frame_button").addClass('button-active');
    }else{
        if(data_full_img == 1){
            $(".format_buttons").css("display",'block');
            $(".Full_block").css('display','block');
            $(".frame_button").addClass("button-active");
        }else{
            $(".Full_block").css('display','none');
            $(".frame_button").removeClass('button-active');
        }
    }

    if(data_full_img == 1){
        $(".format_buttons").css("display",'block');
    }else{
        $(".format_buttons").css("display",'none');
    }

    $(".form_success_message").hide();
    $(".form_error_message").hide();

    var get_color = $("#set_color").val();

    if(get_color == '')
    {
        get_color = '#f00';
    }

    $(".summary_head_color").css("background-color",get_color);
    $(".summary_head_avatar").css("background-color",get_color);
      
    var colorPicker = new iro.ColorPicker("#picker", {
      // Set the size of the color picker
      width: 320,
      // Set the initial color to pure red
      color: get_color,
      layout: [
        {
          component: iro.ui.Box,
          options: {
              sliderShape: 'circle', 
          }
        },
        {
          component: iro.ui.Slider,
          options: {
            sliderType: 'hue',
            activeIndex: 2,
          }
        },
      ], 

    });


    colorPicker.on('color:change', function(color) {
        if (color.index === 0) {
            // console.log('color dragg changed!');
            // log the color index and hex value
            console.log(color.index, color.hexString);
            $("#set_color").val(color.hexString);
            $(".summary_head_color").css("background-color",color.hexString);
            $(".summary_head_avatar").css("background-color",color.hexString);
        }    
    });

    var swatchGrid = document.getElementById('swatch-grid');

    swatchGrid.addEventListener('click', function(e) {
      var clickTarget = e.target;
      // read data-color attribute
      if (clickTarget.dataset.color) {
        // update the color picker
        colorPicker.color.set(clickTarget.dataset.color);
        $(".summary_head_color").css("background-color",clickTarget.dataset.color);
        $(".summary_head_avatar").css("background-color",clickTarget.dataset.color);
      }
    });


    $(".frame_cross_icon").click(function(){

        console.log('0');

        $("#remove_frame_cross_icon").val('0');

        $(".loading--indicator--icon").addClass("loading--indicator");
        $(".frame-image-uploader-preview").css('background-image', '');

        $(".summary_head_avatar").addClass("avatar");
        $('.summary_head_avatar').css('background-image','');
    });

    $(".full_cross_icon").click(function(){

        $("#remove_full_cross_icon").val('0');

        $(".full-loading--indicator--icon").addClass("loading--indicator");
        $(".full-image-uploader-preview").css('background-image', '');
        $(".format_buttons").css('display','none');
    });

    $(".print_cross_icon").click(function(){

        $("#remove_print_cross_icon").val('0');

        $(".print-loading--indicator--icon").addClass("loading--indicator");
        $(".print-image-uploader-preview").css('background-image', '');
    });

    $(".frame_button").click(function(){
        $(".second-img").css('display', 'none');
        $(".first-img").css('display', 'block');
        $(this).addClass("button-active");
        $(".full_button").removeClass("button-active");
    });

    $(".full_button").click(function(){
        $(".second-img").css('display', 'block');
        $(".first-img").css('display', 'none');
        $(this).addClass("button-active");
        $(".frame_button").removeClass("button-active");
    });

    $("form#invoice_cutomize_form").submit(function (e) {

        var BASEURL = $("#base_url_").val();

        console.log('validator');

        e.preventDefault();

        var validator_message = {
            rules: {
                // 'frame_image' : 'required',
                // 'print_file' : 'required',
                'facebook_link' : 'required',
                'instagram_link' : 'required',
                'twitter_link' : 'required',
                'website_link' : 'required',
                'return_policy' : 'required',
                'custom_text' : 'required',
                // 'full_image': 'required'
            },
            messages: {
                // 'frame_image' : 'Please select image',
                // 'print_file' : 'Please select image',
                'facebook_link' : 'Please enter facebook',
                'instagram_link' : 'Please enter instagram',
                'twitter_link' : 'Please enter twitter',
                'website_link' : 'Please enter website',
                'return_policy' : 'Please enter return',
                'custom_text' : 'Please enter custom',
                // 'full_image': 'Please select any feedback messages'
            }
        };

        var validator = $("#invoice_cutomize_form").validate(validator_message);
        console.log(validator);

        if ($("#invoice_cutomize_form").valid() == true) {
            var formdata = new FormData(this);
            $.ajax({
                url: BASEURL + 'Purchase/save_invoice_customize',
                data: formdata,
                dataType: 'json',
                type: "POST",
                cache: false,
                contentType: false,
                processData: false,
            //     beforeSend: function () {
            //         $('.wait_feedback_message').text('Please wait');
            //     },
                success: function (data) {
                    if(data == true){
                        $(".form_success_message").show();
                        $(".form_success_message").text("Invoice data successfully saved.");
                        $(".form_error_message").hide();
                    }else{
                        $(".form_error_message").show();
                        $(".form_error_message").text("Invoice data not saved.");
                        $(".form_success_message").hide();
                    }
                    setTimeout(function() {
                        $(".form_error_message").hide();
                        $(".form_success_message").hide();
                    }, 5000);
            //         $('.wait_feedback_message').text('');
            //         if (data.status == 1) {
            //             $('.success_feedback_message').text('Successfully feedback sent');
            //             setTimeout(function () {
            //                 $('.success_feedback_message').text('');
            //                 $('#myModal_feedback').modal('toggle');
            //             }, 3000);
            //         } else {
            //             $('.success_feedback_message').text('Please enter data');
            //         }
                } 
            });
        } else {
            
            $(".form_error_message").show();
            $(".form_error_message").text("Please fill form data.");
            $(".form_success_message").hide();

        }
    });

});