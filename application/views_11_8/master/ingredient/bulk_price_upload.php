<script type="text/javascript" src="<?php echo base_url('frequent_changing/js/ingredient.js'); ?>"></script>

<section class="main-content-wrapper">
    <section class="content-header">
        <h3 class="top-left-header">
             <?php echo lang('bulk_stock_update'); ?>
        </h3>
    </section>

    <div class="box-wrapper">
        <div class="row">
            <?php
            if(isLMni()):
                ?>
                <div class="col-md-3">
                    <?php echo form_open(base_url() . 'BulkStockUpdate') ?>
                    <div class="form-group">
                        <select tabindex="2" class="form-control select2 ir_w_100" id="outlet_id" name="outlet_id">
                            <option value=""><?php echo lang("select") ?> <?php echo lang("outlet") ?></option>
                            <?php
                            $outlets = getAllOutlestByAssign();
                            foreach ($outlets as $value):
                                ?>
                                <option <?= set_select('outlet_id',$value->id)?>  value="<?php echo escape_output($value->id) ?>"><?php echo escape_output($value->outlet_name) ?></option>
                                <?php
                            endforeach;
                            ?>
                        </select>
                        <?php if (form_error('outlet_id')) { ?>
                            <div class="alert alert-error txt-uh-21" style="padding: 0px;margin: 0px;color:white">
                                <p><?php echo form_error('outlet_id'); ?></p>
                            </div>
                        <?php } ?>
                    </div>
                </div>
                <?php
            endif;
            ?>
            <?php if(sizeof($storages)>0):?>
                <div class="col-md-3">
                    <div class="form-group">
                        <select class="form-control select2" name="starages" id="starages">
                            <option value="0"><?php echo lang('select'); ?> <?php echo lang('storage'); ?></option>

                        </select>
                        <?php if (form_error('starages')) { ?>
                            <div class="alert alert-error txt-uh-21"  style="padding: 0px;margin: 0px;color:white">
                                <p><?php echo form_error('starages'); ?></p>
                            </div>
                        <?php } ?>
                    </div>
                </div>
            <?php else:?>
                <input type="hidden" value="0" name="starages">
            <?php endif;?>
            <div class="col-md-2">
                <button type="submit" name="submit" value="submit" class="btn btn-block btn-primary pull-left"><i class="fa fa-search"></i> <?php echo lang('search'); ?></button>
            </div>
            <?php echo form_close(); ?>
        </div>
        <div class="table-box">
            <!-- form start -->
            <?php echo form_open(base_url() . 'BulkStockUpdate/update', $arrayName = array('id' => '','enctype'=>'multipart/form-data')) ?>
            <div>
                <input type="hidden" name="outlet_id_hidden" value="<?php echo isset($outlet_id) && $outlet_id?$outlet_id:''?>">
                <input type="hidden" name="starages_hidden" value="<?php echo isset($storage_id) && $storage_id?$storage_id:''?>">
                <div class="table-box margin_top_0">
                    <div class="table-responsive">

                        <div id="DataTables_Table_0_wrapper" class="dataTables_wrapper form-inline dt-bootstrap no-footer">


                            <table class="table remove_class">
                                <thead>
                                <tr>
                                    <th class="width_3_p c_center vertical_align_middle show_set_p display_none">
                                        <?php echo lang('select'); ?>
                                    </th>
                                    <th class="width_1_p vertical_align_middle"><?php echo lang('sn'); ?></th>
                                    <th class="width_16_p vertical_align_middle"><?php echo lang('name'); ?></th>
                                    <th class="width_16_p vertical_align_middle"><?php echo lang('code'); ?></th>
                                    <th class="width_7_p vertical_align_middle"><?php echo lang('current_stock'); ?>/<?php echo lang('default_stock'); ?></th>
                                </tr>
                                </thead>
                                <tbody>
                                <?php
                                if (isset($ingredients) && !empty($ingredients)) {
                                    $i = count($ingredients);
                                    foreach ($ingredients as $ingrnts) {
                                        $parent_name = '';
                                        $checked = '';
                                        ?>
                                        <tr class="hide_all_for is_frequent_product_<?php echo $checked ?>">
                                            <td class="display_none c_center vertical_align_middle show_set_p">
                                                <label class="container"><?php echo lang('select'); ?>
                                                    <input type="checkbox" <?php echo escape_output($checked) ?>
                                                           class="set_fq_product"
                                                           value="<?php echo escape_output($ingrnts->id) ?>">
                                                    <span class="checkmark"></span>
                                                </label>
                                            </td>
                                            <td class="width_1_p vertical_align_middle">
                                                <?php echo escape_output($i) ?>
                                            </td>
                                            <td class="vertical_align_middle">
                                                <input type="hidden" value="<?php echo escape_output($ingrnts->id); ?>"
                                                       name="product_id[]">
                                                <?php echo escape_output($parent_name . " " . $ingrnts->name); ?>
                                            </td>
                                            <td class="vertical_align_middle">
                                                <?php echo escape_output($ingrnts->code); ?>
                                            </td>
                                            <td class="vertical_align_middle">
                                                <table class="width_100_p">
                                                    <tr>

                                                        <td>
                                                            <input type="text"
                                                                   data-id="<?php echo escape_output($ingrnts->id); ?>"
                                                                   onfocus="select();"
                                                                   name="stock_qty<?php echo escape_output($ingrnts->id); ?>"
                                                                   id="stock_qty<?php echo escape_output($ingrnts->id); ?>"
                                                                   class="form-control sale_price integerchk"
                                                                   value="<?php echo get_default_stock($ingrnts->id,$outlet_id,$storage_id); ?>">
                                                        </td>
                                                        <td class="width_1_p"><?php echo escape_output(unitName($ingrnts->purchase_unit_id)); ?></td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <?php
                                        $i--;
                                    }
                                }
                                ?>
                                </tbody>
                            </table>
                            <p>&nbsp;</p>

                        </div>  <!-- /.table-responsive -->
                    </div>
                </div>
            </div>
            <!-- /.box-body -->

            <div class="row mt-2">
                <div class="col-sm-12 col-md-2 mb-2">
                    <button type="submit" name="submit" value="submit"
                            class="btn bg-blue-btn w-100"><?php echo lang('submit'); ?></button>
                </div>
                <div class="col-sm-12 col-md-2 mb-2">

            </div>
                <?php echo form_close(); ?>
        </div>
    </div>
</section>
<script>
    $(document).ready(function () {

        function getStorage() {
            let outlet_id = $("#outlet_id").val();
            let storage_id = "<?php echo isset($storage_id)?$storage_id:''?>";
            $.ajax({
                url: '<?php echo base_url()?>Authentication/getStoragesBulk',
                method: 'POST',
                datatype: 'json',
                data: {outlet_id: outlet_id,storage_id:storage_id
                },
                success: function(data) {
                    $("#starages").html(data);
                    $(".select2").select2();
                }
            });
        }

        $(document).on('change', '#outlet_id', function() {
            getStorage();
        });
        getStorage();

    });
</script>