<?php
$wl = getWhiteLabel();
$site_name = '';
$footer = '';
if($wl){
    if($wl->site_name){
        $site_name = $wl->site_name;
    }
    if($wl->footer){
        $footer = $wl->footer;
    }
    if($wl->system_logo){
        $system_logo = base_url()."images/".$wl->system_logo;
    }
}
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title><?php echo escape_output($site_name); ?></title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">

    <script src="<?php echo base_url(); ?>assets/bower_components/jquery/dist/jquery.min.js"></script>
    <link rel="stylesheet"
          href="<?php echo base_url(); ?>assets/bower_components/font-awesome/css/font-awesome.min.css">
    <!-- Ionicons -->
    <link rel="stylesheet" href="<?php echo base_url(); ?>assets/bower_components/Ionicons/css/ionicons.min.css">
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="<?php echo base_url(); ?>frequent_changing/css/bootstrap.min.css">
    <!-- Latest compiled and minified JavaScript -->
    <script src="<?php echo base_url(); ?>frequent_changing/js/bootstrap.min.js"></script>
    <script src="<?php echo base_url(); ?>frequent_changing/js/login.js"></script>
    <link rel="icon" href="<?php echo base_url(); ?>images/favicon.ico" type="image/x-icon">
    <!-- Select2 -->
    <script src="<?php echo base_url(); ?>assets/bower_components/select2/dist/js/select2.full.min.js"></script>
    <!-- Select2 -->
    <link rel="stylesheet" href="<?php echo base_url(); ?>assets/bower_components/select2/dist/css/select22.min.css">
    <link rel="stylesheet" href="<?php echo base_url(); ?>frequent_changing/css/login_new.css">
</head>
<body>
<div class="container">
    <div class="row">

        <!-- Mixins-->
        <!-- Pen Title-->
        <div class="pen-title">
            <img src="<?php echo escape_output($system_logo); ?>">
        </div>
        <div class="container">
            <div class="card"></div>
            <div class="card">
                <?php
                if ($this->session->flashdata('exception_1')) {
                    echo '<p class="red_error"><i  class="fa fa-times"></i> ';echo escape_output($this->session->flashdata('exception_1'));
                    echo '</p>';
                }
                ?>

                <?php
                if ($this->session->flashdata('exception')) {
                    echo '<p class="green_error"><i  class="fa fa-check"></i> ';echo escape_output($this->session->flashdata('exception'));
                    echo '</p>';
                }
                ?>
                <h1 class="title"><?php echo lang('step_2'); ?></h1>
                <?php echo form_open(base_url('forgot-password-step-two')); ?>

                <div class="input-container custom_margin">
                    <select class="form-control select2 fly_3" name="question" id="question">
                        <?php foreach ($question as $value) {  ?>
                            <option value="<?php echo escape_output($value); ?>" <?php if ($value == set_value('question')) echo "selected = 'selected'"?>><?php echo escape_output($value); ?></option>
                        <?php } ?>
                    </select>
                    <div class="bar"></div>
                    <?php if (form_error('question')) { ?>
                        <div class="error_txt">
                            <?php echo form_error('question'); ?>
                        </div>
                    <?php } ?>
                </div>
                <div class="input-container">
                    <input id="answer" type="text" name="answer" value="<?php echo set_value('answer') ?>" autocomplete="off" required="required"/>
                    <label for="answer"><?php echo lang('SecurityAnswer'); ?></label>
                    <div class="bar"></div>
                    <input type="hidden" class="form-control" name="id" value="<?php echo escape_output($id); ?>">
                    <input type="hidden" class="form-control" name="matchQuestion" value="<?php echo escape_output($matchQuestion); ?>">
                    <input type="hidden" class="form-control" name="matchAnswer" value="<?php echo escape_output($matchAnswer); ?>">
                </div>
                <?php if (form_error('answer')) { ?>
                    <div class="error_txt">
                        <?php echo form_error('answer'); ?>
                    </div>
                <?php } ?>
                <div class="button-container">
                    <button type="submit" name="submit" value="submit"><span><?php echo lang('submit'); ?></span></button>
                </div>
                <div class="footer"><a href="<?php echo base_url()?>authentication"><?php echo lang('back_to_login'); ?></a></div>
                <?php echo form_close();?>
            </div>
        </div>
    </div>
</div>
<script src="<?php echo base_url(); ?>frequent_changing/js/step_2.js"></script>
</body>
</html>