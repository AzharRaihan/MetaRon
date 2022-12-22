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

class WebsiteAdminCommonSetting extends Cl_Controller {
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
        $controller = "345";
        $function = "";

        if ($segment_2 == "updateCommonSetting"){
            $function = "edit";
        }else if($segment_2=="webCommonSetting"){
            $function = "list";
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
     * View Common Setting List
     * @access public
     * @return array
     */
    public function webCommonSetting()
    {
        $data = array();
        $data['common_setting'] = $this->Common_model->getDataById('1', 'tbl_common_settings');
        $data['main_content'] = $this->load->view('website_admin/common_setting', $data, TRUE);
        $this->load->view('userHome', $data);
    }


    /**
     * Update Common Setting
     * @access public
     * @return void
     * @param int
     */
    public function updateCommonSetting($id)
    {
        $company_id = $this->session->userdata('company_id');
        if ($this->input->is_ajax_request()) {
            $this->form_validation->set_rules('email', lang('email'), 'required|max_length[55]');
            $this->form_validation->set_rules('mobile', lang('mobile'), 'required|max_length[20]');
            $this->form_validation->set_rules('phone', lang('phone'), 'max_length[20]');
            $this->form_validation->set_rules('copy_right', lang('copy_right'), 'required|max_length[255]');
            if ($_FILES['logo']['name'] != "") {
                $this->form_validation->set_rules('logo', lang('logo'), 'callback_validate_logo');
            }
            if ($_FILES['footer_logo']['name'] != "") {
                $this->form_validation->set_rules('footer_logo', lang('footer_logo'), 'callback_validate_footer_logo');
            }
            if ($_FILES['fav_icon']['name'] != "") {
                $this->form_validation->set_rules('fav_icon', lang('fav_icon'), 'callback_validate_fav_icon');
            }
            if ($this->form_validation->run() == TRUE) {
                $common_setting = array();
                $common_setting['email'] =htmlspecialchars($this->input->post($this->security->xss_clean('email')));
                $common_setting['mobile'] =htmlspecialchars($this->input->post($this->security->xss_clean('mobile')));
                $common_setting['phone'] =htmlspecialchars($this->input->post($this->security->xss_clean('phone')));
                $common_setting['copy_right'] =htmlspecialchars($this->input->post($this->security->xss_clean('copy_right')));
                if ($_FILES['logo']['name'] != "") {
                    $common_setting['logo'] = $this->session->userdata('logo');
                    $this->session->unset_userdata('logo');
                }else{
                    $common_setting['logo'] =htmlspecialchars($this->input->post($this->security->xss_clean('logo')));
                }
                if ($_FILES['footer_logo']['name'] != "") {
                    $common_setting['footer_logo'] = $this->session->userdata('footer_logo');
                    $this->session->unset_userdata('footer_logo');
                }else{
                    $common_setting['footer_logo'] =htmlspecialchars($this->input->post($this->security->xss_clean('footer_logo')));
                }
                if ($_FILES['fav_icon']['name'] != "") {
                    $common_setting['fav_icon'] = $this->session->userdata('fav_icon');
                    $this->session->unset_userdata('fav_icon');
                }else{
                    $common_setting['fav_icon'] =htmlspecialchars($this->input->post($this->security->xss_clean('fav_icon')));
                }
                $common_setting['company_id'] = $company_id;
                $this->Common_model->updateInformation($common_setting, $id, "tbl_common_settings");
                $response = [
					'status' => 'success',
					'message' => 'Data Successfully Saved',
				];
                $this->output->set_content_type('application/json')->set_output(json_encode($response));
            } else {
                $response = [
                    'status' => 'error',
                    'email' => form_error('email'),
                    'mobile' => form_error('mobile'),
                    'phone' => form_error('phone'),
                    'copy_right' => form_error('copy_right'),
                    'fav_icon' => form_error('copy_right'),
                ];
      
                $this->output->set_content_type('application/json')->set_output(json_encode($response));

            }
        }
    }







    /**
     * Validate Common Setting Image
     * @access public
     * @return string
     * @param boolean
     */
    public function validate_logo() {
        if ($_FILES['logo']['name'] != "") {
            $config['upload_path'] = 'images/website/common_setting/';
            $config['allowed_types'] = 'jpg|jpeg|png';
            $config['max_size'] = '1000';
            $config['encrypt_name'] = TRUE;
            $config['detect_mime'] = TRUE;
            $this->load->library('upload', $config);
            if ($this->upload->do_upload("logo")) {
                $upload_info = $this->upload->data();
                $file_name = $upload_info['file_name'];
                $config['image_library'] = 'gd2';
                $config['source_image'] = 'images/website/common_setting/' . $file_name;
                $config['maintain_ratio'] = false;
                $this->load->library('image_lib', $config);
                $this->image_lib->resize();
                $this->session->set_userdata('logo', $file_name);
            } else {
                $this->form_validation->set_message('validate_logo', $this->upload->display_errors());
            }
        } else {
            
            $this->form_validation->set_message('validate_logo', $this->upload->display_errors());
        }
    }

    /**
     * Validate Common Setting Image
     * @access public
     * @return string
     * @param boolean
     */
    public function validate_footer_logo() {
        if ($_FILES['footer_logo']['name'] != "") {
            $config['upload_path'] = 'images/website/common_setting/';
            $config['allowed_types'] = 'jpg|jpeg|png';
            $config['max_size'] = '1000';
            $config['encrypt_name'] = TRUE;
            $config['detect_mime'] = TRUE;
            $this->load->library('upload', $config);
            if ($this->upload->do_upload("footer_logo")) {
                $upload_info = $this->upload->data();
                $file_name = $upload_info['file_name'];
                $config['image_library'] = 'gd2';
                $config['source_image'] = 'images/website/common_setting/' . $file_name;
                $config['maintain_ratio'] = false;
                $this->load->library('image_lib', $config);
                $this->image_lib->resize();
                $this->session->set_userdata('footer_logo', $file_name);
            } else {
                $this->form_validation->set_message('validate_footer_logo', $this->upload->display_errors());
                return FALSE;
            }
        }
    }
    /**
     * Validate Common Setting Image
     * @access public
     * @return string
     * @param boolean
     */
    public function validate_fav_icon() {
        if ($_FILES['fav_icon']['name'] != "") {
            $config['upload_path'] = 'images/website/common_setting/';
            $config['allowed_types'] = 'jpg|jpeg|png';
            $config['max_size'] = '1000';
            $config['encrypt_name'] = TRUE;
            $config['detect_mime'] = TRUE;
            $this->load->library('upload', $config);
            if ($this->upload->do_upload("fav_icon")) {
                $upload_info = $this->upload->data();
                $file_name = $upload_info['file_name'];
                $config['image_library'] = 'gd2';
                $config['source_image'] = 'images/website/common_setting/' . $file_name;
                $config['maintain_ratio'] = false;
                $this->load->library('image_lib', $config);
                $this->image_lib->resize();
                $this->session->set_userdata('fav_icon', $file_name);
            } else {
                $this->form_validation->set_message('validate_fav_icon', $this->upload->display_errors());
                return FALSE;
            }
        }
    }




}
