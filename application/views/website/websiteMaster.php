<?php
    $wl = webGetWhiteLabel();
	
    $web_email = '';
    $web_mobile = '';
    $web_phone = '';
    $web_logo = '';
    $web_f_logo = '';
    $web_fav_icon = '';
    $web_copy_right = '';

    if($wl){
        if($wl->email){
            $web_email = $wl->email;
        }
        if($wl->mobile){
            $web_mobile = $wl->mobile;
        }
        if($wl->phone){
            $web_phone = $wl->phone;
        }
        if($wl->logo){
			$web_logo = base_url()."images/website/common_setting/" . $wl->logo;
        }
        if($wl->footer_logo){
			$web_f_logo = base_url()."images/website/common_setting/" . $wl->footer_logo;
        }
        if($wl->fav_icon){
			$web_fav_icon = base_url()."images/website/common_setting/" . $wl->fav_icon;
        }
        if($wl->copy_right){
            $web_copy_right = $wl->copy_right;
        }
        
    }

?>






<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="Best Restautant Management Software">
	<meta name="keywords" content="restaurant,food,reservation">
	<title>Bhojon Home page</title>
	<link rel="shortcut icon" type="image/ico" href="<?php echo $web_fav_icon;?>">
	<!--====== Plugins CSS Files =======-->
	<link href="<?php echo base_url()?>website_assets/plugins/bootstrap-4.1.3-dist/css/bootstrap.min.css" rel="stylesheet">
	<link href="<?php echo base_url()?>website_assets/plugins/fontawesome/css/font-awesome.min.css" rel="stylesheet">
	<link href="<?php echo base_url()?>website_assets/plugins/themify-icons/themify-icons.css" rel="stylesheet">
	<link href="<?php echo base_url()?>website_assets/plugins/animate-css/animate.css" rel="stylesheet">
	<link href="<?php echo base_url()?>website_assets/plugins/owl-carousel/owl.carousel.min.css" rel="stylesheet">
	<link href="<?php echo base_url()?>website_assets/plugins/metismenu/metisMenu.min.css" rel="stylesheet">
	<link href="<?php echo base_url()?>website_assets/plugins/bootstrap-datepicker/bootstrap-datepicker.min.css" rel="stylesheet">
	<link href="<?php echo base_url()?>website_assets/plugins/clockpicker/clockpicker.min.css" rel="stylesheet">
	<link href="<?php echo base_url()?>website_assets/css/jquery-ui.min.css" rel="stylesheet"/>
	<!--====== Custom CSS Files ======-->
	<link href="<?php echo base_url()?>website_assets/css/style.css" rel="stylesheet">
	<link href="<?php echo base_url()?>website_assets/css/responsive.css" rel="stylesheet">
	<link href="<?php echo base_url()?>website_assets/css/custome.css" rel="stylesheet">
	<link href="<?php echo base_url()?>website_assets/css/jquery.rateyo.min.css" rel="stylesheet"/>
	<link href="<?php echo base_url()?>website_assets/sweetalert/sweetalert.css" rel="stylesheet"/>
	<link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800,900|Niconne" rel="stylesheet" />
	<link href="https://fonts.googleapis.com/css?family=Great+Vibes|Poppins:200,300,400,500,600,700,800,900" rel="stylesheet" />


	<!-- Hedden Input value for language -->
	<input type="hidden" value="<?php echo base_url();?>" id="base_url">
	<input type="hidden" value="<?php echo lang('email_field_required');?>" id="email_field_required">
	<input type="hidden" value="<?php echo lang('success_send_email');?>" id="success_send_email">



</head>

