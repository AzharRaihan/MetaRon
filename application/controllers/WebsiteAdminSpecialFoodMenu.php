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
  # This is Website Admin
  ###########################################################
 */
defined('BASEPATH') OR exit('No direct script access allowed');

class WebsiteAdminSpecialFoodMenu extends Cl_Controller {
    public function __construct() {
        parent::__construct();
        $this->load->model('Authentication_model');
        $this->load->model('Common_model'); 
        $this->load->library('form_validation');
        $this->Common_model->setDefaultTimezone();
        if (!$this->session->has_userdata('user_id')) {
            redirect('Authentication/index');
        }
        //start check access function
        $segment_2 = $this->uri->segment(2);
        $segment_3 = $this->uri->segment(3);
        $controller = "357";
        $function = "";

        if($segment_2=="addSpecialMenu" || $segment_2=="changeStatus"){
            $function = "add";
        }else if ($segment_2 == "editSpecialMenu" || $segment_2 == "updateSpecialMenu"){
            $function = "edit";
        }else if($segment_2=="webSpecialMenu"){
            $function = "list";
        }else if($segment_2=="specialMenuList"){
            $function = "list";
        }else if($segment_2=="deleteSpecialMenu"){
            $function = "delete";
        }else{
            $this->session->set_flashdata('exception_er', lang('menu_not_permit_access'));
            redirect('Authentication/userProfile');
        }
        if(!checkAccess($controller,$function)){
            $this->session->set_flashdata('exception_er', lang('menu_not_permit_access'));
            redirect('Authentication/userProfile');
        }
        //end check access function
    }




        
    /**
     * Add Special Menu
     * @access public
     * @return void
     * @param 
     */
    public function addSpecialMenu()
    {
        $company_id = $this->session->userdata('company_id');
        if ($this->input->is_ajax_request()) {
            $this->form_validation->set_rules('title', lang('title'), 'required|max_length[250]');
            $this->form_validation->set_rules('description', lang('description'), 'required|max_length[500]');
            if ($_FILES['menu_img_1']['name'] != "") {
                $this->form_validation->set_rules('menu_img_1', '', 'callback_validate_menu_img_1');
            }
            if ($this->form_validation->run() == TRUE) {
                $our_menu = array();
                $our_menu['title'] =htmlspecialchars($this->input->post($this->security->xss_clean('title')));
                $our_menu['description'] =htmlspecialchars($this->input->post($this->security->xss_clean('description')));
                if ($_FILES['menu_img_1']['name'] != "") {
                    $our_menu['menu_img_1'] = $this->session->userdata('menu_img_1');
                    $this->session->unset_userdata('menu_img_1');
                }else{
                    $our_menu['menu_img_1'] =htmlspecialchars($this->input->post($this->security->xss_clean('menu_img_1')));
                }
                $our_menu['status'] =htmlspecialchars($this->input->post($this->security->xss_clean('status')));
                $our_menu['company_id'] = $company_id;
                $this->Common_model->insertInformation($our_menu, "tbl_special_food_menus");
                $response = [
					'status' => 'success',
					'message' => 'Data Successfully Saved',
				];
                $this->output->set_content_type('application/json')->set_output(json_encode($response));
            } 
        }
    }



    
    /**
     * Special Menu List
     * @access public
     * @return void
     * @param 
     */
    public function specialMenuList()
    {
        $company_id = $this->session->userdata('company_id');
        $all_data = $this->Common_model->getAllDataByCompanyId($company_id, 'tbl_special_food_menus');
		echo json_encode(['status'=> 200, 'all_data'=> $all_data]);
    }



    /**
     * Change Special Menu Status
     * @access public
     * @return void
     * @param int
     */
    public function changeStatus($id)
    {
        if ($this->input->is_ajax_request()) {
            $banner_info = array();
            $banner_info['status'] =htmlspecialchars($this->input->post($this->security->xss_clean('status')));
            $this->Common_model->updateInformation($banner_info, $id, "tbl_special_food_menus");
            $response = [
                'status' => 'success',
                'message' => 'Data Successfully Saved',
            ];
            $this->output->set_content_type('application/json')->set_output(json_encode($response));
        }
    }

  

