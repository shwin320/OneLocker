var login_protocol = function(){
	var uname = document.getElementById("u");
	var username = uname.value;
	var reload = function(){
		window.location.reload();
	};
	if (username === "student1"){
		var pword = document.getElementById("p");
		var password = pword.value;
		if (password === "athomas5149"){
			body.innerHTML = '<p>Welcome, Ashwin Thomas.<button onclick="reload();" class="link" id="logout"><a href="" class="link">Logout?</a></button></p>\
			<p style="margin-top: -15px">Questions? Contact <a href="mailto:shwin320@gmail.com" target="_blank" class="link">shwin320@gmail.com</a>.</p>\
			<br><br>\
			<h1>OneLocker</h1>\
			<h2>School, digitalized</h2>\
			<img src="https://images-na.ssl-images-amazon.com/images/I/51ry%2BQ3N9VL._SY355_.jpg">\
			<br><br><br><br><br>\
			<div>\
			<a href="#home">\
				<img id="h" class="hoverer" src="https://lh3.googleusercontent.com/tQhghxl_AgWihWME3QkUHK5gbSs-LzuYcNNTF72U_etYQ7QJAv2wVLsIOpDPNDeyrnOTNvl6U_PHVh-fNL4jERbDFDGDK-iEsukOVFtZpWYCdInCX3VEIG7H38ou71gMfoGHtS5hlY5s8KkXb9Up7Z77YDbV9DNJKpclILodhxdeXuQyoKw2wE0VjTW3_mS0Zdx4HZdDZYgi9ThEcOVRmz63Jxf9h-skCB12KZeCnVjWH_Bh_3czPpAy6T-gwcBWMHykUOtkg2E_COqFbhKrAq7x1b6MZFWUqqpI6kvpETigLVYpcpdJ3qHHGCgitnVJnX6-abe9F0L-ajBtvogGLzfUTmr_xaJcM57EoZ5f5jQ8vRtXQFfa2elb3ujKFgtsyDixEOT_iKThCkpb4c3hyIF3GSVE5rBpPqXaWhSHwVcECMi5LAeO6AjwSjz416gitgpaOlgRek7b0AM0pC7Y_lgaWT53nmsxrqvKBRLxRZXLOg0nq-XZPDktTqGXPHzvGqXyhCGpj-IpyP6UciftVjz00j0RMAihl1-UrYPrW7gud1n7THwjM_HJlRjxDtfc5YdL8c_lJrkZiuQ5QWp85f7j9_oSlzow9ao7gk5vKHJe0Z04v6Cty6H2Ijl9-kZi3c5EhNijZHKqoQg083WMEi0-2l-03MfH4ew=w700-h662-no" width=200 height=189.25>\
			</a>\
			<a href="#school">\
				<img id="s" class="hoverer" src="http://clipartix.com/wp-content/uploads/2017/07/School-clip-art-free-clipart-images.jpg" width=135.875 height=200>\
			</a>\
			</div>\
			<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>\
			<h2 id="home">Home</h2>\
			<p><a href="#logout">Return to Home</a></p>\
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