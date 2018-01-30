    function loadPage(href)
    {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", href, false);
        xmlhttp.send();
        return xmlhttp.responseText;
    }

    function btnreg(){
    	$("#content").html(loadPage('register.html'));
    }

    function btnlog(){
    	$("#content").html(loadPage('login.html'));
    }

     function btnhome(){
    	$("#content").html(loadPage('menu.html'));
    }

     function btndafuser(){
    	$("#content").html(loadPage('dafuser.html'));
    }

     function addData(){
    	$("#content").html(loadPage('tambahdata.html'));
    }

     function updateData(){
    	$("#content").html(loadPage('updatedata.html'));
    }
    
     function daftarUser(){
    	$("#content").html(loadPage('daftaruser.html'));
    }

     function addAkun(){
    	$("#content").html(loadPage('daftarakun.html'));
    }

     function tambahAkun(){
    	$("#content").html(loadPage('tambahakun.html'));
    }
    function updateAkun(){
    	$("#content").html(loadPage('updateakun.html'));
    }


	firebase.auth().onAuthStateChanged(function(user) {
	  if (user) {
	    // User is signed in.
	    // document.getElementById("user_div").style.display = "block";
	    // document.getElementById("login_div").style.display = "none";
	    // $("html").empty();
	    //next page
	    $("#content").html(loadPage('menu.html'));

	    // var user = firebase.auth().currentUser;

	    // if (user != null) {
	    // 	var email id = user.email;

	    // 	document.getElementById("user_para").innerHTML = "Welcome User : " + userEmail;
	    // };

	  } else {
	    // No user is signed in.
	    //     document.getElementById("user_div").style.display = "none";
	    // document.getElementById("login_div").style.display = "block";
	    $("#content").html(loadPage('login.html'));
	  }
	});

	function login(){

		var userEmail = document.getElementById("email_field").value;
		var userPass = document.getElementById("password_field").value;

		
		firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  // ...
		 window.alert("Error : " + errorMessage); 

		});
	}

	function logout(){
		firebase.auth().signOut();
	}

		function daftar(){

		var userEmail = document.getElementById("email_field").value;
		var userPass = document.getElementById("password_field").value;

		
		firebase.auth().createUserWithEmailAndPassword(userEmail, userPass ).catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  // ...
		  window.alert("Error : " + errorMessage);
		});

		/*//add
		const fb = firebase.database().ref()
	  	//get field values
	  	user_name = document.getElementById('email_field').value
	  	user_email = document.getElementById('password_field').value
	  	data = {user_name,user_email}
	  	//update database
	  	fb.child('id_user/user_email/').update(data);*/

	
	}

	