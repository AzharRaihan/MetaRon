<?php
/*
  ###########################################################
  # PRODUCT NAME: 	iRestora PLUS - Next Gen Restaurant POS
  ###########################################################
  # AUTHER:		Doorsoft
  ###########################################################
  # EMAIL:		info@doorsoft.co
  ###########################################################
  # COPYRIGHTS:		RESERVED BY Door Soft
  ###########################################################
  # WEBSITE:		http://www.doorsoft.co
  ###########################################################
  # This is Report Controller
  ###########################################################
 */

defined('BASEPATH') OR exit('No direct script access allowed');

class Report extends Cl_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('Authentication_model');
        $this->load->model('Common_model');
        $this->load->model('Report_model');
        $this->load->model('Inventory_model');
        $this->load->model('Sale_model');
        $this->load->library('form_validation');
        $this->Common_model->setDefaultTimezone();
        
        if (!$this->session->has_userdata('user_id')) {
            redirect('Authentication/index');
        }

        //start check access function
        $segment_2 = $this->uri->segment(2);
        $controller = "";
        $function = "";
        if($segment_2!="todayReport"){
            if($segment_2=="registerReport"){
                $controller = "159";
                $function = "view";
            }elseif($segment_2=="getAllReports"){
                $controller = "400";
                $function = "view";
            }elseif($segment_2=="registerReportNew"){
                $controller = "401";
                $function = "view";
            }elseif( $segment_2=="dailySummaryReport" || $segment_2=="dailySummaryReportNew" || $segment_2 == "dailySummaryReportSales" || $segment_2=="dailySummaryReportSupplierDue" || $segment_2=="dailySummaryReportExpenses" || $segment_2=="expenseDailySummaryReportSupplierDue" || $segment_2=="dailySummaryReportCustomerDue" || $segment_2=="dailySummaryReportwastes"  || $segment_2=="printDailySummaryReport"   || $segment_2 == "foodMenuSalesNew"   ){
                $controller = "161";
                $function = "view";
            }elseif($segment_2=="foodMenuSales"){
                $controller = "163";
                $function = "view";
            }elseif($segment_2=="saleReportByDate" || $segment_2=="saleReportByDateNew"){
                $controller = "165";
                $function = "view";
            }elseif($segment_2=="detailedSaleReport" || $segment_2=="detailedSaleReportNew"){
                $controller = "167";
                $function = "view";
            }elseif($segment_2=="consumptionReport" || $segment_2=="consumptionReportMenuNew" || $segment_2=="consumptionReportModifierNew"){
                $controller = "169";
                $function = "view";
            }elseif($segment_2=="inventoryReport" || $segment_2=="inventoryReportNew" ){
                $controller = "171";
                $function = "view";
            }elseif($segment_2=="getInventoryAlertList" || $segment_2=="getInventoryAlertListNew"){
                $controller = "173";
                $function = "view";
            }elseif($segment_2=="profitLossReport"){
                $controller = "175";
                $function = "view";
            }elseif($segment_2=="attendanceReport" || $segment_2=="attendanceReportNew"){
                $controller = "179";
                $function = "view";
            }elseif($segment_2=="supplierLedgerReport" || $segment_2=="supplierReportNew" || $segment_2=="supplierReportNew2" || $segment_2=="supplierDueReportNew" ){
                $controller = "181";
                $function = "view";
            }elseif($segment_2=="supplierDueReport"){
                $controller = "183";
                $function = "view";
            }elseif($segment_2=="customerDueReport"|| $segment_2=="customerDueReportNew"){
                $controller = "185";
                $function = "view";
            }elseif($segment_2=="customerLedgerReport" || $segment_2=="customerReportNew" || $segment_2=="customerReportNewDue" ){
                $controller = "187";
                $function = "view";
            }elseif($segment_2=="purchaseReportByDate" || $segment_2=="purchaseReportByDateNew"){
                $controller = "189";
                $function = "view";
            }elseif($segment_2=="expenseReport" || $segment_2=="expenseReportNew"){
                $controller = "191";
                $function = "view";
            }elseif($segment_2=="wasteReport" || $segment_2=="wasteReportNew" || $segment_2=="wasteExpenseReportNew"){
                $controller = "193";
                $function = "view";
            }elseif($segment_2=="vatReport" || $segment_2=="vatReportNew"){
                $controller = "195";
                $function = "view";
            }elseif($segment_2=="foodMenuSaleByCategories" || $segment_2=="foodMenuSaleByCategoriesNew" || $segment_2=="foodMenuSaleByCategoriesExpenseNew" ){
                $controller = "197";
                $function = "view";
            }elseif($segment_2=="tipsReport"){
                $controller = "199";
                $function = "view";
            }elseif($segment_2=="auditLogReport"){
                $controller = "201";
                $function = "view";
            }elseif($segment_2=="availableLoyaltyPointReport"){
                $controller = "205";
                $function = "view";
            }elseif($segment_2=="usageLoyaltyPointReport"){
                $controller = "203";
                $function = "view";
            }elseif($segment_2=="transferReport"){
                $controller = "307";
                $function = "view";
            }elseif($segment_2=="zReport"){
                $controller = "314";
                $function = "view";
            }elseif($segment_2=="productAnalysisReport"){
                $controller = "332";
                $function = "view";
            }elseif($segment_2=="productionReport"){
                $controller = "337";
                $function = "view";
            }else{
                $this->session->set_flashdata('exception_er', lang('menu_not_permit_access'));
                redirect('Authentication/userProfile');
            }

            if(!checkAccess($controller,$function)){
                $this->session->set_flashdata('exception_er', lang('menu_not_permit_access'));
                redirect('Authentication/userProfile');
            }
        }


        //end check access function


        if (!$this->session->has_userdata('outlet_id')) {
            $this->session->set_flashdata('exception_2', 'Please click on green Enter button of an outlet');
            $this->session->set_userdata("clicked_controller", $this->uri->segment(1));
            $this->session->set_userdata("clicked_method", $this->uri->segment(2));
            redirect('Outlet/outlets');
        }

        $login_session['active_menu_tmp'] = '';
        $this->session->set_userdata($login_session);
    }


        /**
     * register Report
     * @access public
     * @return void
     * @param no
     */
    // public function getAllReports()
    // {
    //     $data = array();

    //     $outlet_id  = isset($_POST['outlet_id']) && $_POST['outlet_id']?$_POST['outlet_id']:'';
    //     if(!$outlet_id){
    //         $outlet_id = $this->session->userdata('outlet_id');
    //     }
    //     $data['outlet_id'] = $outlet_id;
    //     if ($this->input->post('submit')) {
    //         $start_date = date("Y-m-d", strtotime($this->input->post('startDate')));
    //         $end_date = date("Y-m-d", strtotime($this->input->post('endDate')));
    //         if($start_date=="" || $end_date==""){
    //             $start_date = date('Y-m-d');
    //             $end_date = date('Y-m-d');
    //         }
    //         $user_id = $this->input->post('user_id');
            

    //         $data['register_info'] = $this->Report_model->getRegisterInformation($start_date,$end_date,$user_id,$outlet_id);
    //         $data['start_date'] = $start_date;
    //         $data['end_date'] = $end_date;
    //         $data['user_id'] = $user_id;
    //     }
    //     $data['users'] = $this->Report_model->getUsers($outlet_id);
    //     $data['main_content'] = $this->load->view('report/registerReport', $data, TRUE);
    //     $this->load->view('userHome', $data);
    // }

    // separte page for reports client changes
    public function getAllReports(){

        $data = array();

        $outlet_id  = isset($_POST['outlet_id']) && $_POST['outlet_id']?$_POST['outlet_id']:'';
        if(!$outlet_id){
            $outlet_id = $this->session->userdata('outlet_id');
        }
        $data['outlet_id'] = $outlet_id;
        if ($this->input->post('submit')) {
            $start_date = date("Y-m-d", strtotime($this->input->post('startDate')));
            $end_date = date("Y-m-d", strtotime($this->input->post('endDate')));
            if($start_date=="" || $end_date==""){
                $start_date = date('Y-m-d');
                $end_date = date('Y-m-d');
            }
            $user_id = $this->input->post('user_id');

            $data['register_info'] = $this->Report_model->getRegisterInformation($start_date,$end_date,$user_id,$outlet_id);
            $data['start_date'] = $start_date;
            $data['end_date'] = $end_date;
            $data['user_id'] = $user_id;
        }
        $data['users'] = $this->Report_model->getUsers($outlet_id);
        $company_id = $this->session->userdata('company_id');

        $data['employees'] = $this->Common_model->getAllByCompanyIdForDropdown($company_id, "tbl_users");
        $data['ingredient_categories'] = $this->Common_model->getAllByCompanyIdForDropdown($company_id, "tbl_ingredient_categories");
        // $data['food_menu_categories'] = $this->Common_model->getAllByCompanyIdForDropdown($company_id, "tbl_ingredient_categories");
        $data['ingredients'] = $this->Inventory_model->getAllByCompanyIdForDropdown($company_id, 'tbl_ingredients');
        $data['foodMenus'] = $this->Sale_model->getAllFoodMenus();
        $data['expense_items'] = $this->Common_model->getAllByCompanyIdForDropdown($company_id, 'tbl_expense_items');
        $data['foodMenuCategories'] = $this->Common_model->getAllByCompanyIdForDropdown($company_id, "tbl_food_menu_categories");
        $data['suppliers'] = $this->Common_model->getAllByCompanyIdForDropdown($company_id, 'tbl_suppliers');
        $data['main_content'] = $this->load->view('report/getAllReports', $data, TRUE); 
        $this->load->view('userHome', $data);
    }


      /**
     * print Daily Summary Report
     * @access public
     * @return void
     * @param string
     */
    public function printDailySummaryReport($selectedDate = '',$outlet_id){
        $data = array(); 
        $data['result'] = $this->Report_model->dailySummaryReport($selectedDate,$outlet_id);
        $data['selectedDate'] = $selectedDate; 
        $data['outlet_id'] = $outlet_id;

        $this->load->view('report/printDailySummaryReport', $data); 
    }
      /**
     * daily Summary Report
     * @access public
     * @return void
     * @param no
     */
    public function dailySummaryReport() {
        $data = array();
        /*This variable could not be escaped because this is an array field*/
        $outlet_id  = isset($_POST['outlet_id']) && $_POST['outlet_id']?$_POST['outlet_id']:'';
        if(!$outlet_id){
            $outlet_id = $this->session->userdata('outlet_id');
        }
        $data['outlet_id'] = $outlet_id;

        if ($this->input->post('submit')) {
            if ($this->input->post('date')) {
                $selectedDate = date("Y-m-d", strtotime($this->input->post('date')));
            } else {
                $selectedDate = '';
            }
            $data['result'] = $this->Report_model->dailySummaryReport($selectedDate,$outlet_id);
            $data['selectedDate'] = $selectedDate;
 
        } else {
            $selectedDate = date("Y-m-d");
            $data['result'] = $this->Report_model->dailySummaryReport($selectedDate,$outlet_id);
            $data['selectedDate'] = $selectedDate;
        }
        $data['main_content'] = $this->load->view('report/dailySummaryReport', $data, TRUE);
        $this->load->view('userHome', $data);
    }


    public function dailySummaryReportNew() {

      $filter_data = $this->input->post('filter_data');
      parse_str($filter_data,$params);
      $selectedDate = ($params['date'] != '') ? $params['date'] : date("Y-m-d");

      $outlet_id  = isset($params['outlet_id']) && $params['outlet_id']?$params['outlet_id']:'';
      if(!$outlet_id){
          $outlet_id = $this->session->userdata('outlet_id');
      }

      $getallrecords = $this->Report_model->dailySummaryReport($selectedDate,$outlet_id);
      $purchases_res = $getallrecords['purchases'];

      $sum_of_gtotal = 0;
      $sum_of_paid = 0;
      $sum_of_due = 0;

      foreach ($purchases_res as $key => $value) {
          $sum_of_gtotal += $value->grand_total; 
          $sum_of_paid += $value->paid;  
          $sum_of_due += $value->due;  
          $key++;
        $datas[] = array(
            "sn"=> escape_output($key),
            "supplier_id" => escape_output(getSupplierNameById($value->supplier_id)),
            "reference_no" => escape_output($value->reference_no),
            "grand_total" => escape_output(getAmt($value->grand_total)),
            "paid" => escape_output(getAmt($value->paid)),
            "due" => escape_output(getAmt($value->due)),
        );
      }
      if (empty($datas)) {
          $datas = array();
      }

      $data = array( 
          "data" => $datas, 
          "sum_of_gtotal" => $sum_of_gtotal,
          "sum_of_paid" => $sum_of_paid,
          "sum_of_due" => $sum_of_due,
      );

      echo json_encode($data);

    }


    public function dailySummaryReportSales() {
      $filter_data = $this->input->post('filter_data');
      parse_str($filter_data,$params);
      $selectedDate = ($params['date'] != '') ? $params['date'] : date("Y-m-d");
      $outlet_id  = isset($params['outlet_id']) && $params['outlet_id']?$params['outlet_id']:'';
      if(!$outlet_id){
          $outlet_id = $this->session->userdata('outlet_id');
      }
      $getallrecords = $this->Report_model->dailySummaryReport($selectedDate,$outlet_id);
      $purchases_res = $getallrecords['sales'];
      $sum_of_stotal_payable = 0;
      $sum_of_sdisc_actual = 0;
      $sum_of_spaid_amount = 0;
      $sum_of_sdue_amount = 0;
      foreach ($purchases_res as $key => $value) {
        $sum_of_stotal_payable += $value->total_payable; 
        $sum_of_sdisc_actual += $value->total_discount_amount;
        $sum_of_spaid_amount += $value->paid_amount;  
        $sum_of_sdue_amount += $value->due_amount;  
        $key++;
        $datas[] = array(
            "sn"=> escape_output($key),
            "sale_no" => escape_output($value->sale_no),
            "order_type" => getOrderType($value->order_type),
            "table_id" =>  (!empty($value->table_id)) ? getTableName($value->table_id) : '',
            "customer_id" => getCustomerName($value->customer_id),
            "total_payable" => escape_output(getAmt($value->total_payable)),
            "total_discount_amount" => escape_output(getAmt($value->total_discount_amount)),
            "paid_amount" => escape_output(getAmt($value->paid_amount)),
            "due_amount" => escape_output(getAmt($value->due_amount)),

        );
      }
      if (empty($datas)) {
          $datas = array();
      }
      $data = array( 
          "data" => $datas, 
          "sum_of_stotal_payable" => round($sum_of_stotal_payable,2),
          "sum_of_sdisc_actual" => round($sum_of_sdisc_actual,2),
          "sum_of_spaid_amount" => round($sum_of_spaid_amount,2),
          "sum_of_sdue_amount" => round($sum_of_sdue_amount,2),
      );
      echo json_encode($data);
    }

    public function dailySummaryReportSupplierDue() {
      $filter_data = $this->input->post('filter_data');
      parse_str($filter_data,$params);
      $selectedDate = ($params['date'] != '') ? $params['date'] : date("Y-m-d");
      $outlet_id  = isset($params['outlet_id']) && $params['outlet_id']?$params['outlet_id']:'';
      if(!$outlet_id){
          $outlet_id = $this->session->userdata('outlet_id');
      }
      $getallrecords = $this->Report_model->dailySummaryReport($selectedDate,$outlet_id);
      $purchases_res = $getallrecords['supplier_due_payments'];

      $sum_of_eamount = 0; 

      foreach ($purchases_res as $key => $value) {
        $sum_of_eamount += $value->amount;  
        $key++;
        $datas[] = array(
            "sn"=> escape_output($key),
            "amount" => escape_output(getAmt($value->amount)),
            "supplier_id" => getSupplierNameById($value->supplier_id),
            "note" => escape_output($value->note),
        );
      }
      if (empty($datas)) {
          $datas = array();
      }
      $data = array( 
          "data" => $datas, 
          "sum_of_eamount" => round($sum_of_eamount,2),
      );
      echo json_encode($data);
    }

    public function dailySummaryReportExpenses() {
      $filter_data = $this->input->post('filter_data');
      parse_str($filter_data,$params);
      $selectedDate = ($params['date'] != '') ? $params['date'] : date("Y-m-d");
      $outlet_id  = isset($params['outlet_id']) && $params['outlet_id']?$params['outlet_id']:'';
      if(!$outlet_id){
          $outlet_id = $this->session->userdata('outlet_id');
      }
      $getallrecords = $this->Report_model->dailySummaryReport($selectedDate,$outlet_id);
      $purchases_res = $getallrecords['expenses'];

      $sum_of_eamount = 0; 

      foreach ($purchases_res as $key => $value) {
        $sum_of_eamount += $value->amount;  
        $key++;
        $datas[] = array(
            "sn"=> escape_output($key),
            "amount" => escape_output(getAmt($value->amount)),
            "category_id" => expenseItemName($value->category_id),
            "employee_id" => employeeName($value->employee_id),
            "note" =>  escape_output($value->note),
        );
      }
      if (empty($datas)) {
          $datas = array();
      }
      $data = array( 
          "data" => $datas, 
          "sum_of_eamount" => round($sum_of_eamount,2),
      );
      echo json_encode($data);
    }

    public function expenseDailySummaryReportSupplierDue() {

      $outlet_id  = isset($params['outlet_id']) && $params['outlet_id']?$params['outlet_id']:'';
      if(!$outlet_id){
          $outlet_id = $this->session->userdata('outlet_id');
      }
      $getallrecords = $this->Report_model->expenseDailySummaryReport($outlet_id);
      $purchases_res = $getallrecords['supplier_due_payments'];

      $sum_of_eamount = 0; 

      foreach ($purchases_res as $key => $value) {
        $sum_of_eamount += $value->amount;  
        $delete_url = base_url().'SupplierPayment/deleteSupplierPayment/1';
        $key++;

        $dataid = $value->id;        
        $delete_button = "<button id='delete_btn_sp_due' title='Delete' data-id=$dataid class='btn_list m-right btn bg-blue-btn'> <span class='fa fa-trash'></span></button>";

        $datas[] = array(
            "sn"=> escape_output($key),
            "date" => date("Y-m-d", strtotime($value->date)),
            "amount" => escape_output(getAmt($value->amount)),
            "supplier_id" => getSupplierNameById($value->supplier_id),
            "note" => escape_output($value->note),
            "added_by" => '',
            "actions" => $delete_button,
        );
      }

      if (empty($datas)) {
          $datas = array();
      }
      $data = array( 
          "data" => $datas,
      );
      echo json_encode($data);
    }


    public function dailySummaryReportCustomerDue() {
      $filter_data = $this->input->post('filter_data');
      parse_str($filter_data,$params);
      $selectedDate = ($params['date'] != '') ? $params['date'] : date("Y-m-d");
      $outlet_id  = isset($params['outlet_id']) && $params['outlet_id']?$params['outlet_id']:'';
      if(!$outlet_id){
          $outlet_id = $this->session->userdata('outlet_id');
      }
      $getallrecords = $this->Report_model->dailySummaryReport($selectedDate,$outlet_id);
      $purchases_res = $getallrecords['customer_due_receives'];

      $sum_of_eamount = 0; 

      foreach ($purchases_res as $key => $value) {
        $sum_of_eamount += $value->amount;  
        $key++;
        $datas[] = array(
            "sn"=> escape_output($key), 
            "amount" => escape_output(getAmt($value->amount)),
            "customer_id" => employeeName($value->customer_id),
            "note" => escape_output($value->note),
        );
      }
      if (empty($datas)) {
          $datas = array();
      }
      $data = array( 
          "data" => $datas, 
          "sum_of_eamount" => round($sum_of_eamount,2),
      );
      echo json_encode($data);
    }



    public function dailySummaryReportwastes() {
      $filter_data = $this->input->post('filter_data');
      parse_str($filter_data,$params);
      $selectedDate = ($params['date'] != '') ? $params['date'] : date("Y-m-d");
      $outlet_id  = isset($params['outlet_id']) && $params['outlet_id']?$params['outlet_id']:'';
      if(!$outlet_id){
          $outlet_id = $this->session->userdata('outlet_id');
      }
      $getallrecords = $this->Report_model->dailySummaryReport($selectedDate,$outlet_id);
      $purchases_res = $getallrecords['wastes'];

      $sum_of_eamount = 0; 

      foreach ($purchases_res as $key => $value) {
        $sum_of_eamount += $value->total_loss;  
        $key++;
        $datas[] = array(
            "sn"=> escape_output($key),
            "reference_no" => escape_output($value->reference_no),
            "total_loss" => escape_output(getAmt($value->total_loss)),
            "employee_id" => employeeName($value->employee_id),
            "note" => escape_output($value->note),
        );
      }
      if (empty($datas)) {
          $datas = array();
      }
      $data = array( 
          "data" => $datas, 
          "sum_of_eamount" => round($sum_of_eamount,2),
      );
      echo json_encode($data);
    }


    public function foodMenuSalesNew()
    {
      $filter_data = $this->input->post('filter_data');

      parse_str($filter_data,$params);
      $start_date = $params['startDate'];
      $end_date = $params['endDate']; 

      $outlet_id  = isset($params['outlet_id']) && $params['outlet_id']?$params['outlet_id']:'';

      if(!$outlet_id){
        $outlet_id = $this->session->userdata('outlet_id');
      }

      $getallrecords = $this->Report_model->foodMenuSalesNew($start_date, $end_date,$outlet_id);
 
      $json_encode['data'] = $getallrecords;
      echo json_encode($json_encode);
    }

    public function zReport() {
        $data = array();
        $outlet_id  = isset($_POST['outlet_id']) && $_POST['outlet_id']?$_POST['outlet_id']:'';
        if(!$outlet_id){
            $outlet_id = $this->session->userdata('outlet_id');
        }
        $data['outlet_id'] = $outlet_id;
        $selected_submit_post = $this->input->post('date');
        $selectedDate = (isset($selected_submit_post) && $selected_submit_post?$selected_submit_post:date("Y-m-d"));
        $data['sub_total_foods'] = $this->Report_model->sub_total_foods($selectedDate,$outlet_id);
        $data['sub_total_modifiers'] = $this->Report_model->sub_total_modifiers($selectedDate,$outlet_id);
        $data['totalDueReceived'] = $this->Report_model->totalDueReceived($selectedDate,$outlet_id);
        $data['service_charge_foods'] = $this->Report_model->delivery_charge_foods($selectedDate,$outlet_id,'service');
        $data['delivery_charge_foods'] = $this->Report_model->delivery_charge_foods($selectedDate,$outlet_id,'delivery');
        $data['waiter_tips_foods'] = $this->Report_model->waiter_tips_foods($selectedDate,$outlet_id);
        $data['taxes_foods'] = $this->Report_model->taxes_foods($selectedDate,$outlet_id);
        $data['total_discount_amount_foods'] = $this->Report_model->total_discount_amount_foods($selectedDate,$outlet_id);
        $data['totalFoodSales'] = $this->Report_model->totalFoodSales($selectedDate,$selectedDate,$outlet_id,"DESC");
        $data['totalFoodModifierSales'] = $this->Report_model->totalFoodModifierSales($selectedDate,$outlet_id,"DESC");
        $data['totals_sale_others'] = $this->Report_model->totalTaxDiscountChargeTips($selectedDate,$outlet_id);
        $data['totals_sale_service'] = $this->Report_model->totalCharge($selectedDate,$outlet_id,"service");
        $data['totals_sale_delivery'] = $this->Report_model->totalCharge($selectedDate,$outlet_id,"delivery");
        $data['get_all_sale_payment'] = $this->Report_model->getAllSalePaymentZReport($selectedDate,$outlet_id);
        $data['get_all_other_sale_payment'] = $this->Report_model->getAllOtherSalePaymentZReport($selectedDate,$outlet_id);
        $data['getAllPurchasePaymentZreport'] = $this->Report_model->getAllPurchasePaymentZreport($selectedDate,$outlet_id);
        $data['getAllExpensePaymentZreport'] = $this->Report_model->getAllExpensePaymentZreport($selectedDate,$outlet_id);
        $data['getAllSupplierPaymentZreport'] = $this->Report_model->getAllSupplierPaymentZreport($selectedDate,$outlet_id);
        $data['getAllCustomerDueReceiveZreport'] = $this->Report_model->getAllCustomerDueReceiveZreport($selectedDate,$outlet_id);


        $data['registers'] = getAllPaymentMethods('no');

        $array_p_name = array();

        foreach ($data['registers'] as $ky=>$vl){
            $data['registers'][$ky]->paid_sales = $this->Report_model->getAllSaleByPayment($selectedDate,$vl->id,$outlet_id);
            $data['registers'][$ky]->purchase = $this->Report_model->getAllPurchaseByPayment($selectedDate,$vl->id,$outlet_id);
            $data['registers'][$ky]->due_receive = $this->Report_model->getAllDueReceiveByPayment($selectedDate,$vl->id,$outlet_id);
            $data['registers'][$ky]->due_payment = $this->Report_model->getAllDuePaymentByPayment($selectedDate,$vl->id,$outlet_id);
            $data['registers'][$ky]->expense = $this->Report_model->getAllExpenseByPayment($selectedDate,$vl->id,$outlet_id);

            $inline_total = $data['registers'][$ky]->paid_sales - $data['registers'][$ky]->purchase + $data['registers'][$ky]->due_receive - $data['registers'][$ky]->due_payment - $data['registers'][$ky]->expense;
            $data['registers'][$ky]->inline_total = $inline_total;

            $array_p_name[] = $vl->name."||".$inline_total;
        }
        $data['total_payments'] = $array_p_name;
        $data['selectedDate'] = $selectedDate;
        $data['main_content'] = $this->load->view('report/zReport', $data, TRUE);
        $this->load->view('userHome', $data);
    }
        /**
     * register Report
     * @access public
     * @return void
     * @param no
     */
    public function registerReport()
    {
        $data = array();

        $outlet_id  = isset($_POST['outlet_id']) && $_POST['outlet_id']?$_POST['outlet_id']:'';
        if(!$outlet_id){
            $outlet_id = $this->session->userdata('outlet_id');
        }
        $data['outlet_id'] = $outlet_id;
        if ($this->input->post('submit')) {
            $start_date = date("Y-m-d", strtotime($this->input->post('startDate')));
            $end_date = date("Y-m-d", strtotime($this->input->post('endDate')));
            if($start_date=="" || $end_date==""){
                $start_date = date('Y-m-d');
                $end_date = date('Y-m-d');
            }
            $user_id = $this->input->post('user_id');
            

            $data['register_info'] = $this->Report_model->getRegisterInformation($start_date,$end_date,$user_id,$outlet_id);
            $data['start_date'] = $start_date;
            $data['end_date'] = $end_date;
            $data['user_id'] = $user_id;
        }
        $data['users'] = $this->Report_model->getUsers($outlet_id);
        $data['main_content'] = $this->load->view('report/registerReport', $data, TRUE);
        $this->load->view('userHome', $data);
    }


    public function registerReportNew()
    {

      $filter_data = $this->input->post('filter_data');
      parse_str($filter_data,$params);
      $start_date = $params['startDate'];
      $end_date = $params['endDate'];
      $user_id = $params['user_id'];

      $outlet_id  = isset($params['outlet_id']) && $params['outlet_id']?$params['outlet_id']:'';
      if(!$outlet_id){
        $outlet_id = $this->session->userdata('outlet_id');
      }

      $getallrecords = $this->Report_model->getRegisterInformation($start_date,$end_date,$user_id,$outlet_id);

      $i=1;
      foreach ($getallrecords as $key => $value) {

          $key++;
          $payment_methods_sale = json_decode($value->payment_methods_sale);
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

        $datas[] = array(
            "key" => $i ,
            "opening_balance_date_time" => $value->opening_balance_date_time ?? "-",
            "opening_balance" =>  $value->opening_balance ?? '-',
            "sale_paid_amount" => isset($value->sale_paid_amount) ? getAmtP($value->sale_paid_amount) : '-',
            "customer_due_receive" => isset($value->customer_due_receive) ? getAmtP($value->customer_due_receive)  : '-',
            "closing_balance_date_time" =>  $value->closing_balance_date_time ?? '-',
            "closing_balance" => isset($value->closing_balance) ? getAmtP($value->closing_balance) : '-',
            "html_p" => $html_p,
        );
        $i++;
      }
 
      if (empty($datas)) {
          $datas = array();
      }
      $data = array( 
          "data" => $datas 
      );
      echo json_encode($data);
    }
    

      /**
     * today Report
     * @access public
     * @return void
     * @param no
     */
    public function todayReport() {
        $data = array();
        $data['dailySummaryReport'] = $this->Report_model->todaySummaryReport('');
        echo json_encode($data['dailySummaryReport']);
    }
      /**
     * today Report Cash Status
     * @access public
     * @return void
     * @param no
     */
    public function todayReportCashStatus() {
        echo json_encode('');
    }
      /**
     * inventory Report
     * @access public
     * @return void
     * @param no
     */
    public function inventoryReport() {
        $data = array();
        $ingredient_id = $this->input->post('ingredient_id');
        $category_id = $this->input->post('category_id');
        $food_id = $this->input->post('food_id');
        $data['ingredient_id'] = $ingredient_id;
        $data['category_id'] = $category_id;
        $data['food_id'] = $food_id;

        $outlet_id  = isset($_POST['outlet_id']) && $_POST['outlet_id']?$_POST['outlet_id']:'';
        if(!$outlet_id){
            $outlet_id = $this->session->userdata('outlet_id');
        }
        $data['outlet_id'] = $outlet_id;
        $company_id = $this->session->userdata('company_id');
        $data['ingredient_categories'] = $this->Common_model->getAllByCompanyIdForDropdown($company_id, "tbl_ingredient_categories");
        $data['ingredients'] = $this->Report_model->getInventory($category_id, $ingredient_id, $food_id,$outlet_id);
        $data['foodMenus'] = $this->Sale_model->getAllFoodMenus();
        $data['inventory'] = $this->Report_model->getInventory($category_id, $ingredient_id, $food_id,$outlet_id);

        $data['main_content'] = $this->load->view('report/inventoryReport', $data, TRUE);
        $this->load->view('userHome', $data);
    }

    public function inventoryReportNew() {
 
      $filter_data = $this->input->post('filter_data');
      parse_str($filter_data,$params);
 
        $ingredient_id = $params['ingredient_id'] ?? 0;
        $category_id = $params['category_id'] ?? 0;
        $food_id = $params['food_id'] ?? 0;
        // $data['ingredient_id'] = $ingredient_id;
        // $data['category_id'] = $category_id;
        // $data['food_id'] = $food_id;

        $outlet_id  = isset($params['outlet_id']) && $params['outlet_id']?$params['outlet_id']:'';
        if(!$outlet_id){
            $outlet_id = $this->session->userdata('outlet_id');
        }
        // $data['outlet_id'] = $outlet_id;
        $company_id = $this->session->userdata('company_id');
        // $data['ingredient_categories'] = $this->Common_model->getAllByCompanyIdForDropdown($company_id, "tbl_ingredient_categories");
        // $data['foodMenus'] = $this->Sale_model->getAllFoodMenus();
        // $data['inventory'] = $this->Report_model->getInventory($category_id, $ingredient_id, $food_id,$outlet_id);
        $getallrecords = $this->Report_model->getInventoryNew($category_id, $ingredient_id, $food_id,$outlet_id);
          $grandTotal = 0;
          foreach ($getallrecords as $key => $value) {

            $last_purchase_price = getLastPurchaseAmount($value->id);
            $totalStock = $value->total_purchase - $value->total_consumption - $value->total_modifiers_consumption - $value->total_waste + $value->total_consumption_plus - $value->total_consumption_minus + $value->total_transfer_plus  - $value->total_transfer_minus  +  $value->total_transfer_plus_2  -  $value->total_transfer_minus_2;
            $totalTK = $totalStock * $last_purchase_price;
            if ($totalStock >= 0) {
                $grandTotal = $grandTotal + $totalStock * $last_purchase_price;
            }
            $key++;

            $style_color  =  '';
            if($totalStock <= $value->alert_quantity){ 
              $style_color = 'color:red';
            }
  
            $datas[] = array(
                "id" => escape_output($key),
                "code" => escape_output($value->name . "(" . $value->code . ")"), 
                "category" => escape_output($value->category_name),
                "stock_cost" =>  "<span style='$style_color'>".($totalStock) ? getAmtP($totalStock) : getAmtP(0) ." ". escape_output($value->unit_name) ." </span>",
                "total_stock" => "<span style='$style_color'>".($totalStock) ? getAmtP($totalStock * $last_purchase_price) : getAmtP(0)." </span>",
                "alert_quantity" => escape_output(getAmtP($value->alert_quantity) . " " . $value->unit_name),
            );
          }
          // $data['outlet_id'] = $outlet_id;
          // $data['user_id'] = $user_id;
          // $data['waiter_id'] = $waiter_id;
          // $data['start_date'] = $start_date;
          // $data['end_date'] = $end_date;
          if (empty($datas)) {
              $datas = array();
          }
            // $data = array(
            //     "data" => $datas,
            // );
        $json_encode['data'] = $datas;
        echo json_encode($json_encode);
    }


      /**
     * sale Report By Month
     * @access public
     * @return void
     * @param no
     */
    public function saleReportByMonth() {
        $data = array();
        $company_id = $this->session->userdata('company_id');
        if ($this->input->post('submit')) {
            $start_date =htmlspecialchars($this->input->post($this->security->xss_clean('startMonth')));
            $end_date =htmlspecialchars($this->input->post($this->security->xss_clean('endMonth')));
            $user_id =htmlspecialchars($this->input->post($this->security->xss_clean('user_id')));
            $data['user_id'] = $user_id;
            if ($start_date && $end_date) {
                $start_date = date('Y-m', strtotime($this->input->post($this->security->xss_clean('startMonth'))));
                $start_date = $start_date . '-' . '01';
                $data['start_date'] = $start_date;
                $end_date = date('Y-m', strtotime($this->input->post($this->security->xss_clean('endMonth'))));
                $month = date('m', strtotime($this->input->post($this->security->xss_clean('endMonth'))));
                $finalDayByMonth = $this->Report_model->getLastDayInDateMonth($month);
                $end_date = $end_date . '-' . $finalDayByMonth;
                $data['end_date'] = $end_date;
            }
            if ($start_date && !$end_date) {
                $start_date = date('Y-m', strtotime($this->input->post($this->security->xss_clean('startMonth'))));
                $month = date('m', strtotime($this->input->post($this->security->xss_clean('startMonth'))));
                $finalDayByMonth = $this->Report_model->getLastDayInDateMonth($month);
                $temp = $start_date . '-' . $finalDayByMonth;
                $start_date = $start_date . '-' . '01';
                $end_date = $temp;
                $data['start_date'] = $start_date;
                $data['end_date'] = $temp;
            }
            if (!$start_date && $end_date) {
                $end_date = date('Y-m', strtotime($this->input->post($this->security->xss_clean('endMonth'))));
                $temp = $end_date . '-' . '01';
                $start_date = $temp;
                $month = date('m', strtotime($this->input->post($this->security->xss_clean('endMonth'))));
                $finalDayByMonth = $this->Report_model->getLastDayInDateMonth($month);
                $end_date = $end_date . '-' . $finalDayByMonth;
                $data['start_date'] = $temp;
                $data['end_date'] = $end_date;
            }
            $data['saleReportByMonth'] = $this->Report_model->saleReportByMonth($start_date, $end_date, $user_id);
        }


        $data['users'] = $this->Common_model->getAllByCompanyIdForDropdown($company_id, 'tbl_users');
        $data['main_content'] = $this->load->view('report/saleReportByMonth', $data, TRUE);
        $this->load->view('userHome', $data);
    }
      /**
     * vat Report
     * @access public
     * @return void
     * @param no
     */
    public function vatReport()
    {
        $data = array();
        if ($this->input->post('submit')) {
            $outlet_id = isset($_POST['outlet_id']) && $_POST['outlet_id'] ? $_POST['outlet_id'] : '';
            if (!$outlet_id) {
                $outlet_id = $this->session->userdata('outlet_id');
            }
            $data['outlet_id'] = $outlet_id;
            $start_date = htmlspecialchars($this->input->post($this->security->xss_clean('startDate')));
            $data['start_date'] = $start_date;
            $end_date = htmlspecialchars($this->input->post($this->security->xss_clean('endDate')));
            $data['end_date'] = $end_date;
            $data['vatReport'] = $this->Report_model->vatReport($start_date, $end_date, $outlet_id);
        }
        $data['main_content'] = $this->load->view('report/vatReport', $data, TRUE);
        $this->load->view('userHome', $data);
    }


    public function vatReportNew() {
      $filter_data = $this->input->post('filter_data');
      parse_str($filter_data,$params);
      $start_date = $params['startDate'];
      $end_date = $params['endDate'];

      // if ($this->input->post('submit')) {
      $outlet_id  = isset($params['outlet_id']) && $params['outlet_id']?$params['outlet_id']:'';
      if(!$outlet_id){
          $outlet_id = $this->session->userdata('outlet_id');
      }
      // $data['outlet_id'] = $outlet_id;
      // $start_date =htmlspecialchars($this->input->post($this->security->xss_clean('startDate')));
      // $data['start_date'] = $start_date;
      // $end_date =htmlspecialchars($this->input->post($this->security->xss_clean('endDate')));
      // $data['end_date'] = $end_date;
      $getallrecords = $this->Report_model->vatReportNew($start_date, $end_date,$outlet_id);

      $grandTotal = 0;
      $vatTotal = 0;

      foreach ($getallrecords as $key => $value) {
        $grandTotal+=$value->total_payable;
        $vatTotal+=$value->total_vat;
        $key++;
        $datas[] = array( 
                  "sn" => escape_output($key--) ,
                  "sale_date" => escape_output(date($this->session->userdata('date_format'), strtotime($value->sale_date))) ,
                  "total_payable" => escape_output(getAmt($value->total_payable)),
                  "total_vat" => escape_output(getAmt($value->total_vat)),
                );  
      }

      if (empty($datas)) {
          $datas = array();
      }

      // $datas['users'] = $this->Report_model->getUsers($outlet_id);
      $data = array( 
          "data" => $datas, 
      );
       
    echo json_encode($data);

        // }
        // $data['main_content'] = $this->load->view('report/vatReport', $data, TRUE);
        // $this->load->view('userHome', $data);
    }

      /**
     * vat Report
     * @access public
     * @return void
     * @param no
     */
    public function tipsReport() {
        $data = array();
        $company_id = $this->session->userdata('company_id');
        if ($this->input->post('submit')) {
            $outlet_id  = isset($_POST['outlet_id']) && $_POST['outlet_id']?$_POST['outlet_id']:'';
            if(!$outlet_id){
                $outlet_id = $this->session->userdata('outlet_id');
            }
            $waiter_id =htmlspecialchars($this->input->post($this->security->xss_clean('waiter_id')));
            $data['waiter_id'] = $waiter_id;
            $data['outlet_id'] = $outlet_id;
            $start_date =htmlspecialchars($this->input->post($this->security->xss_clean('startDate')));
            $data['start_date'] = $start_date;
            $end_date =htmlspecialchars($this->input->post($this->security->xss_clean('endDate')));
            $data['end_date'] = $end_date;
            $data['tipsReport'] = $this->Report_model->tipsReport($start_date, $end_date,$outlet_id,$waiter_id);
        }
        $data['users'] = $this->Common_model->getAllByCompanyIdForDropdown($company_id, 'tbl_users');
        $data['main_content'] = $this->load->view('report/tipsReport', $data, TRUE);
        $this->load->view('userHome', $data);
    }
      /**
     * sale Report By Date
     * @access public
     * @return void
     * @param no
     */
    public function saleReportByDate() {
        $data = array();
        $company_id = $this->session->userdata('company_id');
        if ($this->input->post('submit')) {
            $outlet_id  = isset($_POST['outlet_id']) && $_POST['outlet_id']?$_POST['outlet_id']:'';
            if(!$outlet_id){
                $outlet_id = $this->session->userdata('outlet_id');
            }
            $data['outlet_id'] = $outlet_id;
            $start_date =htmlspecialchars($this->input->post($this->security->xss_clean('startDate')));
            $data['start_date'] = $start_date;
            $end_date =htmlspecialchars($this->input->post($this->security->xss_clean('endDate')));
            $data['end_date'] = $end_date;
            $user_id =htmlspecialchars($this->input->post($this->security->xss_clean('user_id')));
            $data['user_id'] = $user_id;
            $data['saleReportByDate'] = $this->Report_model->saleReportByDate($start_date, $end_date, $user_id,$outlet_id);
        }
        $data['users'] = $this->Common_model->getAllByCompanyIdForDropdown($company_id, 'tbl_users');
        $data['main_content'] = $this->load->view('report/saleReportByDate', $data, TRUE);
        $this->load->view('userHome', $data);
    }

    public function saleReportByDateNew() {

      $filter_data = $this->input->post('filter_data');
      parse_str($filter_data,$params);

        $data = array();
        $company_id = $this->session->userdata('company_id');
        // if ($this->input->post('submit')) {
            $outlet_id  = isset($params['outlet_id']) && $params['outlet_id']?$params['outlet_id']:'';
            if(!$outlet_id){
                $outlet_id = $this->session->userdata('outlet_id');
            }
            $start_date = $params['startDate'];
            $end_date = $params['endDate'];
            $user_id = $params['user_id'];
            // $data['user_id'] = $user_id;
            $getallrecords = $this->Report_model->saleReportByDateNew($start_date, $end_date, $user_id,$outlet_id);

            $json_encode['data'] = $getallrecords;
            echo json_encode($json_encode);
        // }
        // $data['users'] = $this->Common_model->getAllByCompanyIdForDropdown($company_id, 'tbl_users');
        // $data['main_content'] = $this->load->view('report/saleReportByDate', $data, TRUE);
        // $this->load->view('userHome', $data);
    }

      /**
     * profit Loss Report
     * @access public
     * @return void
     * @param no
     */
    public function profitLossReport() {
        $data = array();
        if ($this->input->post('submit')) {
            $outlet_id  = isset($_POST['outlet_id']) && $_POST['outlet_id']?$_POST['outlet_id']:'';
            if(!$outlet_id){
                $outlet_id = $this->session->userdata('outlet_id');
            }
            $data['outlet_id'] = $outlet_id;
            $start_date =htmlspecialchars($this->input->post($this->security->xss_clean('startDate')));
            $end_date =htmlspecialchars($this->input->post($this->security->xss_clean('endDate')));
            $data['start_date'] = $start_date;
            $data['end_date'] = $end_date;
            if ($start_date || $end_date) {
                $data['saleReportByDate'] = $this->Report_model->profitLossReport($start_date, $end_date,$outlet_id);
            }
        }
        $data['main_content'] = $this->load->view('report/profitLossReport', $data, TRUE);
        $this->load->view('userHome', $data);
    }
    public function profitLossReportBackup() {
        $data = array();
        if ($this->input->post('submit')) {
            $outlet_id  = isset($_POST['outlet_id']) && $_POST['outlet_id']?$_POST['outlet_id']:'';
            if(!$outlet_id){
                $outlet_id = $this->session->userdata('outlet_id');
            }
            $data['outlet_id'] = $outlet_id;
            $start_date =htmlspecialchars($this->input->post($this->security->xss_clean('startDate')));
            $end_date =htmlspecialchars($this->input->post($this->security->xss_clean('endDate')));
            $data['start_date'] = $start_date;
            $data['end_date'] = $end_date;
            if ($start_date || $end_date) {
                $data['saleReportByDate'] = $this->Report_model->profitLossReportByDate($start_date, $end_date,$outlet_id);
                print("<Pre>");
                print_r($data['saleReportByDate']);exit;
            }
        }
        $data['main_content'] = $this->load->view('report/profitLossReportByDate', $data, TRUE);
        $this->load->view('userHome', $data);
    }
      /**
     * supplier ledger Report
     * @access public
     * @return void
     * @param no
     */
    public function supplierLedgerReport() {
        $company_id = $this->session->userdata('company_id');
        $data = array();


        if($this->input->post('submit')){
            $this->form_validation->set_rules('supplier_id', lang('supplier'), 'required|max_length[50]');
            if ($this->form_validation->run() == TRUE) {

                $start_date = date('Y-m-d',strtotime($this->input->post($this->security->xss_clean('startDate'))));
                $end_date = date('Y-m-d',strtotime($this->input->post($this->security->xss_clean('endDate'))));
                $supplier_id = htmlspecialchars($this->input->post($this->security->xss_clean('supplier_id')));

                $outlet_id  = isset($_POST['outlet_id']) && $_POST['outlet_id']?$_POST['outlet_id']:'';
                if(!$outlet_id){
                    $outlet_id = $this->session->userdata('outlet_id');
                }

                $data['supplier_id'] =$supplier_id;
                $data['outlet_id'] =$outlet_id;
                $data['start_date'] = $start_date;
                $data['end_date'] = $end_date;
                $remaining_due = $this->Report_model->getSupplierOpeningDueByDate($supplier_id,$start_date,$outlet_id);
                $key=0;
                $supplier = getSupplier($supplier_id);
                $op_start_date = date("Y-m-d",strtotime($supplier->added_date));;
                $op_end_date = date("Y-m-d",strtotime($start_date." -1days"));

                if($op_end_date<$op_start_date || $op_end_date==$op_start_date){
                    $op_date_view = date($this->session->userdata('date_format'), strtotime($op_start_date));
                }else{
                    $op_date_view = date($this->session->userdata('date_format'), strtotime($op_start_date))." - ".date($this->session->userdata('date_format'), strtotime($op_end_date));
                }

                $data['supplierLedger'][$key]['title']="Opening Due";
                $data['supplierLedger'][$key]['date']=$op_date_view;
                $data['supplierLedger'][$key]['grant_total']="N/A";

                $data['supplierLedger'][$key]['credit']="";

                $data['supplierLedger'][$key]['debit']=$remaining_due;
                $data['supplierLedger'][$key]['balance']=$remaining_due;
                $balance=-$remaining_due;

                //$balance=-$remaining_due;
                for($i=$start_date;$i<=$end_date;$i=date('Y-m-d',strtotime("+1 day",strtotime($i)))){
                    $purchase_grant_total=$this->Report_model->getSupplierGrantTotalByDate($supplier_id,$i,$outlet_id);
                    if(!empty($purchase_grant_total->total)){
                        $key++;
                        if($balance<0){
                            $balance=($balance+(-$purchase_grant_total->due));
                        }else{
                            $balance= ($balance-$purchase_grant_total->due);
                        }

                        $data['supplierLedger'][$key]['title']="Purchase Due Amount";
                        $data['supplierLedger'][$key]['date']=$i;
                        if($purchase_grant_total->due>0){
                            $data['supplierLedger'][$key]['grant_total']=$purchase_grant_total->total;
                            $data['supplierLedger'][$key]['debit']=$purchase_grant_total->due;
                        }else{
                            $data['supplierLedger'][$key]['grant_total']='';
                            $data['supplierLedger'][$key]['debit']='';
                        }
                        $data['supplierLedger'][$key]['credit']='';
                        $data['supplierLedger'][$key]['balance']=$balance;
                    }
                    $supplier_due_payment=$this->Report_model->getSupplierDuePaymentByDate($supplier_id,$i,$outlet_id);
                    if(!empty($supplier_due_payment)){
                        $key++;

                        $balance=$balance+$supplier_due_payment;

                        $data['supplierLedger'][$key]['title']="Supplier Due Payment";
                        $data['supplierLedger'][$key]['date']=$i;
                        $data['supplierLedger'][$key]['grant_total']="";
                        $data['supplierLedger'][$key]['debit']='';
                        $data['supplierLedger'][$key]['credit']=$supplier_due_payment;
                        if($balance!=0){
                            $data['supplierLedger'][$key]['balance']=$balance;
                        }else{
                            $data['supplierLedger'][$key]['balance']='';
                        }
                    }
                }
                $data['suppliers'] = $this->Common_model->getAllByCompanyIdForDropdown($company_id, "tbl_suppliers");
                $data['main_content'] = $this->load->view('report/supplierLedgerReport', $data, TRUE);
                $this->load->view('userHome', $data);
            }else{
                $data['suppliers'] = $this->Common_model->getAllByCompanyIdForDropdown($company_id, "tbl_suppliers");
                $data['main_content'] = $this->load->view('report/supplierLedgerReport', $data, TRUE);
                $this->load->view('userHome', $data);
            }
        }else{
            $data['suppliers'] = $this->Common_model->getAllByCompanyIdForDropdown($company_id, "tbl_suppliers");
            $data['main_content'] = $this->load->view('report/supplierLedgerReport', $data, TRUE);
            $this->load->view('userHome', $data);
        }

    }


    public function supplierReportNew() {

      $filter_data = $this->input->post('filter_data');

      parse_str($filter_data,$params);

      $outlet_id  = isset($params['outlet_id']) && $params['outlet_id']?$params['outlet_id']:'';
      if(!$outlet_id){
          $outlet_id = $this->session->userdata('outlet_id');
      }
      $start_date = $params['startDate'] ?? date("Y-m-d"). ' 00:00:00';
      $end_date = $params['endDate'] ?? date("Y-m-d"). ' 23:59:59';
      $supplier_id = $params['supplier_id'] ?? '';

      $getallrecords = $this->Report_model->supplierReportNew($start_date, $end_date, $supplier_id,$outlet_id);

      $pGrandTotal = 0;
      $pPaid = 0;
      $pDue = 0;

      foreach ($getallrecords as $key => $value) {
        $pGrandTotal+=$value->grand_total;
        $pPaid+=$value->paid;
        $pDue+=$value->due;

        $key++;
        $datas[] = array( 
                        "sn"=> escape_output($key),
                        "date"=> escape_output(date($this->session->userdata('date_format'), strtotime($value->date))),
                        "reference_no"=> escape_output($value->reference_no),
                        "grand_total"=> escape_output(getAmt($value->grand_total)),
                        "paid"=> escape_output(getAmt($value->paid)),
                        "due"=> escape_output(getAmt($value->due)),
                  );  
      }

      if (empty($datas)) {
          $datas = array();
      }

      $data = array( 
          "data" => $datas, 
      );
       
      echo json_encode($data);
    }

    public function supplierReportNew2() {

      $filter_data = $this->input->post('filter_data');

      parse_str($filter_data,$params);

      $outlet_id  = isset($params['outlet_id']) && $params['outlet_id']?$params['outlet_id']:'';

      if(!$outlet_id){
          $outlet_id = $this->session->userdata('outlet_id');
      }

      $start_date = $params['startDate'] ?  $params['startDate'] : date("Y-m-d"). ' 00:00:00' ;
      $end_date = $params['endDate'] ? $params['endDate'] : date("Y-m-d"). ' 23:59:59';
      $supplier_id = $params['supplier_id'] ? $params['supplier_id'] : '';

      $getallrecords = $this->Report_model->supplierDuePaymentReportNew($start_date, $end_date, $supplier_id,$outlet_id);

      $totalAmount = 0;

      foreach ($getallrecords as $key => $value) {
        $totalAmount+=$value->amount;
        $key++;
        $datas[] = array( 
                        "sn"=> escape_output($key),
                        "date"=>escape_output(date($this->session->userdata('date_format'), strtotime($value->date))),
                        "amount"=>escape_output(getAmt($value->amount)),
                        "note"=>escape_output($value->note),
                  );
      }

      if (empty($datas)) {
          $datas = array();
      }

      $data = array( 
          "data" => $datas, 
      );
       
      echo json_encode($data);
    }

    /**
     * customer Report
     * @access public
     * @return void
     * @param no
    */

    public function customerLedgerReport() {
        $company_id = $this->session->userdata('company_id');
        $data = array();
        if($this->input->post('submit')){
            $this->form_validation->set_rules('customer_id', lang('customer'), 'required|max_length[50]');
            if ($this->form_validation->run() == TRUE) {
                $start_date = date('Y-m-d',strtotime($this->input->post($this->security->xss_clean('startDate'))));
                $end_date = date('Y-m-d',strtotime($this->input->post($this->security->xss_clean('endDate'))));
                $customer_id = htmlspecialchars($this->input->post($this->security->xss_clean('customer_id')));
                $outlet_id  = isset($_POST['outlet_id']) && $_POST['outlet_id']?$_POST['outlet_id']:'';
                if(!$outlet_id){
                    $outlet_id = $this->session->userdata('outlet_id');
                }
                $data['outlet_id'] =$outlet_id;
                $data['customer_id'] =$customer_id;
                $data['start_date'] = $start_date;
                $data['end_date'] = $end_date;
                $remaining_due = $this->Report_model->getCustomerOpeningDueByDate($customer_id,$start_date,$outlet_id);

                $customer = getCustomerData($customer_id);
                $op_start_date = date("Y-m-d",strtotime($customer->added_date));;
                $op_end_date = date("Y-m-d",strtotime($start_date." -1days"));

                if($op_end_date<$op_start_date || $op_end_date==$op_start_date){
                    $op_date_view = date($this->session->userdata('date_format'), strtotime($op_start_date));
                }else{
                    $op_date_view = date($this->session->userdata('date_format'), strtotime($op_start_date))." - ".date($this->session->userdata('date_format'), strtotime($op_end_date));
                }

                $key=0;
                $data['customerLedger'][$key]['title']="Opening Due";
                $data['customerLedger'][$key]['date']= $op_date_view;
                $data['customerLedger'][$key]['grant_total']="N/A";

                $data['customerLedger'][$key]['paid']="N/A";
                $data['customerLedger'][$key]['due']="N/A";

                $data['customerLedger'][$key]['credit']="N/A";
                $data['customerLedger'][$key]['debit']= getAmtP($remaining_due);
                $data['customerLedger'][$key]['balance']=getAmtP($remaining_due);
                $balance=$remaining_due;

                for($i=$start_date;$i<=$end_date;$i=date('Y-m-d',strtotime("+1 day",strtotime($i)))){
                    $sale_details=$this->Report_model->getCustomerGrantTotalByDate($customer_id,$i,$outlet_id);
                    if(!empty($sale_details->total)){
                        $key++;
                        $balance = ($balance+$sale_details->due);

                        $data['customerLedger'][$key]['title']="Sale Due Amount";
                        $data['customerLedger'][$key]['date']=$i;
                        $data['customerLedger'][$key]['grant_total']=getAmtP($sale_details->total);
                        $data['customerLedger'][$key]['paid']=getAmtP($sale_details->paid);
                        $data['customerLedger'][$key]['due']=getAmtP($sale_details->due);
                        $data['customerLedger'][$key]['debit']=getAmtP($sale_details->due);
                        $data['customerLedger'][$key]['credit']= getAmtP(0);
                        if($balance!=0){
                            $data['customerLedger'][$key]['balance']=getAmtP($balance);
                        }else{
                            $data['customerLedger'][$key]['balance']=getAmtP(0);
                        }
                    }
                    $payment_receive=$this->Report_model->getCustomerDuePaymentByDate($customer_id,$i,$outlet_id);
                    if(!empty($payment_receive)){
                        $key++;
                        $balance=$balance-$payment_receive;
                        $data['customerLedger'][$key]['title']="Due Receive";
                        $data['customerLedger'][$key]['date']=$i;
                        $data['customerLedger'][$key]['grant_total']=getAmtP($payment_receive);
                        $data['customerLedger'][$key]['paid']=getAmtP(0);
                        $data['customerLedger'][$key]['due']=getAmtP(0);
                        $data['customerLedger'][$key]['debit']= getAmtP(0);
                        $data['customerLedger'][$key]['credit']=getAmtP($payment_receive);
                        if($balance!=0){
                            $data['customerLedger'][$key]['balance']=getAmtP($balance);
                        }else{
                            $data['customerLedger'][$key]['balance']='';
                        }
                    }
                }
                $data['customers'] = $this->Common_model->getAllByCompanyIdForDropdown($company_id, "tbl_customers");
                $data['main_content'] = $this->load->view('report/customerLedgerReport', $data, TRUE);
                $this->load->view('userHome', $data);
            }else{
                $data['customers'] = $this->Common_model->getAllByCompanyIdForDropdown($company_id, "tbl_customers");
                $data['main_content'] = $this->load->view('report/customerLedgerReport', $data, TRUE);
                $this->load->view('userHome', $data);
            }
        }else{
            $data['customers'] = $this->Common_model->getAllByCompanyIdForDropdown($company_id, "tbl_customers");
            $data['main_content'] = $this->load->view('report/customerLedgerReport', $data, TRUE);
            $this->load->view('userHome', $data);
        }

    }

    public function customerReportNew() {
      $data = array();
      $filter_data = $this->input->post('filter_data');
      parse_str($filter_data,$params);
      $start_date = $params['startDate'];
      $end_date = $params['endDate']; 
      $customer_id = $params['customer_id'];

      $outlet_id  = isset($params['outlet_id']) && $params['outlet_id']?$params['outlet_id']:'';
      if(!$outlet_id){
        $outlet_id = $this->session->userdata('outlet_id');
      }

      $getallrecords = $this->Report_model->customerReportNew($start_date, $end_date, $customer_id,$outlet_id);
      $pGrandTotal = 0;
      $pPaid = 0;
      $pDue = 0;
      foreach ($getallrecords as $key => $value) {
          $pGrandTotal+=$value->total_payable;
          $pPaid+=$value->paid_amount;
          $pDue+=$value->due_amount;
          $key++;
          $datas[] = array( 
                "sn"=> escape_output($key),
                "sale_date"=> escape_output(date($this->session->userdata('date_format'), strtotime($value->sale_date))),
                "sale_no"=> escape_output($value->sale_no),
                "total_payable"=> escape_output(getAmt($value->total_payable)),
                "paid_amount"=> escape_output(getAmt($value->paid_amount)),
                "due_amount"=> escape_output(getAmt($value->due_amount)),
          );
      }

      if (empty($datas)) {
          $datas = array();
      }

      $data = array( 
          "data" => $datas, 
      );
       
      echo json_encode($data);
    }

    public function customerReportNewDue() {
      $data = array();
      $filter_data = $this->input->post('filter_data');
      parse_str($filter_data,$params);
      $start_date = $params['startDate'];
      $end_date = $params['endDate']; 
      $customer_id = $params['customer_id'];

      $outlet_id  = isset($params['outlet_id']) && $params['outlet_id']?$params['outlet_id']:'';
      if(!$outlet_id){
        $outlet_id = $this->session->userdata('outlet_id');
      }

      $getallrecords = $this->Report_model->customerDueReceiveReportNew($start_date, $end_date, $customer_id,$outlet_id);
      $totalAmount = 0;
      foreach ($getallrecords as $key => $value) {
          $totalAmount+=$value->amount;
          $key++;
          $datas[] = array( 
                "sn"=> escape_output($key),
                "date"=> escape_output(date($this->session->userdata('date_format'), strtotime($value->date))),
                "amount"=> escape_output(getAmt($value->amount)),
                "note"=> escape_output($value->note),
          );
      }

      if (empty($datas)) {
          $datas = array();
      }

      $data = array( 
          "data" => $datas, 
      );
       
      echo json_encode($data);
    }

      /**
     * customer Report
     * @access public
     * @return void
     * @param no
     */
    public function availableLoyaltyPointReport() {
        $data = array();
        $company_id = $this->session->userdata('company_id');

        $outlet_id  = isset($_POST['outlet_id']) && $_POST['outlet_id']?$_POST['outlet_id']:'';
        if(!$outlet_id){
            $outlet_id = $this->session->userdata('outlet_id');
        }
        $customer_id =htmlspecialchars($this->input->post($this->security->xss_clean('customer_id')));
        $data['customer_id'] = $customer_id;
        $data['outlet_id'] = $outlet_id;
        $data['customers'] = $this->Report_model->availableLoyaltyPointReport($customer_id,$outlet_id);
        $data['customers_dropdown'] = $this->Common_model->getAllByCompanyIdForDropdown($company_id, 'tbl_customers');
        $data['main_content'] = $this->load->view('report/loyalty_point_available_report', $data, TRUE);
        $this->load->view('userHome', $data);
    }
      /**
     * customer Report
     * @access public
     * @return void
     * @param no
     */
    public function usageLoyaltyPointReport() {
        $company_id = $this->session->userdata('company_id');
        $data = array();
        if($this->input->post('submit')){
            $start_date = date('Y-m-d',strtotime($this->input->post($this->security->xss_clean('startDate'))));
            $end_date = date('Y-m-d',strtotime($this->input->post($this->security->xss_clean('endDate'))));
            $customer_id = htmlspecialchars($this->input->post($this->security->xss_clean('customer_id')));
            $outlet_id  = isset($_POST['outlet_id']) && $_POST['outlet_id']?$_POST['outlet_id']:'';
            if(!$outlet_id){
                $outlet_id = $this->session->userdata('outlet_id');
            }
            $data['outlet_id'] =$outlet_id;
            $data['customer_id'] =$customer_id;
            $data['start_date'] = $start_date;
            $data['end_date'] = $end_date;

            $data = array();
            $company_id = $this->session->userdata('company_id');

            $outlet_id  = isset($_POST['outlet_id']) && $_POST['outlet_id']?$_POST['outlet_id']:'';
            if(!$outlet_id){
                $outlet_id = $this->session->userdata('outlet_id');
            }
            $customer_id =htmlspecialchars($this->input->post($this->security->xss_clean('customer_id')));
            $data['customer_id'] = $customer_id;
            $data['customers'] = $this->Report_model->usageLoyaltyPointReport($start_date, $end_date,$customer_id,$outlet_id);
            $data['customers_dropdown'] = $this->Common_model->getAllByCompanyIdForDropdown($company_id, 'tbl_customers');
            $data['main_content'] = $this->load->view('report/loyalty_point_usage_report', $data, TRUE);
            $this->load->view('userHome', $data);
        }else{
            $data['customers_dropdown'] = $this->Common_model->getAllByCompanyIdForDropdown($company_id, 'tbl_customers');
            $data['main_content'] = $this->load->view('report/loyalty_point_usage_report', $data, TRUE);
            $this->load->view('userHome', $data);
        }

    }
      /**
     * food Menu Sales
     * @access public
     * @return void
     * @param no
     */
    public function foodMenuSales() {
        $data = array();
        $company_id = $this->session->userdata('company_id');
        if ($this->input->post('submit')) {
            $outlet_id  = isset($_POST['outlet_id']) && $_POST['outlet_id']?$_POST['outlet_id']:'';
            if(!$outlet_id){
                $outlet_id = $this->session->userdata('outlet_id');
            }
            $data['outlet_id'] = $outlet_id;
            $start_date =htmlspecialchars($this->input->post($this->security->xss_clean('startDate')));
            $end_date =htmlspecialchars($this->input->post($this->security->xss_clean('endDate')));  
            $top_less =htmlspecialchars($this->input->post($this->security->xss_clean('top_less')));
            $product_type =htmlspecialchars($this->input->post($this->security->xss_clean('product_type')));
            $data['product_type'] = $product_type;
            $data['start_date'] = $start_date;
            $data['end_date'] = $end_date;
            $data['outlet_id'] = $outlet_id;
            $data['top_less'] = $top_less;
            $data['foodMenuSales'] = $this->Report_model->foodMenuSales($start_date, $end_date,$outlet_id,$top_less,$product_type);
        }
        $data['main_content'] = $this->load->view('report/foodMenuSales', $data, TRUE);
        $this->load->view('userHome', $data);
    }
    /**
     * food Menu Sales
     * @access public
     * @return void
     * @param no
     */
    public function foodMenuSaleByCategories() {
        $data = array();
        if ($this->input->post('submit')) {
            $outlet_id  = isset($_POST['outlet_id']) && $_POST['outlet_id']?$_POST['outlet_id']:'';
            if(!$outlet_id){
                $outlet_id = $this->session->userdata('outlet_id');
            }
            $data['outlet_id'] = $outlet_id;
            $start_date =htmlspecialchars($this->input->post($this->security->xss_clean('startDate')));
            $end_date =htmlspecialchars($this->input->post($this->security->xss_clean('endDate')));
            $cat_id =htmlspecialchars($this->input->post($this->security->xss_clean('cat_id')));
            $data['start_date'] = $start_date;
            $data['end_date'] = $end_date;
            $data['cat_id'] = $cat_id;
            $data['outlet_id'] = $outlet_id;
            $data['foodMenuSales'] = $this->Report_model->foodMenuSaleByCategories($start_date, $end_date,$outlet_id,$cat_id);
        }
        $company_id = $this->session->userdata('company_id');
        $data['foodMenuCategories'] = $this->Common_model->getAllByCompanyIdForDropdown($company_id, "tbl_food_menu_categories");
        $data['main_content'] = $this->load->view('report/foodMenuSaleByCategories', $data, TRUE);
        $this->load->view('userHome', $data);
    }


    public function foodMenuSaleByCategoriesNew() {
 
      $filter_data = $this->input->post('filter_data');

      parse_str($filter_data,$params);
      $start_date = $params['startDate'];
      $end_date = $params['endDate']; 
      $cat_id = $params['cat_id']; 

      $outlet_id  = isset($params['outlet_id']) && $params['outlet_id']?$params['outlet_id']:'';
      if(!$outlet_id){
          $outlet_id = $this->session->userdata('outlet_id');
      }
 
      $total_amount = 0;
      $total_qty = 0;
      $total_average = 0;
      $getallrecords = $this->Report_model->foodMenuSaleByCategoriesNew($start_date, $end_date,$outlet_id,$cat_id);
      foreach ($getallrecords as $key => $value) {
        $total_amount+=($value->menu_unit_price*$value->totalQty);
        $total_qty+=($value->totalQty);
        $total_average+=(($value->menu_unit_price*$value->totalQty)/$value->totalQty);
        $key++;

        $datas[] = array(
            "id" => escape_output($key),
            "code" => escape_output($value->code),
            "menu_name" => escape_output($value->menu_name),
            "category_name" => escape_output($value->category_name),
            "total_qty" => escape_output($value->totalQty),
            "sale_value" => escape_output(getAmtP($value->menu_unit_price * $value->totalQty)),
            "sell_price" =>escape_output(getAmtP(($value->menu_unit_price*$value->totalQty)/$value->totalQty)),
        );
      }
      if (empty($datas)) {
          $datas = array();
      }
      $json_encode['data'] = $datas;

      $data = array(
        "data" => $datas,
        "total_qty" => round($total_qty, 2),
        "total_amount" => round($total_amount, 2),
        "total_average" => round($total_average, 2),
      );

      echo json_encode($data);

        // $data['main_content'] = $this->load->view('report/foodMenuSaleByCategories', $data, TRUE);
        // $this->load->view('userHome', $data);
    }

    public function foodMenuSaleByCategoriesExpenseNew() {
 
      $filter_data = $this->input->post('filter_data');

      parse_str($filter_data,$params);

      $category_id = $params['cat_id']; 
      $food_id = $params['food_id']; 

      $getallrecords = $this->Inventory_model->getInventoryFoodMenu($food_id,$category_id);

      $totalStock = 0;
      $grandTotal = 0;
      $alertCount = 0;

      foreach ($getallrecords as $key => $value) {
        $totalStock =  $value->total_transfer_plus_2  -  $value->total_transfer_minus_2 - $value->sale_total;
        if ($totalStock >= 0) {
            $grandTotal = $grandTotal + $totalStock * getLastPurchaseAmount($value->id);
        }
        $key++;

        $datas[] = array(
            "id" => escape_output($key),
            "code" =>  escape_output($value->name . "(" . $value->code . ")"),
            "category_id" => escape_output(getFoodMenuCateCodeById($value->category_id)),
            "totalStock" =>  ( ($totalStock) ? getAmtP($totalStock) : getAmtP(0) ) . " " .escape_output("Pcs"),
        );
      }
      if (empty($datas)) {
          $datas = array();
      }
      $json_encode['data'] = $datas;

      $data = array(
        "data" => $datas,
      );

      echo json_encode($data);

        // $data['main_content'] = $this->load->view('report/foodMenuSaleByCategories', $data, TRUE);
        // $this->load->view('userHome', $data);
    }


    public function productAnalysisReport() {
        $data = array();
        $company_id = $this->session->userdata('company_id');
        $data['is_direct_food'] = '';
        if ($this->input->post('submit')) {
            $this->form_validation->set_rules('startDate', lang('start_date'), 'required|max_length[50]');
            $this->form_validation->set_rules('endDate', lang('end_date'), 'required|max_length[50]');
            $this->form_validation->set_rules('category_id', lang('category'), 'required|max_length[50]');
            if ($this->form_validation->run() == TRUE) {
                $outlet_id  = isset($_POST['outlet_id']) && $_POST['outlet_id']?$_POST['outlet_id']:'';
                if(!$outlet_id){
                    $outlet_id = $this->session->userdata('outlet_id');
                }
                $data['outlet_id'] = $outlet_id;
                $start_date =htmlspecialchars($this->input->post($this->security->xss_clean('startDate')));
                $end_date =htmlspecialchars($this->input->post($this->security->xss_clean('endDate')));
                $category_id =htmlspecialchars($this->input->post($this->security->xss_clean('category_id')));
                $data['start_date'] = $start_date;
                $data['end_date'] = $end_date;
                $data['category_id'] = $category_id;
                $data['outlet_id'] = $outlet_id;
                $total_qty_all = $this->Report_model->productAnalysisReportTotal($start_date, $end_date,$outlet_id,$category_id);
                $data['total_qty_all'] = 0;
                $data['total_amount_all'] = 0;
                $data['total_amount_all'] = 0;
                if(isset($total_qty_all) && $total_qty_all){
                    $data['total_qty_all'] = $total_qty_all->total_qty;
                    $data['total_amount_all'] = $total_qty_all->totalSale;
                }
                $data['productAnalysisReport'] = $this->Report_model->productAnalysisReport($start_date, $end_date,$outlet_id,$category_id);

                $data['categories'] = $this->Common_model->getAllByCompanyId($company_id, "tbl_food_menu_categories");
                $data['main_content'] = $this->load->view('report/productAnalysisReport', $data, TRUE);
                $this->load->view('userHome', $data);
            } else {
                $data['categories'] = $this->Common_model->getAllByCompanyId($company_id, "tbl_food_menu_categories");
                $data['main_content'] = $this->load->view('report/productAnalysisReport', $data, TRUE);
                $this->load->view('userHome', $data);
            }
        }else{
            $data['categories'] = $this->Common_model->getAllByCompanyId($company_id, "tbl_food_menu_categories");
            $data['main_content'] = $this->load->view('report/productAnalysisReport', $data, TRUE);
            $this->load->view('userHome', $data);
        }

    }
    /**
     * food Menu Sales
     * @access public
     * @return void
     * @param no
     */

    /**
     * food Menu Sales
     * @access public
     * @return void
     * @param no
     */
    public function foodMenuSaleDetailsByCategories() {
        $data = array();
        if ($this->input->post('submit')) {
            $outlet_id  = isset($_POST['outlet_id']) && $_POST['outlet_id']?$_POST['outlet_id']:'';
            if(!$outlet_id){
                $outlet_id = $this->session->userdata('outlet_id');
            }
            $data['outlet_id'] = $outlet_id;
            $start_date =htmlspecialchars($this->input->post($this->security->xss_clean('startDate')));
            $end_date =htmlspecialchars($this->input->post($this->security->xss_clean('endDate')));
            $cat_id =htmlspecialchars($this->input->post($this->security->xss_clean('cat_id')));
            $data['start_date'] = $start_date;
            $data['end_date'] = $end_date;
            $data['cat_id'] = $cat_id;
            $data['outlet_id'] = $outlet_id;
            $data['foodMenuSales'] = $this->Report_model->foodMenuSaleDetailsByCategories($start_date, $end_date,$outlet_id,$cat_id);
        }
        $company_id = $this->session->userdata('company_id');
        $data['foodMenuCategories'] = $this->Common_model->getAllByCompanyIdForDropdown($company_id, "tbl_food_menu_categories");
        $data['main_content'] = $this->load->view('report/foodMenuSaleDetailsByCategories', $data, TRUE);
        $this->load->view('userHome', $data);
    }
      /**
     * consumption Report
     * @access public
     * @return void
     * @param no
     */
    public function consumptionReport() {
        $data = array();
        $company_id = $this->session->userdata('company_id');
        if ($this->input->post('submit')) {
            $outlet_id  = isset($_POST['outlet_id']) && $_POST['outlet_id']?$_POST['outlet_id']:'';
            if(!$outlet_id){
                $outlet_id = $this->session->userdata('outlet_id');
            }
            $data['outlet_id'] = $outlet_id;
            $start_date =htmlspecialchars($this->input->post($this->security->xss_clean('startDate')));
            $end_date =htmlspecialchars($this->input->post($this->security->xss_clean('endDate')));  
            $data['start_date'] = $start_date;
            $data['end_date'] = $end_date;

            $data['consumptionMenus'] = $this->Report_model->consumptionMenus($start_date, $end_date,$outlet_id);
            $data['consumptionModifiers'] = $this->Report_model->consumptionModifiers($start_date, $end_date,$outlet_id);
        }
        $data['main_content'] = $this->load->view('report/consumptionReport', $data, TRUE);
        $this->load->view('userHome', $data);
    }


    public function consumptionReportMenuNew() {

      $filter_data = $this->input->post('filter_data');

      parse_str($filter_data,$params);
      $start_date = $params['startDate'];
      $end_date = $params['endDate']; 

      $outlet_id  = isset($params['outlet_id']) && $params['outlet_id']?$params['outlet_id']:'';
      if(!$outlet_id){
          $outlet_id = $this->session->userdata('outlet_id');
      }

      $getallrecords = $this->Report_model->consumptionReportMenuNew($start_date, $end_date,$outlet_id);
      $totalTK = 0;
      foreach ($getallrecords as $key => $value) {

        $last_purchase_price = getLastPurchaseAmount($value->ingredient_id);
        $totalTK +=$value->total_consumption *  $last_purchase_price;
        $key++;

        $datas[] = array(
            "id" => escape_output($key),
            "ingredient_code"=>escape_output($value->ingredient_name).' '.$value->ingredient_code,
            "total_consumption"=>escape_output(getAmtP($value->total_consumption)),
            "last_purchase_price"=>escape_output(getAmtP($value->total_consumption * $last_purchase_price)),
        );
      }
      if (empty($datas)) {
          $datas = array();
      }
      $json_encode['data'] = $datas;

      $data = array(
        "data" => $datas,
        "totalTK" => escape_output(getAmtP($totalTK)),
      );

      echo json_encode($data);
    }

    public function consumptionReportModifierNew() {

      $filter_data = $this->input->post('filter_data');

      parse_str($filter_data,$params);
      $start_date = $params['startDate'];
      $end_date = $params['endDate']; 

      $outlet_id  = isset($params['outlet_id']) && $params['outlet_id']?$params['outlet_id']:'';
      if(!$outlet_id){
          $outlet_id = $this->session->userdata('outlet_id');
      }

      $getallrecords = $this->Report_model->consumptionModifiersNew($start_date, $end_date,$outlet_id);
      $totalTK = 0;
      foreach ($getallrecords as $key => $value) {

        $last_purchase_price = getLastPurchaseAmount($value->ingredient_id);
        $totalTK +=$value->total_consumption *  $last_purchase_price;
        $key++;

        $datas[] = array(
            "id" => escape_output($key),
            "ingredient_code"=>escape_output($value->ingredient_name).' '.$value->ingredient_code,
            "total_consumption"=>escape_output(getAmtP($value->total_consumption)),
            "last_purchase_price"=>escape_output(getAmtP($value->total_consumption * $last_purchase_price)),
        );
      }
      if (empty($datas)) {
          $datas = array();
      }
      $json_encode['data'] = $datas;

      $data = array(
        "data" => $datas,
        "totalTK" => escape_output(getAmtP($totalTK)),
      );

      echo json_encode($data);
    }



      /**
     * detailed Sale Report
     * @access public
     * @return void
     * @param no
     */
    public function detailedSaleReport() {
        $data = array();
        $company_id = $this->session->userdata('company_id');
        if ($this->input->post('submit')) {
            $outlet_id  = isset($_POST['outlet_id']) && $_POST['outlet_id']?$_POST['outlet_id']:'';
            if(!$outlet_id){
                $outlet_id = $this->session->userdata('outlet_id');
            }
            $data['outlet_id'] = $outlet_id;
            $start_date =htmlspecialchars($this->input->post($this->security->xss_clean('startDate')));
            $end_date =htmlspecialchars($this->input->post($this->security->xss_clean('endDate')));
            $user_id =htmlspecialchars($this->input->post($this->security->xss_clean('user_id')));
            $waiter_id =htmlspecialchars($this->input->post($this->security->xss_clean('waiter_id')));
            $data['user_id'] = $user_id;
            $data['waiter_id'] = $waiter_id;
            $data['start_date'] = $start_date;
            $data['end_date'] = $end_date;
            $data['detailedSaleReport'] = $this->Report_model->detailedSaleReport($start_date, $end_date, $user_id,$outlet_id,$waiter_id);
        }
        $data['users'] = $this->Common_model->getAllByCompanyIdForDropdown($company_id, 'tbl_users');
        $data['main_content'] = $this->load->view('report/detailedSaleReport', $data, TRUE);
        $this->load->view('userHome', $data);
    }

    public function detailedSaleReportNew() {

      $filter_data = $this->input->post('filter_data');

      parse_str($filter_data,$params);
      $start_date = $params['startDate'];
      $end_date = $params['endDate']; 

      $waiter_id = $params['waiter_id'];
      $user_id = $params['user_id'];

        $data = array();
        $company_id = $this->session->userdata('company_id');
        // if ($this->input->post('submit')) {
            $outlet_id  = isset($params['outlet_id']) && $params['outlet_id']?$params['outlet_id']:'';
            if(!$outlet_id){
                $outlet_id = $this->session->userdata('outlet_id');
            }
            // $data['outlet_id'] = $outlet_id;
            // $start_date =htmlspecialchars($this->input->post($this->security->xss_clean('startDate')));
            // $end_date =htmlspecialchars($this->input->post($this->security->xss_clean('endDate')));
            // $user_id =htmlspecialchars($this->input->post($this->security->xss_clean('user_id')));
            // $waiter_id =htmlspecialchars($this->input->post($this->security->xss_clean('waiter_id')));
            // $data['user_id'] = $user_id;
            // $data['waiter_id'] = $waiter_id;
            // $data['start_date'] = $start_date;
            // $data['end_date'] = $end_date;

            $getallrecords = $this->Report_model->detailedSaleReportNew($start_date, $end_date, $user_id,$outlet_id,$waiter_id);

            $pGrandTotal = 0;
            $subGrandTotal = 0;
            $itemsGrandTotal = 0;
            $disGrandTotal = 0;
            $vatGrandTotal = 0;
            $deliveryTotal = 0;
            $serviceTotal = 0;
            foreach ($getallrecords as $key => $value) {
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

              $datas[] = array(
                  "id" => escape_output($key),
                  "sale_date" => escape_output(date($this->session->userdata('date_format'), strtotime($value->sale_date))), 
                  "sale_no" => escape_output($value->sale_no),
                  "total_items" => escape_output($value->total_items),
                  "sub_total" => escape_output(getAmt($value->sub_total)),
                  "delivery_row_total" => escape_output(getAmt($delivery_row_total)),
                  "service_row_total" => escape_output(getAmt($service_row_total)),
                  "total_discount_amount" => escape_output(getAmt($value->total_discount_amount)),
                  "vat" => escape_output(getAmt($value->vat)),
                  "total_payable" => escape_output(getAmt($value->total_payable)),
                  "name" => escape_output($value->name),
              );
            }
            // $data['outlet_id'] = $outlet_id;
            // $data['user_id'] = $user_id;
            // $data['waiter_id'] = $waiter_id;
            // $data['start_date'] = $start_date;
            // $data['end_date'] = $end_date;
            if (empty($datas)) {
                $datas = array();
            }
            // $data = array(
            //     "data" => $datas,
            // );
            $json_encode['data'] = $datas;
            echo json_encode($json_encode);

        // }
        // $data['users'] = $this->Common_model->getAllByCompanyIdForDropdown($company_id, 'tbl_users');
        // $data['main_content'] = $this->load->view('report/detailedSaleReport', $data, TRUE);
        // $this->load->view('userHome', $data);
    }

      /**
     * purchase Report By Month
     * @access public
     * @return void
     * @param no
     */
    public function purchaseReportByMonth() {
        $data = array();
        $company_id = $this->session->userdata('company_id');
        if ($this->input->post('submit')) {
            $start_date =htmlspecialchars($this->input->post($this->security->xss_clean('startMonth')));
            $end_date =htmlspecialchars($this->input->post($this->security->xss_clean('endMonth')));
            $user_id =htmlspecialchars($this->input->post($this->security->xss_clean('user_id')));
            $data['user_id'] = $user_id;
            if ($start_date && $end_date) {
                $start_date = date('Y-m', strtotime($this->input->post($this->security->xss_clean('startMonth'))));
                $start_date = $start_date . '-' . '01';
                $data['start_date'] = $start_date;
                $end_date = date('Y-m', strtotime($this->input->post($this->security->xss_clean('endMonth'))));
                $month = date('m', strtotime($this->input->post($this->security->xss_clean('endMonth'))));
                $finalDayByMonth = $this->Report_model->getLastDayInDateMonth($month);
                $end_date = $end_date . '-' . $finalDayByMonth;
                $data['end_date'] = $end_date;
            }
            if ($start_date && !$end_date) {
                $start_date = date('Y-m', strtotime($this->input->post($this->security->xss_clean('startMonth'))));
                $month = date('m', strtotime($this->input->post($this->security->xss_clean('startMonth'))));
                $finalDayByMonth = $this->Report_model->getLastDayInDateMonth($month);
                $temp = $start_date . '-' . $finalDayByMonth;
                $start_date = $start_date . '-' . '01';
                $end_date = $temp;
                $data['start_date'] = $start_date;
                $data['end_date'] = $temp;
            }
            if (!$start_date && $end_date) {
                $end_date = date('Y-m', strtotime($this->input->post($this->security->xss_clean('endMonth'))));
                $temp = $end_date . '-' . '01';
                $start_date = $temp;
                $month = date('m', strtotime($this->input->post($this->security->xss_clean('endMonth'))));
                $finalDayByMonth = $this->Report_model->getLastDayInDateMonth($month);
                $end_date = $end_date . '-' . $finalDayByMonth;
                $data['start_date'] = $temp;
                $data['end_date'] = $end_date;
            }
            $data['purchaseReportByMonth'] = $this->Report_model->purchaseReportByMonth($start_date, $end_date, $user_id);
        }


        $data['users'] = $this->Common_model->getAllByOutletIdForDropdown($company_id, 'tbl_users');
        $data['main_content'] = $this->load->view('report/purchaseReportByMonth', $data, TRUE);
        $this->load->view('userHome', $data);
    }
      /**
     * purchase Report By Date
     * @access public
     * @return void
     * @param no
     */
    public function purchaseReportByDate() {
        $data = array();
        if ($this->input->post('submit')) {
            $outlet_id  = isset($_POST['outlet_id']) && $_POST['outlet_id']?$_POST['outlet_id']:'';
            if(!$outlet_id){
                $outlet_id = $this->session->userdata('outlet_id');
            }
            $data['outlet_id'] = $outlet_id;
            $start_date =htmlspecialchars($this->input->post($this->security->xss_clean('startDate')));
            $data['start_date'] = $start_date;
            $end_date =htmlspecialchars($this->input->post($this->security->xss_clean('endDate')));
            $data['end_date'] = $end_date;
            $data['purchaseReportByDate'] = $this->Report_model->purchaseReportByDate($start_date, $end_date,$outlet_id);
        }
        $data['main_content'] = $this->load->view('report/purchaseReportByDate', $data, TRUE);
        $this->load->view('userHome', $data);
    }

    public function purchaseReportByDateNew() {

      $filter_data = $this->input->post('filter_data');

      parse_str($filter_data,$params);
      $start_date = $params['startDate'] ?? date("Y-m-d"). ' 00:00:00';
      $end_date = $params['endDate']  ?? date("Y-m-d"). ' 23:59:59';

      $outlet_id  = isset($params['outlet_id']) && $params['outlet_id']?$params['outlet_id']:'';
      if(!$outlet_id){
          $outlet_id = $this->session->userdata('outlet_id');
      }

      $getallrecords = $this->Report_model->purchaseReportByDateNew($start_date, $end_date,$outlet_id);

      $datas = array();
      // $sum_of_grand_total = 0;
      // $sum_of_paid = 0;
      // $sum_of_due = 0;
      foreach ($getallrecords as $key => $value) {
        $key++;
        $datas[] = array(
            "id" => escape_output($key),
            "reference_no" => escape_output($value->reference_no),
            "date" => escape_output(date($this->session->userdata('date_format'), strtotime($value->date))),
            "supplier_id" => escape_output(getSupplierNameById($value->supplier_id)),
            "grand_total" => escape_output(getAmt($value->grand_total)),
            "paid" => escape_output(getAmt($value->paid)),
            "due" => escape_output(getAmt($value->due)),
            "ingredients_id" => getPurchaseIngredients($value->id),
            "user_id" => escape_output(userName($value->user_id)),
        );
       } 

      if (empty($datas)) {
          $datas = array();
      } 
      $json_encode['data'] = $datas;
      echo json_encode($json_encode);
    }

      /**
     * purchase Report By Ingredient
     * @access public
     * @return void
     * @param no
     */
    public function purchaseReportByIngredient() {
        $data = array();
        $company_id = $this->session->userdata('company_id');
        if ($this->input->post('submit')) {
            $start_date =htmlspecialchars($this->input->post($this->security->xss_clean('startDate')));
            $end_date =htmlspecialchars($this->input->post($this->security->xss_clean('endDate')));
            $ingredients_id =htmlspecialchars($this->input->post($this->security->xss_clean('ingredients_id')));
            $data['ingredients_id'] = $ingredients_id;
            $data['start_date'] = $start_date;
            $data['end_date'] = $end_date;
            $data['purchaseReportByIngredient'] = $this->Report_model->purchaseReportByIngredient($start_date, $end_date, $ingredients_id);
        }
        /* print('<pre>');
          print_r($data['vatReport']);exit; */
        $data['ingredients'] = $this->Inventory_model->getAllByCompanyIdForDropdown($company_id, 'tbl_ingredients');
        $data['main_content'] = $this->load->view('report/purchaseReportByIngredient', $data, TRUE);
        $this->load->view('userHome', $data);
    }
      /**
     * detailed Purchase Report
     * @access public
     * @return void
     * @param no
     */
    public function detailedPurchaseReport() {
        $data = array();
        $company_id = $this->session->userdata('company_id');
        if ($this->input->post('submit')) {
            $start_date =htmlspecialchars($this->input->post($this->security->xss_clean('startDate')));
            $end_date =htmlspecialchars($this->input->post($this->security->xss_clean('endDate')));
            $user_id =htmlspecialchars($this->input->post($this->security->xss_clean('user_id')));
            $data['user_id'] = $user_id;
            $data['start_date'] = $start_date;
            $data['end_date'] = $end_date;
            $data['detailedPurchaseReport'] = $this->Report_model->detailedPurchaseReport($start_date, $end_date, $user_id);
        }
        $data['users'] = $this->Common_model->getAllByCompanyIdForDropdown($company_id, 'tbl_users');
        $data['main_content'] = $this->load->view('report/detailedPurchaseReport', $data, TRUE);
        $this->load->view('userHome', $data);
    }
      /**
     * waste Report
     * @access public
     * @return void
     * @param no
     */
    public function wasteReport() {
        $data = array();
        $company_id = $this->session->userdata('company_id');
        if ($this->input->post('submit')) {
            $outlet_id  = isset($_POST['outlet_id']) && $_POST['outlet_id']?$_POST['outlet_id']:'';
            if(!$outlet_id){
                $outlet_id = $this->session->userdata('outlet_id');
            }
            $data['outlet_id'] = $outlet_id;
            $start_date =htmlspecialchars($this->input->post($this->security->xss_clean('startDate')));
            $end_date =htmlspecialchars($this->input->post($this->security->xss_clean('endDate')));
            $user_id =htmlspecialchars($this->input->post($this->security->xss_clean('user_id')));
            $data['user_id'] = $user_id;
            $data['start_date'] = $start_date;
            $data['end_date'] = $end_date;
            $data['wasteReport'] = $this->Report_model->wasteReport($start_date, $end_date, $user_id,$outlet_id);
        }
        $data['users'] = $this->Common_model->getAllByCompanyIdForDropdown($company_id, 'tbl_users');
        $data['main_content'] = $this->load->view('report/wasteReport', $data, TRUE);
        $this->load->view('userHome', $data);
    }

    public function wasteReportNew() {

      $filter_data = $this->input->post('filter_data');
      parse_str($filter_data,$params);
      $start_date = $params['startDate'] ?? date("Y-m-d"). ' 00:00:00';
      $end_date = $params['endDate']  ?? date("Y-m-d"). ' 23:59:59';
      $user_id = $params['user_id'] ?? '';

      $outlet_id  = isset($params['outlet_id']) && $params['outlet_id']?$params['outlet_id']:'';
      if(!$outlet_id){
          $outlet_id = $this->session->userdata('outlet_id');
      }

      $company_id = $this->session->userdata('company_id');
        // if ($this->input->post('submit')) {

      $getallrecords = $this->Report_model->wasteReportNew($start_date, $end_date, $user_id,$outlet_id);

      $datas = array();
      $grandTotal = 0;
      $countTotal = 0;
      foreach ($getallrecords as $key => $value) {
        $grandTotal+=$value->total_loss;
        $key++;
        $countTotal+=ingredientCount($value->id);

        $datas[] = array(
          "key"=> escape_output($key),
          "reference_no"=> escape_output($value->reference_no),
          "date" => escape_output(date($this->session->userdata('date_format'), strtotime($value->date))),
          "total_loss"=> escape_output(getAmt($value->total_loss)),
          "ingredient_id"=> escape_output(ingredientCount($value->id)),
          "employeed_name"=> escape_output($value->EmployeedName)
        );
      }

      if (empty($datas)) {
          $datas = array();
      } 
      $json_encode['data'] = $datas;
      echo json_encode($json_encode);
    }


    public function wasteExpenseReportNew() {

      $outlet_id = $this->session->userdata('outlet_id');

      $getallrecords = $this->Common_model->getAllByOutletId($outlet_id, "tbl_wastes");

      $datas = array();
      foreach ($getallrecords as $key => $value) {
        $key++;

        $dataid = $value->id;
        $link_ul = base_url().'Waste/wasteDetails/'.$value->id; 

        $view_buttons = "<a style='margin-right:10px' href='$link_ul' title='View Details' class='btn bg-blue-btn'><i class='fa fa-eye tiny-icon'></i></a>";
        $delete_button = "<button id='delete_btn_exp_wst' title='Delete' data-id=$dataid class='btn_list m-right btn bg-blue-btn'> <span class='fa fa-trash'></span></button>";

        $action_div = "<div class='action_div'>".$view_buttons." ".$delete_button."</div>";

        $datas[] = array(
          "key"=> escape_output($key),
          "reference_no"=> escape_output($value->reference_no),
          "date" => escape_output(date($this->session->userdata('date_format'), strtotime($value->date))),
          "total_loss"=> escape_output(getAmt($value->total_loss)),
          "ingredient_id"=> escape_output(ingredientCount($value->id)),
          "employee_id"=> escape_output(employeeName($value->employee_id)),
          "note"=> escape_output($value->note) ,
          "user_id"=> escape_output(userName($value->user_id)),
          "action"=> $action_div ,
        );
      }

      if (empty($datas)) {
          $datas = array();
      } 
      $json_encode['data'] = $datas;
      echo json_encode($json_encode);
    } 

      /**
     * expense Report
     * @access public
     * @return void
     * @param no
     */
    public function expenseReport() {
        $data = array();
        $company_id = $this->session->userdata('company_id');
        if ($this->input->post('submit')) {
            $outlet_id  = isset($_POST['outlet_id']) && $_POST['outlet_id']?$_POST['outlet_id']:'';
            if(!$outlet_id){
                $outlet_id = $this->session->userdata('outlet_id');
            }
            $data['outlet_id'] = $outlet_id;
            $start_date =htmlspecialchars($this->input->post($this->security->xss_clean('startDate')));
            $end_date =htmlspecialchars($this->input->post($this->security->xss_clean('endDate')));
            $expense_item_id =htmlspecialchars($this->input->post($this->security->xss_clean('expense_item_id')));
            $data['expense_item_id'] = $expense_item_id;
            $data['start_date'] = $start_date;
            $data['end_date'] = $end_date;
            $data['expenseReport'] = $this->Report_model->expenseReport($start_date, $end_date, $expense_item_id,$outlet_id);
        }
        $data['expense_items'] = $this->Common_model->getAllByCompanyIdForDropdown($company_id, 'tbl_expense_items');
        $data['main_content'] = $this->load->view('report/expenseReport', $data, TRUE);
        $this->load->view('userHome', $data);
    }


    public function expenseReportNew() {

      $filter_data = $this->input->post('filter_data');
      parse_str($filter_data,$params);
      $start_date = $params['startDate'] ?? date("Y-m-d"). ' 00:00:00';
      $end_date = $params['endDate']  ?? date("Y-m-d"). ' 23:59:59';
      $expense_item_id = $params['expense_item_id'] ?? '';

      $outlet_id  = isset($params['outlet_id']) && $params['outlet_id']?$params['outlet_id']:'';
      if(!$outlet_id){
          $outlet_id = $this->session->userdata('outlet_id');
      }
      $getallrecords = $this->Report_model->expenseReportNew($start_date, $end_date, $expense_item_id,$outlet_id);
      
      $datas = array();
      $grandTotal = 0;
      $countTotal = 0;

      foreach ($getallrecords as $key => $value) {
        $grandTotal+=$value->amount;
        $key++;
        $datas[] = array(
            "id" => escape_output($key),
            "date" => escape_output(date($this->session->userdata('date_format'), strtotime($value->date))),
            "amount" => escape_output(getAmt($value->amount)),
            "categoryName" => escape_output($value->categoryName),
            "EmployeedName" => escape_output($value->EmployeedName),
        );
      }

      if (empty($datas)) {
          $datas = array();
      } 
      $json_encode['data'] = $datas;
      echo json_encode($json_encode);

        // if ($this->input->post('submit')) {
            // $outlet_id  = isset($_POST['outlet_id']) && $_POST['outlet_id']?$_POST['outlet_id']:'';
            // if(!$outlet_id){
            //     $outlet_id = $this->session->userdata('outlet_id');
            // }
            // $data['outlet_id'] = $outlet_id;
            // $start_date =htmlspecialchars($this->input->post($this->security->xss_clean('startDate')));
            // $end_date =htmlspecialchars($this->input->post($this->security->xss_clean('endDate')));
            // $expense_item_id =htmlspecialchars($this->input->post($this->security->xss_clean('expense_item_id')));
            // $data['expense_item_id'] = $expense_item_id;
            // $data['start_date'] = $start_date;
            // $data['end_date'] = $end_date;
            // $data['expenseReport'] = $this->Report_model->expenseReport($start_date, $end_date, $expense_item_id,$outlet_id);
        // }
        
        // $data['main_content'] = $this->load->view('report/expenseReport', $data, TRUE);
        // $this->load->view('userHome', $data);
    }

      /**
     * kitchen Performance Report
     * @access public
     * @return void
     * @param no
     */
    public function kitchenPerformanceReport() {
        $data = array();
        $company_id = $this->session->userdata('company_id');
        if ($this->input->post('submit')) {
            $outlet_id  = isset($_POST['outlet_id']) && $_POST['outlet_id']?$_POST['outlet_id']:'';
            if(!$outlet_id){
                $outlet_id = $this->session->userdata('outlet_id');
            }
            $data['outlet_id'] = $outlet_id;
            $start_date =htmlspecialchars($this->input->post($this->security->xss_clean('startDate')));
            $end_date =htmlspecialchars($this->input->post($this->security->xss_clean('endDate'))); 
            $data['start_date'] = $start_date;
            $data['end_date'] = $end_date;
            $data['kitchenPerformanceReport'] = $this->Report_model->kitchenPerformanceReport($start_date, $end_date,$outlet_id);
        } 
        $data['main_content'] = $this->load->view('report/kitchenPerformanceReport', $data, TRUE);
        $this->load->view('userHome', $data);
    }
      /**
     * supplier Due Report
     * @access public
     * @return void
     * @param no
     */
    public function supplierDueReport() {
        $data = array();
        $outlet_id  = isset($_POST['outlet_id']) && $_POST['outlet_id']?$_POST['outlet_id']:'';
        if(!$outlet_id){
            $outlet_id = $this->session->userdata('outlet_id');
        }
        $data['outlet_id'] = $outlet_id;
        $data['supplierDueReport'] = $this->Report_model->supplierDueReport($outlet_id);
        $data['main_content'] = $this->load->view('report/supplierDueReport', $data, TRUE);
        $this->load->view('userHome', $data);
    }

    public function supplierDueReportNew() {

      $filter_data = $this->input->post('filter_data');

        parse_str($filter_data,$params);
        $outlet_id  = isset($params['outlet_id']) && $params['outlet_id']?$params['outlet_id']:'';
        if(!$outlet_id){
            $outlet_id = $this->session->userdata('outlet_id');
        }

        $getallrecords = $this->Report_model->supplierDueReportNew($outlet_id);
       
        $i = 1;

        $pGrandTotal = 0;

        foreach ($getallrecords as $key => $value) {
          if ($value->totalDue){
            $datas[] = array(
                "id" => escape_output($i),
                "name" => escape_output($value->name), 
                "totalDue" => escape_output(getAmt($value->totalDue)),
            );
          }
          $i++;
      }
      if (empty($datas)) {
          $datas = array();
      }
      $json_encode['data'] = $datas;
      echo json_encode($json_encode);

        // // $data['outlet_id'] = $outlet_id;
        // $data['supplierDueReport'] = $this->Report_model->supplierDueReport($outlet_id);
        // $data['main_content'] = $this->load->view('report/supplierDueReport', $data, TRUE);
        // $this->load->view('userHome', $data);
    }
      /**
     * customer Due Report
     * @access public
     * @return void
     * @param no
     */
    public function customerDueReport() {
        $data = array();
        $outlet_id  = isset($_POST['outlet_id']) && $_POST['outlet_id']?$_POST['outlet_id']:'';
        if(!$outlet_id){
            $outlet_id = $this->session->userdata('outlet_id');
        }
        $data['outlet_id'] = $outlet_id;
        $data['customerDueReport'] = $this->Report_model->customerDueReport($outlet_id);
        $data['main_content'] = $this->load->view('report/customerDueReport', $data, TRUE);
        $this->load->view('userHome', $data);
    }

    public function customerDueReportNew() {

      $filter_data = $this->input->post('filter_data');

      parse_str($filter_data,$params);

        // $data = array();
        $outlet_id  = isset($params['outlet_id']) && $params['outlet_id']?$params['outlet_id']:'';
        if(!$outlet_id){
            $outlet_id = $this->session->userdata('outlet_id');
        }

        // $data['outlet_id'] = $outlet_id;
 
        $getallrecords = $this->Report_model->customerDueReportNew($outlet_id);
       
        $i = 1;

        $pGrandTotal = 0;

        foreach ($getallrecords as $key => $value) {
          if ($value->totalDue){
            $datas[] = array(
                "id" => escape_output($i),
                "name" => escape_output($value->name), 
                "totalDue" => escape_output(getAmt($value->totalDue)),
            );
          }
          $i++;
      }
      if (empty($datas)) {
          $datas = array();
      }
      $json_encode['data'] = $datas;
      echo json_encode($json_encode);

        // $data['customerDueReport'] = $this->Report_model->customerDueReport($outlet_id);
        // $data['main_content'] = $this->load->view('report/customerDueReport', $data, TRUE);
        // $this->load->view('userHome', $data);

    }
      /**
     * get Inventory Alert List
     * @access public
     * @return void
     * @param no
     */
    public function getInventoryAlertList() {
        $data = array();
        $data['inventory'] = $this->Report_model->getInventoryAlertList();
        $data['main_content'] = $this->load->view('report/inventoryAlertList', $data, TRUE);
        $this->load->view('userHome', $data);
    }

    public function getInventoryAlertListNew() {
 
        $getallrecords = $this->Report_model->getInventoryAlertListNew();

        $totalStock = 0;
        $grandTotal = 0;
        $totalTK = 0;
        $i = 1;

        foreach ($getallrecords as $key => $value) {

          if($value->id){
              $totalStock = $value->total_purchase - $value->total_consumption - $value->total_modifiers_consumption - $value->total_waste + $value->total_consumption_plus - $value->total_consumption_minus + $value->total_transfer_plus  - $value->total_transfer_minus  +  $value->total_transfer_plus_2  -  $value->total_transfer_minus_2;
              $totalTK = $totalStock * getLastPurchaseAmount($value->id);
              if ($totalStock <= $value->alert_quantity){
                  if ($totalStock >= 0) {
                      $grandTotal = $grandTotal + $totalStock * getLastPurchaseAmount($value->id);
                  }
                  $key++;

                  $i++;
              }
          }

          $datas[] = array(
              "id" => escape_output($i),
              "code" => escape_output($value->name . "(" . $value->code . ")"), 
              "category" => escape_output($value->category_name),
              "stock_amount" => "<span style='($totalStock <= $value->alert_quantity) ? 'color:red' : '''>".($totalStock) ? getAmtP($totalStock) : getAmtP(0) ." ". escape_output($value->unit_name) ." </span>",
              "alert_quantity" => escape_output(getAmtP($value->alert_quantity) . " " . $value->unit_name),
          );
        }
          // $data['outlet_id'] = $outlet_id;
          // $data['user_id'] = $user_id;
          // $data['waiter_id'] = $waiter_id;
          // $data['start_date'] = $start_date;
          // $data['end_date'] = $end_date;
          if (empty($datas)) {
              $datas = array();
          }
            // $data = array(
            //     "data" => $datas,
            // );
        $json_encode['data'] = $datas;
        echo json_encode($json_encode);
    }

    public function getExpenseInventoryAlertListNew() {
        
        $outlet_id = $this->session->userdata('outlet_id');

        $getallrecords = $this->Common_model->getAllByOutletId($outlet_id, "tbl_inventory_adjustment");

        foreach ($getallrecords as $key => $value) {
          $key++;
          $link_ul = base_url().'Inventory_adjustment/inventoryAdjustmentDetails/'.$value->id;

          $buttons = "<a href='$link_ul' title='View Details' class='btn bg-blue-btn'><i class='fa fa-eye tiny-icon'></i></a>";

          $datas[] = array(
            "key" => $key,
            "reference_no" => escape_output($value->reference_no),
            "date" => escape_output(date($this->session->userdata('date_format'), strtotime($value->date))),
            "ing_count" => ingredientCountConsumption($value->id),
            "employee_id" => escape_output(employeeName($value->employee_id)),
            "note" => escape_output($value->note),
            "user_id" => escape_output(userName($value->user_id)),
            "action" => $buttons,
          );
        }

        if (empty($datas)) {
            $datas = array();
        }

        $json_encode['data'] = $datas;
        echo json_encode($json_encode);
    }
      /**
     * attendance Report
     * @access public
     * @return void
     * @param no
     */
    public function attendanceReport() {
        $data = array();
        $company_id = $this->session->userdata('company_id');
        if ($this->input->post('submit')) {
            $start_date =htmlspecialchars($this->input->post($this->security->xss_clean('startDate')));
            $end_date =htmlspecialchars($this->input->post($this->security->xss_clean('endDate')));
            $employee_id =htmlspecialchars($this->input->post($this->security->xss_clean('employee_id')));
            $data['employee_id'] = $employee_id;
            $data['start_date'] = $start_date;
            $data['end_date'] = $end_date;
            $data['attendanceReport'] = $this->Report_model->attendanceReport($start_date, $end_date, $employee_id);
        }
        $company_id = $this->session->userdata('company_id');
        $data['employees'] = $this->Common_model->getAllByCompanyIdForDropdown($company_id, "tbl_users");
        $data['main_content'] = $this->load->view('report/attendanceReport', $data, TRUE);
        $this->load->view('userHome', $data);
    }

    public function attendanceReportNew() {
 
      $company_id = $this->session->userdata('company_id');

      $filter_data = $this->input->post('filter_data');
      parse_str($filter_data,$params);
      $start_date = $params['startDate'];
      $end_date = $params['endDate'];
      $employee_id = $params['employee_id'];
      // $user_id = $params['user_id'];
      // $outlet_id = $params['outlet_id'];

        // if ($this->input->post('submit')) {
            // $start_date =htmlspecialchars($this->input->post($this->security->xss_clean('startDate')));
            // $end_date =htmlspecialchars($this->input->post($this->security->xss_clean('endDate')));
            // $employee_id =htmlspecialchars($this->input->post($this->security->xss_clean('employee_id')));
            // $data['employee_id'] = $employee_id;
            // $data['start_date'] = $start_date;
            // $data['end_date'] = $end_date;
            // $data['attendanceReport'] = $this->Report_model->attendanceReport($start_date, $end_date, $employee_id);
        // }
        $company_id = $this->session->userdata('company_id');
        // $data['employees'] = $this->Common_model->getAllByCompanyIdForDropdown($company_id, "tbl_users");

      $getallrecords = $this->Report_model->attendanceReportNew($start_date, $end_date, $employee_id);


      $datas = array();
      $total_hours = 0;

      $time_taken = '';
      foreach ($getallrecords as $key => $value) {
        $key++;

        if($value->out_time == '00:00:00'){ 
            $time_taken = 'N/A'; 
        }else{ 
            $to_time = strtotime($value->out_time);
            $from_time = strtotime($value->in_time);
            $minute = round(abs($to_time - $from_time) / 60,2); 
            $hour = round(abs($minute) / 60,2);
            $time_taken = escape_output($hour)." ".lang('hour');
            $total_hours += $hour;
        }
        if($value->out_time == '00:00:00'){ 
            $out_time = 'N/A<br>';  
        }else{ 
            $out_time = escape_output($value->out_time);
        } 
        $datas[] = array(
            "id" => escape_output($key),
            "reference_no" => escape_output($value->reference_no),
            "sale_date" => escape_output(date($this->session->userdata('date_format'), strtotime($value->date))),
            "employee_id" => escape_output(employeeName($value->employee_id)),
            "in_time" => escape_output($value->in_time),
            "out_time" => $out_time,
            "time_taken" => $time_taken,
        );

      } 

      if (empty($datas)) {
          $datas = array();
      }

      $json_encode['data'] = $datas;
      echo json_encode($json_encode);
    }    


    public function auditLogReport()
    {
        $data = array();
        $data['submit_d'] = false;
        if ($this->input->post('submit')) {
            if($this->input->post('startDate')){
                $start_date = date("Y-m-d", strtotime($this->input->post('startDate')));
            }else{
                $start_date = '';
            }
            if($this->input->post('endDate')){
                $end_date = date("Y-m-d", strtotime($this->input->post('endDate')));
            }else{
                $end_date = '';
            }
            $outlet_id  = isset($_POST['outlet_id']) && $_POST['outlet_id']?$_POST['outlet_id']:'';
            if(!$outlet_id){
                $outlet_id = $this->session->userdata('outlet_id');
            }

            $data['submit_d'] = true;
            $user_id = $this->input->post('user_id');
            $event_title = $this->input->post('event_title');
            $data['auditLogReport'] = $this->Report_model->auditLogReport($start_date,$end_date,$user_id,$event_title,$outlet_id);
            $data['start_date'] = $start_date;
            $data['end_date'] = $end_date;
            $data['user_id'] = $user_id;
            $data['event_title'] = $event_title;
        }
        $data['users'] =   $this->Common_model->getAllByTable("tbl_users");
        $data['main_content'] = $this->load->view('report/auditLogReport', $data, TRUE);
        $this->load->view('userHome', $data);
    }

    /**
     * transfer report
     * @access public
     * @return void
     * @param no
     */
    public function transferReport() {
        $data = array();
        if ($this->input->post('submit')) {
            $from_outlet_id  = isset($_POST['from_outlet_id']) && $_POST['from_outlet_id']?$_POST['from_outlet_id']:'';
            $to_outlet_id  = isset($_POST['to_outlet_id']) && $_POST['to_outlet_id']?$_POST['to_outlet_id']:'';

            $start_date =htmlspecialchars($this->input->post($this->security->xss_clean('startDate')));
            $end_date =htmlspecialchars($this->input->post($this->security->xss_clean('endDate')));
            $data['start_date'] = $start_date;
            $data['end_date'] = $end_date;
            $data['from_outlet_id'] = $from_outlet_id;
            $data['to_outlet_id'] = $to_outlet_id;
            $data['transferReport'] = $this->Report_model->transferReport($start_date, $end_date,$from_outlet_id,$to_outlet_id);
            foreach ($data['transferReport'] as $key=>$value){
                $foods = '';
                $food_list = $this->Common_model->getAllByCustomId($value->id,"transfer_id","tbl_transfer_ingredients",$order='');;
                foreach ($food_list as $keys=>$value1){
                    $foods.=getIngredientNameById($value1->ingredient_id)."(".getIngredientCodeById($value1->ingredient_id).") - ".$value1->quantity_amount." ".unitName(getPUnitIdByIgId($value1->ingredient_id));
                    if($keys>sizeof($food_list)-1){
                        $foods.="<br>";
                    }
                }
                $data['transferReport'][$key]->foods = $foods;
            }
        }
        $data['main_content'] = $this->load->view('report/transferReport', $data, TRUE);
        $this->load->view('userHome', $data);
    }
    public function productionReport() {
        $data = array();
        if ($this->input->post('submit')) {
            $start_date =htmlspecialchars($this->input->post($this->security->xss_clean('startDate')));
            $end_date =htmlspecialchars($this->input->post($this->security->xss_clean('endDate')));
            $data['start_date'] = $start_date;
            $data['end_date'] = $end_date;
            $data['productionReport'] = $this->Report_model->productionReport($start_date, $end_date);
            foreach ($data['productionReport'] as $key=>$value){
                $foods = '';
                $food_list = $this->Common_model->getAllByCustomId($value->id,"production_id","tbl_production_ingredients",$order='');;
                foreach ($food_list as $keys=>$value1){
                    $foods.=getIngredientNameById($value1->ingredient_id)."(".getIngredientCodeById($value1->ingredient_id).") - ".$value1->quantity_amount." ".unitName(getUnitIdByIgId($value1->ingredient_id));
                    if($keys<sizeof($food_list)-1){
                        $foods.="<br>";
                    }
                }
                $data['productionReport'][$key]->foods = $foods;
            }
        }
        $outlet_id = $this->session->userdata('outlet_id');
        $data['kitchens'] = $this->Common_model->getAllByOutletId($outlet_id, "tbl_kitchens");
        $data['main_content'] = $this->load->view('report/productionReport', $data, TRUE);
        $this->load->view('userHome', $data);
    }

}
