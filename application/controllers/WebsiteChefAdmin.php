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

class WebsiteChefAdmin extends Cl_Controller {
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
        $controller = "339";
        $function = "";

        if($segment_2=="addEditChef" || $segment_2=="changeStatus"){
            $function = "add";
        }else if ($segment_2 == "editChef" || $segment_2 == "updateChef"){
            $function = "edit";
        }else if($segment_2=="webChefSetting"){
            $function = "list";
        }else if($segment_2=="chefList"){
            $function = "list";
        }else if($segment_2=="deleteChef"){
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
     * Chefs List
     * @access public
     * @return void
     * @param 
     */
    public function chefList()
    {
        $company_id = $this->session->userdata('company_id');
        $all_data = $this->Common_model->getAllDataByCompanyId($company_id, 'tbl_chefs');
		echo json_encode(['status'=> 200, 'all_data'=> $all_data]);
    }

    
    /**
     * View Chefs List
     * @access public
     * @return array
     */
    public function webChefSetting()
    {
        $data = array();
        $data['main_content'] = $this->load->view('website_admin/chef', $data, TRUE);
        $this->load->view('userHome', $data);
    }
        
    /**
     * Add Chefs
     * @access public
     * @return void
     * @param 
     */
    public function addEditChef()
    {
        $company_id = $this->session->userdata('company_id');
        if ($this->input->is_ajax_request()) {
            $this->form_validation->set_rules('name', lang('name'), 'required|max_length[250]');
            if ($_FILES['chef_image']['name'] != "") {
                $this->form_validation->set_rules('chef_image', lang('chef_image'), 'callback_validate_chef_image');
            }
            if ($this->form_validation->run() == TRUE) {
                $chef_info = array();
                $chef_info['name'] =htmlspecialchars($this->input->post($this->security->xss_clean('name')));
                if ($_FILES['chef_image']['name'] != "") {
                    $chef_info['chef_image'] = $this->session->userdata('chef_image');
                    $this->session->unset_userdata('chef_image');
                }else{
                    $chef_info['chef_image'] =htmlspecialchars($this->input->post($this->security->xss_clean('chef_image')));
                }
                $chef_info['status'] =htmlspecialchars($this->input->post($this->security->xss_clean('status')));
                $chef_info['company_id'] = $company_id;
                $this->Common_model->insertInformation($chef_info, "tbl_chefs");
                $response = [
					'status' => 'success',
					'message' => 'Data Successfully Saved',
				];
                $this->output->set_content_type('application/json')->set_output(json_encode($response));
            } 
        }
    }


    /**
     * Change Chefs Status
     * @access public
     * @return void
     * @param int
     */
    public function changeStatus($id)
    {
        if ($this->input->is_ajax_request()) {
            $chef_info = array();
            $chef_info['status'] =htmlspecialchars($this->input->post($this->security->xss_clean('status')));
            $this->Common_model->updateInformation($chef_info, $id, "tbl_chefs");
            $response = [
                'status' => 'success',
                'message' => 'Data Successfully Saved',
            ];
            $this->output->set_content_type('application/json')->set_output(json_encode($response));
        }
    }


    /**
     * Validate Chefs Image
     * @access public
     * @return string
     * @param boolean
     */
    public function validate_chef_image() {
        if ($_FILES['chef_image']['name'] != "") {
            $config['upload_path'] = 'images/website/chef/';
            $config['allowed_types'] = 'jpg|jpeg|png';
            $config['max_size'] = '1000';
            $config['encrypt_name'] = TRUE;
            $config['detect_mime'] = TRUE;
            $this->load->library('upload', $config);
            if ($this->upload->do_upload("chef_image")) {
                $upload_info = $this->upload->data();
                $file_name = $upload_info['file_name'];
                $config['image_library'] = 'gd2';
                $config['source_image'] = 'images/website/chef/' . $file_name;
                $config['maintain_ratio'] = false;
                $this->load->library('image_lib', $config);
                $this->image_lib->resize();
                $this->session->set_userdata('chef_image', $file_name);
            } else {
                $this->form_validation->set_message('validate_chef_image', $this->upload->display_errors());
                return FALSE;
            }
        }



    }

    /**
     * Edit Chefs
     * @access public
     * @return void
     * @param int
     */
	public function editChef($id){
        $data = $this->Common_model->getDataById($id, 'tbl_chefs');
        $response = [
            'status' => 'success',
            'data' => $data, 
        ];
        $this->output->set_content_type('application/json')->set_output(json_encode($response));
    }

    /**
     * Update Chefs
     * @access public
     * @return void
     * @param int
     */
    public function updateChef($id)
    {
        $company_id = $this->session->userdata('company_id');
        if ($this->input->is_ajax_request()) {
            $this->form_validation->set_rules('name', lang('name'), 'required|max_length[250]');
            if ($_FILES['chef_image']['name'] != "") {
                $this->form_validation->set_rules('chef_image', lang('chef_image'), 'callback_validate_chef_image');
            }
            if ($this->form_validation->run() == TRUE) {
                $chef_info = array();
                $chef_info['name'] =htmlspecialchars($this->input->post($this->security->xss_clean('name')));
                if ($_FILES['chef_image']['name'] != "") {
                    $chef_info['chef_image'] = $this->session->userdata('chef_image');
                    $this->session->unset_userdata('chef_image');
                }else{
                    $chef_info['chef_image'] =htmlspecialchars($this->input->post($this->security->xss_clean('chef_image')));
                }
                $chef_info['status'] =htmlspecialchars($this->input->post($this->security->xss_clean('status')));
                $chef_info['company_id'] = $company_id;
                $this->Common_model->updateInformation($chef_info, $id, "tbl_chefs");
                $response = [
					'status' => 'success',
					'message' => 'Data Successfully Saved',
				];
                $this->output->set_content_type('application/json')->set_output(json_encode($response));
            } 
        }
    }

    /**
     * Delete Chefs
     * @access public
     * @return void
     * @param int
     */
    public function deleteChef($id) {
        $id = $this->custom->encrypt_decrypt($id, 'decrypt');
        $this->Common_model->deleteStatusChange($id, "tbl_chefs");
        $response = [
            'status' => 'success',
            'message' => 'Data Successfully Deleted',
        ];
        $this->output->set_content_type('application/json')->set_output(json_encode($response));
    }




    

}
