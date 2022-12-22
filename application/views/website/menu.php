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




	<!-- Menu Page -->
	<section class="menu_area sect_pad">
		<div class="container wow fadeIn">
			<div class="row">
				<div class="col-xl-3 col-md-4 sidebar leftSidebar">
					<form action="https://metacloudsoftware.com/menu" method="post" class="form-inline mb-3" accept-charset="utf-8">
						<input type="hidden" name="csrf_test_name" value="a0b76dca4f10cb73bec117a8fcd58aca" />
						<input type="text" class="form-control productSelection" onkeypress="producstList();" name="product_name" id="product_name" placeholder="Search" aria-required="true"> <input class="autocomplete_hidden_value" name="product_id" id="SchoolHiddenId" type="hidden">
						<button class="btn btn-success" type="submit"><i class="ti-search"></i></button>
					</form>
					<div class="category_choose p-3 mb-3">
						<h6 class="mb-3 text-center">Items Available</h6>
						<div class="panel-group" id="accordion">
							<div class="panel panel-default">
								<div class="panel-heading">
									<h6 class="panel-title">
									<a href="#Japanese" class="accordion-toggle" data-toggle="collapse" aria-expanded="false">Japanese</a>
									</h6>
								</div>
								<div id="Japanese" class="panel-collapse collapse show" data-parent="#accordion">
									<div class="panel-body">
										<a onclick="searchmenu('13')" class="serach"><i class="ti-minus mr-2"></i>Japanese<span>(2)</span></a>
									</div>
								</div>
							</div>
							<div class="panel panel-default">
								<div class="panel-heading">
									<h6 class="panel-title">
									<a href="#Indianvegetarian" class="accordion-toggle" data-toggle="collapse" aria-expanded="false">Indian vegetarian</a>
									</h6>
								</div>
								<div id="Indianvegetarian" class="panel-collapse collapse " data-parent="#accordion">
									<div class="panel-body">
										<a onclick="searchmenu('9')" class="serach"><i class="ti-minus mr-2"></i>Indian vegetarian<span>(1)</span></a>
										<a onclick="searchmenu('28')" class="serach"><i class="ti-minus mr-2"></i>Food curry<span>(0)</span></a>
									</div>
								</div>
							</div>
							<div class="panel panel-default">
								<div class="panel-heading">
									<h6 class="panel-title">
									<a href="#LunchPackage" class="accordion-toggle" data-toggle="collapse" aria-expanded="false">Lunch Package</a>
									</h6>
								</div>
								<div id="LunchPackage" class="panel-collapse collapse " data-parent="#accordion">
									<div class="panel-body">
										<a onclick="searchmenu('2')" class="serach"><i class="ti-minus mr-2"></i>Lunch Package<span>(4)</span></a>
										<a onclick="searchmenu('23')" class="serach"><i class="ti-minus mr-2"></i>indian food<span>(2)</span></a>
										<a onclick="searchmenu('24')" class="serach"><i class="ti-minus mr-2"></i>salad<span>(1)</span></a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="need_booking py-4 px-3 mb-3 text-center">
						<h6 class="mb-3">Need Help Booking?</h6>
						<div class="need_booking_inner">
							<p class="mb-2">Just call our customer services at any time, we are waiting 24 hours to recieve your calls.</p>
							<p><a href="#">+880 1712 123 123</a></p>                    
						</div>
					</div>
				</div>
				<div class="col-xl-6 col-md-8 mainContent">
					<div id="loaditem">
						<div id="loadingcon" class="completecss"><img src="view/themes/defaults/assets_web/images/loader.html" alt="loader" width="180" /></div>

						<div class="single_item row mb-3">
							<div class="item_img col-sm-3">
								<img src="https://bhojon.bdtask-demo.com/demo-default/application/modules/itemmanage/assets/images/medium/08.png" class="img-fluid" alt="Bangla Set Menu Rice Boarta">
							</div>
							<div class="item_details col-lg-6 col-sm-5 pl-0">
								<a href="https://bhojon.bdtask-demo.com/demo-default/details/2/2" class="item_title">Bangla Set Menu Rice Boarta</a>
								<div class="rating_area">
									<div class="rate-container">
										<i class="fa fa-star"></i>
										<i class="fa fa-star"></i>
										<i class="fa fa-star"></i>
										<i class="fa fa-star"></i>
										<i class="fa fa-star-o"></i>
									</div>
								</div>
								<p>1:2</p>
 								<div id="snackbar1" class="snackbar">Item has been successfully added</div>
									<a onclick="addonsitem(2,2,'menu')" class="simple_btn mt-1" data-toggle="modal" data-target="#addons" data-dismiss="modal">Add To cart</a>
							</div>
							<div class="item_info col-lg-3 col-sm-4 text-center">
								<h4>24.00</h4>
								<div class="cart_counter">
									<button class="reduced items-count" type="button">
										<i class="fa fa-minus"></i>
									</button>
									<input type="text" name="qty" id="sst61_menu" maxlength="12" value="1" title="Quantity:" class="input-text qty">
									<button onclick="var result = document.getElementById('sst61_menu'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;" class="increase items-count" type="button">
									<i class="fa fa-plus"></i>
									</button>
								</div>
							</div>
						</div>
						<div class="single_item row mb-3">
							<div class="item_img col-sm-3">
								<img src="https://bhojon.bdtask-demo.com/demo-default/application/modules/itemmanage/assets/images/medium/08.png" class="img-fluid" alt="Bangla Set Menu Rice Boarta">
							</div>
							<div class="item_details col-lg-6 col-sm-5 pl-0">
								<a href="https://bhojon.bdtask-demo.com/demo-default/details/2/2" class="item_title">Bangla Set Menu Rice Boarta</a>
								<div class="rating_area">
									<div class="rate-container">
										<i class="fa fa-star"></i>
										<i class="fa fa-star"></i>
										<i class="fa fa-star"></i>
										<i class="fa fa-star"></i>
										<i class="fa fa-star-o"></i>
									</div>
								</div>
								<p>1:2</p>
 								<div id="snackbar1" class="snackbar">Item has been successfully added</div>
									<a onclick="addonsitem(2,2,'menu')" class="simple_btn mt-1" data-toggle="modal" data-target="#addons" data-dismiss="modal">Add To cart</a>
							</div>
							<div class="item_info col-lg-3 col-sm-4 text-center">
								<h4>24.00</h4>
								<div class="cart_counter">
									<button class="reduced items-count" type="button">
										<i class="fa fa-minus"></i>
									</button>
									<input type="text" name="qty" id="sst61_menu" maxlength="12" value="1" title="Quantity:" class="input-text qty">
									<button onclick="var result = document.getElementById('sst61_menu'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;" class="increase items-count" type="button">
									<i class="fa fa-plus"></i>
									</button>
								</div>
							</div>
						</div>
						<div class="single_item row mb-3">
							<div class="item_img col-sm-3">
								<img src="https://bhojon.bdtask-demo.com/demo-default/application/modules/itemmanage/assets/images/medium/08.png" class="img-fluid" alt="Bangla Set Menu Rice Boarta">
							</div>
							<div class="item_details col-lg-6 col-sm-5 pl-0">
								<a href="https://bhojon.bdtask-demo.com/demo-default/details/2/2" class="item_title">Bangla Set Menu Rice Boarta</a>
								<div class="rating_area">
									<div class="rate-container">
										<i class="fa fa-star"></i>
										<i class="fa fa-star"></i>
										<i class="fa fa-star"></i>
										<i class="fa fa-star"></i>
										<i class="fa fa-star-o"></i>
									</div>
								</div>
								<p>1:2</p>
 								<div id="snackbar1" class="snackbar">Item has been successfully added</div>
									<a onclick="addonsitem(2,2,'menu')" class="simple_btn mt-1" data-toggle="modal" data-target="#addons" data-dismiss="modal">Add To cart</a>
							</div>
							<div class="item_info col-lg-3 col-sm-4 text-center">
								<h4>24.00</h4>
								<div class="cart_counter">
									<button class="reduced items-count" type="button">
										<i class="fa fa-minus"></i>
									</button>
									<input type="text" name="qty" id="sst61_menu" maxlength="12" value="1" title="Quantity:" class="input-text qty">
									<button onclick="var result = document.getElementById('sst61_menu'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;" class="increase items-count" type="button">
									<i class="fa fa-plus"></i>
									</button>
								</div>
							</div>
						</div>
						<div class="single_item row mb-3">
							<div class="item_img col-sm-3">
								<img src="https://bhojon.bdtask-demo.com/demo-default/application/modules/itemmanage/assets/images/medium/08.png" class="img-fluid" alt="Bangla Set Menu Rice Boarta">
							</div>
							<div class="item_details col-lg-6 col-sm-5 pl-0">
								<a href="https://bhojon.bdtask-demo.com/demo-default/details/2/2" class="item_title">Bangla Set Menu Rice Boarta</a>
								<div class="rating_area">
									<div class="rate-container">
										<i class="fa fa-star"></i>
										<i class="fa fa-star"></i>
										<i class="fa fa-star"></i>
										<i class="fa fa-star"></i>
										<i class="fa fa-star-o"></i>
									</div>
								</div>
								<p>1:2</p>
 								<div id="snackbar1" class="snackbar">Item has been successfully added</div>
									<a onclick="addonsitem(2,2,'menu')" class="simple_btn mt-1" data-toggle="modal" data-target="#addons" data-dismiss="modal">Add To cart</a>
							</div>
							<div class="item_info col-lg-3 col-sm-4 text-center">
								<h4>24.00</h4>
								<div class="cart_counter">
									<button class="reduced items-count" type="button">
										<i class="fa fa-minus"></i>
									</button>
									<input type="text" name="qty" id="sst61_menu" maxlength="12" value="1" title="Quantity:" class="input-text qty">
									<button onclick="var result = document.getElementById('sst61_menu'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;" class="increase items-count" type="button">
									<i class="fa fa-plus"></i>
									</button>
								</div>
							</div>
						</div>
						<!-- <div class="single_item row mb-3">
							<div class="item_details col-lg-6 col-sm-5 pl-0 text-center">
								<a href="#" class="item_title">No Data Found</a>
							</div>
						</div> -->
						<nav>
							<ul class="pagination justify-content-center">
								<li class="disabled"></li>
								<li class="page-item">
									<a class="page-link active" href="#">1</a>
								</li>
								<li class="page-item">
									<a href="#" class="page-link" data-ci-pagination-page="2">2</a>
								</li>
								<li class="page-item">
									<a href="#" class="page-link" data-ci-pagination-page="3">3</a>
								</li>
								<li>
									<a href="#" class="page-link" data-ci-pagination-page="2" rel="next">Next</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
				<div class="col-xl-3 d-none d-xl-block rightSidebar">
					<ul class="cart-box" id="cartitem">
						<li class="cart-content row">
							<div class="img-box">
								<img src="https://bhojon.bdtask-demo.com/demo-default/application/modules/itemmanage/assets/images/small/08.png" class="img-fluid" alt="Bangla Set Menu Rice Boarta">
							</div>
							<div class="content">
								<h6>Bangla Set Menu Rice Boarta<br>1:2</h6>
								<p>2 X 24</p>
							</div>
							<div class="delete_box">
								<a onclick="removecart('3d2172418ce305c7d16d4b05597c6a59')" class="serach">
								<i class="fa fa-trash"></i>
								</a>
							</div>
						</li>



						<li>
							<table class="table total-cost">
								<tbody>
									<tr>
									<td>Subtotal </td>
									<td>48</td>
									</tr>
									<tr>
									<td>Vat </td>
									<td>7.2</td>
									</tr>
									<tr>
									<td>Discount </td>
									<td>0</td>
									</tr>
								</tbody>
								<tfoot>
									<tr>
									<td>Total </td>
									<td>55.2</td>
									</tr>
								</tfoot>
							</table>
						</li>
						<li class="cart-footer text-right">
							<div class="checkout-box">
								<a href="https://bhojon.bdtask-demo.com/demo-default/cart" class="simple_btn mt-0">Go to Checkout</a>
							</div>
						</li>
					</ul>
					<div class="ad_area">
						<a href="#">
							<img src="index.html" alt="">
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- Menu Page End -->



	<!-- <div class="modal fade" id="addons" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" style="display: block; padding-right: 17px;">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">Food Details</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">×</span>
					</button>
				</div>
				<div class="modal-body addonsinfo">
					<div class="item-add-ons">
						<div class="d-flex align-items-center justify-content-between">
							<div class="checkbox checkbox-success">
								<input name="itemname" type="hidden" id="itemname_1menu" value="Bangla Set Menu Rice Boarta">
								<label for="addons_2" class="ml-1">Bangla Set Menu Rice Boarta</label>

								<input name="sizeid" type="hidden" id="sizeid_1menu" value="2">
								<input name="size" type="hidden" value="1:2" id="varient_1menu">
								<input type="hidden" name="catid" id="catid_1menu" value="2">
							</div>
							<p>
								<input name="itemprice" type="hidden" value="24.00" id="itemprice_1menu"><input type="hidden" name="cartpage" id="cartpage_1menu" value="1">
								<span id="vprice">24.00</span>
							</p>
						</div>
						<div class="d-flex align-items-center justify-content-between ml-6">
							<select name="varientinfo" class="form-control default_w_120" required="" id="varientinfo">
								<option value="2" data-title="1:2" data-price="24.00" selected="">1:2</option>
								<option value="5" data-title="1:3" data-price="30.00">1:3</option>
							</select>
							<div class="cart_counter hidden_cart">
								<button onclick="var result = document.getElementById('sst61_menu'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;" class="reduced items-count" type="button">
								<i class="ti-angle-down"></i>
								</button>
								<input type="number" name="itemqty" id="sst61_menu" maxlength="12" value="1" title="Quantity:" class="input-text qty">
								<button onclick="var result = document.getElementById('sst61_menu'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;" class="increase items-count" type="button">
								<i class="ti-angle-up"></i>
								</button>
							</div>
						</div>
					</div>


					<div class="item-add-ons addonsitem_new_class">
						<h6>Add-ons information</h6>
					</div>
					<div class="item-add-ons">
						<div class="d-flex align-items-center justify-content-between mt-3">
							<div class="checkbox checkbox-success">
								<input type="checkbox" role="5.00" title="souc" name="addons" value="1" id="addons_1">
								<label for="addons_1"></label>
								<label for="addons_name" class="ml-1">souc</label>
							</div>
							<p>
								<span>5.00</span>
							</p>
						</div>
						<div class="d-flex align-items-center justify-content-between ml-6">
							<div class="cart_counter hidden_cart">
								<button  class="reduced items-count" type="button">
									<i class="ti-angle-down"></i>
								</button>
								<input type="number" name="addonqty" id="addonqty_1" maxlength="12" value="1" title="Quantity:" class="input-text qty">
								<button  class="increase items-count" type="button">
									<i class="ti-angle-up"></i>
								</button>
							</div>
						</div>
					</div>
					<div class="calculate-content my-2 text-right">
						<a class="btn btn-success" onclick="addonsfoodtocart(2,1,'menu')">Add To cart</a>
						<a class="btn btn-success" onclick="addonsfoodtocartmulti(2,1,'menu')">Add Multiple Variant</a>
					</div>
				</div>
			</div>
		</div>
	</div> -->




	