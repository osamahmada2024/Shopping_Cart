// Get From LocalStorage
let name_container = JSON.parse(localStorage.getItem("name"));
let email_container = JSON.parse(localStorage.getItem("email"));
// variables
let user = document.querySelector("#user span");
let email = document.querySelector("#email span");
let my_products = products.filter((i) => i.isMe == "Y");
let product_length = document.querySelector("#product_length span");
let editBtn = document.getElementById("edit-profile");

user.innerHTML = name_container;
email.innerHTML = email_container;
product_length.innerHTML = my_products.length;
img_profile.src =
  localStorage.getItem("userImage_url") &&
  localStorage.getItem("userImage_url") !== "undefined"
    ? JSON.parse(localStorage.getItem("userImage_url"))
    : "images/Sample_User_Icon.png";

editBtn.addEventListener("click", profile_edit);
function profile_edit() {
  setTimeout(() => {
    window.location = "edit_profile.html";
  }, 1000);
}
