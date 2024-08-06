var usrer_info = document.querySelector(".user-info");
var nameplace = document.getElementById("nameplace");
var log_out = document.getElementById("log_out");
var products_section = document.querySelector(".products .container div");
var search_input = document.querySelector(".products .container > input");
var usrer_info_shopcart = document.querySelector(".user-info li i");
var menu_container = document.getElementById("menu_container");
let filter_select = document.querySelector(".filter-select");

(appear = function appear_badge_onrefresh() {
  if (localStorage.getItem("badgelength")) {
    let badge = document.getElementById("number");
    badge.style.display = "block";
    var badgelength = JSON.parse(localStorage.getItem("badgelength"));
    badge.innerHTML = badgelength;
    badge.style.display = "block";
  }
})();
let draw_products;
(draw_products = function (products = []) {
  let products_ui = products.map((item) => {
    return ` 
        <div class="products-item" style="${
          item.isMe == "Y" ? "border:1px solid darkgreen" : ""
        }">
        <div class="products-item-image">
        <img
        src="${item.img_url}"
        alt="product_img"
        />
        </div>
        <div class="products-item-desc">
        <a href="product_desc.html" onclick="id_of_product_desc(${item.id})">${
      item.title
    }</a>
          <p>${item.desc}</</p>
          <span>size : ${item.size}</span>
          <span>${item.qty}</span>
          ${
            item.isMe == "Y"
              ? "<button id=" +
                "button-my-product" +
                " onclick=goToEdit(" +
                item.id +
                ")>edit Product</button>"
              : ""
          }
        </div>
        <div class="products-item-actions">
          <button onclick="my_menu_bag(${item.id})">add to cart</button>
          <i class="${
            item.liked ? "fa fa-heart " : "fa fa-heart-o"
          } " style="color:${item.liked ? "red" : ""}" onclick=addToFavourite(${
      item.id
    })></i>
          </div>
          </div> `;
  });
  products_section.innerHTML = products_ui.join("");
})(products);
let products_viewed;
products_viewed = localStorage.getItem("products_viewed")
  ? JSON.parse(localStorage.getItem("products_viewed"))
  : [];
function id_of_product_desc(id) {
  localStorage.setItem("id_of_product_desc", JSON.stringify(id));
  let current_view = products.find((i) => i.id === id);
  products_viewed = [...products_viewed, current_view];
  localStorage.setItem("products_viewed",JSON.stringify(products_viewed))
}
search_input.addEventListener("keyup", function (e) {
  search(e.target.value, products);
  if (e.target.value === "") {
    draw_products(JSON.parse(localStorage.getItem("products")));
  }
});
function search(title, myArray) {
  var myNewArrray = myArray.filter(
    (item) => item.title.toLowerCase().indexOf(title.toLowerCase()) != -1
  );
  draw_products(myNewArrray);
}

let choosen_favourites = localStorage.getItem("choosen_favourites")
  ? JSON.parse(localStorage.getItem("choosen_favourites"))
  : [];
function addToFavourite(id) {
  if (localStorage.getItem("name")) {
    let choosen_favourite = products.find((item) => item.id === id);
    choosen_favourite.liked = true;
    choosen_favourites = [...choosen_favourites, choosen_favourite];
    let unique_arr = checking_repeat(choosen_favourites, "id");
    localStorage.setItem("choosen_favourites", JSON.stringify(unique_arr));
    products.filter((item) => {
      if (item.id === choosen_favourite.id) {
        item.liked = true;
      }
    });
    localStorage.setItem("products", JSON.stringify(products));
    draw_products(products);
  } else {
    window.location = "sign_in.html";
  }
}
filter_select.addEventListener("change", filter);
function filter(e) {
  let filtered_products;
  e.target.value == "All"
    ? (filtered_products = products)
    : (filtered_products = products.filter(
        (item) => item.size === e.target.value
      ));
  draw_products(filtered_products);
}

function goToEdit(id) {
  window.location = "edit.html";
  localStorage.setItem("filtered_id", JSON.stringify(id));
}
