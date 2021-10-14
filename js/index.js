

let x = document.referrer;
console.log(x);
localStorage.setItem("refferer", x);

// iframe add
function fncReklam() {
  modal.style.display = "none";

}

// storage control
const local = localStorage.getItem("userId")
if (local != null) {
  sessionStorage.setItem("userId", local)
}
const info = localStorage.getItem("userInfo")
if (info != null) {
  sessionStorage.setItem("userInfo", info)
}



// session control
const user = sessionStorage.getItem("userId")
const nameSurname = sessionStorage.getItem("userInfo")

if (user == null) {
  const obj = JSON.parse(nameSurname)
  
  let navbar = `  
    <nav class="navbar navbar-bottom navbar-expand-lg navbar-dark bg-dark main-navbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html"></a>
        <button class="navbar-toggler " type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item ">
              <a class="btn border-0 " id="menu-btn">
                <-- Tüm Kategoriler </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="index.html">Anasayfa</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="news.html">Haberler</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="contact.html">İletişim</a>
            </li>
            
          </ul>

          
          <ul class="navbar-nav me-auto mb-2 m-lg-2 ">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Kullanıcı İşlemleri
              </a>
              <ul class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="register.html">Kayıt Ol</a></li>
                <li><a class="dropdown-item" href="login.html">Giriş Yap</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a onclick="return logout()" class="dropdown-item dropdown-item-lastchild" href="index.html">Çıkış Yap</a></li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </nav>

   

`
  $(".my-container").append(navbar);
} else {
  // session true
  const obj = JSON.parse(nameSurname)
  let navbar = `  
    <nav class="navbar navbar-bottom navbar-expand-lg navbar-dark bg-dark main-navbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html"></a>
        <button class="navbar-toggler " type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item ">
              <a class="btn border-0 " id="menu-btn">
                <-- Tüm Kategoriler </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="index.html">Anasayfa</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="news.html">Haberler</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="contact.html">İletişim</a>
            </li>
            <li class="nav-item">
            <a class="nav-link userLinkChange " href="profile.html" tabindex="-1" aria-disabled="true">Sn. ` + obj.userName+ ` ` +obj.userSurname + `</a>
          </li>
          </ul>

          
          <ul class="navbar-nav me-auto mb-2 m-lg-2 ">
            <li class="nav-item dropdown">
              <a class="nav-link  dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Kullanıcı İşlemleri
              </a>
              <ul class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="register.html">Kayıt Ol</a></li>
                <li><a class="dropdown-item" href="login.html">Giriş Yap</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a onclick="return logout()" class="dropdown-item dropdown-item-lastchild" href="index.html">Çıkış Yap</a></li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </nav>

   

`
  $(".my-container").append(navbar);

}

var menu_btn = document.querySelector("#menu-btn");
var sidebar = document.querySelector("#sidebar");
var container = document.querySelector(".my-container");
menu_btn.addEventListener("click", () => {
  sidebar.classList.toggle("active-nav");
  container.classList.toggle("active-cont");
});

//logout fnc
function logout() {

  //confirm answer
  const answer = confirm("Are You Sure..?")
  if (answer == true) {

    //storage logout
    localStorage.clear();

    // single item remove
    sessionStorage.removeItem("userId");


    //all session remove
    sessionStorage.clear();

    //redirect to login
    window.location.href = "index.html"
  }

  return false;



}

