<!-- bootstrap datepicker -->
<script type="text/javascript" src="<?php echo base_url(); ?>assets/POS/js/jquery.slimscroll.min.js"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>frequent_changing/js/jquery.spincrement.js"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>frequent_changing/js/jquery.spincrement.min.js"></script>

<link rel="stylesheet" href="<?php echo base_url(); ?>assets/dist/css/custom/dashboard.css">
<link rel="stylesheet" href="<?php echo base_url(); ?>frequent_changing/css/dashboard_button.css">
<!-- Content Header (Page header) -->
<script type="text/javascript" src="<?php echo base_url(); ?>assets/bower_components/graph/chart.min.js"></script>
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
                            $outlet_id = $this->session->userdata('outlet_id');
                            foreach ($outlets as $value):
                                ?>
                                <option <?= set_select('outlet_id',$value->id)?>  <?= isset($outlet_id) && $outlet_id==$value->id?'selected':''?> value="<?php echo escape_output($value->id) ?>"><?php echo escape_output($value->outlet_name) ?></option>
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
    <div class="dashboadwrapper">
        <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-2 mt-2">
                <!-- small box -->
                <div class="small-box box4column darkblue_back">
                    <div class="inner">
                        <h3><?php echo lang('today')?></h3>
                        <p><?php echo date("d, F")?></p>
                    </div>
                    <div class="icon dash_icons">
                        <img src="<?php echo base_url(); ?>/assets/dist/img/icons/date_time.svg">
                    </div>
                    <!-- <a href="#" class="small-box-footer">&nbsp;</a> -->
                </div>
            </div>
            <!-- ./col -->
            <div class="col-sm-12 col-md-6 col-lg-2 mt-2">
                <!-- small box -->
                <div class="small-box box4column blue_back">
                    <div class="inner">
                        <h3>0</h3>

                        <p><?php echo lang('Revenue')?></p>
                    </div>
                    <div class="icon dash_icons">
                        <img src="<?php echo base_url(); ?>/assets/dist/img/icons/revenue.svg">
                    </div>
                    <!-- <a href="#" class="small-box-footer">&nbsp;</a> -->
                </div>
            </div>
            <!-- ./col -->
            <div class="col-sm-12 col-md-6 col-lg-2 mt-2">
                <!-- small box -->
                <div class="small-box box4column black_sky">
                    <div class="inner">
                        <h3>0</h3>

                        <p><?php echo lang('net_profit')?></p>
                    </div>
                    <div class="icon dash_icons">
                        <img src="<?php echo base_url(); ?>/assets/dist/img/icons/net_profit.svg">
                    </div>
                    <!-- <a href="#" class="small-box-footer">&nbsp;</a> -->
                </div>
            </div>
            <!-- ./col -->
            <div class="col-sm-12 col-md-6 col-lg-2 mt-2">
                <!-- small box -->
                <div class="small-box box4column red_back">
                    <div class="inner">
                        <h3>6</h3>

                        <p><?php echo lang('transactions')?></p>
                    </div>
                    <div class="icon dash_icons">
                    <img src="<?php echo base_url(); ?>/assets/dist/img/icons/transaction.svg">
                    </div>
                    <!-- <a href="#" class="small-box-footer">&nbsp;</a> -->
                </div>
            </div>
            <!-- ./col -->
            <div class="col-sm-12 col-md-6 col-lg-2 mt-2">
                <!-- small box -->
                <div class="small-box box4column light_green">
                    <div class="inner">
                        <h3>5</h3>

                        <p><?php echo lang('Customers')?></p>
                    </div>
                    <div class="icon dash_icons">
                    <img src="<?php echo base_url(); ?>/assets/dist/img/dash_user.svg">
                    </div>
                    <!-- <a href="#" class="small-box-footer">&nbsp;</a> -->
                </div>
            </div>
            <!-- ./col -->
            <div class="col-sm-12 col-md-6 col-lg-2 mt-2">
                <!-- small box -->
                <div class="small-box box4column yellow_back">
                    <div class="inner">
                        <h3>4</h3>

                        <p><?php echo lang('average_receipt')?></p>
                    </div>
                    <div class="icon dash_icons">
                    <img src="<?php echo base_url(); ?>/assets/dist/img/icons/receipt.svg">
                    </div>
                    <!-- <a href="#" class="small-box-footer">&nbsp;</a> -->
                </div>
            </div>
            <!-- ./col -->
        </div>
    </div>
    <div class="row">
            <!-- dblue -->
        <!-- <div class="col-md-12 grid_view">
            <a href="#" class="get_action_prevent btn btn-dblue1 btn-lg active" role="button"><span class="fa fa-calendar"></span> <br /><span><?php echo lang('today')?>,</span> <br /><?php echo date("d, F")?></a>
            <a href="#" class="get_action_prevent btn btn-dblue1 btn-lg" role="button"><span class="fa fa-money"></span> <br /><span class="spincrement set_today_total_1">0</span> <br /><?php echo lang('Revenue')?></a>
            <a href="#" class="get_action_prevent btn btn-dblue1 btn-lg" role="button"><span class="fa fa-money"></span> <br /><span class="spincrement set_today_total_2">0</span> <br /><?php echo lang('net_profit')?></a>
            <a href="#" class="get_action_prevent btn btn-dblue1 btn-lg" role="button"><span class="fa fa-list"></span> <br /><span class="spincrement set_today_total_3">0</span> <br /><?php echo lang('transactions')?></a>
            <a href="#" class="get_action_prevent btn btn-dblue1 btn-lg" role="button"><span class="fa fa-users"></span> <br /><span class="spincrement set_today_total_4">0</span> <br /><?php echo lang('Customers')?></a>
            <a href="#" class="get_action_prevent btn btn-dblue1 btn-lg" role="button"><span class="fa fa-list"></span> <br /><span class="spincrement set_today_total_5">0</span> <br /><?php echo lang('average_receipt')?></a>
        </div> -->
        <div class="clearfix">&nbsp;<br>&nbsp;</div>
        <div class="col-md-12">
            <table>
                <tr>
                    <td><h3 class="sale_report_header dashboard_w_3" id="graphname_value"><?php echo lang('Revenue')?></h3></td>
                   <!--  <td>
                        <table>
                            <tr>
                                <td data-type="day" class="get_date_by_custom_btn custom_td custom_td_active"><?php echo lang('Day')?></td>
                                <td data-type="week" class="get_date_by_custom_btn custom_td"><?php echo lang('Week')?></td>
                                <td data-type="month" class="get_date_by_custom_btn custom_td"><?php echo lang('Month')?></td>
                            </tr>
                        </table>
                    </td> -->
                </tr>
            </table>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-12">
            <div class="box box-info">
                <!-- <canvas height="220" id="week_month_chart_report"></canvas> -->
                <div class="chart ir_height250" id="day_week_month_chart_report"></div>
            </div>

        </div>

        <div class="dashboadwrapper">
            <!-- <div class="row"> -->
            <div class="col-md-12 grid_view_new">
                <!-- ./col -->
                <div class="col-sm-12 col-md-6 col-lg-2 mt-2 dashboard_inner_box">
                    <!-- small box -->
                    <div class="small-box box4column blue_back graph_name" data-graphname="Revenue" style="cursor: pointer;">
                        <div class="inner">
                            <h3>0</h3>

                            <p><?php echo lang('Revenue')?></p>
                        </div>
                        <div class="icon dash_icons">
                            <img src="<?php echo base_url(); ?>/assets/dist/img/icons/revenue.svg">
                        </div>
                        <!-- <a href="#" class="small-box-footer">&nbsp;</a> -->
                    </div>
                </div>
                <!-- ./col -->
                <div class="col-sm-12 col-md-6 col-lg-2 mt-2 dashboard_inner_box">
                    <!-- small box -->
                    <div class="small-box box4column black_sky graph_name" data-graphname="Net Profit" style="cursor: pointer;">
                        <div class="inner">
                            <h3>0</h3>

                            <p><?php echo lang('net_profit')?></p>
                        </div>
                        <div class="icon dash_icons">
                            <img src="<?php echo base_url(); ?>/assets/dist/img/icons/net_profit.svg">
                        </div>
                        <!-- <a href="#" class="small-box-footer">&nbsp;</a> -->
                    </div>
                </div>
                <!-- ./col -->
                <div class="col-sm-12 col-md-6 col-lg-2 mt-2 dashboard_inner_box">
                    <!-- small box -->
                    <div class="small-box box4column red_back graph_name" data-graphname="Transactions" style="cursor: pointer;">
                        <div class="inner">
                            <h3>6</h3>

                            <p><?php echo lang('transactions')?></p>
                        </div>
                        <div class="icon dash_icons">
                        <img src="<?php echo base_url(); ?>/assets/dist/img/icons/transaction.svg">
                        </div>
                        <!-- <a href="#" class="small-box-footer">&nbsp;</a> -->
                    </div>
                </div>
                <!-- ./col -->
                <div class="col-sm-12 col-md-6 col-lg-2 mt-2 dashboard_inner_box">
                    <!-- small box -->
                    <div class="small-box box4column light_green graph_name" data-graphname="Customers" style="cursor: pointer;">
                        <div class="inner">
                            <h3>5</h3>

                            <p><?php echo lang('Customers')?></p>
                        </div>
                        <div class="icon dash_icons">
                        <img src="<?php echo base_url(); ?>/assets/dist/img/dash_user.svg">
                        </div>
                        <!-- <a href="#" class="small-box-footer">&nbsp;</a> -->
                    </div>
                </div>
                <!-- ./col -->
                <div class="col-sm-12 col-md-6 col-lg-2 mt-2 dashboard_inner_box">
                    <!-- small box -->
                    <div class="small-box box4column yellow_back graph_name" data-graphname="Average Receipt" style="cursor: pointer;">
                        <div class="inner">
                            <h3>4</h3>

                            <p><?php echo lang('average_receipt')?></p>
                        </div>
                        <div class="icon dash_icons">
                        <img src="<?php echo base_url(); ?>/assets/dist/img/icons/receipt.svg">
                        </div>
                        <!-- <a href="#" class="small-box-footer">&nbsp;</a> -->
                    </div>
                </div>
                <!-- ./col -->
            </div>
        </div>

        <!-- ./col -->
    </div>
    <p>&nbsp;</p>
    <!-- /.row -->
    <!-- Main row -->
    <!-- quick email widget -->
    <?php if(isset($sale_by_payments) && $sale_by_payments):?>
    <div class="row">
        <div class="col-lg-12 col-md-12">
            <div class="col-md-12">
                <div class="box box-info">
                    <div class="box-header">
                        <h3 class="box-title">
                            <?php echo lang('sale_by_payment_methods'); ?></h3>
                    </div>

                   <table class="dashboard_w_1">
                       <?php
                       $sale_by_paymentsTotal = $sale_by_paymentsTotal->total_sales;
                       foreach ($sale_by_payments as $value):
                            $inline_p = (int)(($value->total_sales * 100)/$sale_by_paymentsTotal);
                           ?>
                       <tr>
                           <th class="dashboard_w_2"><?php echo escape_output($value->name)?></th>
                           <th>
                                   <div class="progress">
                                       <div class="progress-bar" role="progressbar" style="width: <?php echo escape_output($inline_p)?>%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"><?php echo getAmtP($value->total_sales)?></div>
                                   </div>
                           </th>
                       </tr>
                       <?php endforeach;?>
                   </table>

                </div>
            </div>

        </div>
    </div>
    <?php endif;?>

    <div class="row">
        <div class="col-lg-7">
            <div class="box box-info">
                <div class="box-header">
                    <i data-feather="link"></i>
                    <h3 class="box-title"><?php echo lang('quick_links'); ?></h3>
                </div>
                <div class="box-body">

                    <div class="row gx-md-3">

                        <div class="col-6 col-sm-6 col-md-auto mb-3">
                            <a href="<?php echo base_url(); ?>foodMenu/addEditFoodMenu" class="links">
                                <div class="card white_card">
                                    <div class="card-body">
                                        <div class="image-box">
                                            <img src="<?php echo base_url(); ?>assets/dist/img/icons/food_menu.svg" alt="food_menu">
                                        </div>
                                        <span>FoodMenu</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-6 col-sm-6 col-md-auto mb-3">
                            <a href="<?php echo base_url(); ?>SupplierPayment/addSupplierPayment" class="links">
                                <div class="card white_card">
                                    <div class="card-body">
                                        <div class="image-box">
                                            <img src="<?php echo base_url(); ?>assets/dist/img/icons/payment.svg" alt="supplier_payment">
                                        </div>
                                        <span>Supplier Payment</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-6 col-sm-6 col-md-auto mb-3">
                            <a href="<?php echo base_url(); ?>Sale/POS" class="links">
                                <div class="card white_card">
                                    <div class="card-body">
                                        <div class="image-box">
                                            <img src="<?php echo base_url(); ?>assets/dist/img/icons/pos.svg" alt="pos">
                                        </div>
                                        <span>POS</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-6 col-sm-6 col-md-auto mb-3">
                            <a href="<?php echo base_url(); ?>Expense/addEditExpense" class="links">
                                <div class="card white_card">
                                    <div class="card-body">
                                        <div class="image-box">
                                            <img src="<?php echo base_url(); ?>assets/dist/img/icons/expense.svg" alt="expense">
                                        </div>
                                        <span>Expense</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-6 col-sm-6 col-md-auto mb-3">
                            <a href="<?php echo base_url(); ?>Purchase/addEditPurchase" class="links">
                                <div class="card white_card">
                                    <div class="card-body">
                                        <div class="image-box">
                                            <img src="<?php echo base_url(); ?>assets/dist/img/icons/stock.svg" alt="purchase">
                                        </div>
                                        <span>Purchase</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-6 col-sm-6 col-md-auto mb-3">
                            <a href="<?php echo base_url(); ?>Report/dailySummaryReport" class="links">
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
                            <a href="<?php echo base_url(); ?>Report/registerReport" class="links">
                                <div class="card white_card">
                                    <div class="card-body">
                                        <div class="image-box">
                                            <img src="<?php echo base_url(); ?>assets/dist/img/icons/register.svg" alt="register">
                                        </div>
                                        <span>Register Report</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-6 col-sm-6 col-md-auto mb-3">
                            <a href="<?php echo base_url(); ?>Report/profitLossReport" class="links">
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
                            <a href="<?php echo base_url(); ?>Report/saleReportByDate" class="links">
                                <div class="card white_card">
                                    <div class="card-body">
                                        <div class="image-box">
                                            <img src="<?php echo base_url(); ?>assets/dist/img/icons/sales_report.svg" alt="sales_report">
                                        </div>
                                        <span>Sale Report</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-6 col-sm-6 col-md-auto mb-3">
                            <a href="<?php echo base_url(); ?>Report/foodMenuSales" class="links">
                                <div class="card white_card">
                                    <div class="card-body">
                                        <div class="image-box">
                                            <img src="<?php echo base_url(); ?>assets/dist/img/icons/food_sale_report.svg" alt="food_sale_report">
                                        </div>
                                        <span>Food Sales Report</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-6 col-sm-6 col-md-auto mb-3">
                            <a href="<?php echo base_url(); ?>Setting/index" class="links">
                                <div class="card white_card">
                                    <div class="card-body">
                                        <div class="image-box">
                                            <img src="<?php echo base_url(); ?>assets/dist/img/icons/setting.svg" alt="setting">
                                        </div>
                                        <span>Setting</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-6 col-sm-6 col-md-auto mb-3">
                            <a href="<?php echo base_url(); ?>Inventory/index" class="links">
                                <div class="card white_card">
                                    <div class="card-body">
                                        <div class="image-box">
                                            <img src="<?php echo base_url(); ?>assets/dist/img/icons/stock_adjustment.svg" alt="stock">
                                        </div>
                                        <span>Stock</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-6 col-sm-6 col-md-auto mb-3">
                            <a href="<?php echo base_url(); ?>Inventory_adjustment/inventoryAdjustments" class="links">
                                <div class="card white_card">
                                    <div class="card-body">
                                        <div class="image-box">
                                            <img src="<?php echo base_url(); ?>assets/dist/img/icons/stock_adjustment.svg" alt="stock_adjustment">
                                        </div>
                                        <span>Stock Adjustment</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-6 col-sm-6 col-md-auto mb-3">
                            <a href="<?php echo base_url(); ?>Customer_due_receive/customerDueReceives" class="links">
                                <div class="card white_card">
                                    <div class="card-body">
                                        <div class="image-box">
                                            <img src="<?php echo base_url(); ?>assets/dist/img/icons/customer_review.svg" alt="customer_review">
                                        </div>
                                        <span>Customer Receive</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-6 col-sm-6 col-md-auto mb-3">
                            <a href="<?php echo base_url(); ?>Attendance/addEditAttendance" class="links">
                                <div class="card white_card">
                                    <div class="card-body">
                                        <div class="image-box">
                                            <img src="<?php echo base_url(); ?>assets/dist/img/icons/attendance.svg" alt="attendance">
                                        </div>
                                        <span>Attendance</span>
                                    </div>
                                </div>
                            </a>
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
                        <?php echo lang('dine'); ?>/<?php echo lang('take_away'); ?>/<?php echo lang('delivery'); ?>
                    </h3>

                </div>
                <div class="box-body">
                    <div class="chart-responsive ir_height260">
                        <!-- <canvas id="pieChart"></canvas> -->
                        <div id="chart11"></div>
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
                        <?php echo lang('operational_comparision'); ?></h3>
                </div>
                <div class="box-body box-body-scroll ir_height280">
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
                <div class="box-body box-body-scroll ir_height280">
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
                <div class="box-body box-body-scroll ir_height280">
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
                <div class="box-body box-body-scroll txt_28">
                    <ul class="todo-list">
                        <li class="todo-title">
                            <div class="ir_font_bold ir_fl_left_pl_5">
                                <span><?php echo lang('sn'); ?></span>
                            </div>
                            <span class="text" class="ir_font_bold"><?php echo lang('customer_name'); ?>(<?php echo lang('phone'); ?>)</span>
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
                            <span class="text"><?php echo escape_output($value->name); ?><?php echo escape_output($value->phone?" (".$value->phone.")":''); ?></span>
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
                <div class="box-body box-body-scroll">
                    <ul class="todo-list">
                        <li class="todo-title">
                            <div class="ir_font_bold ir_fl_left_pl_5">
                                <span><?php echo lang('sn'); ?></span>
                            </div>
                            <span class="text" class="ir_font_bold"><?php echo lang('customer_name'); ?>(<?php echo lang('phone'); ?>)</span>
                            <div class="ir_fl_right_pr_fw">
                                <span><?php echo lang('due_amount'); ?></span>
                            </div>
                        </li>
                    </ul>
                    <ul class="todo-list ir_txt_overflow" id="customer_receivable">
                        <?php
                        $total_payable_cust = 0;
                if ($customer_receivable && !empty($customer_receivable)) { 
                foreach ($customer_receivable as $key => $value) { 
                  $key++;
                  if($value->due_amount != '0.00' && $value->due_amount != ''){
                      $current_due = $value->due_amount - getCustomerDueReceive($value->customer_id);
                      $total_payable_cust+=$current_due;
                    ?>
                        <li>
                            <div class="ir_fl_left_pl_5">
                                <span><?php echo escape_output($key); ?></span>
                            </div>
                            <span class="text"><?php echo escape_output($value->name); ?><?php echo escape_output($value->phone?" (".$value->phone.")":''); ?></span>
                            <div class="ir_fl_right_c_pr_5">
                                <span><?php echo escape_output(getAmtP($current_due)) ?></span>
                            </div>
                        </li>
                        <?php } }  } ?>

                        <li>
                            <div class="ir_fl_left_pl_5">
                                <span>&nbsp;</span>
                            </div>
                            <span class="text"><b><?php echo lang('total'); ?></b></span>
                            <div class="ir_fl_right_c_pr_5">
                                <span><b><?php echo escape_output(getAmtP($total_payable_cust)) ?></b></span>
                            </div>
                        </li>
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
                <div class="box-body box-body-scroll">
                    <ul class="todo-list">
                        <li class="todo-title">
                            <div class="ir_font_bold ir_fl_left_pl_5">
                                <span><?php echo lang('sn'); ?></span>
                            </div>
                            <span class="text ir_font_bold"><?php echo lang('supplier_name'); ?>(<?php echo lang('phone'); ?>)</span>
                            <div class="ir_fl_right_pr_fw">
                                <span><?php echo lang('due_amount'); ?></span>
                            </div>
                        </li>
                    </ul>
                    <ul class="todo-list ir_txt_overflow" id="supplier_payable">
                        <?php
                        $total_payable_sup = 0;
                if ($supplier_payable && !empty($supplier_payable)) { 
                foreach ($supplier_payable as $key => $value) { 
                  $key++;
                  if($value->due != '0.00' && $value->due != ''){
                      $current_due = $value->due - getSupplierDuePayment($value->supplier_id);
                      $total_payable_sup+=$current_due;
                    ?>
                        <li>
                            <div class="ir_fl_left_pl_5">
                                <span><?php echo escape_output($key); ?></span>
                            </div>
                            <span class="text"><?php echo escape_output($value->name); ?><?php echo escape_output($value->phone?" (".$value->phone.")":''); ?></span>
                            <div class="ir_fl_right_c_pr_5">
                                <span><?php echo escape_output(getAmtP($current_due)) ?></span>
                            </div>
                        </li>
                        <?php } }  } ?>

                        <li>
                            <div class="ir_fl_left_pl_5">
                                <span>&nbsp;</span>
                            </div>
                            <span class="text"><b><?php echo lang('total'); ?></b></span>
                            <div class="ir_fl_right_c_pr_5">
                                <span><b><?php echo escape_output(getAmtP($total_payable_sup)) ?></b></span>
                            </div>
                        </li>
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

<script type="text/javascript" src="<?php echo base_url(); ?>frequent_changing/js/dashboard_chart_custom.js"></script>
<!-- ChartJS -->
<!-- <script src="<?php echo base_url(); ?>assets/bower_components/chart.js/Chart.js"></script> -->
<script src="<?php echo base_url(); ?>assets/bower_components/apexchart/apexcharts.min.js"></script>

<script type="text/javascript" src="<?php echo base_url(); ?>assets/plugins/local/loader.js"></script>

<script src="<?php echo base_url(); ?>assets/bower_components/raphael/raphael.min.js"></script>
<script src="<?php echo base_url(); ?>assets/bower_components/morris.js/morris.min.js"></script>
<link rel="stylesheet" href="<?php echo base_url(); ?>assets/bower_components/morris.js/morris.css">
<script type="text/javascript" src="<?php echo base_url(); ?>assets/POS/js/jquery.cookie.js"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>frequent_changing/js/dashboard.js"></script>
