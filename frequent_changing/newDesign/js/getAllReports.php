<style type="text/css">
.right-btn-box {
    margin-left: auto;
    margin-right: 15px;
    order: 3;
}
.bottom-left-item{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.exportDropdown a{
    min-height: 38px;
}
.main-content-wrapper .tabcontent{
    padding-bottom: 15px;
}
.tabcontent{
    padding-bottom: 150px !important;
}
.text-align-left{
    text-align: left !important;
}
#sale_report_datatable tr td:last-child{
    display: flex;
}
</style>

<link rel="stylesheet" href="<?php echo base_url(); ?>assets/dist/css/custom/report.css">
<?php $base_url_report = base_url(); ?>
<script type="text/javascript">
    var BASEURL = "<?php echo base_url();?>";
</script>

<section class="main-content-wrapper">
	 <section class="content-header">
        <h3 class="top-left-header text-left">Reports</h3>
        <input type="hidden" class="datatable_name" data-title="<?php echo lang('attendance_report'); ?>" data-id_name="datatable">
    </section>
    <div class="box-wrapper">
    	<div class="row">
    		<div class="col-md-12">
    			<div class="table-box">
    				<div class="bozx-body">
    					<div class="row ">
                        <!-- <div class="col-6 col-sm-6 col-md-auto mb-3">
                            <a href="" class="links">
                                <div class="card white_card">
                                    <div class="card-body">
                                        <div class="image-box">
                                            <img src="<?php echo base_url(); ?>assets/dist/img/icons/register_report.svg" alt="register_report">
                                        </div>
                                        <span>Register Report</span>
                                    </div>
                                </div>
                            </a>
                        </div> -->
                        <!-- <div class="col-6 col-sm-6 col-md-auto mb-3">
                            <a href="" class="links">
                                <div class="card white_card">
                                    <div class="card-body">
                                        <div class="image-box">
                                            <img src="<?php echo base_url(); ?>assets/dist/img/icons/daily_report.svg" alt="daily_report">
                                        </div>
                                        <span>Daily Summary Report</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-6 col-sm-6 col-md-auto mb-3">
                            <a href="" class="links">
                                <div class="card white_card">
                                    <div class="card-body">
                                        <div class="image-box">
                                            <img src="<?php echo base_url(); ?>assets/dist/img/icons/food_sales_report.svg" alt="food_sales_report">
                                        </div>
                                        <span>Food Sale Report</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-6 col-sm-6 col-md-auto mb-3">
                            <a href="" class="links">
                                <div class="card white_card">
                                    <div class="card-body">
                                        <div class="image-box">
                                            <img src="<?php echo base_url(); ?>assets/dist/img/icons/daily_sales_report.svg" alt="daily_sales_report">
                                        </div>
                                        <span>Daily Sale Report</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-6 col-sm-6 col-md-auto mb-3">
                            <a href="" class="links">
                                <div class="card white_card">
                                    <div class="card-body">
                                        <div class="image-box">
                                            <img src="<?php echo base_url(); ?>assets/dist/img/icons/detailed_sales_report.svg" alt="detailed_sales_report">
                                        </div>
                                        <span>Detailed Sale Report</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-6 col-sm-6 col-md-auto mb-3">
                            <a href="" class="links">
                                <div class="card white_card">
                                    <div class="card-body">
                                        <div class="image-box">
                                            <img src="<?php echo base_url(); ?>assets/dist/img/icons/consumption_report.svg" alt="consumption_report">
                                        </div>
                                        <span>Consumption Report</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-6 col-sm-6 col-md-auto mb-3">
                            <a href="" class="links">
                                <div class="card white_card">
                                    <div class="card-body">
                                        <div class="image-box">
                                            <img src="<?php echo base_url(); ?>assets/dist/img/icons/stock_report.svg" alt="stock_report">
                                        </div>
                                        <span>Stock Report</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-6 col-sm-6 col-md-auto mb-3">
                            <a href="" class="links">
                                <div class="card white_card">
                                    <div class="card-body">
                                        <div class="image-box">
                                            <img src="<?php echo base_url(); ?>assets/dist/img/icons/low_stock_report.svg" alt="low_stock_report">
                                        </div>
                                        <span>Low Stock Report</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-6 col-sm-6 col-md-auto mb-3">
                            <a href="" class="links">
                                <div class="card white_card">
                                    <div class="card-body">
                                        <div class="image-box">
                                            <img src="<?php echo base_url(); ?>assets/dist/img/icons/pf_report.svg" alt="pf_report">
                                        </div>
                                        <span>Profit Loss Report</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-6 col-sm-6 col-md-auto mb-3">
                            <a href="" class="links">
                                <div class="card white_card">
                                    <div class="card-body">
                                        <div class="image-box">
                                            <img src="<?php echo base_url(); ?>assets/dist/img/icons/kitchen_performance_report.svg" alt="kitchen_performance_report">
                                        </div>
                                        <span>Kitchen Performance Report</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-6 col-sm-6 col-md-auto mb-3">
                            <a href="" class="links">
                                <div class="card white_card">
                                    <div class="card-body">
                                        <div class="image-box">
                                            <img src="<?php echo base_url(); ?>assets/dist/img/icons/attendance_report.svg" alt="attendance_report">
                                        </div>
                                        <span>Attendance Report</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-6 col-sm-6 col-md-auto mb-3">
                            <a href="" class="links">
                                <div class="card white_card">
                                    <div class="card-body">
                                        <div class="image-box">
                                            <img src="<?php echo base_url(); ?>assets/dist/img/icons/blank_report.svg" alt="blank_report">
                                        </div>
                                        <span>Supplier Ledger</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-6 col-sm-6 col-md-auto mb-3">
                            <a href="" class="links">
                                <div class="card white_card">
                                    <div class="card-body">
                                        <div class="image-box">
                                            <img src="<?php echo base_url(); ?>assets/dist/img/icons/supplier_due_report.svg" alt="supplier_due_report">
                                        </div>
                                        <span>Supplier Due Report</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-6 col-sm-6 col-md-auto mb-3">
                            <a href="" class="links">
                                <div class="card white_card">
                                    <div class="card-body">
                                        <div class="image-box">
                                            <img src="<?php echo base_url(); ?>assets/dist/img/icons/customer_due_report.svg" alt="customer_due_report">
                                        </div>
                                        <span>Customer Due Report</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-6 col-sm-6 col-md-auto mb-3">
                            <a href="" class="links">
                                <div class="card white_card">
                                    <div class="card-body">
                                        <div class="image-box">
                                            <img src="<?php echo base_url(); ?>assets/dist/img/icons/blank_report.svg" alt="blank_report">
                                        </div>
                                        <span>Customer Ledger</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-6 col-sm-6 col-md-auto mb-3">
                            <a href="" class="links">
                                <div class="card white_card">
                                    <div class="card-body">
                                        <div class="image-box">
                                            <img src="<?php echo base_url(); ?>assets/dist/img/icons/purchase_report.svg" alt="purchase_report">
                                        </div>
                                        <span>Purchase Report</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-6 col-sm-6 col-md-auto mb-3">
                            <a href="" class="links">
                                <div class="card white_card">
                                    <div class="card-body">
                                        <div class="image-box">
                                            <img src="<?php echo base_url(); ?>assets/dist/img/icons/expense.svg" alt="expense">
                                        </div>
                                        <span>Expense Report</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-6 col-sm-6 col-md-auto mb-3">
                            <a href="" class="links">
                                <div class="card white_card">
                                    <div class="card-body">
                                        <div class="image-box">
                                            <img src="<?php echo base_url(); ?>assets/dist/img/icons/waste_report.svg" alt="waste_report">
                                        </div>
                                        <span>Waste Report</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-6 col-sm-6 col-md-auto mb-3">
                            <a href="" class="links">
                                <div class="card white_card">
                                    <div class="card-body">
                                        <div class="image-box">
                                            <img src="<?php echo base_url(); ?>assets/dist/img/icons/tax_report.svg" alt="tax_report">
                                        </div>
                                        <span>Tax Report</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-6 col-sm-6 col-md-auto mb-3">
                            <a href="" class="links">
                                <div class="card white_card">
                                    <div class="card-body">
                                        <div class="image-box">
                                            <img src="<?php echo base_url(); ?>assets/dist/img/icons/food_category.svg" alt="food_category">
                                        </div>
                                        <span>Food Menu Sale By Category</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-6 col-sm-6 col-md-auto mb-3">
                            <a href="" class="links">
                                <div class="card white_card">
                                    <div class="card-body">
                                        <div class="image-box">
                                            <img src="<?php echo base_url(); ?>assets/dist/img/icons/food_transfer.svg" alt="food_transfer">
                                        </div>
                                        <span>Food Transfer Report</span>
                                    </div>
                                </div>
                            </a>
                        </div> -->

        					<?php
    	                        $menu_access = getMainMenu();
    	                        //echo "<pre>";
    	                        foreach ($menu_access as $ky=>$value_menu):
    	                        	if($value_menu->label=='report'): 
    		                        	foreach ($value_menu->sub_menus as $ky1=>$value_menu1):
                                            $remove_space = str_replace(" ", "_", lang($value_menu1->label));
                                            $label_icon = strtolower($remove_space).'.svg';
                                            $label_alt = strtolower($remove_space);

    		                        		//print_r($value_menu1);
    		                ?>
                            <div class="col-6 col-sm-6 col-md-auto mb-3">
                                <a href="#<?php echo $label_alt; ?>_id" class="tablinks" onClick="report_section_get(event,'<?php echo $label_alt; ?>_id')" id="<?php echo $label_alt; ?>_tab">
                                <!-- <a href="<?php echo $base_url_report.$value_menu1->controller_name.'/'.$value_menu1->function_name?>" class="links" onClick="report_section_get('<?php echo $label_alt; ?>_id')" target="_blank"> -->
                                    <div class="card white_card">
                                        <div class="card-body">
                                            <div class="image-box">
                                                <img src="<?php echo base_url(); ?>assets/dist/img/icons/<?php echo $label_icon; ?>" alt="<?php echo $label_alt; ?>"> 
                                            </div>
                                            <span><?php echo lang($value_menu1->label); ?></span>
                                        </div>
                                    </div>
                                </a>
                            </div>

    			    		<?php
    		                        	endforeach;
    		                        endif;
    	                       	endforeach;
                            ?>

                            <div class="col-6 col-sm-6 col-md-auto mb-3">
                                <a href="#sale_report_datatable" class="tablinks" onclick="report_section_get(event,'sale_report_id')" > 
                                    <div class="card white_card">
                                        <div class="card-body">
                                            <div class="image-box">
                                                <img src="https://beta11.moontechnolabs.com/metacloudpos/assets/dist/img/icons/sale_report.svg" alt="sale">
                                            </div>
                                            <span> Sales Report </span>
                                        </div>
                                    </div>
                                </a>
                            </div>

    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
</section>

<!-- section 1 -->
<!-- <section class="main-content-wrapper tabcontent" id="register_report_id">
    <?php
        
        $show_register_report = "";
        if(isset($register_info) && count($register_info)>0){
            
            $i = 1;
            $html_p = '';
            foreach($register_info as $single_register_info){
                $payment_methods_sale = json_decode($single_register_info->payment_methods_sale);
                $html_p = '';
                $j=0;
                $total_used_payment = 0;
                if(isset($payment_methods_sale) && $payment_methods_sale){
                    foreach ($payment_methods_sale as $key=>$value){
                        $total_used_payment++;
                    }
                }
                if(isset($payment_methods_sale) && $payment_methods_sale){
                    foreach ($payment_methods_sale as $key=>$value){
                        $html_p .= $key.": ".getAmtP($value);
                        if($j < ($total_used_payment -1)){
                            $html_p .= ", ";
                        }
                        $j++;
                    }
                }

                $show_register_report .= "<tr>";
                $show_register_report .= '<td>'.$i.'</td>';
                $show_register_report .= '<td>'.$single_register_info->opening_balance_date_time.'</td>';
                $show_register_report .= '<td>'.getAmtP($single_register_info->opening_balance).'</td>';
                $show_register_report .= '<td>'.getAmtP($single_register_info->sale_paid_amount).'</td>';
                $show_register_report .= '<td>'.getAmtP($single_register_info->customer_due_receive).'</td>';
                $show_register_report .= '<td>'.$single_register_info->closing_balance_date_time.'</td>';
                $show_register_report .= '<td>'.getAmtP($single_register_info->closing_balance).'</td>';
                $show_register_report .= '<td>'.$html_p.'</td>';
                $show_register_report .= "</tr>";        
                $i++;
            }
        }
        $user_option = '';
        foreach($users as $single_user){
            $user_option .= '<option value="'.$single_user->id.'">'.$single_user->full_name.'</option>';
        }

    ?>

    <section class="content-header px-0">
        <div class="d-flex align-items-center">
            <h3 class="top-left-header text-left">
                <?php echo lang('register_report'); ?>
            </h3>
            <?php if(isLMni() && isset($outlet_id)):?>
                <p class="mx-2 txt-color-grey my-0"> <?php echo lang('outlet'); ?>: <?php echo escape_output(getOutletNameById($outlet_id))?></p>
            <?php endif;?>
        </div>
        <h4 class="ir_txtCenter_mt0 txt-color-grey"><?php
            if (isset($user_id) && $user_id):
                echo "User: " . userName($user_id) . "</span>";
            endif;
            ?>
        </h4>
        <h4 class="txt-color-grey"><?= isset($start_date) && $start_date && isset($end_date) && $end_date ? lang('date').": " . date($this->session->userdata('date_format'), strtotime($start_date)) . " - " . date($this->session->userdata('date_format'), strtotime($end_date)) : '' ?><?= isset($start_date) && $start_date && !$end_date ? lang('date').": " . date($this->session->userdata('date_format'), strtotime($start_date)) : '' ?><?= isset($end_date) && $end_date && !$start_date ? lang('date').": " . date($this->session->userdata('date_format'), strtotime($end_date)) : '' ?>
        </h4>      
    </section>
    
    <div class="box-wrapper">
        <div class="test-filter-modals mb-2">
            <div class="row">
                <div class="col-sm-12 mb-2 col-md-4 col-lg-2">
                    <div class="form-group">
                        <input tabindex="1" type="text" id="" name="startDate" readonly class="form-control customDatepicker sec_one_start_date"
                            placeholder="<?php echo lang('start_date'); ?>" value="<?php echo set_value('startDate'); ?>">
                    </div>
                </div>
                <div class="col-sm-12 mb-2 col-md-4 col-lg-2">

                    <div class="form-group">
                        <input tabindex="2" type="text" id="endMonth" name="endDate" readonly
                            class="form-control customDatepicker sec_one_end_date" placeholder="<?php echo lang('end_date'); ?>"
                            value="<?php echo set_value('endDate'); ?>">
                    </div>
                </div>
                <div class="col-sm-12 mb-2 col-md-4 col-lg-2">

                    <div class="form-group">
                        <select tabindex="2" class="form-control select2 ir_w_100 sec_one_user_id" id="user_id" name="user_id">
                            <option value=""><?php echo lang('user'); ?></option>
                            <?php
                            foreach ($users as $value) {
                                ?>
                            <option <?php echo set_select('user_id',$value->id) ?> value="<?php echo escape_output($value->id) ?>"><?php echo escape_output($value->full_name) ?></option>
                            <?php } ?>
                        </select>
                    </div>
                </div>
                <?php if(isLMni()): ?>
                    <div class="col-sm-12 mb-2 col-md-4 col-lg-2">
                            <div class="form-group">
                                <select tabindex="2" class="form-control select2 ir_w_100 sec_one_outlet_id" id="outlet_id" name="outlet_id">
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
                <?php endif; ?>

                <div class="col-sm-12 mb-2 col-md-4 col-lg-2">
                    <div class="form-group">
                        <button type="submit" name="submit" id="submit_section_one" value="submit"
                            class="btn bg-blue-btn w-100"><?php echo lang('submit'); ?></button>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 mb-2 col-md-4 col-lg-2">
                    <div class="form-group">
                        <select tabindex="3" aria-controls="sample_1" class="form-control select2 ir_w_100 datatable_length_new" id="datatable_length_new" name="datatable_length_new">
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                    </div>
                </div>
                <div class="col-sm-12 mb-2 col-md-4 col-lg-2 ms-auto">
                    <div class="form-group">
                        <input tabindex="1" type="text" id="" name="search_data" class="form-control search_data"
                            placeholder="Search value" value="">
                    </div>
                </div>
            </div>
        </div>
        <div class="table-box section-one-table-box-new">
                <div class="table-responsive"> 
                    <table id="datatable" class="table sample_1 datatable_name" data-id_name="datatable">
                        <thead>
                            <tr>
                                <th class="title" class="ir_w_5"><?php echo lang('sn'); ?></th>
                                <th class="title" class="ir_w_10"><?php echo lang('opening_date_time'); ?></th>
                                <th class="title" class="ir_w_15"><?php echo lang('opening_balance'); ?></th>
                                <th class="title" class="ir_w_15"><?php echo lang('sale'); ?>
                                    (<?php echo lang('paid_amount'); ?>)</th>
                                <th class="title" class="ir_w_15"><?php echo lang('customer_due_receive'); ?></th>
                                <th class="title" class="ir_w_10"><?php echo lang('closing_date_time'); ?></th>
                                <th class="title" class="ir_w_15"><?php echo lang('closing_balance'); ?></th>
                                <th class="title" class="ir_w_15"><?php echo lang('sale_in_payment_method'); ?></th>
                            </tr>
                        </thead>
                        <tbody>
                          <?php
                            echo $show_register_report;
                            ?>  
                        </tbody> 
                    </table>
                </div>
        </div>
    </div> 
