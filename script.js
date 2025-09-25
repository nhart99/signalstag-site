// Tiny sprinkles; no framework.

// Current year in footer
document.addEventListener("DOMContentLoaded", () => {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Enable newsletter button if a provider embed exists
  const btn = document.getElementById("updates-submit");
  if (btn) {
    const hasProvider = !!document.querySelector("[data-brevo-form], script[src*='sibforms.com'], iframe[src*='mlsend.com'], iframe[src*='buttondown']");
    if (hasProvider) {
      btn.disabled = false;
      btn.removeAttribute("aria-disabled");
      btn.title = "Get Updates";
    }
  }

  // Client-side validation for fallback form (replace with Brevo embed later)
  const updatesForm = document.getElementById("updates-form");
  updatesForm?.addEventListener("submit", (e) => {
    if (updatesForm.querySelector(".hp")?.value) {
      e.preventDefault(); // honeypot trip
      alert("Submission blocked.");
    } else if (!updatesForm.email?.value) {
      e.preventDefault();
      alert("Please enter your email.");
    } else {
      e.preventDefault();
      alert("Replace this form with your provider embed per README.");
    }
  });
});
