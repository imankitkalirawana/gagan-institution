/** @format */

const nav_menu_m = document.getElementById("nav_menu_m");
const openNav = document.getElementById("open-nav");
const closeNav = document.getElementById("close-nav");

openNav.addEventListener("click", () => {
  nav_menu_m.classList.add("toggle");
});

closeNav.addEventListener("click", () => {
  nav_menu_m.classList.remove("toggle");
});

// sticky navbar on scroll script
$(window).scroll(function () {
  if (this.scrollY > 80) {
    $(".header").addClass("sticky");
  } else {
    $(".header").removeClass("sticky");
  }
});
$(document).ready(function () {
  $(".member-btn-1").click(function () {
    $(".team-details-1").slideToggle();
    $(".team-details-2").slideUp();
    $(".team-details-3").slideUp();
    $(".member-btn-1 .fa-caret-down").toggleClass("rotate");
    $(".member-btn-2 .fa-caret-down").removeClass("rotate");
    $(".member-btn-3 .fa-caret-down").removeClass("rotate");
  });
  $(".member-btn-2").click(function () {
    $(".team-details-2").slideToggle();
    $(".team-details-1").slideUp();
    $(".team-details-3").slideUp();
    $(".member-btn-1 .fa-caret-down").removeClass("rotate");
    $(".member-btn-2 .fa-caret-down").toggleClass("rotate");
    $(".member-btn-3 .fa-caret-down").removeClass("rotate");
  });
  $(".member-btn-3").click(function () {
    $(".team-details-3").slideToggle();
    $(".team-details-1").slideUp();
    $(".team-details-2").slideUp();
    $(".member-btn-1 .fa-caret-down").removeClass("rotate");
    $(".member-btn-2 .fa-caret-down").removeClass("rotate");
    $(".member-btn-3 .fa-caret-down").toggleClass("rotate");
  });
});

// Get all the nav-item elements
const navItems = document.querySelectorAll(".nav_item");

// Loop through each nav-item element and add an event listener to it
navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    // Remove the active class from all nav-item elements
    navItems.forEach((navItem) => {
      navItem.classList.remove("active");
    });
    // Add the active class to the clicked nav-item element
    navItem.classList.add("active");
  });
});

$(".carousel-1").owlCarousel({
  margin: 20,
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 3,
      nav: false,
    },
  },
});
$(".carousel-2").owlCarousel({
  margin: 20,
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 2,
      nav: false,
    },
    850: {
      items: 3,
      nav: false,
    },
    1100: {
      items: 4,
      nav: false,
    },
  },
});
$(".carousel-3").owlCarousel({
  margin: 20,
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 2,
      nav: false,
    },
    850: {
      items: 3,
      nav: false,
    },
    1100: {
      items: 4,
      nav: false,
    },
  },
});
$(".carousel-4").owlCarousel({
  margin: 20,
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  items: 1,
});