</section>
 -->
<section class="main-content-wrapper tabcontent" id="register_report_id">

    <section class="content-header px-0">
        <div class="d-flex align-items-center">
            <h3 class="top-left-header text-left">
                <?php echo lang('register_report'); ?>
            </h3>
            <?php if(isLMni() && isset($outlet_id)):?>
                <!-- <p class="mx-2 txt-color-grey my-0"> <?php echo lang('outlet'); ?>: <?php echo escape_output(getOutletNameById($outlet_id))?></p> -->
            <?php endif;?>
        </div>
        <!--    <h4 class="ir_txtCenter_mt0 txt-color-grey"><?php
            if (isset($user_id) && $user_id):
                echo "User: " . userName($user_id) . "</span>";
            endif;
            ?>
        </h4>
        <h4 class="txt-color-grey"><?= isset($start_date) && $start_date && isset($end_date) && $end_date ? lang('date').": " . date($this->session->userdata('date_format'), strtotime($start_date)) . " - " . date($this->session->userdata('date_format'), strtotime($end_date)) : '' ?><?= isset($start_date) && $start_date && !$end_date ? lang('date').": " . date($this->session->userdata('date_format'), strtotime($start_date)) : '' ?><?= isset($end_date) && $end_date && !$start_date ? lang('date').": " . date($this->session->userdata('date_format'), strtotime($end_date)) : '' ?>
        </h4>       -->
    </section>

    <div class="box-wrapper">
        <div class="test-filter-modals mb-2">
            <form id="section_one_form">
                <div class="row">
                    <div class="col-sm-12 mb-2 col-md-4 col-lg-2">
                        <div class="form-group">
                            <input tabindex="1" type="text" id="" name="startDate" readonly class="form-control customDatepicker sec_one_start_date"
                                placeholder="<?php echo lang('start_date'); ?>" value="<?php echo set_value('startDate'); ?>">
                        </div>
                    </div>
                    <div class="col-sm-12 mb-2 col-md-4 col-lg-2">

                        <div class="form-group">
                            <input tabindex="2" type="text" id="endMonth" name="endDate" readonly
                                class="form-control customDatepicker sec_one_end_date" placeholder="<?php echo lang('end_date'); ?>"
                                value="<?php echo set_value('endDate'); ?>">
                        </div>
                    </div>
                    <div class="col-sm-12 mb-2 col-md-4 col-lg-2">

                        <div class="form-group">
                            <select tabindex="2" class="form-control select2 ir_w_100 sec_one_user_id" id="user_id" name="user_id">
                                <option value=""><?php echo lang('user'); ?></option>
                                <?php
                                foreach ($users as $value) {
                                    ?>
                                <option <?php echo set_select('user_id',$value->id) ?> value="<?php echo escape_output($value->id) ?>"><?php echo escape_output($value->full_name) ?></option>
                                <?php } ?>
                            </select>
                        </div>
                    </div>
                    <?php if(isLMni()): ?>
                        <div class="col-sm-12 mb-2 col-md-4 col-lg-2">
                                <div class="form-group">
                                    <select tabindex="2" class="form-control select2 ir_w_100 sec_one_outlet_id" id="outlet_id" name="outlet_id">
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
                    <?php endif; ?>

                    <div class="col-sm-12 mb-2 col-md-4 col-lg-2">
                        <div class="form-group">
                            <button type="submit" name="submit" id="submit_section_one" value="submit"
                                class="btn bg-blue-btn w-100"><?php echo lang('submit'); ?></button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div class="table-box section-one-table-box-new">
                <!-- /.box-header -->
                <div class="table-responsive">
                    <table id="example" class="table">
                        <thead>
                            <tr>
                                <th class="cursor_pointer title ir_w_5"><?php echo lang('sn'); ?></th>
                                <th class="cursor_pointer title ir_w_10"><?php echo lang('opening_date_time'); ?></th>
                                <th class="cursor_pointer title ir_w_15"><?php echo lang('opening_balance'); ?></th>
                                <th class="cursor_pointer title ir_w_15"><?php echo lang('sale'); ?>
                                    (<?php echo lang('paid_amount'); ?>)</th>
                                <th class="cursor_pointer title ir_w_15"><?php echo lang('customer_due_receive'); ?></th>
                                <th class="cursor_pointer title ir_w_10"><?php echo lang('closing_date_time'); ?></th>
                                <th class="cursor_pointer title ir_w_15"><?php echo lang('closing_balance'); ?></th>
                                <th class="cursor_pointer title ir_w_15"><?php echo lang('sale_in_payment_method'); ?></th>
                            </tr>
                        </thead>
                       
                    </table>
                </div>
                <!-- /.box-body -->
        </div>
    </div>
   
</section>

<!-- section 2 -->
<section class="main-content-wrapper tabcontent" id="daily_summary_report_id">

    <section class="content-header">
        <h3 class="top-left-header text-left"><?php echo lang('daily_summary_report'); ?></h3>

    </section>

    <div class="box-wrapper">
        <form id="daily_summary_report_form">
            <div class="row my-3">
                <div class="col-sm-12 mb-2 col-md-2">
                    <?php // echo form_open(base_url() . 'Report/dailySummaryReport') ?>
                    <div class="form-group">
                        <input tabindex="1" type="text" id="date" name="date" readonly class="form-control"
                            placeholder="<?php echo lang('date'); ?>" value="<?php echo date("Y-m-d",strtotime('today')); ?>">
                    </div>
                </div>
                <?php
                if(isLMni()):
                    ?>
                    <div class="col-sm-12 mb-2 col-md-4">
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
                <div class="col-sm-12 mb-2 col-md-2">
                    <div class="form-group">
                        <button type="submit" name="submit" value="submit"
                            class="w-100 btn bg-blue-btn"><?php echo lang('submit'); ?></button>
                    </div>
                </div>
                
                <div class="col-sm-12 mb-2 col-md-2">
                    <a class="w-100 btn bg-blue-btn"
                        href="<?php echo base_url(); ?>Report/printDailySummaryReport/<?php echo date("Y-m-d",strtotime('today')); ?>/<?php echo escape_output($outlet_id)?>"><?php echo lang('print'); ?>
                    </a>
                </div>
                <!--    <div class="col-sm-12 col-md-2 mb-2">
                    <a class="btn bg-blue-btn w-100" href="<?php echo base_url().'Report/getAllReports';?>">Back</a>
                </div> -->
            </div>
        </form>

            <div class="table-box section-one-table-box-new">

                <!-- /.box-header -->
                <div class="table-responsive">
                    <!-- <h1 class="txt-color-black"> <?php
                        if(isLMni() && isset($outlet_id)):
                            ?>
                            <?php echo escape_output(getOutletNameById($outlet_id))?>
                            <?php
                        endif;
                        ?></h1> -->
                    <h3 class="ir_txt_center txt-color-black"><?php echo lang('daily_summary_report'); ?></h3>
                    <hr>
                    <!-- <h4 class="txt-color-black"><?= isset($selectedDate) && $selectedDate ? lang('date').": " . date($this->session->userdata('date_format'), strtotime($selectedDate)) : '' ?> -->
                    </h4>
                    
                    <h4 class="ir_fw_ta_mt20 txt-color-black"><?php echo lang('purchases'); ?></h4>
                   
                    <table id="daily_purchase_datatable" class="table">
                        <thead>
                            <tr>
                                <th class="ir_fw_txt_center"><?php echo lang('sn'); ?></th>
                                <th><?php echo lang('ref_no'); ?></th>
                                <th><?php echo lang('supplier'); ?></th>
                                <th><?php echo lang('g_total'); ?></th>
                                <th><?php echo lang('paid'); ?></th>
                                <th><?php echo lang('due'); ?></th>
                            </tr>
                        </thead>
                        <!--        <tbody>
                            <?php  
                                $sum_of_gtotal = 0;
                                $sum_of_paid = 0;
                                $sum_of_due = 0;
                                if (!empty($result['purchases']) && isset($result['purchases'])):
                                    foreach ($result['purchases'] as $key => $value): 
                                        $sum_of_gtotal += $value->grand_total; 
                                        $sum_of_paid += $value->paid;  
                                        $sum_of_due += $value->due;  
                                        $key++;
                                        ?>
                            <tr>
                                <td class="ir_txt_center"><?php echo escape_output($key); ?></td>
                                <td><?php echo escape_output($value->reference_no); ?></td>
                                <td><?= escape_output(getSupplierNameById($value->supplier_id)) ?></td>
                                <td><?php echo escape_output(getAmt($value->grand_total)); ?></td>
                                <td><?php echo escape_output(getAmt($value->paid)); ?></td>
                                <td><?php echo escape_output(getAmt($value->due)); ?></td>
                            </tr>
                            <?php
                                    endforeach;
                                endif;
                            ?>
                            <tr>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td class="ir_fw_txt_right"><?php echo lang('sum'); ?></td>
                                <td>&nbsp;<?php echo escape_output(getAmt($sum_of_gtotal)); ?></td>
                                <td>&nbsp;<?php echo escape_output(getAmt($sum_of_paid)); ?></td>
                                <td>&nbsp;<?php echo escape_output(getAmt($sum_of_due)); ?></td>
                            </tr>
                        </tbody> -->
                    </table>

                    
                    <hr>
                    <h4 class="ir_fw_ta_mt20 txt-color-black"><?php echo lang('sales'); ?>
                    </h4>

                    <table id="daily_summary_report_sales_datatable" class="table">
                        <thead>
                            <tr>
                                <th class="ir_fw_txt_center"><?php echo lang('sn'); ?></th>
                                <th><?php echo lang('ref_no'); ?></th>
                                <th><?php echo lang('order_type'); ?></th>
                                <th><?php echo lang('table'); ?></th>
                                <th><?php echo lang('customer'); ?></th>
                                <th><?php echo lang('total_payable'); ?></th>
                                <th><?php echo lang('discount'); ?></th>
                                <th><?php echo lang('paid'); ?></th>
                                <th><?php echo lang('due'); ?></th>
                            </tr>
                        </thead>
                        <!--        <tbody>
                            <?php  
                                $sum_of_stotal_payable = 0;
                                $sum_of_sdisc_actual = 0;
                                $sum_of_spaid_amount = 0;
                                $sum_of_sdue_amount = 0;
                                if (!empty($result['sales']) && isset($result['sales'])):
                                    foreach ($result['sales'] as $key => $value): 
                                        $sum_of_stotal_payable += $value->total_payable; 
                                        $sum_of_sdisc_actual += $value->total_discount_amount;
                                        $sum_of_spaid_amount += $value->paid_amount;  
                                        $sum_of_sdue_amount += $value->due_amount;  
                                        $key++;
                                        ?>
                            <tr>
                                <td class="ir_txt_center"><?php echo escape_output($key); ?></td>
                                <td><?php echo escape_output($value->sale_no); ?></td>
                                <td><?php echo getOrderType($value->order_type); ?></td>
                                <td><?php if(!empty($value->table_id)){ echo getTableName($value->table_id); } ?></td>
                                <td><?= getCustomerName($value->customer_id) ?></td>
                                <td><?php echo escape_output(getAmt($value->total_payable)); ?></td>
                                <td><?php echo escape_output(getAmt($value->total_discount_amount)); ?></td>
                                <td><?php echo escape_output(getAmt($value->paid_amount)); ?></td>
                                <td><?php echo escape_output(getAmt($value->due_amount)); ?></td>
                            </tr>
                            <?php endforeach; endif; ?>
                            <tr>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td class="ir_fw_txt_right"><?php echo lang('sum'); ?></td>
                                <td>&nbsp;<?php echo escape_output(getAmt($sum_of_stotal_payable)); ?></td>
                                <td>&nbsp;<?php echo escape_output(getAmt($sum_of_sdisc_actual)); ?></td>
                                <td>&nbsp;<?php echo escape_output(getAmt($sum_of_spaid_amount)); ?></td>
                                <td>&nbsp;<?php echo escape_output(getAmt($sum_of_sdue_amount)); ?></td>
                            </tr>
                        </tbody> -->
                    </table>

                    <hr>
                    <h4 class="ir_fw_ta_mt20 txt-color-black"><?php echo lang('expenses'); ?>
                    </h4>
                    <table id="daily_summary_report_expenses_datatable" class="table">
                        <thead>
                            <tr>
                                <th class="ir_fw_txt_center"><?php echo lang('sn'); ?></th>
                                <th><?php echo lang('amount'); ?></th>
                                <th><?php echo lang('category'); ?></th>
                                <th><?php echo lang('responsible_person'); ?></th>
                                <th><?php echo lang('note'); ?></th>
                            </tr>
                        </thead>
                        <!-- <tbody>
                            <?php  
                                $sum_of_eamount = 0; 
                                if (!empty($result['expenses']) && isset($result['expenses'])):
                                    foreach ($result['expenses'] as $key => $value): 
                                        $sum_of_eamount += $value->amount;  
                                        $key++;
                                        ?>
                            <tr>
                                <td class="ir_txt_center"><?php echo escape_output($key); ?></td>
                                <td><?php echo escape_output(getAmt($value->amount)); ?></td>
                                <td><?php echo expenseItemName($value->category_id); ?></td>
                                <td><?php echo employeeName($value->employee_id); ?></td>
                                <td><?php echo escape_output($value->note); ?></td>
                            </tr>
                            <?php endforeach; endif; ?>
                            <tr>
                                <td class="ir_fw_txt_right"><?php echo lang('sum'); ?></td>
                                <td>&nbsp;<?php echo escape_output(getAmt($sum_of_eamount)); ?></td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                            </tr>
                        </tbody> -->
                    </table>

                    
                    <hr>
                    <h4 class="ir_fw_ta_mt20 txt-color-black">
                        <?php echo lang('supplier_due_payments'); ?></h4>
                    <table id="daily_summary_report_supplier_due_datatable" class="table">
                        <thead>
                            <tr>
                                <th class="ir_fw_txt_center"><?php echo lang('sn'); ?></th>
                                <th><?php echo lang('amount'); ?></th>
                                <th><?php echo lang('supplier'); ?></th>
                                <th><?php echo lang('note'); ?></th>
                            </tr>
                        </thead>
                   <!--        <tbody>
                            <?php  
                                $sum_of_samount = 0; 
                                if (!empty($result['supplier_due_payments']) && isset($result['supplier_due_payments'])):
                                    foreach ($result['supplier_due_payments'] as $key => $value): 
                                        $sum_of_samount += $value->amount;  
                                        $key++;
                                        ?>
                            <tr>
                                <td class="ir_txt_center"><?php echo escape_output($key); ?></td>
                                <td><?php echo escape_output(getAmt($value->amount)); ?></td>
                                <td><?php echo getSupplierNameById($value->supplier_id); ?></td>
                                <td><?php echo escape_output($value->note); ?></td>
                            </tr>
                            <?php
                                    endforeach;
                                endif;
                            ?>
                            <tr>
                                <td class="ir_fw_txt_right"><?php echo lang('sum'); ?></td>
                                <td>&nbsp;<?php echo escape_output(getAmt($sum_of_samount)); ?></td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                            </tr>
                        </tbody> -->
                    </table>

                    <hr>
                    <h4 class="ir_fw_ta_mt20 txt-color-black">
                        <?php echo lang('customer_due_receives'); ?></h4>
                    <table id="daily_summary_report_customer_due_datatable" class="table">
                        <thead>
                            <tr>
                                <th class="ir_fw_txt_center"><?php echo lang('sn'); ?></th>
                                <th><?php echo lang('amount'); ?></th>
                                <th><?php echo lang('customer'); ?></th>
                                <th><?php echo lang('note'); ?></th>
                            </tr>
                        </thead>
                        <!-- <tbody>
                            <?php  
                                $sum_of_camount = 0; 
                                if (!empty($result['customer_due_receives']) && isset($result['customer_due_receives'])):
                                    foreach ($result['customer_due_receives'] as $key => $value): 
                                        $sum_of_camount += $value->amount;  
                                        $key++;
                                        ?>
                            <tr>
                                <td class="ir_txt_center"><?php echo escape_output($key); ?></td>
                                <td><?php echo escape_output(getAmt($value->amount)); ?></td>
                                <td><?php echo getCustomerName($value->customer_id); ?></td>
                                <td><?php echo escape_output($value->note); ?></td>
                            </tr>
                            <?php
                                    endforeach;
                                endif;
                            ?>
                            <tr>
                                <td class="ir_fw_txt_right"><?php echo lang('sum'); ?></td>
                                <td>&nbsp;<?php echo escape_output(getAmt($sum_of_camount)); ?></td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                            </tr>
                        </tbody> -->
                    </table>

                    <hr>
                    <h4 class="ir_fw_ta_mt20 txt-color-black"><?php echo lang('wastes'); ?>
                    </h4>
                    <table id="daily_summary_report_wastes_datatable" class="table">
                        <thead>
                            <tr>
                                <th class="ir_fw_txt_center"><?php echo lang('sn'); ?></th>
                                <th><?php echo lang('ref_no'); ?></th>
                                <th><?php echo lang('loss_amount'); ?></th>
                                <th><?php echo lang('responsible_person'); ?></th>
                                <th><?php echo lang('note'); ?></th>
                            </tr>
                        </thead>
                        <!-- <tbody>
                            <?php  
                                $sum_of_wamount = 0; 
                                if (!empty($result['wastes']) && isset($result['wastes'])):
                                    foreach ($result['wastes'] as $key => $value): 
                                        $sum_of_wamount += $value->total_loss;  
                                        $key++;
                                        ?>
                            <tr>
                                <td class="ir_txt_center"><?php echo escape_output($key); ?></td>
                                <td><?php echo escape_output($value->reference_no); ?></td>
                                <td><?php echo escape_output(getAmt($value->total_loss)); ?></td>
                                <td><?php echo employeeName($value->employee_id); ?></td>
                                <td><?php echo escape_output($value->note); ?></td>
                            </tr>
                            <?php
                                    endforeach;
                                endif;
                            ?>
                            <tr>
                                <td>&nbsp;</td>
                                <td class="ir_fw_txt_right"><?php echo lang('sum'); ?></td>
                                <td>&nbsp;<?php echo escape_output(getAmt($sum_of_wamount)); ?></td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                            </tr>
                        </tbody> -->
                    </table>
                </div>
                <!-- /.box-body -->
            </div>
    </div>
   
