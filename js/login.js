$(document).ready(function () {
  $("#loginForm").submit(function (e) {
    e.preventDefault();

    const email = $("#email").val();
    const password = $("#password").val();


    const pushObj = {
      ref: "51152bdc1f6fcae3e24bf21c819b02f6",
      userEmail: email,
      userPass: password,
      face: "no",
    };
    const url = "https://www.jsonbulut.com/json/userLogin.php";

    $.ajax({
      type: "get",
      url: url,
      data: pushObj,
      dataType: "json",
      success: function (response) {
        const status = response.user[0].durum;
        const msg = response.user[0].mesaj;
        const ref = localStorage.getItem("refferer");
        let splitRef = ref.split("/");

        if (status) {
          const item = JSON.stringify(response.user[0].bilgiler.userId);
          const allInfo = JSON.stringify(response.user[0].bilgiler)
          localStorage.setItem("userInfo", allInfo);
          sessionStorage.setItem("userInfo", allInfo);

          if ($("#remember").is(":checked")) {
            localStorage.setItem("userId", item);
            sessionStorage.setItem("userId", item);
          } else {
            sessionStorage.setItem("userId", item);
          }
          alert(msg)
          if (
            splitRef[3] == "productInfo.html" ||
            (sessionStorage.getItem("productInfo") != null &&
              splitRef[3] == "register.html")
          ){window.location.href="productInfo.html"}
          else 
            
            {window.location.href = "index.html"}

        } else {
          alert("Bilgiler Doğru Değil")
        }

      }

    });

  });
});




