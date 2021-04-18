// //let showLogin = true;
// let showMyOrders = false;
// let showOrders = false;

// var mymap = null;

const days = [
  "zondag",
  "maandag",
  "dinsdag",
  "woensdag",
  "donderdag",
  "vrijdag",
  "zaterdag",
];

(function () {
  window.addEventListener("load", update, false);
})();

$(document).ready(function () {
  // 51.92053, 4.48857
  // mymap = L.map('mapid1').setView([51.92053, 4.48857], 13);
  // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
  //   console.log('hi mum');
  //   $(window).scroll(function() {
  //     console.log("window scrol");
  //   });
  //   $("articlelist").scroll(function ()  {
  //    console.log("Scorllin");
  //  })
  //  $('body').scroll(function(e){
  //   console.log(e);
  // });
  // $("container__content").scroll(function ()  {
  //   console.log("container__content");
  // })
  // $(document).on( 'scroll', function(){
  //   console.log('Event Fired');
  // });
  // document.addEventListener('scroll', function (event) {
  //   console.log('DDDD',event.target.id);
  //   if (event.target.id === 'articlelist') { // or any other filtering condition
  //       console.log('scrolling', event.target);
  //   }
  // }, true /*Capture event*/);
});

let errorVisible = false;
let loginVisible = false;
let registreerVisible = true;
let articleListVisible = false;
let stallVisible = false;
let article1Visible = false;
let pickuplocVisible = false;

function update() {
  show("error", errorVisible);
  show("login", loginVisible);
  show("registreer", registreerVisible);
  show("articlelist", articleListVisible);
  show("stall", stallVisible);
  show("article1", article1Visible);
  showAllWithHeight("orderloc", pickuplocVisible);
  show("pickuploc__dktp", pickuplocVisible);

  // if (articleListVisible) {
  // createMap("mapid1",51.92054, 4.4886);
  // createMap("mapid2",51.96304, 4.55329);
  // createMap("mapid3",52.2229, 4.48689);

  // mymap = L.map("mapid1", {
  //   attributionControl: false,
  //   zoomControl: false,
  //   center: [51.92054, 4.4886],
  //   zoom: 17,
  // });

  // L.marker([51.92054, 4.4886]).addTo(mymap);
  // L.control.attribution({ prefix: "" }).addTo(mymap);
  // L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}", {
  //   foo: "bar",
  //   attribution:
  //     '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>',
  // }).addTo(mymap);

  // }
}

function createMap(mapID, Lat, Long) {
  const mymap = L.map(mapID, {
    attributionControl: false,
    zoomControl: false,
    center: [Lat, Long],
    zoom: 17,
  });

  L.marker([Lat, Long]).addTo(mymap);
  L.control.attribution({ prefix: "" }).addTo(mymap);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}", {
    foo: "bar",
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>',
  }).addTo(mymap);
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
      clickOrderLoc("", false);
      errorVisible = false;
      loginVisible = false;
      registreerVisible = false;
      articleListVisible = true;
      stallVisible = false;
      article1Visible = false;
      pickuplocVisible = false;
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
      if (evt.stopPropagation) {
        evt.stopPropagation();
      }

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
      if (evt.stopPropagation) {
        evt.stopPropagation();
      }
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
      if (evt.stopPropagation) {
        evt.stopPropagation();
      }
      break;

    case "pickuploc":
      errorVisible = false;
      loginVisible = false;
      registreerVisible = false;
      articleListVisible = true;
      stallVisible = false;
      article1Visible = false;
      pickuplocVisible = true;
      break;

      break;
  }

  update();

  if (component === "pickuploc") {
    createMap("mapid1", 51.92054, 4.4886);
    createMap("mapid2", 51.96304, 4.55329);
    createMap("mapid3", 52.2229, 4.48689);
  }
}

function show(className, visible) {
  if (visible) {
    document.getElementsByClassName(className)[0].style.display = "";
  } else {
    document.getElementsByClassName(className)[0].style.display = "none";
  }
}

function showAllWithHeight(id, show) {
  const elements = document.querySelectorAll('*[id^="' + id + '"]');
  for (var elm = 0; elm < elements.length; elm++) {
    if (show) {
      elements[elm].classList.remove("articlelist__listitem--hidden");
    } else {
      elements[elm].classList.add("articlelist__listitem--hidden");
    }
  }

  // document.getElementsByIds(id)[0].style.maxHeight = maxHeight;
}

function openLoc(lat, lng) {
  var geocoords = lat + "," + lng;

  if (macPlatform()) {
    window.open("maps://?q=" + geocoords, "_system");
  } else {
    var label = encodeURI("Hier staan wij!"); // encode the label!
    window.open("geo:0,0?q=" + geocoords + "(" + label + ")", "_system");
  }
}

function macPlatform() {
  return ["MacIntel", "iPhone"].includes(navigator.platform);
}

function clickOrderLoc(id, clicked = true) {
  let orderlocs = document.querySelectorAll('*[id^="orderloc"]');


  for (var ol = 0; ol < orderlocs.length; ol++) {
    if (orderlocs[ol].id != id) {
      if (clicked) {
        orderlocs[ol].classList.add("articlelist__listitem--hidden");
      } else {        
        orderlocs[ol].classList.remove("articlelist__listitem--hidden");

        let selectedOrderLoc = orderlocs[ol].getElementsByClassName('articlelist__orderlocmobselected');
        selectedOrderLoc[0].classList.add('articlelist__orderlocmobselected--hidden') ;

        let selectedOrderDeleteButton = orderlocs[ol].getElementsByClassName('articlelist__listitembutton');
        selectedOrderDeleteButton[0].classList.add('articlelist__listitembutton--hidden') ;
      }
    } else {
      let selectedOrderLoc = orderlocs[ol].getElementsByClassName('articlelist__orderlocmobselected');
      let selectedOrderDeleteButton = orderlocs[ol].getElementsByClassName('articlelist__listitembutton');
      if (clicked) {
      selectedOrderLoc[0].classList.remove('articlelist__orderlocmobselected--hidden') ;
      selectedOrderDeleteButton[0].classList.remove('articlelist__listitembutton--hidden');
      // console.log('!');

      } 
    }
  }
}

function iOS() {
  return (
    [
      "iPad Simulator",
      "iPhone Simulator",
      "iPod Simulator",
      "iPad",
      "iPhone",
      "iPod",
    ].includes(navigator.platform) ||
    // iPad on iOS 13 detection
    (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  );
}

document.querySelector("ul").addEventListener("click", (e) => {
  const li = e.target.closest("li");
  const btn = e.target.closest("button");
  if (li && li.scrollLeft === 0) {
    li.scrollBy({
      left: 1,
      behavior: "smooth",
    });
  } else if (!btn && li) {
    li.scrollBy({
      left: -1,
      behavior: "smooth",
    });
  } else if (btn && li) {
    li.remove();
  }
});

// $('#my_div1').hasScrollBar()