</section>

<!-- section 3 -->
<section class="main-content-wrapper tabcontent" id="food_sale_report_id">

    <section class="content-header">
        <h3 class="text-left top-left-header"><?php echo lang('food_sales_report'); ?></h3>
    </section>
    <!-- 
    <div class="my-3">
        <?php
        if(isLMni() && isset($outlet_id)):
                            ?>
                            <h4> <?php echo lang('outlet'); ?>: <?php echo escape_output(getOutletNameById($outlet_id))?></h4>
                            <?php
        endif;
        ?>
        <h4>
            <?= isset($start_date) && $start_date && isset($end_date) && $end_date ? lang('date').": " . date($this->session->userdata('date_format'), strtotime($start_date)) . " - " . date($this->session->userdata('date_format'), strtotime($end_date)) : '' ?><?= isset($start_date) && $start_date && !$end_date ? lang('date').": " . date($this->session->userdata('date_format'), strtotime($start_date)) : '' ?><?= isset($end_date) && $end_date && !$start_date ? lang('date').": " . date($this->session->userdata('date_format'), strtotime($end_date)) : '' ?>
        </h4>
    </div> -->

    <div class="box-wrapper">
        <div class="test-filter-modals mb-2">
            <form id="food_sale_form">
                <div class="row">
                    <div class="col-sm-12 mb-2 col-md-4 col-lg-2">
                        <div class="form-group">
                            <input tabindex="1" type="text" id="" name="startDate" readonly class="form-control customDatepicker sec_one_start_date"
                                placeholder="<?php echo lang('start_date'); ?>" value="<?php echo set_value('startDate'); ?>">
                        </div>
                    </div>
                    <div class="col-sm-12 mb-2 col-md-4 col-lg-2">

                        <div class="form-group">
                            <input tabindex="2" type="text" id="endMonth" name="endDate" readonly
                                class="form-control customDatepicker sec_one_end_date" placeholder="<?php echo lang('end_date'); ?>"
                                value="<?php echo set_value('endDate'); ?>">
                        </div>
                    </div>
                    
                    <?php if(isLMni()): ?>
                        <div class="col-sm-12 mb-2 col-md-4 col-lg-2">
                                <div class="form-group">
                                    <select tabindex="2" class="form-control select2 ir_w_100 sec_one_outlet_id" id="outlet_id" name="outlet_id">
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
                    <?php endif; ?>

                    <div class="col-sm-12 mb-2 col-md-4 col-lg-2">
                        <div class="form-group">
                            <button type="submit" name="submit" id="submit_food_filter" value="submit"
                                class="btn bg-blue-btn w-100"><?php echo lang('submit'); ?></button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div class="table-box section-one-table-box-new">
            <div class="table-responsive">    
                <table id="datatable_food_sale" class="table food_sample_datatable datatable_name" data-id_name="datatable">
                    <thead>
                        <tr>
                        <th class="cursor_pointer ir_w2_txt_center"><?php echo lang('sn'); ?></th>
                        <th class="cursor_pointer" ><?php echo lang('code'); ?></th>
                        <th class="cursor_pointer" ><?php echo lang('food_menu'); ?>(<?php echo lang('code'); ?>)</th>
                        <th class="cursor_pointer" ><?php echo lang('quantity'); ?></th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div> 
    </div>
</section>

<!-- section 4 -->
<section class="main-content-wrapper tabcontent" id="daily_sale_report_id">
  
    <section class="content-header">
        <h3 class="top-left-header text-left"><?php echo lang('daily_sale_report'); ?></h3>
    </section>
    <!-- 
        <div class="my-2">
            <?php if(isLMni() && isset($outlet_id)): ?>
                <h4 class="txt-color-grey"> <?php echo lang('outlet'); ?>: <?php echo escape_output(getOutletNameById($outlet_id))?></h4>
            <?php endif; ?>
            <h4 class="txt-color-grey ir_txtCenter_mt0">
            <?php if (isset($user_id) && $user_id):
                echo lang('user').": " . userName($user_id) . "</span>";
            endif; ?></h4>
            <h4 class="txt-color-grey"><?= isset($start_date) && $start_date && isset($end_date) && $end_date ? lang('report_date') . date($this->session->userdata('date_format'), strtotime($start_date)) . " - " . date($this->session->userdata('date_format'), strtotime($end_date)) : '' ?><?= isset($start_date) && $start_date && !$end_date ? lang('report_date') . date($this->session->userdata('date_format'), strtotime($start_date)) : '' ?><?= isset($end_date) && $end_date && !$start_date ?lang('report_date') . date($this->session->userdata('date_format'), strtotime($end_date)) : '' ?>
            </h4>
        </div>
     -->
    <div class="box-wrapper">
       <form id="daily_sale_form">
            <div class="row my-2">
                <div class="col-sm-12 mb-3 col-md-4 col-lg-2">
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
                            <option value=""><?php echo lang('user'); ?></option>
                            <option value="<?= escape_output($this->session->userdata['user_id']); ?>">
                                <?= escape_output($this->session->userdata['full_name']); ?></option>
                            <?php
                            foreach ($users as $value) {
                                ?>
                            <option value="<?php echo escape_output($value->id) ?>" <?php echo set_select('user_id', $value->id); ?>>
                                <?php echo escape_output($value->full_name) ?></option>
                            <?php } ?>
                        </select>
                    </div>
                </div>
                <?php if(isLMni()): ?>
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
                <?php endif; ?>
                <div class="col-sm-12 col-md-4 col-lg-2">
                    <div class="form-group">
                        <button type="submit" name="submit" value="submit"
                            class="btn w-100 bg-blue-btn"><?php echo lang('submit'); ?></button>
                    </div>
                </div> 
            </div>
        </form>
        <div class="table-box section-one-table-box-new">
            <!-- /.box-header -->
            <div class="table-responsive">
                <table id="datatable_daily_sale" class="table">
                    <thead>
                        <tr>
                            <th class="cursor_pointer ir_w2_txt_center"><?php echo lang('sn'); ?></th>
                            <th class="cursor_pointer" ><?php echo lang('date'); ?></th>
                            <th class="cursor_pointer" ><?php echo lang('total_sale'); ?></th>
                        </tr>
                    </thead> 
                </table>
            </div>
            <!-- /.box-body -->
        </div>
    </div>
</section>

<!-- section 5 -->

<section class="main-content-wrapper tabcontent" id="detailed_sale_report_id">
        <section class="content-header">
            <h3 class="top-left-header text-left"><?php echo lang('detailed_sale_report'); ?></h3>
        <!--    <input type="hidden" class="datatable_name" data-title="<?php echo lang('detailed_sale_report'); ?>" data-id_name="datatable"> -->
        </section>
        <!-- 
                <div>
                    <?php if(isLMni() && isset($outlet_id)): ?>
                        <h4 class="txt-color-grey"> <?php echo lang('outlet'); ?>: <?php echo escape_output(getOutletNameById($outlet_id))?></h4>
                    <?php endif; ?>
                    <h4 class="txt-color-grey"><?= isset($start_date) && $start_date && isset($end_date) && $end_date ? lang('date').": " . date($this->session->userdata('date_format'), strtotime($start_date)) . " - " . date($this->session->userdata('date_format'), strtotime($end_date)) : '' ?><?= isset($start_date) && $start_date && !$end_date ? lang('date').": " . date($this->session->userdata('date_format'), strtotime($start_date)) : '' ?><?= isset($end_date) && $end_date && !$start_date ? lang('date').": " . date($this->session->userdata('date_format'), strtotime($end_date)) : '' ?>
                    </h4>
                    <h4 class="txt-color-grey ir_txtCenter_mt0"><?php
                        if (isset($user_id) && $user_id):
                            echo lang('user').": " . userName($user_id);
                        else:
                            echo lang('user').": ".lang('all');
                        endif;
                        ?>
                    </h4>
                    <h4 class="txt-color-grey ir_txtCenter_mt0"><?php
                        if (isset($waiter_id) && $waiter_id):
                            echo lang('waiter').": " . userName($waiter_id);
                        else:
                            echo lang('waiter').": ".lang('all');
                        endif;
                        ?>
                    </h4>
                </div>
         -->
        <div class="box-wrapper">
            <form id="detailed_sale_form">
                <div class="row">
                    <div class="col-sm-12 mb-3 col-md-4 col-lg-2">
                        <?php //echo form_open(base_url() . 'Report/detailedSaleReport') ?>
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
                                <option value=""><?php echo lang('user'); ?></option>
                                <option value="<?= escape_output($this->session->userdata['user_id']); ?>">
                                    <?= escape_output($this->session->userdata['full_name']); ?></option>
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
                            <select tabindex="2" class="form-control select2 ir_w_100" id="waiter_id" name="waiter_id">
                                <option value=""><?php echo lang('waiter'); ?></option>
                            <?php
                                foreach ($users as $value) {
                                    if($value->designation=="Waiter"):
                                    ?>
                                    <option value="<?php echo escape_output($value->id) ?>" <?php echo set_select('waiter_id', $value->id); ?>>
                                        <?php echo escape_output($value->full_name) ?></option>
                                <?php
                                    endif;
                                } ?>
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
            </form>
            <div class="table-box section-one-table-box-new">
            
                <div class="table-responsive">
                
                    <table id="datatable_detailed_sale" class="table">
                        <thead>
                            <tr>
                                <th class="cursor_pointer ir_w2_txt_center"><?php echo lang('sn'); ?></th>
                                <th class="cursor_pointer"><?php echo lang('date'); ?></th>
                                <th class="cursor_pointer"><?php echo lang('reference'); ?></th>
                                <th class="cursor_pointer"><?php echo lang('total_items'); ?></th>
                                <th class="cursor_pointer"><?php echo lang('subtotal'); ?></th>
                                <th class="cursor_pointer"><?php echo lang('delivery'); ?> <?php echo lang('delivery_charge'); ?></th>
                                <th class="cursor_pointer"><?php echo lang('service_charge'); ?></th>
                                <th class="cursor_pointer"><?php echo lang('discount'); ?></th>
                                <th class="cursor_pointer"><?php echo lang('vat'); ?></th>
                                <th class="cursor_pointer"><?php echo lang('g_total'); ?></th>
                                <th class="cursor_pointer"><?php echo lang('payment_method'); ?></th>
                            </tr>
                        </thead>
                <!--    <tbody>
                            <?php
                            $pGrandTotal = 0;
                            $subGrandTotal = 0;
                            $itemsGrandTotal = 0;
                            $disGrandTotal = 0;
                            $vatGrandTotal = 0;
                            $deliveryTotal = 0;
                            $serviceTotal = 0;
                            if (isset($detailedSaleReport)):
                                foreach ($detailedSaleReport as $key => $value) {
                                    $pGrandTotal+=$value->total_payable;
                                    $subGrandTotal+=$value->sub_total;
                                    $itemsGrandTotal+=$value->total_items;
                                    $disGrandTotal+=$value->total_discount_amount;
                                    $vatGrandTotal+=$value->vat;
                                    $service_row_total = 0;
                                    $delivery_row_total = 0;
                                    if($value->charge_type=="service"){
                                        $service_row_total = getPercentageValue($value->delivery_charge,$value->sub_total);
                                        $serviceTotal+=$service_row_total;

                                    }else{
                                        $delivery_row_total = getPercentageValue($value->delivery_charge,$value->sub_total);
                                        $deliveryTotal+= $delivery_row_total;
                                    }
                                    $key++;
                                    ?>
                            <tr>
                                <td class="ir_txt_center"><?php echo escape_output($key); ?></td>
                                <td><?= escape_output(date($this->session->userdata('date_format'), strtotime($value->sale_date))) ?>
                                </td>
                                <td><?php echo escape_output($value->sale_no) ?></td>
                                <td><?php echo escape_output($value->total_items) ?></td>
                                <td><?php echo escape_output(getAmt($value->sub_total)) ?></td>
                                <td><?php echo escape_output(getAmt($delivery_row_total)) ?></td>
                                <td><?php echo escape_output(getAmt($service_row_total)) ?></td>
                                <td><?php echo escape_output(getAmt($value->total_discount_amount)) ?></td>
                                <td><?php echo escape_output(getAmt($value->vat)) ?></td>
                                <td><?php echo escape_output(getAmt($value->total_payable)) ?></td>
                                <td><?php echo escape_output($value->name) ?></td>
                            </tr>
                            <?php
                                }
                            endif;
                            ?>
                            <tr>
                                <th class="ir_w2_txt_center"></th>
                                <th></th>
                                <th class="ir_txt_right"><?php echo lang('total'); ?> </th>
                                <th><?= escape_output($itemsGrandTotal) ?></th>
                                <th>
                                    <?php echo escape_output(getAmt($subGrandTotal)) ?></th>
                                <th><?php echo escape_output(getAmt($deliveryTotal)) ?></th>
                                <th><?php echo escape_output(getAmt($serviceTotal)) ?></th>
                                <th>
                                    <?php echo escape_output(getAmt($disGrandTotal)) ?></th>
                                <th>
                                    <?php echo escape_output(getAmt($vatGrandTotal)) ?></th>
                                <th>
                                    <?php echo escape_output(getAmt($pGrandTotal)) ?></th>
                                <th></th>
                            </tr>
                        </tbody> -->

                    </table>
                </div>
                <!-- /.box-body -->
            </div>
        </div>

</section>

<!-- section 6 -->

