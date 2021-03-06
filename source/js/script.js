let pageBody = document.querySelector(".page__body");
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
let userLinkAuth = document.querySelector(".user-list__link--auth");
let siteListLink = document.querySelectorAll(".site-list__link");
let registrationButton = document.querySelector(".registration__button");
let pageHeaderTitle = document.querySelector(".page-header__title");
let profileFormButtonPlane = document.querySelector(".profile-form__transport-button--plane");
let profileFormButtonBus = document.querySelector(".profile-form__transport-button--bus");
let profileFormButtonBicycle = document.querySelector(".profile-form__transport-button--bicycle");
let profileFormButtonRun = document.querySelector(".profile-form__transport-button--run");
let profileForm = document.querySelector(".profile-form");
let routeItem = document.querySelectorAll(".route__item--dropdown-closed");
let routeChooseButton = document.querySelectorAll(".route__choose-button--dropdown-closed");
let routeRemove = document.querySelectorAll(".route__remove--dropdown-closed");
let routeDropdown = document.querySelectorAll(".route__dropdown--dropdown-closed");
let routeCloseDropdown = document.querySelectorAll(".route__close-dropdown");
let routeFlag = document.querySelectorAll(".route__flag--dropdown-closed");
let myPlansChange = document.querySelectorAll(".my-plans__change");
let entertainmentSubmit = document.querySelector(".entertainment__submit");
let filteringToggle = document.querySelector(".filtering__toggle");
let filtering = document.querySelector(".filtering");
let filteringDropdown = document.querySelector(".filtering__dropdown");
let filteringContinents = document.querySelector(".filtering__continents");
let filteringDropdownButton = document.querySelector(".filtering__dropdown-button");
let filterToggle = document.querySelectorAll(".filter__toggle");
let filterList = document.querySelectorAll(".filter__list");
let filterTransbutton = document.querySelectorAll(".filter__transbutton");
let filterSubmit = document.querySelector(".filter__submit");
let travellersImageLink = document.querySelectorAll(".travellers__image-link");
let travellersLink = document.querySelectorAll(".travellers__link");
let filteringToggleSpanShow = document.querySelector(".filtering__toggle-span-show");
let filteringToggleSpanClose = document.querySelector(".filtering__toggle-span-close");
let pageHeaderToMain = document.querySelector(".page-header__to-main");
let profileFormNumber = document.querySelector(".profile-form__number");
let profileFormText = document.querySelector(".profile-form__text");
let registrationAuthorize = document.querySelector(".registration__authorize");

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
if (pageBody.classList.contains("page__body--main"))
  promo.classList.remove("promo--nojs");
userLinkAuth.classList.remove("user-list__link--auth-nojs");
if (pageBody.classList.contains("page__body--others")) {
  pageHeaderTitle.classList.remove("page-header__title--nojs");
}
if (pageBody.classList.contains("page__body--form"))
  profileForm.classList.remove("profile-form--nojs");

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
  if (pageBody.classList.contains("page__body--main")) {
    promo.classList.toggle("promo--opened");
    promo.classList.toggle("promo--closed");
  }
  userLinkAuth.classList.toggle("user-list__link--auth-opened");
  userLinkAuth.classList.toggle("user-list__link--auth-closed");
  if (pageBody.classList.contains("page__body--others")) {
    pageHeaderTitle.classList.toggle("page-header__title--opened");
    pageHeaderTitle.classList.toggle("page-header__title--closed");
  }
  if (pageBody.classList.contains("page__body--form")) {
    profileForm.classList.toggle("profile-form--opened");
    profileForm.classList.toggle("profile-form--closed");
  }
  if (pageBody.classList.contains("page__body--catalog")) {
    filtering.classList.toggle("filtering--opened");
    filtering.classList.toggle("filtering--closed");
  }
});

userLinkAuth.addEventListener("click", function(evt) {
  evt.preventDefault();
});

if (pageBody.classList.contains("page__body--main")) {
  newProfileButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    tariffs.classList.add("tariffs--opened");
    tariffs.classList.remove("tariffs--closed");
  });
  tariffsButton.addEventListener("click", function() {
    tariffs.classList.toggle("tariffs--closed");
    tariffs.classList.toggle("tariffs--opened");
  });
  registrationAuthorize.addEventListener("click", function(evt) {
    evt.preventDefault();
  });
}

