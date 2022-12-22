<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>


<input type="hidden" class="edit" value="<?php echo lang('edit');?>">
<input type="hidden" class="delete" value="<?php echo lang('delete');?>">
<input type="hidden" class="title_field_required" value="<?php echo lang('title_field_required');?>">
<input type="hidden" class="subtitle_field_required" value="<?php echo lang('subtitle_field_required');?>">
<input type="hidden" class="banner_image_field_required" value="<?php echo lang('banner_image_field_required');?>">
<input type="hidden" class="link_field_required" value="<?php echo lang('link_field_required');?>">
<input type="hidden" class="status_field_required" value="<?php echo lang('status_field_required');?>">
<input type="hidden" class="active_" value="<?php echo lang('active_');?>">
<input type="hidden" class="inactive" value="<?php echo lang('inactive');?>">
<input type="hidden" class="success" value="<?php echo lang('success');?>">
<input type="hidden" class="are_you_sure" value="<?php echo lang('are_you_sure');?>">
<input type="hidden" class="you_wont_be_delete_this" value="<?php echo lang('you_wont_be_delete_this');?>">
<input type="hidden" class="yes_delete_it" value="<?php echo lang('yes_delete_it');?>">
<input type="hidden" class="your_data_has_been_delete" value="<?php echo lang('your_data_has_been_delete');?>">
<input type="hidden" class="cancel" value="<?php echo lang('cancel');?>">
<input type="hidden" class="do_you_want_to_save_the_changes" value="<?php echo lang('do_you_want_to_save_the_changes');?>">
<input type="hidden" class="save" value="<?php echo lang('save');?>">
<input type="hidden" class="view" value="<?php echo lang('view');?>">
<input type="hidden" class="saved" value="<?php echo lang('saved');?>">
<input type="hidden" class="insertion_success" value="<?php echo lang('insertion_success');?>">
<input type="hidden" class="update_success" value="<?php echo lang('update_success');?>">
<input type="hidden" class="delete_success" value="<?php echo lang('delete_success');?>">
<input type="hidden" class="status_changed_successfully" value="<?php echo lang('status_changed_successfully');?>">
<input type="hidden" class="title" value="<?php echo lang('title');?>">
<input type="hidden" class="sub_title" value="<?php echo lang('sub_title');?>">
<input type="hidden" class="link" value="<?php echo lang('link');?>">
<input type="hidden" class="status" value="<?php echo lang('status');?>">
<input type="hidden" class="banner_image" value="<?php echo lang('banner_image');?>">


<link rel="stylesheet" href="<?php echo base_url(); ?>website_assets/css/common_style.css">


<section class="main-content-wrapper">
    <section class="alert-wrapper" id="message_boxs">
    </section>


    <section class="content-header">
        <div class="row">
            <div class="col-md-12">
                <h2 class="top-left-header"><?php echo lang('banner_setting');?> </h2>
                <input type="hidden" class="datatable_name" data-title="<?php echo lang('banner_setting'); ?>" data-id_name="datatable">
            </div>
            <div>
                <button type="button" class="btn bg-blue-btn m-right btn_list" data-bs-toggle="modal" data-bs-target="#addModal">
                    <i data-feather="plus"></i> <?php echo lang('add_new')?>
                </button>
            </div>
        </div>
    </section>



    <div class="box-wrapper">
        <div class="table-box">
            <div class="table-responsive">
                <table id="datatable" class="table">
                    <thead>
                        <tr>
                            <th class="ir_w_1"> <?php echo lang('sn'); ?></th>
                            <th class="ir_w_20"><?php echo lang('title'); ?></th>
                            <th class="ir_w_25"><?php echo lang('sub_title'); ?></th>
                            <th class="ir_w_25"><?php echo lang('image'); ?></th>
                            <th class="ir_w_15"><?php echo lang('status'); ?></th>
                            <th class="ir_w_1 ir_txt_center not-export-col"><?php echo lang('actions'); ?></th>
                        </tr>
                    </thead>
                    <tbody id="banner_table_body">
                    </tbody>
                </table>
            </div>
            
        </div>
    </div>
