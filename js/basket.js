
let userId;
if (JSON.parse(localStorage.getItem("userId")) != null) {
  userId = JSON.parse(localStorage.getItem("userId"));
} else if (JSON.parse(sessionStorage.getItem("userId") != null)) {
  userId = JSON.parse(sessionStorage.getItem("userId"));
}
$(document).ready(function () {
  const url = "https://www.jsonbulut.com/json/orderList.php";

  const data = {
    ref: "51152bdc1f6fcae3e24bf21c819b02f6",
    musterilerID: userId,
  };
  $.ajax({
    type: "get",
    url: url,
    data: data,
    cache: false,
    dataType: "json",
    success: function (response) {
      let html = `<hr/>`;
      let profileHtml = ``;
      let item = response.orderList[0];
      for (let i = 0; i < item.length; i++) {
        console.log(item[i]);
        html += `      <section id="cart"> 
        <article class="product">
          <header>
          
            <a class="remove">

              <img src="`+ item[i].normal + `" alt="">
  
              <h3>Remove product</h3>
            </a>
          </header>
  
          <div class="content">

            <h1>`+ item[i].urun_adi + `</h1>
            <hr style="width: 10rem"/>
  
            `+ item[i].aciklama.slice(0, 270) + `
          </div> 
          <footer class="content">
            <h2 class="full-price">
              `+ item[i].fiyat + ` ₺
            </h2>
  

          </footer>
        </article>
      </section>`;
      }
      $(".basketAll").append(html);
    },
  });
});


$(document).ready(function () {
  $("#item-add-cart").click(function (e) {
    e.preventDefault();
    const userId = JSON.parse(sessionStorage.getItem("userId"));
    let item = JSON.parse(localStorage.getItem("productInfo"));
    let itemId = item.productId;
    const data = {
      ref: "51152bdc1f6fcae3e24bf21c819b02f6",
      customerId: userId,
      productId: itemId,
      html: userId,
    };
    const url = "https://www.jsonbulut.com/json/orderForm.php";
    if (userId != null) {
      $.ajax({
        type: "get",
        url: url,
        data: data,
        dataType: "json",
        success: function (response) {
          alert("Ürününüz Sepete Eklendi")
        },
      });
    } else {
      window.location.href = "login.html";
    }
  });
});


