const HAMBURGER_BTN = document.querySelector("#hamburgerBtn");
const MOBILE_NAVIGATION = document.querySelector(
  ".mobile-navigation_and_dropDownBtn"
);

HAMBURGER_BTN.addEventListener("click", () => {
  MOBILE_NAVIGATION.classList.toggle("view");
});

document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]");

  const dropDownMenus = document.querySelectorAll("[data-dropDownMenu].active");

  dropDownMenus.forEach((ddm) => {
    ddm.classList.remove("active");
  });

  if (isDropdownButton) {
    const currentDropDownMenu = e.target
      .closest("[data-dropdown]")
      .querySelector("[data-dropDownMenu]");
    currentDropDownMenu.classList.toggle("active");
  }
});

export { MOBILE_NAVIGATION };
