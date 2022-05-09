// IF-THIS-THAN-THAT

function showGoku() {
  var showGoku = document.getElementById("goku");
    if (onmouseover = true) {
      showGoku.style.visibility = "visible";
    }
}

function noGoku() {
  var noGoku = document.getElementById("goku");
    if (onmouseout = true) {
      noGoku.style.visibility = "hidden";
    }
}

function myFunction() {
  var elem = document.getElementById("barra2");
    elem.style.width = parseInt(elem.style.width||500) + 40 + 'px';
      if (elem.style.width === "1020px") {
        elem.style.width = "500px";
      }
  var showImage = document.getElementById("brokenwall");
      if (elem.style.width >= "940px") {
        showImage.style.visibility = "visible";
      } else {
        showImage.style.visibility = "hidden";
      }
}