</section>



<!-- Add Banner Modal -->
<div class="modal fade" id="addModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="addModalLabel"><?php echo lang('add_banner');?></h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                <i class="fa fa-times"></i>
                </button>
            </div>
            <form enctype="multipart/form-data" id="banner_form" >
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <label for="title" class="form-label"><?php echo lang('title');?></label>
                                <input type="text" class="form-control" placeholder="<?php echo lang('title');?>" id="title" name="title">
                                <div class="callout callout-danger my-2 error-msg title_err_msg_contnr">
                                    <p id="title_err_msg"></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <label for="sub_title" class="form-label"><?php echo lang('sub_title');?></label>
                                <input type="text" class="form-control" placeholder="<?php echo lang('sub_title');?>" id="sub_title" name="sub_title">
                                <div class="callout callout-danger my-2 error-msg subtitle_err_msg_contnr">
                                    <p id="subtitle_err_msg"></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <label for="" class="form-label"><?php echo lang('select_image');?><span class="text-danger ms-2"><?php echo lang('banner_dimension');?></span></label>
                                <input type="file" class="form-control" name="banner_image" id="banner_image">
                                <div class="callout callout-danger my-2 error-msg banner_image_err_msg_contnr">
                                    <p id="banner_image_err_msg"></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <label for="status" class="form-label"><?php echo lang('status');?></label>
                                <select name="status" id="status" class="form-control select2">
                                    <option value="Active"><?php echo lang('active');?></option>
                                    <option value="Inactive"><?php echo lang('inactive');?></option>
                                </select>
                                <div class="callout callout-danger my-2 error-msg status_err_msg_contnr">
                                    <p id="status_err_msg"></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <div class="d-flex">
                                    <label class="form-label"><?php echo lang('link');?> </label>
                                    <a href="javascript:void()" class="click_fo_no_link text-danger ms-2"><?php echo lang('click_here_for_no_link');?></a>
                                </div>
                                <input type="text" class="form-control set_no_link_val" placeholder="<?php echo lang('link');?>" id="link" name="link">
                                <div class="callout callout-danger my-2 error-msg link_err_msg_contnr">
                                    <p id="link_err_msg"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn bg-blue-btn" id="form_submit"><?php echo lang('submit');?></button>
                    <button type="button" class="btn bg-red-btn" data-bs-dismiss="modal"><?php echo lang('close');?></button>
                </div>
            </form>
        </div>
    </div>
</div>



