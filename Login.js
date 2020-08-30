var login = function(e){
	e.preventDefault();
	var user = $("#user").val();
	var pass = $("#pass").val();
	if(user == "athomas1"){
		if(pass == "thomaslocker"){
			localStorage.setItem("user", "shwin17MAGD");
			window.location.href="/OneLocker/";
		} else{
			alert("You have entered an incorrect username/password! Please retry!");
		};
	} else if(user == "example1"){
		if(pass == "demo"){
			localStorage.setItem("user", "demo");
			window.location.href="/OneLocker/";
		} else{
			alert("You have entered an incorrect username/password! Please retry!");
		};
	} else if(user == "lmtsd"){
		if(pass == "public"){
			localStorage.setItem("user", "lmtsd");
			window.location.href="/OneLocker/";
		} else{
			alert("You have entered an incorrect username/password! Please retry!");
		};
	} else{
		alert("You have entered an incorrect username/password! Please retry!");
	};
	if(localStorage.getItem("user") == "shwin17MAGD" || localStorage.getItem("user") == "demo" || localStorage.getItem("user") == "lmtsd"){
		window.location.replace("/OneLocker/page1");
	}
};
