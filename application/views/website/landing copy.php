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
	<link rel="shortcut icon" type="image/ico" href="<?php echo base_url()?>website_assets/img/icons/2022-10-13/m1.png">
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
	<!--START HEADER TOP-->
	<header class="header_top_area">
		<div class="header_top">
			<div class="container">
				<nav class="navbar navbar-expand-lg">
					<a class="" href="index.html">
						<img src="<?php echo base_url()?>website_assets/img/2021-01-02/b.png" alt="logo">
					</a>
					<div class="sidebar-toggle-btn">
						<a class="nav-link nav_link_in" href="menu.html" id="navbarDropdown3" >
							<i class="ti-shopping-cart"></i><span class="badge badge-notify my-cart-badge badge_color_in" >0</span>
						</a>
						<button type="button" id="sidebarCollapse" class="btn">
							<i class="ti-menu"></i>
						</button>
					</div>
					<div class="collapse navbar-collapse" id="navbarTogglerDemo03">
						<ul class="navbar-nav ml-auto mt-2 mt-lg-0">
								<li class="nav-item  active">
									<a class="nav-link " href="home.html" >Home</a>
									<div class="dropdown-menu" aria-labelledby="navbarDropdown">
									</div>
								</li>
															<li class="nav-item  ">
									<a class="nav-link " href="reservation.html" >Reservation</a>
									<div class="dropdown-menu" aria-labelledby="navbarDropdown">
																			</div>

								</li>
															<li class="nav-item  ">
									<a class="nav-link " href="menu.html" >Menu</a>
									<div class="dropdown-menu" aria-labelledby="navbarDropdown">
																			</div>

								</li>
															<li class="nav-item  ">
									<a class="nav-link " href="<?php echo base_url();?>Authentication/aboutUs" >About Us</a>
									<div class="dropdown-menu" aria-labelledby="navbarDropdown">
																			</div>

								</li>
															<li class="nav-item  ">
									<a class="nav-link " href="contact.html" >Contact Us</a>
									<div class="dropdown-menu" aria-labelledby="navbarDropdown">
																			</div>

								</li>
															<li class="nav-item dropdown ">
									<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
									<div class="dropdown-menu" aria-labelledby="navbarDropdown">
																						<a class="dropdown-item" href="menu.html">Cart</a>
																						<a class="dropdown-item" href="index.html">Logout</a>
																			</div>

								</li>
															<li class="nav-item  ">
									<a class="nav-link " href="mylogin.html" >Login</a>
									<div class="dropdown-menu" aria-labelledby="navbarDropdown">
																			</div>

								</li>
														<li class="nav-item">
								<a class="nav-link" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<i class="fa fa-search"></i>
								</a>
								<div class="dropdown-menu search_box" aria-labelledby="navbarDropdown2">
                                    <form action="https://metacloudsoftware.com/menu" method="post" class="card card-sm" accept-charset="utf-8">
                                                                                 <input type="hidden" name="csrf_test_name" value="a0b76dca4f10cb73bec117a8fcd58aca" />
										<div class="card-body row no-gutters align-items-center">
											<div class="col">
												<input type="text" autocomplete="off" class="form-control productSelection" onkeypress="producstList();" name="product_name" id="product_name" placeholder="Search topics or keywords" aria-required="true"> <input class="autocomplete_hidden_value" name="product_id" id="SchoolHiddenId" type="hidden">
                                            </div>
											<!--end of col-->
											<div class="col-auto">
												<button class="btn btn-lg btn-success" type="submit">Search</button>
											</div>
											<!--end of col-->
										</div>
									</form>
								</div>
							</li>

							<li class="nav-item">
								<a class="nav-link" href="menu.html" id="navbarDropdown3">
									<i class="ti-shopping-cart"></i><span class="badge badge-notify my-cart-badge" id="itemnum">0</span>
								</a>
							</li>
						</ul>
					</div>
				</nav>
				<!-- /. Navbar -->
				<nav id="sidebar" class="sidebar-nav">
					<div id="dismiss">
						<i class="ti-close"></i>
					</div>
					<ul class="metismenu list-unstyled" id="mobile-menu">
													<li>
								<a href="home.html" >Home </a>
															</li>
													<li>
								<a href="reservation.html" >Reservation </a>
															</li>
													<li>
								<a href="menu.html" >Menu </a>
															</li>
													<li>
								<a href="about.html" >About Us </a>
															</li>
													<li>
								<a href="contact.html" >Contact Us </a>
															</li>
													<li>
								<a href="#" aria-expanded="false">Pages <span class="fa arrow"></span></a>
																	<ul aria-expanded="false">
																					<li><a href="menu.html">Cart</a></li>
																					<li><a href="index.html">Logout</a></li>
																			</ul>
															</li>
													<li>
								<a href="mylogin.html" aria-expanded="false">Login </a>
															</li>
						
					</ul>
				</nav>
				<div class="overlay"></div>
			</div>
		</div>

		<!--BANNER PART-->
		<div class="main_slider owl-carousel">
			<?php 
			if(isset($banners)){
			foreach ($banners as $key=>$banner) : ?>
			<div class="item">
				<img src="<?php echo base_url()?>images/website/banner/<?php echo escape_output($banner->banner_image);?>" alt="<?php echo escape_output($banner->title);?>">
				<div class="item_caption animated_caption">
					<h3 class="curve_title"><?php echo escape_output($banner->title);?></h3>
					<h2><?php echo escape_output($banner->sub_title);?></h2>
					<a href="<?php echo escape_output($banner->link);?>" class="btn1"><?php echo lang('see_more');?></a>
				</div>
			</div>
			<?php endforeach; }?>
		</div>
		<!--END BANNER PART -->
	</header>
	<!--END HEADER TOP-->


	<div class="modal fade" id="closenotice" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Restaurant is Closed!!</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <p>You order Only when restaurant is open. Our opening and closing Time is: 9:00AM- 10:00PM</p>
            </div>

        </div>
    </div>
