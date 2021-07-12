// Hero cap div's h1 animation logic

const h_1 = document.querySelector(".h_1");
const h_2 = document.querySelector(".h_2");
const h_3 = document.querySelector(".h_3");

const h1Func = () => {
  setTimeout(() => {
    h_1.classList.add("down");
    h_2.classList.remove("up");

    h_1.classList.add("trans");
    h_2.classList.add("trans");
    h_3.classList.add("trans");
  }, 4000);
  setTimeout(() => {
    h_2.classList.add("down");

    h_1.classList.remove("down");
    h_1.classList.remove("trans");
    h_1.classList.add("up");

    h_3.classList.remove("up");
  }, 8000);
  setTimeout(() => {
    h_1.classList.add("trans");
    h_1.classList.remove("up");

    h_3.classList.add("down");

    h_2.classList.remove("trans");
    h_2.classList.remove("down");
    h_2.classList.add("up");

    setTimeout(() => {
      h_3.classList.remove("trans");
      h_3.classList.remove("down");
      h_3.classList.add("up");
    }, 1000);
  }, 12000);
};

h1Func();
setInterval(() => {
  h1Func();
}, 12500);

//Carousel event bootstrap

const myCarousel = document.getElementById("myCarousel");
const active = document.querySelectorAll(".carousel .carousel-item img");

function scaleUp() {
  setTimeout(() => {
    active.forEach((value) => {
      value.classList.add("scaleAni");
    });
  }, 3800);
}

myCarousel.addEventListener("slide.bs.carousel", function () {
  scaleUp();
});
myCarousel.addEventListener("slid.bs.carousel", function () {
  active.forEach((value) => {
    value.classList.remove("scaleAni");
  });
});
scaleUp();

//Responsive menu logic

const menuLi = document.querySelectorAll("#menu li a");
const navLi = document.querySelectorAll("header nav li a");
const menu = document.getElementById("menu");
const home = document.querySelector("#hero").getBoundingClientRect().top;
const homeL = document.querySelector("#hero").getBoundingClientRect().left;
const about = document.querySelector("#about").getBoundingClientRect().top;
const aboutL = document.querySelector("#about").getBoundingClientRect().left;
const service = document.querySelector("#service").getBoundingClientRect().top;
const serviceL = document
  .querySelector("#service")
  .getBoundingClientRect().left;
const team = document.querySelector("#team").getBoundingClientRect().top;
const teamL = document.querySelector("#team").getBoundingClientRect().left;
const work = document.querySelector("#work").getBoundingClientRect().top;
const workL = document.querySelector("#work").getBoundingClientRect().left;
const contact = document.querySelector("#contact").getBoundingClientRect().top;
const contactL = document
  .querySelector("#contact")
  .getBoundingClientRect().left;

for (const value of menuLi) {
  value.addEventListener("click", () => {
    menu.classList.remove("show");
  });
}

window.addEventListener("scroll", function () {
  if (scrollY >= home && scrollY < about) {
    menuLi[0].classList.add("active");

    menuLi[1].classList.remove("active");
    menuLi[2].classList.remove("active");
    menuLi[3].classList.remove("active");
    menuLi[4].classList.remove("active");
    menuLi[5].classList.remove("active");

    window.addEventListener("resize", function () {
      scrollTo(0, 0);
    });

    navLi[0].classList.add("_active");

    navLi[1].classList.remove("_active");
    navLi[2].classList.remove("_active");
    navLi[3].classList.remove("_active");
    navLi[4].classList.remove("_active");
    navLi[5].classList.remove("_active");
  } else if (scrollY >= about && scrollY < team) {
    menuLi[1].classList.add("active");

    menuLi[0].classList.remove("active");
    menuLi[2].classList.remove("active");
    menuLi[3].classList.remove("active");
    menuLi[4].classList.remove("active");
    menuLi[5].classList.remove("active");

    navLi[1].classList.add("_active");

    navLi[0].classList.remove("_active");
    navLi[2].classList.remove("_active");
    navLi[3].classList.remove("_active");
    navLi[4].classList.remove("_active");
    navLi[5].classList.remove("_active");
  } else if (scrollY >= team && scrollY < service) {
    menuLi[2].classList.add("active");

    menuLi[0].classList.remove("active");
    menuLi[1].classList.remove("active");
    menuLi[3].classList.remove("active");
    menuLi[4].classList.remove("active");
    menuLi[5].classList.remove("active");

    navLi[2].classList.add("_active");

    navLi[0].classList.remove("_active");
    navLi[1].classList.remove("_active");
    navLi[3].classList.remove("_active");
    navLi[4].classList.remove("_active");
    navLi[5].classList.remove("_active");
  } else if (scrollY >= service && scrollY < work) {
    menuLi[3].classList.add("active");

    menuLi[0].classList.remove("active");
    menuLi[1].classList.remove("active");
    menuLi[2].classList.remove("active");
    menuLi[4].classList.remove("active");
    menuLi[5].classList.remove("active");

    navLi[3].classList.add("_active");

    navLi[0].classList.remove("_active");
    navLi[1].classList.remove("_active");
    navLi[2].classList.remove("_active");
    navLi[4].classList.remove("_active");
    navLi[5].classList.remove("_active");
  } else if (scrollY >= work && scrollY < contact) {
    menuLi[4].classList.add("active");

    menuLi[0].classList.remove("active");
    menuLi[1].classList.remove("active");
    menuLi[2].classList.remove("active");
    menuLi[3].classList.remove("active");
    menuLi[5].classList.remove("active");

    navLi[4].classList.add("_active");

    navLi[1].classList.remove("_active");
    navLi[2].classList.remove("_active");
    navLi[3].classList.remove("_active");
    navLi[0].classList.remove("_active");
    navLi[5].classList.remove("_active");
  } else if (scrollY >= contact) {
    menuLi[5].classList.add("active");

    menuLi[0].classList.remove("active");
    menuLi[1].classList.remove("active");
    menuLi[2].classList.remove("active");
    menuLi[3].classList.remove("active");
    menuLi[4].classList.remove("active");

    navLi[5].classList.add("_active");

    navLi[1].classList.remove("_active");
    navLi[2].classList.remove("_active");
    navLi[3].classList.remove("_active");
    navLi[4].classList.remove("_active");
    navLi[0].classList.remove("_active");
  }
});