    /**
     * View Special Menu List
     * @access public
     * @return array
     */
    public function webSpecialMenu()
    {
        $data = array();
        $data['main_content'] = $this->load->view('website_admin/special_food_menu', $data, TRUE);
        $this->load->view('userHome', $data);
    }


    /**
     * Validate Special Menu Image
     * @access public
     * @return string
     * @param boolean
     */
    public function validate_menu_img_1() {
        if ($_FILES['menu_img_1']['name'] != "") {
            $config['upload_path'] = 'images/website/special_food_menu/';
            $config['allowed_types'] = 'jpg|jpeg|png';
            $config['max_size'] = '1000';
            $config['encrypt_name'] = TRUE;
            $config['detect_mime'] = TRUE;
            $this->load->library('upload', $config);
            if ($this->upload->do_upload("menu_img_1")) {
                $upload_info = $this->upload->data();
                $file_name = $upload_info['file_name'];
                $config['image_library'] = 'gd2';
                $config['source_image'] = 'images/website/special_food_menu/' . $file_name;
                $config['maintain_ratio'] = false;
                $this->load->library('image_lib', $config);
                $this->image_lib->resize();
                $this->session->set_userdata('menu_img_1', $file_name);
            } else {
                $this->form_validation->set_message('validate_menu_img_1', $this->upload->display_errors());
                return FALSE;
            }
        }
    }
    /**
     * Edit Special Menu
     * @access public
     * @return void
     * @param int
     */
	public function editSpecialMenu($id){
        $data = $this->Common_model->getDataById($id, 'tbl_special_food_menus');
        $response = [
            'status' => 'success',
            'data' => $data, 
        ];
        $this->output->set_content_type('application/json')->set_output(json_encode($response));
    }

    /**
     * Update Special Menu
     * @access public
     * @return void
     * @param int
     */
    public function updateSpecialMenu($id)
    {
        $company_id = $this->session->userdata('company_id');
        if ($this->input->is_ajax_request()) {
            $this->form_validation->set_rules('title', lang('title'), 'required|max_length[250]');
            $this->form_validation->set_rules('description', lang('description'), 'required|max_length[500]');
            if ($_FILES['menu_img_1']['name'] != "") {
                $this->form_validation->set_rules('menu_img_1', '', 'callback_validate_menu_img_1');
            }
            if ($this->form_validation->run() == TRUE) {
                $banner_info = array();
                $banner_info['title'] =htmlspecialchars($this->input->post($this->security->xss_clean('title')));
                $banner_info['description'] =htmlspecialchars($this->input->post($this->security->xss_clean('description')));
                if ($_FILES['menu_img_1']['name'] != "") {
                    $banner_info['menu_img_1'] = $this->session->userdata('menu_img_1');
                    $this->session->unset_userdata('menu_img_1');
                }else{
                    $banner_info['menu_img_1'] =htmlspecialchars($this->input->post($this->security->xss_clean('menu_img_1')));
                }
                $banner_info['status'] =htmlspecialchars($this->input->post($this->security->xss_clean('status')));
                $banner_info['company_id'] = $company_id;
                $this->Common_model->updateInformation($banner_info, $id, "tbl_special_food_menus");
                $response = [
					'status' => 'success',
					'message' => 'Data Successfully Saved',
				];
                $this->output->set_content_type('application/json')->set_output(json_encode($response));
            } 
        }
    }

    /**
     * Delete Special Menu
     * @access public
     * @return void
     * @param int
     */
    public function deleteSpecialMenu($id) {
        $id = $this->custom->encrypt_decrypt($id, 'decrypt');
        $this->Common_model->deleteStatusChange($id, "tbl_special_food_menus");
        $response = [
            'status' => 'success',
            'message' => 'Data Successfully Deleted',
        ];
        $this->output->set_content_type('application/json')->set_output(json_encode($response));
    }




    

}
