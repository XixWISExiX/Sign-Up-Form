function application() {
  let btn = document.getElementsByClassName("account-btn");
  let form = document.getElementsByClassName("info");
  document.addEventListener("change", function () {
    if (formApp.passwordFlag) {
      submitPressed();
    }
  });
  document.addEventListener("input", function () {
    if (formApp.passwordFlag) {
      submitPressed();
    }
  });
  btn[0].addEventListener("click", function (event) {
    formApp.passwordFlag = true;
    submitPressed();
    totalValidityCheck();
  });
}

let formApp = (function () {
  let passwordFlag = false;
  return { passwordFlag };
})();

function submitPressed() {
  firstNameCheck();
  lastNameCheck();
  emailCheck();
  phoneCheck();
  passwordEnteredIncorrectly();
  equalPasswordFields();
}

function totalValidityCheck() {
  let firstName = document.getElementById("first-name");
  validityCheck(firstName);
  let lastName = document.getElementById("last-name");
  validityCheck(lastName);
  let email = document.getElementById("email");
  validityCheck(email);
  let phone = document.getElementById("phone-number");
  validityCheck(phone);
}

function passwordEnteredIncorrectly() {
  let password = document.getElementById("password");
  let msg = document.getElementsByClassName("password-text");
  if (!password.validity.valid) {
    event.preventDefault();
    msg[0].innerText =
      "* Password must be at least 10 characters long, and include at least one number, one letter, and one special symbol.";
    password.style.border = "2px solid red";
  } else {
    password.style.border = "1px solid #e5e7eb";
    msg[0].innerText = "";
  }
}

function equalPasswordFields() {
  let password = document.getElementById("password");
  let confirmPassword = document.getElementById("confirm_password");
  let msg = document.getElementsByClassName("confirm_password-text");
  if (
    password.value !== confirmPassword.value ||
    confirmPassword.value === ""
  ) {
    event.preventDefault(); // prevent form submission
    msg[0].innerText = "* Passwords do not match.";
    confirmPassword.style.border = "2px solid red";
  } else {
    msg[0].innerText = "";
    confirmPassword.style.border = "1px solid #e5e7eb";
  }
}

function firstNameCheck() {
  let firstName = document.getElementById("first-name");
  flagChecker(firstName);
}

function lastNameCheck() {
  let lastName = document.getElementById("last-name");
  flagChecker(lastName);
}

function emailCheck() {
  let email = document.getElementById("email");
  flagChecker(email);
}

function phoneCheck() {
  let phoneNumber = document.getElementById("phone-number");
  flagChecker(phoneNumber);
}

function flagChecker(element) {
  if (document.activeElement === element) {
    validityCheck(element);
  } else {
    if (!element.validity.valid) {
      element.style.border = "2px solid red";
      element.style.outline = "none";
    } else {
      element.style.border = "1px solid #e5e7eb";
      element.style.outline = "none";
    }
  }
}

function validityCheck(element) {
  if (!element.validity.valid) {
    element.style.border = "2px solid red";
    element.style.outline = "none";
  } else {
    element.style.border = "1px solid blue";
    element.style.outline = "none";
  }
}

document.addEventListener("DOMContentLoaded", application);
