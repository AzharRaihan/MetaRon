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
  # This is Storage Controller
  ###########################################################
 */

defined('BASEPATH') OR exit('No direct script access allowed');

class Storage extends Cl_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('Common_model');
        $this->load->library('form_validation');
        $this->Common_model->setDefaultTimezone();

        if (!$this->session->has_userdata('user_id')) {
            redirect('Authentication/index');
        }
        $getAccessURL = ucfirst($this->uri->segment(1));
        if (!in_array($getAccessURL, $this->session->userdata('menu_access'))) {
            redirect('Authentication/userProfile');
        }
        $login_session['active_menu_tmp'] = '';
        $this->session->set_userdata($login_session);
    }


     /**
     * storages
     * @access public
     * @return void
     * @param no
     */
    public function storages() {
        $company_id = $this->session->userdata('company_id');

        $data = array();
        $data['storages'] = $this->Common_model->getAllByCompanyId($company_id, "tbl_kitchens");
        $data['main_content'] = $this->load->view('master/storage/storages', $data, TRUE);
        $this->load->view('userHome', $data);
    }
     /**
     * delete Storage
     * @access public
     * @return void
     * @param int
     */
    public function deleteStorage($id) {
        $id = $this->custom->encrypt_decrypt($id, 'decrypt');
        if($id!=1){
            $this->Common_model->deleteStatusChange($id, "tbl_kitchens");

            $this->session->set_flashdata('exception', lang('delete_success'));
        }
        redirect('storage/storages');
    }
     /**
     * add/Edit Storage
     * @access public
     * @return void
     * @param int
     */
    public function addEditStorage($encrypted_id = "") {
        $company_id = $this->session->userdata('company_id');
        $id = $this->custom->encrypt_decrypt($encrypted_id, 'decrypt');
        if ($this->input->post('submit')) {
            $this->form_validation->set_rules('name',lang('name'), 'required|max_length[50]');
            $this->form_validation->set_rules('outlet_id',lang('outlet'), 'required|max_length[50]');
            $this->form_validation->set_rules('description',lang('description'), 'max_length[50]');
            if ($this->form_validation->run() == TRUE) {
                $igc_info = array();
                $igc_info['name'] = htmlspecialchars($this->input->post($this->security->xss_clean('name')));
                $igc_info['description'] =htmlspecialchars($this->input->post($this->security->xss_clean('description')));
                $igc_info['outlet_id'] =htmlspecialchars($this->input->post($this->security->xss_clean('outlet_id')));
                $igc_info['company_id'] = $this->session->userdata('company_id');
                if ($id == "") {
                    $this->Common_model->insertInformation($igc_info, "tbl_kitchens");
                    $this->session->set_flashdata('exception', lang('insertion_success'));
                } else {
                    $this->Common_model->updateInformation($igc_info, $id, "tbl_kitchens");
                    $this->session->set_flashdata('exception', lang('update_success'));
                }
                redirect('storage/storages');
            } else {
                if ($id == "") {
                    $data = array();
                    $data['outlets'] = $this->Common_model->getAllByCompanyIdForDropdown($company_id, 'tbl_outlets');
                    $data['main_content'] = $this->load->view('master/storage/addStorage', $data, TRUE);
                    $this->load->view('userHome', $data);
                } else {
                    $data = array();
                    $data['outlets'] = $this->Common_model->getAllByCompanyIdForDropdown($company_id, 'tbl_outlets');
                    $data['encrypted_id'] = $encrypted_id;
                    $data['storage'] = $this->Common_model->getDataById($id, "tbl_kitchens");
                    $data['main_content'] = $this->load->view('master/storage/editStorage', $data, TRUE);
                    $this->load->view('userHome', $data);
                }
            }
        } else {
            if ($id == "") {
                $data = array();
                $data['outlets'] = $this->Common_model->getAllByCompanyIdForDropdown($company_id, 'tbl_outlets');
                $data['main_content'] = $this->load->view('master/storage/addStorage', $data, TRUE);
                $this->load->view('userHome', $data);
            } else {
                $data = array();
                $data['outlets'] = $this->Common_model->getAllByCompanyIdForDropdown($company_id, 'tbl_outlets');
                $data['encrypted_id'] = $encrypted_id;
                $data['storage'] = $this->Common_model->getDataById($id, "tbl_kitchens");
                $data['main_content'] = $this->load->view('master/storage/editStorage', $data, TRUE);
                $this->load->view('userHome', $data);
            }
        }
    }
}
