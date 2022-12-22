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
  # This is Floor Controller
  ###########################################################
 */

defined('BASEPATH') OR exit('No direct script access allowed');

class Floor extends Cl_Controller {

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
     * floors
     * @access public
     * @return void
     * @param no
     */
    public function floors() {
        $company_id = $this->session->userdata('company_id');

        $data = array();
        $data['floors'] = $this->Common_model->getAllByCompanyId($company_id, "tbl_floors");
        $data['main_content'] = $this->load->view('master/floor/floors', $data, TRUE);
        $this->load->view('userHome', $data);
    }
     /**
     * delete Floor
     * @access public
     * @return void
     * @param int
     */
    public function deleteFloor($id) {
        $id = $this->custom->encrypt_decrypt($id, 'decrypt');

        $this->Common_model->deleteStatusChange($id, "tbl_floors");

        $this->session->set_flashdata('exception', lang('delete_success'));
        redirect('floor/floors');
    }
     /**
     * add/Edit Floor
     * @access public
     * @return void
     * @param int
     */
    public function addEditFloor($encrypted_id = "") {
        $company_id = $this->session->userdata('company_id');
        $id = $this->custom->encrypt_decrypt($encrypted_id, 'decrypt');
        if ($this->input->post('submit')) {
            $this->form_validation->set_rules('floor_name',lang('floor_name'), 'required|max_length[50]');
            $this->form_validation->set_rules('description',lang('description'), 'max_length[50]');
            if ($this->form_validation->run() == TRUE) {
                $igc_info = array();
                $igc_info['floor_name'] = htmlspecialchars($this->input->post($this->security->xss_clean('floor_name')));
                $igc_info['description'] =htmlspecialchars($this->input->post($this->security->xss_clean('description')));
                $igc_info['company_id'] = $this->session->userdata('company_id');
                if ($id == "") {
                    $this->Common_model->insertInformation($igc_info, "tbl_floors");
                    $this->session->set_flashdata('exception', lang('insertion_success'));
                } else {
                    $this->Common_model->updateInformation($igc_info, $id, "tbl_floors");
                    $this->session->set_flashdata('exception', lang('update_success'));
                }
                redirect('floor/floors');
            } else {
                if ($id == "") {
                    $data = array();
                    $data['main_content'] = $this->load->view('master/floor/addFloor', $data, TRUE);
                    $this->load->view('userHome', $data);
                } else {
                    $data = array();
                    $data['encrypted_id'] = $encrypted_id;
                    $data['floor'] = $this->Common_model->getDataById($id, "tbl_floors");
                    $data['main_content'] = $this->load->view('master/floor/editFloor', $data, TRUE);
                    $this->load->view('userHome', $data);
                }
            }
        } else {
            if ($id == "") {
                $data = array();
                $data['main_content'] = $this->load->view('master/floor/addFloor', $data, TRUE);
                $this->load->view('userHome', $data);
            } else {
                $data = array();
                $data['encrypted_id'] = $encrypted_id;
                $data['floor'] = $this->Common_model->getDataById($id, "tbl_floors");
                $data['main_content'] = $this->load->view('master/floor/editFloor', $data, TRUE);
                $this->load->view('userHome', $data);
            }
        }
    }
}
