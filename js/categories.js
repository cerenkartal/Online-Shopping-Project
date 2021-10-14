$(document).ready(function () {

    const productLink = "https://www.jsonbulut.com/json/companyCategory.php";
    const objproductLink = {
      ref: '51152bdc1f6fcae3e24bf21c819b02f6'
    }
  
    $.ajax({
      type: "get",
      url: productLink,
      data: objproductLink,
      dataType: "json",
      success: function (response) {
        const stat = response.Kategoriler[0].durum;
        const message = response.Kategoriler[0].mesaj;
  
        let html = ``;
        if (stat) {
          const category = response.Kategoriler[0];
  
          html += `<ul class="sidenavList nav flex-column text-white side-nav-list">
          <li class="nav-link navButtonParent"> 
              
          <span style="color:white;" class="mx-2"><a class="allProductsHref" href="products.html">Tüm Ürünler</a></span></li>
          
          `
  
          for (let i = 0; i < category.Categories.length; i++) {
            let item = category.Categories[i];
            if (item.TopCatogryId == 0) {
              html += `   
                      
              <li href="#" class="nav-link navButtonParent">
              <button class="btn  btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
              
            <span style="color:white;" class="mx-2">`+ item.CatogryName.toUpperCase() + ` </span></button>
            <ul>
             `
  
  
  
              for (let j = 0; j < category.Categories.length; j++) {
                let subItem = category.Categories[j];
                if (item.CatogryId == subItem.TopCatogryId) {
                  html += `<li class="collapse catCollapse" id="home-collapse" ><a href ="products.html?categoryId=${subItem.CatogryId}">` + subItem.CatogryName + `</a> </li>
                `
                }
              }
              html += `</li></ul>`
            }
  
  
          }
          html += `</ul>`
          $('#sidebar').append(html);
        }
  
      },
  
  
    });

});