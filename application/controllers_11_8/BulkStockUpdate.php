<?php
/*
  ###########################################################
  # PRODUCT NAME: 	One Stop
  ###########################################################
  # AUTHER:		Door Soft
  ###########################################################
  # EMAIL:		info@doorsoft.co
  ###########################################################
  # COPYRIGHTS:		RESERVED BY Door Soft
  ###########################################################
  # WEBSITE:		http://www.doorsoft.co
  ###########################################################
  # This is BulkPriceUpdate Controller
  ###########################################################
 */
defined('BASEPATH') OR exit('No direct script access allowed');

class BulkStockUpdate extends Cl_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('Common_model');
        $this->Common_model->setDefaultTimezone();
        $this->load->library('form_validation');


        if (!$this->session->has_userdata('user_id')) {
            redirect('Authentication/index');
        }
        if (!$this->session->has_userdata('outlet_id')) {
            $this->session->set_flashdata('exception_2', lang('please_click_green_button'));

            $this->session->set_userdata("clicked_controller", $this->uri->segment(1));
            $this->session->set_userdata("clicked_method", $this->uri->segment(2));
            redirect('Outlet/outlets');
        }
        $getAccessURL = ucfirst($this->uri->segment(1));
        if (!in_array($getAccessURL, $this->session->userdata('menu_access'))) {
            redirect('Authentication/userProfile');
        }
        $login_session['active_menu_tmp'] = '';
        $this->session->set_userdata($login_session);
        //end check access function*/
    }

    /**
     * product bulk upload view
     * @access public
     * @return void
     */
    public function index() {
        $company_id = $this->session->userdata('company_id');
        $data = array();
        $data['storages'] = $this->Common_model->getAllByCompanyIdForDropdown($company_id, "tbl_kitchens");
        if (htmlspecialchars($this->input->post('submit'))) {
            $this->form_validation->set_rules('outlet_id', lang('outlet'), 'required|max_length[50]');
            if(sizeof($data['storages'])>0):
                $this->form_validation->set_rules('starages', lang('storage'), 'required|max_length[50]');
                endif;

            if ($this->form_validation->run() == TRUE) {
                $outlet_id = htmlspecialchars($this->input->post('outlet_id'));
                $storage_id = htmlspecialchars($this->input->post('starages'));

                $data['storage_id'] = $storage_id;
                $data['outlet_id'] = $outlet_id;
                $data['ingredients'] = $this->Common_model->getPreMadeIngredients($company_id, "Plain Ingredient");
                $data['main_content'] = $this->load->view('master/ingredient/bulk_price_upload', $data, TRUE);
                $this->load->view('userHome', $data);
            }else{
                $data['main_content'] = $this->load->view('master/ingredient/bulk_price_upload', $data, TRUE);
                $this->load->view('userHome', $data);
            }

        } else {
            $data['main_content'] = $this->load->view('master/ingredient/bulk_price_upload', $data, TRUE);
            $this->load->view('userHome', $data);
        }
    }
    /**
     * update bulk sale price
     * @access public
     * @return void
     * @param no
     */
    public function update(){
        $product_id = ($this->input->post('product_id'));

        $this->db->set('del_status', "Deleted");
        $this->db->where("outlet_id", $_POST['outlet_id_hidden']);
        $this->db->where("storage_id", $_POST['starages_hidden']);
        $this->db->update("tbl_default_stocks");

        for ($i=0;$i<sizeof($product_id);$i++){
            $txt = "stock_qty".$product_id[$i];
            $this_value =$_POST[$txt];

            $data = array();
            $data['ingredient_id'] = $product_id[$i];
            $data['outlet_id'] = $_POST['outlet_id_hidden'];
            $data['storage_id'] = $_POST['starages_hidden'];
            $data['company_id'] = $this->session->userdata('company_id');
            $data['stock'] = $this_value;
            $this->Common_model->insertInformation($data, "tbl_default_stocks");
        }
        redirect('BulkStockUpdate');
    }

}
