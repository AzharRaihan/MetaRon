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

class WebsiteAdmin extends Cl_Controller {
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

        if($segment_2=="addEditBanner" || $segment_2=="changeStatus"){
            $function = "add";
        }else if ($segment_2 == "editBanner" || $segment_2 == "updateBanner"){
            $function = "edit";
        }else if($segment_2=="webBannerSetting"){
            $function = "list";
        }else if($segment_2=="bannerList"){
            $function = "list";
        }else if($segment_2=="deleteBanner"){
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
     * Banner List
     * @access public
     * @return void
     * @param 
     */
    public function bannerList()
    {
        $company_id = $this->session->userdata('company_id');
        $all_data = $this->Common_model->getAllDataByCompanyId($company_id, 'tbl_banners');
		echo json_encode(['status'=> 200, 'all_data'=> $all_data]);
    }

    
    /**
     * View Banner List
     * @access public
     * @return array
     */
    public function webBannerSetting()
    {
        $data = array();
        $data['main_content'] = $this->load->view('website_admin/banner_setting', $data, TRUE);
        $this->load->view('userHome', $data);
    }
        
    /**
     * Add banner
     * @access public
     * @return void
     * @param 
     */
    public function addEditBanner()
    {
        $company_id = $this->session->userdata('company_id');
        if ($this->input->is_ajax_request()) {
            $this->form_validation->set_rules('title', lang('title'), 'required|max_length[250]');
            $this->form_validation->set_rules('sub_title', lang('sub_title'), 'required|max_length[250]');
            if ($_FILES['banner_image']['name'] != "") {
                $this->form_validation->set_rules('banner_image', lang('banner_image'), 'callback_validate_banner_image');
            }
            if ($this->form_validation->run() == TRUE) {
                $banner_info = array();
                $banner_info['title'] =htmlspecialchars($this->input->post($this->security->xss_clean('title')));
                $banner_info['sub_title'] =htmlspecialchars($this->input->post($this->security->xss_clean('sub_title')));
                if ($_FILES['banner_image']['name'] != "") {
                    $banner_info['banner_image'] = $this->session->userdata('banner_image');
                    $this->session->unset_userdata('banner_image');
                }else{
                    $banner_info['banner_image'] =htmlspecialchars($this->input->post($this->security->xss_clean('banner_image')));
                }
                $banner_info['link'] =htmlspecialchars($this->input->post($this->security->xss_clean('link')));
                $banner_info['status'] =htmlspecialchars($this->input->post($this->security->xss_clean('status')));
                $banner_info['company_id'] = $company_id;
                $this->Common_model->insertInformation($banner_info, "tbl_banners");
                $response = [
					'status' => 'success',
					'message' => 'Data Successfully Saved',
				];
                $this->output->set_content_type('application/json')->set_output(json_encode($response));
            } 
        }
    }


    /**
     * Change Banner Status
     * @access public
     * @return void
     * @param int
     */
    public function changeStatus($id)
    {
        if ($this->input->is_ajax_request()) {
            $banner_info = array();
            $banner_info['status'] =htmlspecialchars($this->input->post($this->security->xss_clean('status')));
            $this->Common_model->updateInformation($banner_info, $id, "tbl_banners");
            $response = [
                'status' => 'success',
                'message' => 'Data Successfully Saved',
            ];
            $this->output->set_content_type('application/json')->set_output(json_encode($response));
        }
    }


    /**
     * Validate Banner Image
     * @access public
     * @return string
     * @param boolean
     */
    public function validate_banner_image() {
        if ($_FILES['banner_image']['name'] != "") {
            $config['upload_path'] = 'images/website/banner/';
            $config['allowed_types'] = 'jpg|jpeg|png';
            $config['max_size'] = '1000';
            $config['encrypt_name'] = TRUE;
            $config['detect_mime'] = TRUE;
            $this->load->library('upload', $config);
            if ($this->upload->do_upload("banner_image")) {
                $upload_info = $this->upload->data();
                $file_name = $upload_info['file_name'];
                $config['image_library'] = 'gd2';
                $config['source_image'] = 'images/website/banner/' . $file_name;
                $config['maintain_ratio'] = false;
                $this->load->library('image_lib', $config);
                $this->image_lib->resize();
                $this->session->set_userdata('banner_image', $file_name);
            } else {
                $this->form_validation->set_message('validate_banner_image', $this->upload->display_errors());
                return FALSE;
            }
        }



    }

    /**
     * Edit Banner
     * @access public
     * @return void
     * @param int
     */
	public function editBanner($id){
        $data = $this->Common_model->getDataById($id, 'tbl_banners');
        $response = [
            'status' => 'success',
            'data' => $data, 
        ];
        $this->output->set_content_type('application/json')->set_output(json_encode($response));
    }

    /**
     * Update Banner
     * @access public
     * @return void
     * @param int
     */
    public function updateBanner($id)
    {
        $company_id = $this->session->userdata('company_id');
        if ($this->input->is_ajax_request()) {
            $this->form_validation->set_rules('title', lang('title'), 'required|max_length[250]');
            $this->form_validation->set_rules('sub_title', lang('sub_title'), 'required|max_length[250]');
            if ($_FILES['banner_image']['name'] != "") {
                $this->form_validation->set_rules('banner_image', lang('banner_image'), 'callback_validate_banner_image');
            }
            if ($this->form_validation->run() == TRUE) {
                $banner_info = array();
                $banner_info['title'] =htmlspecialchars($this->input->post($this->security->xss_clean('title')));
                $banner_info['sub_title'] =htmlspecialchars($this->input->post($this->security->xss_clean('sub_title')));
                if ($_FILES['banner_image']['name'] != "") {
                    $banner_info['banner_image'] = $this->session->userdata('banner_image');
                    $this->session->unset_userdata('banner_image');
                }else{
                    $banner_info['banner_image'] =htmlspecialchars($this->input->post($this->security->xss_clean('banner_image')));
                }
                $banner_info['link'] =htmlspecialchars($this->input->post($this->security->xss_clean('link')));
                $banner_info['status'] =htmlspecialchars($this->input->post($this->security->xss_clean('status')));
                $banner_info['company_id'] = $company_id;
                $this->Common_model->updateInformation($banner_info, $id, "tbl_banners");
                $response = [
					'status' => 'success',
					'message' => 'Data Successfully Saved',
				];
                $this->output->set_content_type('application/json')->set_output(json_encode($response));
            } 
        }
    }

    /**
     * Delete Banner
     * @access public
     * @return void
     * @param int
     */
    public function deleteBanner($id) {
        $id = $this->custom->encrypt_decrypt($id, 'decrypt');
        $this->Common_model->deleteStatusChange($id, "tbl_banners");
        $response = [
            'status' => 'success',
            'message' => 'Data Successfully Deleted',
        ];
        $this->output->set_content_type('application/json')->set_output(json_encode($response));
    }




    

}
