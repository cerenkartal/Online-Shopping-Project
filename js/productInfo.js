$(document).ready(function () {
  const item = localStorage.getItem("productInfo");
  const itemjson = JSON.parse(item);
  console.log(itemjson);
  //hangi adrese gideceğini bulmak için:
  $(".item-img").attr("src", itemjson.images[0].normal);
  $(".item-title").html(itemjson.productName);
  $(".item-desc").html(itemjson.description);
  $(".item-price").text(itemjson.price + " ₺");

  
});

  
// const cardsLink = "https://www.jsonbulut.com/json/product.php";
// const cardsObjLink = {
//   ref: "51152bdc1f6fcae3e24bf21c819b02f6",
//   start: "0"
// }

// $.ajax({
//   type: "get",
//   url: cardsLink,
//   data: cardsObjLink,
//   dataType: "json",
//   success: function (res) {
//     newCards(res);
//     console.log(`res`, res)
//   }
// });