<!-- Edit Banner Modal -->
<div class="modal fade" id="editBannerModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="editBannerModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="editBannerModalLabel"><?php echo lang('edit_banner');?></h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                <i class="fa fa-times"></i>
                </button>
            </div>
            <form enctype="multipart/form-data" id="banner_form_update" >
                <div class="modal-body">
                    <div class="row">
                        <input type="hidden" id="hidden_id">
                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <label for="title" class="form-label"><?php echo lang('title');?></label>
                                <input type="text" class="form-control" placeholder="<?php echo lang('title');?>" id="title_up" name="title">
                                <div class="callout callout-danger my-2 error-msg title_err_msg_contnr">
                                    <p id="title_err_msg_up"></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <label for="sub_title" class="form-label"><?php echo lang('sub_title');?></label>
                                <input type="text" class="form-control" placeholder="<?php echo lang('sub_title');?>" id="sub_title_up" name="sub_title">
                                <div class="callout callout-danger my-2 error-msg subtitle_err_msg_contnr">
                                    <p id="subtitle_err_msg_up"></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <div class="d-flex justify-content-between">
                                    <label for="" class="form-label"><?php echo lang('select_image');?><span class="text-danger ms-2"><?php echo lang('banner_dimension');?></span></label>
                                    <button type="button" class="btn bg-sm-blue-btn mb-1" data-bs-toggle="modal" data-bs-target="#showImageModal">
                                         <?php echo lang('show_image')?>
                                    </button>
                                </div>
                                <input type="file" class="form-control" name="banner_image" id="banner_image_up">
                                <input type="hidden" name="banner_image" id="put_old_value">
                                <div class="callout callout-danger my-2 error-msg banner_image_err_msg_contnr">
                                    <p id="banner_image_err_msg_up"></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <label for="status" class="form-label"><?php echo lang('status');?></label>
                                <select name="status" id="status_up" class="form-control select2">
                                </select>
                                <div class="callout callout-danger my-2 error-msg status_err_msg_contnr">
                                    <p id="status_err_msg_up"></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <div class="d-flex">
                                    <label for="link" class="form-label"><?php echo lang('link');?></label>
                                    <a href="javascript:void(0)" class="click_fo_no_link text-danger ms-2"><?php echo lang('click_here_for_no_link');?></a>
                                </div>
                                <input type="text" class="form-control set_no_link_val" placeholder="<?php echo lang('link');?>" id="link_up" name="link">
                                <div class="callout callout-danger my-2 error-msg link_err_msg_contnr">
                                    <p id="link_err_msg_up"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn bg-blue-btn" id="form_submit"><?php echo lang('submit');?></button>
                    <button type="button" class="btn bg-red-btn" data-bs-dismiss="modal"><?php echo lang('close');?></button>
                </div>
            </form>
        </div>
    </div>
</div>



<!-- View Banner Modal -->
<div class="modal fade" id="viewBannerModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="viewBannerModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="viewBannerModalLabel"><?php echo lang('banner_details');?></h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                <i class="fa fa-times"></i>
                </button>
            </div>
            <div class="modal-body" id="view_table">
                <table class="table table-striped">
                    <thead>
                        <th><strong><?php echo lang('key');?></strong></th>
                        <th><strong><?php echo lang('value');?></strong></th>
                    </thead>
                    <tbody id="view_table_body">
                        
                    </tbody>
                </table>  
            </div>
            <div class="modal-footer">
                <button type="button" class="btn bg-red-btn" data-bs-dismiss="modal"><?php echo lang('close');?></button>
            </div>
        </div>
    </div>
</div>


<!-- Shwo Image Modal -->
<div class="modal fade" id="showImageModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="showImageModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel"><?php echo lang('show_image');?></h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                <i class="fa fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div id="set_modal_image" class="text-center">

                </div>
            </div>
        </div>
    </div>
</div>




<script src="<?php echo base_url(); ?>frequent_changing/js/inventory.js"></script>
<!-- DataTables -->
<script src="<?php echo base_url(); ?>assets/datatable_custom/jquery-3.3.1.js"></script>
<script src="<?php echo base_url(); ?>frequent_changing/js/dataTable/jquery.dataTables.min.js"></script>
<script src="<?php echo base_url(); ?>assets/datatable_custom/dataTables.buttons.min.js"></script>
<script src="<?php echo base_url(); ?>assets/bower_components/datatables.net-bs/js/dataTables.bootstrap.min.js"></script>
<script src="<?php echo base_url(); ?>assets/datatable_custom/buttons.flash.min.js"></script>
<script src="<?php echo base_url(); ?>assets/datatable_custom/jszip.min.js"></script>
<script src="<?php echo base_url(); ?>assets/datatable_custom/pdfmake.min.js"></script>
<script src="<?php echo base_url(); ?>assets/datatable_custom/vfs_fonts.js"></script>
<script src="<?php echo base_url(); ?>assets/datatable_custom/buttons.html5.min.js"></script>
<script src="<?php echo base_url(); ?>assets/datatable_custom/buttons.print.min.js"></script>
<script src="<?php echo base_url(); ?>frequent_changing/newDesign/js/forTable.js"></script>
<script src="<?php echo base_url(); ?>frequent_changing/js/custom_report.js"></script>
<script src="<?php echo base_url();?>website_assets/js/banner.js"></script>


