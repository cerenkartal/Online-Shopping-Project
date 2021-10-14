user = "";
if (localStorage.getItem("userInfo") != null) {
    user = localStorage.getItem("userInfo");
} else if (sessionStorage.getItem("userInfo") != null) {
    user = sessionStorage.getItem("userInfo");
}

let parsedUser = JSON.parse(user);
console.log(`parsedUser`, parsedUser)
let userId = parsedUser.userId;
console.log(`userId`, userId)
$(document).ready(function () {

    $('#updateForm').submit(function (e) {
        e.preventDefault();
        const name = $("#userName").val();
        const surname = $("#userSurname").val();
        const phone = $("#userPhone").val();
        const email = $("#email").val();
        const password = $("#password").val();

        const urlProfile = "https://www.jsonbulut.com/json/userSettings.php";
        

        const data = {
            ref: "51152bdc1f6fcae3e24bf21c819b02f6",
            userId: userId,
            userName: name,
            userSurname: surname,
            userMail: email,
            userPhone: phone,
            userPass: password,
        };


        $.ajax({
            type: "get",
            url: urlProfile,
            data: data,
            dataType: "json",
            success: function (response) {

                if (localStorage.getItem("userInfo") != null) {
                    const user = JSON.parse(localStorage.getItem("userInfo"));

                    user.userName = data.userName;
                    user.userSurname = data.userSurname;
                    user.userMail = data.userMail;
                    user.userPhone = data.userPhone;
                    user.userPass = data.userPass;
                    
                    localStorage.setItem("userInfo", JSON.stringify(user));
                    sessionStorage.setItem("userInfo", JSON.stringify(user));
                    
                }
                else {

                    const user = JSON.parse(sessionStorage.getItem("userInfo"));
                    user.userName = data.userName;
                    user.userSurname = data.userSurname;
                    user.userEmail = data.userMail;
                    user.userPhone = data.userPhone;
                    user.userPass = data.userPass;

                    sessionStorage.setItem("userInfo", JSON.stringify(user));
                    
                }

                alert("Bilgileriniz değiştirildi!")
                window.location.href = "profile.html"
            }
        });


    });




});
