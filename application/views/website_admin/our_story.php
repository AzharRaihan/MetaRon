<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<input type="hidden" class="title_field_required" value="<?php echo lang('title_field_required');?>">
<input type="hidden" class="subtitle_field_required" value="<?php echo lang('subtitle_field_required');?>">
<input type="hidden" class="description_field_required" value="<?php echo lang('description_field_required');?>">
<input type="hidden" class="image_field_required" value="<?php echo lang('image_field_required');?>">
<input type="hidden" class="link_field_required" value="<?php echo lang('link_field_required');?>">
<input type="hidden" class="status_field_required" value="<?php echo lang('status_field_required');?>">
<input type="hidden" class="active_" value="<?php echo lang('active_');?>">
<input type="hidden" class="inactive" value="<?php echo lang('inactive');?>">
<input type="hidden" class="update_success" value="<?php echo lang('update_success');?>">
<input type="hidden" class="title" value="<?php echo lang('title');?>">
<input type="hidden" class="sub_title" value="<?php echo lang('sub_title');?>">
<input type="hidden" class="link" value="<?php echo lang('link');?>">
<input type="hidden" class="status" value="<?php echo lang('status');?>">
<input type="hidden" class="banner_image" value="<?php echo lang('banner_image');?>">
<input type="hidden" class="image" value="<?php echo lang('image');?>">

<link rel="stylesheet" href="<?php echo base_url(); ?>website_assets/css/common_style.css">

<section class="main-content-wrapper">
    <section class="alert-wrapper" id="message_boxs">
    </section>


    <section class="content-header">
        <h1><?php echo lang('our_story_setting');?> </h1>
    </section>

    
    <div class="box-wrapper">
        <form enctype="multipart/form-data" id="form_update" >
            <div class="table-box">
                <div class="row">
                    <div class="col-lg-4 col-md-6 mb-3">
                        <div class="form-group">
                            <label for="title" class="form-label"><?php echo lang('title');?></label>
                            <input type="text" class="form-control" placeholder="<?php echo lang('title');?>" id="title" name="title" value="<?php echo escape_output($our_story->title);?>">
                            <div class="callout callout-danger my-2 error-msg title_err_msg_contnr">
                                <p id="title_err_msg"></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-3">
                        <div class="form-group">
                            <label for="sub_title" class="form-label"><?php echo lang('sub_title');?></label>
                            <input type="text" class="form-control" placeholder="<?php echo lang('sub_title');?>" id="sub_title" name="sub_title" value="<?php echo escape_output($our_story->sub_title);?>">
                            <div class="callout callout-danger my-2 error-msg subtitle_err_msg_contnr">
                                <p id="subtitle_err_msg"></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-3">
                        <div class="form-group">
                            <label for="description" class="form-label"><?php echo lang('description');?></label>
                            <input type="text" class="form-control" placeholder="<?php echo lang('description');?>" id="description" name="description" value="<?php echo escape_output($our_story->description);?>">
                            <div class="callout callout-danger my-2 error-msg description_err_msg_contnr">
                                <p id="description_err_msg"></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-3">
                        <div class="form-group">
                            <label for="status" class="form-label"><?php echo lang('status');?></label>
                            <select name="status" id="status" class="form-control select2">
                                <option value="Active" <?php echo $our_story->status == escape_output('Active') ? 'selected' : ''?>> <?php echo lang('active');?></option>
                                <option value="Inactive" <?php echo $our_story->status == escape_output('Inactive') ? 'selected' : ''?>><?php echo lang('inactive');?></option>
                            </select>
                            <div class="callout callout-danger my-2 error-msg status_err_msg_contnr">
                                <p id="status_err_msg"></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-3">
                        <div class="form-group">
                            <div class="d-flex justify-content-between">
                                <label for="" class="form-label"><?php echo lang('select_image');?><span class="text-danger ms-2"><?php echo lang('story_img_dimension');?></span></label>
                                <button type="button" class="btn bg-sm-blue-btn mb-1" data-bs-toggle="modal" data-bs-target="#showImageModal1">
                                        <?php echo lang('show_image')?>
                                </button>
                            </div>
                            <input type="hidden" name="story_img_1" id="put_old_value_1" value="<?php echo escape_output($our_story->story_img_1);?>">
                            <input type="file" class="form-control" name="story_img_1" id="story_img_1">
                            <div class="callout callout-danger my-2 error-msg story_img_1_err_msg_contnr">
                                <p id="story_img_1_err_msg"></p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 mb-3">
                        <div class="form-group">
                            <div class="d-flex justify-content-between">
                                <label for="" class="form-label"><?php echo lang('select_image');?><span class="text-danger ms-2"><?php echo lang('story_img_dimension');?></span></label>
                                <button type="button" class="btn bg-sm-blue-btn mb-1" data-bs-toggle="modal" data-bs-target="#showImageModal2">
                                        <?php echo lang('show_image')?>
                                </button>
                            </div>
                            <input type="hidden" name="story_img_2" id="put_old_value_2" value="<?php echo escape_output($our_story->story_img_2);?>">
                            <input type="file" class="form-control" name="story_img_2" id="story_img_2">
                            <div class="callout callout-danger my-2 error-msg story_img_2_err_msg_contnr">
                                <p id="story_img_2_err_msg"></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-3">
                        <div class="form-group">
                            <div class="d-flex">
                                <label class="form-label"><?php echo lang('link');?> </label>
                                <a href="javascript:void()" class="click_fo_no_link text-danger ms-2"><?php echo lang('click_here_for_no_link');?></a>
                            </div>
                            <input type="text" class="form-control set_no_link_val" placeholder="<?php echo lang('link');?>" id="link" name="link" value="<?php echo escape_output($our_story->link);?>">
                            <div class="callout callout-danger my-2 error-msg link_err_msg_contnr">
                                <p id="link_err_msg"></p>
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



<!-- Shwo Image Modal Modal -->
<div class="modal fade" id="showImageModal1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="showImageModal1Label" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModal1Label"><?php echo lang('show_image');?></h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                <i class="fa fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div id="set_modal_image_1" class="text-center">
                    <img src="<?php echo base_url();?>images/website/our_story/<?php echo escape_output($our_story->story_img_1)?>" alt="" width="300" height="370" class="text-center">
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Shwo Image Modal Modal -->
<div class="modal fade" id="showImageModal2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="showImageModal2Label" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModal2Label"><?php echo lang('show_image');?></h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                <i class="fa fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div id="set_modal_image_2" class="text-center">
                    <img src="<?php echo base_url();?>images/website/our_story/<?php echo escape_output($our_story->story_img_2)?>" alt="" width="300" height="370" class="text-center">
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
<script src="<?php echo base_url(); ?>website_assets/js/our_story.js"></script>