<section class="main-content-wrapper tabcontent" id="consumption_report_id">
    <section class="content-header">
        <h3 class="top-left-header text-left"><?php echo lang('consumption_report'); ?></h3>
        <input type="hidden" class="datatable_name" data-title="<?php echo lang('consumption_report'); ?>" data-id_name="datatable">
    </section>

    <div class="box-wrapper">
        <form id="consumption_report_form">
            <div class="row">
                <div class="col-sm-12 mb-3 col-md-4 col-lg-2">
                    <!-- form_open Report/consumptionReport -->
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
                <div class="col-sm-12 col-md-4 col-lg-2">
                    <div class="form-group">
                        <button type="submit" name="submit" value="submit"
                            class="btn bg-blue-btn w-100"><?php echo lang('submit'); ?></button>
                    </div>
                </div>
                <!--    <div class="col-sm-12 col-md-2 mb-2">
                    <a class="btn bg-blue-btn w-100" href="<?php echo base_url().'Report/getAllReports';?>">Back</a>
                </div>  -->
            </div>
        </form>
        <div class="table-box section-one-table-box-new">
                <!-- /.box-header -->
                <div class="table-responsive">
                    <h3><?php echo lang('consumption_report_menus'); ?></h3>
            <!--    <?php
                    if(isLMni() && isset($outlet_id)):
                        ?>
                        <h4> <?php echo lang('outlet'); ?>: <?php echo escape_output(getOutletNameById($outlet_id))?></h4>
                        <?php
                    endif;
                    ?> -->
                   <!--  <h4><?= isset($start_date) && $start_date && isset($end_date) && $end_date ?lang('report_date') . date($this->session->userdata('date_format'), strtotime($start_date)) . " - " . date($this->session->userdata('date_format'), strtotime($end_date)) : '' ?><?= isset($start_date) && $start_date && !$end_date ? lang('report_date') . date($this->session->userdata('date_format'), strtotime($start_date)) : '' ?><?= isset($end_date) && $end_date && !$start_date ? lang('report_date') . date($this->session->userdata('date_format'), strtotime($end_date)) : '' ?>
                    </h4> -->
                    <!-- <br> -->
                    <table id="consumption_menus_datatable" class="table">
                        <thead>
                            <tr>
                                <th class="ir_w2_txt_center"><?php echo lang('sn'); ?></th>
                                <th><?php echo lang('ingredient_name'); ?>(<?php echo lang('code'); ?>)</th>
                                <th><?php echo lang('quantity_amount'); ?></th>
                                <th><?php echo lang('total_cost'); ?></th>
                            </tr>
                        </thead>
            <!--    <tbody>
                            <?php
                            $totalTK = 0;
                            if (isset($consumptionMenus)):
                                foreach ($consumptionMenus as $key => $value) {
                                    $last_purchase_price = getLastPurchaseAmount($value->ingredient_id);
                                    $totalTK +=$value->total_consumption *  $last_purchase_price;
                                    $key++;
                                    ?>
                            <tr>
                                <td class="ir_txt_center"><?php echo escape_output($key); ?></td>
                                <td><?php echo escape_output($value->ingredient_name).' '.$value->ingredient_code; ?></td>
                                <td><?php echo escape_output(getAmtP($value->total_consumption)) ?></td>
                                <td><?php echo  escape_output(getAmtP($value->total_consumption * $last_purchase_price)) ?></td>
                            </tr>
                            <?php
                                }
                            endif;
                            ?>
                        </tbody> -->
        <!--    <tfoot>

                        </tfoot> -->
                    </table>
                </div>
                <!-- /.box-body -->
        </div>
        <div class="table-box section-one-table-box-new" >
                    <!-- /.box-header -->
                    <div class="table-responsive">
                        <h3><?php echo lang('consumption_report_modifiers'); ?></h3>
            <!--    <h4><?= isset($start_date) && $start_date && isset($end_date) && $end_date ? lang('report_date') . date($this->session->userdata('date_format'), strtotime($start_date)) . " - " . date($this->session->userdata('date_format'), strtotime($end_date)) : '' ?><?= isset($start_date) && $start_date && !$end_date ? lang('report_date') . date($this->session->userdata('date_format'), strtotime($start_date)) : '' ?><?= isset($end_date) && $end_date && !$start_date ? lang('report_date') . date($this->session->userdata('date_format'), strtotime($end_date)) : '' ?>
                        </h4> -->
                        <!-- <br> -->
                        <table id="consumption_modifier_datatable" class="table">
                            <thead>
                                <tr>
                                    <th class="ir_w2_txt_center"><?php echo lang('sn'); ?></th>
                                    <th><?php echo lang('ingredient_name'); ?>(<?php echo lang('code'); ?>)</th>
                                    <th><?php echo lang('quantity_amount'); ?></th>
                                    <th><?php echo lang('total_cost'); ?></th>
                                </tr>
                            </thead>
                <!--    <tbody>
                                <?php
                                $totalTK = 0;
                                if (isset($consumptionModifiers)):
                                    foreach ($consumptionModifiers as $key => $value) {
                                        $last_purchase_price = getLastPurchaseAmount($value->ingredient_id);
                                        $totalTK +=$value->total_consumption *  $last_purchase_price;
                                        $key++;
                                        ?>
                                <tr>
                                    <td class="ir_txt_center"><?php echo escape_output($key); ?></td>
                                    <td><?php echo escape_output($value->ingredient_name.' '.$value->ingredient_code); ?></td>
                                    <td><?php echo escape_output(getAmtP($value->total_consumption)) ?></td>
                                    <td><?php echo escape_output(getAmtP($value->total_consumption * $last_purchase_price)) ?></td>
                                </tr>
                                <?php
                                    }
                                endif;
                                ?>
                            </tbody> -->
                <!--    <tfoot>
                            <tr>
                                <td class="ir_txt_center"></td>
                                <td> </td>
                                <td><?php echo lang('total'); ?></td>
                                <td><?php echo escape_output(getAmtP($totalTK)) ?></td>
                            </tr>
                            </tfoot> -->
                        </table>
                    </div>
                    <!-- /.box-body -->
        </div>
    </div>
</section>

<!-- section 7 -->
<section class="main-content-wrapper tabcontent" id="stock_report_id">

    <section class="content-header">
        <div>
            <h3 class="text-left top-left-header"><?php echo lang('inventory'); ?>  <?php echo lang('report'); ?></h3>
        </div>  
    </section>

    <div class="box-wrapper">
            
            <form id="stock_report_form">
                <div class="row"> 
                    <div class="col-sm-12 mb-3 col-md-4 col-lg-2">
                        <div class="form-group">
                            <select class="form-control select2 category_id ir_w_100" name="category_id" id="category_id">
                                <option value=""><?php echo lang('category'); ?></option>
                                <?php foreach ($ingredient_categories as $value) { ?>
                                <option value="<?php echo escape_output($value->id) ?>" <?php echo set_select('category_id', $value->id); ?>>
                                    <?php echo escape_output($value->category_name) ?></option>
                                <?php } ?>
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-12 mb-3 col-md-4 col-lg-2">
                        <div class="form-group">
                            <select class="form-control select2 ir_w_100" name="ingredient_id" id="ingredient_id">
                                <option value=""><?php echo lang('ingredient'); ?></option>
                                <?php foreach ($ingredients as $value) {
                                    if ($value->id):
                                        ?>
                                        <option value="<?php echo escape_output($value->id) ?>" <?php echo set_select('ingredient_id', $value->id); ?>>
                                            <?php echo escape_output($value->name) . "(" . $value->code . ")" ?></option>
                                        <?php
                                    endif;
                                } ?>
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-12 mb-3 col-md-4 col-lg-2">
                        <div class="form-group">
                            <select class="form-control select2 ir_w_100" name="food_id" id="food_id">
                                <option value=""><?php echo lang('food_menu'); ?></option>
                                <?php foreach ($foodMenus as $value) { ?>
                                <option value="<?php echo escape_output($value->id) ?>" <?php echo set_select('food_id', $value->id); ?>>
                                    <?php echo substr(ucwords(strtolower($value->name)), 0, 18) . "(" . $value->code . ")" ?>
                                </option>
                                <?php } ?>
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
                    <div class="col-lg-2 col-md-4 col-sm-12 mb-2">
                        <button type="submit" name="submit" value="submit"
                            class="btn bg-blue-btn w-100"><?php echo lang('submit'); ?></button>
                    </div> 
                    <div class="col-sm-12 mb-2 col-md-3">
                        <!-- <a href="// base_url() . 'Inventory/getInventoryAlertList'" class="btn bg-blue-btn w-100"><span class="ir_color_red m-right"> // getAlertCount() </span> -->
                        <!-- <a href="  //base_url() . 'Inventory/getInventoryAlertList'  " class="btn bg-blue-btn w-100"><span class="ir_color_red m-right">  // getAlertCount()  </span> -->
                            <!-- <?php  // echo lang('ingredients_alert'); ?> </a> -->
                    </div>
                <!--    <div class="col-sm-12 col-md-3">
                        <strong class="txt-color-grey" id="stockValue"></strong>
                    </div> -->
                </div>
            </form>

            <!-- general form elements -->
            <div class="table-box section-one-table-box-new">
                <!-- /.box-header -->
                <div class="table-responsive">
                    <table id="datatable_stock_report" class="table">
                        <thead>
                            <tr>
                                <th class="title cursor_pointer" class="ir_w_5"><?php echo lang('sn'); ?></th>
                                <th class="title cursor_pointer" class="ir_w_37">
                                    <?php echo lang('ingredient'); ?>(<?php echo lang('code'); ?>)</th>
                                <th class="title cursor_pointer" class="ir_w_20"><?php echo lang('category'); ?></th>
                                <th class="title cursor_pointer" class="ir_w_20"><?php echo lang('stock_qty_amount'); ?></th>
                                <th class="title cursor_pointer" class="ir_w_20"><?php echo lang('total_cost'); ?></th>
                                <th class="title cursor_pointer" class="ir_w_20"><?php echo lang('alert_qty_amount'); ?></th>
                            </tr>
                        </thead>
                        <!--    <tbody>
                            <?php
                                $totalStock = 0;
                                $grandTotal = 0;
                                $alertCount = 0;
                                $totalTK = 0;
                                if (!empty($inventory) && isset($inventory)):
                                    foreach ($inventory as $key => $value):
                                if($value->id):
                                    $last_purchase_price = getLastPurchaseAmount($value->id);
                                        $totalStock = $value->total_purchase - $value->total_consumption - $value->total_modifiers_consumption - $value->total_waste + $value->total_consumption_plus - $value->total_consumption_minus + $value->total_transfer_plus  - $value->total_transfer_minus  +  $value->total_transfer_plus_2  -  $value->total_transfer_minus_2;
                                        $totalTK = $totalStock * $last_purchase_price;
                                        if ($totalStock >= 0) {
                                            $grandTotal = $grandTotal + $totalStock * $last_purchase_price;
                                        }
                                        $key++;
                                        ?>
                            <tr>
                                <td class="ir_txt_center"><?php echo escape_output($key); ?></td>
                                <td><?= escape_output($value->name . "(" . $value->code . ")") ?></td>
                                <td><?php echo escape_output($value->category_name); ?></td>
                                <td><span  style="<?= ($totalStock <= $value->alert_quantity) ? 'color:red' : '' ?>"><?= ($totalStock) ? getAmtP($totalStock) :getAmtP(0) ?><?= " " . escape_output($value->unit_name) ?></span>
                                <td><span  style="<?= ($totalStock <= $value->alert_quantity) ? 'color:red' : '' ?>"><?= ($totalStock) ? getAmtP($totalStock * $last_purchase_price) :getAmtP(0) ?></span>
                                </td>
                                <td><?= escape_output(getAmtP($value->alert_quantity) . " " . $value->unit_name) ?></td>
                            </tr>
                            <?php
                                    endif;
                                    endforeach;
                                endif;
                                ?>
                        </tbody> -->

                    </table>
                    <input type="hidden" value="<?php echo escape_output(getAmtP($grandTotal)); ?>" id="grandTotal" name="grandTotal">
                </div>
                <!-- /.box-body -->
            </div>
    </div>


</section>

<!-- section 8 -->

<section class="main-content-wrapper tabcontent" id="low_stock_report_id">

    <section class="content-header">
        <div>
            <h3 class="top-left-header text-left"><?php echo lang('alert'); ?> <?php echo lang('inventory'); ?> </h3>
            <!-- <input type="hidden" class="datatable_name" data-title="<?php echo lang('alert'); ?> <?php echo lang('inventory'); ?>" data-id_name="datatable"> -->
        </div>
        <div class="row">
            <div class="col-md-1">
            <!--                 <a href="<?= base_url() . 'Inventory/index' ?>"
                    class="btn bg-blue-btn btn_list m-right"><strong><?php echo lang('back'); ?></strong></a> -->
            </div>
            <!-- <div class="hidden-lg"><span class="ir_f_c">hidden text</span></div> -->
        </div>
        
    </section>

    <div class="box-wrapper">
            <!-- general form elements -->
            <div class="table-box section-one-table-box-new">
                <!-- /.box-header -->
                <div class="table-responsive">
                    <table id="datatable_alert_stock" class="table table-striped">
                        <thead>
                            <tr>
                                <th class="title cursor_pointer" class="ir_w_5"><?php echo lang('sn'); ?></th>
                                <th class="title cursor_pointer" class="ir_w_37">
                                    <?php echo lang('ingredient'); ?>(<?php echo lang('code'); ?>)</th>
                                <th class="title cursor_pointer" class="ir_w_20"><?php echo lang('category'); ?></th>
                                <th class="title cursor_pointer" class="ir_w_20"><?php echo lang('stock_qty_amount'); ?></th>
                                <th class="title cursor_pointer" class="ir_w_20"><?php echo lang('alert_qty_amount'); ?></th>
                            </tr>
                        </thead>
                        <tbody> 
                            <?php
                                $totalStock = 0;
                                $grandTotal = 0;
                                $totalTK = 0;
                                $i = 1;
                                if (!empty($inventory) && isset($inventory)):
                                    foreach ($inventory as $key => $value):
                                    if($value->id):
                                        $totalStock = $value->total_purchase - $value->total_consumption - $value->total_modifiers_consumption - $value->total_waste + $value->total_consumption_plus - $value->total_consumption_minus + $value->total_transfer_plus  - $value->total_transfer_minus  +  $value->total_transfer_plus_2  -  $value->total_transfer_minus_2;
                                        $totalTK = $totalStock * getLastPurchaseAmount($value->id);
                                        if ($totalStock <= $value->alert_quantity):
                                            if ($totalStock >= 0) {
                                                $grandTotal = $grandTotal + $totalStock * getLastPurchaseAmount($value->id);
                                            }
                                            $key++;
                                            ?>
                                    <tr>
                                        <td class="ir_txt_center"><?php echo escape_output($i); ?></td>
                                        <td><?= escape_output($value->name . "(" . $value->code . ")") ?></td>
                                        <td><?php echo escape_output($value->category_name); ?></td>
                                        <td><span
                                                style="<?= ($totalStock <= $value->alert_quantity) ? 'color:red' : '' ?>"><?= ($totalStock) ? getAmtP($totalStock) : getAmtP(0) ?><?= " " . escape_output($value->unit_name) ?></span>
                                        </td>
                                        <td><?= escape_output(getAmtP($value->alert_quantity) . " " . $value->unit_name) ?></td>
                                    </tr>
                                    <?php
                                            $i++;
                                        endif;
                                        endif;
                                    endforeach;
                                endif;
                            ?>
                        </tbody>
                    </table>
                    <input type="hidden" value="<?php echo escape_output(getAmtP($grandTotal)); ?>" id="grandTotal" name="grandTotal">
                </div>
                <!-- /.box-body -->
            </div>
    </div>
 
</section>

<!-- section 9 -->

