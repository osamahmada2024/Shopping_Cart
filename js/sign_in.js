var user_name = document.querySelector("#name");
var user_email = document.querySelector("#email");
var user_password = document.querySelector("#password");
var sign_inBtn = document.querySelector("#sign_in");
sign_inBtn.addEventListener("click", login);
function login(e) {
  e.preventDefault();
  if (user_email.value == "" || user_password.value == "") {
    window.alert("you should fill form");
  } else {
    if (localStorage.getItem("email") && localStorage.getItem("password")) {
      var emailstored = JSON.parse(localStorage.getItem("email")).trim();
      var passwordstored = JSON.parse(localStorage.getItem("password"));
      if (
        user_email.value.trim() == emailstored &&
        user_password.value == passwordstored
      ) {
        setTimeout(() => {
          window.location = "index.html";
        }, 1000);
      }
    } else {
      window.alert("Email Or Password Wrong!!");
    }
  }
}
