//variables
let image = document.getElementById("product-image");
let names = document.getElementById("product-name");
let desc = document.getElementById("product-desc");
let size = document.getElementById("product-size");
let submit = document.getElementById("product-submit");
//events
size.addEventListener("change", getsize);
submit.addEventListener("click", submitfunction);
image.addEventListener("change", getImage);
//functions
function getsize(e) {
  sizevalue = e.target.value;
}
function submitfunction(e) {
  e.preventDefault();
  let products_updated =
    JSON.parse(localStorage.getItem("products_updated")) || products;
  let namevalue = names.value;
  let descvalue = desc.value;
  if (namevalue && descvalue) {
    let obj = {
      id: products_updated.length + 1,
      title: namevalue,
      size: sizevalue,
      qty: 1,
      desc: descvalue,
      img_url: preview,
      isMe:"Y",
    };
    let new_products_updated = [...products_updated, obj];
    localStorage.setItem(
      "products",
      JSON.stringify(new_products_updated)
    );
    names.value = "";
    desc.value = "";
    size.value = "";
    image.value = "";
    setTimeout(() => {
      window.location = "index.html";
    }, 500);
  } else {
    window.alert("you should complete data...");
  }
}
let preview;
function getImage() {
  let file = this.files[0];
  getImageBase64(file);
  let type = ["image/jpeg", "image/png"];
  if (type.indexOf(file.type) == -1) {
    window.alert("Type Not Supported");
  }
  if (file.size > 2 * 1024 * 1024) {
    window.alert("Image Not Exced 2MG");
  }
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
