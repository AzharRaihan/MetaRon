<input type="hidden" id="ingredient_already_remain" value="<?php echo lang('ingredient_already_remain'); ?>">
<input type="hidden" id="name_field_required" value="<?php echo lang('name_field_required'); ?>">
<input type="hidden" id="sale_price_field_required" value="<?php echo lang('sale_price_field_required'); ?>">
<input type="hidden" id="category_field_required" value="<?php echo lang('category_field_required'); ?>">
<input type="hidden" id="veg_item_field_required" value="<?php echo lang('veg_item_field_required'); ?>">
<input type="hidden" id="beverage_item_field_required" value="<?php echo lang('beverage_item_field_required'); ?>">
<input type="hidden" id="bar_item_field_required" value="<?php echo lang('bar_item_field_required'); ?>">
<input type="hidden" id="description_field_can_not_exceed" value="<?php echo lang('description_field_can_not_exceed'); ?>">
<input type="hidden" id="consumption" value="<?php echo lang('consumption'); ?>">
<input type="hidden" id="Edit_Variation" value="<?php echo lang('Edit_Variation'); ?>">
<input type="hidden" id="tax_type_custom" value="<?php  echo $this->session->userdata('tax_type')?>">
<script src="<?php echo base_url(); ?>frequent_changing/js/add_food_menu.js"></script>
<link rel="stylesheet" href="<?php echo base_url(); ?>frequent_changing/css/add_food_menu.css">
<link rel="stylesheet" href="<?php echo base_url(); ?>frequent_changing/css/variation.css">
<select id="storage_div" style="display: none">
    <?php foreach ($storages as $value): ?>
        <option value="<?php echo $value->id?>"><?php echo $value->name?></option>
    <?php endforeach;?>
</select>
<style>
    <?php if(sizeof($storages)<=1):?>
            .is_storage{
                display: none !important;
            }
    <?php endif?>
