<link rel="stylesheet" href="<?php echo base_url(); ?>assets/dist/css/custom/report.css">



<section class="main-content-wrapper">
    <section class="content-header">
        <h3 class="top-left-header text-left"><?php echo lang('voidsAndCompsReport'); ?></h3>
        <input type="hidden" class="datatable_name" data-title="<?php echo lang('voidsAndCompsReport'); ?>" data-id_name="datatable">

    </section>

    <div>
        <?php
        if(isLMni() && isset($outlet_id)):
            ?>
            <h4 class="txt-color-grey"> <?php echo lang('outlet'); ?>: <?php echo escape_output(getOutletNameById($outlet_id))?></h4>
            <?php
        endif;
        ?>
        <h4 class="txt-color-grey"><?= isset($start_date) && $start_date && isset($end_date) && $end_date ? lang('date').": " . date($this->session->userdata('date_format'), strtotime($start_date)) . " - " . date($this->session->userdata('date_format'), strtotime($end_date)) : '' ?><?= isset($start_date) && $start_date && !$end_date ? lang('date').": " . date($this->session->userdata('date_format'), strtotime($start_date)) : '' ?><?= isset($end_date) && $end_date && !$start_date ? lang('date').": " . date($this->session->userdata('date_format'), strtotime($end_date)) : '' ?>
        </h4>
        <h4 class="txt-color-grey ir_txtCenter_mt0"><?php
            if (isset($user_id) && $user_id):
                echo lang('user').": " . userName($user_id);
            else:
                echo lang('user').": ".lang('all');
            endif;
            ?></h4>
        <h4 class="txt-color-grey ir_txtCenter_mt0"><?php
            if (isset($type) && $type==1):
                echo "Type: Void";
            else:
                echo "Type: Comps";
            endif;
            ?></h4>

    </div>


    <div class="box-wrapper">
        <div class="row">
            <div class="col-sm-12 mb-3 col-md-4 col-lg-2">
                <?php echo form_open(base_url() . 'Report/voidsAndCompsReport') ?>
                <div class="form-group">
                    <input tabindex="1" type="text" id="" name="startDate" readonly class="form-control customDatepicker"
                           placeholder="<?php echo lang('start_date'); ?>" value="<?php echo set_value('startDate'); ?>">
                </div>
            </div>
            <div class="col-sm-12 mb-3 col-md-4 col-lg-2">

                <div class="form-group">
                    <input tabindex="2" type="text" id="endMonth" name="endDate" readonly
                           class="form-control customDatepicker" placeholder="<?php echo lang('end_date'); ?>"
                           value="<?php echo set_value('endDate'); ?>">
                </div>
            </div>
            <div class="col-sm-12 mb-3 col-md-4 col-lg-2">
                <div class="form-group">
                    <select tabindex="2" class="form-control select2 ir_w_100" id="user_id" name="user_id">
                        <option value=""><?php echo lang('user'); ?> <?php echo lang('user'); ?></option>
                        <?php
                        foreach ($users as $value) {
                            ?>
                            <option value="<?php echo escape_output($value->id) ?>" <?php echo set_select('user_id', $value->id); ?>>
                                <?php echo escape_output($value->full_name) ?></option>
                        <?php } ?>
                    </select>
                </div>
            </div>
            <div class="col-sm-12 mb-3 col-md-4 col-lg-2">
                <div class="form-group">
                    <select tabindex="2" class="form-control select2 ir_w_100" id="type" name="type">
                        <option value=""><?php echo lang('all'); ?></option>
                        <option <?php echo set_select("type",1)?> value="1"><?php echo lang('Void'); ?></option>
                        <option <?php echo set_select("type",2)?> value="2"><?php echo lang('Comps'); ?></option>
                    </select>
                </div>
            </div>
            <?php
            if(isLMni()):
                ?>
                <div class="col-sm-12 mb-3 col-md-4 col-lg-2">
                    <div class="form-group">
                        <select tabindex="2" class="form-control select2 ir_w_100" id="outlet_id" name="outlet_id">
                            <?php
                            $outlets = getAllOutlestByAssign();
                            foreach ($outlets as $value):
                                ?>
                                <option <?= set_select('outlet_id',$value->id)?>  value="<?php echo escape_output($value->id) ?>"><?php echo escape_output($value->outlet_name) ?></option>
                                <?php
                            endforeach;
                            ?>
                        </select>
                    </div>
                </div>
                <?php
            endif;
            ?>
            <div class="col-sm-12 mb-3 col-md-2">
                <div class="form-group">
                    <button type="submit" name="submit" value="submit"
                            class="btn bg-blue-btn w-100"><?php echo lang('submit'); ?></button>
                </div>
            </div>
        </div>

        <div class="table-box">

            <div class="table-responsive">

                <table id="datatable" class="table">
                    <thead>
                    <tr>
                        <th class="ir_w2_txt_center"><?php echo lang('sn'); ?></th>
                        <th><?php echo lang('date_time'); ?></th>
                        <th><?php echo lang('type'); ?></th>
                        <th><?php echo lang('employee_name'); ?></th>
                        <th><?php echo lang('outlet'); ?></th>
                        <th><?php echo lang('Gross_Sale'); ?></th>
                        <th><?php echo lang('item_name'); ?></th>
                        <th><?php echo lang('remove_quantity'); ?></th>
                        <th><?php echo lang('amount'); ?></th>
                        <th><?php echo lang('Reason'); ?></th>
                        <th><?php echo lang('total'); ?></th>
                    </tr>
                    </thead>
                    <tbody>
                    <?php
                    $total_1 = 0;
                    $total_2 = 0;
                    $total_3 = 0;
                    $total_4 = 0;
                    if (isset($voidsAndCompsReport)):
                        foreach ($voidsAndCompsReport as $key => $value) {
                            $total_1+=$value->gross_sale;
                            $total_2+=$value->qty;
                            $total_3+=$value->amount;
                            $total_4+=$value->total;
                            $key++;
                            ?>
                            <tr>
                                <td class="ir_txt_center"><?php echo escape_output($key); ?></td>
                                <td><?php echo date("d/m/Y h:i A",strtotime($value->date_time))?></td>
                                <td><?php echo escape_output(($value->type==1?'Void':'Comps')) ?></td>
                                <td><?php echo escape_output(userName($value->user_id)) ?></td>
                                <td><?php echo escape_output(getOutletNameById($value->outlet_id)) ?></td>
                                <td><?php echo escape_output(getAmt($value->gross_sale)) ?></td>
                                <td><?php echo escape_output(($value->item_name)) ?></td>
                                <td><?php echo escape_output(($value->qty)) ?></td>
                                <td><?php echo escape_output(getAmt($value->amount)) ?></td>
                                <td><?php echo escape_output(($value->reason)) ?></td>
                                <td><?php echo escape_output(getAmt($value->total)) ?></td>
                            </tr>
                            <?php
                        }
                    endif;
                    ?>

                    </tbody>
                    <tfoot>
                    <tr>
                        <th class="ir_w2_txt_center"></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th class="ir_txt_right"><?php echo lang('total'); ?> </th>
                        <th> <?php echo escape_output(getAmt($total_1)) ?></th>
                        <th></th>
                        <th><?php echo escape_output(($total_2)) ?></th>
                        <th><?php echo escape_output(getAmt($total_3)) ?></th>
                        <th></th>
                        <th><?php echo escape_output(getAmt($total_4)) ?></th>
                    </tr>
                    </tfoot>
                </table>
            </div>
            <!-- /.box-body -->
        </div>
    </div>

