<script type="text/javascript" src="<?php echo base_url('frequent_changing/js/self_order.js'); ?>"></script>
<link rel="stylesheet" href="<?php echo base_url(); ?>frequent_changing/css/self_order.css">

<!-- Main content -->
<section class="main-content-wrapper">
    <?php
    if ($this->session->flashdata('exception')) {

        echo '<section class="alert-wrapper"><div class="alert alert-success alert-dismissible fade show"> 
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            <div class="alert-body"><p><i class="m-right fa fa-check"></i>';
        echo escape_output($this->session->flashdata('exception'));unset($_SESSION['exception']);
        echo '</p></div></div></section>';
    }
    ?>
    <?php
    if ($this->session->flashdata('exception_1')) {

        echo '<section class="alert-wrapper"><div class="alert alert-danger alert-dismissible"> 
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            <div class="alert-body"><p><i class="m-right fa fa-check"></i>';
        echo escape_output($this->session->flashdata('exception_1'));unset($_SESSION['exception_1']);
        echo '</p></div></div></section>';
    }
    ?>

    <section class="content-header">
        <h3 class="top-left-header">
            <?php echo lang('kioskSetting'); ?>
        </h3>

    </section>

    <div class="box-wrapper">
        <div class="table-box">
            <div>
                <div class="row">
                    <div class="clearfix"></div>
                    <?php
                    $session_company_id = $this->session->userdata('company_id');
                    $session_outlet_id = $this->session->userdata('outlet_id');
                    $outlets = getAllOutlestByAssign();
                    foreach ($outlets as $value):
                        ?>
                        <div class="mb-3 col-sm-12 col-md-4 col-lg-4">
                            <label><?php echo escape_output($value->outlet_name); ?></label>
                            <div class="form-group">
                                <input tabindex="1" autocomplete="off" type="text"  class="form-control" placeholder="<?php echo lang('outlet_url'); ?>" readonly onfocus="select();" value="<?php echo escape_output(base_url().'kiosk-url/'.$value->id.'/'.$session_company_id."/Yes"); ?>">
                                <a href="<?php echo escape_output(base_url().'kiosk-url/'.$value->id.'/'.$session_company_id."/Yes"); ?>">Go to Koisk Panel</a>
                            </div>
                        </div>
                    <?php endforeach;?>
                    <div class="clearfix">&nbsp;</div>
                </div>
            </div>
        </div>

</section>
