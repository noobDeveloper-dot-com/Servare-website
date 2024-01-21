import mixpanel from "mixpanel-browser";
mixpanel.init("ccf64edc855dce8c3e284af8b91acb98");

document.addEventListener("click", function (event) {
  var elementClicked = event.target.id;

  console.log(elementClicked, event.target);

  mixpanel.track("Element clicked", { element: elementClicked });
});
