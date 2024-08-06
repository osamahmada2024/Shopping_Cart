var products_section = document.querySelector(".products .container");
let no_product=document.querySelector(".no_product")
  let draw_products;
  (draw_products = function (products = []) {
    let my_products=products.filter((i)=>i.isMe=="Y")
    if(my_products.length!==0){let products_ui = my_products.map((item) => {
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
              +"<button id=" +
                "button-my-product" +
                " onclick=deleteProduct(" +
                item.id +
                ")>delete Product</button>"

              : ""
          }
        </div>
          </div> `;}
  );
  products_section.innerHTML = products_ui.join("");}
  else{
    products_section.innerHTML =""
    no_product.innerHTML = `<p class="not_found">Not Found</p>`;
  }
})(products);

c
function goToEdit(id) {
  window.location = "edit.html";
  localStorage.setItem("filtered_id", JSON.stringify(id));
}