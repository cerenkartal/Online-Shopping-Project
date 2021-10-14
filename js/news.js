
let item= []

$(document).ready(function () {
    const urlNews = "https://www.jsonbulut.com/json/news.php";
    const urlObjNews = {
        ref:"51152bdc1f6fcae3e24bf21c819b02f6",
        start:"0",
        
    }

    $.ajax({
        type: "get",
        url: urlNews,
        data: urlObjNews,
        dataType: "json",
        success: function (response) {
            const items= response.News[0].Haber_Bilgileri;
            item=items;
            
          
   
        let html=``
        for (let i = 0; i < items.length; i++) {
          console.log(`item`, item)
          html +=`
          
          <div class="col-xl-4 col-lg-4 col-md-6 col-6 card urunKart urunKartHaber" >
            <img src="`+items[i].picture+`" class="card-img-top" alt="img/no.jpg">
            <div class="card-body">
              <h5 class="card-title">`+items[i].title.slice(0,15)+`...</h5>
              <p class="card-text">`+items[i].s_description.slice(0,45)+"..."+`</p>
              <a onclick="fncClick(${i})" href="newsInfo.html" class="btn btn-dark">Detay</a>
            </div>
            </div>
          `
          }
        
        $('#rowHaberKartlar').append(html);
      }
    });


});

function fncClick(i) {
  let itempage = JSON.stringify(item[i]);
  localStorage.removeItem("productInfo");
  sessionStorage.removeItem("productInfo");
  localStorage.setItem("productInfo", itempage);
  sessionStorage.setItem("productInfo", itempage);
  window.location.href = "newsInfo.html";
}