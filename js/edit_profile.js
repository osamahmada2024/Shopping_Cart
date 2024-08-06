// Get From LocalStorage
let name_container = JSON.parse(localStorage.getItem("name"));
let email_container = JSON.parse(localStorage.getItem("email"));

// variables
let user = document.getElementById("profile-name");
let email = document.getElementById("profile-email");
let image_user = document.getElementById("profile-image");
let form = document.querySelector(".profile_form");

//setting inputs with its origin values
user.value = name_container;
email.value = email_container;
//events
image_user.addEventListener("change", getImage);
form.addEventListener("submit", submit_fun);
let preview;
function getImage() {
  let file = this.files[0];
  getImageBase64(file);
  let type = ["image/jpeg", "image/png"];
  if (type.indexOf(file.type) == -1) {
    window.alert("Type Not Supported");
  }
  if (file.size > 2 * 1024 * 1024) {
    window.alert("image shouldnot exceed 2MG");
  }
  localStorage.setItem("userImage_url", JSON.stringify(preview));
}

function getImageBase64(file) {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    preview = reader.result;
  };
  reader.onerror = function () {
    window.alert("Error!!!");
  };
}
function submit_fun(e) {
  e.preventDefault();
  localStorage.setItem("name", JSON.stringify(user.value));
  localStorage.setItem("email", JSON.stringify(email.value));
  localStorage.setItem("userImage_url", JSON.stringify(preview));
  setTimeout(() => {
    window.location = "protofolio.html";
  }, 1000);
}
