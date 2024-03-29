/*-------- HEADER HIDE AND SHOW --------*/
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollpos = window.pageYOffset;
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  const currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 150) {
    header.classList.remove("top");
    if (prevScrollpos > currentScrollPos) {
      header.style.top = 0;
    } else {
      header.style.top = -100 + "%";
    }
    prevScrollpos = currentScrollPos; // 마우스 이동 후 스크롤 위치값 재할당
  } else {
    header.classList.add("top");
  }
});

/*-------- MOBILE MENU HIDE AND SHOW --------*/
const mobileMenuIcon = document.querySelector(".menu-icon");
const mobileOverlay = document.querySelector(".mobile-overlay");
const mobileCloseIcon = document.querySelector(".close-icon");
mobileMenuIcon.addEventListener("click", function (e) {
  e.preventDefault(); // default original effect prevented
  mobileOverlay.classList.add("on");
  document.body.style.overflow = "hidden"; // when menu activated, all scroll prevented
});
mobileCloseIcon.addEventListener("click", function (e) {
  e.preventDefault();
  mobileOverlay.classList.remove("on");
  document.body.style.overflow = "auto";
});

// target, currentTarge
mobileOverlay.addEventListener("click", function (e) {
  // console.log(e.target); // point to clicked element
  // console.log(e.currentTarget); // point to uppest element(최상위)
  // console.log(e.target.nodeName);
  if (
    e.target.getAttribute("class") !== "mobile-menus" &&
    e.target.nodeName !== "LI" &&
    e.target.nodeName !== "A" &&
    e.target.nodeName !== "IMG"
  ) {
    mobileOverlay.classList.remove("on");
    document.body.style.overflow = "auto";
  }
});

/*-------- BEST ITEMS SLIDE --------*/
const bestArtSwiper = new Swiper(".best-image-wrapper .swiper", {
  slidesPerView: 4,
  spaceBetween: 15,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    480: {
      // 480 이하
      slidesPerView: 1, // 보이는 슬라이드 갯수
      slidesPerGroup: 1, // 하나의 페이지네이션에 묶이는 슬라이드 갯수
    },
    880: {
      // 880 이하
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1400: {
      // 1400 이하
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
});

/*-------- NEW ART SLIDE --------*/
const newArtSwiper = new Swiper(".new-art-slider-wrapper .swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    
  }
  // breakpoints: {
  //   480: {
  //     // 480 이하
  //     slidesPerView: 1, // 보이는 슬라이드 갯수
  //     slidesPerGroup: 1, // 하나의 페이지네이션에 묶이는 슬라이드 갯수
    768:{
// 768 이하
    slider
    }
  //   },
  //   880: {
  //     // 880 이하
  //     slidesPerView: 2,
  //     slidesPerGroup: 2,
  //   },
  //   1400: {
  //     // 1400 이하
  //     slidesPerView: 3,
  //     slidesPerGroup: 3,
  //   },
  // },
});

/*-------- MD PICK TBAS --------*/
// 1. 요소 선택
const btns = document.querySelectorAll(".pick-tab-btn");
const panels = document.querySelectorAll(".pick-tab-panel");

// 2. 함수 정의
function activeTabs(i) {
  btns.forEach((btn) => {
    btn.classList.remove("on");
  });
  panels.forEach((panel) => {
    panel.classList.remove("on");
  });
  btns[i].classList.add("on");
  panels[i].classList.add("on");
}

// 3. 함수 호출
btns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    activeTabs(idx);
  });
});
