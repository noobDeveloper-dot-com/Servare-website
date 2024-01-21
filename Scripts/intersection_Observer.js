const observer = new IntersectionObserver(viewSections);

document.querySelectorAll("[data-observe-section]").forEach((section) => {
  observer.observe(section);
});

function viewSections(elements) {
  elements.forEach((element) => {
    if (element.isIntersecting) {
      element.target.classList.add("display");
    } else {
      element.target.classList.remove("display");
    }
  });
}
