var choosen_items = JSON.parse(localStorage.getItem("choosen_items"));
var products_section = document.querySelector(".products .container");
let badgelength = JSON.parse(localStorage.getItem("badgelength"));
var badge = document.getElementById("number");
let unrepeated_array = JSON.parse(localStorage.getItem("unrepeated_array"));
let no_product = document.querySelector(".no_product");
let draw_products;

(draw_products = function draw(items = unrepeated_array) {
  if (unrepeated_array == "" || unrepeated_array == null) {
    no_product.innerHTML = `<p class="not_found">Not Found</p>`;
  } else {
    unrepeated_array = JSON.parse(localStorage.getItem("unrepeated_array"));
    checking_repeat(items, "id");
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
    <button onclick="remove_item(${item.id})">remove from cart</button>
    </div>
    </div> `;
    });
    products_section.innerHTML = products_ui.join("");
  }
})();

function remove_item(id) {
  var unrepeated_array_filtered;
  unrepeated_array_filtered = unrepeated_array.filter((item) => item.id !== id);
  var i;
  i = 0;
  //i=qty>>>undeleted_items
  unrepeated_array_filtered.find((item) => item);
  unrepeated_array_filtered.map((item) => (i += item.qty));
  //update badge
  badge.innerHTML = i;
  //update choosen_items
  let choosen_items_filtered = choosen_items
    .map((item) => item.id !== id && item)
    .filter((item) => item);
  localStorage.setItem("choosen_items", JSON.stringify(choosen_items_filtered));
  //update menu_container_inner
  menu_container.innerHTML = "";
  unrepeated_array_filtered.forEach((item) =>
    item
      ? (menu_container.innerHTML += `<p>${item.title} <span>${item.qty}</span></p>`)
      : (menu_container.innerHTML = "Not Found")
  );
  localStorage.setItem(
    "unrepeated_array",
    JSON.stringify(unrepeated_array_filtered)
  );
  localStorage.setItem(
    "menu_container",
    JSON.stringify(menu_container.innerHTML)
  );
  localStorage.setItem("badgelength", JSON.stringify(i));
  draw_products(unrepeated_array_filtered);
  window.location = "my_purchases.html";
}
