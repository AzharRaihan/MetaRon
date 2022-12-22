$(function() {
    "use strict";
	let base_url = $('#base_url_').val();    
	let title_field_required = $(".title_field_required").val();
	let subtitle_field_required = $(".subtitle_field_required").val();
	let description_field_required = $(".description_field_required").val();
	let image_field_required = $(".image_field_required").val();
	let link_field_required = $(".link_field_required").val();
	let status_field_required = $(".status_field_required").val();
	let update_success = $(".update_success").val();


	// Update Banner Data
	$(document).on('submit', '#form_update', function (e) {
		e.preventDefault();
		let formData = $(this);
		let title = $("#title").val();
		let sub_title = $("#sub_title").val();
		let description = $("#description").val();
		let story_img_1 = $("#story_img_1").val();
		let put_old_value_1 = $("#put_old_value_1").val();
		let story_img_2 = $("#story_img_2").val();
		let put_old_value_2 = $("#put_old_value_2").val();
		let status = $("#status").val();
		let link = $("#link").val();
		let error = false;
		if (title == "") {
			$("#title_err_msg").text(title_field_required);
			$(".title_err_msg_contnr").show(200);
			error = true;
		}
		if (sub_title == "") {
			$("#subtitle_err_msg").text(subtitle_field_required);
			$(".subtitle_err_msg_contnr").show(200);
			error = true;
		}
		if (description == "") {
			$("#description_err_msg").text(description_field_required);
			$(".description_err_msg_contnr").show(200);
			error = true;
		}
		if (story_img_1 == "" && put_old_value_1 == "") {
			$("#story_img_1_err_msg").text(image_field_required);
			$(".story_img_1_err_msg_contnr").show(200);
			error = true;
		}
		if (story_img_2 == "" && put_old_value_2 == "") {
			$("#story_img_2_err_msg").text(image_field_required);
			$(".story_img_2_err_msg_contnr").show(200);
			error = true;
		}
		if (status == "") {
			$("#status_err_msg_").text(status_field_required);
			$(".status_err_msg_contnr").show(200);
			error = true;
		}
		if (link == "") {
			$("#link_err_msg").text(link_field_required);
			$(".link_err_msg_contnr").show(200);
			error = true;
		}
		if (error == false){
			$.ajax({
				type: "POST",
				url: base_url+'WebsiteAdminOurStory/updateOurStory/1',
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