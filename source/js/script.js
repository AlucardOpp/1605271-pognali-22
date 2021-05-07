let pageHeader = document.querySelector(".page-header");
let pageHeaderContainer = document.querySelector(".page-header__container");
let pageHeaderLogo = document.querySelector(".page-header__logo");
let pageHeaderToggle = document.querySelector(".page-header__toggle");
let mainMenu = document.querySelector(".main-menu");
let userList = document.querySelector(".user-list");
let userLinkTel = document.querySelector(".user-list__link--tel");
let userLinkMail = document.querySelector(".user-list__link--mail");
let mainMenuNav = document.querySelector(".main-menu__nav--nojs");
let contacts = document.querySelector(".contacts");
let socialsMenu = document.querySelector(".socials-menu");
let promo = document.querySelector(".promo");
let newProfileButton = document.querySelector(".new-profile__button");
let tariffs = document.querySelector(".tariffs");
let tariffsButton = document.querySelector(".tariffs__button");

pageHeader.classList.remove("page-header--nojs");
pageHeaderContainer.classList.remove("page-header__container--nojs");
pageHeaderLogo.classList.remove("page-header__logo--nojs");
pageHeaderToggle.classList.remove("page-header__toggle--nojs");
mainMenu.classList.remove("main-menu--nojs");
userList.classList.remove("user-list--nojs");
userLinkTel.classList.remove("user-list__link--tel-nojs");
userLinkMail.classList.remove("user-list__link--mail-nojs");
mainMenuNav.classList.remove("main-menu__nav--nojs");
contacts.classList.remove("contacts--nojs");
socialsMenu.classList.remove("socials-menu--nojs");
promo.classList.remove("promo--nojs");

pageHeaderToggle.addEventListener("click", function() {
  pageHeader.classList.toggle("page-header--opened");
  pageHeader.classList.toggle("page-header--closed");
  pageHeaderContainer.classList.toggle("page-header__container--opened");
  pageHeaderContainer.classList.toggle("page-header__container--closed");
  pageHeaderLogo.classList.toggle("page-header__logo--opened");
  pageHeaderLogo.classList.toggle("page-header__logo--closed");
  pageHeaderToggle.classList.toggle("page-header__toggle--opened");
  pageHeaderToggle.classList.toggle("page-header__toggle--closed");
  userList.classList.toggle("user-list--opened");
  userList.classList.toggle("user-list--closed");
  userLinkTel.classList.toggle("user-list__link--tel-opened");
  userLinkTel.classList.toggle("user-list__link--tel-closed");
  userLinkMail.classList.toggle("user-list__link--mail-opened");
  userLinkMail.classList.toggle("user-list__link--mail-closed");
  mainMenuNav.classList.toggle("main-menu__nav--opened");
  mainMenuNav.classList.toggle("main-menu__nav--closed");
  contacts.classList.toggle("contacts--opened");
  contacts.classList.toggle("contacts--closed");
  socialsMenu.classList.toggle("socials-menu--opened");
  socialsMenu.classList.toggle("socials-menu--closed");
  promo.classList.toggle("promo--opened");
  promo.classList.toggle("promo--closed");
});

newProfileButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  tariffs.classList.add("tariffs--opened");
  tariffs.classList.remove("tariffs--closed");
});

tariffsButton.addEventListener("click", function() {
  tariffs.classList.toggle("tariffs--closed");
  tariffs.classList.toggle("tariffs--opened");
});
