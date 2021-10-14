const urlParams = new URLSearchParams(window.location.search);
const categoryId = urlParams.get("categoryId");


$(document).ready(function () {
  
const cardsLink = "https://www.jsonbulut.com/json/product.php";
const cardsObjLink = {
  ref: "51152bdc1f6fcae3e24bf21c819b02f6",
  start: "0",
  categoryId: categoryId,
  order: "desc"
}

$.ajax({
  type: "get",
  url: cardsLink,
  data: cardsObjLink,
  dataType: "json",
  success: function (res) {
    const item = res.Products[0].bilgiler
    items=item
    let html = `<div class="mt-4 productsBaslik"> Tüm Ürünler </div>`
    for (let i = 0; i < item.length; i++) {
      console.log(item[i]);
      html += `
      <div class="col-xl-3 col-lg-3 col-md-4 col-6  card urunKart urunKartHaber">
      <img src="${item[i].images[0].normal}" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">${item[i].productName}</h5>
        <p class="card-text">${item[i].price} ₺</p>
        <a onclick="fncItem(${i})" href="productInfo.html" class="btn btn-dark">İncele</a>
        
      </div>
    </div>`;
    }
    $('#rowUrunTumKartlar').append(html);
  }
});
});
function fncItem(i) {
  let itempage = JSON.stringify(items[i]);
  localStorage.removeItem("productInfo");
  sessionStorage.removeItem("productInfo");
  localStorage.setItem("productInfo", itempage);
  sessionStorage.setItem("productInfo", itempage);
  window.location.href = "productInfo.html";
}


  
// popular 6 products

//ürünler
const cardsLink = "https://www.jsonbulut.com/json/product.php";
const cardsObjLink = {
  ref: "51152bdc1f6fcae3e24bf21c819b02f6",
  cache: false,
  start: "0",
  count: "6",
  order: "desc"
}

$.ajax({
  type: "get",
  url: cardsLink,
  data: cardsObjLink,
  dataType: "json",
  success: function (res) {
    newCards(res);
    console.log(`res`, res)
  }
});


function newCards(res) {
  let html = `<hr/><div class= "mt-5 col-12 indexUrunBaslik"> En Çok Satanlarda Bu Ay </div><hr/>`
  for (let i = 0; i < res.Products.length; i++) {
    const item = res.Products[i];
    for (let j = 0; j < item.bilgiler.length; j++) {
      const itemkart = item.bilgiler[j];


      console.log(`item`, item)
      html += `
    <div class="mb-4 col-xl-2 col-lg-2 col-md-4 col-6 card urunKart urunKartIndex ">
    
      <img src="`+ itemkart.images[i].normal + `" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">`+ itemkart.productName.slice(0, 8) + `</h5>
        <p class="card-text">`+ itemkart.price + " ₺" + `</p>
        <a onclick="fncItem(${j})" href="#" class="btn btn-dark">İncele</a>
      </div>
    </div>
    `
    }
  }
  $('#rowUrunKartlar').html(html);
}





        