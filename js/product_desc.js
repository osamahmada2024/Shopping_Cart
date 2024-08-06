var product_desc_container = document.querySelector(".product-desc .container");
var id_of_product_desc = JSON.parse(localStorage.getItem("id_of_product_desc"));
(function product_desc() {
  let product_desc_item = products.find(
    (item) => {return item.id == id_of_product_desc}
  );
  draw_products(product_desc_item);
})();

function draw_products(product_desc_item) {
  product_desc_container.innerHTML=
 ` 
<div class="product-item">
<div class="product-item-image">
<img
src="${product_desc_item.img_url}"
alt="product_img"
/>
</div>
<div class="product-item-desc">
  <a href="product_desc.html">${product_desc_item.title}</a>
  <p>${product_desc_item.desc}</p>
  <span>size : ${product_desc_item.size}</span><br>
  <span>Quantity : ${product_desc_item.qty}</span>
</div>
</div> `;
}

