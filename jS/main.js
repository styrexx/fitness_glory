let listN = document.getElementsByClassName("listN")[0];
let nav = document.getElementsByTagName("nav")[0];

listN.onclick = function () {
  if (nav.classList.contains("show") === false) {
    nav.classList.add("show");
  } else if (nav.classList.contains("show") === true) {
    nav.classList.remove("show");
  }
};
