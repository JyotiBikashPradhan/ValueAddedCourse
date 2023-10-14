function validate(e) {
  const name = document.getElementById("name").value;
  const mobile = document.getElementById("mobile").value;
  const Email = document.getElementById("Email").value;
  const password = document.getElementById("password").value;
  const password2 = document.getElementById("password2").value;

  console.log(name, mobile, Email, password, password2);

  const name_error = document.getElementById("name_error");
  const mobile_error = document.getElementById("mobile_error");
  const Email_error = document.getElementById("Email_error");
  const password_error = document.getElementById("password_error");
  const password2_error = document.getElementById("password2_error");

  let error = false;
  if (name === "") {
    name_error.innerHTML = "name is required";
    error = true;
  } else {
    name_error.innerHTML = "";
  }

  if (mobile === "") {
    mobile_error.innerHTML = "phone number is required";
    error = true;
  } else if (isNaN(mobile) || mobile.length != 10) {
    mobile_error.innerHTML = "please enter a 10 digit number";
    error = true;
  }else{
    mobile_error.innerHTML="";
  }

  let atpos = Email.indexOf("@");
  let dotpos = Email.lastIndexOf(".");
  if (Email === "") {
    Email_error.innerHTML = "Email is required";
    error = true;
  } else if (atpos < 4 || dotpos - atpos < 4 || dotpos >
    
    Email.length - 3) {
    Email_error.innerHTML = "Email is required";
    error = true;
  } else {
    Email_error.innerHTML = "";
  }

  if (password === "") {
    password_error.innerHTML = "password is required";
    error = true;
  } else if (password.length < 6 || password.length > 16) {
    password_error.innerHTML = "password must be 6-15 character long";
    error = true;
  } 
  else if(!password.match(/[a-z]/)){
    password_error.innerHTML="password must have one lowwer character"
    error=true

  }
  else if(!password.match(/[A-Z]/)){
    password_error.innerHTML="password must have one upper character"
    error=true

  }
  else if(!password.match(/[0-9]/)){
    password_error.innerHTML="password must have one number"
    error=true

  }
  else if(!password.match(/[!@#$%^]/)){
    password_error.innerHTML="password must have special charater"
    error=true

  }
  else {
    password_error.innerHTML = "";
  }

  if (password2 === "") {
    password2_error.innerHTML = "confirm password is required";
    error = true;
  } else if (password2 != password) {
    password2_error.innerHTML = "password &confirm password must be same";
    error = true;
  } else {
    password2_error.innerHTML = "";
  }

  if (error) {
    e.preventDefault();
  }
}
