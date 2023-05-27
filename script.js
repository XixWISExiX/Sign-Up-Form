function application() {
  let btn = document.getElementsByClassName("account-btn");
  document.addEventListener("input", function () {
    if (formApp.passwordFlag) {
      btn[0].addEventListener("click", function (event) {
        submitPressed();
      });
      submitPressed();
    }
  });
  btn[0].addEventListener("click", function (event) {
    formApp.passwordFlag = true;
    submitPressed();
  });
}

let formApp = (function () {
  let passwordFlag = false;
  return { passwordFlag };
})();

function submitPressed() {
  passwordEnteredIncorrectly();
  equalPasswordFields();
}

function passwordEnteredIncorrectly() {
  let password = document.getElementById("password");
  let msg = document.getElementsByClassName("password-text");
  if (password.value === "") return;
  if (!password.validity.valid) {
    event.preventDefault();
    msg[0].innerText =
      "* Password must be at least 10 characters long, and include at least one number, one letter, and one special symbol.";
  } else {
    msg[0].innerText = "";
  }
}

function equalPasswordFields() {
  let password = document.getElementById("password");
  let confirmPassword = document.getElementById("confirm_password");
  let msg = document.getElementsByClassName("confirm_password-text");
  if (confirmPassword.value === "") return;
  if (password.value !== confirmPassword.value) {
    event.preventDefault(); // prevent form submission
    msg[0].innerText = "* Passwords do not match.";
  } else {
    msg[0].innerText = "";
  }
}

document.addEventListener("DOMContentLoaded", application);
