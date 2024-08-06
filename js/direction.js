// Set the direction based on localStorage
document.documentElement.dir = JSON.parse(localStorage.getItem("dir")) || "ltr";
// Variables
let ar1 = document.querySelector("#ar.one");
let en1 = document.querySelector("#en.one");
let ar2 = document.querySelector("#ar.two");
let en2 = document.querySelector("#en.two");
// Events
ar1.addEventListener("click", toAr);
en1.addEventListener("click", toEn);
ar2.addEventListener("click", toAr);
en2.addEventListener("click", toEn);
// Functions
function toAr() {
  localStorage.setItem("dir", JSON.stringify("rtl"));
  document.documentElement.dir = "rtl";
}

function toEn() {
  localStorage.setItem("dir", JSON.stringify("ltr"));
  document.documentElement.dir = "ltr";

}  
