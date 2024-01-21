import { MOBILE_NAVIGATION } from "./navigation";
import trackTimeSpent from "./pageDuration";

function remove_Mobile_Navigation() {
  MOBILE_NAVIGATION.classList.remove("view");
}

function removePages() {
  document.querySelectorAll(".page").forEach((p) => {
    p.classList.remove("viewPage");
  });
}

const LOGO = document.querySelector("#main-logo");

LOGO.addEventListener("click", () => {
  removePages();

  const SELECTED_PAGE = document.querySelector(LOGO.dataset.switchTo);

  const PAGE_NOT_AVAILABLE = document.querySelector(".page-not-available");

  if (SELECTED_PAGE) {
    SELECTED_PAGE.classList.add("viewPage");
    PAGE_NOT_AVAILABLE.classList.remove("viewPage");

    remove_Mobile_Navigation();

    trackTimeSpent(SELECTED_PAGE.id);
    window.scrollTo(0, 0);

    return;
  }

  PAGE_NOT_AVAILABLE.classList.add("viewPage");
});

const SUB_MENU = document.querySelectorAll("#sub_menu");

SUB_MENU.forEach((sm) => {
  sm.addEventListener("click", (event) => {
    removePages();

    const SELECTED_PAGE = document.querySelector(event.target.dataset.switchTo);

    const PAGE_NOT_AVAILABLE = document.querySelector(".page-not-available");

    if (SELECTED_PAGE) {
      SELECTED_PAGE.classList.add("viewPage");
      PAGE_NOT_AVAILABLE.classList.remove("viewPage");

      remove_Mobile_Navigation();

      // console.log(SELECTED_PAGE.id);

      trackTimeSpent(SELECTED_PAGE.id);
      window.scrollTo(0, 0);

      return;
    }

    PAGE_NOT_AVAILABLE.classList.add("viewPage");
    remove_Mobile_Navigation();
  });
});
