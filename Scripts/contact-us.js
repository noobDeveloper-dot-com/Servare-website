const CONTACT_US_BTN = document.querySelector(".contact_us");
const CONTACT_US_WRAPPER = document.querySelector(".contact_us_modal_wrapper");
const CLOSE_BTN = document.querySelector(".close-btn");

CONTACT_US_BTN.addEventListener("click", () => {
  CONTACT_US_WRAPPER.classList.toggle("view");
});

CLOSE_BTN.addEventListener("click", () => {
  CONTACT_US_WRAPPER.classList.remove("view");
});

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const contactData = new FormData(event.target);

  const data = Object.fromEntries(contactData);

  fetch("https://formspree.io/f/mjvnbenz", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(data).toString(),
  })
    .then((response) => response.text())
    .then((data) => {
      console.log(data, "success");
    })
    .catch((error) => console.error("Error:", error));
});
