var view = document.querySelector(".products .container");
var no_view = document.querySelector(".no_product");
let products_viewed;
let draw_products;

(draw_products = function (products_viewed = []) {
  if (localStorage.getItem("products_viewed")&&JSON.parse(localStorage.getItem("products_viewed")).length !== 0) {
    products_viewed = JSON.parse(localStorage.getItem("products_viewed"));
    let products_ui = products_viewed.map((item) => {
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
        <button onclick="remove_from_views(${
          item.id
        })">remove from views</button>
        
        </div>
        </div> `;
    });
    view.innerHTML = products_ui.join("");
  } else {
    view.innerHTML=""
    no_view.innerHTML = `<p class="not_found">Not Found</p>`;
  }
})(products_viewed);

function remove_from_views(id) {
  products_viewed = JSON.parse(localStorage.getItem("products_viewed"));
  let filtered_products = products_viewed.filter((i) => i.id !== id);
  localStorage.setItem("products_viewed", JSON.stringify(filtered_products));
  draw_products(filtered_products);
}