</section>
<!-- DataTables -->
<script src="<?php echo base_url(); ?>assets/datatable_custom/jquery-3.3.1.js"></script>
<script src="<?php echo base_url(); ?>frequent_changing/js/dataTable/jquery.dataTables.min.js"></script>
<script src="<?php echo base_url(); ?>assets/bower_components/datatables.net-bs/js/dataTables.bootstrap.min.js">
</script>
<script src="<?php echo base_url(); ?>frequent_changing/js/dataTable/dataTables.bootstrap4.min.js"></script>
<script src="<?php echo base_url(); ?>frequent_changing/js/dataTable/dataTables.buttons.min.js"></script>
<script src="<?php echo base_url(); ?>frequent_changing/js/dataTable/buttons.html5.min.js"></script>
<script src="<?php echo base_url(); ?>frequent_changing/js/dataTable/buttons.print.min.js"></script>
<script src="<?php echo base_url(); ?>frequent_changing/js/dataTable/jszip.min.js"></script>
<script src="<?php echo base_url(); ?>frequent_changing/js/dataTable/pdfmake.min.js"></script>
<script src="<?php echo base_url(); ?>frequent_changing/js/dataTable/vfs_fonts.js"></script>
<script src="<?php echo base_url(); ?>frequent_changing/newDesign/js/forTable.js"></script>

<script src="<?php echo base_url(); ?>frequent_changing/js/custom_report.js"></script>