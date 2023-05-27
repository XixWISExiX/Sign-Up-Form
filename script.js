function application() {
  let btn = document.getElementsByClassName("account-btn");
  btn[0].addEventListener("click", function (event) {
    submitPressed();
  });
}

function submitPressed() {
  passwordEnteredIncorrectly();
  equalPasswordFields();
}

function passwordEnteredIncorrectly() {
  let password = document.getElementById("password");
  if (password.value === "") return;
  if (!password.validity.valid) {
    event.preventDefault();
    let msg = document.getElementsByClassName("password-text");
    msg[0].innerText =
      "* Password must be at least 10 characters long, and include at least one number, one letter, and one special symbol.";
  }
}

function equalPasswordFields() {
  let password = document.getElementById("password");
  let confirmPassword = document.getElementById("confirm_password");
  if (confirmPassword.value === "") return;
  if (password.value !== confirmPassword.value) {
    event.preventDefault(); // prevent form submission
    let msg = document.getElementsByClassName("confirm_password-text");
    msg[0].innerText = "* Passwords do not match.";
  }
}

document.addEventListener("DOMContentLoaded", application);
