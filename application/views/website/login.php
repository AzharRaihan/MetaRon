
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
		        
		<!--PAGE HEADER AREA-->
		<div class="page_header menu_banner_bg">
			<div class="container wow fadeIn">
				<div class="row">
					<div class="col-md-12 col-xs-12">
						<div class="page_header_content text-center sect_pad">
							<h1>Login</h1>
							<ul class="m-0 nav pt-0 pt-lg-3 justify-content-center">
								<li><a href="index.html">Home</a></li>
								<li><i class="fa fa-angle-right"></i></li>
								<li class="active"><a href="#">Login</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--PAGE BARNER AREA END-->
	</header>
	<!--END HEADER TOP-->


	<!-- Login To Web -->
	<section class="menu_area sect_pad">
		<div class="container wow fadeIn">
			<div class="row p-4">
				<div class="col-md-6">
					<div class="panel-body">
						<h4>User Login</h4>
						<form action="#">
							<div class="row">
								<div class="col-12">
									<div class="form-group">
										<label class="control-label" for="user_email">Email Address</label>
										<input type="text" id="user_email" class="form-control" name="user_email">
									</div>
								</div>
								<div class="col-12">
									<div class="form-group">
										<label class="control-label" for="u_pass">Password <abbr class="required" title="required">*</abbr></label>
										<input type="password" id="u_pass" class="form-control" name="u_pass">
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-12">
									<div class="checkbox checkbox-success">
										<input id="brand1" type="checkbox">
										<label for="brand1">Remember Me</label>
										<a   class="lost-pass login_pa_cursor" data-toggle="modal" data-target="#lostpassword" data-dismiss="modal">Forgot Password</a>
									</div>	
									<a  class="btn btn-success btn-sm search login_pa_cursors">Login</a>	
								</div>
							</div>
						</form>
					</div>
				</div>
				<div class="col-md-6">
					<div class="panel-body">
						<h4>Admin Login</h4>
						<form action="<?php echo base_url();?>Authentication/loginCheck" method="POST">
							<div class="row">
								<div class="col-12">
									<div class="form-group">
										<label class="control-label" for="email_address">Email Address</label>
										<input type="text" id="email_address" class="form-control" name="email_address" required="required">
									</div>
								</div>
								<div class="col-12">
									<div class="form-group">
										<label class="control-label" for="u_pass">Password</label>
										<input type="password" id="password" class="form-control" name="password" required="required">
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-12">
									<div class="checkbox checkbox-success">
										<input id="brand1" type="checkbox">
										<label for="brand1">Remember Me</label>
										<a   class="lost-pass login_pa_cursor" data-toggle="modal" data-target="#lostpassword" data-dismiss="modal">Forgot Password</a>
									</div>
									<button type="submit" name="submit" value="submit"  class="btn btn-success btn-sm search login_pa_cursors submit_login" >Login</button>	
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- Login To Web End -->
	

