import { sendRequest } from "./sendRequest.js";


export function validateForm(event, form) {
  event.preventDefault();
  
  const errors = {};
  const formData = new FormData(form);

  if (!formData.get("name")) {
    errors.name = "Name is required.";
  }
  if (!/\S+@\S+\.\S+/.test(formData.get("email"))) {
    errors.email = "Invalid email.";
  }
  if (!formData.get("phone")) {
    errors.phone = "Phone is required.";
  }
  if (!formData.get("message")) {
    errors.message = "Message is required.";
  }

  Object.keys(errors).forEach((field) => {
    const input = form.querySelector(`#${field}`);
    const errorElement = document.createElement("div");
    errorElement.textContent = errors[field];
    errorElement.classList.add("error");
    input.after(errorElement);
    input.classList.add("error-message");
  });

  if (Object.keys(errors).length === 0) {
    sendRequest(form);
  }
}