</div>
<div class="modal fade" id="addons" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Food Details</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body addonsinfo">

            </div>

        </div>
    </div>
</div>
<div class="search_box mt-5 mt-lg-0">
    <div class="container">
        <div class="search_box_inner">
            <form action="https://metacloudsoftware.com/menu" method="post" accept-charset="utf-8">
                                                                                                               <input type="hidden" name="csrf_test_name" value="" />
                <div class="form-row">
                    <div class="col-md-6 mb-3 mb-md-0">
                        <label class="sr-only" for="itemsearch">Food Name</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <div class="input-group-text">
                                    <i class="ti-search"></i>
                                </div>
                            </div>
                            <input type="text" class="form-control productSelection" onkeypress="producstList();" name="product_name" id="product_name" placeholder="Search Food Item" aria-required="true"> <input class="autocomplete_hidden_value" name="product_id" id="SchoolHiddenId" type="hidden">
                        </div>
                    </div>
                    <div class="col-md-4 mb-3 mb-md-0">
                        <label class="sr-only" for="location">Category</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <div class="input-group-text">
                                    <i class="fa fa-cutlery"></i>
                                </div>
                            </div>
                            <input type="text" class="form-control categorySelection" onkeypress="allcategoryList();" name="category_name" id="category_name" placeholder="Search Category"><input class="autocomplete_hidden_value2" name="category_id" id="SchoolHiddenId2" type="hidden">
                        </div>
                    </div>
                    <div class="col-md-2">
                        <button type="submit" class="btn btn-success">Search</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>

	<!--Our Story-->
    <section class="about_us sect_pad bg_img_area">
        <div class="bg_img_left wow fadeIn" data-wow-delay="0.5s"></div>
        <div class="container">
            <div class="row about_inner">
                <div class="col-lg-5 col-xl-6 text-center wow fadeIn">
                    <div class="sect_title mb-4">
                        <h2 class="curve_title"><?php if(isset($our_story)){ echo escape_output($our_story->title); }?></h2>
                        <h3 class="big_title"><?php if(isset($our_story)){ echo escape_output($our_story->sub_title); }?></h3>
                    </div>
                    <div class="aboutus_text mb-lg-0 mb-5">
                        <p class="mb-4"> <?php if(isset($our_story)){ echo escape_output($our_story->description); }?></p>
                        <a href="<?php if(isset($our_story)){ echo escape_output($our_story->link); }?>" class="simple_btn">Read more</a>
                    </div>
                </div>
                <div class="col-lg-7 col-xl-6">
                    <div class="row">
                        <div class="col-md-6 col-lg-6 col-sm-6 col-xs-12">
							<div class="img_part mb-4 mb-sm-0 wow fadeIn" data-wow-delay="0.4s">
								<img src="<?php echo base_url()?>images/website/our_story/<?php echo escape_output($our_story->story_img_1);?>" class="img-fluid" alt="<?php if(isset($our_story)){ echo escape_output($our_story->title); }?>">
							</div>
						</div>
                        <div class="col-md-6 col-lg-6 col-sm-6 col-xs-12">
							<div class="img_part mb-4 mb-sm-0 wow fadeIn" data-wow-delay="0.4s">
								<img src="<?php echo base_url()?>images/website/our_story/<?php if(isset($our_story)){ echo escape_output($our_story->story_img_2); }?>" class="img-fluid" alt="<?php if(isset($our_story)){ echo escape_output($our_story->title); }?>">
							</div>
						</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
	<!--End Our Story-->

	<!--Start Offer Area-->
    <section class="offer_area bg_two sect_pad">
        <div class="container">
            <div class="sect_title mb-5 text-center wow fadeIn">
                <h2 class="curve_title">Exclusive</h2>
                <h3 class="big_title">Best Offer</h3>
            </div>
            <div class="row offer_inner wow fadeIn" data-wow-delay="0.5s">
                <div class="offer_slider owl-carousel">
					<div class="owl_item">
						<div class="item">
							<div class="img_area">
								<img src="https://bhojon.bdtask-demo.com/demo-classic/application/modules/itemmanage/assets/images/medium/pngwing_com_(16)1.png" alt="Nasi Goreng">
							</div>
							<div class="item_content text-center pb-4">
								<span class="top_side">-10%</span>
								<a href="https://bhojon.bdtask-demo.com/demo-classic/details/8/21" class="item_name">Nasi Goreng</a>
								<p>300.00</p>
								<input type="hidden" name="qty" id="sst61_other" value="1">
								<input name="sizeid" type="hidden" id="sizeid_1other" value="21">
								<input type="hidden" name="catid" id="catid_1other" value="18">
								<input type="hidden" name="itemname" id="itemname_1other" value="Nasi Goreng">
								<input type="hidden" name="varient" id="varient_1other" value="1:1">
								<input type="hidden" name="cartpage" id="cartpage_1other" value="0">
								<input name="itemprice" type="hidden" value="300.00" id="itemprice_1other">
								<div id="snackbar1" class="snackbar">Item has been successfully added</div>
								<a onclick="addtocartitem(8,1,'other')" class="simple_btn"> <i class="ti-shopping-cart mr-2"></i><span>Add To cart</span></a>
							</div>
						</div>
					</div>
					<div class="owl_item">
						<div class="item">
							<div class="img_area">
								<img src="https://bhojon.bdtask-demo.com/demo-classic/application/modules/itemmanage/assets/images/medium/pngwing_com_(16)1.png" alt="Nasi Goreng">
							</div>
							<div class="item_content text-center pb-4">
								<span class="top_side">-10%</span>
								<a href="https://bhojon.bdtask-demo.com/demo-classic/details/8/21" class="item_name">Nasi Goreng</a>
								<p>300.00</p>
								<input type="hidden" name="qty" id="sst61_other" value="1">
								<input name="sizeid" type="hidden" id="sizeid_1other" value="21">
								<input type="hidden" name="catid" id="catid_1other" value="18">
								<input type="hidden" name="itemname" id="itemname_1other" value="Nasi Goreng">
								<input type="hidden" name="varient" id="varient_1other" value="1:1">
								<input type="hidden" name="cartpage" id="cartpage_1other" value="0">
								<input name="itemprice" type="hidden" value="300.00" id="itemprice_1other">
								<div id="snackbar1" class="snackbar">Item has been successfully added</div>
								<a onclick="addtocartitem(8,1,'other')" class="simple_btn"> <i class="ti-shopping-cart mr-2"></i><span>Add To cart</span></a>
							</div>
						</div>
					</div>
					<div class="owl_item">
						<div class="item">
							<div class="img_area">
								<img src="https://bhojon.bdtask-demo.com/demo-classic/application/modules/itemmanage/assets/images/medium/pngwing_com_(16)1.png" alt="Nasi Goreng">
							</div>
							<div class="item_content text-center pb-4">
								<span class="top_side">-10%</span>
								<a href="https://bhojon.bdtask-demo.com/demo-classic/details/8/21" class="item_name">Nasi Goreng</a>
								<p>300.00</p>
								<input type="hidden" name="qty" id="sst61_other" value="1">
								<input name="sizeid" type="hidden" id="sizeid_1other" value="21">
								<input type="hidden" name="catid" id="catid_1other" value="18">
								<input type="hidden" name="itemname" id="itemname_1other" value="Nasi Goreng">
								<input type="hidden" name="varient" id="varient_1other" value="1:1">
								<input type="hidden" name="cartpage" id="cartpage_1other" value="0">
								<input name="itemprice" type="hidden" value="300.00" id="itemprice_1other">
								<div id="snackbar1" class="snackbar">Item has been successfully added</div>
								<a onclick="addtocartitem(8,1,'other')" class="simple_btn"> <i class="ti-shopping-cart mr-2"></i><span>Add To cart</span></a>
							</div>
						</div>
					</div>
					<div class="owl_item">
						<div class="item">
							<div class="img_area">
								<img src="https://bhojon.bdtask-demo.com/demo-classic/application/modules/itemmanage/assets/images/medium/pngwing_com_(16)1.png" alt="Nasi Goreng">
							</div>
							<div class="item_content text-center pb-4">
								<span class="top_side">-10%</span>
								<a href="https://bhojon.bdtask-demo.com/demo-classic/details/8/21" class="item_name">Nasi Goreng</a>
								<p>300.00</p>
								<input type="hidden" name="qty" id="sst61_other" value="1">
								<input name="sizeid" type="hidden" id="sizeid_1other" value="21">
								<input type="hidden" name="catid" id="catid_1other" value="18">
								<input type="hidden" name="itemname" id="itemname_1other" value="Nasi Goreng">
								<input type="hidden" name="varient" id="varient_1other" value="1:1">
								<input type="hidden" name="cartpage" id="cartpage_1other" value="0">
								<input name="itemprice" type="hidden" value="300.00" id="itemprice_1other">
								<div id="snackbar1" class="snackbar">Item has been successfully added</div>
								<a onclick="addtocartitem(8,1,'other')" class="simple_btn"> <i class="ti-shopping-cart mr-2"></i><span>Add To cart</span></a>
							</div>
						</div>
					</div>
					<div class="owl_item">
						<div class="item">
							<div class="img_area">
								<img src="https://bhojon.bdtask-demo.com/demo-classic/application/modules/itemmanage/assets/images/medium/pngwing_com_(16)1.png" alt="Nasi Goreng">
							</div>
							<div class="item_content text-center pb-4">
								<span class="top_side">-10%</span>
								<a href="https://bhojon.bdtask-demo.com/demo-classic/details/8/21" class="item_name">Nasi Goreng</a>
								<p>300.00</p>
								<input type="hidden" name="qty" id="sst61_other" value="1">
								<input name="sizeid" type="hidden" id="sizeid_1other" value="21">
								<input type="hidden" name="catid" id="catid_1other" value="18">
								<input type="hidden" name="itemname" id="itemname_1other" value="Nasi Goreng">
								<input type="hidden" name="varient" id="varient_1other" value="1:1">
								<input type="hidden" name="cartpage" id="cartpage_1other" value="0">
								<input name="itemprice" type="hidden" value="300.00" id="itemprice_1other">
								<div id="snackbar1" class="snackbar">Item has been successfully added</div>
								<a onclick="addtocartitem(8,1,'other')" class="simple_btn"> <i class="ti-shopping-cart mr-2"></i><span>Add To cart</span></a>
							</div>
						</div>
					</div>
					<div class="owl_item">
						<div class="item">
							<div class="img_area">
								<img src="https://bhojon.bdtask-demo.com/demo-classic/application/modules/itemmanage/assets/images/medium/pngwing_com_(16)1.png" alt="Nasi Goreng">
							</div>
							<div class="item_content text-center pb-4">
								<span class="top_side">-10%</span>
								<a href="https://bhojon.bdtask-demo.com/demo-classic/details/8/21" class="item_name">Nasi Goreng</a>
								<p>300.00</p>
								<input type="hidden" name="qty" id="sst61_other" value="1">
								<input name="sizeid" type="hidden" id="sizeid_1other" value="21">
								<input type="hidden" name="catid" id="catid_1other" value="18">
								<input type="hidden" name="itemname" id="itemname_1other" value="Nasi Goreng">
								<input type="hidden" name="varient" id="varient_1other" value="1:1">
								<input type="hidden" name="cartpage" id="cartpage_1other" value="0">
								<input name="itemprice" type="hidden" value="300.00" id="itemprice_1other">
								<div id="snackbar1" class="snackbar">Item has been successfully added</div>
								<a onclick="addtocartitem(8,1,'other')" class="simple_btn"> <i class="ti-shopping-cart mr-2"></i><span>Add To cart</span></a>
							</div>
						</div>
					</div>
					<div class="owl_item">
						<div class="item">
							<div class="img_area">
								<img src="https://bhojon.bdtask-demo.com/demo-classic/application/modules/itemmanage/assets/images/medium/pngwing_com_(16)1.png" alt="Nasi Goreng">
							</div>
							<div class="item_content text-center pb-4">
								<span class="top_side">-10%</span>
								<a href="https://bhojon.bdtask-demo.com/demo-classic/details/8/21" class="item_name">Nasi Goreng</a>
								<p>300.00</p>
								<input type="hidden" name="qty" id="sst61_other" value="1">
								<input name="sizeid" type="hidden" id="sizeid_1other" value="21">
								<input type="hidden" name="catid" id="catid_1other" value="18">
								<input type="hidden" name="itemname" id="itemname_1other" value="Nasi Goreng">
								<input type="hidden" name="varient" id="varient_1other" value="1:1">
								<input type="hidden" name="cartpage" id="cartpage_1other" value="0">
								<input name="itemprice" type="hidden" value="300.00" id="itemprice_1other">
								<div id="snackbar1" class="snackbar">Item has been successfully added</div>
								<a onclick="addtocartitem(8,1,'other')" class="simple_btn"> <i class="ti-shopping-cart mr-2"></i><span>Add To cart</span></a>
							</div>
						</div>
					</div>
					
                </div>
            </div>
        </div>
    </section>
	<!--End Offer Area -->

	<!-- Our Menu -->
	<section class="about_us sect_pad bg_img_area">
		<div class="bg_img_right bg_overlay"></div>
		<div class="container">
			<div class="row about_inner">
				<div class="col-xl-6 col-lg-7 mb-lg-0 wow fadeIn">
					<div class="row">
						<div class="col-sm-6">
							<div class="img_part mb-4 mb-md-0">
								<a href="#">
									<img src="<?php echo base_url()?>images/website/our_menu/<?php if(isset($our_menu)){ echo escape_output($our_menu->menu_img_1); }?>" class="img-fluid" alt="<?php if(isset($our_menu)){ echo escape_output($our_menu->title); }?>">
								</a>
							</div>
						</div>
						<div class="col-sm-6">
							<div class="img_part mb-4">
								<a href="#">
									<img src="<?php if(isset($our_menu)){ echo base_url()?>images/website/our_menu/<?php echo escape_output($our_menu->menu_img_2); }?>" class="img-fluid" alt="<?php if(isset($our_menu)){ echo escape_output($our_menu->title); }?>">
								</a>
							</div>
							<div class="img_part mb-4">
								<a href="#">
									<img src="<?php if(isset($our_menu)){ echo base_url()?>images/website/our_menu/<?php echo escape_output($our_menu->menu_img_3); }?>" class="img-fluid" alt="<?php if(isset($our_menu)){ echo escape_output($our_menu->title); }?>">
								</a>
							</div>  
						</div>
					</div>
				</div>
				<div class="col-xl-6 col-lg-5 text-center pl-lg-5 px-3 wow fadeIn" data-wow-delay="0.5s">
					<div class="sect_title my-4">
						<h2 class="curve_title"><?php if(isset($our_menu)){ echo escape_output($our_menu->title); }?></h2>
						<h3 class="big_title"><?php if(isset($our_menu)){ echo escape_output($our_menu->sub_title); }?></h3>
					</div>
					<div class="aboutus_text">
						<p class="mb-4"> 
							<?php if(isset($our_menu)){ echo escape_output($our_menu->description); }?>
						</p>
						<a href="<?php if(isset($our_menu)){ echo escape_output($our_menu->link); }?>" class="simple_btn <?php if(isset($our_menu)){ echo ''; }else{ echo 'd-none'; }?>">View Full Menu</a>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!--End Our Menu-->

	<!--Reservation Area-->
    <section class="reservation-area sect_pad bg_two">
        <div class="container">
            <div class="sect_title mb-5 text-center">
                <h2 class="curve_title">Reservation</h2>
                <h3 class="mb-3 big_title">BOOK YOUR TABLE</h3>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>            </div>
            <div class="row">
                <div class="col-lg-12 text-center">
                     <form action="https://metacloudsoftware.com/#" method="post" class="main-reservaton-form" accept-charset="utf-8">
				<input type="hidden" name="csrf_test_name" value="a0b76dca4f10cb73bec117a8fcd58aca" />                                                                                       
                        <div class="row">
                            <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                                <label for="reservation_person"><i class="ti-face-smile"></i></label>
                                <input type="number" name="reservation_person" id="reservation_person" placeholder="Total Person" autocomplete="off">
                            </div>
                            <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                                <label for="reservation_date"><i class="ti-calendar"></i></label>
                                <input type="text" name="reservation_date" id="reservation_date" placeholder="Expected Date" class="datepickerreserve" autocomplete="off">
                            </div>
                            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <label for="reservation_time"><i class="ti-alarm-clock"></i></label>
                                <input type="text" name="reservation_time" id="reservation_time" placeholder="Expected Time" autocomplete="off">
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <input name="checkurl" id="checkurl" type="hidden" value="hungry/checkavailablity.html" />
                                <button type="button" class="simple_btn" onclick="checkavailablity()">Check Availability</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
	<div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">Reserve Table</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body editinfo">

				</div>
			</div>
		</div>
	</div>
	<!--End Reservation Area-->
	<!--Start Table Chart-->
	<section class="table_chart" id="searchreservation">
		<div class="container">
			<div class="row table_chart_inner py-5">

			</div>
		</div>
	</section>
	<!--End Table Chart-->

	<!--Special Menu AREA-->
    <section class="menu_area sect_pad3 bg_img_area">
        <div class="bg_img_left img_2 bg_overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-lg-4 wow fadeIn">
                    <div class="sect_title mt-lg-5 mt-0">
                        <h2 class="curve_title">Specials</h2>
                        <h3 class="big_title">FOOD MENU</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The</p>                    
					</div>
                </div>
                <div class="col-lg-8 wow fadeIn">
                    <div class="menu_slider owl-carousel">
						<?php 

						if(isset($special_food_menus)){
						foreach($special_food_menus as $key=>$s_menu){
						?>
                        <div class="owl-item">
							<div class="menu_item">
								<div class="menu_info">
									<a href="#" class="h1 d-block mb-3"><?php echo escape_output($s_menu->title)?></a>
									<p><?php echo escape_output($s_menu->description)?></p>
									<h2></h2>
									<a href="#" class="simple_btn"><i class="ti-shopping-cart"></i><span>Add To cart</span></a>
								</div>
								<div class="menu_img">
									<img src="<?php echo base_url();?>images/website/special_food_menu/<?php echo escape_output($s_menu->menu_img_1) ?>" alt="Chicken Pesto">
								</div>
							</div>
						</div>
						<?php }} ?>
                    </div>
                </div>
            </div>
        </div>
    </section>
	<!--Special Menu AREA END-->

	<!--TEAM AREA-->
    <section class="team-area sect_pad2">
        <div class="container">
            <div class="sect_title mb-5 text-center">
                <h2 class="curve_title">Professional</h2>
                <h3 class="big_title">OUR EXPERT CHEFS</h3>
            </div>
            <div class="row">
				<div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 team_slider owl-carousel">
					<?php
					if(isset($chefs)){
					foreach($chefs as $chef){
					?>
                    <div class="single-team-member text-center">
						<div class="team-member-img ">
							<img src="<?php echo base_url()?>images/website/chef/<?php echo escape_output($chef->chef_image)?>" alt="<?php echo escape_output($chef->name)?>">
						</div>
						<div class="member-details">
							<h5><?php echo escape_output($chef->name)?></h5>
							<p class="member_title"></p>
							<p></p>
						</div>
					</div>
					<?php }} ?>
				</div>
            </div>
        </div>
    </section>
	<!--TEAM AREA END-->

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
						<div class="map"><p><iframe style="border: 0;" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14599.578237069936!2d90.3654215!3d23.8223482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1583411739085!5m2!1sen!2sbd" width="300" height="150" frameborder="0" allowfullscreen="allowfullscreen"></iframe></p></div>
						<div class="office_address wow fadeIn" data-wow-delay="0.3s">
														<h2 class="mb-4">Our Store</h2>
							<address>123 Suspendis matti,&nbsp;<br />Visaosang Building VST District,&nbsp;<br />NY Accums, North American</address>
