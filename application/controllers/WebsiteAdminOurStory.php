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

class WebsiteAdminOurStory extends Cl_Controller {
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
        $controller = "351";
        $function = "";

        if($segment_2=="addOurStory" || $segment_2=="changeStatus"){
            $function = "add";
        }else if ($segment_2 == "editOurStory" || $segment_2 == "updateOurStory"){
            $function = "edit";
        }else if($segment_2=="webOurStory"){
            $function = "list";
        }else if($segment_2=="ourStoryList"){
            $function = "list";
        }else if($segment_2=="deleteOurStory"){
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
     * View Our Story List
     * @access public
     * @return array
     */
    public function webOurStory()
    {
        $data = array();
        $data['our_story'] = $this->Common_model->getDataById('1', 'tbl_our_stories');
        $data['main_content'] = $this->load->view('website_admin/our_story', $data, TRUE);
        $this->load->view('userHome', $data);
    }
    
    /**
     * Update Our Story
     * @access public
     * @return void
     * @param int
     */
    public function updateOurStory($id)
    {
        $company_id = $this->session->userdata('company_id');
        if ($this->input->is_ajax_request()) {
            $this->form_validation->set_rules('title', lang('title'), 'required|max_length[250]');
            $this->form_validation->set_rules('sub_title', lang('sub_title'), 'required|max_length[250]');
            $this->form_validation->set_rules('description', lang('description'), 'required|max_length[250]');
            if ($_FILES['story_img_1']['name'] != "") {
                $this->form_validation->set_rules('story_img_1', '', 'callback_validate_story_img_1');
            }
            if ($_FILES['story_img_2']['name'] != "") {
                $this->form_validation->set_rules('story_img_2', '', 'callback_validate_story_img_2');
            }
            if ($this->form_validation->run() == TRUE) {
                $our_story = array();
                $our_story['title'] =htmlspecialchars($this->input->post($this->security->xss_clean('title')));
                $our_story['sub_title'] =htmlspecialchars($this->input->post($this->security->xss_clean('sub_title')));
                $our_story['description'] =htmlspecialchars($this->input->post($this->security->xss_clean('description')));
                if ($_FILES['story_img_1']['name'] != "") {
                    $our_story['story_img_1'] = $this->session->userdata('story_img_1');
                    $this->session->unset_userdata('story_img_1');
                }else{
                    $our_story['story_img_1'] =htmlspecialchars($this->input->post($this->security->xss_clean('story_img_1')));
                }
                if ($_FILES['story_img_2']['name'] != "") {
                    $our_story['story_img_2'] = $this->session->userdata('story_img_2');
                    $this->session->unset_userdata('story_img_2');
                }else{
                    $our_story['story_img_2'] =htmlspecialchars($this->input->post($this->security->xss_clean('story_img_2')));
                }
                $our_story['link'] =htmlspecialchars($this->input->post($this->security->xss_clean('link')));
                $our_story['status'] =htmlspecialchars($this->input->post($this->security->xss_clean('status')));
                $our_story['company_id'] = $company_id;
                $this->Common_model->updateInformation($our_story,'1', "tbl_our_stories");
                $response = [
					'status' => 'success',
					'message' => 'Data Successfully Saved',
				];
                $this->output->set_content_type('application/json')->set_output(json_encode($response));
            } 
        }
    }

    /**
     * Validate Our Story Image
     * @access public
     * @return string
     * @param boolean
     */
    public function validate_story_img_1() {
        if ($_FILES['story_img_1']['name'] != "") {
            $config['upload_path'] = 'images/website/our_story/';
            $config['allowed_types'] = 'jpg|jpeg|png';
            $config['max_size'] = '1000';
            $config['encrypt_name'] = TRUE;
            $config['detect_mime'] = TRUE;
            $this->load->library('upload', $config);
            if ($this->upload->do_upload("story_img_1")) {
                $upload_info = $this->upload->data();
                $file_name = $upload_info['file_name'];
                $config['image_library'] = 'gd2';
                $config['source_image'] = 'images/website/our_story/' . $file_name;
                $config['maintain_ratio'] = false;
                $this->load->library('image_lib', $config);
                $this->image_lib->resize();
                $this->session->set_userdata('story_img_1', $file_name);
            } else {
                $this->form_validation->set_message('validate_story_img_1', $this->upload->display_errors());
                return FALSE;
            }
        }
    }

    /**
     * Validate Our Story Image
     * @access public
     * @return string
     * @param boolean
     */
    public function validate_story_img_2() {
        if ($_FILES['story_img_2']['name'] != "") {
            $config['upload_path'] = 'images/website/our_story/';
            $config['allowed_types'] = 'jpg|jpeg|png';
            $config['max_size'] = '1000';
            $config['encrypt_name'] = TRUE;
            $config['detect_mime'] = TRUE;
            $this->load->library('upload', $config);
            if ($this->upload->do_upload("Story_img_2")) {
                $upload_info = $this->upload->data();
                $file_name = $upload_info['file_name'];
                $config['image_library'] = 'gd2';
                $config['source_image'] = 'images/website/our_story/' . $file_name;
                $config['maintain_ratio'] = false;
                $this->load->library('image_lib', $config);
                $this->image_lib->resize();
                $this->session->set_userdata('story_img_2', $file_name);
            } else {
                $this->form_validation->set_message('validate_story_img_2', $this->upload->display_errors());
                return FALSE;
            }
        }
    }


}
