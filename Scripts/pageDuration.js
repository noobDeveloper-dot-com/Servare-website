import mixpanel from "mixpanel-browser";
mixpanel.init("ccf64edc855dce8c3e284af8b91acb98");

// Call this function whenever the page changes
export default function trackTimeSpent(page_name) {
  mixpanel.track("Current Page", {
    "Page Name": page_name,
  });
}
