<!-- bootstrap datepicker -->

<script type="text/javascript" src="<?php echo base_url(); ?>assets/POS/js/jquery.slimscroll.min.js"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>frequent_changing/js/jquery.spincrement.js"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>frequent_changing/js/jquery.spincrement.min.js"></script>

<link rel="stylesheet" href="<?php echo base_url(); ?>assets/dist/css/custom/dashboard.css">
<link rel="stylesheet" href="<?php echo base_url(); ?>frequent_changing/css/dashboard_button.css">
<!-- Content Header (Page header) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.1/chart.min.js" integrity="sha512-QSkVNOCYLtj73J4hbmVoOV6KVZuMluZlioC+trLpewV8qMjsWqlIQvkn1KGX2StWvPMdWGBqim1xlC8krl1EKQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<input type="hidden" id="purchase" value="<?php echo lang('purchase'); ?>">
<input type="hidden" id="sale" value="<?php echo lang('sale'); ?>">
<input type="hidden" id="waste" value="<?php echo lang('waste'); ?>">
<input type="hidden" id="expense" value="<?php echo lang('expense'); ?>">
<input type="hidden" id="cust_rcv" value="<?php echo lang('cust_rcv'); ?>">
<input type="hidden" id="supp_pay" value="<?php echo lang('supp_pay'); ?>">

<input type="hidden" id="purchase_value" value="<?php echo escape_output(getAmtP($purchase_sum->purchase_sum)) ?>">
<input type="hidden" id="sale_value" value="<?php echo escape_output(getAmtP($sale_sum->sale_sum)) ?>">
<input type="hidden" id="waste_value" value="<?php echo escape_output(getAmtP($waste_sum->waste_sum)) ?>">
<input type="hidden" id="expense_value" value="<?php echo escape_output(getAmtP($expense_sum->expense_sum)) ?>">
<input type="hidden" id="cust_rcv_value" value="<?php echo escape_output(getAmtP($customer_due_receive_sum->customer_due_receive_sum)) ?>">
<input type="hidden" id="supp_pay_value" value="<?php echo escape_output(getAmtP($supplier_due_payment_sum->supplier_due_payment_sum)) ?>">
<input type="hidden" id="dinein_count" value="<?php echo escape_output($dinein_count->dinein_count) ?>">
<input type="hidden" id="take_away_count" value="<?php echo escape_output($take_away_count->take_away_count) ?>">
<input type="hidden" id="delivery_count" value="<?php echo escape_output($delivery_count->delivery_count) ?>">
<style>
    .canvasjs-chart-credit{
        display: none !important;
    }

