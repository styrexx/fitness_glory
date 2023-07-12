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

// slider for aboutAse
const aboutRig = document.querySelectorAll(".aboutright");
const nextBut = document.querySelector("#next");
const prevBut = document.querySelector("#prev");
const icons = document.querySelectorAll(".sayScrool i");

nextBut.addEventListener("click", goToNext);
prevBut.addEventListener("click", goToprev);

let cont = 1;
function goToNext() {
  for (let i = 0; i < aboutRig.length; i++) {
    aboutRig[i].style.display = "none";
  }
  if (cont != aboutRig.length - 1) {
    aboutRig[cont].style.display = "block";
    cont++;
  } else {
    aboutRig[aboutRig.length - 1].style.display = "block";
    cont = 1;
    // console.log("cont done");
    for (let i = 0; i < icons.length; i++) {
      icons[i].classList.remove("noback");
    }
    nextBut.classList.add("noback");
  }
}
let contprev = aboutRig.length - 2;
function goToprev() {
  for (let i = 0; i < aboutRig.length; i++) {
    aboutRig[i].style.display = "none";
  }
  if (contprev != 0) {
    aboutRig[contprev].style.display = "block";
    contprev--;
  } else {
    aboutRig[0].style.display = "block";
    contprev = aboutRig.length - 2;
    // console.log("cont done");
    for (let i = 0; i < icons.length; i++) {
      icons[i].classList.remove("noback");
    }
    prevBut.classList.add("noback");
  }
}

// header action
const sectionProg = document.querySelector("#programs"),
  h2Prog = document.querySelector(".program-page .sectionHeader h2"),
  pProg = document.querySelector(".program-page .sectionHeader p");

const sectionMemb = document.querySelector("#about"),
  h2Memb = document.querySelector(".membership-page .sectionHeader h2"),
  pMemb = document.querySelector(".membership-page .sectionHeader p");

const quoteSection = document.querySelector(".quote"),
  textQ = document.querySelector(".quote p");

window.addEventListener("scroll", () => {
  headerAction(sectionProg, h2Prog, pProg);
  headerAction(sectionMemb, h2Memb, pMemb);
  showQuot();
  autoFocusInput();
});

function headerAction(section, h2, p) {
  if (window.scrollY >= section.offsetTop - 200) {
    h2.style.transform = "none";
    p.style.transform = "none";
  }
}

function showQuot() {
  if (window.scrollY >= quoteSection.offsetTop - 150) {
    textQ.style.opacity = 1;
  }
}

// auto focus for join
const sectionJoin = document.querySelector("#joinNow"),
  emailInput = document.querySelector("#emailInput");
function autoFocusInput() {
  if (window.scrollY >= sectionJoin.offsetTop - 400) {
    emailInput.focus();
  }
}
