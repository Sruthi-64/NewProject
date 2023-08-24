function validateForm() { 
  var email = document.forms["myForm"]["email"].value; 
  var Password = document.forms["myForm"]["pword"].value; 
  var gend = document.forms["myForm"]["gend"].value; 
  var birthday = document.forms["myForm"]["birthday"].value; 
  var fname = document.forms["myForm"]["fname"].value; 
  var lname = document.forms["myForm"]["lname"].value; 
  if (email == "" && Password == "" && gend=="" && birthday="" && fname=="" && lname="") { 
    alert("Enter your info"); 
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
  else if (gend == "") { 
    alert("Gender must be selected"); 
    return false;  
  } 
  else if (birthday == "") { 
    alert("DOB must be filled out"); 
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
  else { 
    return true; 
  } 
} 