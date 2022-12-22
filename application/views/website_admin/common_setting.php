<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<input type="hidden" class="email_field_required" value="<?php echo lang('email_field_required');?>">
<input type="hidden" class="mobile_field_required" value="<?php echo lang('mobile_field_required');?>">
<input type="hidden" class="phone_field_required" value="<?php echo lang('phone_field_required');?>">
<input type="hidden" class="copy_right_field_required" value="<?php echo lang('copy_right_field_required');?>">
<input type="hidden" class="logo_field_required" value="<?php echo lang('logo_field_required');?>">
<input type="hidden" class="footer_logo_field_required" value="<?php echo lang('footer_logo_field_required');?>">
<input type="hidden" class="fav_icon_field_required" value="<?php echo lang('fav_icon_field_required');?>">
<input type="hidden" class="description_field_required" value="<?php echo lang('description_field_required');?>">
<input type="hidden" class="image_field_required" value="<?php echo lang('image_field_required');?>">
<input type="hidden" class="link_field_required" value="<?php echo lang('link_field_required');?>">
<input type="hidden" class="status_field_required" value="<?php echo lang('status_field_required');?>">
<input type="hidden" class="update_success" value="<?php echo lang('update_success');?>">



<link rel="stylesheet" href="<?php echo base_url(); ?>website_assets/css/common_style.css">


<section class="main-content-wrapper">
    <section class="alert-wrapper" id="message_boxs">
    </section>

    <section class="content-header">
        <h1><?php echo lang('common_setting');?></h1>
    </section>

    <div class="box-wrapper">
        <form enctype="multipart/form-data" id="form_update" >
            <div class="table-box">
                <div class="row">
                    <div class="col-lg-4 col-md-6 mb-3">
                        <div class="form-group">
                            <label for="email" class="form-label"><?php echo lang('email');?></label>
                            <input type="email" class="form-control trigger_reset" placeholder="<?php echo lang('email');?>" id="email" name="email" value="<?php echo escape_output($common_setting->email);?>">
                            <div class="callout callout-danger my-2 error-msg email_err_msg_contnr">
                                <p id="email_err_msg"></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-3">
                        <div class="form-group">
                            <label for="mobile" class="form-label"><?php echo lang('mobile');?></label>
                            <input type="number" class="form-control trigger_reset" placeholder="<?php echo lang('mobile');?>" id="mobile" name="mobile" value="<?php echo escape_output($common_setting->mobile);?>">
                            <div class="callout callout-danger my-2 error-msg mobile_err_msg_contnr">
                                <p id="mobile_err_msg"></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-3">
                        <div class="form-group">
                            <label for="phone" class="form-label"><?php echo lang('phone');?></label>
                            <input type="text" class="form-control trigger_reset" placeholder="<?php echo lang('phone');?>" id="phone" name="phone" value="<?php echo escape_output($common_setting->phone);?>">
                            <div class="callout callout-danger my-2 error-msg phone_err_msg_contnr">
                                <p id="phone_err_msg"></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-3">
                        <div class="form-group">
                            <div class="d-flex justify-content-between">
                                <label for="" class="form-label"><?php echo lang('logo');?></label>
                                <button type="button" class="btn bg-sm-blue-btn mb-1" data-bs-toggle="modal" data-bs-target="#showImageModal1">
                                        <?php echo lang('show_image')?>
                                </button>
                            </div>
                            <input type="file" class="form-control trigger_reset" name="logo" id="logo">
                            <input type="hidden" name="logo" id="put_old_value_1"  value="<?php echo escape_output($common_setting->logo);?>">
                            <div class="callout callout-danger my-2 error-msg logo_err_msg_contnr">
                                <p id="logo_err_msg"></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-3">
                        <div class="form-group">
                            <div class="d-flex justify-content-between">
                                <label for="" class="form-label"><?php echo lang('footer_logo');?></label>
                                <button type="button" class="btn bg-sm-blue-btn mb-1" data-bs-toggle="modal" data-bs-target="#showImageModal2">
                                        <?php echo lang('show_image')?>
                                </button>
                            </div>
                            <input type="file" class="form-control trigger_reset" name="footer_logo" id="footer_logo">
                            <input type="hidden" name="footer_logo" id="put_old_value_2"  value="<?php echo escape_output($common_setting->footer_logo);?>">
                            <div class="callout callout-danger my-2 error-msg footer_logo_err_msg_contnr">
                                <p id="footer_logo_err_msg"></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-3">
                        <div class="form-group">
                            <div class="d-flex justify-content-between">
                                <label for="" class="form-label"><?php echo lang('fav_icon');?></label>
                                <button type="button" class="btn bg-sm-blue-btn mb-1" data-bs-toggle="modal" data-bs-target="#showImageModal3">
                                        <?php echo lang('show_image')?>
                                </button>
                            </div>
                            <input type="file" class="form-control trigger_reset" name="fav_icon" id="fav_icon">
                            <input type="hidden" name="fav_icon" id="put_old_value_3"  value="<?php echo escape_output($common_setting->fav_icon);?>">
                            <div class="callout callout-danger my-2 error-msg fav_icon_err_msg_contnr">
                                <p id="fav_icon_err_msg"></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-3">
                        <div class="form-group">
                            <label for="copy_right" class="form-label"><?php echo lang('copy_right');?></label>
                            <input type="text" class="form-control trigger_reset" placeholder="<?php echo lang('copy_right');?>" id="copy_right" name="copy_right" value="<?php echo escape_output($common_setting->copy_right);?>">
                            <div class="callout callout-danger my-2 error-msg copy_right_err_msg_contnr">
                                <p id="copy_right_err_msg"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="box-footer">
                <button type="submit" class="btn bg-blue-btn"><?php echo lang('submit');?></button>
            </div>
        </form>
    </div>


   
</section>



<!-- Shwo Image Modal -->
<div class="modal fade" id="showImageModal1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="showImageModal1Label" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-email fs-5" id="exampleModal1Label"><?php echo lang('logo');?></h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                <i class="fa fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div id="set_modal_image_1" class="text-center">
                    <img src="<?php echo base_url();?>images/website/common_setting/<?php echo escape_output($common_setting->logo)?>" alt="logo" class="text-center">
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Shwo Image -->
<div class="modal fade" id="showImageModal2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="showImageModal2Label" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-email fs-5" id="exampleModal2Label"><?php echo lang('footer_logo');?></h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                <i class="fa fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div id="set_modal_image_2" class="text-center">
                    <img src="<?php echo base_url();?>images/website/common_setting/<?php echo escape_output($common_setting->footer_logo)?>" alt="Footer Icon" class="text-center">
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Shwo Image Modal -->
<div class="modal fade" id="showImageModal3" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="showImageModal3Label" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-email fs-5" id="exampleModal3Label"><?php echo lang('fav_icon');?></h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                <i class="fa fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div id="set_modal_image_3" class="text-center">
                    <img src="<?php echo base_url();?>images/website/common_setting/<?php echo escape_output($common_setting->fav_icon)?>" alt="Fav Icon" class="text-center">
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
<script src="<?php echo base_url(); ?>website_assets/js/common_setting.js"></script>


