// //let showLogin = true;
// let showMyOrders = false;
// let showOrders = false;
(function () {
  window.addEventListener("load", update, false);

 

})();


$(document).ready(function(){

  console.log('hi mum');
  $(window).scroll(function() {
    console.log("window scrol");
  });

  $("articlelist").scroll(function ()  {
   console.log("Scorllin");
 })
})



let errorVisible = false;
let loginVisible = false;
let registreerVisible = true;
let articleListVisible = false;
let stallVisible = false;
let article1Visible = false;

function update() {
  show("error", errorVisible);
  show("login", loginVisible);
  show("registreer", registreerVisible);
  show("articlelist", articleListVisible);
  show("stall", stallVisible);
  show("article1", article1Visible);
}

function clickOn(event, component) {
  event.preventDefault();
  switch (component) {
    case "registreer":
      errorVisible = false;
      loginVisible = true;
      registreerVisible = false;
      stallVisible = false;
      article1Visible = false;
      break;
    case "login":
      errorVisible = true;
      loginVisible = true;
      registreerVisible = false;
      stallVisible = false;
      article1Visible = false;
      break;
    case "error":
      errorVisible = false;
      loginVisible = false;
      registreerVisible = false;
      articleListVisible = true;
      stallVisible = false;
      article1Visible = false;
      break;
    case "mystall":
      errorVisible = false;
      loginVisible = false;
      registreerVisible = false;
      articleListVisible = false;
      stallVisible = true;
      article1Visible = false;
      break;

    case "myorder":
      errorVisible = false;
      loginVisible = false;
      registreerVisible = false;
      articleListVisible = true;
      stallVisible = false;
      article1Visible = false;
      break;

    case "article1":
      errorVisible = false;
      loginVisible = false;
      registreerVisible = false;
      articleListVisible = false;
      stallVisible = true;
      article1Visible = true;
      break;

    case "artpiece":
      document
        .getElementsByClassName("artpiece")[0]
        .classList.remove("articlelist__listitemtextqual--selected");
      document
        .getElementsByClassName("artgr")[0]
        .classList.remove("articlelist__listitemtextqual--selected");
      document
        .getElementsByClassName("artkg")[0]
        .classList.remove("articlelist__listitemtextqual--selected");
      document
        .getElementsByClassName("artpiece")[0]
        .classList.add("articlelist__listitemtextqual--selected");
        var evt = event ? event : window.event;
        if (evt.stopPropagation) {evt.stopPropagation();}

      break;

    case "artgr":
      document
        .getElementsByClassName("artpiece")[0]
        .classList.remove("articlelist__listitemtextqual--selected");
      document
        .getElementsByClassName("artgr")[0]
        .classList.remove("articlelist__listitemtextqual--selected");
      document
        .getElementsByClassName("artkg")[0]
        .classList.remove("articlelist__listitemtextqual--selected");
      document
        .getElementsByClassName("artgr")[0]
        .classList.add("articlelist__listitemtextqual--selected");
        var evt = event ? event : window.event;
        if (evt.stopPropagation) {evt.stopPropagation();}
      break;

    case "artkg":
      document
        .getElementsByClassName("artpiece")[0]
        .classList.remove("articlelist__listitemtextqual--selected");
      document
        .getElementsByClassName("artgr")[0]
        .classList.remove("articlelist__listitemtextqual--selected");
      document
        .getElementsByClassName("artkg")[0]
        .classList.remove("articlelist__listitemtextqual--selected");
      document
        .getElementsByClassName("artkg")[0]
        .classList.add("articlelist__listitemtextqual--selected");
        var evt = event ? event : window.event;
        if (evt.stopPropagation) {evt.stopPropagation();}
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

// document.querySelector("ul").addEventListener("click", (e) => {
//   const li = e.target.closest("li");
//   const btn = e.target.closest("button");
//   if (li && li.scrollLeft === 0) {
//     li.scrollBy({
//       left: 1,
//       behavior: "smooth",
//     });
//   } else if (!btn && li) {
//     li.scrollBy({
//       left: -1,
//       behavior: "smooth",
//     });
//   } else if (btn && li) {
//     li.remove();
//   }
// });



// $('#my_div1').hasScrollBar()