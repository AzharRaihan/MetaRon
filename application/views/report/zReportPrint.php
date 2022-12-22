<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <title><?php echo lang('z_report'); ?>: <?php echo date("d/m/Y",strtotime($selectedDate))?></title>
    <script src="<?php echo base_url(); ?>assets/bower_components/jquery/dist/jquery.min.js"></script>
    <link rel="stylesheet" href="<?php echo base_url(); ?>assets/bower_components/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet"
          href="<?php echo base_url(); ?>assets/bower_components/font-awesome/css/font-awesome.min.css">
    <script src="<?php echo base_url(); ?>assets/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="<?php echo base_url(); ?>assets/dist/css/custom/size_56mm.css" media="all">
    <link rel="stylesheet" href="<?php echo base_url(); ?>assets/dist/css/custom/print_bill.css" media="all">


</head>

<body>
<div id="wrapper">
    <div id="receiptData">

        <div id="receipt-data">
            <div class="text-center">
                <?php
                $invoice_logo = $this->session->userdata('invoice_logo');
                if($invoice_logo):
                    ?>
                    <img src="<?=base_url()?>images/<?=escape_output($invoice_logo)?>">
                    <?php
                endif;
                ?>
                <h3>
                    <?php echo escape_output($this->session->userdata('outlet_name')); ?>
                </h3>
                <p><?php echo escape_output($this->session->userdata('address')); ?>
                    <br>
                    <?php echo lang('phone'); ?>: <?php echo escape_output($this->session->userdata('phone')); ?>
                </p>
                <h3 style="text-align: center"><span style="border: 2px solid #c2c2c2;padding: 5px;border-radius: 14px;"><?php echo lang('z_report'); ?></span></h3>
                <h4 style="text-align: center"><?php echo lang('date'); ?>: <?php echo date("d/m/Y",strtotime($selectedDate))?></h4>
            </div>
        </div>
        <p>&nbsp;</p>
        <div class="table-responsive">
            <?php $total_amount = 0;?>
            <table class="table">
                <tbody>
                <tr>
                    <td class="ir_w_31"><?php echo lang('net_sales'); ?></td>
                    <td class="ir_w_35"></td>
                    <td class="ir_w_31"><?php echo escape_output(getAmtPCustom($sub_total_foods->sub_total_foods));$total_amount+=$sub_total_foods->sub_total_foods?></td>
                </tr>
                <tr>
                    <td class="ir_w_31"><?php echo lang('ServiceCharge'); ?></td>
                    <td class="ir_w_35"></td>
                    <td class="ir_w_31"><?php echo escape_output(getAmtPCustom($totals_sale_service->total_charge));$total_amount+=$totals_sale_service->total_charge?></td>
                </tr>
                <tr>
                    <td class="ir_w_31"><?php echo lang('DeliveryCharge'); ?></td>
                    <td class="ir_w_35"></td>
                    <td class="ir_w_31"><?php echo escape_output(getAmtPCustom($totals_sale_delivery->total_charge));$total_amount+=$totals_sale_delivery->total_charge?></td>
                </tr>


                <tr>
                    <td class="ir_w_31"><?php echo lang('vat'); ?></td>
                    <td class="ir_w_35"></td>
                    <td class="ir_w_31"><?php echo escape_output(getAmtPCustom($totals_sale_others->total_tax))?></td>
                </tr>
                <tr>
                    <th class="ir_w_31"><?php echo lang('total'); ?> <?php echo lang('amount'); ?></th>
                    <td class="ir_w_35"></td>
                    <th class="ir_w_31"><?php echo escape_output(getAmtPCustom($total_amount))?></th>
                </tr>
                <tr>
                    <td class="ir_w_31"></td>
                    <td class="ir_w_35"></td>
                    <td class="ir_w_31"></td>
                </tr>
                <tr>
                    <th class="ir_w_31"><?php echo lang('Closedwithoutpayment'); ?></th>
                    <td class="ir_w_35"></td>
                    <th class="ir_w_31"><?php echo escape_output(getAmtPCustom($totalCancelSaleAmount->total_sale_amount))?></th>
                </tr>
                <tr>
                    <td class="ir_w_31"></td>
                    <td class="ir_w_35"></td>
                    <td class="ir_w_31"></td>
                </tr>

                <tr>
                    <th class="ir_w_31"><?php echo lang('SalesCategory'); ?></th>
                    <th class="ir_w_35"><?php echo lang('items'); ?></th>
                    <th class="ir_w_31"><?php echo lang('net_sales'); ?></th>
                </tr>
                <?php
                foreach ($sale_categories as $value):
                    ?>
                    <tr>
                        <td class="ir_w_31"><?php echo $value->category_name?></td>
                        <td class="ir_w_35"><?php echo $value->total_items?></td>
                        <td class="ir_w_31"><?php echo getAmtPCustom($value->net_sales)?></td>
                    </tr>
                <?php endforeach;?>

                <tr>
                    <td class="ir_w_31"></td>
                    <td class="ir_w_35"></td>
                    <td class="ir_w_31"></td>
                </tr>

                <tr>
                    <th class="ir_w_31"><?php echo lang('DiningOption'); ?></th>
                    <th class="ir_w_35"><?php echo lang('orders'); ?></th>
                    <th class="ir_w_31"><?php echo lang('net_sales'); ?></th>
                </tr>
                <tr>
                    <td class="ir_w_31"><?php echo lang('dine'); ?></td>
                    <td class="ir_w_35"><?php echo ($total_orders_by_type_1->total_order)?></td>
                    <td class="ir_w_31"><?php echo getAmtPCustom($total_orders_by_type_1->total_net_sales)?></td>
                </tr>
                <tr>
                    <td class="ir_w_31"><?php echo lang('take_away'); ?></td>
                    <td class="ir_w_35"><?php echo ($total_orders_by_type_2->total_order)?></td>
                    <td class="ir_w_31"><?php echo getAmtPCustom($total_orders_by_type_2->total_net_sales)?></td>
                </tr>
                <tr>
                    <td class="ir_w_31"><?php echo lang('delivery'); ?></td>
                    <td class="ir_w_35"><?php echo ($total_orders_by_type_3->total_order)?></td>
                    <td class="ir_w_31"><?php echo getAmtPCustom($total_orders_by_type_3->total_net_sales)?></td>
                </tr>

                <tr>
                    <td class="ir_w_31"></td>
                    <td class="ir_w_35"></td>
                    <td class="ir_w_31"></td>
                </tr>

                <tr>
                    <th class="ir_w_31"><?php echo lang('vat'); ?></th>
                    <th class="ir_w_35"><?php echo lang('tax_amount'); ?></th>
                    <th class="ir_w_31"><?php echo lang('net_sales'); ?></th>
                </tr>
                <tr>
                    <td class="ir_w_31">VAT Tax 18%</td>
                    <td class="ir_w_35"><?php echo getAmtPCustom($totalAllTax1->total_tax)?></td>
                    <td class="ir_w_31"><?php echo escape_output(getAmtPCustom($totalAllTax1->total_net_sale));?></td>
                </tr>
                <tr>
                    <td class="ir_w_31"><?php echo lang('TaxExempt'); ?></td>
                    <td class="ir_w_35"><?php echo getAmtPCustom($totalAllTax2->total_remove_tax)?></td>
                    <td class="ir_w_31"><?php echo escape_output(getAmtPCustom($totalAllTax2->total_net_sale));?></td>
                </tr>

                <tr>
                    <td class="ir_w_31"></td>
                    <td class="ir_w_35"></td>
                    <td class="ir_w_31"></td>
                </tr>

                <tr>
                    <th class="ir_w_35"><?php echo lang('net_amount'); ?></th>
                    <th class="ir_w_31"><?php echo lang('discount'); ?></th>
                    <th class="ir_w_31"><?php echo lang('total'); ?></th>
                </tr>
                <?php
                $get_gross_total_discount = $get_gross_total->net_sales - $get_gross_total->discount_net_sales;
                ?>
                <tr>
                    <td class="ir_w_35"><?php echo getAmtPCustom($get_gross_total->net_sales)?></td>
                    <td class="ir_w_31"><?php echo escape_output(getAmtPCustom($get_gross_total_discount));?></td>
                    <td class="ir_w_35"><?php echo getAmtPCustom($get_gross_total->net_sales - $get_gross_total_discount)?></td>
                </tr>

                <tr>
                    <td class="ir_w_31"></td>
                    <td class="ir_w_35"></td>
                    <td class="ir_w_31"></td>
                </tr>
                <tr>
                    <th class="ir_w_35"><?php echo lang('discount'); ?></th>
                    <th class="ir_w_31"><?php echo lang('count'); ?></th>
                    <th class="ir_w_31"><?php echo lang('amount'); ?></th>
                </tr>
                <tr>
                    <td class="ir_w_35"><?php echo lang('discount'); ?></td>
                    <td class="ir_w_31"><?php echo (($total_discount_counter->total_count));?></td>
                    <td class="ir_w_35"><?php echo getAmtPCustom($total_discount_counter->total_discount)?></td>
                </tr>

                <tr>
                    <td class="ir_w2_txt_center"></td>
                    <td class="ir_w_31"></td>
                    <td class="ir_w_35"></td>
                    <td class="ir_w_31"></td>
                </tr>
                <tr>
                    <th class="ir_w_35"><?php echo lang('Services'); ?></th>
                    <th class="ir_w_31"><?php echo lang('orders'); ?></th>
                    <th class="ir_w_31"><?php echo lang('net_sales'); ?></th>
                </tr>
                <tr>
                    <td class="ir_w_35"><?php echo lang('Breakfast'); ?></td>
                    <td class="ir_w_31"><?php echo ((isset($foodMenuSaleByServiceZReport1->total_sale)?$foodMenuSaleByServiceZReport1->total_sale:'0'));?></td>
                    <td class="ir_w_35"><?php echo getAmtPCustom(isset($foodMenuSaleByServiceZReport1->net_sales)?$foodMenuSaleByServiceZReport1->net_sales:0)?></td>
                </tr>
                <tr>
                    <td class="ir_w_35"><?php echo lang('Lunch'); ?></td>
                    <td class="ir_w_31"><?php echo ((isset($foodMenuSaleByServiceZReport2->total_sale)?$foodMenuSaleByServiceZReport2->total_sale:'0'));?></td>
                    <td class="ir_w_35"><?php echo getAmtPCustom(isset($foodMenuSaleByServiceZReport2->net_sales)?$foodMenuSaleByServiceZReport2->net_sales:0)?></td>
                </tr>
                <tr>
                    <td class="ir_w_35"><?php echo lang('Dinner'); ?></td>
                    <td class="ir_w_31"><?php echo ((isset($foodMenuSaleByServiceZReport3->total_sale)?$foodMenuSaleByServiceZReport3->total_sale:'0'));?></td>
                    <td class="ir_w_35"><?php echo getAmtPCustom(isset($foodMenuSaleByServiceZReport3->net_sales)?$foodMenuSaleByServiceZReport3->net_sales:0)?></td>
                </tr>
                <tr>
                    <td class="ir_w_35"><?php echo lang('LateNight'); ?></td>
                    <td class="ir_w_31"><?php echo ((isset($foodMenuSaleByServiceZReport4->total_sale)?$foodMenuSaleByServiceZReport4->total_sale:'0'));?></td>
                    <td class="ir_w_35"><?php echo getAmtPCustom(isset($foodMenuSaleByServiceZReport4->net_sales)?$foodMenuSaleByServiceZReport4->net_sales:0)?></td>
                </tr>

                <tr>
                    <td class="ir_w_31"></td>
                    <td class="ir_w_35"></td>
                    <td class="ir_w_31"></td>
                </tr>
                <tr>
                    <th class="ir_w_35"><?php echo lang('DeletedAmount'); ?></th>
                    <th class="ir_w_31"></th>
                    <th class="ir_w_31"><?php echo getAmtPCustom($total_deleted_counter->total_amount)?></th>
                </tr>
                <tr>
                    <th class="ir_w_35"><?php echo lang('Deletedordercount'); ?></th>
                    <th class="ir_w_31"></th>
                    <th class="ir_w_35"><?php echo (($total_deleted_counter->total_count));?></th>
                </tr>

                <tr>
                    <td class="ir_w_31"></td>
                    <td class="ir_w_35"></td>
                    <td class="ir_w_31"></td>
                </tr>
                <tr>
                    <th class="ir_w_35"><?php echo lang('VoidedAmount'); ?></th>
                    <th class="ir_w_31"></th>
                    <th class="ir_w_31"><?php echo getAmtPCustom($remove_counter1->total_amount)?></th>
                </tr>
                <tr>
                    <th class="ir_w_35"><?php echo lang('VoidedItemcount'); ?></th>
                    <th class="ir_w_31"></th>
                    <th class="ir_w_35"><?php echo (($remove_counter1->total_count));?></th>
                </tr>

                <tr>
                    <td class="ir_w_31"></td>
                    <td class="ir_w_35"></td>
                    <td class="ir_w_31"></td>
                </tr>
                <tr>
                    <th class="ir_w_35"><?php echo lang('CompsAmount'); ?></th>
                    <th class="ir_w_31"></th>
                    <th class="ir_w_31"><?php echo getAmtPCustom($remove_counter2->total_amount)?></th>
                </tr>
                <tr>
                    <th class="ir_w_35"><?php echo lang('CompsItemcount'); ?></th>
                    <th class="ir_w_31"></th>
                    <th class="ir_w_35"><?php echo (($remove_counter2->total_count));?></th>
                </tr>

                <tr>
                    <td class="ir_w_31"></td>
                    <td class="ir_w_35"></td>
                    <td class="ir_w_31"></td>
                </tr>
                <tr>
                    <th class="ir_w_35"><?php echo lang('Cash_Summery'); ?></th>
                    <th class="ir_w_31"></th>
                    <th class="ir_w_31"><?php echo lang('amount'); ?></th>
                </tr>

                <tr>
                    <td class="ir_w_35"><?php echo lang('OpenBalance'); ?></td>
                    <td class="ir_w_31"></td>
                    <td class="ir_w_31"><?php echo getAmtPCustom(isset($getOpeningBalanceAll)?$getOpeningBalanceAll:0)?></td>
                </tr>

                <tr>
                    <td class="ir_w_35"><?php echo lang('Cashin'); ?></td>
                    <td class="ir_w_31"></td>
                    <td class="ir_w_31"><?php echo getAmtPCustom(isset($getCashSalePaymentZReport)?$getCashSalePaymentZReport->total_amount:0)?></td>
                </tr>
                <tr style="color:#e1d207">
                    <td class="ir_w_35"><?php echo lang('Cashout'); ?></td>
                    <td class="ir_w_31"></td>
                    <td class="ir_w_31">-</td>
                </tr>

                <tr  style="color:#e1d207">
                    <td class="ir_w_35"><?php echo lang('TotalCash'); ?></td>
                    <td class="ir_w_31"></td>
                    <td class="ir_w_31">-</td>
                </tr>

                <tr>
                    <td class="ir_w_31"></td>
                    <td class="ir_w_35"></td>
                    <td class="ir_w_31"></td>
                </tr>

                <tr>
                    <th class="ir_w_35"><?php echo lang('CashExpenses'); ?></th>
                    <th class="ir_w_31"></th>
                    <td class="ir_w_31"><?php echo getAmtPCustom(isset($getCashExpensePaymentZReport)?$getCashExpensePaymentZReport->total_amount:0)?></td>
                </tr>

                <tr style="color:#e1d207">
                    <td class="ir_w_35"><?php echo lang('CashSalaryandTipsPayments'); ?></td>
                    <td class="ir_w_31"></td>
                    <td class="ir_w_31">-</td>
                </tr>

                <tr style="color:#e1d207">
                    <td class="ir_w_35"><?php echo lang('CashDrop'); ?></td>
                    <td class="ir_w_31"></td>
                    <td class="ir_w_31">-</td>
                </tr>
                <tr style="color:#e1d207">
                    <td class="ir_w_35"><?php echo lang('TotalCash'); ?></td>
                    <td class="ir_w_31"></td>
                    <td class="ir_w_31">-</td>
                </tr>


                <tr>
                    <td class="ir_w_31"></td>
                    <td class="ir_w_35"></td>
                    <td class="ir_w_31"></td>
                </tr>

                <tr>
                    <th class="ir_w_35"><?php echo lang('Paymentsummery'); ?></th>
                    <th class="ir_w_31"></th>
                    <th class="ir_w_31"><?php echo lang('amount'); ?></th>
                </tr>
                <?php foreach ($get_all_sale_payment as $value):?>
                    <tr>
                        <td class="ir_w_35"><?php echo $value->name?></td>
                        <td class="ir_w_31"></td>
                        <td class="ir_w_31"><?php echo getAmtPCustom($value->total_amount)?></td>
                    </tr>
                <?php endforeach;?>
                <tr>
                    <td class="ir_w_31"></td>
                    <td class="ir_w_35"></td>
                    <td class="ir_w_31"></td>
                </tr>
                <tr>
                    <th class="ir_w_35"><?php echo lang('FoodCostcalculation'); ?></th>
                    <th class="ir_w_31"></th>
                    <th class="ir_w_31"><?php echo lang('amount'); ?></th>
                </tr>
                <?php
                $total_cost = isset($foodMenuSaleByCostZReport->total_cost) && $foodMenuSaleByCostZReport->total_cost?$foodMenuSaleByCostZReport->total_cost:0;
                $total_g_sale = isset($totals_sale_others->total_payable) && $totals_sale_others->total_payable?$totals_sale_others->total_payable:0;
                if(!$total_g_sale){
                    $total_p = 0;
                }else{
                    $total_p = ($total_cost/$total_g_sale)*100;
                }


                ?>
                <tr>
                    <td class="ir_w_35"><?php echo lang('AllFoodCosts'); ?></td>
                    <td class="ir_w_31"></td>
                    <td class="ir_w_31"><?php echo getAmtPCustom(isset($total_cost)?$total_cost:0)?></td>
                </tr>

                <tr>
                    <td class="ir_w_35"><?php echo lang('GrossSales'); ?></td>
                    <td class="ir_w_31"></td>
                    <td class="ir_w_31"><?php echo getAmtPCustom(isset($total_g_sale)?$total_g_sale:0)?></td>
                </tr>
                <tr>
                    <td class="ir_w_35"><?php echo lang('FoodCostpercentage'); ?></td>
                    <td class="ir_w_31"></td>
                    <td class="ir_w_31"><?php echo getAmtPCustom(isset($total_p)?$total_p:0)?>%</td>
                </tr>

                <tr>
                    <td class="ir_w_31"></td>
                    <td class="ir_w_35"></td>
                    <td class="ir_w_31"></td>
                </tr>

                <tr>
                    <th class="ir_w_35"><?php echo lang('Guestcount'); ?></th>
                    <th class="ir_w_31"></th>
                    <th class="ir_w_31"><?php echo $totals_sale_others->total_guest; ?></th>
                </tr>

                <tr>
                    <td class="ir_w_31"></td>
                    <td class="ir_w_35"></td>
                    <td class="ir_w_31"></td>
                </tr>
                <tr>
                    <th class="ir_w_35"><?php echo lang('FoodMenuCategory'); ?></th>
                    <th class="ir_w_31"><?php echo lang('count'); ?></th>
                    <th class="ir_w_31"><?php echo lang('net_sales'); ?></th>
                </tr>
                <?php foreach ($foodMenuSaleByCatZReport as $value):?>
                    <tr>
                        <td class="ir_w_35"><?php echo $value->category_name?></td>
                        <td class="ir_w_35"><?php echo $value->totalQty?></td>
                        <td class="ir_w_31"><?php echo getAmtPCustom($value->net_sales)?></td>
                    </tr>
                <?php endforeach;?>


                <tr>
                    <td class="ir_w_31"></td>
                    <td class="ir_w_35"></td>
                    <td class="ir_w_31"></td>
                </tr>
                <tr>
                    <th class="ir_w_35"><?php echo lang('WaiterSummary'); ?>(<?php echo lang('Countoforders'); ?>)</th>
                    <th class="ir_w_31"><?php echo lang('Numberofworkinghours'); ?></th>
                    <th class="ir_w_31"><?php echo lang('Discount'); ?> &nbsp; &nbsp; &nbsp;<?php echo lang('Total'); ?></th>
                </tr>
                <?php foreach ($totalWaiterSaleSummery as $value):?>
                    <tr>
                        <td class="ir_w_35"><?php echo $value->full_name?>(<?php echo $value->total_sale?>)</td>
                        <td class="ir_w_35"><?php echo $value->total_working_hours?></td>
                        <td class="ir_w_31"><?php echo getAmtPCustom($value->total_discount)?> &nbsp; &nbsp; &nbsp;<?php echo getAmtPCustom($value->total_payable)?></td>
                    </tr>
                <?php endforeach;?>
                </tbody>
            </table>

        </div>
        <div class="ir_clear"></div>
    </div>

    <div id="buttons"  class="no-print ir_pt_tr">
        <hr>
        <span class="pull-right col-xs-12">
                <button onclick="window.print();" class="btn btn-block btn-primary"><?php echo lang('print'); ?></button> </span>
        <div class="ir_clear"></div>
        <div class="col-xs-12 ir_bg_p_c_red">
            <p class="ir_font_txt_transform_none">
                Please follow these steps before you print for first time:
            </p>
            <p class="ir_font_capitalize">
                1. Disable Header and Footer in browser's print setting<br>
                For Firefox: File &gt; Page Setup &gt; Margins &amp; Header/Footer &gt; Headers & Footers &gt; Make
                all --blank--<br>
                For Chrome: Menu &gt; Print &gt; Uncheck Header/Footer in More Options
            </p>
        </div>
        <div class="ir_clear"></div>
    </div>
</div>
<script src="<?php echo base_url(); ?>assets/dist/js/print/jquery-2.0.3.min.js"></script>
<script src="<?php echo base_url(); ?>assets/dist/js/print/custom.js"></script>
</body>

</html>