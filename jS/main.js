let listN = document.getElementsByClassName("listN")[0];
let nav = document.getElementsByTagName("nav")[0];

listN.onclick = function () {
  if (nav.classList.contains("show") === false) {
    nav.classList.add("show");
  } else if (nav.classList.contains("show") === true) {
    nav.classList.remove("show");
  }
};

// Go to top
let upTop = document.querySelector(".uptop");

document.body.onscroll = function () {
  if (scrollY >= 868) {
    upTop.style.display = "flex";
    setTimeout(() => (upTop.style.opacity = "1"), 90);
  } else {
    upTop.style.opacity = "0";
    upTop.style.display = "none";
  }
};
upTop.onclick = function () {
  scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
