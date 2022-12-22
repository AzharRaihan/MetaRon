
	
	<!--START HEADER TOP-->
	<header class="header_top_area">
		<div class="header_top">
			<div class="container">
				<nav class="navbar navbar-expand-lg">
					<a class="" href="<?php echo base_url();?>">
						<img src="<?php echo base_url();?>website_assets/img/2021-01-02/b.png" alt="logo">
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
								<a class="nav-link " href="<?php echo base_url();?>Authentication/webReservation" >Reservation</a>
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
							<a href="<?php echo base_url();?>Authentication/webReservation" >Reservation </a>
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
		        
		<!--PAGE HEADER AREA-->
		<div class="page_header menu_banner_bg">
			<div class="container wow fadeIn">
				<div class="row">
					<div class="col-md-12 col-xs-12">
						<div class="page_header_content text-center sect_pad">
							<h1>Reservation</h1>
							<ul class="m-0 nav pt-0 pt-lg-3 justify-content-center">
								<li><a href="index.html">Home</a></li>
								<li><i class="fa fa-angle-right"></i></li>
								<li class="active"><a href="#">Reservation</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--PAGE BARNER AREA END-->
	</header>
	<!--END HEADER TOP-->




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




	<!-- Reservation Modal Start -->
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
	<!-- End Reservation Modal -->

	<!--Reservation Area-->
	<section class="reservation-area sect_pad bg_two">
		<div class="container">
			<div class="sect_title mb-5 text-center">
							<h2 class="curve_title">Reservation</h2>
				<h3 class="mb-3 big_title">BOOK YOUR TABLE</h3>
				<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>         </div>
			<div class="row">
				<div class="col-lg-12 text-center">
					<form action="https://metacloudsoftware.com/#" method="post" class="main-reservaton-form" accept-charset="utf-8">
							<input type="hidden" name="csrf_test_name" value="a0b76dca4f10cb73bec117a8fcd58aca" />                                                                 
						<div class="row">
							<div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
								<label for="reservation_person"><i class="ti-face-smile"></i></label>
								<input type="number" name="reservation_person" id="reservation_person" placeholder="Total Person">
							</div>
							<div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
								<label for="reservation_date"><i class="ti-calendar"></i></label>
								<input type="text" name="reservation_date" id="reservation_date" placeholder="Expected Date" class="datepickerreserve">
							</div>
							<div class="col-lg-3 col-md-6 mb-4 mb-md-0">
								<label for="reservation_time"><i class="ti-alarm-clock"></i></label>
								<input type="text" name="reservation_time" id="reservation_time" placeholder="Expected Time">
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
	<!--End Reservation Area-->

	<!--Start Table Chart-->
	<section class="table_chart" id="searchreservation">
	</section>
	<!--End Table Chart-->

