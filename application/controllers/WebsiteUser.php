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

class WebsiteUser extends Cl_Controller {
    public function __construct() {
        parent::__construct();
        $this->load->model('Authentication_model');
        $this->load->model('Common_model'); 
        $this->load->library('form_validation');
        $this->Common_model->setDefaultTimezone();
    }



    /**
     * Add Subscriber
     * @access public
     * @return void
     * @param 
     */
    public function subscribe()
    {
        $this->form_validation->set_rules('email', lang('email'), "required|max_length[50]|is_unique[tbl_subscribers.email]");
        if ($this->form_validation->run() == TRUE) {
            $data = array();
            $data['email'] = htmlspecialchars($this->input->post($this->security->xss_clean('email')));
            $this->Common_model->insertInformation($data, "tbl_subscribers");
            $response = [
                'status' => 'success',
                'message' => 'Data Successfully Saved',
            ];
            $this->output->set_content_type('application/json')->set_output(json_encode($response));
        } else {
            $response = [
                'status' => 'error',
                'message' => form_error('email')
            ];
            $this->output->set_content_type('application/json')->set_output(json_encode($response));
        }
    
    }


    /**
     * Add Contact Us
     * @access public
     * @return void
     * @param 
     */
    public function contactUs()
    {
        $this->form_validation->set_rules('first_name', lang('first_name'), "required|max_length[50]");
        $this->form_validation->set_rules('last_name', lang('last_name'), "max_length[50]");
        $this->form_validation->set_rules('email', lang('email'), "required|max_length[50]");
        $this->form_validation->set_rules('phone', lang('phone'), "required|max_length[50]");
        $this->form_validation->set_rules('message', lang('message'), "required|max_length[500]");
        if ($this->form_validation->run() == TRUE) {
            $data = array();
            $data['first_name'] = htmlspecialchars($this->input->post($this->security->xss_clean('first_name')));
            $data['last_name'] = htmlspecialchars($this->input->post($this->security->xss_clean('last_name')));
            $data['email'] = htmlspecialchars($this->input->post($this->security->xss_clean('email')));
            $data['phone'] = htmlspecialchars($this->input->post($this->security->xss_clean('phone')));
            $data['message'] = htmlspecialchars($this->input->post($this->security->xss_clean('message')));
            $this->Common_model->insertInformation($data, "tbl_contacts");
            $response = [
                'status' => 'success',
                'message' => 'Data Successfully Saved',
            ];
            $this->output->set_content_type('application/json')->set_output(json_encode($response));
        } else {
            $response = [
                'status' => 'error',
                'first_name' => form_error('first_name'),
                'email' => form_error('email'),
                'phone' => form_error('phone'),
                'message' => form_error('message')
            ];
            $this->output->set_content_type('application/json')->set_output(json_encode($response));
        }
    
    }



   






    

}
