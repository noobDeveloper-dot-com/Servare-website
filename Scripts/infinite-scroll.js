const FIRST_ROW_SCROLLER = document.querySelector(".first__row");
const SECOND_ROW_SCROLLER = document.querySelector(".second__row");
const THIRD_ROW_SCROLLER = document.querySelector(".third__row");

function duplicateElements() {
  const DUPLICATED_F_R_ARR = Array.from(FIRST_ROW_SCROLLER.children);

  DUPLICATED_F_R_ARR.forEach((element) => {
    const duplicatedItem = element.cloneNode(true);
    FIRST_ROW_SCROLLER.appendChild(duplicatedItem);
  });

  const DUPLICATED_S_R_ARR = Array.from(SECOND_ROW_SCROLLER.children);

  DUPLICATED_S_R_ARR.forEach((element) => {
    const duplicatedItem = element.cloneNode(true);
    SECOND_ROW_SCROLLER.appendChild(duplicatedItem);
  });

  const DUPLICATED_T_R_ARR = Array.from(THIRD_ROW_SCROLLER.children);

  DUPLICATED_T_R_ARR.forEach((element) => {
    const duplicatedItem = element.cloneNode(true);
    THIRD_ROW_SCROLLER.appendChild(duplicatedItem);
  });
}

duplicateElements();
