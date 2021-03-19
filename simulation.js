// //let showLogin = true;
// let showMyOrders = false;
// let showOrders = false;
(function () {
  window.addEventListener("load", update, false);
})();

let errorVisible = false;
let loginVisible = false;
let registreerVisible = true;
let articleListVisible = false ;
let stallVisible = false;

function update() {
  show("error", errorVisible);
  show("login", loginVisible);
  show("registreer", registreerVisible);
  show("articlelist", articleListVisible);
  show("stall", stallVisible);
}

function clickOn(event, component) {
  event.preventDefault();
  switch (component) {
    case "registreer":
      errorVisible = false;
      loginVisible = true;
      registreerVisible = false;
      stallVisible = false ;
      break;
    case "login":
      errorVisible = true;
      loginVisible = true;
      registreerVisible = false;
      stallVisible = false ;
      break;
    case "error":
        errorVisible = false;
        loginVisible = false;
        registreerVisible = false;
        articleListVisible = true;
        stallVisible = false ;
        break;
        case "mystall":
          errorVisible = false;
          loginVisible = false;
          registreerVisible = false;
          articleListVisible = false;
          stallVisible = true ;
          break;
          
          case "myorder":
            errorVisible = false;
            loginVisible = false;
            registreerVisible = false;
            articleListVisible = true;
            stallVisible = false ;
            break;
      break;
  }

  update();
}

function show(className, visible) {
  if (visible) {
    document.getElementsByClassName(className)[0].style.display = "";
  } else {
    document.getElementsByClassName(className)[0].style.display = "none";
  }
}


document.querySelector("ul").addEventListener("click", (e) => {
    const li = e.target.closest("li");
    const btn = e.target.closest("button");
    if (li && li.scrollLeft === 0) {
      li.scrollBy({
        left: 1,
        behavior: "smooth"
      });
    } else if (!btn && li) {
      li.scrollBy({
        left: -1,
        behavior: "smooth"
      });
    } else if (btn && li) {
      li.remove();
    }
  });
  