<section class="main-content-wrapper tabcontent" id="profit_loss_report_id">

    <section class="content-header">
        <h3 class="text-left top-left-header"><?php echo lang('profit_loss_report'); ?></h3>
        <input type="hidden" class="datatable_name" data-title="<?php echo lang('profit_loss_report'); ?>" data-id_name="datatable">
    </section>

    <div class="box-wrapper">
        <div class="row">
            <div class="col-md-4 col-lg-2 col-sm-12 mb-3">
                <?php // echo form_open(base_url() . 'Report/profitLossReport') ?>
                <div class="form-group">
                    <input tabindex="1" type="text" id="" name="startDate" readonly class="form-control customDatepicker"
                        placeholder="<?php echo lang('start_date'); ?>" value="<?php echo set_value('startDate'); ?>">
                </div>
            </div>
            <div class="col-md-4 col-lg-2 col-sm-12 mb-3">
                <div class="form-group">
                    <input tabindex="2" type="text" id="endMonth" name="endDate" readonly
                        class="form-control customDatepicker" placeholder="<?php echo lang('end_date'); ?>"
                        value="<?php echo set_value('endDate'); ?>">
                </div>
            </div>
            <?php
            if(isLMni()):
                ?>
                <div class="col-md-4 col-lg-2 col-sm-12 mb-3">
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
            <div class="col-md-4 col-lg-2 col-sm-12">
                <div class="form-group">
                    <button type="submit" name="submit" value="submit"
                        class="btn bg-blue-btn w-100"><?php echo lang('submit'); ?></button>
                </div>
            </div> 
        </div>
        <div class="table-box section-one-table-box-new mt-3">
            <div class="table-responsive">
                <table class="table" id="datatable">
                    <thead>
                    <tr>
                        <th class="cursor_pointer"></th>
                        <th class="ir_w_100 text-center cursor_pointer">
                            <h4 class="ir_txt_center">
                                <?php echo lang('profit_loss_report'); ?>
                            </h4>

                            <?php
                            if(isLMni() && isset($outlet_id)):
                                ?>
                                <h4> <?php echo lang('outlet'); ?>: <?php echo escape_output(getOutletNameById($outlet_id))?>, <?= isset($start_date) && $start_date && isset($end_date) && $end_date ? lang('date').": " . date($this->session->userdata('date_format'), strtotime($start_date)) . " - " . date($this->session->userdata('date_format'), strtotime($end_date)) : '' ?><?= isset($start_date) && $start_date && !$end_date ? lang('date').": " . date($this->session->userdata('date_format'), strtotime($start_date)) : '' ?><?= isset($end_date) && $end_date && !$start_date ? lang('date').": " . date($this->session->userdata('date_format'), strtotime($end_date)) : '' ?></h4>
                                <?php
                            else:
                                ?>
                                <h4 class="ir_txt_center">
                                    <?= isset($start_date) && $start_date && isset($end_date) && $end_date ? lang('date').": " . date($this->session->userdata('date_format'), strtotime($start_date)) . " - " . date($this->session->userdata('date_format'), strtotime($end_date)) : '' ?><?= isset($start_date) && $start_date && !$end_date ? lang('date').": " . date($this->session->userdata('date_format'), strtotime($start_date)) : '' ?><?= isset($end_date) && $end_date && !$start_date ? lang('date').": " . date($this->session->userdata('date_format'), strtotime($end_date)) : '' ?>
                                </h4>
                                <?php
                            endif;
                            ?>
                        </th>
                        <th class="cursor_pointer"></th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td class="ir_w_40">
                                <?php echo lang('profit_1'); ?></td>
                            <td><?= isset($saleReportByDate['profit_1']) ? getAmt($saleReportByDate['profit_1']) : getAmt(0) ?>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td> <?php echo lang('profit_2'); ?></td>
                            <td><?= isset($saleReportByDate['profit_2']) ? getAmt($saleReportByDate['profit_2']) : getAmt(0) ?>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td> <?php echo lang('profit_3'); ?></td>
                            <td><?= isset($saleReportByDate['profit_3']) ? getAmt($saleReportByDate['profit_3']) : getAmt(0) ?>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td> <?php echo lang('profit_4'); ?></td>
                            <td><?= isset($saleReportByDate['profit_4']) ? getAmt($saleReportByDate['profit_4']) : getAmt(0) ?>
                            </td>
                        </tr>
                        <tr class="profit_txt">
                            <td>5</td>
                            <td> <?php echo lang('profit_5'); ?> (1+2) - (3+4)</td>
                            <td> <?= isset($saleReportByDate['profit_5']) ? getAmt($saleReportByDate['profit_5']) : getAmt(0) ?>
                            </td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td> <?php echo lang('profit_6'); ?></td>
                            <td><?= isset($saleReportByDate['profit_6']) ? getAmt($saleReportByDate['profit_6']) : getAmt(0) ?>
                            </td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td> <?php echo lang('profit_7'); ?></td>
                            <td><?= isset($saleReportByDate['profit_7']) ? getAmt($saleReportByDate['profit_7']) : getAmt(0) ?>
                            </td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td> <?php echo lang('profit_8'); ?></td>
                            <td><?= isset($saleReportByDate['profit_8']) ? getAmt($saleReportByDate['profit_8']) : getAmt(0) ?>
                            </td>
                        </tr>
                        <tr class="profit_txt">
                            <td>9</td>
                            <td> <?php echo lang('profit_9'); ?> (5) - (6+7+8)</td>
                            <td><?= isset($saleReportByDate['profit_9']) ? getAmt($saleReportByDate['profit_9']) : getAmt(0) ?>
                            </td>
                        </tr>
                    </tbody>
                   
                </table>
            </div>
        </div>
    </div>
        
</section>


<!-- section 10 kitchen -->

<section class="main-content-wrapper tabcontent" id="kitchen_performance_report_id">
    <section class="content-header">
        <h3 class="top-left-header text-left"><?php echo lang('kitchen_performance_report'); ?></h3>
        <input type="hidden" class="datatable_name" data-title="<?php echo lang('kitchen_performance_report'); ?>" data-id_name="datatable">
    </section>

    <div class="my-2">
        <?php if(isLMni() && isset($outlet_id)): ?>
            <h4 class="txt-color-grey"> <?php echo lang('outlet'); ?>: <?php echo escape_output(getOutletNameById($outlet_id))?></h4>
        <?php endif; ?>
        <h4 class="txt-color-grey"><?= isset($start_date) && $start_date && isset($end_date) && $end_date ? lang('report_date') . date($this->session->userdata('date_format'), strtotime($start_date)) . " - " . date($this->session->userdata('date_format'), strtotime($end_date)) : '' ?><?= isset($start_date) && $start_date && !$end_date ? lang('report_date') . date($this->session->userdata('date_format'), strtotime($start_date)) : '' ?><?= isset($end_date) && $end_date && !$start_date ? lang('report_date') . date($this->session->userdata('date_format'), strtotime($end_date)) : '' ?>
        </h4>
    </div>
    <div class="box-wrapper">
        <form id="kitchen_performance_form">
            <div class="row">
                <div class="col-sm-12 mb-3 col-md-4 col-lg-2">
                    <!-- base_url() . 'Report/kitchenPerformanceReport')   -->
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
                <div class="col-sm-12 col-md-4 col-lg-2">
                    <div class="form-group">
                        <button type="submit" name="submit" value="submit"
                            class="btn bg-blue-btn w-100"><?php echo lang('submit'); ?></button>
                    </div>
                </div>
            </div>
        </form>
        <div class="table-box section-one-table-box-new">
            <!-- /.box-header -->
            <div class="table-responsive">
                <table id="datatable_kitchen_performance" class="table">
                    <thead>
                        <tr>
                            <th class="ir_w_1 cursor_pointer"> <?php echo lang('sn'); ?></th>
                            <th class="cursor_pointer"><?php echo lang('date'); ?></th>
                            <th class="cursor_pointer"><?php echo lang('order_number'); ?></th>
                            <th class="cursor_pointer"><?php echo lang('type'); ?></th>
                            <th class="cursor_pointer"><?php echo lang('order_time'); ?></th>
                            <th class="cursor_pointer"><?php echo lang('cooking_start_time'); ?></th>
                            <th class="cursor_pointer"><?php echo lang('cooking_end_time'); ?></th>
                            <th class="cursor_pointer"><?php echo lang('time_taken'); ?></th>
                        </tr>
                    </thead>
                <!--    <tbody>
                        <?php 
                        if (isset($kitchenPerformanceReport)):
                            foreach ($kitchenPerformanceReport as $key => $value) { 
                                $key++;
                                ?>
                        <tr>
                            <td class="ir_txt_center"><?php echo escape_output($key); ?></td>
                            <td><?= escape_output(date($this->session->userdata('date_format'), strtotime($value->sale_date))) ?>
                            </td>
                            <td><?php echo escape_output($value->sale_no) ?></td>
                            <td><?php echo escape_output(getOrderType($value->order_type)) ?></td>
                            <td><?php echo escape_output($value->order_time) ?></td>
                            <td><?php echo escape_output($value->cooking_start_time) ?></td>
                            <td><?php echo escape_output($value->cooking_done_time) ?></td>
                            <td>
                                <?php 
                                            if($value->cooking_done_time == '0000-00-00 00:00:00'){ 
                                                echo 'N/A'; 
                                            }else{   
                                                $cooking_done_time = strtotime($value->cooking_done_time);
                                                $order_time = strtotime($value->order_time);
                                                $minute = round(abs($cooking_done_time - $order_time) / 60,2); 
                                                $hour = round(abs($minute) / 60,2);
                                                echo escape_output($hour)." ".lang('hour');
                                            }
                                        ?>
                            </td>
                        </tr>
                        <?php
                            }
                        endif;
                        ?>
                    </tbody> -->
                </table>
            </div>
            <!-- /.box-body -->
        </div>
    </div>

</section>

<!-- section 11 -->

<section class="main-content-wrapper tabcontent" id="attendance_report_id">
        
    <section class="content-header">
        <h3 class="top-left-header text-left"><?php echo lang('attendance_report'); ?></h3>
        <!-- <input type="hidden" class="datatable_name" data-title="<?php echo lang('attendance_report'); ?>" data-id_name="datatable">  -->
    </section>
        <!--     <div class="my-2">
            <h4><?= isset($start_date) && $start_date && isset($end_date) && $end_date ? lang('report_date') . date($this->session->userdata('date_format'), strtotime($start_date)) . " - " . date($this->session->userdata('date_format'), strtotime($end_date)) : '' ?><?= isset($start_date) && $start_date && !$end_date ? lang('report_date') . date($this->session->userdata('date_format'), strtotime($start_date)) : '' ?><?= isset($end_date) && $end_date && !$start_date ? lang('report_date') . date($this->session->userdata('date_format'), strtotime($end_date)) : '' ?>
                    </h4>
                    <h4 class="ir_txtCenter_mt0"><?php
                    if (isset($employee_id) && ($employee_id)){
                        echo lang('employee').": <span class='ir_txt_underline'>" . employeeName($employee_id) . "</span>";
                    } 
                    ?></h4>
    </div> -->
    <div class="box-wrapper">
        <form id="attendance_form">
            <div class="row mb-2">
                <div class="col-sm-12 mb-2 col-md-4 col-lg-2">
                    <!-- form_open . 'Report/attendanceReport  -->
                    <div class="form-group">
                        <input tabindex="1" type="text" id="" name="startDate" readonly class="form-control customDatepicker"
                            placeholder="<?php echo lang('start_date'); ?>" value="<?php echo set_value('startDate'); ?>">
                    </div>
                </div>
                <div class="col-sm-12 mb-2 col-md-4 col-lg-2">
                    <div class="form-group">
                        <input tabindex="2" type="text" id="endMonth" name="endDate" readonly
                            class="form-control customDatepicker" placeholder="<?php echo lang('end_date'); ?>"
                            value="<?php echo set_value('endDate'); ?>">
                    </div>
                </div>
                <div class="col-sm-12 mb-2 col-md-4 col-lg-2">

                    <div class="form-group">
                        <select tabindex="2" class="form-control select2 ir_w_100" id="employee_id" name="employee_id">
                            <option value=""><?php echo lang('employee'); ?></option>
                            <?php
                            foreach ($employees as $value) {
                                ?>
                            <option value="<?php echo escape_output($value->id) ?>" <?php echo set_select('employee_id', $value->id); ?>>
                                <?php echo escape_output($value->full_name) ?></option>
                            <?php } ?>
                        </select>
                    </div>
                </div>
                <div class="col-sm-12 mb-2 col-md-4 col-lg-2">
                    <div class="form-group">
                        <button type="submit" name="submit" value="submit"
                            class="btn bg-blue-btn w-100"><?php echo lang('submit'); ?></button>
                    </div>
                </div>
    <!--             <div class="col-sm-12 col-md-2 mb-2">
                    <a class="btn bg-blue-btn w-100" href="<?php echo base_url().'Report/getAllReports';?>">Back</a>
                </div> -->
            </div>
        </form>
        <div class="table-box section-one-table-box-new">
                <!-- /.box-header -->
                <div class="table-responsive">
                    
                    <table id="attendance_datatable" class="table">
                        <thead>
                            <tr>
                                <th class="ir_w_1 cursor_pointer"> <?php echo lang('sn'); ?></th>
                                <th class="ir_w_11 cursor_pointer"><?php echo lang('ref_no'); ?></th>
                                <th class="ir_w_9 cursor_pointer"><?php echo lang('date'); ?></th>
                                <th class="ir_w_18 cursor_pointer"><?php echo lang('employee'); ?></th>
                                <th class="ir_w_10 cursor_pointer"><?php echo lang('in_time'); ?></th>
                                <th class="ir_w_10 cursor_pointer"><?php echo lang('out_time'); ?></th>
                                <th class="ir_w_14 cursor_pointer"><?php echo lang('time_count'); ?></th>
                            </tr>
                        </thead>
                        <!--    <tbody>
                            <?php
                            $total_hours = 0;
                            if (!empty($attendanceReport)) {
                                $i = count($attendanceReport); 
                            foreach ($attendanceReport as $value) { 
                                ?>
                            <tr>
                                <td><?php echo escape_output($i--); ?></td>
                                <td><?php echo escape_output($value->reference_no) ?></td>
                                <td><?php echo escape_output(date($this->session->userdata('date_format'), strtotime($value->date))); ?>
                                </td>
                                <td><?php echo escape_output(employeeName($value->employee_id)); ?></td>
                                <td><?php echo escape_output($value->in_time) ?></td>
                                <td>
                                    <?php 
                                        if($value->out_time == '00:00:00'){ 
                                            echo 'N/A<br>';  
                                        }else{ 
                                            echo escape_output($value->out_time);
                                        } 
                                        ?>
                                </td>
                                <td>
                                    <?php  
                                        if($value->out_time == '00:00:00'){ 
                                            echo 'N/A'; 
                                        }else{ 
                                            $to_time = strtotime($value->out_time);
                                            $from_time = strtotime($value->in_time);
                                            $minute = round(abs($to_time - $from_time) / 60,2); 
                                            $hour = round(abs($minute) / 60,2);
                                            echo escape_output($hour)." ".lang('hour');
                                            $total_hours += $hour;
                                        }

                                        ?>
                                </td>
                            </tr>
                            <?php
                            } }
                            ?>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><b><?php echo lang('total'); ?> <?php echo lang('hours'); ?></b></td>
                                <td><?php echo escape_output($total_hours) . " ".lang('hours'); ?></td>
                            </tr>
                        </tbody> --> 
                    </table>
                </div>
                <!-- /.box-body -->
        </div>
    </div>
</section>

<!-- section 12 -->
<section class="main-content-wrapper tabcontent" id="supplier_ledger_id">

    <section class="content-header">
        <h3 class="top-left-header text-left"><?php echo lang('supplier_report'); ?></h3>
        <!-- <input type="hidden" class="datatable_name" data-title="<?php echo lang('supplier_report'); ?>" data-id_name="datatable"> -->
    </section>

    <!-- <div class="my-2">
                    <?php
                    if(isLMni() && isset($outlet_id)):
                        ?>
                        <h4> <?php echo lang('outlet'); ?>: <?php echo escape_output(getOutletNameById($outlet_id))?></h4>
                        <?php
                    endif;
                    ?>
                    <h4 class="ir_txtCenter_mt0"><?php
                    if (isset($supplier_id) && $supplier_id):
                        echo "<span>" . getSupplierNameById($supplier_id) . "</span>";
                    endif;
                    ?></h4>
                    <h4><?= isset($start_date) && $start_date && isset($end_date) && $end_date ? lang('report_date') . date($this->session->userdata('date_format'), strtotime($start_date)) . " - " . date($this->session->userdata('date_format'), strtotime($end_date)) : '' ?><?= isset($start_date) && $start_date && !$end_date ? lang('report_date') . date($this->session->userdata('date_format'), strtotime($start_date)) : '' ?><?= isset($end_date) && $end_date && !$start_date ? lang('report_date') . date($this->session->userdata('date_format'), strtotime($end_date)) : '' ?>
                    </h4>
                    
                    <h4><?php echo lang('purchase'); ?></h4>
    </div> -->

    <div class="box-wrapper">
        <form id="supplier_report_form">
            <div class="row">
                <div class="col-sm-12 mb-3 col-md-4 col-lg-2">
                    <!-- base_url() . 'Report/supplierReport', $arrayName = array('id' => 'supplierReport'))  -->
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
                        <select tabindex="2" class="form-control select2 ir_w_100" id="supplier_id" name="supplier_id">
                            <option value=""><?php echo lang('suppliers'); ?></option>
                            <?php
                            foreach ($suppliers as $value) {
                                ?>
                            <option value="<?php echo escape_output($value->id) ?>" <?php echo set_select('supplier_id', $value->id); ?>>
                                <?php echo escape_output($value->name) ?></option>
                            <?php } ?>
                        </select>
                    </div>
                    <div class="alert error-msg supplier_id_err_msg_contnr ir_p_5">
                        <p id="supplier_id_err_msg"></p>
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
                <div class="col-sm-12 col-md-4 col-lg-2">
                    <div class="form-group">
                        <button type="submit" name="submit" value="submit"
                            class="btn bg-blue-btn w-100"><?php echo lang('submit'); ?></button>
                    </div>
                </div>
                <!--    <div class="col-sm-12 col-md-2 mb-2">
                    <a class="btn bg-blue-btn w-100" href="<?php echo base_url().'Report/getAllReports';?>">Back</a>
                </div> -->
            </div>
        </form>
        <div class="table-box section-one-table-box-new mt-3">
            <!-- /.box-header -->
            <div class="table-responsive">
                    
                    <table id="supplier_report_datatable" class="table">
                        <thead>
                            <tr>
                                <th class="ir_w2_txt_center cursor_pointer"><?php echo lang('sn'); ?></th>
                                <th class="cursor_pointer"><?php echo lang('date'); ?></th>
                                <th class="cursor_pointer"><?php echo lang('reference'); ?></th>
                                <th class="cursor_pointer"><?php echo lang('g_total'); ?></th>
                                <th class="cursor_pointer"><?php echo lang('paid'); ?></th>
                                <th class="cursor_pointer"><?php echo lang('due'); ?></th>
                            </tr>
                        </thead>
                <!--    <tbody>
                            <?php
                            $pGrandTotal = 0;
                            $pPaid = 0;
                            $pDue = 0;
                            if (isset($supplierReport)):
                                foreach ($supplierReport as $key => $value) {
                                    $pGrandTotal+=$value->grand_total;
                                    $pPaid+=$value->paid;
                                    $pDue+=$value->due;
                                    $key++;
                                    ?>
                            <tr>
                                <td class="ir_txt_center"><?php echo escape_output($key); ?></td>
                                <td><?= escape_output(date($this->session->userdata('date_format'), strtotime($value->date))) ?></td>
                                <td><?php echo escape_output($value->reference_no) ?></td>
                                <td><?php echo escape_output(getAmt($value->grand_total)) ?></td>
                                <td><?php echo escape_output(getAmt($value->paid)) ?></td>
                                <td><?php echo escape_output(getAmt($value->due)) ?></td>
                            </tr>
                            <?php
                                }
                            endif;
                            ?>
                        </tbody> -->
                    </table>
                    
                    <h4 class="ir_txt_left_mb"><?php echo lang('due_payment'); ?></h4>
                    <table id="supplier_due_report_datatable" class="table">
                        <thead>
                            <tr>
                                <th class="ir_w2_txt_center"><?php echo lang('sn'); ?></th>
                                <th><?php echo lang('date'); ?></th>
                                <th><?php echo lang('payment_amount'); ?></th>
                                <th class="ir_w_45"><?php echo lang('note'); ?></th>
                            </tr>
                        </thead>
                    <!--    <tbody>
                            <?php
                            $totalAmount = 0;

                            if (isset($supplierDuePaymentReport)):
                                foreach ($supplierDuePaymentReport as $key => $value) {
                                    $totalAmount+=$value->amount;
                                    $key++;
                                    ?>
                            <tr>
                                <td class="ir_txt_center"><?php echo escape_output($key); ?></td>
                                <td><?= escape_output(date($this->session->userdata('date_format'), strtotime($value->date))) ?></td>
                                <td> <?php echo escape_output(getAmt($value->amount)) ?></td>
                                <td><?php echo escape_output($value->note) ?></td>
                            </tr>
                            <?php
                                }
                            endif;
                            ?>
                        </tbody> -->
                    </table>
            </div>
            <!-- /.box-body -->
        </div>
    </div>
        
