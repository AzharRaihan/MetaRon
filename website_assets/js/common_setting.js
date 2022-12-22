$(function() {
    "use strict";
	let base_url = $('#base_url_').val();    
	let email_field_required = $(".email_field_required").val();
	let mobile_field_required = $(".mobile_field_required").val();
	let phone_field_required = $(".phone_field_required").val();
	let copy_right_field_required = $(".copy_right_field_required").val();
	let logo_field_required = $(".logo_field_required").val();
	let footer_logo_field_required = $(".footer_logo_field_required").val();
	let fav_icon_field_required = $(".fav_icon_field_required").val();
	let update_success = $(".update_success").val();


	// Update Banner Data
	$(document).on('submit', '#form_update', function (e) {
		e.preventDefault();
		let formData = $(this);
		let email = $("#email").val();
		let mobile = $("#mobile").val();
		let phone = $("#phone").val();
		let logo = $("#logo").val();
		let put_old_value_1 = $("#put_old_value_1").val();
		let footer_logo = $("#footer_logo").val();
		let put_old_value_2 = $("#put_old_value_2").val();
		let fav_icon = $("#fav_icon").val();
		let put_old_value_3 = $("#put_old_value_3").val();
		let copy_right = $("#copy_right").val();
		let error = false;


		if (email == "") {
			$("#email_err_msg").text(email_field_required);
			$(".email_err_msg_contnr").show(200);
			error = true;
		}

		if (mobile == "") {
			$("#mobile_err_msg").text(mobile_field_required);
			$(".mobile_err_msg_contnr").show(200);
			error = true;
		}

		if (phone == "") {
			$("#phone_err_msg").text(phone_field_required);
			$(".phone_err_msg_contnr").show(200);
			error = true;
		}

		if (logo == "" && put_old_value_1 == "") {
			$("#logo_err_msg").text(logo_field_required);
			$(".logo_err_msg_contnr").show(200);
			error = true;
		}

		if (footer_logo == "" && put_old_value_2 == "") {
			$("#footer_logo_err_msg").text(footer_logo_field_required);
			$(".footer_logo_err_msg_contnr").show(200);
			error = true;
		}

		if (fav_icon == "" && put_old_value_3 == "") {
			$("#fav_icon_err_msg").text(fav_icon_field_required);
			$(".fav_icon_err_msg_contnr").show(200);
			error = true;
		}

		if (copy_right == "") {
			$("#copy_right_err_msg").text(copy_right_field_required);
			$(".copy_right_err_msg_contnr").show(200);
			error = true;
		}
		
		if (error == false){
			$.ajax({
				type: "POST",
				url: base_url+'WebsiteAdminCommonSetting/updateCommonSetting/1',
				dataType: "JSON",
				processData: false,
				contentType: false,
				cache: false,
				data: new FormData(this),
				success: function (response) {
					if(response.status == 'success'){
						$('#message_boxs').html("");
						$('#message_boxs').html(`
							<div class="alert alert-success alert-dismissible fade show"> 
								<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
								<div class="alert-body">
									<span><i class="m-right fa fa-check"></i></span>
									${update_success}
								</div>
							</div>
						`);
						setTimeout(function() { 
							$("#message_boxs").html("");
						}, 2000);
						location.reload();
					} 
				}
			});
		}
	});


	// Click For No Link
	$(document).on('click', '.click_fo_no_link', function () {
		$('.set_no_link_val').val("");
		$('.set_no_link_val').val("#");
	});
	




});