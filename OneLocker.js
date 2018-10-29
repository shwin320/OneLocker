var login_protocol = function(){
	var uname = document.getElementById("u");
	var username = uname.value;
	var reload = function(){
		window.location.reload();
	};	
	if (username === "student1" || username === "athomas1"){
		var pword = document.getElementById("p");
		var password = pword.value;
		if (password === "athomas5149" || password === "thomaslocker"){
			body.innerHTML = '\
			<p>Welcome to your locker, Ashwin Thomas.<button onclick="reload();" class="link" id="logout"><a href="" class="link">Logout?</a></button></p>\
			<p style="margin-top: -15px">Questions? Raise your hand and ask <a href="mailto:shwin320@gmail.com" target="_blank" class="link">Ashwin Thomas</a>, OneLocker devoloper.</p>\
			<br><br>\
			<h1>OneLocker</h1>\
			<h2>Your world, digitalized</h2>\
			<img src="https://images-na.ssl-images-amazon.com/images/I/51ry%2BQ3N9VL._SY355_.jpg" id="unhover">\
			<br><br><br><br><br><br><br>\
			<div>\
			<h2 style="margin-bottom: -10px; color: Black;">Your Locker\'s Contents:</h2>\
			<a href="#home_content">\
				<img id="h" class="hoverer" src="https://lh4.googleusercontent.com/tQhghxl_AgWihWME3QkUHK5gbSs-LzuYcNNTF72U_etYQ7QJAv2wVLsIOpDPNDeyrnOTNvl6U_PHVh-fNL4jERbDFDGDK-iEsukOVFtZpWYCdInCX3VEIG7H38ou71gMfoGHtS5hlY5s8KkXb9Up7Z77YDbV9DNJKpclILodhxdeXuQyoKw2wE0VjTW3_mS0Zdx4HZdDZYgi9ThEcOVRmz63Jxf9h-skCB12KZeCnVjWH_Bh_3czPpAy6T-gwcBWMHykUOtkg2E_COqFbhKrAq7x1b6MZFWUqqpI6kvpETigLVYpcpdJ3qHHGCgitnVJnX6-abe9F0L-ajBtvogGLzfUTmr_xaJcM57EoZ5f5jQ8vRtXQFfa2elb3ujKFgtsyDixEOT_iKThCkpb4c3hyIF3GSVE5rBpPqXaWhSHwVcECMi5LAeO6AjwSjz416gitgpaOlgRek7b0AM0pC7Y_lgaWT53nmsxrqvKBRLxRZXLOg0nq-XZPDktTqGXPHzvGqXyhCGpj-IpyP6UciftVjz00j0RMAihl1-UrYPrW7gud1n7THwjM_HJlRjxDtfc5YdL8c_lJrkZiuQ5QWp85f7j9_oSlzow9ao7gk5vKHJe0Z04v6Cty6H2Ijl9-kZi3c5EhNijZHKqoQg083WMEi0-2l-03MfH4ew=w700-h662-no" width=200 height=189.25>\
			</a>\
			<a href="#school_content">\
				<img id="s" class="hoverer" src="http://clipartix.com/wp-content/uploads/2017/07/School-clip-art-free-clipart-images.jpg" width=135.875 height=200>\
			</a>\
			</div>\
			<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>\
			<div id="home_content" style="text-align: Left;">\
			<h3 style="margin-bottom: -25px;">Home:</h3>\
			<p><a href="#logout" style="font-size: 16px;">Go to top</a></p>\
			<div class="content">\
			<p><a href="#google_home">1. Google</a></p>\
			<p><a href="#computers">2. Programing and Devolopment</a></p>\
			<p><a href="#news">3. News</a></p>\
			<p><a href="#info">4. Information</a></p>\
			</div>\
			</div>\
			<div class="linkmenu">\
			<h4 id="google_home">Google:</h4>\
			<p><a href="#logout" style="font-size: 16px;">Go to top</a></p>\
			<div class="links">\
			<a href="https://accounts.google.com/AccountChooser?source=ogb&continue=https%3A%2F%2Fwww.google.com%2Fwebhp%3Fauthuser%3D&Email=shwin320%40gmail.com" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1000px-Google_%22G%22_Logo.svg.png" class="hoverer" width=100 height=100 style="margin-top: 40px;"></a>\
			<a href="https://mail.google.com/mail/u/?authuser=shwin320@gmail.com" target="_blank"><img src="https://lh6.ggpht.com/8-N_qLXgV-eNDQINqTR-Pzu5Y8DuH0Xjz53zoWq_IcBNpcxDL_gK4uS_MvXH00yN6nd4=w300" width=120 height=120></a>\
			<a href="https://drive.google.com/drive/u/?authuser=shwin320@gmail.com" target="_blank"><img src="https://lh6.ggpht.com/k7Z4J1IIXXJnC2NRnFfJNlkn7kZge4Zx-Yv5uqYf4222tx74wXDzW24OvOxlcpw0KcQ=w300" width=120 height=120></a>\
			<a href="https://calendar.google.com/calendar/?authuser=shwin320@gmail.com" target="_blank"><img src="https://lh4.ggpht.com/oGR9I1X9No3SfFEXrq655tETtVVzI3jIphhmEVPGPEVuM5gfwh8lOGWHQFf6gjSTvw=w300" width=120 height=120></a>\
			<a href="https://keep.google.com/u/?authuser=shwin320@gmail.com" target="_blank"><img src="https://www.google.com/images/icons/product/keep-512.png" width=120 height=120></a>\
			</div>\
			</div>\
			<div class="linkmenu">\
			<h4 id="computers">Programing and Devolopment:</h4>\
			<p><a href="#logout">Go to top</a></p>\
			<div class="links">\
			<a href="https://x.thunkable.com/" target="_blank"><img src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_1508971013/thunkable.png" width=120 height=120 style="margin-top: 40px;"></a>\
			<a href="https://www.codecademy.com" target="_blank"><img src="https://avatars2.githubusercontent.com/u/1463944?s=280&v=4" width=120 height=120></a>\
			<a href="https://ifttt.com" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/en/e/ec/IFTTT_Logo_2015.png" width=130 height=130></a>\
			<a href="https://education.github.com/pack/offers" target="_blank"><img src="https://avatars0.githubusercontent.com/u/9919?s=280&v=4" width=120 height=120></a>\
			</div>\
			</div>\
			<div class="linkmenu">\
			<h4 id="news">News:</h4>\
			<p><a href="#logout">Go to top</a></p>\
			<div class="links">\
			<a href="http://www.6abc.com/" target="_blank"><img src="https://lh3.googleusercontent.com/8kj3-t3zEuUkY7Jpj-gOT-QUYfbG59s2F4WrjQ1z3amqzVsMQ5QT_G0ygPimhY3BD8hxgFX2kNOIPyh2fH4xXA397hL7SYFnx6emqM4NZXCvpVhi1yPPDBC0_ALKJd0LBEeJWOb0bIfDEZOwED98j-sGh4q5KZFHAH4uQjvnVps7abzw-C2lDWo36_nb0V2JLDjL8YSbw10kcHPe-JGiXw43aC5fOJ7nALVxwzDwP_SJMxSXaTrbuxdLxafcGQ7DYw1wn6HDPKxE5Zv1KiuQuaGhzcLSlkhuNKR8FXoUKMKXe8QVqKB69dQ-flj6Z5ozJl12htJigrhWTH6wdnDIdEIqCCBSZQHopEkOnj6A97NP4eAOgO6wUnBfN358Qj96-997941JYwGi5CE3_f9kSBUVisU53xJKT9RIHy9gCe9qjWe8ngFQZmqmyt9BTiydhjJP-U3aA82BPinjOOuqfHpJtog9mfU2vanxQutji73U9NZ5sdy_Qs21Ip2gaOuypQQhbJQTDHR4KgWyDII1fECGOuyYqBe0BAGaII9jhZJlYeHOeQ44YOgWnGdeI_o8T0HqIpGkbpn5LJEmNR_oQSYBjufPvL6uG5OMSrk9qxMlS9r8GFRA5ZKc2faaEsWHo70zcF1DzPPy4LNDvXf2zMjaNQjlGb92=s600-no" width=120 height=120 style="margin-top: 40px;"></a>\
			<a href="http://www.cnn.com/cnn10" target="_blank"><img src="https://lh3.googleusercontent.com/GN8dnvA7fP1tutRCR11c1D43CEqATcURY01ytkAlpHKP0Txg3xGNZRRaFbQJhR82Oyd9YtQeRyeikl7Has7ZuzMnK-JqWBVC2eb5os4TiKLI5XJolzXiQ5Nejvm0tCesU4B4VMk2-IK6lWfxb6uGERcoiQ7Tt8zgv2xAMRtBQSCiyAAMjA602JLW5x_O7thGitmWVsc5oIgTQ2p66zkWSLdaxLoyJU5JWO6ioaLcpfgMt9cHJf8QQut8g46nKfmkw7OYjkMN7J08JHUhc0f5W32mTfS5Odw4f-ifT0Plf5oJnKaQFy0YXV099yeS2wyrQ6LvsFnHM749vvuH7-SttI47uDGxkVCJ9d8xdjEagylPsJp1dkCRHjCUQhAHstcbmzbzz9wi9JpmGXmayrUXzsBHyTjvKRNthxOOJLpqY7IKBEiDs3mfBpea5PTJNs24vWFUWSmbbGDYdcqfw2O7tAtam1nf9bA42hh8s29KSj9PejAXFzvcqZ_I1pNeTf36dYjzpNnRHwt00CLYh4kUrB104KEvENugCR-gWxFgvY8Xj_ieMTo-esWMD6CNeT6Mw1tmBvEuHg2lCSwkKu8Ru7iSHyy6etlgoqU25bbCCuDAcMdf-d_mdUTO40oDlsU_5otV-YD_fLqySUaGbN4z9MYPNUJLA5ZZ=s745-no" width=130 height=130 style="margin-top: 40px;"></a>\
			<a href="https://www.stockpile.com/dashboard" target="_blank"><img src="https://pbs.twimg.com/profile_images/862445396601262080/_DMrm6Uu_400x400.jpg" width=120 height=120></a>\
			</div>\
			</div>\
			<div class="linkmenu">\
			<h4 id="info">Information:</h4>\
			<p><a href="#logout">Go to top</a></p>\
			<div class="links">\
			<a href="http://mclinc.polarislibrary.com/polaris/default.aspx" target="_blank"><img src="data:image/jpeg;base64,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" width=150 height=125 style="margin-top: 40px;"></a>\
			<a href="https://montcolibs.overdrive.com/mclinc-huntingdonvalley/content" target="_blank"><img src="https://images-na.ssl-images-amazon.com/images/I/41%2BtYHQHHgL._SY355_.png" width=120 height=120 style="margin-top: 40px;"></a>\
			<a href="https://arlo.netgear.com" target="_blank"><img src="https://images-eu.ssl-images-amazon.com/images/I/51Gd2BVtaFL.png" width=120 height=120></a>\
			</div>\
			</div>\
			<br><br><br><br><br><br><br><br><br>\
			<div id="school_content" style="text-align: Left;">\
			<h3 style="margin-bottom: -25px;">School:</h3>\
			<p><a href="#logout" class="link" style="font-size: 16px;">Go to top</a></p>\
			<div class="content">\
			<p><a href="#google">1. Google</a></p>\
			<p><a href="#study">2. Studying Recources</a></p>\
			<p><a href="#textbooks">3. Textbooks</a></p>\
			<p><a href="#lmtsd">4. LMTSD Online</a></p>\
			<p><a href="#agenda">5. Agenda</a></p>\
			</div>\
			</div>\
			<div class="linkmenu">\
			<h4 id="google">Google:</h4>\
			<p><a href="#logout">Go to top</a></p>\
			<div class="links">\
			<a href="https://accounts.google.com/AccountChooser?source=ogb&continue=https%3A%2F%2Fwww.google.com%2Fwebhp%3Fauthuser%3D&Email=athomas5149%40stu.lmtsd.org" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1000px-Google_%22G%22_Logo.svg.png" width=120 height=120 style="margin-top: 40px;"></a>\
			<a href="https://mail.google.com/mail/u/?authuser=athomas5149@stu.lmtsd.org" target="_blank"><img src="https://lh6.ggpht.com/8-N_qLXgV-eNDQINqTR-Pzu5Y8DuH0Xjz53zoWq_IcBNpcxDL_gK4uS_MvXH00yN6nd4=w300" width=120 height=120></a>\
			<a href="https://drive.google.com/drive/u/?authuser=athomas5149@stu.lmtsd.org" target="_blank"><img src="https://lh6.ggpht.com/k7Z4J1IIXXJnC2NRnFfJNlkn7kZge4Zx-Yv5uqYf4222tx74wXDzW24OvOxlcpw0KcQ=w300" width=120 height=120></a>\
			<a href="https://calendar.google.com/calendar/?authuser=athomas5149@stu.lmtsd.org" target="_blank"><img src="https://lh4.ggpht.com/oGR9I1X9No3SfFEXrq655tETtVVzI3jIphhmEVPGPEVuM5gfwh8lOGWHQFf6gjSTvw=w300" width=120 height=120></a>\
			<a href="https://classroom.google.com/?authuser=athomas5149@stu.lmtsd.org" target="_blank"><img src="https://lh4.googleusercontent.com/jWBBqrENpBVVCcMOekDOhhn-Zv_nAhWTysQK7zvANbyNd4UDodNlqoPpDE_XRCIpazdf=w300" width=120 height=120></a>\
			</div>\
			</div>\
			<div class="linkmenu">\
			<h4 id="study">Studying Recources:</h4>\
			<p><a href="#logout" class="link">Go to top</a></p>\
			<div class="links">\
			<a href="https://quizlet.com/latest" target="_blank"><img src="https://quizlet.com/a/i/brandmark/1024.TGu7.png" width=120 height=120></a>\
			<a href="https://www.khanacademy.org/" target="_blank"><img src="https://avatars0.githubusercontent.com/u/15455?s=200&v=4" width=120 height=120></a>\
			<a href="http://safari.lmtsd.org/SAFARI/montage/login/login.php?" target="_blank"><img src="http://www.safarimontage.com/images/homepage/sm_180px.jpg" width=150 height=150></a>\
			</div>\
			</div>\
			<div class="linkmenu">\
			<h4 id="textbooks">Textbooks:</h4>\
			<p><a href="#logout">Go to top</a></p>\
			<div class="links">\
			<a href="https://passport.emcl.com/student/#/courses/42598"><img src="http://support.emcschool.com/wp-content/uploads/2017/04/passport-vertical-e1501624753148.png" width=100 height=124></a>
			<a href="https://my.hrw.com/sp/access?sp=hrw&connection=lmtsd-org"><img src="https://sites.google.com/a/jeffcoschools.us/ms-lepke-algebra-1/_/rsrc/1442436585539/big-ideas-algebra-1/holt.jpg" width=140 height=140></a>
			<a href="https://www.hmhco.com/api/external-sso/access?sp=ed&connection=lmtsd-org"><img src="https://p2cdn4static.sharpschool.com/UserFiles/Servers/Server_5439645/Image/Educational%20Ser/History_Social_Studies_Digital_Materials/ED_HMH_Logo.jpg" width=166 height=139.6></a>
			<a href="https://sso.rumba.pearsoncmg.com/sso/login?service=https://k12integrations.pearsoncmg.com/ca/dashboard.htm&idpmetadata=http://www.lmtsd.org"><img src="https://lh3.googleusercontent.com/UhSFtCJHZzqbH2VGlfgLXoKJgv-NrBcMAynw6N3EReWK-UybX40yi7o1YWalhIZnvtvcN82zbbDbgoLHOVBIiGeOHBz5g9whGmeEXa0MgNrkam8Q5VcK8TUhkomGy0HnCFW8fvR5DrfLBHcCSs0O8lym_wLkecz4Gh-iStu_rB9P4V_D7JPqMmktz6jxfBnr38Uqg9wUX9lq7QtEshheoRM7LIMiSHOelyJHLLkkDeCxr82SyS9HIeAjxRvjy8vg6i2DFvLKEjDfqf97IXEM9rrIFeSTERR9mPNjcoJs34kl-U61DS1fz_5FrydPkzHXqKWy-82e-VZa533v5OIlkuu1D5pV4WGlRNeYgN-MRHodEo6wlyMNZTnGdII5l35Rs8IQ_c2oohciguRSbOz4NgZzhD9sTJ0HVuTMwuDXZ_9TMKFdcaA-rbg8P1ZuJ_V6skWRFDiA7MawTvrkEeWnPKxD6vCNUX3XidjFBCyW-wvksjf767caHUmxFYpx429qxNa5_3Oy-RptA_41FFPAmoZnqfgZIzbl6XkGImPNSo04QmkuTtVhKDr0ZMJppUH6ynFCCyi3YJaxoKwsdFJ3AeojENWqKjPyal2qfP6urC-sMrXHZ5J3fvVHFZIjRLcK5WVsElH5CbrcBR51CNclYBwVahA2pyC7=s400-no" width=120 height=120 style="margin-top: 40px;"></a>
			</div>\
			</div>\
			<div class="linkmenu">\
			<h4 id="lmtsd">LMTSD:</h4>\
			<p><a href="#logout">Go to top</a></p>\
			<div class="links">\
			<a href="https://www.lmtsd.org" target="_blank"><img src="https://i.vimeocdn.com/portrait/3663763_300x300" width=120 height=120 style="margin-top: 40px;"></a>\
			<a href="https://www.lmtsd.org/Domain/238" target="_blank"><img src="https://lh4.googleusercontent.com/pkY5S8CSMDPHMZV9pGWEd10RNQrVn4qfzOvBgd2lWZqiKVpOJOTrp1EszAuk4Hz7UmtCiIuBgzERyvU4nzO-tWxmV9UBfQQP1oBOWVBsdiJ9jR2iQtYGbdRXKBnQt5olHBAHUVjJB9pPh-njuW5PuwCjqGovlOR-U9rxY-D9EFtff_YVy5uY3StjRtKL53lc_heOzmkcGYhKCheYNJEvqjCE0mjpN0Lle0nVvgbi2eBbJypQPt12c25zbxRgRC3PW_b3vrEnyADtzANyUI0WaAVDjX-DhH1lk6y3PSEcBJ4kCa1APrfqbU-5fUM0MJ7XNAdgOTCZYoYIWAairG5n1YE2qS22psx-bfAdgg8xMdte4h7w1sNtoJKJKVbJ86AcLtJ6l5fPOE6eHYpH7oTKNvWq3MeQZGHmj69503nq0kiklE82Ml4hNhdopJ_HOjkMJYHOf-ptWIskwtn_bkgz9xZECPVQmc22zLBHBZLEGmNY4PnFq0qyxhZzPiw8iL8uJAABPjMeRyJ7Fc_RJbn26lZJO1RAeHmQQDmNNzEBVkJ8ljOF3iqWXn-4gEZe8Svh1fwjuFzhJzejLx0shpfXJe-JoaY2UJSdEjicupmpjLC_GfCSyhOocghYV9m_Y7-7IgTprMajH7t4cpftICzoRvsFzd9JJqJWCHI=w392-h259-no" width=196 height=129.5></a>\
			<a href="https://www.lmtsd.org/Page/12691" target="_blank"><img src="http://p7cdn4static.sharpschool.com/UserFiles/Servers/Server_3709/File/General%201/online%20resources.jpg" width=191.6 height=113.6 style="margin-top: 40px;"></a>\
			<a href="https://www.lmtsd.org/Page/12676" target="_blank"><img src="https://www.lmtsd.org/cms/lib/PA01000427/Centricity/Domain/54/Virtual_Backpack.jpg" width=93.75 height=125.625></a>\
			<a href="https://lmtsd.nutrislice.com/menu/murray-avenue/lunch/" target="_blank"><img src="https://asdb.az.gov/asb/wp-content/uploads/sites/5/2016/05/lunch-menu.png" width=121 height=120></a>\
			<a href="https://www.lmtsd.org/domain/328" target="_blank"><img src="https://pre.psdschools.org/sites/pre.psdschools.org/files/8th%20grade.png" width=140 height=140></a>\
			</div>\
			</div>\
			<div class="linkmenu" style="text-align: Center;">\
			<h4 id="agenda">Agenda:</h4>\
			<p><a href="#logout">Go to top</a></p>\
			<iframe src="https://docs.google.com/document/d/1C_EIn7SYQXHBECvI45rT4x9c7geET5huVUNC3I2uRaQ/edit?embedded=true&rm=demo"  width=912 height=463></iframe>\
			</div>\
			';
		}
		else{
			alert("You have entered an invalid login");
			body.innerHTML = '<h1>Invalid Login!</h1>\
			<buttton onclick="reload();" class="link" id="try_again"><a href="">Reattempt Login?</a></button>';
		}
	}
	else{
		alert("You have entered an invalid login");
		body.innerHTML = '<h1>Invalid Login!</h1>\
		<button onclick="reload();" class="link" id="try_again2"><a href="" id="select">Reattempt Login?</a></button>';
	}
};
