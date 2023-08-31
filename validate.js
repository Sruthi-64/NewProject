window.onload = function() {
  console.log('Inside Onload function');
  document.getElementById("logindiv").hidden = true;
  document.getElementById("createaccountdiv").hidden = true;
};

function hideLandingShowlogin(){
	document.getElementById("landingdiv").hidden = true;
  document.getElementById("logindiv").hidden = false;
  window.location.hash = "logindiv";
}
function hideLandingShowCreateAccount(){
	document.getElementById("landingdiv").hidden = true;
  document.getElementById("createaccountdiv").hidden = false;
 window.location.hash = "createaccountdiv";
}

function goToHome(){
	document.getElementById("logindiv").hidden = true;
  document.getElementById("createaccountdiv").hidden = true;
  document.getElementById("landingdiv").hidden = false;
  
}


function validateFormYes() { 
  var email = document.forms["myFormLogin"]["email"].value; 
  var Password = document.forms["myFormLogin"]["pword"].value; 
  if (email == "" && Password == "") { 
    alert("Both e-mail and Password must be filled out"); 
    return false; 
  } 
  else if (email == "") { 
    alert("e-mail must be filled out"); 
    return false; 
  } 
  else if (Password == "") { 
    alert("Password must be filled out"); 
    return false; 
  } 
  else { 
    return true; 
  } 
} 

function validateFormNo() { 
  var email = document.forms["myFormCreateAcc"]["email"].value; 
  var Password = document.forms["myFormCreateAcc"]["pword"].value; 
  var gend = document.forms["myFormCreateAcc"]["gend"].value; 
  var birthday = document.forms["myFormCreateAcc"]["birthday"].value; 
  var fname = document.forms["myFormCreateAcc"]["fname"].value; 
  var lname = document.forms["myFormCreateAcc"]["lname"].value; 
  if (email == "" && Password == "" && gend=="" && birthday=="" && fname=="" && lname=="") { 
    alert("Enter your info"); 
    return false; 
  } 
  else if (fname == "") { 
    alert("First name must be filled out"); 
    return false; 
  }
  else if (lname == "") { 
    alert("Last name must be filled out"); 
    return false;
  }  	
  else if (gend == "") { 
    alert("Gender must be selected"); 
    return false;  
  } 
  else if (birthday == "") { 
    alert("DOB must be filled out"); 
    return false;
  }
  else if (email == "") { 
    alert("e-mail must be filled out"); 
    return false; 
  } 
  else if (Password == "") { 
    alert("Password must be filled out"); 
    return false; 
  }
  else { 
    return true; 
  } 
} 

function calculateAge() { 
	var dob = document.getElementById("birthday").value;
	console.log("dob"+dob);
	var dob_date = new Date (dob);
	console.log("dob_date"+dob_date);
    var diff_ms = Date.now() - dob_date.getTime();
    var age_dt = new Date(diff_ms); 
  
    var age =  Math.abs(age_dt.getUTCFullYear() - 1970);
	console.log("age"+age);
	document.getElementById("age").value = age;
}