<p><a class="d-block" href="http://soft9.bdtask.com/hungry-v1/">0123-456-78910</a><a class="d-block" href="http://soft9.bdtask.com/hungry-v1/">support@domain.com</a></p>							<button class="simple_btn"><span>Get Directions</span></button>
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
								<a href="index.html"><img src="assets/img/2021-01-02/b.png" alt="footer logo"></a>
							</div>
							<div class="footer-init">
								<p class="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>							</div>
							<div class="footer-social-bookmark">
								<ul>
																			<li><a href="https://www.facebook.com/"><i class="fa fa-facebook"></i></a></li>
																			<li><a href="https://www.twitter.com/"><i class="fa fa-twitter"></i></a></li>
																			<li><a href="https://plus.google.com/"><i class="fa fa-google-plus"></i></a></li>
																			<li><a href="https://www.pinterest.com/"><i class="fa fa-pinterest"></i></a></li>
																			<li><a href="https://linkedin.com/"><i class="fa fa-linkedin"></i></a></li>
									
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
<p><strong>Sunday</strong>Â Off</p>							</div>
						</div>
					</div>
									<div class="col-lg-4">
						<div class="footer_widget">
							<h4>Contact Us</h4>
							<div class="footer_widget_body">
								<div class="footer-address">
									<p>356, Mannan Plaza ( 4th Floar ) Khilkhet Dhaka</p>
<p><a href="hungry.html">support@bdtask.com</a></p>
<p><a href="hungry.html">+88 01715 222 333</a></p>								</div>
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
							All Right Reserved. Developed by Meta Cloud
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