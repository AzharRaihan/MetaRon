$(function(){
    "use strict";
    let base_url = $('#base_url').val();
    let first_name_field_required = $('#first_name_field_required').val();
    let email_field_required = $('#email_field_required').val();
    let success_send_email = $('#success_send_email').val();


    $(document).on('submit', '#subscriber_form', function (e) { 
        e.preventDefault();
        let email = $('#subscribe').val();
        let error = false;
        if (email == "") {
            $("#subscribe_msg").html(`
                <div class="alert alert-danger" role="alert">
                    <strong>${email_field_required}</strong>
                </div>
            `);
			error = true;
		}
        if(error == false){
            $.ajax({
                type: "POST",
                url: base_url+'WebsiteUser/subscribe',
                dataType: "JSON",
                processData: false,
                contentType: false,
                cache: false,
                data: new FormData(this),
                success: function (response) {
                    if(response.status == 'success'){
                        $('#subscribe').val("");
                        $("#subscribe_msg").html("");
                        $("#subscribe_msg").html(`
                            <div class="alert alert-success" role="alert">
                                <strong>${success_send_email}</strong>
                            </div>
                        `);
                    }else{
                        $('#subscribe').val("");
                        $("#subscribe_msg").html("");
                        $("#subscribe_msg").html(`
                            <div class="alert alert-danger texdt-danger" role="alert">
                                <strong>${response.message}</strong>
                            </div>
                        `);
                    }
                }
            });
        }

        
    });


    $(document).on('submit', '#contact_form', function (e) { 
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: base_url+'WebsiteUser/contactUs',
            dataType: "JSON",
            processData: false,
            contentType: false,
            cache: false,
            data: new FormData(this),
            success: function (response) {
                if(response.status == 'success'){
                    $('.f_name_err').html("");
                    $('.email_err').html("");
                    $('.phone_err').html("");
                    $('.message_err').html("");
                    $('.trigger_rest').val("");
                    $("#contact_message").html("");
                    
                    $("#contact_message").html(`
                        <div class="alert alert-success" role="alert">
                            <strong>Successfully Submited</strong>
                        </div>
                    `);
                    setTimeout(function() { 
                        $("#contact_message").html("");
                    }, 2000);
                }else{
                    $('.f_name_err').html("");
                    $('.email_err').html("");
                    $('.phone_err').html("");
                    $('.message_err').html("");
                    if (response.first_name != ''){
                        $('.f_name_err').html(`
                            <div class="alert alert-danger" role="alert">
                                <strong>${response.first_name}</strong>
                            </div>
                        `);
                    }
                    if (response.email != ''){
                        $('.email_err').html(`
                            <div class="alert alert-danger" role="alert">
                                <strong>${response.email}</strong>
                            </div>
                        `);
                    }
                    if (response.phone != ''){
                        $('.phone_err').html(`
                            <div class="alert alert-danger" role="alert">
                                <strong>${response.phone}</strong>
                            </div>
                        `);
                    }
                    if (response.message != ''){
                        $('.message_err').html(`
                            <div class="alert alert-danger" role="alert">
                                <strong>${response.message}</strong>
                            </div>
                        `);
                    }
                }
            }
        });
    });







});