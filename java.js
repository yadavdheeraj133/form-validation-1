const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

form.addEventListener("submit", function (e) {
  e.preventDefault();

if (validate()) {
  alert('form sumitted successfully');
  form.reset();
}
});


function validate() {
  let isValid = true;
  const usernameval = username.value.trim();
  const emailval = email.value.trim();
  const phonerval = phone.value.trim();
  const passwordval = password.value.trim();
  const cpasswordval = cpassword.value.trim();

  if (usernameval === "") {
    setErrMsg(username, 'username cannot be blank');
    isValid = false;
  } else if (usernameval.length <= 2) {
    setErrMsg(username, 'username minimum 3 character');
    isValid = false;
  } else {
    setSuccessMsg(username);
  }

  if (emailval === "") {
    setErrMsg(email, 'email cannot be blank');
    isValid = false;
  }else if (emailval.length <= 5) {
    setErrMsg(email, 'email is not valid');
    isValid = false;
  }else {
    setSuccessMsg(email);
  }

if (phonerval === "") {
    setErrMsg(phone, 'phone no cannot be blank');
    isValid = false;
  } else if (phonerval.length !== 10) {
    setErrMsg(phone, 'phone no must be 10 digits');
    isValid = false;}
  else {
    setSuccessMsg(phone);
  }

  if (passwordval === "") {
    setErrMsg(password, 'password cannot be blank');
    isValid = false;
  } else if (passwordval.length <= 5) {
    setErrMsg(password, 'password is not valid');
    isValid = false;
  } else {
    setSuccessMsg(password);}

 if (cpasswordval === "") {
    setErrMsg(cpassword, ' confirm password cannot be blank');
    isValid = false;
  } else if (cpasswordval.length <= 5) {
    setErrMsg(cpassword, 'contirm password is not matching');
    isValid = false;
  } else {
    setSuccessMsg(cpassword);}

   return isValid; 
}

function setErrMsg(input, errormsg) {
  let control = input.parentElement;
  let small = control.querySelector("small");
  control.className = "control error";
  small.innerText = errormsg;
}

function setSuccessMsg(input) {
  let control = input.parentElement;
  control.className = "control success";
}

