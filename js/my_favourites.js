var choosen_items = JSON.parse(localStorage.getItem("choosen_items"));
var products_section = document.querySelector(".products .container");
let badgelength = JSON.parse(localStorage.getItem("badgelength"));
var badge = document.getElementById("number");
let unrepeated_array = JSON.parse(localStorage.getItem("unrepeated_array"));
let draw_products;
let choosen_favourites = JSON.parse(localStorage.getItem("choosen_favourites"));

(draw_products = function draw(items = choosen_favourites) {
  if (!choosen_favourites||choosen_favourites.length == 0) {
    products_section.innerHTML = `<p class="not_found">Not Found</p>`;
  } else {
    items = JSON.parse(localStorage.getItem("choosen_favourites"));

    let products_ui = items.map((item) => {
      return ` 
    <div class="products-item">
    <div class="products-item-image">
    <img
    src="${item.img_url}"
    alt="product_img"
    />
    </div>
    <div class="products-item-desc">
    <a href="product_desc.html">${item.title}</a>
    <p>${item.desc}</</p>
    <span>size : ${item.size}</span>
    <span>quantity:${item.qty}</span>
    </div>
    <div class="products-item-actions">
    <button onclick="remove_item(${item.id})">remove from favourite</button>
    </div>
    </div> `;
    });
    products_section.innerHTML = products_ui.join("");
  }
})();

function remove_item(id) {
  let choosen_favourites = JSON.parse(
    localStorage.getItem("choosen_favourites")
  );
  let rest_items_draw = choosen_favourites.filter((item) => item.id !== id);
  delete products[id - 1].liked;
  localStorage.setItem("products", JSON.stringify(products));
  localStorage.setItem("choosen_favourites", JSON.stringify(rest_items_draw));
  draw_products(rest_items_draw);
  window.location="my_favourites.html"
}