</section>

<!-- section 13 -->
<section class="main-content-wrapper tabcontent" id="supplier_due_report_id">
    <!-- Supplier Due Report -->
    <section class="content-header">
        <div>
            <h3 class="top-left-header d-inline-block text-left m-right"><?php echo lang('supplier_due_report'); ?></h3>
            <!--    <?php
            if(isLMni() && isset($outlet_id)):
                ?>
                <small> <?php echo lang('outlet'); ?>: <?php echo escape_output(getOutletNameById($outlet_id))?></small>
                <?php
            endif;
            ?> -->
        </div>
        <!-- <input type="hidden" class="datatable_name" data-title="<?php echo lang('supplier_due_report'); ?>" data-id_name="datatable"> -->
    </section>
    
    <div class="box-wrapper">
        <?php
        // if(isLMni()):
        ?> 
        <!-- (base_url() . 'Report/customerDueReport')  -->
        <form id="supplier_due_form"> 
            <div class="row mb-2">
                <div class="col-sm-12 col-md-4 col-lg-3 mb-3">
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
                <div class="col-sm-12 col-md-3 col-lg-2">
                    <div class="form-group">
                        <button type="submit" name="submit" value="submit"
                                class="btn bg-blue-btn w-100"><?php echo lang('submit'); ?></button>
                    </div>
                </div>
                <!-- <div class="col-sm-12 col-md-2 mb-2">
                    <a class="btn bg-blue-btn w-100" href="<?php echo base_url().'Report/getAllReports';?>">Back</a>
                </div> -->
            </div>
        </form>
        <?php
        // endif;
        ?>

        <div class="table-box section-one-table-box-new">
            <div class="table-responsive">
                <table id="supplier_due_datatable" class="table">
                    <thead>
                        <tr>
                            <th class="ir_w2_txt_center cursor_pointer"><?php echo lang('sn'); ?></th>
                            <th class="cursor_pointer"><?php echo lang('supplier'); ?></th>
                            <th class="cursor_pointer"><?php echo lang('payable_due'); ?></th>
                        </tr>
                    </thead>
                    <!--    <tbody>
                        <?php
                        $pGrandTotal = 0;
                        $i = 1;
                        if (isset($supplierDueReport)):
                            foreach ($supplierDueReport as $key => $value) {
                                if ($value->totalDue > 0):
                                    $pGrandTotal+=$value->totalDue;
                                    ?>
                        <tr>
                            <td class="ir_txt_center"><?php echo escape_output($i); ?></td>
                            <td><?php echo escape_output($value->name) ?></td>
                            <td><?php echo escape_output(getAmt($value->totalDue)) ?></td>
                        </tr>
                        <?php
                                endif;
                                $i++;
                            }
                        endif;
                        ?>
                    </tbody> -->
                </table>
                <br>
            </div>
            <!-- /.box-body -->
        </div>
    </div>
</section> 

<!-- section 14 -->

<section class="main-content-wrapper tabcontent" id="customer_due_report_id">
    <section class="content-header">
        <div>
        <h3 class="top-left-header d-inline-block"><?php echo lang('customer_due_report'); ?></h3>
        <!--    <?php
        if(isLMni() && isset($outlet_id)):
            ?>
            <small> <?php echo lang('outlet'); ?>: <?php echo escape_output(getOutletNameById($outlet_id))?></small>
            <?php
        endif;
        ?> -->
        <!-- <input type="hidden" class="datatable_name" data-title="<?php echo lang('customer_due_report'); ?>" data-id_name="datatable"> -->
    </div>
    </section>

    
    <div class="box-wrapper">
            <!-- general form elements -->
            <div class="table-box section-one-table-box-new">
            <!-- <?php
                    if(isLMni()):
                    ?> -->
                        <!-- form_open(base_url() . 'Report/customerDueReport') -->
                <form id="customer_due_form">
                    <div class="row">
                        <div class="col-sm-12 col-md-4 col-lg-3 mb-3">
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
                        <div class="col-sm-12 col-md-3 col-lg-2">
                            <div class="form-group">
                                <button type="submit" name="submit" value="submit"
                                        class="btn bg-blue-btn w-100"><?php echo lang('submit'); ?></button>
                            </div>
                        </div>
            <!--    <div class="col-sm-12 col-md-2 mb-2">
                            <a class="btn bg-blue-btn w-100" href="<?php echo base_url().'Report/getAllReports';?>">Back</a>
                        </div> -->
                    </div>
                </form>
                <!--    <?php
                    endif;
                    ?> -->
                <div class="table-responsive">
                    <table id="customer_due_datatable" class="table">
                        <thead>
                            <tr>
                                <th class="ir_w2_txt_center cursor_pointer"><?php echo lang('sn'); ?></th>
                                <th class="cursor_pointer"><?php echo lang('customer'); ?></th>
                                <th class="cursor_pointer"><?php echo lang('payable_due'); ?></th>
                            </tr>
                        </thead>
                      <!--   <tbody>
                            <?php
                            $pGrandTotal = 0;
                            $i = 1;
                            if (isset($customerDueReport)):
                                foreach ($customerDueReport as $key => $value) {
                                    if ($value->totalDue > 0):
                                        $pGrandTotal+=$value->totalDue;
                                        ?>
                            <tr>
                                <td class="ir_txt_center"><?php echo escape_output($i); ?></td>
                                <td><?php echo escape_output($value->name) ?></td>
                                <td><?php echo escape_output(getAmt($value->totalDue)) ?></td>
                            </tr>
                            <?php
                                    endif;
                                    $i++;
                                }
                            endif;
                            ?>
                        </tbody> -->
                    </table>
                    <br>
                </div>
                <!-- /.box-body -->
            </div>
    </div>
</section>

<!-- section 15 --> 
<section class="main-content-wrapper tabcontent" id="customer_ledger_id">

    <section class="content-header">
        <h3 class="text-left top-left-header"><?php echo lang('customer_report'); ?></h3>
        <!-- <input type="hidden" class="datatable_name" data-title="<?php echo lang('customer_report'); ?>" data-id_name="datatable"> -->
    </section>
    <!-- 
        <div class="my-2">
            <?php
                        if(isLMni() && isset($outlet_id)):
                            ?>
                            <h4> <?php echo lang('outlet'); ?>: <?php echo escape_output(getOutletNameById($outlet_id))?></h4>
                            <?php
                        endif;
                        ?>
                        <h4 class="ir_txtCenter_mt0"><?php
                        if (isset($customer_id) && $customer_id):
                            echo "<span>" . escape_output(getCustomerName($customer_id)) . "</span>";
                        endif;
                        ?></h4>
                        <h4><?= isset($start_date) && $start_date && isset($end_date) && $end_date ? lang('report_date') . date($this->session->userdata('date_format'), strtotime($start_date)) . " - " . date($this->session->userdata('date_format'), strtotime($end_date)) : '' ?><?= isset($start_date) && $start_date && !$end_date ? lang('report_date') . date($this->session->userdata('date_format'), strtotime($start_date)) : '' ?><?= isset($end_date) && $end_date && !$start_date ? lang('report_date') . date($this->session->userdata('date_format'), strtotime($end_date)) : '' ?>
                        </h4>
        </div>
    -->

    <div class="box-wrapper">
        <form id="customer_report_form">
            <div class="row">
                <div class="col-sm-12 col-md-4 col-lg-2 mb-3">
                    <!-- form_open base_url() . 'Report/customerReport', $arrayName = array('id' => 'customerReport'))  -->
                    <div class="form-group">
                        <input tabindex="1" type="text" id="" name="startDate" readonly class="form-control customDatepicker"
                            placeholder="<?php echo lang('start_date'); ?>" value="<?php echo set_value('startDate'); ?>">
                    </div>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-2 mb-3">

                    <div class="form-group">
                        <input tabindex="2" type="text" id="endMonth" name="endDate" readonly
                            class="form-control customDatepicker" placeholder="<?php echo lang('end_date'); ?>"
                            value="<?php echo set_value('endDate'); ?>">
                    </div>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-2 mb-3">
                    <div class="form-group">
                        <select tabindex="2" class="form-control select2 ir_w_100" id="customer_id" name="customer_id">
                            <option value=""><?php echo lang('customers'); ?></option>
                            <?php
                            $check_walk_in_customer = 1;
                            foreach ($customers as $value) {
                                if($value->id==1){
                                    $check_walk_in_customer++;
                                }
                                ?>
                            <option value="<?php echo escape_output($value->id) ?>" <?php echo set_select('customer_id', $value->id); ?>>
                                <?php echo escape_output($value->name) ?></option>
                            <?php }
                            if($check_walk_in_customer==1){?>
                                <option  value="1">Walk-in Customer</option>
                                <?php
                            }
                            ?>
                        </select>
                    </div>
                    <div class="alert error-msg customer_id_err_msg_contnr ir_p_5">
                        <p id="customer_id_err_msg"></p>
                    </div>
                </div>
                <?php
                if(isLMni()):
                    ?>
                    <div class="col-sm-12 col-md-4 col-lg-2 mb-3">
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
                <div class="col-sm-12 col-md-4 col-lg-2 mb-3">
                    <div class="form-group">
                        <button type="submit" name="submit" value="submit"
                            class="btn bg-blue-btn w-100"><?php echo lang('submit'); ?></button>
                    </div>
                </div>
        <!--    <div class="col-sm-12 col-md-2 mb-2">
                    <a class="btn bg-blue-btn w-100" href="<?php echo base_url().'Report/getAllReports';?>">Back</a>
                </div> -->
            </div>
        </form>

        <div class="table-box section-one-table-box-new">

            <div class="table-responsive">

                <!-- <h4 class="my-3 text-left"><?php echo lang('sale'); ?></h4> -->
                <table id="customer_report_datatable" class="datatable table">
                    <thead>
                        <tr>
                            <th class="ir_w2_txt_center cursor_pointer"><?php echo lang('sn'); ?></th>
                            <th class="cursor_pointer"><?php echo lang('date'); ?></th>
                            <th class="cursor_pointer"><?php echo lang('reference'); ?></th>
                            <th class="cursor_pointer"><?php echo lang('g_total'); ?></th>
                            <th class="cursor_pointer"><?php echo lang('paid'); ?></th>
                            <th class="cursor_pointer"><?php echo lang('due'); ?></th>
                        </tr>
                    </thead>
                        <!--        <tbody>
                        <?php
                        $pGrandTotal = 0;
                        $pPaid = 0;
                        $pDue = 0;
                        if (isset($customerReport)):
                            foreach ($customerReport as $key => $value) {
                                $pGrandTotal+=$value->total_payable;
                                $pPaid+=$value->paid_amount;
                                $pDue+=$value->due_amount;
                                $key++;
                                ?>
                        <tr>
                            <td class="ir_txt_center"><?php echo escape_output($key); ?></td>
                            <td><?= escape_output(date($this->session->userdata('date_format'), strtotime($value->sale_date))) ?>
                            </td>
                            <td><?php echo escape_output($value->sale_no) ?></td>
                            <td><?php echo escape_output(getAmt($value->total_payable)) ?></td>
                            <td><?php echo escape_output(getAmt($value->paid_amount)) ?></td>
                            <td><?php echo escape_output(getAmt($value->due_amount)) ?></td>
                        </tr>
                        <?php
                            }
                        endif;
                        ?>
                    </tbody> -->
                </table>
                
                <h4 class="my-3 text-left"><?php echo lang('due_receive'); ?></h4>
                <table id="customer_due_report_datatable" class="datatable table">
                    <thead>
                        <tr>
                            <th class="ir_w2_txt_center"><?php echo lang('sn'); ?></th>
                            <th><?php echo lang('date'); ?></th>
                            <th><?php echo lang('receive_amount'); ?></th>
                            <th class="ir_w_45"><?php echo lang('note'); ?></th>
                        </tr>
                    </thead>
                <!--        <tbody>
                        <?php
                        $totalAmount = 0;

                        if (isset($customerDueReceiveReport)):
                            foreach ($customerDueReceiveReport as $key => $value) {
                                $totalAmount+=$value->amount;
                                $key++;
                                ?>
                        <tr>
                            <td class="ir_txt_center"><?php echo escape_output($key); ?></td>
                            <td><?= escape_output(date($this->session->userdata('date_format'), strtotime($value->date))) ?></td>
                            <td><?php echo escape_output(getAmt($value->amount)) ?></td>
                            <td><?php echo escape_output($value->note) ?></td>
                        </tr>
                        <?php
                            }
                        endif;
                        ?>
                    </tbody> -->
                </table>
            </div>
            
        </div>
    </div>

</section>

<!-- section 16 -->

