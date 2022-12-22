<link rel="stylesheet" href="<?php echo base_url(); ?>frequent_changing/css/add_transfer.css">
<script type="text/javascript" src="<?php echo base_url('frequent_changing/supplier.js'); ?>"></script>

<input type="hidden" id="food_menu_already_remain" value="<?php echo lang('ingredient_already_remain'); ?>">
<input type="hidden" id="date_field_required" value="<?php echo lang('date_field_required'); ?>">
<input type="hidden" id="at_least_food_menu" value="<?php echo lang('at_least_ingredient'); ?>">
<input type="hidden" id="paid_field_required" value="<?php echo lang('paid_field_required'); ?>">
<input type="hidden" id="base_url" value="<?php echo base_url(); ?>">
<input type="hidden" id="are_you_sure" value="<?php echo lang('are_you_sure'); ?>">
<input type="hidden" id="alert" value="<?php echo lang('alert'); ?>">
<input type="hidden" id="ingredient" value="<?php echo lang('ingredient'); ?>">
<input type="hidden" id="your_current_stock_is" value="<?php echo lang('your_current_stock_is'); ?>">
<input type="hidden" id="food_menu" value="<?php echo lang('food_menu'); ?>">
<input type="hidden" id="transfer_id_c" value="">
<input type="hidden" id="is_disabled_change" value="">

<script type="text/javascript" src="<?php echo base_url('frequent_changing/js/add_transfer.js'); ?>"></script>

