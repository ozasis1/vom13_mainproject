$(function () {
  /* -- 헤더 높이만큼 페딩 적용 */
  const headerHeight = $("header").outerHeight();
  $(".landing").css(
    "padding",
    `${headerHeight}px var(--el-main) var(--el-main)`
  );

  // 메인 랜딩 슬라이더
  /*===== VISUAL SLIDER FUNCTION ===== */
  function visualSlider() {
    var visualSlider = new Swiper(".landing-slider", {
      loop: true,
      speed: 1000,
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: true,
      observer: true,
      observeParents: true,
      watchSlidesProgress: true,
      pagination: {
        el: ".landing .swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          var bulletArray = [];
          $(".landing .swiper-slide").each(function () {
            bulletArray.push($(this).find("span").html());
          });
          return `
            <div class="${className} main-slide-bullet">
              <span>0${index + 1}</span>
              <em>${bulletArray[index + 1]}</em>
            </div>
          `;
        },
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      on: {
        init: function () {
          $(".landing-slider").addClass("load-init");
        },
        progress: function () {
          for (var i = 0; i < this.slides.length; i++) {
            var slideProgress = this.slides[i].progress;
            var innerOffset = this.width * 0.5;
            var innerTranslate = slideProgress * innerOffset;
            this.slides[i].querySelector(".bg-wrap").style.transform =
              "translate3d(" + innerTranslate + "px, 0, 0)";
          }
        },
        // touchStart: function () {
        //   for (var i = 0; i < this.slides.length; i++) {
        //     this.slides[i].style.transition = "";
        //   }
        // },
        setTransition: function (speed) {
          for (var i = 0; i < this.slides.length; i++) {
            this.slides[i].style.transition = speed + "ms";
            this.slides[i].querySelector(".bg-wrap").style.transition =
              speed + "ms";
          }
        },
      },
    });

    visualSlider.on("slideChange", function () {
      $(".landing-slider").removeClass("load-init");
    });
  }
  visualSlider();

// FITTNG
function fitImageRatio(el1, el2, elv1, elv2) {
const mdImageWidth = $(el1).width();
const panelWidth = $(el2).width();
$(".panel-img").height(mdImageWidth * elv1);
$(".panel-desc").height(panelWidth * elv2);
}

$(window).on("resize", function () {
  // const mdImageWidth = $(".panel.-img").width();
  // const panelWidth = $
  // $(".panel-img").height(mdImageWidth * 0.8);
  // $(".panel-desc").height(panelWidth * 0.4);
  fitImageRatio(".panel-img", ".panel-desc", 0.8, 0.4);
});
  fitImageRatio();
  });