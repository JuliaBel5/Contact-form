import { sendRequest } from "./sendRequest.js";

export function validateForm(event, form) {
  event.preventDefault();

  const existingErrors = form.querySelectorAll(".error-message");
  existingErrors.forEach((error) => error.remove());
  const existingErrorInputs = form.querySelectorAll(".error");
  existingErrorInputs.forEach((input) => input.classList.remove("error"));

  const errors = {};
  const formData = new FormData(form);

  if (!formData.get("name")) {
    errors.name = "Name is required.";
  } else if (!/^[A-ZА-Я]/.test(formData.get("name"))) {
    errors.name = "Your name should start with a capital letter.";
  }

  const email = formData.get("email");
  if (!email) {
    errors.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "Invalid email.";
  }

  const phone = formData.get("phone");
  if (!phone) {
    errors.phone = "Phone is required.";
  } else if (!/^\+375\(\d{2}\)\d{3}-\d{2}-\d{2}$/.test(phone)) {
    errors.phone =
      "Invalid phone number format. Expected format: +375(12)345-67-89";
  }
  if (!formData.get("message")) {
    errors.message = "Message is required.";
  } else if (!/^[A-ZА-Я]/.test(formData.get("message"))) {
    errors.message = "Message should start with a capital letter.";
  }

  Object.keys(errors).forEach((field) => {
    const input = form.querySelector(`#${field}`);
    const errorElement = document.createElement("div");
    errorElement.textContent = errors[field];
    errorElement.classList.add("error-message");
    input.after(errorElement);
    input.classList.add("error");
  });

  if (Object.keys(errors).length === 0) {
    sendRequest(form);
  }
}
