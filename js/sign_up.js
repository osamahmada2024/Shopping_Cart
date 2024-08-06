var user_name = document.querySelector("#name");
var user_email = document.querySelector("#email");
var user_password = document.querySelector("#password");
var sign_upBtn = document.querySelector("#sign_up");
sign_upBtn.addEventListener("click", register);
function register(e) {
  e.preventDefault();
  if (
    user_name.value === "" ||
    user_email.value === "" ||
    user_password.value === ""
  ) {
    window.alert("you should fill form");
  } else {
    localStorage.setItem("name", JSON.stringify(user_name.value));
    localStorage.setItem("email", JSON.stringify(user_email.value));
    localStorage.setItem("password", JSON.stringify(user_password.value));
    setTimeout(() => {
      window.location = "sign_in.html";
    }, 1000);
  }
}