<body>

	<!-- Preloader -->
	<div class="preloader"></div>


	<?php
		if (isset($web_main_content)) {
			//This variable could not be escaped because this is html content
			echo ($web_main_content);
		}
	?>

	
	<!--start for hidden cart-->
	<div id="cartitem" class="cartlist_display_none" ></div>

	<!-- Newsletter -->
	<section class="newsletter_area  sect_pad">
		<div class="container">
			<div class="row">
				<div class="col-lg-6 offset-lg-3 text-center">
					<div id="subscribe_msg"></div>
					<h2 class="mb-2">Subscribe to Newsletter</h2>
					<p class="mb-4">Subscribe to Receive Our Weekly Promotion</p>
					<form id="subscriber_form">
					<div class="newsletter-form">
						<input type="email" class="form-control" placeholder="Enter Your Email" name="email" id="subscribe">
						<button class="btn" type="submit">subscribe</button>
					</div>
					</form>
				</div>
			</div>
		</div>
	</section>
	<!-- End Newsletter -->

	<!-- Map Area -->
	<section class="map_area">
		<div class="container-fluid">
			<div class="row map_area">
				<div class="map">
					<p><iframe style="border: 0;" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14599.578237069936!2d90.3654215!3d23.8223482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1583411739085!5m2!1sen!2sbd" width="300" height="150" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
					</p>
				</div>
				<div class="office_address wow fadeIn" data-wow-delay="0.3s">
					<h2 class="mb-4">Our Store</h2>
					<address>123 Suspendis matti,&nbsp;<br />Visaosang Building VST District,&nbsp;<br />NY Accums, North American</address>
					<p><a class="d-block" href="http://soft9.bdtask.com/hungry-v1/">0123-456-78910</a><a class="d-block" href="http://soft9.bdtask.com/hungry-v1/">support@domain.com</a></p>							
					<button class="simple_btn"><span>Get Directions</span></button>
				</div>
			</div>
		</div>
	</section>
	<!-- End Map Area -->


	<!--Footer Area-->
	<div class="footer-area">
		<div class="container">
			<div class="row footer-inner">
				<div class="col-lg-4">
					<div class="footer-logo-area mb-5 mb-lg-0">
						<div class="footer-logo">
							<a href="<?php base_url();?>"><img src="<?php echo $web_f_logo;?>" alt="footer logo"></a>
						</div>
						<div class="footer-init">
							<p class="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>							
						</div>
						<div class="footer-social-bookmark">
							<ul>
								<li><a href="#"><i class="fa fa-facebook"></i></a></li>
								<li><a href="#"><i class="fa fa-twitter"></i></a></li>
								<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
								<li><a href="#"><i class="fa fa-pinterest"></i></a></li>
								<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="footer_widget mb-5 mb-lg-0">
						<h4>Available On</h4>
						<div class="footer_widget_body">
							<p><strong>Monday - Wednesday</strong>Â 10:00 AM - 7:00 PM</p>
							<p><strong>Thursday - Friday</strong>Â 10:00 AM - 11:00 PM</p>
							<p><strong>Saturday</strong>Â 12:00 PM - 6:00 PM</p>
							<p><strong>Sunday</strong>Â Off</p>							
						</div>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="footer_widget">
						<h4>Contact Us</h4>
						<div class="footer_widget_body">
							<div class="footer-address">
								<p>356, Mannan Plaza ( 4th Floar ) Khilkhet Dhaka</p>
								<p><a href="hungry.html">support@bdtask.com</a></p>
								<p><a href="hungry.html">+88 01715 222 333</a></p>								
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="footer_bottom">
			<div class="container">
				<div class="row">
					<div class="col-xl-6">
						<div class="footer-copyright">
							<?php echo $web_copy_right; ?>
						</div>
					</div>
					<div class="col-xl-6">
						<div class="footer-menu">
							<ul>
								<li><a href="terms.html">Teams of use</a></li>
								<li><a href="privacy.html">Privacy Policy</a></li>
								<li><a href="contact.html">Contact</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--End Footer Area-->

	<a href="#0" class="cd-top">
		<i class="ti-arrow-up"></i>
	</a>
		<!-- end whatsapp modules -->
	<!--====== SCRIPTS JS ======-->

	<script src="<?php echo base_url()?>website_assets/js/jquery-3.3.1.min.js"></script>
	<script src="<?php echo base_url()?>website_assets/sweetalert/sweetalert.min.js" type="text/javascript"></script>
	<script src="<?php echo base_url()?>website_assets/js/product.js.php"></script>
	<script src="<?php echo base_url()?>website_assets/js/category.js.php"></script>
	<script src="<?php echo base_url()?>website_assets/js/jquery-ui.min.js" type="text/javascript"></script>
	<script src="<?php echo base_url()?>website_assets/plugins/bootstrap-4.1.3-dist/js/bootstrap.min.js"></script>
	<script src="<?php echo base_url()?>website_assets/plugins/owl-carousel/owl.carousel.min.js"></script>
	<script src="<?php echo base_url()?>website_assets/plugins/metismenu/metisMenu.min.js"></script>
	<script src="<?php echo base_url()?>website_assets/plugins/wow/wow.min.js"></script>
	<script src="<?php echo base_url()?>website_assets/plugins/bootstrap-datepicker/bootstrap-datepicker.min.js"></script>
	<script src="<?php echo base_url()?>website_assets/plugins/clockpicker/clockpicker.min.js"></script>
	<script src="<?php echo base_url()?>website_assets/plugins/theia-sticky-sidebar/dist/ResizeSensor.min.js"></script>
	<script src="<?php echo base_url()?>website_assets/plugins/theia-sticky-sidebar/dist/theia-sticky-sidebar.min.js"></script>
	<!--===== ACTIVE JS=====-->
	<script src="<?php echo base_url()?>website_assets/js/custom.js"></script>
	<script src="<?php echo base_url()?>website_assets/sweetalert/sweetalert.min.js" type="text/javascript"></script>
	<script src="<?php echo base_url()?>website_assets/js/default_theme.js"></script>
	<script src="<?php echo base_url()?>website_assets/js/website_default.js"></script>
</body>

</html>