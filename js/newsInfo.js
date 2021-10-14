

$(document).ready(function () {
    const item = localStorage.getItem("productInfo");
    const itemjson = JSON.parse(item);
    console.log("itemjson",itemjson);
    $(".item-img").attr("src", itemjson.picture);
    $(".item-title").text(itemjson.title);
    $(".item-desc").html(itemjson.l_description);
    $(".item-time").html(itemjson.date_time);
  });

