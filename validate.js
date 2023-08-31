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


function calculateAge() 
{
	console.log('Inside calculateAge function');
	var dob =document.getElementById("birthday").value;
	console.log("dob"+dob);
	  //calculate month difference from current date in time  
    var month_diff = Date.now() - dob.getTime();      
    //convert the calculated difference in date format  
    var age_dt = new Date(month_diff);       
    //extract year from date      
    var year = age_dt.getUTCFullYear();      
    //now calculate the age of the user  
    var age = Math.abs(year - 1970);       
    //display the calculated age  	
	console.log("age"+age);
}