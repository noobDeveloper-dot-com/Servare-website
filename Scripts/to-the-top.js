const TTTBUTTON = document.querySelector("[data-to-the-top-button]");

const PIXELS = 200;

TTTBUTTON.addEventListener("click", scrollTop);

window.onscroll = () => {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > PIXELS ||
    document.documentElement.scrollTop > PIXELS
  ) {
    TTTBUTTON.classList.add("visible");
  } else {
    TTTBUTTON.classList.remove("visible");
  }
}

function scrollTop(event) {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
