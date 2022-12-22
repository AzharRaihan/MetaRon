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

class WebsiteAdminOurMenu extends Cl_Controller {
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

        if($segment_2=="addOurMenu" || $segment_2=="changeStatus"){
            $function = "add";
        }else if ($segment_2 == "editOurMenu" || $segment_2 == "updateOurMenu"){
            $function = "edit";
        }else if($segment_2=="webOurMenu"){
            $function = "list";
        }else if($segment_2=="ourMenuList"){
            $function = "list";
        }else if($segment_2=="deleteOurMenu"){
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
     * View Our Menu List
     * @access public
     * @return array
     */
    public function webOurMenu()
    {
        $data = array();
        $data['our_menu'] = $this->Common_model->getDataById('1', 'tbl_our_menus');
        $data['main_content'] = $this->load->view('website_admin/our_menu', $data, TRUE);
        $this->load->view('userHome', $data);
    }


        /**
     * Update Our Menu
     * @access public
     * @return void
     * @param int
     */
    public function updateOurMenu($id)
    {
        $company_id = $this->session->userdata('company_id');
        if ($this->input->is_ajax_request()) {
            $this->form_validation->set_rules('title', lang('title'), 'required|max_length[250]');
            $this->form_validation->set_rules('sub_title', lang('sub_title'), 'required|max_length[250]');
            $this->form_validation->set_rules('description', lang('description'), 'required|max_length[250]');
            if ($_FILES['menu_img_1']['name'] != "") {
                $this->form_validation->set_rules('menu_img_1', '', 'callback_validate_menu_img_1');
            }
            if ($_FILES['menu_img_2']['name'] != "") {
                $this->form_validation->set_rules('menu_img_2', '', 'callback_validate_menu_img_2');
            }
            if ($_FILES['menu_img_3']['name'] != "") {
                $this->form_validation->set_rules('menu_img_3', '', 'callback_validate_menu_img_3');
            }
            $this->form_validation->set_rules('link', lang('link'), 'required|max_length[250]');

            if ($this->form_validation->run() == TRUE) {
                $our_menu = array();
                $our_menu['title'] =htmlspecialchars($this->input->post($this->security->xss_clean('title')));
                $our_menu['sub_title'] =htmlspecialchars($this->input->post($this->security->xss_clean('sub_title')));
                $our_menu['description'] =htmlspecialchars($this->input->post($this->security->xss_clean('description')));
                if ($_FILES['menu_img_1']['name'] != "") {
                    $our_menu['menu_img_1'] = $this->session->userdata('menu_img_1');
                    $this->session->unset_userdata('menu_img_1');
                }else{
                    $our_menu['menu_img_1'] =htmlspecialchars($this->input->post($this->security->xss_clean('menu_img_1')));
                }
                if ($_FILES['menu_img_2']['name'] != "") {
                    $our_menu['menu_img_2'] = $this->session->userdata('menu_img_2');
                    $this->session->unset_userdata('menu_img_2');
                }else{
                    $our_menu['menu_img_2'] =htmlspecialchars($this->input->post($this->security->xss_clean('menu_img_2')));
                }
                if ($_FILES['menu_img_3']['name'] != "") {
                    $our_menu['menu_img_3'] = $this->session->userdata('menu_img_3');
                    $this->session->unset_userdata('menu_img_3');
                }else{
                    $our_menu['menu_img_3'] =htmlspecialchars($this->input->post($this->security->xss_clean('menu_img_3')));
                }
                $our_menu['link'] =htmlspecialchars($this->input->post($this->security->xss_clean('link')));
                $our_menu['status'] =htmlspecialchars($this->input->post($this->security->xss_clean('status')));
                $our_menu['company_id'] = $company_id;
                $this->Common_model->updateInformation($our_menu, $id, "tbl_our_menus");
                $response = [
					'status' => 'success',
					'message' => 'Data Successfully Saved',
				];
                $this->output->set_content_type('application/json')->set_output(json_encode($response));
            } 
        }
    }







    /**
     * Validate Our Menu Image
     * @access public
     * @return string
     * @param boolean
     */
    public function validate_menu_img_1() {
        if ($_FILES['menu_img_1']['name'] != "") {
            $config['upload_path'] = 'images/website/our_menu/';
            $config['allowed_types'] = 'jpg|jpeg|png';
            $config['max_size'] = '1000';
            $config['encrypt_name'] = TRUE;
            $config['detect_mime'] = TRUE;
            $this->load->library('upload', $config);
            if ($this->upload->do_upload("menu_img_1")) {
                $upload_info = $this->upload->data();
                $file_name = $upload_info['file_name'];
                $config['image_library'] = 'gd2';
                $config['source_image'] = 'images/website/our_menu/' . $file_name;
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
     * Validate Our Menu Image
     * @access public
     * @return string
     * @param boolean
     */
    public function validate_menu_img_2() {
        if ($_FILES['menu_img_2']['name'] != "") {
            $config['upload_path'] = 'images/website/our_menu/';
            $config['allowed_types'] = 'jpg|jpeg|png';
            $config['max_size'] = '1000';
            $config['encrypt_name'] = TRUE;
            $config['detect_mime'] = TRUE;
            $this->load->library('upload', $config);
            if ($this->upload->do_upload("menu_img_2")) {
                $upload_info = $this->upload->data();
                $file_name = $upload_info['file_name'];
                $config['image_library'] = 'gd2';
                $config['source_image'] = 'images/website/our_menu/' . $file_name;
                $config['maintain_ratio'] = false;
                $this->load->library('image_lib', $config);
                $this->image_lib->resize();
                $this->session->set_userdata('menu_img_2', $file_name);
            } else {
                $this->form_validation->set_message('validate_menu_img_2', $this->upload->display_errors());
                return FALSE;
            }
        }
    }
    /**
     * Validate Our Menu Image
     * @access public
     * @return string
     * @param boolean
     */
    public function validate_menu_img_3() {
        if ($_FILES['menu_img_3']['name'] != "") {
            $config['upload_path'] = 'images/website/our_menu/';
            $config['allowed_types'] = 'jpg|jpeg|png';
            $config['max_size'] = '1000';
            $config['encrypt_name'] = TRUE;
            $config['detect_mime'] = TRUE;
            $this->load->library('upload', $config);
            if ($this->upload->do_upload("menu_img_2")) {
                $upload_info = $this->upload->data();
                $file_name = $upload_info['file_name'];
                $config['image_library'] = 'gd2';
                $config['source_image'] = 'images/website/our_menu/' . $file_name;
                $config['maintain_ratio'] = false;
                $this->load->library('image_lib', $config);
                $this->image_lib->resize();
                $this->session->set_userdata('menu_img_3', $file_name);
            } else {
                $this->form_validation->set_message('validate_menu_img_3', $this->upload->display_errors());
                return FALSE;
            }
        }
    }




}
