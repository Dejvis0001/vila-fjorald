//Carousel//
$(".carousel").carousel({
  interval: 2000,
});
//OwlCarousel//
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  navText: [
    "<i class='fas fa-chevron-left'></i>",
    "<i class='fas fa-chevron-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});
// Testimonials carousel//
var owl = $(".owl-carousel");
owl.owlCarousel({
  loop: true,
  nav: true,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    960: {
      items: 5,
    },
    1200: {
      items: 6,
    },
  },
});
owl.on("mousewheel", ".owl-stage", function (e) {
  if (e.deltaY > 0) {
    owl.trigger("next.owl");
  } else {
    owl.trigger("prev.owl");
  }
  e.preventDefault();
});