var productsDM = [
  {
    id: 1,
    title: "Laptop 2021",
    size: "Large",
    img_url:
      "images/Best-laptops-in-2021-7-things-to-consider-when-buying-a-laptop.jpg",
    qty: 1,
    desc: "lorem ipsum dolor ",
    isMe: "N",
  },
  {
    id: 2,
    title: "Macbook Pro",
    size: "medium",
    img_url: "images/download.jpeg",
    qty: 1,
    desc: "lorem ipsum dolor ",
    isMe: "N",
  },
  {
    id: 3,
    title: "Google Smart Glass",
    size: "small",
    img_url: "images/hq720.jpg",
    qty: 1,
    desc: "lorem ipsum dolor ",
    isMe: "N",
  },
  {
    id: 4,
    title: "Iphone19 Trailer",
    size: "medium",
    img_url: "images/iphone19 trailer.jpg",
    qty: 1,
    desc: "lorem ipsum dolor ",
    isMe: "N",
  },
  {
    id: 5,
    title: "Iphone Bike",
    size: "medium",
    img_url: "images/maxresdefault (1).jpg",
    qty: 1,
    desc: "lorem ipsum dolor ",
    isMe: "N",
  },
  {
    id: 6,
    title: "Iphone Tv",
    size: "Large",
    img_url: "images/maxresdefault.jpg",
    qty: 1,
    desc: "lorem ipsum dolor ",
  },
  {
    id: 7,
    title: "Mpow Headphone",
    size: "medium",
    img_url:
      "images/Mpow-Kids-Headphones-Microphone-Foldable-85-94dB-Safe-Volume-Stereo-Adjustable-Ear-Kids-Girls-Boys-Children-Share-Function-Wired-School-Tablet_4272d222-af66-48b2-9c91-f6df41d7e657.653881036ddc688395cbf4ca0f474d5e.gif",
    qty: 1,
    desc: "lorem ipsum dolor ",
    isMe: "N",
  },
  {
    id: 8,
    title: "Nike Smart Shoes",
    size: "medium",
    img_url: "images/Nike-Adapt-BB.jpg",
    qty: 1,
    desc: "lorem ipsum dolor ",
    isMe: "N",
  },
  {
    id: 9,
    title: "Iphone smart watch",
    size: "medium",
    img_url: "images/unnamed-14 (1).jpg",
    qty: 1,
    desc: "lorem ipsum dolor ",
    isMe: "N",
  },
];

let products = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : productsDM;
