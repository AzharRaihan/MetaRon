$(function() {
    "use strict";
	let base_url = $('#base_url_').val();    
	let edit = $(".edit").val();
	let delete_i = $(".delete").val();
	let title_field_required = $(".title_field_required").val();
	let title = $(".title").val();
	let description = $(".description").val();
	let status = $(".status").val();
	let image = $(".image").val();
	let description_field_required = $(".description_field_required").val();
	let image_field_required = $(".image_field_required").val();
	let status_field_required = $(".status_field_required").val();
	let active_ = $(".active_").val();
	let inactive = $(".inactive").val();
	let success = $(".success").val();
	let are_you_sure = $(".are_you_sure").val();
	let you_wont_be_delete_this = $(".you_wont_be_delete_this").val();
	let yes_delete_it = $(".yes_delete_it").val();
	let your_data_has_been_delete = $(".your_data_has_been_delete").val();
	let cancel = $(".cancel").val();
	let saved = $(".saved").val();
	let save = $(".save").val();
	let do_you_want_to_save_the_changes = $(".do_you_want_to_save_the_changes").val();
	let insertion_success = $(".insertion_success").val();
	let update_success = $(".update_success").val();
	let delete_success = $(".delete_success").val();
	let status_changed_successfully = $(".status_changed_successfully").val();
	let view = $(".view").val();


	// Fatch Spcial Menu All Data
	function fatchAllData(){
		$.ajax({
			type: "GET",
			url: base_url+'WebsiteAdminSpecialFoodMenu/specialMenuList',
			dataType: 'json',
			success: function (response) {
				if(response.status == 200){
					$('#table_body').html("");
					$.each(response.all_data, function (key, item) { 
						$('#table_body').append(`
							<tr>
								<th scope="row">${item.id}</th>
								<td>${item.title}</td>
								<td>${item.description}</td>
								<td><img src="${base_url}images/website/special_food_menu/${item.menu_img_1}" width="50" height="50"></td>
								<td>
									<select name="status" id="status_change" class="form-control" row-id="${item.id}">
										<option value="Active" ${item.status == 'Active' ? 'selected' : '' }>${active_}</option>
										<option value="Inactive" ${item.status == 'Inactive' ? 'selected' : '' }>${inactive}</option>
									</select>
								</td>
								<td class="ir_txt_center">
									<div class="btn-group actionDropDownBtn">
										<button type="button" class="btn bg-blue-color dropdown-toggle"
											id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
											<div class="d-flex flex-column">
												<strong>...</strong>
											</div>
										</button>
										<ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton1" role="menu">
											<li>
												<a href="javascript:void(0)" id="editBtn" edit-row-id="${item.id}"><i
												class="fa fa-pencil tiny-icon"></i>${edit}</a>
											</li>
											<li>
												<a href="javascript:void(0)" id="viewBtn" view-row-id="${item.id}"><i
												class="fa fa-eye tiny-icon"></i>${view}</a>
											</li>
											<li>
												<a class="delete" id="delItem" del-id="${item.id}" href="javascript:void(0)">
													<i class="fa fa-trash tiny-icon"></i>${delete_i}
												</a>
											</li>
										</ul>
									</div>
								</td>
							</tr>
						`);
					});
				}
			}
		});
	}
	fatchAllData();

	// Save Spcial Menu Data
	$(document).on('submit', '#submit_form', function (e) { 
		e.preventDefault();
		let formData = $(this);
		let title = $("#title").val();
		let description = $("#description").val();
		let menu_img_1 = $("#menu_img_1").val();
		let status = $("#status").val();
		let error = false;
		if (title == "") {
			$("#title_err_msg").text(title_field_required);
			$(".title_err_msg_contnr").show(200);
			error = true;
		}
		if (description == "") {
			$("#description_err_msg").text(description_field_required);
			$(".description_err_msg_contnr").show(200);
			error = true;
		}
		if (menu_img_1 == "") {
			$("#menu_img_1_err_msg").text(image_field_required);
			$(".menu_img_1_err_msg_contnr").show(200);
			error = true;
		}
		if (status == "") {
			$("#status_err_msg").text(status_field_required);
			$(".status_err_msg_contnr").show(200);
			error = true;
		}
		if (error == false){
			$.ajax({
				type: "POST",
				url: base_url+'WebsiteAdminSpecialFoodMenu/addSpecialMenu',
				dataType: "JSON",
				processData: false,
				contentType: false,
				cache: false,
				data: new FormData(this),
				success: function (response) {
					if(response.status == 'success'){
						$(formData).trigger('reset');
						$('#addModal').modal('hide');
						$('#message_boxs').html("");
						$('#message_boxs').html(`
							<div class="alert alert-success alert-dismissible fade show"> 
								<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
								<div class="alert-body">
									<span><i class="m-right fa fa-check"></i></span>
									${insertion_success}
								</div>
							</div>
						`);
						fatchAllData();
					}
				},
			});
		}
	});

	// View Spcial Menu Data
	$(document).on('click', '#viewBtn', function (e) {
		e.preventDefault();
		let id = $(this).attr("view-row-id");
		$('#viewModal').modal('show');
		$.ajax({
			type: "GET",
			url: base_url+'WebsiteAdminSpecialFoodMenu/editSpecialMenu/'+id,
			caches: false,
			success: function (response) {
				if (response.status == 'success') {
					$("#view_table_body").html(`
						<tr>
                            <td class="d-flex justify-content-between">
								${title}
								<span>:</span>
							</td>
                            <td>${response.data.title}</td>
                        </tr>
						<tr>
                            <td class="d-flex justify-content-between">
								${description}
								<span>:</span>
							</td>
                            <td>${response.data.description}</td>
                        </tr>
						<tr>
                            <td class="d-flex justify-content-between">
								${image}
								<span>:</span>
							</td>
                            <td><img src="${base_url}images/website/special_food_menu/${response.data.menu_img_1}" width="200" height="100"></td>
                        </tr>
						<tr>
                            <td class="d-flex justify-content-between">
								${status}
								<span>:</span>
							</td>
                            <td><span class="${response.data.status == 'Active' ? 'active-d' : 'inactive-d'}">${response.data.status}</span></td>
                        </tr>
					`);
				} 
			}
		});
	});

	// Edit Spcial Menu Data
	$(document).on('click', '#editBtn', function (e) {
		$(".callout").css('display', 'none');
		e.preventDefault();
		let id = $(this).attr("edit-row-id");
		$('#editModal').modal('show');
		$.ajax({
			type: "GET",
			url: base_url+'WebsiteAdminSpecialFoodMenu/editSpecialMenu/'+id,
			caches: false,
			success: function (response) {
				if (response.status == 'success') {
					$('#hidden_id').val(response.data.id);
					$('#title_up').val(response.data.title);
					$('#description_up').val(response.data.description);
					$("#status_up").html(`
						<option value="Active" ${response.data.status == 'Active' ? 'selected' : ''}>${active_}</option>
                        <option value="Inactive" ${response.data.status == 'Inactive' ? 'selected' : ''}>${inactive}</option>
					`);
					$('#put_old_value_1').val(response.data.menu_img_1);
					$("#set_modal_image_1").html(`
						<img src="${base_url}images/website/special_food_menu/${response.data.menu_img_1}" alt="" width="300" height="100" class="text-center">
					`);
				} 
			}
		});
	});
	
	// Update Spcial Menu Data
	$(document).on('submit', '#form_update', function (e) {
		e.preventDefault();
		let formData = $(this);
		let title_up = $("#title_up").val();
		let description_up = $("#description_up").val();
		let status_up = $("#status_up").val();
		let error = false;
		if (title_up == "") {
			$("#title_err_msg_up").text(title_field_required);
			$(".title_err_msg_contnr").show(200);
			error = true;
		}
		if (description_up == "") {
			$("#description_err_msg_up").text(description_field_required);
			$(".description_err_msg_contnr").show(200);
			error = true;
		}
		if (status_up == "") {
			$("#status_err_msg_up").text(status_field_required);
			$(".status_err_msg_contnr").show(200);
			error = true;
		}
		let updateId = $("#hidden_id").val();
		if (error == false){
			$.ajax({
				type: "POST",
				url: base_url+'WebsiteAdminSpecialFoodMenu/updateSpecialMenu/'+updateId,
				dataType: "JSON",
				processData: false,
				contentType: false,
				cache: false,
				data: new FormData(this),
				success: function (response) {
					if(response.status == 'success'){
						$(formData).trigger('reset');
						$('#editModal').modal('hide');
						fatchAllData();
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
					}
				}
			});
		}

		
	});

	// Change Spcial Menu Status
	$(document).on('change', '#status_change', function (e) {
		e.preventDefault();
		let status = $(this).val();
		let plain_id = $(this).attr('row-id');
		swal.fire({
			title: do_you_want_to_save_the_changes,
			showDenyButton: false,
			showCancelButton: true,
			confirmButtonText: save,
		}).then((result) => {
			if (result.isConfirmed) {
				swal.fire(saved+'!', '', success)
				$.ajax({
					type: "POST",
					url: base_url+"WebsiteAdminSpecialFoodMenu/changeStatus/"+plain_id,
					data: {status: status},
					success: function (response) {
						if(response.status == 'success'){
							fatchAllData();
							$('#message_boxs').html("");
							$('#message_boxs').html(`
								<div class="alert alert-success alert-dismissible fade show"> 
									<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
									<div class="alert-body">
										<span><i class="m-right fa fa-check"></i></span>
										${status_changed_successfully}
									</div>
								</div>
							`);
						}
					}
				});
			} 
		});
	});
	
	// Delete Spcial Menu Data
	$(document).on('click', '#delItem', function (e) { 
		e.preventDefault();
		let delId = $(this).attr("del-id");
		Swal.fire({
			title: are_you_sure,
			text: you_wont_be_delete_this,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: yes_delete_it,
			cancelButtonText: cancel
		}).then((result) => {
			if (result.isConfirmed) {
			  	Swal.fire(
					delete_i,
					your_data_has_been_delete,
					success
				);
				$.ajax({
					type: "DELETE",
					url: base_url+"WebsiteAdminSpecialFoodMenu/deleteSpecialMenu/"+delId,
					success: function (response) {
						if(response.status == 'success'){
							fatchAllData();
							$('#message_boxs').html("");
							$('#message_boxs').html(`
							<div class="alert alert-success alert-dismissible fade show"> 
								<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
								<div class="alert-body">
									<span><i class="m-right fa fa-check"></i></span>
									${delete_success}
								</div>
							</div>
						`);
						}
					}
				});
			}
		});
	});



});