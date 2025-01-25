import { renderForm } from "./modules/renderForm.js";
import { setupModal } from "./modules/modal.js";
import { validateForm } from "./modules/validation.js";
import { setupMask } from "./modules/mask.js";
import "../styles/main.scss";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  renderForm(root);
  setupMask("#phone");
  setupModal();

  const form = document.getElementById("contact-form");
  form.addEventListener("submit", (e) => {
    validateForm(e, form);
  });
});
