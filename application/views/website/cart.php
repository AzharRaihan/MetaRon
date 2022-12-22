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

	
	<!--START HEADER TOP-->
	<header class="header_top_area">
		<div class="header_top">
			<div class="container">
				<nav class="navbar navbar-expand-lg">
					<a class="" href="<?php echo base_url();?>">
						<img src="<?php echo $web_logo;?>" alt="logo">
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
							<h1>Cart Page</h1>
							<ul class="m-0 nav pt-0 pt-lg-3 justify-content-center">
								<li><a href="index.html">Home</a></li>
								<li><i class="fa fa-angle-right"></i></li>
								<li class="active"><a href="#">Cart Page</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--PAGE BARNER AREA END-->
	</header>
	<!--END HEADER TOP-->



	<!-- Cart Page -->
	<div id="reloadcart">
		<div class="shopping_cart my-5">
			<div class="container">
				<div class="shopping_cart_inner">
					<div class="table-responsive">
						<table class="table table-bordered text-center mb-0">
							<thead>
								<tr>
									<th>Product</th>
									<th>Product Title</th>
									<th>Quantity</th>
									<th>Price</th>
									<th>Total</th>
									<th>Remove</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class="cart_image"><img src="https://bhojon.bdtask-demo.com/demo-default/application/modules/itemmanage/assets/images/small/h1_pizza.png" class="img-fluid" alt="Dinner Rice Package"></td>
									<td>Dinner Rice Package<br>Regular </td>
									<td>
										<div class="cart_counter">
											<button onclick="updatecart('b7bc2a2f5bb6d521e64c8974c143e9a0',1,'del')" class="reduced items-count" type="button">
											<i class="fa fa-minus"></i>
											</button>
											<input type="text" name="qty" id="sst3" maxlength="12" value="1" title="Quantity:" class="input-text qty">
											<button onclick="updatecart('b7bc2a2f5bb6d521e64c8974c143e9a0',1,'add')" class="increase items-count" type="button">
											<i class="fa fa-plus"></i>
											</button>
											<a class="serach cart_padding_15px" onclick="itemnote('b7bc2a2f5bb6d521e64c8974c143e9a0','')" title="Food Note">
											<i class="fa fa-sticky-note" aria-hidden="true"></i>
											</a>
										</div>
									</td>
									<td>15</td>
									<td>15</td>
									<td>
										<a class="serach" onclick="removetocart('b7bc2a2f5bb6d521e64c8974c143e9a0')">
										<i class="ti-close" aria-hidden="true"></i>
										</a>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
		<div class="calculate-content my-5">
			<div class="container">
				<div class="row">

					<div class="col-md-6 col-lg-4">
						<div class="bg-light p-4 shipping-form border">
							<h2></h2>
							<div class="payment-block" id="payment">
								<div class="payment-item">
									<input type="radio" name="payment_method" id="payment_method_cre" data-parent="#payment" data-target="#description_cre" value="5.00" required="" class="" onchange="getcheckbox('5.00','Delivery');">
									<label for="payment_method_cre"> Delivery - 5.00</label>
								</div>
								<div class="payment-item">
									<input type="radio" name="payment_method" id="payment_method_cre" data-parent="#payment" data-target="#description_cre" value="0.00" required="" class="" onchange="getcheckbox('0.00','Pickup');">
									<label for="payment_method_cre"> Pickup - 0.00</label>
								</div>
							</div>
							<div class="row mx-0">
								<div class="col-sm-6 px-0">
									<label>Order Date</label>
									<input type="text" name="orderdate" id="orderdate" value="2022-12-22" class="datepickerreserve mr-2 cart_w_96">
								</div>
								<div class="col-sm-6 px-0">
									<label>Receive Time</label>
									<input type="text" name="ordertime" id="reservation_time" value="13:53" class="cart_w_100">
								</div>
							</div>
						</div>
					</div>

					<div class="col-md-6 col-lg-4">
						<div class="bg-light border coupon-form p-4">
							<h2>Coupon Code</h2>
							<p>Enter your coupon code if you have one.</p>
							<form action="https://bhojon.bdtask-demo.com/demo-default/checkcoupon" method="post" class="coupon" accept-charset="utf-8">
								<input type="hidden" name="csrf_test_name" value="0ea6b879daea663f932a9103e192113c">
								<div class="form-group">
								<input type="text" class="form-control" id="couponcode" name="couponcode" placeholder="Enter your coupon code.." required="">
								</div>
								<input name="coupon" class="btn" type="submit" value="Apply coupon">
							</form>
						</div>
					</div>


					<div class="col-lg-4">
						<div class="bg-light border cart-totals p-4">
							<h2>Cart Totals</h2>
							<div class="cart-totals-border my-4">
								<div class="totals-item">
									<label>Subtotal</label>
									<div class="totals-value" id="cart-subtotal"><span id="subtotal">15</span></div>
								</div>
								<div class="totals-item">
									<label>Vat </label>
									<div class="totals-value" id="cart-tax"><span id="vat">2.25</span></div>
								</div>
								<div class="totals-item">
									<label>Discount</label>
									<div class="totals-value" id="Discount-charge"><span id="discount">0</span></div>
								</div>
								<span id="coupdiscount" class="cartlist_display_none">0</span>
								<div class="totals-item">
									<label>Service Charge</label>
									<div class="totals-value" id="Service"><span id="scharge">0</span> <input name="servicecharge" type="hidden" value="0" id="getscharge"><input name="servicename" type="hidden" value="" id="servicename"></div>
								</div>
								<div class="totals-item totals-item-total">
								<label>Grand Total</label>
									<div class="totals-value" id="gtotal"><span id="grtotal">17.25</span></div>
								</div>
							</div>
							<a onclick="gotocheckout()" class="checkout serach text-white">Proceed to checkout</a>
						</div>
					</div>

					<input name="multiplletaxvalue" id="multiplletaxvalue" type="hidden" value="a:0:{}">
				</div>
			</div>
		</div>
	</div>







	