// ???????????????? ???? ???????????? ??????????????
// window.onscroll = function() {
//   sTop = (this.pageYOffset || document.documentElement) - (document.documentElement.clientTop || 0);
//   if (sTop > 70 && !pageHeader.classList.contains("page-header--opened") && !pageHeader.classList.contains("page-header--nojs")) {
//     pageHeader.classList.add("page-header--scrolled");
//     pageHeaderContainer.classList.add("page-header__container--scrolled");
//     pageHeaderLogo.classList.add("page-header__logo--scrolled");
//     pageHeaderToggle.classList.add("page-header__toggle--scrolled");
//     for (let i = 0; i < siteListLink.length; i++) {
//       siteListLink[i].classList.add("site-list__link--scrolled");
//     }
//     if (pageBody.classList.contains("page__body--form") || pageBody.classList.contains("page__body--catalog"))
//       pageHeaderTitle.classList.add("page-header__title--scrolled");
//     if (pageBody.classList.contains("page__body--catalog"))
//       pageHeaderToMain.classList.add("page-header__to-main--scrolled");
//     if (pageBody.classList.contains("page__body--form")) {
//       profileFormNumber.classList.add("profile-form__number--scrolled");
//       profileFormText.classList.add("profile-form__text--scrolled");
//     }
//   } else {
//     pageHeader.classList.remove("page-header--scrolled");
//     pageHeaderContainer.classList.remove("page-header__container--scrolled");
//     pageHeaderLogo.classList.remove("page-header__logo--scrolled");
//     pageHeaderToggle.classList.remove("page-header__toggle--scrolled");
//     for (let i = 0; i < siteListLink.length; i++) {
//       siteListLink[i].classList.remove("site-list__link--scrolled");
//     }
//     if (pageBody.classList.contains("page__body--form") || pageBody.classList.contains("page__body--catalog"))
//       pageHeaderTitle.classList.remove("page-header__title--scrolled");
//     if (pageBody.classList.contains("page__body--catalog"))
//       pageHeaderToMain.classList.remove("page-header__to-main--scrolled");
//     if (pageBody.classList.contains("page__body--form")) {
//       profileFormNumber.classList.remove("profile-form__number--scrolled");
//       profileFormText.classList.remove("profile-form__text--scrolled");
//     }
//   }
// };


if (pageBody.classList.contains("page__body--main")) {
  registrationButton.addEventListener("click", function(evt) {
    evt.preventDefault();
  });
}

if (pageBody.classList.contains("page__body--form")) {
  profileFormButtonPlane.addEventListener("click", function() {
    profileFormButtonPlane.classList.toggle("profile-form__transport-button--plane-active");
    profileFormButtonPlane.classList.toggle("profile-form__transport-button--plane-inactive");
  });
  profileFormButtonBus.addEventListener("click", function() {
    profileFormButtonBus.classList.toggle("profile-form__transport-button--bus-active");
    profileFormButtonBus.classList.toggle("profile-form__transport-button--bus-inactive");
  });
  profileFormButtonBicycle.addEventListener("click", function() {
    profileFormButtonBicycle.classList.toggle("profile-form__transport-button--bicycle-active");
    profileFormButtonBicycle.classList.toggle("profile-form__transport-button--bicycle-inactive");
  });
  profileFormButtonRun.addEventListener("click", function() {
    profileFormButtonRun.classList.toggle("profile-form__transport-button--run-active");
    profileFormButtonRun.classList.toggle("profile-form__transport-button--run-inactive");
  });
  for (let i = 0; i < routeChooseButton.length; i++) {
    routeChooseButton[i].addEventListener("click", function() {
      routeChooseButton[i].classList.toggle("route__choose-button--dropdown-closed");
      routeChooseButton[i].classList.toggle("route__choose-button--dropdown-opened");
      routeItem[i].classList.toggle("route__item--dropdown-opened");
      routeItem[i].classList.toggle("route__item--dropdown-closed");
      routeRemove[i].classList.toggle("route__remove--dropdown-opened");
      routeRemove[i].classList.toggle("route__remove--dropdown-closed");
      routeDropdown[i].classList.toggle("route__dropdown--dropdown-opened");
      routeDropdown[i].classList.toggle("route__dropdown--dropdown-closed");
      routeCloseDropdown[i].classList.add("route__close-dropdown--dropdown-opened");
      routeFlag[i].classList.toggle("route__flag--dropdown-opened");
      routeFlag[i].classList.toggle("route__flag--dropdown-closed");
    });
    routeCloseDropdown[i].addEventListener("click", function() {
      routeChooseButton[i].classList.toggle("route__choose-button--dropdown-closed");
      routeChooseButton[i].classList.toggle("route__choose-button--dropdown-opened");
      routeItem[i].classList.toggle("route__item--dropdown-opened");
      routeItem[i].classList.toggle("route__item--dropdown-closed");
      routeRemove[i].classList.toggle("route__remove--dropdown-opened");
      routeRemove[i].classList.toggle("route__remove--dropdown-closed");
      routeDropdown[i].classList.toggle("route__dropdown--dropdown-opened");
      routeDropdown[i].classList.toggle("route__dropdown--dropdown-closed");
      routeCloseDropdown[i].classList.remove("route__close-dropdown--dropdown-opened");
      routeFlag[i].classList.toggle("route__flag--dropdown-opened");
      routeFlag[i].classList.toggle("route__flag--dropdown-closed");
    });
  }
  for (let i = 0; i < myPlansChange.length; i++) {
    myPlansChange[i].addEventListener("click", function(evt) {
      evt.preventDefault();
    });
  }
  entertainmentSubmit.addEventListener("click", function(evt) {
    evt.preventDefault();
  });
}

