//variables
let shop_icon = document.getElementById("shop");
log_out.addEventListener("click", sign_out);
let user_change;

//user change function
var nameplace = document.getElementById("nameplace");
(user_change = function () {
  if (localStorage.getItem("name") !== null) {
    let namestored = JSON.parse(localStorage.getItem("name"))
      .trim()
      .split(" ")[0];
    document.getElementById("links").style.display = "none";
    nameplace.innerHTML = namestored;
  } else {
    let user_info = document.getElementById("user-info");
    document.getElementById("links").style.display = "flex";
    user_info.style.display = "none";
  }
})();

//appear badge function
var appear;
(appear = function appear_badge_onrefresh() {
  if (localStorage.getItem("badgelength")) {
    let badge = document.getElementById("number");
    document.getElementById("number").style.display = "block";
    var badgelength = JSON.parse(localStorage.getItem("badgelength"));
    badge.innerHTML = badgelength;
    document.getElementById("number").style.display = "block";
  }
})();

//my menu bag function
function my_menu_bag(id) {
  if (localStorage.getItem("name")) {
    if (localStorage.getItem("badgelength")) {
      var badgelength = JSON.parse(localStorage.getItem("badgelength"));
      var menu_container = document.getElementById("menu_container");
      menu_container.innerHTML = JSON.parse(
        localStorage.getItem("menu_container")
      );
      var choosen_items = JSON.parse(localStorage.getItem("choosen_items"));
    } else {
      var badgelength = document.querySelectorAll("#menu_container p").length;
      var menu_container = document.getElementById("menu_container");
    }
    let choosen_item = products.find((item) => {
      return item.id === id;
    });
    //number of increment elements of my purchases===>badgelength in localstorage

    var element_number = JSON.parse(localStorage.getItem("badgelength")) + 1;
    // choosen_items will need it in (my_purchases.js)_________________________________________________
    if (localStorage.getItem("badgelength")) {
      choosen_items[--element_number] = choosen_item;
    } else {
      var choosen_items = [];
      choosen_items[0] = choosen_item;
    }
    // increment in qty..
    let unrepeated_array =
      JSON.parse(localStorage.getItem("unrepeated_array")) || [];
    let unrepeated_item = unrepeated_array.find(
      (i) => i.id === choosen_item.id
    );
    if (unrepeated_item) {
      unrepeated_item.qty += 1; //changing of array due to changing of item
    } else {
      unrepeated_array.push(choosen_item);
    }
    localStorage.setItem("unrepeated_array", JSON.stringify(unrepeated_array));
    menu_container.innerHTML = "";
    unrepeated_array.forEach(
      (item) =>
        (menu_container.innerHTML += `<p>${item.title} <span>${item.qty}</span></p>`)
    );
    //_____________________________________________________________________________________________________
    let badge = document.getElementById("number");
    // paragrath increment in menu container didnot put in badgelength
    badge.innerHTML = ++badgelength;
    document.getElementById("number").style.display = "block";
    localStorage.setItem("badgelength", JSON.stringify(badgelength));
    localStorage.setItem(
      "menu_container",
      JSON.stringify(menu_container.innerHTML)
    );
    let unique_arr = checking_repeat(choosen_items, "id");
    localStorage.setItem("choosen_items", JSON.stringify(unique_arr));
  } else {
    window.location = "sign_in.html";
  }
}

//not repeat function
function checking_repeat(arr, id) {
  let unique_arr = arr
    .map((item) => item[id])
    .map((item, index, final) => final.indexOf(item) === index && index)
    .filter((item) => arr[item])
    .map((item) => arr[item]);

  return unique_arr;
}

//click on shop icon function
shop_icon.addEventListener("click", shop_anchor);
function shop_anchor() {
  if (JSON.parse(localStorage.getItem("menu_container")) !== ""&&JSON.parse(localStorage.getItem("menu_container"))!==null) {
    var menu_container = document.getElementById("menu_container");
    let menu = document.getElementById("menu");
    if (menu.style.display == "" || menu.style.display == "none") {
      menu.style.display = "block";
      var badgelength = JSON.parse(localStorage.getItem("badgelength"));
      menu_container.innerHTML = JSON.parse(
        localStorage.getItem("menu_container")
      );
      let badge = document.getElementById("number");
      badge.innerHTML = badgelength;
      document.getElementById("number").style.display = "block";
    } else {
      menu.style.display = "none";
    }
  }
}

//sign out function
function sign_out() {
  localStorage.clear();
  user_change();
  window.location = "index.html";
}