<section class="main-content-wrapper tabcontent" id="purchase_report_id">
    <section class="content-header">
        <h3 class="top-left-header text-left"><?php echo lang('purchase_report'); ?></h3>
        <!-- <input type="hidden" class="datatable_name" data-id_name="datatable"> -->
    </section>
    <!-- 
        <div class="my-2">
        <?php
        if(isLMni() && isset($outlet_id)):
            ?>
            <h4> <?php echo lang('outlet'); ?>: <?php echo escape_output(getOutletNameById($outlet_id))?></h4>
            <?php
        endif;
        ?>
        <h4><?= isset($start_date) && $start_date && isset($end_date) && $end_date ? lang('report_date') . date($this->session->userdata('date_format'), strtotime($start_date)) . " - " . date($this->session->userdata('date_format'), strtotime($end_date)) : '' ?><?= isset($start_date) && $start_date && !$end_date ? lang('report_date') . date($this->session->userdata('date_format'), strtotime($start_date)) : '' ?><?= isset($end_date) && $end_date && !$start_date ? lang('report_date') . date($this->session->userdata('date_format'), strtotime($end_date)) : '' ?>
        </h4>
    </div> -->

    <div class="box-wrapper">
        <form id="purchase_by_date_form">
            <div class="row mb-3">
                <div class="col-sm-12 col-md-4 col-lg-2 mb-3">
                    <!--   base_url() . 'Report/purchaseReportByDate')  -->
                    <div class="form-group">
                        <input tabindex="1" type="text" id="" name="startDate" readonly class="form-control customDatepicker"
                            placeholder="<?php echo lang('start_date'); ?>" value="<?php echo set_value('startDate'); ?>">
                    </div>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-2 mb-3">

                    <div class="form-group">
                        <input tabindex="2" type="text" id="endMonth" name="endDate" readonly
                            class="form-control customDatepicker" placeholder="<?php echo lang('end_date'); ?>"
                            value="<?php echo set_value('endDate'); ?>">
                    </div>
                </div>
                <?php
                if(isLMni()):
                    ?>
                    <div class="col-sm-12 col-md-4 col-lg-2 mb-3">
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
                <div class="col-sm-12 col-md-4 col-lg-2">
                    <div class="form-group">
                        <button type="submit" name="submit" value="submit"
                            class="btn bg-blue-btn w-100"><?php echo lang('submit'); ?></button>
                    </div>
                </div>
                <!-- <div class="col-sm-12 col-md-2 mb-2">
                    <a class="btn bg-blue-btn w-100" href="<?php echo base_url().'Report/getAllReports';?>">Back</a>
                </div> -->
            </div>
        </form>
        <div class="table-box section-one-table-box-new">
                    <!-- /.box-header -->
                    <div class="table-responsive">
                    
                        <table id="purchase_by_date_datatable" class="table table-striped">
                            <thead>
                                <tr>
                                    <th class="ir_w2_txt_center cursor_pointer"><?php echo lang('sn'); ?></th>
                                    <th class="ir_w_10 cursor_pointer"><?php echo lang('ref_no'); ?></th>
                                    <th class="ir_w_5 cursor_pointer"><?php echo lang('date'); ?></th>
                                    <th class="ir_w_10 cursor_pointer"><?php echo lang('supplier'); ?></th>
                                    <th class="ir_w_12 cursor_pointer"><?php echo lang('grand_total'); ?></th>
                                    <th class="ir_w_7 cursor_pointer"><?php echo lang('paid'); ?></th>
                                    <th class="ir_w_7 cursor_pointer"><?php echo lang('due'); ?></th>
                                    <th class="ir_w_32 cursor_pointer"><?php echo lang('ingredients'); ?></th>
                                    <th class="ir_w_15 cursor_pointer"><?php echo lang('purchased_by'); ?></th>
                                </tr>
                            </thead>
                            <!--    <tbody>
                                <?php
                                $sum_of_grand_total = 0;
                                $sum_of_paid = 0;
                                $sum_of_due = 0;

                                if (isset($purchaseReportByDate)):
                                    foreach ($purchaseReportByDate as $key => $value) { 
                                        $sum_of_grand_total += $value->grand_total;
                                        $sum_of_paid += $value->paid;
                                        $sum_of_due += $value->due;
                                        $key++;
                                        ?>
                                <tr>
                                    <td class="ir_txt_center"><?php echo escape_output($key); ?></td>
                                    <td><?php echo escape_output($value->reference_no) ?></td>
                                    <td><?= escape_output(date($this->session->userdata('date_format'), strtotime($value->date))) ?></td>
                                    <td><?php echo escape_output(getSupplierNameById($value->supplier_id)); ?></td>
                                    <td><?php echo escape_output(getAmt($value->grand_total)) ?></td>
                                    <td><?php echo escape_output(getAmt($value->paid)) ?></td>
                                    <td><?php echo escape_output(getAmt($value->due)) ?></td>
                                    <td><?php print_r(getPurchaseIngredients($value->id)) ?></td>
                                    <td><?php echo escape_output(userName($value->user_id)) ?></td>
                                </tr>
                                <?php
                                    }
                                endif;
                                ?>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td class="ir_txt_right"><?php echo lang('total'); ?> </td>
                                    <td><?php echo escape_output(getAmt($sum_of_grand_total)); ?></td>
                                    <td><?php echo escape_output(getAmt($sum_of_paid)); ?></td>
                                    <td><?php echo escape_output(getAmt($sum_of_due)); ?></td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                            </tbody> -->
                        </table>
                    </div>
                    <!-- /.box-body -->
        </div>
    </div>

    <div class="modal fade" id="filterModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                    <?php echo lang('purchase_report'); ?>
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i data-feather="x"></i></button>
            </div>
            <div class="modal-body">
               
            </div>
        </div>  
    </div>
</section>

<!-- section 17 -->

<section class="main-content-wrapper tabcontent" id="expense_report_id">
 
    <section class="content-header">
        <h3 class="top-left-header text-left"><?php echo lang('expense_report'); ?></h3>
        <!-- <input type="hidden" class="datatable_name" data-title="<?php echo lang('expense_report'); ?>" data-id_name="datatable"> -->
    </section>

    <!-- 
        <div class="my-2">
            <?php
            if(isLMni() && isset($outlet_id)):
                ?>
                <h4> <?php echo lang('outlet'); ?>: <?php echo escape_output(getOutletNameById($outlet_id))?></h4>
                <?php
            endif;
            ?>
            <h4><?= isset($start_date) && $start_date && isset($end_date) && $end_date ? lang('report_date') . date($this->session->userdata('date_format'), strtotime($start_date)) . " - " . date($this->session->userdata('date_format'), strtotime($end_date)) : '' ?><?= isset($start_date) && $start_date && !$end_date ? lang('report_date') . date($this->session->userdata('date_format'), strtotime($start_date)) : '' ?><?= isset($end_date) && $end_date && !$start_date ? lang('report_date') . date($this->session->userdata('date_format'), strtotime($end_date)) : '' ?>
            </h4>
            <h4 class="ir_txtCenter_mt0"><?php
            if (isset($expense_item_id) && $expense_item_id):
                echo lang('expense_item').": <span class='ir_txt_underline'>" . getExpenseItemName($expense_item_id) . "</span>";
            else:
                echo lang('expense_item').": ".lang('all');
            endif;
            ?></h4> 
            <input type="hidden" class="datatable_name" data-title="<?php echo lang('expense_report'); ?>" data-id_name="datatable"> 
        </div>
    -->

    <div class="box-wrapper">
        <form id="expense_report_form">
            <div class="row">
                <div class="col-sm-12 col-md-4 col-lg-2 mb-3">
                    <!-- form_open(base_url() . 'Report/expenseReport') -->
                    <div class="form-group">
                        <input tabindex="1" type="text" id="" name="startDate" readonly class="form-control customDatepicker"
                            placeholder="<?php echo lang('start_date'); ?>" value="<?php echo set_value('startDate'); ?>">
                    </div>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-2 mb-3">
                    <div class="form-group">
                        <input tabindex="2" type="text" id="endMonth" name="endDate" readonly
                            class="form-control customDatepicker" placeholder="<?php echo lang('end_date'); ?>"
                            value="<?php echo set_value('endDate'); ?>">
                    </div>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-2 mb-3">
                    <div class="form-group">
                        <select tabindex="2" class="form-control select2 ir_w_100" id="expense_item_id" name="expense_item_id">
                            <option value=""><?php echo lang('expense_item'); ?></option>
                            <?php
                            foreach ($expense_items as $value) {
                                ?>
                            <option value="<?php echo escape_output($value->id) ?>" <?php echo set_select('expense_item_id', $value->id); ?>>
                                <?php echo escape_output($value->name) ?></option>
                            <?php } ?>
                        </select>
                    </div>
                </div>
                <?php
                if(isLMni()):
                    ?>
                    <div class="col-sm-12 col-md-4 col-lg-2 mb-3">
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
                <div class="col-sm-12 col-md-3 col-lg-2">
                    <div class="form-group">
                        <button type="submit" name="submit" value="submit"
                            class="btn bg-blue-btn w-100"><?php echo lang('submit'); ?></button>
                    </div>
                </div>
            </div>
        </form>
            <div class="table-box section-one-table-box-new">
                <!-- /.box-header -->
                <div class="box-body table-responsive">
                    <table id="expense_report_datatable" class="table table-striped">
                        <thead>
                            <tr>
                                <th class="ir_w_1 cursor_pointer"> <?php echo lang('sn'); ?></th>
                                <th class="cursor_pointer"><?php echo lang('date'); ?></th>
                                <th class="cursor_pointer"><?php echo lang('amount'); ?></th>
                                <th class="cursor_pointer"><?php echo lang('category'); ?></th>
                                <th class="cursor_pointer"><?php echo lang('responsible_person'); ?></th>
                            </tr>
                        </thead>
                        <!--    <tbody>
                            <?php
                            $grandTotal = 0;
                            $countTotal = 0;
                            if (isset($expenseReport)):
                                foreach ($expenseReport as $key => $value) {
                                    $grandTotal+=$value->amount;
                                    $key++;
                                    ?>
                            <tr>
                                <td class="ir_txt_center"><?php echo escape_output($key); ?></td>
                                <td><?= escape_output(date($this->session->userdata('date_format'), strtotime($value->date))) ?></td>
                                <td><?php echo escape_output(getAmt($value->amount)) ?></td>
                                <td><?php echo escape_output($value->categoryName) ?></td>
                                <td><?php echo escape_output($value->EmployeedName) ?></td>
                            </tr>
                            <?php
                                }
                            endif;
                            ?>
                        </tbody>    -->
                    </table>
                </div>
                <!-- /.box-body -->
            </div>
    </div>
        

</section>

<!-- section 18 -->

<section class="main-content-wrapper tabcontent" id="waste_report_id">
   
    <section class="content-header">
        <h3 class="text-left top-left-header"><?php echo lang('waste_report'); ?></h3>
        <!-- <input type="hidden" class="datatable_name" data-title="<?php echo lang('waste_report'); ?>" data-id_name="datatable"> -->
    </section>
    <!-- 
        <div class="my-2">

                <?php
                            if(isLMni() && isset($outlet_id)):
                                ?>
                                <h4> <?php echo lang('outlet'); ?>: <?php echo escape_output(getOutletNameById($outlet_id))?></h4>
                                <?php
                            endif;
                            ?>
                            <h4><?= isset($start_date) && $start_date && isset($end_date) && $end_date ? lang('report_date') . date($this->session->userdata('date_format'), strtotime($start_date)) . " - " . date($this->session->userdata('date_format'), strtotime($end_date)) : '' ?><?= isset($start_date) && $start_date && !$end_date ? lang('report_date') . date($this->session->userdata('date_format'), strtotime($start_date)) : '' ?><?= isset($end_date) && $end_date && !$start_date ? lang('report_date') . date($this->session->userdata('date_format'), strtotime($end_date)) : '' ?>
                            </h4>
                            <h4 class="ir_txtCenter_mt0"><?php
                            if (isset($user_id) && $user_id):
                                echo lang('user').": <span class='ir_txt_underline'>" . userName($user_id) . "</span>";
                            else:
                                echo lang('user').": ".lang('all');
                            endif;
                            ?></h4>
                            
        </div> -->

    <div class="box-wrapper">

        <form id="waste_report_form">
            <div class="row mb-3">
                <div class="col-sm-12 col-md-4 col-lg-2 mb-3">
                    <!-- form_open base_url() . 'Report/wasteReport') -->
                    <div class="form-group">
                        <input tabindex="1" type="text" id="" name="startDate" readonly class="form-control customDatepicker"
                            placeholder="<?php echo lang('start_date'); ?>" value="<?php echo set_value('startDate'); ?>">
                    </div>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-2 mb-3">

                    <div class="form-group">
                        <input tabindex="2" type="text" id="endMonth" name="endDate" readonly
                            class="form-control customDatepicker" placeholder="<?php echo lang('end_date'); ?>"
                            value="<?php echo set_value('endDate'); ?>">
                    </div>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-2 mb-3">

                    <div class="form-group">
                        <select tabindex="2" class="form-control select2 ir_w_100" id="user_id" name="user_id">
                            <option value=""><?php echo lang('user'); ?></option>
                            <option value="<?= escape_output($this->session->userdata['user_id']); ?>">
                                <?= escape_output($this->session->userdata['full_name']); ?></option>
                            <?php
                            foreach ($users as $value) {
                                ?>
                            <option value="<?php echo escape_output($value->id) ?>" <?php echo set_select('user_id', $value->id); ?>>
                                <?php echo escape_output($value->full_name) ?></option>
                            <?php } ?>
                        </select>
                    </div>
                </div>
                <?php
                if(isLMni()):
                    ?>
                    <div class="col-sm-12 col-md-4 col-lg-2 mb-3">
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
                <div class="col-sm-12 col-md-3 col-lg-2">
                    <div class="form-group">
                        <button type="submit" name="submit" value="submit"
                            class="btn bg-blue-btn w-100"><?php echo lang('submit'); ?></button>
                    </div>
                </div>
                <!-- <div class="col-sm-12 col-md-2 mb-2">
                    <a class="btn bg-blue-btn w-100" href="<?php echo base_url().'Report/getAllReports';?>">Back</a>
                </div> -->
            </div>
        </form>
        <div class="table-box section-one-table-box-new">
            <!-- /.box-header -->
            <div class="table-responsive">
               
                <table id="waste_report_datatable" class="table">
                    <thead>
                        <tr>
                            <th class="ir_w_1 cursor_pointer"> <?php echo lang('sn'); ?></th>
                            <th class="ir_w_11 cursor_pointer"><?php echo lang('ref_no'); ?></th>
                            <th class="ir_w_8 cursor_pointer"><?php echo lang('date'); ?></th>
                            <th class="ir_w_9 cursor_pointer"><?php echo lang('total_loss'); ?></th>
                            <th class="ir_w_13 cursor_pointer"><?php echo lang('ingredient_count'); ?></th>
                            <th class="ir_w_15 cursor_pointer"><?php echo lang('responsible_person'); ?></th>
                        </tr>
                    </thead>
                <!--    <tbody>
                        <?php
                        $grandTotal = 0;
                        $countTotal = 0;
                        if (isset($wasteReport)):
                            foreach ($wasteReport as $key => $value) {
                                $grandTotal+=$value->total_loss;
                                $key++;
                                $countTotal+=ingredientCount($value->id);
                                ?>
                        <tr>
                            <td class="ir_txt_center"><?php echo escape_output($key); ?></td>
                            <td><?php echo escape_output($value->reference_no) ?></td>
                            <td><?= escape_output(date($this->session->userdata('date_format'), strtotime($value->date))) ?></td>
                            <td><?php echo escape_output(getAmt($value->total_loss)) ?></td>
                            <td><?php echo escape_output(ingredientCount($value->id)); ?></td>
                            <td><?php echo escape_output($value->EmployeedName) ?></td>
                        </tr>
                        <?php
                            }
                        endif;
                        ?>
                    </tbody> -->
                    
                </table>
            </div>
            <!-- /.box-body -->
        </div>
    </div>
</section>
<!-- section 19 -->

<section class="main-content-wrapper tabcontent" id="tax_report_id">

    <section class="content-header">
        <h3 class="top-left-header text-left"><?php echo lang('vat_report'); ?></h3>
        <input type="hidden" class="datatable_name" data-title="<?php echo lang('vat_report'); ?>" data-id_name="datatable">
    </section>

        <!--     <div class="my-2">

            <?php
                    if(isLMni() && isset($outlet_id)):
                        ?>
                        <h4> <?php echo lang('outlet'); ?>: <?php echo escape_output(getOutletNameById($outlet_id))?></h4>
                        <?php
                    endif;
                    ?>
                    <h4><?= isset($start_date) && $start_date && isset($end_date) && $end_date ? lang('report_date') . date($this->session->userdata('date_format'), strtotime($start_date)) . " - " . date($this->session->userdata('date_format'), strtotime($end_date)) : '' ?><?= isset($start_date) && $start_date && !$end_date ? lang('report_date') . date($this->session->userdata('date_format'), strtotime($start_date)) : '' ?><?= isset($end_date) && $end_date && !$start_date ? lang('report_date') . date($this->session->userdata('date_format'), strtotime($end_date)) : '' ?>
                    </h4>
    </div> -->

    <div class="box-wrapper">
        <form id="tax_report_form">
            <div class="row">
                <div class="col-sm-12 col-md-4 col-lg-2 mb-3">
                     <!-- form_open(base_url() . 'Report/vatReport')   -->
                    <div class="form-group">
                        <input tabindex="1" type="text" id="" name="startDate" readonly class="form-control customDatepicker"
                            placeholder="<?php echo lang('start_date'); ?>" value="<?php echo set_value('startDate'); ?>">
                    </div>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-2 mb-3">

                    <div class="form-group">
                        <input tabindex="2" type="text" id="endMonth" name="endDate" readonly
                            class="form-control customDatepicker" placeholder="<?php echo lang('end_date'); ?>"
                            value="<?php echo set_value('endDate'); ?>">
                    </div>
                </div>
                <?php
                if(isLMni()):
                    ?>
                    <div class="col-sm-12 col-md-4 col-lg-2 mb-3">
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
                <div class="col-sm-12 col-md-3 col-lg-2">
                    <button type="submit" name="submit" value="submit" class="btn bg-blue-btn w-100"><?php echo lang('submit'); ?></button>
                </div>
        <!--    <div class="col-sm-12 col-md-2 mb-2">
                    <a class="btn bg-blue-btn w-100" href="<?php echo base_url().'Report/getAllReports';?>">Back</a>
                </div> -->
            </div>
        </form>
        <div class="table-box section-one-table-box-new">
            <!-- /.box-header -->
            <div class="table-responsive">
                <table id="tax_report_datatable" class="table">
                    <thead>
                        <tr>
                            <th class="ir_w2_txt_center cursor_pointer"><?php echo lang('sn'); ?></th>
                            <th class="ir_w_31 cursor_pointer"><?php echo lang('date'); ?></th>
                            <th class="ir_w_35 cursor_pointer"><?php echo lang('total_sale'); ?></th>
                            <th class="ir_w_31 cursor_pointer"><?php echo lang('vat'); ?></th>
                        </tr>
                    </thead>
                <!--    <tbody>
                        <?php
                        $grandTotal = 0;
                        $vatTotal = 0;
                        if (isset($vatReport)):
                            foreach ($vatReport as $key => $value) {
                                $grandTotal+=$value->total_payable;
                                $vatTotal+=$value->total_vat;
                                $key++;
                                ?>
                        <tr>
                            <td class="ir_txt_center"><?php echo escape_output($key--); ?></td>
                            <td><?= escape_output(date($this->session->userdata('date_format'), strtotime($value->sale_date))) ?>
                            </td>
                            <td><?php echo escape_output(getAmt($value->total_payable)) ?></td>
                            <td><?php echo escape_output(getAmt($value->total_vat)) ?></td>
                        </tr>
                        <?php
                            }
                        endif;
                        ?>
                    </tbody> -->
                   
                </table>
            </div>
            <!-- /.box-body -->
        </div>
    </div>

        