if (pageBody.classList.contains("page__body--catalog")) {
  filteringToggle.addEventListener("click", function() {
    filteringToggle.classList.toggle("filtering__toggle--opened");
    filteringDropdown.classList.toggle("filtering__dropdown--opened");
    filteringContinents.classList.toggle("filtering__continents--opened");
    filteringToggleSpanShow.classList.toggle("filtering__toggle-span-show--opened");
    filteringToggleSpanClose.classList.toggle("filtering__toggle-span-close--opened");
  });
  filteringDropdownButton.addEventListener("click", function() {
    filteringToggle.classList.toggle("filtering__toggle--opened");
    filteringDropdown.classList.toggle("filtering__dropdown--opened");
    filteringContinents.classList.toggle("filtering__continents--opened");
    filteringToggleSpanShow.classList.toggle("filtering__toggle-span-show--opened");
    filteringToggleSpanClose.classList.toggle("filtering__toggle-span-close--opened");
  });
  filtering.classList.remove("filtering--nojs");
  for (let i = 0; i < filterToggle.length; i++) {
    filterToggle[i].addEventListener("click", function() {
      filterList[i].classList.toggle("filter__list--opened");
      filterToggle[i].classList.toggle("filter__toggle--opened");
    });
  }
  for (let i = 0; i < filterTransbutton.length; i++) {
    filterTransbutton[i].addEventListener("click", function() {
      if (filterTransbutton[i].classList.contains("filter__transbutton--plane"))
        filterTransbutton[i].classList.toggle("filter__transbutton--plane-active")
      if (filterTransbutton[i].classList.contains("filter__transbutton--bus"))
        filterTransbutton[i].classList.toggle("filter__transbutton--bus-active")
      if (filterTransbutton[i].classList.contains("filter__transbutton--bicycle"))
        filterTransbutton[i].classList.toggle("filter__transbutton--bicycle-active")
      if (filterTransbutton[i].classList.contains("filter__transbutton--run"))
        filterTransbutton[i].classList.toggle("filter__transbutton--run-active")
    });
  }
  filterSubmit.addEventListener("click", function(evt) {
    evt.preventDefault();
  });
  for (let i = 0; i < travellersImageLink.length; i++) {
    travellersImageLink[i].addEventListener("click", function(evt) {
      evt.preventDefault();
    });
  }
  for (let i = 0; i < travellersLink.length; i++) {
    travellersLink[i].addEventListener("click", function(evt) {
      evt.preventDefault();
    });
  }
  if (window.matchMedia('(min-width: 1380px)').matches) {
    filteringDropdown.classList.add("filtering__dropdown--opened");
    filteringToggle.classList.add("filtering__toggle--opened");
    filteringToggleSpanShow.classList.toggle("filtering__toggle-span-show--opened");
    filteringToggleSpanClose.classList.toggle("filtering__toggle-span-close--opened");
  }
}
