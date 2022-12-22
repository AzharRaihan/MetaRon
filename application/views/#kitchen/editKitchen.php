<link rel="stylesheet" href="<?= base_url() ?>frequent_changing/css/custom_check_box.css">


<!-- Main content -->
<section class="main-content-wrapper">

    <?php
    if ($this->session->flashdata('exception')) {

        echo '<section class="alert-wrapper"><div class="alert alert-success alert-dismissible fade show"> 
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        <div class="alert-body"><p><i class="m-right fa fa-check"></i>';
        echo escape_output($this->session->flashdata('exception'));unset($_SESSION['exception']);
        echo '</p></div></div></section>';
    }
    ?>
    <section class="content-header">
        <h3 class="top-left-header">
            <!--  Add Kitchen-->
            <?php
            echo lang('edit_storage');
            ?>
        </h3>

    </section>


    <!-- left column -->
    <div class="box-wrapper">

        <?php echo form_open(base_url('Kitchen/addEditKitchen/' . $encrypted_id)); ?>

        <div class="row">
            <div class="col-sm-12 mb-2 col-md-3">
                <div class="form-group">
                    <label><?php echo lang('name'); ?> <span class="required_star">*</span> (<?php echo lang('kitchen_identify'); ?>)</label>
                    <input tabindex="1" autocomplete="off" type="text" name="name" class="form-control" placeholder="<?php echo lang('kitchen_identify_placeholder'); ?>" value="<?php echo $kitchen->name; ?>" />
                </div>
                <?php if (form_error('name')) { ?>
                    <div class="callout callout-danger my-2">
                        <?php echo form_error('name'); ?>
                    </div>
                <?php } ?>
            </div>

        </div>

        <div class="row">
            <div class="col-sm-12 mb-2 col-md-6">
                <div class="form-group">
                    <label class="label_kitchen"><?php echo lang('categories'); ?> &nbsp;&nbsp;&nbsp;<b><a target="_blank" href="<?php echo base_url() ?>Kitchen/kitchens"><?php echo lang('GotoList'); ?></a></b> </label>
                </div>
            </div>

            <div class="row">
                <div class="clearfix"></div>
                <div class="col-sm-6 col-md-12">
                    <label class="container txt_48 left_margin_12"> <?php echo lang('select_all'); ?>
                        <input class="checkbox_userAll" type="checkbox" id="checkbox_userAll">
                        <span class="checkmark"></span>
                    </label>
                </div>
            </div>
            <div class="clearfix"></div>
            <?php
            foreach ($categories as $category) {
                ?>
                <div class="col-sm-12 mb-3 col-md-6 col-lg-3">
                    <div class="border_custom">
                        <label class="container txt_47" for="checker_<?php echo $category->id?>"> <?="<b>".$category->category_name."</b>"?>
                            <input class="checkbox_user parent_class"  <?php echo $category->checker?> id="checker_<?php echo $category->id?>" data-name="<?php echo str_replace(' ', '_', $category->category_name)?>" value="<?=$category->id?>" type="checkbox" name="item_check[]" <?php echo set_checkbox('item_check[]', $category->id); ?>>
                            <span class="checkmark"></span>
                        </label>
                        <br>
                    </div>
                </div>
                <?php
            }
            ?>
            <div class="clearfix"></div>
            <div class="col-sm-12 mb-2 col-md-3">
                <div class="form-group">
                    <label><?php echo lang('ViaPanel'); ?></label>
                    <select class="form-control select2 kitchen_use_type" name="kitchen_use_type">
                        <option value=""><?php echo lang('select'); ?></option>
                        <option  <?php echo isset($kitchen->kitchen_use_type) && $kitchen->kitchen_use_type==1?'selected':''?> <?php echo set_select('kitchen_use_type',"1")?> value="1"><?php echo lang('ViaPanel'); ?></option>
                    </select>
                </div>
                <?php if (form_error('kitchen_use_type')) { ?>
                    <div class="callout callout-danger my-2">
                        <?php echo form_error('kitchen_use_type'); ?>
                    </div>
                <?php } ?>
                <div class="alert alert-info div_hide_1 label_tooltip_1 ir_display_none_normal" role="alert">
                    <?php echo lang('kitchen_panel_tooltip_1'); ?>
                </div>
            </div>


            <div class="col-sm-12 mb-2 col-md-3 printer_div ir_display_none_normal">
                <div class="form-group">
                    <label><?php echo lang('printer'); ?> <span class="required_star">*</span></label>
                    <select class="form-control select2" name="printer_id">
                        <option value=""><?php echo lang('select'); ?></option>
                        <?php foreach ($printers as $printer):?>
                            <option <?php echo isset($kitchen->printer_id) && $kitchen->printer_id==$printer->id?'selected':''?> <?php echo set_select('printer_id',$printer->id)?> value="<?php echo escape_output($printer->id); ?>"><?php echo escape_output($printer->title); ?></option>
                        <?php endforeach;?>
                    </select>
                </div>
                <?php if (form_error('printer_id')) { ?>
                    <div class="callout callout-danger my-2">
                        <?php echo form_error('printer_id'); ?>
                    </div>
                <?php } ?>
            </div>

            <div class="col-sm-12 mb-2 col-md-3 printer_div ir_display_none_normal">
                <div class="form-group">
                    <label><?php echo lang('print_server_url'); ?> (<?php echo lang('live_server_print_required'); ?>)</label>
                    <input tabindex="1" autocomplete="off" type="text" name="print_server_url" class="form-control" placeholder="<?php echo lang('print_server_url'); ?>" value="<?php echo $kitchen->print_server_url; ?>" />
                </div>
                <?php if (form_error('print_server_url')) { ?>
                    <div class="callout callout-danger my-2">
                        <?php echo form_error('print_server_url'); ?>
                    </div>
                <?php } ?>
            </div>

            <div class="row my-3">
                <div class="col-sm-12 col-md-2">
                    <button type="submit" name="submit" value="submit" class="w-100 btn bg-blue-btn">
                        <?php echo lang('submit'); ?>
                    </button>
                </div>

                <div class="col-sm-12 col-md-2">
                    <a class="w-100 btn bg-blue-btn" href="<?php echo base_url() ?>Kitchen/kitchens">
                        <?php echo lang('back'); ?>
                    </a>
                </div>
            </div>
        </div>

        <?php echo form_close(); ?>

    </div>


</section>
<script src="<?php echo base_url(); ?>frequent_changing/js/add_outlet.js"></script>