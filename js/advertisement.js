//reklam
const adLink = "https://www.jsonbulut.com/json/advertisement.php";
const adObjLink = {
  ref: "51152bdc1f6fcae3e24bf21c819b02f6",
  advertisementId: "39"
}

$.ajax({
  type: "get",
  url: adLink,
  data: adObjLink,
  dataType: "json",
  success: function (res) {
    newAdvertisement(res);
    console.log(`res`, res)
  }
});

function newAdvertisement(res) {
  let html = ``;

  for (let i = 0; i < res.reklam.length; i++) {
    const item = res.reklam[i];
    console.log(`item`, item)
    html += `  <div class="col-sm-4 col-12"></div> <div class="col-sm-4 col-12">
        <h5 class="modal-title yeniModalTitle" id="exampleModalLabel">`+ item.reklam.adi + `</h5>
        <button id="reklam" onclick="fncReklam()" type="button" class="btn-close" data-bs-dismiss="modal"
          aria-label="Close"></button>
      
      <div class="modal-body">
        <a href="https://www.instagram.com/cloudnameddobby/"><img  class="img-fluid" src="`+ item.reklam.dosya + `" /></a>
      </div></div> <div class="col-sm-4 col-12"></div>`
  }

  $('#modal').html(html);

}