</section>

<!-- section 20 --> 
<section class="main-content-wrapper tabcontent" id="food_menu_sale_by_category_id">
    <div class="row">
        <div class="col-md-12">
            <!-- general form elements -->
            <div class="table-box">
                <!-- /.box-header -->
                <div class="box-body table-responsive">
                    <h3 class="top-left-header text-left"><?php echo lang('foodMenuSaleByCategories'); ?></h3>
                    <section class="content-header">
                        <!-- <input type="hidden" class="datatable_name" data-title="<?php echo lang('food_sales_report'); ?>" data-id_name="datatable"> -->
                    </section>

                    <!--  <div class="my-2">
                        <?php
                        if(isLMni() && isset($outlet_id)):
                            ?>
                            <h4> <?php echo lang('outlet'); ?>: <?php echo escape_output(getOutletNameById($outlet_id))?></h4>
                            <?php
                        endif;
                        ?>
                        <h4><?= isset($start_date) && $start_date && isset($end_date) && $end_date ? lang('date').": " . date($this->session->userdata('date_format'), strtotime($start_date)) . " - " . date($this->session->userdata('date_format'), strtotime($end_date)) : '' ?><?= isset($start_date) && $start_date && !$end_date ? lang('date').": " . date($this->session->userdata('date_format'), strtotime($start_date)) : '' ?><?= isset($end_date) && $end_date && !$start_date ? lang('date').": " . date($this->session->userdata('date_format'), strtotime($end_date)) : '' ?>
                        </h4>
                    </div> -->

        <div class="box-wrapper">
            <form id="food_menu_sale_cat_form">
                <div class="row mb-3">
                    <div class="col-sm-12 col-md-4 col-lg-2 mb-3">
                        <!-- form_open 'Report/foodMenuSaleByCategories' -->
                        <div class="form-group">
                            <input tabindex="1" type="text" id="" name="startDate" readonly class="form-control customDatepicker"
                                placeholder="<?php echo lang('start_date'); ?>" value="<?php echo set_value('startDate'); ?>">
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-2 mb-3">

                        <div class="form-group">
                            <input tabindex="2" type="text" id="endMonth" name="endDate" readonly
                                class="form-control customDatepicker" placeholder="<?php echo lang('end_date'); ?>"
                                value="<?php echo set_value('endDate'); ?>">
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-2 mb-3">
                        <select name="cat_id" class="form-control select2">
                            <option value=""><?php echo lang('category'); ?></option>
                            <?php foreach ($foodMenuCategories as $ctry) { ?>
                                <option value="<?php echo escape_output($ctry->id) ?>" <?php echo set_select('cat_id', $ctry->id); ?>>
                                    <?php echo escape_output($ctry->category_name) ?></option>
                            <?php } ?>
                        </select>
                    </div>
                    <?php
                    if(isLMni()):
                        ?>
                        <div class="col-sm-12 col-md-4 col-lg-2 mb-3">
                            <div class="form-group">
                                <select tabindex="2" class="form-control select2" id="outlet_id" name="outlet_id">
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
                    <div class="col-sm-12 col-md-4 col-lg-2 mb-3">
                        <div class="form-group">
                            <button type="submit" name="submit" value="submit"
                                    class="btn bg-blue-btn w-100"><?php echo lang('submit'); ?></button>
                        </div>
                    </div>
        <!--    <div class="col-sm-12 col-md-2 mb-2">
                        <a class="btn bg-blue-btn w-100" href="<?php echo base_url().'Report/getAllReports';?>">Back</a>
                    </div> -->
                </div>
            </form>
            <div class="table-box section-one-table-box-new">
                <!-- /.box-header -->
                <div class="table-responsive">

                    <table id="food_menu_sale_cat_datatable" class="table">
                        <thead>
                        <tr>
                            <th class="ir_w2_txt_center cursor_pointer"><?php echo lang('sn'); ?></th>
                            <th class="cursor_pointer"><?php echo lang('code'); ?></th>
                            <th class="cursor_pointer"><?php echo lang('food_menu'); ?>(<?php echo lang('code'); ?>)</th>
                            <th class="cursor_pointer"><?php echo lang('category_name'); ?></th>
                            <th class="cursor_pointer"><?php echo lang('quantity'); ?></th>
                            <th class="cursor_pointer"><?php echo lang('SalesValue'); ?></th>
                            <th class="cursor_pointer"><?php echo lang('AveSellingPrice'); ?></th>
                        </tr>
                        </thead>
                    <!--    <tbody>
                        <?php
                        $total_amount = 0;
                        $total_qty = 0;
                        $total_average = 0;
                        if (isset($foodMenuSales)):
                            foreach ($foodMenuSales as $key => $value) {
                                $total_amount+=($value->menu_unit_price*$value->totalQty);
                                $total_qty+=($value->totalQty);
                                $total_average+=(($value->menu_unit_price*$value->totalQty)/$value->totalQty);
                                $key++;
                                ?>
                                <tr>
                                    <td class="ir_txt_center"><?php echo escape_output($key); ?></td>
                                    <td><?php echo escape_output($value->code) ?></td>
                                    <td><?php echo escape_output($value->menu_name) ?></td>
                                    <td><?php echo escape_output($value->category_name) ?></td>
                                    <td><?php echo escape_output($value->totalQty) ?></td>
                                    <td><?php echo escape_output(getAmtP($value->menu_unit_price * $value->totalQty)) ?></td>
                                    <td><?php echo escape_output(getAmtP(($value->menu_unit_price*$value->totalQty)/$value->totalQty)) ?></td>
                                </tr>
                                <?php
                            }
                        endif;
                        ?>
                        </tbody> -->
                       <tfooter id="food_menu_sale_cat_datatable_footer"> 
                       </tfooter>
                        <!--    <tr>
                            <th class="ir_w2_txt_center"></th>
                            <th></th>
                            <th></th>
                            <th><?php echo lang('total'); ?>(Amount X Qty)</th>
                            <th><?php echo escape_output($total_qty) ?></th>
                            <th><?php echo escape_output(getAmtP($total_amount)) ?></th>
                            <th><?php echo escape_output(getAmtP($total_average)) ?></th>
                        </tr> -->
                    </table>
                </div>
                <!-- /.box-body -->
            </div>
        </div>
</section>

<!-- section 21 -->

<section class="main-content-wrapper tabcontent" id="food_transfer_report_id">
    <div class="row">
        <div class="col-md-12">
            <!-- general form elements -->
            <div class="table-box">
                <!-- /.box-header -->
                <div class="box-body table-responsive">
                    <h3 class="top-left-header text-left"><?php echo lang('foodTransferReport'); ?></h3>
                    <section class="content-header">
                        <input type="hidden" class="datatable_name" data-title="<?php echo lang('foodTransferReport'); ?>" data-id_name="datatable">

                    </section>
                    <!-- 
                        <div class="my-2">
                            <?php
                            if(isLMni() && isset($outlet_id)):
                                ?>
                                <h4> <?php echo lang('outlet'); ?>: <?php echo escape_output(getOutletNameById($outlet_id))?></h4>
                                <?php
                            endif;
                            ?>
                            <h4><?= isset($start_date) && $start_date && isset($end_date) && $end_date ? lang('date').": " . date($this->session->userdata('date_format'), strtotime($start_date)) . " - " . date($this->session->userdata('date_format'), strtotime($end_date)) : '' ?><?= isset($start_date) && $start_date && !$end_date ? lang('date').": " . date($this->session->userdata('date_format'), strtotime($start_date)) : '' ?><?= isset($end_date) && $end_date && !$start_date ? lang('date').": " . date($this->session->userdata('date_format'), strtotime($end_date)) : '' ?>
                            </h4>
                        </div>
                    -->
                    <div class="box-wrapper">

                        <form id="food_transfer_form">
                            <div class="row mb-3">
                                <div class="col-sm-12 col-md-4 col-lg-2 mb-3">
                                    <!--  echo form_open 'Report/foodTransferReport'  -->
                                    <div class="form-group">
                                        <input tabindex="1" type="text" id="" name="startDate" readonly class="form-control customDatepicker"
                                               placeholder="<?php echo lang('start_date'); ?>" value="<?php echo set_value('startDate'); ?>">
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-4 col-lg-2 mb-3">

                                    <div class="form-group">
                                        <input tabindex="2" type="text" id="endMonth" name="endDate" readonly
                                               class="form-control customDatepicker" placeholder="<?php echo lang('end_date'); ?>"
                                               value="<?php echo set_value('endDate'); ?>">
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-4 col-lg-2 mb-3">
                                    <div class="form-group">
                                        <select tabindex="2" class="form-control select2" id="from_outlet_id" name="from_outlet_id">
                                            <option value=""><?php echo lang('SendingOutlet')?></option>
                                            <?php
                                            $outlets = getAllOutlestByAssign();
                                            foreach ($outlets as $value):
                                                ?>
                                                <option <?= set_select('from_outlet_id',$value->id)?>  value="<?php echo escape_output($value->id) ?>"><?php echo escape_output($value->outlet_name) ?></option>
                                                <?php
                                            endforeach;
                                            ?>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-4 col-lg-2 mb-3">
                                    <div class="form-group">
                                        <select tabindex="2" class="form-control select2" id="to_outlet_id" name="to_outlet_id">
                                            <option value=""><?php echo lang('ReceivingOutlet')?></option>
                                            <?php
                                            $outlets = getAllOutlestByAssign();
                                            foreach ($outlets as $value):
                                                ?>
                                                <option <?= set_select('to_outlet_id',$value->id)?>  value="<?php echo escape_output($value->id) ?>"><?php echo escape_output($value->outlet_name) ?></option>
                                                <?php
                                            endforeach;
                                            ?>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-4 col-lg-2 mb-3">
                                    <div class="form-group">
                                        <button type="submit" name="submit" value="submit"
                                                class="btn bg-blue-btn w-100"><?php echo lang('submit'); ?></button>
                                    </div>
                                </div>
                <!--    <div class="col-sm-12 col-md-2 mb-2">
                                    <a class="btn bg-blue-btn w-100" href="<?php echo base_url().'Report/getAllReports';?>">Back</a>
                                </div> -->
                            </div>
                        </form>
                        <div class="table-box section-one-table-box-new">
                            <!-- /.box-header -->
                            <div class="table-responsive">


                                <table id="food_transfer_datatable" class="table">
                                    <thead>
                                    <tr>
                                        <th class="ir_w2_txt_center cursor_pointer"><?php echo lang('sn'); ?></th>
                                        <th class="cursor_pointer"><?php echo lang('received_date'); ?></th>
                                        <th class="cursor_pointer"><?php echo lang('SendingOutlet'); ?></th>
                                        <th class="cursor_pointer"><?php echo lang('ReceivingOutlet'); ?></th>
                                        <th class="cursor_pointer"><?php echo lang('Foods'); ?></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <?php
                                    if (isset($foodTransferReport)):
                                        foreach ($foodTransferReport as $key => $value) {
                                            $key++;
                                            ?>
                                            <tr>
                                                <td class="ir_txt_center"><?php echo escape_output($key); ?></td>
                                                <td><?= escape_output(date($this->session->userdata('date_format'), strtotime($value->received_date))) ?></td>
                                                <td><?php echo escape_output(getOutletNameById($value->from_outlet_id)) ?></td>
                                                <td><?php echo escape_output(getOutletNameById($value->to_outlet_id)) ?></td>
                                                <!--this variable contains html content-->
                                                <td><?php echo ($value->foods) ?></td>
                                            </tr>
                                            <?php
                                        }
                                    endif;
                                    ?>
                                    </tbody>
                                </table>
                            </div>
                            <!-- /.box-body -->
                        </div>
                    </div>

</section>



<!-- section 21 --> 

<section class="main-content-wrapper tabcontent" id="sale_report_id">

    <section class="content-header">
        <div class="row">
            <div class="col-sm-12 col-md-6">
                <h2 class="top-left-header text-align-left"><?php echo lang('sale'); ?></h2>
            </div>
            <div class="col-md-6">
                <a  class="btn_list m-right btn bg-blue-btn" href="<?php echo base_url() ?>Sale/POS">
                 <i data-feather="plus"></i> <?php echo lang('add_sale'); ?></a>
            </div>
        </div>
    </section>
    <div class="box-wrapper"> 
        <!-- general form elements -->
        <div class="table-box section-one-table-box-new">
            <!-- /.box-header -->
            <div class="table-responsive">
                <table id="sale_report_datatable" class="table">
                    <thead>
                    <tr> 
                        <th class="ir_w2_txt_center cursor_pointer"><?php echo lang('sn'); ?></th>
                        <th class="ir_w_8 cursor_pointer"><?php echo lang('ref_no'); ?></th>
                        <th class="ir_w_8 cursor_pointer"><?php echo lang('order_type'); ?></th>
                        <th class="ir_w_12 cursor_pointer"><?php echo lang('date'); ?>(<?php echo lang('time'); ?>)</th>
                        <th class="ir_w_15 cursor_pointer"><?php echo lang('customer'); ?></th>
                        <th class="ir_w_17 cursor_pointer"><?php echo lang('total_payable'); ?></th>
                        <th class="ir_w_4 cursor_pointer"><?php echo lang('payment_method'); ?></th>
                        <th class="ir_w_10 cursor_pointer"><?php echo lang('added_by'); ?></th>
                        <th class="ir_w5_txt_center cursor_pointer not-export-col"><?php echo lang('actions'); ?></th>
                    </tr> 
                    </thead> 
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

<!-- <script src="<?php echo base_url(); ?>assets/datatable_custom/dataTables.buttons.min.js"></script> -->
<!-- <script src="<?php echo base_url(); ?>assets/datatable_custom/buttons.flash.min.js"></script> -->
<!-- <script src="<?php echo base_url(); ?>frequent_changing/js/dataTable/dataTables.bootstrap4.min.js"></script> -->
<!-- <script src="<?php echo base_url(); ?>assets/datatable_custom/jszip.min.js"></script> -->
<!-- <script src="<?php echo base_url(); ?>assets/datatable_custom/pdfmake.min.js"></script> -->
<!-- <script src="<?php echo base_url(); ?>assets/datatable_custom/vfs_fonts.js"></script> -->
<!-- <script src="<?php echo base_url(); ?>assets/datatable_custom/buttons.html5.min.js"></script> -->
<!-- <script src="<?php echo base_url(); ?>assets/datatable_custom/buttons.print.min.js"></script> -->
<script src="<?php echo base_url(); ?>frequent_changing/newDesign/js/forTable.js"></script>


<!-- <script src="<?php echo base_url(); ?>frequent_changing/js/inventory.js"></script>
<script src="<?php echo base_url(); ?>frequent_changing/js/inventory_alert.js"></script>
<script src="<?php echo base_url(); ?>frequent_changing/js/supplier_report.js"></script> -->
<!-- <script src="<?php echo base_url(); ?>frequent_changing/js/custom_report1.js"></script> --> <!-- for customer_ledger_id section -->

<script type="text/javascript" src="<?php echo base_url(); ?>frequent_changing/js/sale.js"></script>
<script src="<?php echo base_url(); ?>frequent_changing/js/custom_report_new.js"></script>
