//NavBar//
const navEl = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 56) {
    navEl.classList.add("navbar-scrolled");
  } else {
    navEl.classList.remove("navbar-scrolled");
  }
});
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
$(document).ready(function () {
  // Click event for filter buttons
  $(".filter-button").click(function () {
    var value = $(this).attr("data-filter");
    if (value == "all") {
      $(".filter").show("1000");
    } else {
      $(".filter")
        .hide("3000")
        .filter("." + value)
        .show("3000");
    }
    // Add or remove 'active' class
    $(".filter-button").removeClass("active");
    $(this).addClass("active");
    // Dynamically adjust layout after filtering
    adjustGalleryLayout();
  });
  // Click event for images to open modal
  $(".img-fluid").on("click", function () {
    var modal = $("#myModal");
    var modalImg = $("#img01");
    modalImg.attr("src", $(this).attr("src"));
    modal.css("display", "block");
    // Set the current image index
    currentImgIndex = $(".img-fluid").index($(this));
  });
  // Click event for modal close button
  $(".close").click(function () {
    $("#myModal").css("display", "none");
  });
  // Click event for previous image navigation
  $(".prev").click(function () {
    currentImgIndex = (currentImgIndex - 1 + img.length) % img.length;
    $("#img01").attr("src", $(".img-fluid").eq(currentImgIndex).attr("src"));
  });
  // Click event for next image navigation
  $(".next").click(function () {
    currentImgIndex = (currentImgIndex + 1) % img.length;
    $("#img01").attr("src", $(".img-fluid").eq(currentImgIndex).attr("src"));
  });
  // Click event to close modal when clicking outside
  $(window).click(function (event) {
    var modal = $("#myModal");
    if (event.target == modal[0]) {
      modal.css("display", "none");
    }
  });
});
// Function to adjust gallery layout after filtering
function adjustGalleryLayout() {
  $(".gallery").each(function () {
    var $gallery = $(this);
    var $visibleItems = $gallery.find(".filter:visible");
    var itemsPerRow = 3; // Number of items per row
    var emptySlots = itemsPerRow - ($visibleItems.length % itemsPerRow);
    // Add empty slots to maintain grid layout
    for (var i = 0; i < emptySlots; i++) {
      $gallery.append(
        "<div class='gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter empty'></div>"
      );
    }
  });
}