</style>
<!-- Main content -->
<section class="main-content-wrapper">
    
    <section class="content-header dashboard_content_header my-2 <?=returnSessionLng()=="arabic"?'right_aligned"':''?>">
        <h3 class="top-left-header">
            <span><?php echo lang('dashboard'); ?></span>
            <small><?php echo lang('business_intelligence'); ?></small>
        </h3>
        <form class="ms-2" method="post" id="" action="<?php echo base_url()?>Dashboard/dashboard">
        <table>
            <tr>
                <td>
                    <?php
                    if(isLMni()):
                        ?>
                        <select class="select_outlet_dashboard select2 form-control" id="outlet_id_dashboard" name="outlet_id_dashboard">
                            <?php
                            foreach ($outlets as $value):
                                ?>
                                <option <?= set_select('outlet_id',$value->id)?> value="<?php echo escape_output($value->id) ?>"><?php echo escape_output($value->outlet_name) ?></option>
                                <?php
                            endforeach;
                            ?>
                        </select>
                        <?php
                    endif;
                    ?>
                </td>
                <td>
                    <div class="form-group">
                        <input tabindex="3" readonly type="text" name="start_date_dashboard" id="start_date_dashboard" class="form-control customDatepicker" placeholder="<?php echo lang('start_date'); ?>" value="<?=isset($start_date_dashboard) && $start_date_dashboard?$start_date_dashboard:date('Y-m-d',strtotime('today -30days'))?>">
                    </div>
                </td>
                <td>
                    <div class="form-group">
                        <input tabindex="3" readonly type="text" name="end_date_dashboard" id="end_date_dashboard" class="form-control customDatepicker" placeholder="<?php echo lang('start_date'); ?>" value="<?=isset($end_date_dashboard) && $end_date_dashboard?$end_date_dashboard:date('Y-m-d',strtotime('today'))?>">
                    </div>
                </td>
                <td>
                    <button type="submit" name="submit" value="submit"
                            class="btn bg-blue-btn w-100"><?php echo lang('apply'); ?></button>
                </td>
            </tr>
        </table>
        </form>
    </section>

    <div class="row">
        <div class="col-md-12 grid_view">
            <!-- dblue -->
            <a href="#" class="get_action_prevent btn btn-dblue1 btn-lg active" role="button"><span class="fa fa-calendar"></span> <br /><span><?php echo lang('today')?>,</span> <br /><?php echo date("d, F")?></a>
            <a href="#" class="get_action_prevent btn btn-dblue1 btn-lg" role="button"><span class="fa fa-money"></span> <br /><span class="spincrement set_today_total_1">0</span> <br /><?php echo lang('Revenue')?></a>
            <a href="#" class="get_action_prevent btn btn-dblue1 btn-lg" role="button"><span class="fa fa-money"></span> <br /><span class="spincrement set_today_total_2">0</span> <br /><?php echo lang('Profit')?></a>
            <a href="#" class="get_action_prevent btn btn-dblue1 btn-lg" role="button"><span class="fa fa-list"></span> <br /><span class="spincrement set_today_total_3">0</span> <br /><?php echo lang('transactions')?></a>
            <a href="#" class="get_action_prevent btn btn-dblue1 btn-lg" role="button"><span class="fa fa-users"></span> <br /><span class="spincrement set_today_total_4">0</span> <br /><?php echo lang('Customers')?></a>
            <a href="#" class="get_action_prevent btn btn-dblue1 btn-lg" role="button"><span class="fa fa-list"></span> <br /><span class="spincrement set_today_total_5">0</span> <br /><?php echo lang('average_receipt')?></a>
        </div>
        <div class="clearfix">&nbsp;<br>&nbsp;</div>
        <div class="col-md-12">
            <table>
                <tr>
                    <td><h3 style="padding-right: 9px;" class="sale_report_header"><?php echo lang('Revenue')?></h3></td>
                    <td>
                        <table>
                            <tr>
                                <td data-type="day" class="get_date_by_custom_btn custom_td custom_td_active"><?php echo lang('Day')?></td>
                                <td data-type="week" class="get_date_by_custom_btn custom_td"><?php echo lang('Week')?></td>
                                <td data-type="month" class="get_date_by_custom_btn custom_td"><?php echo lang('Month')?></td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-12">
            <div class="box box-info">
                <canvas height="220" id="myChart"></canvas>
            </div>

        </div>

        <div class="col-md-12 grid_view">
            <!-- dblue -->
            <a href="#" data-action_type="revenue" data-text="<?php echo lang('Revenue')?>" class="get_graph_data btn btn-dblue btn-lg active" role="button"><span class="fa fa-money"></span> <br /><span class="set_total_1">0</span> <br /><?php echo lang('Revenue')?></a>
            <a href="#" data-action_type="profit" data-text="<?php echo lang('Profit')?>" class="get_graph_data btn btn-dblue btn-lg" role="button"><span class="fa fa-money"></span> <br /><span class="set_total_2">0</span> <br /><?php echo lang('Profit')?></a>
            <a href="#" data-action_type="transactions" data-text="<?php echo lang('transactions')?>" class="get_graph_data btn btn-dblue btn-lg" role="button"><span class="fa fa-list"></span> <br /><span class="set_total_3">0</span> <br /><?php echo lang('transactions')?></a>
            <a href="#" data-action_type="customers" data-text="<?php echo lang('Customers')?>" class="get_graph_data btn btn-dblue btn-lg" role="button"><span class="fa fa-users"></span> <br /><span class="set_total_4">0</span> <br /><?php echo lang('Customers')?></a>
            <a href="#" data-action_type="average_receipt" data-text="<?php echo lang('average_receipt')?>" class="get_graph_data btn btn-dblue btn-lg" role="button"><span class="fa fa-list"></span> <br /><span class="set_total_5">0</span> <br /><?php echo lang('average_receipt')?></a>
        </div>

        <!-- ./col -->
    </div>
    <p>&nbsp;</p>
    <!-- /.row -->
    <!-- Main row -->
    <!-- quick email widget -->
    <div class="row">
        <div class="col-lg-12 col-md-12">
            <div class="col-md-12">
                <div class="box box-info">
                    <div class="box-header">
                        <h3 class="box-title">
                            <?php echo lang('sale_by_payment_methods'); ?></h3>
                    </div>

                   <table style="width: 100%">
                       <?php
                       $sale_by_paymentsTotal = $sale_by_paymentsTotal->total_sales;
                       foreach ($sale_by_payments as $value):
                            $inline_p = (int)(($value->total_sales * 100)/$sale_by_paymentsTotal);
                           ?>
                       <tr>
                           <th style="width: 100px;padding-left: 5px"><?php echo escape_output($value->name)?></th>
                           <th>
                                   <div class="progress">
                                       <div class="progress-bar" role="progressbar" style="width: <?php echo $inline_p?>%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"><?php echo getAmtP($value->total_sales)?></div>
                                   </div>
                           </th>
                       </tr>
                       <?php endforeach;?>
                   </table>

                </div>
            </div>

        </div>
    </div>

    <div class="row">
        <div class="col-lg-7">
            <div class="box box-info">
                <div class="box-header">
                    <i data-feather="link"></i>
                    <h3 class="box-title"><?php echo lang('quick_links'); ?></h3>
                </div>
                <div class="box-body">
                    <div class="row">
                        <div class="col-sm-12 col-md-4 mb-3">
                            <a class="btn icon-btn btn-default-bordered w-100"
                                href="<?php echo base_url(); ?>foodMenu/addEditFoodMenu"><span
                                    class="fa fa-book p-2"></span>+ <?php echo lang('food_menu'); ?></a>
                            <a class="btn icon-btn btn-default-bordered w-100"
                                href="<?php echo base_url(); ?>SupplierPayment/addSupplierPayment"><span
                                    class="fa fa-user p-2"></span>+ <?php echo lang('supplier_payment'); ?></a>
                            <a class="btn icon-btn btn-default-bordered w-100" href="<?php echo base_url(); ?>Sale/POS"><span
                                    class="fa fa-television p-2"></span><?php echo lang('pos'); ?></a>
                            <a class="btn icon-btn btn-default-bordered w-100"
                                href="<?php echo base_url(); ?>Expense/addEditExpense"><span
                                    class="fa fa-money p-2"></span>+ <?php echo lang('expense'); ?></a>
                            <a class="btn icon-btn btn-default-bordered w-100"
                                href="<?php echo base_url(); ?>Purchase/addEditPurchase"><span
                                    class="fa fa-truck p-2"></span>+ <?php echo lang('purchase'); ?></a>
                        </div>
                        <div class="col-sm-12 col-md-4 mb-3">
                            <a class="btn icon-btn btn-default-bordered  w-100"
                                href="<?php echo base_url(); ?>Report/dailySummaryReport"><span
                                    class="fa fa-list p-2"></span><?php echo lang('daily_summary_report'); ?></a>
                            <a class="btn icon-btn btn-default-bordered  w-100"
                                href="<?php echo base_url(); ?>Report/registerReport"><span
                                    class="fa fa-list p-2"></span><?php echo lang('register_report'); ?></a>
                            <a class="btn icon-btn btn-default-bordered  w-100"
                                href="<?php echo base_url(); ?>Report/profitLossReport"><span
                                    class="fa fa-list p-2"></span><?php echo lang('profit_loss_report'); ?></a>
                            <a class="btn icon-btn btn-default-bordered  w-100"
                                href="<?php echo base_url(); ?>Report/saleReportByDate"><span
                                    class="fa fa-list p-2"></span><?php echo lang('sales_report'); ?></a>
                            <a class="btn icon-btn btn-default-bordered  w-100"
                                href="<?php echo base_url(); ?>Report/foodMenuSales"><span
                                    class="fa fa-list p-2"></span><?php echo lang('food_sales_report'); ?></a>
                        </div>
                        <div class="col-sm-12 col-md-4 mb-3">
                            <a class="btn icon-btn btn-default-bordered  w-100"
                                href="<?php echo base_url(); ?>Setting/index"><span
                                    class="fa fa-cog p-2"></span><?php echo lang('Setting'); ?></a>
                            <a class="btn icon-btn btn-default-bordered  w-100"
                                href="<?php echo base_url(); ?>Inventory/index"><span
                                    class="fa fa-cube p-2"></span><?php echo lang('inventory'); ?></a>
                            <a class="btn icon-btn btn-default-bordered  w-100"
                                href="<?php echo base_url(); ?>Inventory_adjustment/inventoryAdjustments"><span
                                    class="fa fa-adjust p-2"></span><?php echo lang('inventory_adjustment'); ?></a>
                            <a class="btn icon-btn btn-default-bordered  w-100"
                                href="<?php echo base_url(); ?>Customer_due_receive/customerDueReceives"><span
                                    class="fa fa-users p-2"></span>+ <?php echo lang('customer_receive'); ?></a>
                            <a class="btn icon-btn btn-default-bordered  w-100"
                                href="<?php echo base_url(); ?>Attendance/addEditAttendance"><span
                                    class="fa fa-clock-o p-2"></span>+ <?php echo lang('attendance'); ?></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-5">
            <div class="box box-info h-95">
                <div class="box-header">
                    <i data-feather="briefcase"></i>
                    <h3 class="box-title">
                        <?php echo lang('dine'); ?>/<?php echo lang('take_away'); ?>/<?php echo lang('delivery'); ?>(<?php echo lang('this_month'); ?>)
                    </h3>

                </div>
                <div class="box-body">
                    <div class="chart-responsive ir_height260">
                        <canvas id="pieChart"></canvas>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="row">
        <div class="col-lg-7">
            <div class="box box-info">
                <div class="box-header">
                    <i data-feather="truck"></i>
                    <h3 class="box-title">
                        <?php echo lang('operational_comparision'); ?>(<?php echo lang('this_month'); ?>)</h3>
                </div>
                <div class="box-body ir_height280">
                    <div class="chart">
                        <div class="chart ir_height250" id="operational_comparision"></div>
                    </div>
                </div>
            </div>
          </div>

        <div class="col-lg-5">
            <div class="box box-info">
                <div class="box-header">
                    <i data-feather="alert-triangle"></i>
                    <h3 class="box-title"><?php echo lang('ingredients_alert'); ?>/<?php echo lang('low_stock'); ?>
                        <span class="ir_color_red">(<?= getAlertCount() ?>)</span>
                    </h3>
                </div>
                <div class="box-body ir_height280">
                    <ul class="todo-list">
                        <li class="todo-title">
                            <span class="text" class="ir_font_bold"><?php echo lang('ingredient_name'); ?></span>
                            <div class="ir_fl_right_pr_fw">
                                <span><?php echo lang('current_stock'); ?></span>
                            </div>
                        </li>
                    </ul>
                    <ul class="todo-list ir_txt_overflow" id="low_stock_ingredients">
                        <?php
                        $totalStock = 0;
                        if ($low_stock_ingredients && !empty($low_stock_ingredients)) {
                            $i = count($low_stock_ingredients);
                        }

                        foreach ($low_stock_ingredients as $value) {
                            if($value->id):
                                $conversion_rate = (int)$value->conversion_rate?$value->conversion_rate:1;
                                $totalStock = ($value->total_purchase*$value->conversion_rate)  - $value->total_consumption - $value->total_modifiers_consumption - $value->total_waste + $value->total_consumption_plus - $value->total_consumption_minus + $value->total_transfer_plus;
                                if ($totalStock <= $value->alert_quantity):
                                    $last_purchase_price = getLastPurchaseAmount($value->id);
                                    $totalTK = $totalStock * $last_purchase_price;
                                    if($value->conversion_rate==0 || $value->conversion_rate==''){
                                        $total_sale_unit = isset($value->conversion_rate) && (int)$value->conversion_rate?(int)($totalStock/1):'0';
                                    }else{
                                        $total_sale_unit = isset($value->conversion_rate) && (int)$value->conversion_rate?(int)($totalStock/$value->conversion_rate):'0';
                                    }
                                    ?>
                                    <li>
                                        <span class="text"><?= escape_output($value->name . "(" . $value->code . ")") ?></span>
                                        <div class="ir_fl_right_c_red_pr_5">
                                            <span><?php echo ($total_sale_unit)  && $total_sale_unit>0? number_format($total_sale_unit,2) : '0.0' ?><?php echo " " . $value->unit_name2 ?></span> <span><?= ($totalStock) ? getAmtP($totalStock%$conversion_rate) : getAmtP(0) ?><?= " " . escape_output($value->unit_name)?></span>
                                        </div>
                                    </li>
                                    <?php
                                endif;
                            endif;
                        } ?>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-7">
            <div class="box box-info">
                <div class="box-header">
                    <i data-feather="coffee"></i>
                    <h3 class="box-title"><?php echo lang('top_ten_food_this_month'); ?></h3>
                </div>
                <div class="box-body ir_height280">
                    <ul class="todo-list">
                        <li class="todo-title">
                            <div class="ir_font_bold ir_fl_left_pl_5">
                                <span><?php echo lang('sn'); ?></span>
                            </div>
                            <span class="text ir_font_bold"><?php echo lang('food_name'); ?></span>
                            <div class="ir_fl_right_pr_fw">
                                <span><?php echo lang('count'); ?></span>
                            </div>
                        </li>
                    </ul>
                    <ul class="todo-list ir_txt_overflow" id="top_ten_food_menu">
                        <?php 
                if ($top_ten_food_menu && !empty($top_ten_food_menu)) { 
                foreach ($top_ten_food_menu as $key => $value) { 
                  $key++;
                    ?>
                        <li>
                            <div class="ir_fl_left_pl_5">
                                <span><?php echo escape_output($key); ?></span>
                            </div>
                            <span class="text"><?php echo escape_output($value->menu_name); ?></span>
                            <div class="ir_fl_right_c_pr_5">
                                <span><?php echo escape_output($value->totalQty); ?></span>
                            </div>
                        </li>
                        <?php } } ?>
                    </ul>
                </div>
            </div>
        </div>

        <div class="col-lg-5">
            <div class="box box-info">
                <div class="box-header">
                    <i data-feather="users"></i>
                    <h3 class="box-title"><?php echo lang('top_ten_customers'); ?></h3>
                </div>
                <div class="box-body txt_28">
                    <ul class="todo-list">
                        <li class="todo-title">
                            <div class="ir_font_bold ir_fl_left_pl_5">
                                <span><?php echo lang('sn'); ?></span>
                            </div>
                            <span class="text" class="ir_font_bold"><?php echo lang('customer_name'); ?></span>
                            <div class="ir_fl_right_pr_fw">
                                <span><?php echo lang('sale_amount'); ?></span>
                            </div>
                        </li>
                    </ul>
                    <ul class="todo-list" id="top_ten_customer">
                        <?php 
                if ($top_ten_customer && !empty($top_ten_customer)) { 
                foreach ($top_ten_customer as $key => $value) { 
                  $key++;
                    ?>
                        <li>
                            <div class="ir_fl_left_pl_5">
                                <span><?php echo escape_output($key); ?></span>
                            </div>
                            <span class="text"><?php echo escape_output($value->name); ?></span>
                            <div class="ir_fl_right_c_pr_5">
                                <span><?php echo escape_output(getAmtP($value->total_payable)) ?></span>
                            </div>
                        </li>
                        <?php } } ?>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-7">
            <div class="box box-info">
                <div class="box-header">
                    <i data-feather="dollar-sign"></i>
                    <h3 class="box-title"><?php echo lang('customer_receiveable'); ?></h3>
                </div>
                <div class="box-body">
                    <ul class="todo-list">
                        <li class="todo-title">
                            <div class="ir_font_bold ir_fl_left_pl_5">
                                <span><?php echo lang('sn'); ?></span>
                            </div>
                            <span class="text" class="ir_font_bold"><?php echo lang('customer_name'); ?></span>
                            <div class="ir_fl_right_pr_fw">
                                <span><?php echo lang('due_amount'); ?></span>
                            </div>
                        </li>
                    </ul>
                    <ul class="todo-list ir_txt_overflow" id="customer_receivable">
                        <?php 
                if ($customer_receivable && !empty($customer_receivable)) { 
                foreach ($customer_receivable as $key => $value) { 
                  $key++;
                  if($value->due_amount != '0.00' && $value->due_amount != ''){
                    ?>
                        <li>
                            <div class="ir_fl_left_pl_5">
                                <span><?php echo escape_output($key); ?></span>
                            </div>
                            <span class="text"><?php echo escape_output($value->name); ?></span>
                            <div class="ir_fl_right_c_pr_5">
                                <?php $current_due = $value->due_amount - getCustomerDueReceive($value->customer_id); ?>
                                <span><?php echo escape_output(getAmtP($current_due)) ?></span>
                            </div>
                        </li>
                        <?php } }  } ?>
                    </ul>
                </div>
            </div>
        </div>

        <div class="col-lg-5">
            <div class="box box-info">
                <div class="box-header">
                    <i data-feather="dollar-sign"></i>
                    <h3 class="box-title"><?php echo lang('supplier_payable'); ?></h3>
                </div>
                <div class="box-body">
                    <ul class="todo-list">
                        <li class="todo-title">
                            <div class="ir_font_bold ir_fl_left_pl_5">
                                <span><?php echo lang('sn'); ?></span>
                            </div>
                            <span class="text ir_font_bold"><?php echo lang('supplier_name'); ?></span>
                            <div class="ir_fl_right_pr_fw">
                                <span><?php echo lang('due_amount'); ?></span>
                            </div>
                        </li>
                    </ul>
                    <ul class="todo-list ir_txt_overflow" id="supplier_payable">
                        <?php 
                if ($supplier_payable && !empty($supplier_payable)) { 
                foreach ($supplier_payable as $key => $value) { 
                  $key++;
                  if($value->due != '0.00' && $value->due != ''){
                    ?>
                        <li>
                            <div class="ir_fl_left_pl_5">
                                <span><?php echo escape_output($key); ?></span>
                            </div>
                            <span class="text"><?php echo escape_output($value->name); ?></span>
                            <div class="ir_fl_right_c_pr_5">
                                <?php $current_due = $value->due - getSupplierDuePayment($value->supplier_id); ?>
                                <span><?php echo escape_output(getAmtP($current_due)) ?></span>
                            </div>
                        </li>
                        <?php } }  } ?>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-12">
            <div class="box box-info">
                <div class="box-header">
                    <i data-feather="briefcase"></i>
                    <h3 class="box-title"><?php echo lang('monthly_sales_comparision'); ?></h3>
                </div>
                <div class="box-body">
                    <div class="chart">
                        <div id="chart_div" class="ir_w_100_h_280"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<script>
    // Draw chart
    var ctx = document.getElementById("myChart").getContext('2d');

    const myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: '', // Name the series
                data: [], // Specify the data values array
                fill: true,
                borderColor: '#7367f0', // Add custom color border (Line)
                backgroundColor: '#7367f045', // Add custom color background (Points and Fill)
                borderWidth: 3, // Specify bar border width
                animations: true
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            responsive: true,
            maintainAspectRatio: false,
        }
    });

    function show_sale_report(type,action_type) {
        let csrf_name_ = $("#csrf_name_").val();
        let csrf_value_ = $("#csrf_value_").val();
        let outlet_id = "1";
        let start_date = $("#start_date_dashboard").val();
        let end_date = $("#end_date_dashboard").val();
        $.ajax({
            url: "<?php echo base_url()?>Dashboard/get_sale_report_charge",
            type: "POST",
            dataType: "json",
            data: {
                outlet_id: outlet_id,
                start_date: start_date,
                end_date: end_date,
                type: type,
                action_type: action_type,
                csrf_name_: csrf_value_,
            },
            success: function (response) {
                $(".set_total_1").html(response.set_total_1);
                $(".set_total_2").html(response.set_total_2);
                $(".set_total_3").html(response.set_total_3);
                $(".set_total_4").html(response.set_total_4);
                if(Number(response.set_total_3)){
                    $(".set_total_5").html((Number(response.set_total_1)/Number(response.set_total_3)).toFixed(2));
                }else{
                    $(".set_total_5").html((0).toFixed(2));
                }
                let json = (response.data_points);
                var data_chart = [];
                var data_label = [];
                var data_label_value = [];
                $.each(json, function (i, v) {
                    data_chart.push({ y: Number(v.y_value), yLabel: v.y_label,x:i, label:v.x_label, tmiLabel:v.x_label_tmp,});
                    data_label.push(v.x_label);
                    data_label_value.push(Number(v.y_value));
                });

                //chart js
                // assign programmatically the datasets again, otherwise data changes won't show
                myLineChart.data.labels = data_label;
                myLineChart.data.datasets[0].data = data_label_value;
                myLineChart.data.datasets[0].animations = true;
                myLineChart.update();

            },
        });
    }

    function show_sale_report_today() {
        let csrf_name_ = $("#csrf_name_").val();
        let csrf_value_ = $("#csrf_value_").val();
        let outlet_id = "1";
        $.ajax({
            url: "<?php echo base_url()?>Dashboard/get_sale_report_charge_today",
            type: "POST",
            dataType: "json",
            data: {
                outlet_id: outlet_id,
                csrf_name_: csrf_value_,
            },
            success: function (response) {
                $(".set_today_total_1").html(response.set_total_1);
                $(".set_today_total_2").html(response.set_total_2);
                $(".set_today_total_3").html(response.set_total_3);
                $(".set_today_total_4").html(response.set_total_4);
                if(Number(response.set_total_3)){
                    $(".set_today_total_5").html((Number(response.set_total_1)/Number(response.set_total_3)).toFixed(2));
                }else{
                    $(".set_today_total_5").html((0).toFixed(2));
                }

                $('.spincrement').spincrement({
                    from: 0.0,
                    decimalPlaces: 2,
                    thousandSeparator:null,
                    duration: 1000,
                });
            },
        });
    }

    window.onload = function () {
        show_sale_report("day","revenue");
        show_sale_report_today();
    }

    $(function() {
        $(document).on('click', '.get_graph_data', function(e) {
            e.preventDefault();
            $('.btn-dblue').removeClass('active');
            $(this).addClass('active');
            let action_type = $(this).attr('data-action_type');
            let text = $(this).attr('data-text');
            $(".sale_report_header").html(text);
            let type = "day";

            $(".get_date_by_custom_btn").each(function() {
                if($(this).hasClass("custom_td_active")){
                    type = $(this).attr('data-type');
                }
            });

            show_sale_report(type,action_type);
        });
        $(document).on('click', '.get_action_prevent', function(e) {
            e.preventDefault();
        });
        $(document).on('click', '.get_date_by_custom_btn', function(e) {
            e.preventDefault();
            $('.get_date_by_custom_btn').removeClass('custom_td_active');
            $(this).addClass('custom_td_active');
            let type = $(this).attr("data-type");
            let action_type = "revenue";

            $(".get_graph_data").each(function() {
                 if($(this).hasClass("active")){
                     action_type = $(this).attr('data-action_type');
                 }
            });

            show_sale_report(type,action_type);

        });
    });

</script>

<!-- ChartJS -->
<script src="<?php echo base_url(); ?>assets/bower_components/chart.js/Chart.js"></script>

<script type="text/javascript" src="<?php echo base_url(); ?>assets/plugins/local/loader.js"></script>

<script src="<?php echo base_url(); ?>assets/bower_components/raphael/raphael.min.js"></script>
<script src="<?php echo base_url(); ?>assets/bower_components/morris.js/morris.min.js"></script>
<link rel="stylesheet" href="<?php echo base_url(); ?>assets/bower_components/morris.js/morris.css">
<script type="text/javascript" src="<?php echo base_url(); ?>assets/POS/js/jquery.cookie.js"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>frequent_changing/js/dashboard.js"></script>