<section class="main-content-wrapper">
    <section class="content-header">
        <h3 class="top-left-header">
            <?php echo lang('add_transfer'); ?>
        </h3>
    </section>


        <div class="box-wrapper">
            <!-- general form elements -->
            <div class="table-box">


                <?php echo form_open(base_url() . 'Transfer/addEditTransfer', $arrayName = array('id' => 'transfer_form')) ?>
                <div>
                    <div class="row">
                        <div class="col-sm-12 col-md-4 col-lg-3 mb-2">
                            <div class="form-group">
                                <label><?php echo lang('ref_no'); ?></label>
                                <input tabindex="1" type="text" id="reference_no" readonly name="reference_no"
                                    class="form-control" placeholder="<?php echo lang('ref_no'); ?>"
                                    value="<?php echo escape_output($pur_ref_no); ?>">
                            </div>
                            <?php if (form_error('reference_no')) { ?>
                            <div class="callout callout-danger my-2">
                                <?php echo form_error('reference_no'); ?>
                            </div>
                            <?php } ?>
                            <div class="callout callout-danger my-2 error-msg name_err_msg_contnr">
                                <p id="name_err_msg"></p>
                            </div>
                        </div>

                        <div class="col-sm-12 col-md-4 col-lg-3 mb-2">
                            <div class="form-group">
                                <label><?php echo lang('date'); ?> <span class="required_star">*</span></label>
                                <input tabindex="3" readonly type="text" id="date" name="date" class="form-control"
                                    placeholder="<?php echo lang('date'); ?>" value="<?=date('Y-m-d',strtotime('today'))?>">
                            </div>
                            <?php if (form_error('date')) { ?>
                            <div class="callout callout-danger my-2">
                                <?php echo form_error('date'); ?>
                            </div>
                            <?php } ?>
                            <div class="callout callout-danger my-2 error-msg date_err_msg_contnr"">
                                <p id="date_err_msg">
                                </p>
                            </div>
                        </div>

                        <div class="col-sm-12 col-md-4 col-lg-3 mb-2">
                            <div class="form-group">
                                <label><?php echo lang('to_outlet'); ?> <span class="required_star">*</span></label>
                                <select tabindex="4" class="form-control select2 select2-hidden-accessible ir_w_100"
                                        name="to_outlet_id" id="to_outlet_id">
                                    <option value=""><?php echo lang('select'); ?></option>
                                    <?php foreach ($outlets as $value) {
                                        $outlet_id = $this->session->userdata('outlet_id');
                                        if($outlet_id!=$value->id):
                                            ?>
                                        <option value="<?php echo escape_output($value->id) ?>"
                                            <?php echo set_select('to_outlet_id', $value->id); ?>>
                                            <?php echo escape_output($value->outlet_name) ?></option>
                                    <?php
                                    endif;
                                    } ?>
                                </select>
                                <?php if (form_error('to_outlet_id')) { ?>
                                    <div class="callout callout-danger my-2">
                                        <?php echo form_error('to_outlet_id'); ?>
                                    </div>
                                <?php } ?>
                            </div>
                        </div>

                        <div class="col-sm-12 col-md-4 col-lg-3 mb-2">
                            <div class="form-group">
                                <label><?php echo lang('status'); ?> <span class="required_star">*</span></label>
                                <select tabindex="4" class="form-control select2 select2-hidden-accessible ir_w_100"
                                        name="status" id="status">
                                    <option value="2"><?php echo lang('hold'); ?></option>
                                    <option value="3"><?php echo lang('Sent'); ?></option>
                                    <option value="1" disabled><?php echo lang('Received'); ?></option>
                                </select>
                                <?php if (form_error('status')) { ?>
                                    <div class="callout callout-danger my-2">
                                        <?php echo form_error('status'); ?>
                                    </div>
                                <?php } ?>
                            </div>
                        </div>

                        <div class="col-sm-12 col-md-4 col-lg-3 mb-2">
                            <div class="form-group">
                                <label><?php echo lang('ingredients'); ?> <span class="required_star">*</span></label>
                                <select tabindex="4" class="form-control select2 select2-hidden-accessible ir_w_100" id="ingredient_id">
                                    <option value=""><?php echo lang('select'); ?></option>
                                    <?php foreach ($ingredients as $ingnts) { ?>
                                        <option
                                        value="<?php echo escape_output($ingnts->id . "||" . $ingnts->name . " (" . $ingnts->code . ")||" . $ingnts->purchase_price. "||" . $ingnts->unit_name) ?>"
                                        <?php echo set_select('ingredient_id', $ingnts->id); ?>>
                                        <?php echo escape_output($ingnts->name . "(" . $ingnts->code . ")") ?></option>
                                    <?php } ?>
                                </select>
                            </div>
                            <?php if (form_error('ingredient_id')) { ?>
                            <div class="callout callout-danger my-2">
                                <?php echo form_error('ingredient_id'); ?>
                            </div>
                            <?php } ?>
                            <div class="callout callout-danger my-2 error-msg ingredient_id_err_msg_contnr">
                                <p id="ingredient_id_err_msg"></p>
                            </div>
                        </div>
                        <div class="hidden-lg hidden-sm">&nbsp;</div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="table-responsive" id="transfer_cart">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th><?php echo lang('sn'); ?></th>
                                            <th>
                                                <span><?php echo lang('ingredient'); ?></span>(<?php echo lang('code'); ?>)</th>
                                            <th><?php echo lang('quantity_amount'); ?></th>
                                            <th><?php echo lang('actions'); ?></th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>


                    <div class="row">
                        <div class="col-md-4"></div>
                        <div class="col-md-4">
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label><?php echo lang('note_for_sender'); ?></label>
                                <textarea class="form-control" placeholder="<?php echo lang('note_for_sender'); ?>" name="note_for_sender"
                                          id="note_for_sender"><?php echo set_value('note_for_sender'); ?></textarea>
                            </div>
                        </div>
                        <div class="col-md-1"></div>
                        <div class="clearfix"></div>
                    </div>

                    <div class="row">

                        <input class="form-control" readonly type="hidden" name="subtotal" id="subtotal">

                    </div>
                </div>
                <input type="hidden" name="suffix_hidden_field" id="suffix_hidden_field" />
                <div class="box-footer">
                    <div class="row">
                        <div class="col-sm-12 col-md-2 mb-2">
                            <button type="submit" name="submit" value="submit"
                            class="btn bg-blue-btn w-100"><?php echo lang('submit'); ?></button>
                        </div>
                        <div class="col-sm-12 col-md-2 mb-2">
                            <a class="btn bg-blue-btn w-100" href="<?php echo base_url() ?>Transfer/transfers">
                                <?php echo lang('back'); ?>
                            </a>
                        </div>
                    </div>


                </div>
                <?php echo form_close(); ?>
            </div>
        </div>

</section>