</style>
<section class="main-content-wrapper">
    <section class="content-header">
        <h3 class="top-left-header">
            <?php echo lang('add_food_menu'); ?>
        </h3>
    </section>



        <div class="box-wrapper">
            <!-- general form elements -->
            <div class="table-box">
                <?php echo form_open(base_url() . 'foodMenu/addEditFoodMenu', $arrayName = array('id' => 'food_menu_form', 'enctype' => 'multipart/form-data')) ?>
                <div>
                    <div class="row">
                        <div class="col-sm-12 mb-2 col-md-3">
                            <div class="form-group">
                                <label><?php echo lang('name'); ?> <span class="required_star">*</span></label>
                                <input tabindex="1" type="text" id="name" name="name" class="form-control"
                                    placeholder="<?php echo lang('name'); ?>" value="<?php echo set_value('name'); ?>">
                            </div>
                            <?php if (form_error('name')) { ?>
                            <div class="callout callout-danger my-2">
                                <?php echo form_error('name'); ?>
                            </div>
                            <?php } ?>
                            <div class="callout callout-danger my-2 error-msg name_err_msg_contnr">
                                <p id="name_err_msg"></p>
                            </div>
                        </div>
                        <div class="col-sm-12 mb-2 col-md-3">
                            <div class="form-group">
                                <label><?php echo lang('code'); ?></label>
                                <input tabindex="6" type="text" name="code" id="code"  class="form-control"
                                    placeholder="<?php echo lang('code'); ?>" value="<?php echo escape_output($autoCode); ?>">
                            </div>
                        </div>
                        <div class="col-sm-12 mb-2 col-md-3">
                            <div class="form-group">
                                <label><?php echo lang('category'); ?> <span class="required_star">*</span></label>
                                <select tabindex="2" class="form-control select2 ir_w_100" id="category_id"
                                    name="category_id">
                                    <option value=""><?php echo lang('select'); ?></option>
                                    <?php foreach ($categories as $ctry) { ?>
                                    <option value="<?php echo escape_output($ctry->id) ?>"
                                        <?php echo set_select('category_id', $ctry->id); ?>>
                                        <?php echo escape_output($ctry->category_name) ?></option>
                                    <?php } ?>
                                </select>
                            </div>
                            <?php if (form_error('category_id')) { ?>
                            <div class="callout callout-danger my-2">
                                <?php echo form_error('category_id'); ?>
                            </div>
                            <?php } ?>
                            <div class="callout callout-danger my-2 error-msg category_err_msg_contnr">
                                <p id="category_id_err_msg"></p>
                            </div>

                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-12 mb-2 col-md-3">
                            <div class="form-group">
                                <label><?php echo lang('ingredient_consumptions'); ?> <span
                                        class="required_star">*</span></label>
                                <select tabindex="5" class="txt_21 form-control select2 select2-hidden-accessible"
                                    name="ingredient_id" id="ingredient_id">
                                    <option value=""><?php echo lang('select'); ?></option>
                                    <?php foreach ($ingredients as $ingnts) { ?>
                                    <option
                                            value="<?php echo escape_output($ingnts->id . "|" . $ingnts->name . "|" . $ingnts->unit_name. "|" . $ingnts->consumption_unit_cost) ?>"
                                        <?php echo set_select('unit_id', $ingnts->id); ?>>
                                        <?php echo escape_output($ingnts->name . "(" . $ingnts->code . ")"); ?></option>
                                    <?php } ?>
                                </select>
                            </div>
                            <?php if (form_error('ingredient_id')) { ?>
                            <div class="callout callout-danger my-2">
                                <?php echo form_error('ingredient_id'); ?>
                            </div>
                            <?php } ?>
                            <div class="callout callout-danger my-2 error-msg ingredient_err_msg_contnr">
                                <p id="ingredient_id_err_msg"></p>
                            </div>
                        </div>
                        <div class="col-sm-12 mb-2 col-md-2">
                            <div class="hidden-xs hidden-sm mt-2">&nbsp;</div>
                            <a class="btn bg-red-btn" data-bs-toggle="modal"
                                data-bs-target="#noticeModal"><?php echo lang('read_me_first'); ?></a>
                        </div>
                        <div class="clearfix"></div>
                        <div class="hidden-lg hidden-sm">&nbsp;</div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th><?php echo lang('sn'); ?></th>
                                            <th><?php echo lang('ingredient'); ?></th>
                                            <th  class="is_storage"><?php echo lang('Storage'); ?></th>
                                            <th><?php echo lang('consumption'); ?></th>
                                            <th><?php echo lang('consumption_cost'); ?></th>
                                            <th><?php echo lang('total'); ?></th>
                                            <th><?php echo lang('actions'); ?></th>
                                        </tr>
                                    </thead>
                                    <tbody id="ingredient_consumption_table">

                                    </tbody>
                                    <tfoot>
                                    <tr>
                                        <th></th>
                                        <th class="is_storage"></th>
                                        <th></th>
                                        <th></th>
                                        <th class="pull-right padding_17"><?php echo lang('total'); ?> <?php echo lang('cost'); ?></th>
                                        <th><input type="text" class="form-control" readonly name="grand_total_cost" placeholder="<?php echo lang('total'); ?> <?php echo lang('cost'); ?>" id="grand_total_cost"> </th>
                                        <th></th>
                                    </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3">
                            <div class="form-group">
                                <label><?php echo lang('sale_price_3'); ?> <span class="required_star">*</span></label>
                                <table style="width: 100%">
                                    <tr>
                                        <td><input tabindex="3" autocomplete="off" type="text"  onfocus="this.select();" id="sale_price_tmp" name="sale_price_tmp" class="form-control integerchk cal_row"  placeholder="<?php echo lang('sale_price'); ?>" value="<?php echo set_value('sale_price_tmp'); ?>"></td>
                                        <td style="width: 1%;text-align: right"> <span class="label_aligning_total_loss">
                                                <?php echo $this->session->userdata('currency'); ?>
                                            </span></td>
                                        <td style="width: 8%;text-align: right;font-size: 23px;cursor: pointer;"><i  data-toggle="tooltip" data-placement="bottom" title="<?php echo lang('guide_sale_price'); ?>" data-feather="info" style="width:18px;"></i> </td>
                                    </tr>
                                </table>
                            </div>
                            <?php if (form_error('sale_price_tmp')) { ?>
                                <div class="alert alert-error" style="padding: 5px !important;">
                                    <p><?php echo form_error('sale_price_tmp'); ?></p>
                                </div>
                            <?php } ?>
                        </div>

                        <div class="col-sm-12 mb-2 col-md-3">
                            <div class="form-group">
                                <label><?php echo lang('description'); ?></label>
                                <input tabindex="1" type="text" id="description" name="description" class="form-control"
                                    placeholder="<?php echo lang('description'); ?>"
                                    value="<?php echo set_value('description'); ?>">
                            </div>
                            <?php if (form_error('description')) { ?>
                            <div class="callout callout-danger my-2">
                                <?php echo form_error('description'); ?>
                            </div>
                            <?php } ?>
                            <div class="callout callout-danger my-2 error-msg description_err_msg_contnr">
                                <p id="description_err_msg"></p>
                            </div>
                        </div>
                        <div class="col-sm-12 mb-2 col-md-3">
                            <div class="form-group">
                                <label><?php echo lang('photo'); ?> </label>
                                <input class="form-control" tabindex="10" type="file" name="photo" id="photo">
                            </div>
                            <?php if (form_error('photo')) { ?>
                            <div class="callout callout-danger my-2">
                                <?php echo form_error('photo'); ?>
                            </div>
                            <?php } ?>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12 mb-2 col-md-3">
                            <div class="form-group">
                                <label><?php echo lang('is_it_veg'); ?> ? <span class="required_star"> *</span></label>
                                <select tabindex="2" class="form-control select2 ir_w_100" id="veg_item"
                                    name="veg_item">
                                    <option value="Veg No"><?php echo lang('no'); ?></option>
                                    <option value="Veg Yes"><?php echo lang('yes'); ?></option>
                                </select>
                            </div>
                            <?php if (form_error('veg_item')) { ?>
                            <div class="callout callout-danger my-2">
                                <?php echo form_error('veg_item'); ?>
                            </div>
                            <?php } ?>
                            <div class="callout callout-danger my-2 error-msg veg_item_err_msg_contnr">
                                <p id="veg_item_err_msg"></p>
                            </div>

                        </div>

                        <div class="col-sm-12 mb-2 col-md-3">
                            <div class="form-group">
                                <label><?php echo lang('is_it_beverage'); ?> ? <span
                                        class="required_star">*</span></label>
                                <select tabindex="2" class="w-100 form-control select2" id="beverage_item"
                                    name="beverage_item">
                                    <option value="Beverage No"><?php echo lang('no'); ?></option>
                                    <option value="Beverage Yes"><?php echo lang('yes'); ?></option>
                                </select>
                            </div>
                            <?php if (form_error('beverage_item')) { ?>
                            <div class="callout callout-danger my-2">
                                <?php echo form_error('beverage_item'); ?>
                            </div>
                            <?php } ?>
                            <div class="callout callout-danger my-2 error-msg beverage_item_err_msg_contnr">
                                <p id="beverage_item_err_msg"></p>
                            </div>
                        </div>

                        <div class="col-sm-12 mb-2 col-md-3">
                            <div class="form-group">
                                <label><?php echo lang('is_it_bar'); ?> ? <span class="required_star">*</span></label>
                                <select tabindex="2" class="form-control select2 ir_w_100" id="bar_item"
                                    name="bar_item">
                                    <option value="Bar No"><?php echo lang('no'); ?></option>
                                    <option value="Bar Yes"><?php echo lang('yes'); ?></option>
                                </select>
                            </div>
                            <?php if (form_error('bar_item')) { ?>
                            <div class="callout callout-danger my-2">
                                <?php echo form_error('bar_item'); ?>
                            </div>
                            <?php } ?>
                            <div class="callout callout-danger my-2 error-msg bar_item_err_msg_contnr">
                                <p id="bar_item_err_msg"></p>
                            </div>

                        </div>

                    </div>

                    <div class="row">
                        <?php
                        $collect_tax = $this->session->userdata('collect_tax');
                        if(isset($collect_tax) && $collect_tax=="Yes"):
                        //get company data
                        $company = getCompanyInfo();
                        $tax_setting = json_decode($company->tax_setting);
                        foreach($tax_setting as $tax_field){ ?>

                        <div class="col-sm-12 mb-2 col-md-3">
                            <div class="form-group">
                                <label><?php echo escape_output($tax_field->tax) ?></label>
                                <table class="ir_w_100">
                                    <tr>
                                        <td>
                                            <input tabindex="1" type="hidden" name="tax_field_id[]"
                                                value="<?php echo escape_output((isset($tax_field->id) && $tax_field->id?$tax_field->id:'')) ?>">
                                            <input tabindex="1" type="hidden" name="tax_field_company_id[]"
                                                value="<?php echo escape_output($company->id) ?>">
                                            <input tabindex="1" type="hidden" name="tax_field_name[]"
                                                value="<?php echo escape_output($tax_field->tax) ?>">
                                            <input readonly tabindex="1" type="text" name="tax_field_percentage[]"
                                                class="form-control integerchk cal_row cal_row_counter"
                                                placeholder="<?php echo escape_output($tax_field->tax) ?>" value="<?php echo escape_output($tax_field->tax_rate)?>">
                                        </td>
                                        <td class="txt_27">%</td>
                                    </tr>
                                </table>


                            </div>
                        </div>
                        <?php }
                        endif;
                        ?>
                        <div class="clearfix"></div>
                        <?php $tax_typ = $this->session->userdata('tax_type');
                        if($tax_typ =="2"):
                            ?>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label><?php echo lang('sale_price_2'); ?> <span class="required_star">*</span></label>
                                    <table style="width: 100%">
                                        <tr>
                                            <td><input tabindex="3" autocomplete="off" type="text"  onfocus="this.select();" id="sale_price" name="sale_price" class="form-control integerchk"  placeholder="<?php echo lang('sale_price'); ?>" value="<?php echo set_value('sale_price'); ?>"></td>
                                            <td style="width: 1%;text-align: right"> <span class="label_aligning_total_loss">
                                                <?php echo $this->session->userdata('currency'); ?>
                                            </span></td>
                                        </tr>
                                    </table>
                                </div>
                                <?php if (form_error('sale_price')) { ?>
                                    <div class="alert alert-error" style="padding: 5px !important;">
                                        <p><?php echo form_error('sale_price'); ?></p>
                                    </div>
                                <?php } ?>
                            </div>
                        <?php else:?>
                            <input type="hidden" onfocus="this.select();" id="sale_price" name="sale_price" value="<?php echo set_value('sale_price'); ?>">
                        <?php endif;?>
                    </div>
                    <div class="row div_show_hide">
                        <p>&nbsp;</p>
                        <h4><?php echo lang('Variation'); ?></h4>
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                <tr>
                                    <th><?php echo lang('sn'); ?></th>
                                    <th><?php echo lang('variation_name'); ?></th>
                                    <th><?php echo lang('code'); ?></th>
                                    <th><?php echo lang('sale_price'); ?></th>
                                    <th><?php echo lang('actions'); ?></th>
                                </tr>
                                </thead>
                                <tbody class="added_ingr_view">

                                </tbody>
                            </table>
                        </div>

                        <div class="col-sm-12 col-md-2 mb-2">
                            <button type="button" name="submit" class="btn bg-blue-btn w-100 add_variation" data-title="<?php echo lang('Add_Variation'); ?>"><?php echo lang('Add_Variation'); ?></button>
                        </div>

                    </div>
                    <!-- /.box-body -->

                    <div class="row mt-3">
                        <div class="col-sm-12 col-md-2 mb-2">
                            <button type="submit" name="submit" value="submit"
                                class="btn bg-blue-btn w-100"><?php echo lang('submit'); ?></button>
                        </div>
                        <div class="col-sm-12 col-md-2 mb-2">
                            <a class="btn bg-blue-btn w-100" href="<?php echo base_url() ?>foodMenu/foodMenus">
                                <?php echo lang('back'); ?>
                            </a>
                        </div>
                    </div>
                    <?php echo form_close(); ?>
                </div>
            </div>
        </div>



    <div class="modal fade" id="noticeModal" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="noticeModal">
            <div class="modal-content">
                <div class="modal-header">
                <h4 class="modal-title">Notice</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true"><i data-feather="x"></i></span></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12">
                            <p class="foodMenuCartNotice">
                                <strong class="ir_m_l_45"><?php echo lang('notice'); ?></strong><br>
                                <?php echo lang('notice_text_1'); ?>
                            </p>
                        </div>
                        <div class="col-md-12">
                            <p class="foodMenuCartInfo">
                                <a class="ir_font_bold" href="https://www.convert-me.com/en/convert/"
                                    target="_blank"><?php echo lang('click_here'); ?></a>
                                <?php echo lang('notice_text_2'); ?>
                                <br>
                                <br>
                                <?php echo lang('notice_text_3'); ?>
                                <br>
                                <span
                                    class="txt_17"><?php echo lang('notice_text_4'); ?></span>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div class="modal fade" id="variation_modal" role="dialog" aria-labelledby="myModalLabel">
        <input type="hidden" id="variation_update_id" value="">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title variation_title">--</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true"><i data-feather="x"></i></span></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-sm-12 col-md-4">
                            <div class="form-group">
                                <label><?php echo lang('variation_name'); ?> <span class="required_star">*</span> </label>
                                <div class="tooltip_custom">
                                    <i data-bs-toggle="tooltip" data-bs-placement="top" title="<?php echo lang('variation_tooltip'); ?>" data-feather="help-circle"></i>
                                </div>
                                <input tabindex="1" type="text" id="variation_name" name="variation_name" class="form-control required_checker"
                                       placeholder="<?php echo lang('variation_name'); ?>" value="<?php echo set_value('variation_name'); ?>">
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <div class="form-group">
                                <label><?php echo lang('code'); ?> <span class="required_star">*</span></label>
                                <input tabindex="1" type="text" id="variation_name_code" name="variation_name_code" class="form-control required_checker"
                                       placeholder="<?php echo lang('code'); ?>" value="<?php echo set_value('variation_name_code'); ?>">
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <div class="form-group">
                                <label><?php echo lang('sale_price_3'); ?>  <span class="required_star">*</span></label>
                                <input tabindex="1" type="text" id="m_sale_price_tmp" name="m_sale_price_tmp" class="form-control integerchk required_checker vr01_cal_row"
                                       placeholder="<?php echo lang('sale_price'); ?>" value="<?php echo set_value('m_sale_price_tmp'); ?>">
                            </div>
                        </div>
                        <div class="clearfix"></div>

                        <p class="margin_0">&nbsp;</p>
                        <div class="col-sm-12 mb-2 col-md-4">
                            <div class="form-group">
                                <label><?php echo lang('ingredient_consumptions'); ?></label>
                                <select tabindex="5" class="form-control select2"
                                        name="vr01_md_ingredient_id" id="vr01_md_ingredient_id">
                                    <option value=""><?php echo lang('select'); ?></option>
                                    <?php foreach ($ingredients as $ingnts) { ?>
                                        <option
                                                value="<?php echo escape_output($ingnts->id . "|" . $ingnts->name . "|" . $ingnts->unit_name. "|" . $ingnts->consumption_unit_cost) ?>"
                                            <?php echo set_select('unit_id', $ingnts->id); ?>>
                                            <?php echo escape_output($ingnts->name . "(" . $ingnts->code . ")"); ?></option>
                                    <?php } ?>
                                </select>
                            </div>
                        </div>

                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                <tr>
                                    <th><?php echo lang('sn'); ?></th>
                                    <th><?php echo lang('ingredient'); ?></th>
                                    <th  class="is_storage"><?php echo lang('Storage'); ?></th>
                                    <th><?php echo lang('consumption'); ?></th>
                                    <th><?php echo lang('cost'); ?></th>
                                    <th><?php echo lang('total'); ?></th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody class="added_ingr">

                                </tbody>
                                <tfoot>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th class="is_storage"></th>
                                    <th></th>
                                    <th class="pull-right padding_17"><?php echo lang('total'); ?> <?php echo lang('cost'); ?></th>
                                    <th><input type="text" class="form-control" readonly name="var01_grand_total_cost" placeholder="<?php echo lang('total'); ?> <?php echo lang('cost'); ?>" id="var01_grand_total_cost"> </th>
                                    <th></th>
                                </tr>
                                </tfoot>
                            </table>
                        </div>
                        <p class="margin_0">&nbsp;</p>
                        <?php
                        $collect_tax = $this->session->userdata('collect_tax');
                        if(isset($collect_tax) && $collect_tax=="Yes"):
                            //get company data
                            $company = getCompanyInfo();
                            $tax_setting = json_decode($company->tax_setting);
                            foreach($tax_setting as $tax_field){ ?>

                                <div class="col-sm-12 mb-2 col-md-4">
                                    <div class="form-group">
                                        <label><?php echo escape_output($tax_field->tax) ?></label>
                                        <table class="ir_w_100">
                                            <tr>
                                                <td class="tax_details">
                                                    <input type="hidden" value="" name="counter_tax[]">
                                                    <input tabindex="1" type="hidden" class="vr01_tax_field_id"
                                                           value="<?php echo escape_output((isset($tax_field->id) && $tax_field->id?$tax_field->id:'')) ?>">
                                                    <input tabindex="1" type="hidden" class="vr01_tax_field_company_id"
                                                           value="<?php echo escape_output($company->id) ?>">
                                                    <input tabindex="1" type="hidden" class="vr01_tax_field_name"
                                                           value="<?php echo escape_output($tax_field->tax) ?>">
                                                    <input tabindex="1" type="text"
                                                           readonly class="form-control integerchk add_change_value vr01_tax_field_percentage vr01_cal_row_counter"
                                                           placeholder="<?php echo escape_output($tax_field->tax) ?>" value="<?php echo escape_output($tax_field->tax_rate)?>">
                                                </td>
                                                <td class="txt_27">%</td>
                                            </tr>
                                        </table>


                                    </div>
                                </div>
                            <?php }
                        endif;
                        ?>
                        <?php $tax_typ = $this->session->userdata('tax_type');
                        if($tax_typ =="2"):
                        ?>
                        <div class="col-sm-12 col-md-4">
                            <div class="form-group">
                                <label><?php echo lang('sale_price_2'); ?>  <span class="required_star">*</span></label>
                                <input tabindex="1" type="text" id="m_sale_price" name="m_sale_price" class="form-control integerchk required_checker"
                                       placeholder="<?php echo lang('sale_price'); ?>" value="<?php echo set_value('m_sale_price'); ?>">
                            </div>
                        </div>
                        <?php else:?>
                            <input type="hidden" onfocus="this.select();" id="m_sale_price" name="m_sale_price" value="">
                        <?php endif;?>
                    </div>

                    <div class="row mt-3">
                        <div class="col-sm-12 col-md-3 mb-2">
                            <button type="button" name="submit" value="submit"
                                    class="btn bg-blue-btn w-100 add_variation_html"><?php echo lang('submit'); ?></button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>