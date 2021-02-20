
function validateForm() {
	
  const firstname = document.getElementById('fname')
  var lastname = document.forms["myform"]["lname"];
 var email = document.forms["myform"]["email"];
 
 console.log(firstname)
  if (firstname.value == "") {
    alert("FirstName must be filled out");
    return false;
  }
  
  if (lastname.value == "") {
    alert("LastName must be filled out");
    return false;
  }
  
   if (email.value == "") {
    alert("Email must be filled out");
    return false;
  }
}


