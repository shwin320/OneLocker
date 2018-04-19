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
			body.innerHTML = '<p>Welcome to your locker, Ashwin Thomas.<button onclick="reload();" class="link" id="logout"><a href="" class="link">Logout?</a></button></p>\
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
			<p><a href="#media">3. Media</a></p>\
			<p><a href="#news">4. News</a></p>\
			</div>\
			</div>\
			<div class="linkmenu">\
			<h4 id="google_home">Google:</h4>\
			<p><a href="#logout" style="font-size: 16px;">Go to top</a></p>\
			<div class="links">\
			<a href="https://accounts.google.com/AccountChooser?source=ogb&continue=https%3A%2F%2Fwww.google.com%2Fwebhp%3Fauthuser%3D&Email=shwin320%40gmail.com" target="_blank"><img src="http://diylogodesigns.com/blog/wp-content/uploads/2016/04/google-logo-icon-PNG-Transparent-Background.png" class="hoverer" width=100 height=100 style="margin-top: 40px;"></a>\
			<a href="https://inbox.google.com/u/?authuser=shwin320@gmail.com" target="_blank"><img src="https://lh3.googleusercontent.com/I3RQGzVVAi3C3AWL597FKeTZ30rdXtwJQAe5xAXrzyDBTYqtW8dQgif4khr02vC0TOqnKwFJTq2vmVsHt1CptgCOYO3PhSr1RAalvGnqZtTlZUwyVfXzT2B6Rqhlq5cZtJfmgm3HJ9kCiLxqqAEOJGNlZXr-FMYK6Tlrd3On1RdYQvb2TVKOPVj3b1-DXWUc9A7TVIYjENB2ybZ1QaxmxUPG-rn8y7jJJQ6XeCeOgPmPIHzgkvukBuFjfYnK7Lzzd7fMF9YikcoMXa8iRteER6-e8ToY5eQy2mv09eAbwr4LB3hZvklMbRgSGtCTwemq34s5BdeoOxEeCgjwuDicWfoen6HPAIJ_3rMkJui51osYxS0x4TsdcWR9jQR1j9XQ3-4WdatcVGFo-3wULEG-MLq99Nv29UjlaFJP3AFt29Jeii2i7GEvV-wUWuvVQvbBYJeqB9ibbk1vmWYge-EZ4AtarSdL-p7JXaYRzvNnZkpahcBSkGgeZqhpmDUntXfjES6kMYimTvPLHsaV0o0FM2qR52cHCdZ47mgu0hMAc0Obzqj5Gj7xa7zThnCijOiC3oK1OVU5LEDAJ_eSITr-MwGdEsTe1PJ1_xGyDqu6K-6e37_gMGKMf9lRPHTGYahxVnAteueRxHwaV7HLya5pltj5fQNQ51cG=w531-h501-no" width=106.2 height=100.2></a>\
			<a href="https://drive.google.com/drive/u/?authuser=shwin320@gmail.com" target="_blank"><img src="https://lh6.ggpht.com/k7Z4J1IIXXJnC2NRnFfJNlkn7kZge4Zx-Yv5uqYf4222tx74wXDzW24OvOxlcpw0KcQ=w300" width=120 height=120></a>\
			<a href="https://calendar.google.com/calendar/?authuser=shwin320@gmail.com" target="_blank"><img src="https://lh4.ggpht.com/oGR9I1X9No3SfFEXrq655tETtVVzI3jIphhmEVPGPEVuM5gfwh8lOGWHQFf6gjSTvw=w300" width=120 height=120></a>\
			<a href="https://keep.google.com/u/?authuser=shwin320@gmail.com" target="_blank"><img src="https://www.google.com/images/icons/product/keep-512.png" width=120 height=120></a>\
			</div>\
			</div>\
			<div class="linkmenu">\
			<h4 id="computers">Programing and Devolopment:</h4>\
			<p><a href="#logout">Go to top</a></p>\
			<div class="links">\
			<a href="http://app.thunkable.com/?locale=en" target="_blank"><img src="https://lh3.googleusercontent.com/v36gVTP0AeHLS8gz5hGMW-pg9uYDiLntN5UIIkgiTpcXphf-ORTF76T4yKjYtz9EUB_is8YojEqW_z3fl7OscwpxQ1mu4e-mR41eNC22xPF_NHPfPJfrpEgSc-DKWQENbB8S0CjmH6JxQE_eBF0z5G7fr0kSuafHuM5OQ11t37OWTrkeDlBrRg3X1z61cu8CnqvOJT7171L4MNnoM0uPtlL-TwyV1L1rboEf5TCcuomVk3t3apB9lI3ps6Ss_za0BWllll_IVNSFH0yL8UPh4RWKCpIvjhAE_yhBnADl6hsfTn_N9QneI2krnVPsr9LdEGdv2yROTJO6Vm9LDVa-e9AB_r97-kJLO37jxj8WocZFDtFlIoULt-pWomO5JtKlKrfKB0Z28LU2Kd8JREOCL_O2x1jjRsY6DhR4cBh5MTnrQ6ci_ICoDAid23gIOZYgArwvQcPkh59OGSIfpTNKfJJTaQYGwXUr1Htaus-wcPEK7oeQwDiiTGVgj0ZkH8Ld5cwG72EKZfyUI8EGKOpqoh-G7l0FJGGOuvUZqIhr6va6qDRKxO8tMQnHESNsvdcFBQH0HG5Gvf4ubl5I8nT9cKkfRKRr1gbcaRpOZbTxPN85R0xYarucmUE94TlQCiROnRXSix_cXkX1CKc4AosnE1-NMc_VVvg-=s300-no" width=120 height=120 style="margin-top: 40px;"></a>\
			<a href="https://ios.thunkable.com/" target="_blank"><img src="https://lh3.googleusercontent.com/AHjeGV1wbOhBnpGOaDvHvU8ezfjWUUEzCXaB9LLjAGaRcwxz2ncB99unGr_GmWyjZEGnzu-voPbMAfhfj3KojdiBtI5K9aUdV0fDt1FRWP39Wm-qG8L8478BEdYQ4Z959jUXyVfuZsoeSrqawftE3-tf_6jmtHacRs95ILb0eRSUeTj0-UfxNftrihKgORGCB--wEeGL_ndIOuw_dcLzKmfNrC2jj96zAuO4lYcbXt64BJyh-BMiTTqb7H0kWevvshUbwNI3vn8MiJWhnW3OZJUWEJPfHrcmk90kS1fubp14wk2Mfy-XeEltrYXapqvASuKRA4sbQTqIFKuizmV9hzcXnnXEgcGpZjljdmdPJmZKkwAmBG_yBSa9LQZK4LteJbONHtCoDPMi309cCIqB4v6AJLZfenYmYz3KXYedjPKvoxh3qcbI3ifZYfkEFBiTYChQiq8ExB-T-9REGsZjwtqEGNewrpUutb86q-X0zbBR0xovduvtFfHyrQqYd6KOj36H5rFcPl4gJD_cl-3X1ohkaG0ocQv0eKXCMm8rcTiGcjV5xgBucov7coRMGgmprnM6QsROG6MOBHMh4N8rPX5mzwM_HZ_1iheHYAhoP7Y9XN4VR1HTOCFeilc4zledU2z8Mk4R2d_j6ARbpBsrrpAZO8r3tQOa=s300-no" width=120 height=120></a>\
			<a href="http://www.appmakr.com/machine/" target="_blank"><img src="http://apps.appmakr.com/styles/appmakr/logo_square.png" width=120 height=120></a>\
			<a href="https://onesignal.com/#" target="_blank"><img src="https://onesignal.com/images/notification_logo.png" width=120 height=120></a>\
			<a href="https://www.github.com/" target="_blank"><img src="https://pbs.twimg.com/profile_images/616309728688238592/pBeeJQDQ.png" width=120 height=120></a>\
			</div>\
			</div>\
			<div class="linkmenu">\
			<h4 id="media">Media:</h4>\
			<p><a href="#logout">Go to top</a></p>\
			<div class="links">\
			<a href="https://www.amazon.com/b/ref=atv_hm_hom_2_slct?_encoding=UTF8&filterId=OFFER_FILTER%3DYOURS_TO_WATCH&node=2676882011" target="_blank"><img src="http://orkutr.com/wp-content/uploads/2013/05/Amazon-Instant-Video.jpeg" width=120 height=120 style="margin-top: 40px;"></a>\
			<a href="http://www.nick.com/" target="_blank"><img src="http://nick.mtvnimages.com/nick-assets/common/nick-logo-200x200.png?quality=0.75" width=120 height=120></a>\
			<a href="http://pbskids.org/video/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/7/76/PBS_Kids_Logo.svg/1024px-PBS_Kids_Logo.svg.png" width=120 height=120></a>\
			<a href="http://tv.verizon.com/" target="_blank"><img src="https://lh3.ggpht.com/G9J8zAFfzRSHwlIVgmz2E1cqQN0OETriVsSuSfg9lmBeY-xNI_vrfDTc3zxykEBgAvQ=w300" width=120 height=120></a>\
			<a href="https://tv.xfinity.com/" target="_blank"><img src="https://lh3.googleusercontent.com/8I9NAED8I1Ure7XaLD3XMlHyN-wp9law7euOi9DWcURCHnyt7Z7MvN3CMGIcWuMVMQ=w300" width=120 height=120></a>\
			<a href="https://tunein.com/user/shwin320/" target="_blank"><img src="http://is2.mzstatic.com/image/thumb/Purple118/v4/10/c4/69/10c4699e-b239-ada2-1b96-1dc24ab6e0b8/source/175x175bb.jpg" width=120 height=120></a>\
			</div>\
			</div>\
			<div class="linkmenu">\
			<h4 id="news">News:</h3>\
			<p><a href="#logout">Go to top</a></p>\
			<div class="links">\
			<a href="http://www.cnn.com/cnn10" target="_blank"><img src="http://i.cdn.turner.com/cnn/services/podcasting/cnn10/images/cnn10graphics.jpg" width=120 height=120 style="margin-top: 40px;"></a>\
			<a href="http://www.bcctnie.com/" target="_blank"><img src="http://is5.mzstatic.com/image/thumb/Purple118/v4/51/2f/f7/512ff7ac-59d1-f4e1-c85e-3a4b909fc03f/source/175x175bb.jpg" width=120 height=120></a>\
			<a href="http://www.6abc.com/" target="_blank"><img src="https://lh3.googleusercontent.com/8kj3-t3zEuUkY7Jpj-gOT-QUYfbG59s2F4WrjQ1z3amqzVsMQ5QT_G0ygPimhY3BD8hxgFX2kNOIPyh2fH4xXA397hL7SYFnx6emqM4NZXCvpVhi1yPPDBC0_ALKJd0LBEeJWOb0bIfDEZOwED98j-sGh4q5KZFHAH4uQjvnVps7abzw-C2lDWo36_nb0V2JLDjL8YSbw10kcHPe-JGiXw43aC5fOJ7nALVxwzDwP_SJMxSXaTrbuxdLxafcGQ7DYw1wn6HDPKxE5Zv1KiuQuaGhzcLSlkhuNKR8FXoUKMKXe8QVqKB69dQ-flj6Z5ozJl12htJigrhWTH6wdnDIdEIqCCBSZQHopEkOnj6A97NP4eAOgO6wUnBfN358Qj96-997941JYwGi5CE3_f9kSBUVisU53xJKT9RIHy9gCe9qjWe8ngFQZmqmyt9BTiydhjJP-U3aA82BPinjOOuqfHpJtog9mfU2vanxQutji73U9NZ5sdy_Qs21Ip2gaOuypQQhbJQTDHR4KgWyDII1fECGOuyYqBe0BAGaII9jhZJlYeHOeQ44YOgWnGdeI_o8T0HqIpGkbpn5LJEmNR_oQSYBjufPvL6uG5OMSrk9qxMlS9r8GFRA5ZKc2faaEsWHo70zcF1DzPPy4LNDvXf2zMjaNQjlGb92=s600-no" width=120 height=120></a>\
			</div>\
			</div>\
			<br><br><br><br><br><br><br><br><br>\
			<div id="school_content" style="text-align: Left;">\
			<h3 style="margin-bottom: -25px;">School:</h3>\
			<p><a href="#logout" class="link" style="font-size: 16px;">Go to top</a></p>\
			<div class="content">\
			<p><a href="#study">1. Studying Recources</a></p>\
			<p><a href="#google">2. Google</a></p>\
			<p><a href="#textbooks">3. Textbooks</a></p>\
			<p><a href="#lmtsd">4. LMTSD Online</a></p>\
			<p><a href="#resources">5. Online Resources</a></p>\
			<p><a href="#library">6. Libraries</a></p>\
			<p><a href="#agenda">7. Agenda</a></p>\
			</div>\
			</div>\
			<div class="linkmenu">\
			<h4 id="study">Studying Recources:</h4>\
			<p><a href="#logout" class="link">Go to top</a></p>\
			<div class="links">\
			<a href="https://quizlet.com/latest" target="_blank"><img src="https://quizlet.com/a/i/brandmark/1024.TGu7.png" width=120 height=120></a>\
			<a href="http://safari.lmtsd.org/SAFARI/montage/login/login.php?" target="_blank"><img src="http://www.safarimontage.com/images/homepage/sm_180px.jpg" width=150 height=150></a>\
			<a href="https://www.khanacademy.org/" target="_blank"><img src="https://wiki.itap.purdue.edu/download/attachments/22414392/khan-academy.png?version=1&modificationDate=1330550567000&api=v2" width=210 height=120></a>\
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
			<h4 id="textbooks">Textbooks:</h4>\
			<p><a href="#logout">Go to top</a></p>\
			<div class="links">\
			<a href="https://sso.rumba.pearsoncmg.com/sso/login?service=https://k12integrations.pearsoncmg.com/ca/dashboard.htm&idpmetadata=http://www.lmtsd.org" target="_blank"><img src="https://lh4.googleusercontent.com/UhSFtCJHZzqbH2VGlfgLXoKJgv-NrBcMAynw6N3EReWK-UybX40yi7o1YWalhIZnvtvcN82zbbDbgoLHOVBIiGeOHBz5g9whGmeEXa0MgNrkam8Q5VcK8TUhkomGy0HnCFW8fvR5DrfLBHcCSs0O8lym_wLkecz4Gh-iStu_rB9P4V_D7JPqMmktz6jxfBnr38Uqg9wUX9lq7QtEshheoRM7LIMiSHOelyJHLLkkDeCxr82SyS9HIeAjxRvjy8vg6i2DFvLKEjDfqf97IXEM9rrIFeSTERR9mPNjcoJs34kl-U61DS1fz_5FrydPkzHXqKWy-82e-VZa533v5OIlkuu1D5pV4WGlRNeYgN-MRHodEo6wlyMNZTnGdII5l35Rs8IQ_c2oohciguRSbOz4NgZzhD9sTJ0HVuTMwuDXZ_9TMKFdcaA-rbg8P1ZuJ_V6skWRFDiA7MawTvrkEeWnPKxD6vCNUX3XidjFBCyW-wvksjf767caHUmxFYpx429qxNa5_3Oy-RptA_41FFPAmoZnqfgZIzbl6XkGImPNSo04QmkuTtVhKDr0ZMJppUH6ynFCCyi3YJaxoKwsdFJ3AeojENWqKjPyal2qfP6urC-sMrXHZ5J3fvVHFZIjRLcK5WVsElH5CbrcBR51CNclYBwVahA2pyC7=s400-no" width=120 height=120 style="margin-top: 40px;"></a>\
			<a href="https://my.hrw.com/sp/access?sp=hrw&connection=lmtsd-org" target="_blank"><img src="https://www.hmhco.com/Sites/HMH/Images/Global/headerLogo.png"></a>\
			<a href="https://passport.emcl.com/student/#/courses/24795" target="_blank"><img src="http://support.emcschool.com/wp-content/uploads/2017/04/passport-vertical-e1501624753148.png" width=100 height=124></a>\
			</div>\
			</div>\
			<div class="linkmenu">\
			<h4 id="lmtsd">LMTSD Online:</h4>\
			<p><a href="#logout">Go to top</a></p>\
			<div class="links">\
			<a href="https://www.lmtsd.org" target="_blank"><img src="https://i.vimeocdn.com/portrait/3663763_300x300" width=120 height=120 style="margin-top: 40px;"></a>\
			<a href="https://www.lmtsd.org/Domain/238" target="_blank"><img src="https://lh4.googleusercontent.com/pkY5S8CSMDPHMZV9pGWEd10RNQrVn4qfzOvBgd2lWZqiKVpOJOTrp1EszAuk4Hz7UmtCiIuBgzERyvU4nzO-tWxmV9UBfQQP1oBOWVBsdiJ9jR2iQtYGbdRXKBnQt5olHBAHUVjJB9pPh-njuW5PuwCjqGovlOR-U9rxY-D9EFtff_YVy5uY3StjRtKL53lc_heOzmkcGYhKCheYNJEvqjCE0mjpN0Lle0nVvgbi2eBbJypQPt12c25zbxRgRC3PW_b3vrEnyADtzANyUI0WaAVDjX-DhH1lk6y3PSEcBJ4kCa1APrfqbU-5fUM0MJ7XNAdgOTCZYoYIWAairG5n1YE2qS22psx-bfAdgg8xMdte4h7w1sNtoJKJKVbJ86AcLtJ6l5fPOE6eHYpH7oTKNvWq3MeQZGHmj69503nq0kiklE82Ml4hNhdopJ_HOjkMJYHOf-ptWIskwtn_bkgz9xZECPVQmc22zLBHBZLEGmNY4PnFq0qyxhZzPiw8iL8uJAABPjMeRyJ7Fc_RJbn26lZJO1RAeHmQQDmNNzEBVkJ8ljOF3iqWXn-4gEZe8Svh1fwjuFzhJzejLx0shpfXJe-JoaY2UJSdEjicupmpjLC_GfCSyhOocghYV9m_Y7-7IgTprMajH7t4cpftICzoRvsFzd9JJqJWCHI=w392-h259-no" width=196 height=129.5></a>\
			</div>\
			</div>\
			<div class="linkmenu">\
			<h4 id="resources">Online Resources:</h4>\
			<p><a href="#logout">Go to top</a></p>\
			<div class="links">\
			<a href="https://www.lmtsd.org/Page/12691" target="_blank"><img src="http://www.aldine.k12.tx.us/cms/ImageUploads/online%20resources.jpg" width=191.6 height=113.6 style="margin-top: 40px;"></a>\
			<a href="https://www.lmtsd.org/Page/12676" target="_blank"><img src="https://www.lmtsd.org/cms/lib/PA01000427/Centricity/Domain/54/Virtual_Backpack.jpg" width=93.75 height=125.625></a>\
			<a href="http://lmrhomeaccess.spihost.com/" target="_blank"><img src="https://lh4.googleusercontent.com/Y3McdfZ-af-_U1-APmbksCOhd0jlNN47tpa3aa254ZR6I5rQPPXN5cefSDEIrxTYjr3cpTNoED8CExstb3JZiILLW2NjEZsnySMLBaa2HsihhjDFJzWb5GVry-XTUbxqvicYSMIgrIFCy6vUKQQP6zKtEUALD2gWbBkMKpqo6Gi5wMbrQBt38UY_1mg2VW8g0O8OqfPIo4nksKbymaoy1kqT6XNUknkAdWDpCwR1xUBJE_SigbS4wMDpsB-ez0goDOFZ3BFz9Bm8Ztx9FqUmSPpJqRO8-WvRDe8squW3gFcDnIgCWYrLoA-V7X1UkN9ZdIYEljsO37EaG6-dBO_QDHaISKkmMkNbjghSPPAAV38qOOhFKsW0lx1397cBM0n3JX84CouAXJ0w4zECpWQhRgyZos1f52mpTQComtXdsKSVKWMWBpMRuveUXNx0tCmBLNSX91J55EEnIi2Zp-sLAq-GO3-H7CDyUO57eaAs1Iwi7fob5EWOlH5bg2v15-9CypvOyWCQq_ZcoZ3xd5snYeAPQXWsVch4euO-3aKid9yLmt5ulxqd5riksgSBatoLVdVELmwaLimPvYhasYUsg0KtCuYs-Hyptm6fqmYuknqBgWkyUFEnGu_BJCHSd4s5v32P8AVXyeQXLxTqW81a0thXJzUbKXslNh8=s182-no" width=120 height=120></a>\
			<a href="https://lmtsd.nutrislice.com/menu/murray-avenue/lunch/" target="_blank"><img src="https://asdb.az.gov/asb/wp-content/uploads/sites/5/2016/05/lunch-menu.png" width=121 height=120></a>\
			<a href="https://www.lmtsd.org/Page/3730" target="_blank"><img src="https://lh4.ggpht.com/fOfS6RZh2fHBrmoFrMtXn1LoJCq451Lu-xedAk3rUZlgnW5FDxRNbTHNOIOAf7pVag=w300" width=120 height=120></a>\
			</div>\
			</div>\
			<div class="linkmenu">\
			<h4 id="library">Libraries:</h4>\
			<p><a href="#logout">Go to top</a></p>\
			<div class="links">\
			<a href="http://mclinc.polarislibrary.com/polaris/default.aspx" target="_blank"><img src="http://mclinc.polarislibrary.com/images/header_logo_modern.gif" style="margin-top: 40px;"></a>\
			<a href="https://montcolibs.overdrive.com/mclinc-huntingdonvalley/content" target="_blank"><img src="https://global.rakuten.com/corp/about/assets/img/company/logo_overdrive_02.svg" width=318 height=83 style="margin-top: 40px;"></a>\
			<a href="http://library.lmtsd.org/cataloging/servlet/presentadvancedsearchredirectorform.do?l2m=Library%20Search&tm=TopLevelCatalog" target="_blank"><img src="http://nccscurriculum.org/wp-content/uploads/2017/01/CG61018LOGO.jpg" width=350 height=100.5 style="margin-top: 40px;"></a>\
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
