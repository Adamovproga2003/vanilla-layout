const tourOption = document.getElementById("tours");
const servicesOption = document.getElementById("services");
const dropDownTour = document.querySelector(".header_dropdown_tours");
const dropDownServices = document.querySelector(".header_dropdown_services");
const hotTouresButton = document.getElementById("hot-toures");
const popularTouresButton = document.getElementById("popular-toures");
const hotToursElement = document.querySelector(".hot-tours");
const popularToursElement = document.querySelector(".popular-tours");
const menuButton = document.getElementById("menu-button");
const toursLink = document.getElementById("tours-link");
const mobileDropDownTour = document.querySelector(".mobileMenu_dropdown_tours");
const servicesLink = document.getElementById("services-link");
const mobileDropDownServices = document.querySelector(
  ".mobileMenu_dropdown_services"
);

servicesLink.addEventListener("click", () => {
  event.preventDefault();
  if (
    mobileDropDownServices.style.height === "0px" ||
    mobileDropDownServices.style.height === ""
  ) {
    mobileDropDownServices.style.height =
      mobileDropDownServices.scrollHeight + "px";
  } else {
    mobileDropDownServices.style.height = "0px";
  }
});

toursLink.addEventListener("click", () => {
  event.preventDefault();
  if (
    mobileDropDownTour.style.height === "0px" ||
    mobileDropDownTour.style.height === ""
  ) {
    mobileDropDownTour.style.height = mobileDropDownTour.scrollHeight + "px";
  } else {
    mobileDropDownTour.style.height = "0px";
  }
});

menuButton.addEventListener("click", () => {
  var menuImg = document.getElementById("menu-img");
  var closeImg = document.getElementById("close-img");
  var slideMenu = document.getElementById("slide-menu");

  if (menuImg.style.display === "none") {
    menuImg.style.display = "inline";
    closeImg.style.display = "none";
    slideMenu.classList.remove("active");
    document.documentElement.style.overflow = ""; // Enable scroll
  } else {
    menuImg.style.display = "none";
    closeImg.style.display = "inline";
    slideMenu.classList.add("active");
    document.documentElement.style.overflow = "hidden"; // Disable scroll
  }
});

hotTouresButton.addEventListener("click", () => {
  hotToursElement.style.visibility = "visible";
  hotToursElement.style.height = "100%";
  popularToursElement.style.visibility = "hidden";
  popularToursElement.style.height = "0";
  hotTouresButton.classList.add("tours-section_types--actived");
  popularTouresButton.classList.remove("tours-section_types--actived");
});

popularTouresButton.addEventListener("click", () => {
  hotToursElement.style.visibility = "hidden";
  hotToursElement.style.height = "0";
  popularToursElement.style.visibility = "visible";
  popularToursElement.style.height = "100%";
  popularTouresButton.classList.add("tours-section_types--actived");
  hotTouresButton.classList.remove("tours-section_types--actived");
});

tourOption.addEventListener("mouseenter", () => {
  dropDownTour.classList.add("hovered");
});

tourOption.addEventListener("mouseleave", () => {
  setTimeout(() => {
    if (!dropDownTour.matches(":hover")) {
      dropDownTour.classList.remove("hovered");
    }
  }, 100);
});

servicesOption.addEventListener("mouseenter", () => {
  dropDownServices.classList.add("hovered");
});

servicesOption.addEventListener("mouseleave", () => {
  setTimeout(() => {
    if (!dropDownServices.matches(":hover")) {
      dropDownServices.classList.remove("hovered");
    }
  }, 100);
});

dropDownTour.addEventListener("mouseleave", () => {
  dropDownTour.classList.remove("hovered");
});

dropDownServices.addEventListener("mouseleave", () => {
  dropDownServices.classList.remove("hovered");
});
