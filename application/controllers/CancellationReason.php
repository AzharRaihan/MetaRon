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
  # This is CancellationReason Controller
  ###########################################################
 */

defined('BASEPATH') OR exit('No direct script access allowed');

class CancellationReason extends Cl_Controller {

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
     * cancellation_reasons
     * @access public
     * @return void
     * @param no
     */
    public function CancellationReasons() {
        $company_id = $this->session->userdata('company_id');

        $data = array();
        $data['cancellation_reasons'] = $this->Common_model->getAllByCompanyId($company_id, "tbl_cancellation_reasons");
        $data['main_content'] = $this->load->view('master/cancellation_reason/cancellation_reasons', $data, TRUE);
        $this->load->view('userHome', $data);
    }
     /**
     * delete CancellationReason
     * @access public
     * @return void
     * @param int
     */
    public function deleteCancellationReason($id) {
        $id = $this->custom->encrypt_decrypt($id, 'decrypt');

        $this->Common_model->deleteStatusChange($id, "tbl_cancellation_reasons");

        $this->session->set_flashdata('exception', lang('delete_success'));
        redirect('CancellationReason/CancellationReasons');
    }
     /**
     * add/Edit CancellationReason
     * @access public
     * @return void
     * @param int
     */
    public function addEditCancellationReason($encrypted_id = "") {
        $company_id = $this->session->userdata('company_id');
        $id = $this->custom->encrypt_decrypt($encrypted_id, 'decrypt');
        if ($this->input->post('submit')) {
            $this->form_validation->set_rules('name',lang('reason'), 'required|max_length[250]');
            if ($this->form_validation->run() == TRUE) {
                $igc_info = array();
                $igc_info['name'] = htmlspecialchars($this->input->post($this->security->xss_clean('name')));
                $igc_info['outlet_id'] = $this->session->userdata('outlet_id');;
                $igc_info['user_id'] = $this->session->userdata('user_id');
                $igc_info['company_id'] = $this->session->userdata('company_id');
                if ($id == "") {
                    $this->Common_model->insertInformation($igc_info, "tbl_cancellation_reasons");
                    $this->session->set_flashdata('exception', lang('insertion_success'));
                } else {
                    $this->Common_model->updateInformation($igc_info, $id, "tbl_cancellation_reasons");
                    $this->session->set_flashdata('exception', lang('update_success'));
                }
                redirect('CancellationReason/CancellationReasons');
            } else {
                if ($id == "") {
                    $data = array();
                    $data['main_content'] = $this->load->view('master/cancellation_reason/addCancellationReason', $data, TRUE);
                    $this->load->view('userHome', $data);
                } else {
                    $data = array();
                    $data['encrypted_id'] = $encrypted_id;
                    $data['cancellation_reason'] = $this->Common_model->getDataById($id, "tbl_cancellation_reasons");
                    $data['main_content'] = $this->load->view('master/cancellation_reason/editCancellationReason', $data, TRUE);
                    $this->load->view('userHome', $data);
                }
            }
        } else {
            if ($id == "") {
                $data = array();
                $data['main_content'] = $this->load->view('master/cancellation_reason/addCancellationReason', $data, TRUE);
                $this->load->view('userHome', $data);
            } else {
                $data = array();
                $data['encrypted_id'] = $encrypted_id;
                $data['cancellation_reason'] = $this->Common_model->getDataById($id, "tbl_cancellation_reasons");
                $data['main_content'] = $this->load->view('master/cancellation_reason/editCancellationReason', $data, TRUE);
                $this->load->view('userHome', $data);
            }
        }
    }
}
