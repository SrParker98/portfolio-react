$("#toSearch").click(function () {
  $("html, body").animate(
    {
      scrollTop: $(".banner-seccion").offset().top,
    },
    1000
  );
});

const back = document.querySelector(".banner-seccion");
function cambio() {
  function back1() {
    $(back).css({
      "background-image": "url(./assets/img-seccion.jpg)",
      transition: "background 1s",
    });
  }

  back1();
}

function cambio1() {
  function back2() {
    $(back).css({
      "background-image": "url(./assets/image_banner.jpg)",
      transition: "background 1s",
    });
  }

  back2();
}

function cambio2() {
  function back3() {
    $(back).css({
      "background-image": "url(./assets/pexels.jpg)",
      transition: "background 1s",
    });
  }

  back3();
}
$("#dropdown").click(function () {
  $("#mostrar").toggle();
});
