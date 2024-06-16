emailErrorText = "Email not Valid";
phoneNumberErrorText = "Phone Number not valid";
passwordErrorText = "Password not valid";

function emailValidator() {
  var email = document.getElementById("email").value;
  console.log(email);
  if (
    !email.includes(" ") &&
    (email.endsWith("@gmail.com") || email.endsWith("@hotmail.com"))
  ) {
    console.log("valid");
    document.getElementById("email-error").innerHTML = "";
    return true;
  } else {
    console.log("in-valid");
    document.getElementById("email-error").innerText = emailErrorText;
    return false;
  }
}

function phValidator() {
  var ph = document.getElementById("phno").value;
  console.log(ph);
  if (
    (ph.startsWith("9841") || ph.startsWith("9851") || ph.startsWith("984")) &&
    !ph.includes(" ") &&
    ph.length == 10
  ) {
    console.log("valid");
    document.getElementById("ph-error").innerHTML = "";
    return true;
  } else {
    console.log("in-valid");
    document.getElementById("ph-error").innerText = phoneNumberErrorText;
    return false;
  }
}

function passwordValidator() {
  var pw = document.getElementById("pw").value;
  var hasUpperCase = false;
  var hasLowerCase = false;
  var hasNumber = false;
  var hasSepcialChar = false;
  var isLengthValid = pw.length >= 6;
  for (let i = 0; i < pw.length; i++) {
    let char = pw.charAt(i);

    // Check for uppercase letters
    if (char >= "A" && char <= "Z") {
      hasUpperCase = true;
    }
    // Check for lowercase letters
    else if (char >= "a" && char <= "z") {
      hasLowerCase = true;
    }
    // Check for numbers
    else if (char >= "0" && char <= "9") {
      hasNumber = true;
    }
    // Check for special characters
    else if ("!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?".indexOf(char) !== -1) {
      hasSepcialChar = true;
    }
  }

  if (
    hasLowerCase &&
    hasUpperCase &&
    hasNumber &&
    hasSepcialChar &&
    isLengthValid
  ) {
    console.log("valid");
    document.getElementById("pw-error").innerHTML = "";
    return true;
  } else {
    console.log("In valid");
    document.getElementById("pw-error").innerHTML = passwordErrorText;
    return false;
  }
}

function checkforSubmit() {
  var emailvalid = emailValidator();
  var passwordvalid = passwordValidator();
  var phonevalid = phValidator();
  if (emailvalid && passwordvalid && phonevalid) {
    document.getElementById("Submit").disabled = false;
  } else {
    document.getElementById("Submit").disabled = true;
  }
}
