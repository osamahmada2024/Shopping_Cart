//variables
let filtered_product = products.find(
    (item) => item.id === JSON.parse(localStorage.getItem("filtered_id"))
);
let image = document.getElementById("product-image");
let names = document.getElementById("product-name");
let desc = document.getElementById("product-desc");
let size = document.getElementById("product-size");
let submit = document.getElementById("product-submit");
let preview;
//return values
names.value = filtered_product.title;
desc.value = filtered_product.desc;
size.value = filtered_product.size;
preview = filtered_product.img_url;
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
  let namevalue = names.value;
  let descvalue = desc.value;
  if (namevalue && descvalue) {
    filtered_product.title = names.value;
    filtered_product.desc = desc.value;
    filtered_product.size = size.value;
    filtered_product.img_url = preview ;
    localStorage.setItem("products", JSON.stringify(products));
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
