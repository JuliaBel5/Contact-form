import { createFormElement } from "../utils/createFormElement";

export function renderForm(container) {
  const formContainer = document.createElement("div");
  formContainer.className = "form-container";

  const heading = document.createElement("h1");
  heading.textContent = "Contact Form";

  const form = document.createElement("form");
  form.id = "contact-form";

  createFormElement("label", { htmlFor: "name", textContent: "Name" }, form);
  const input = createFormElement(
    "input",
    {
      type: "text",
      placeholder: "Enter your name",
      id: "name",
      name: "name",
    },
    form
  );
  input.setAttribute("maxlength", "30");
  createFormElement("label", { htmlFor: "email", textContent: "E-mail" }, form);
  createFormElement(
    "input",
    {
      type: "email",
      id: "email",
      placeholder: "Enter your e-mail address",
      name: "email",
    },
    form
  );

  createFormElement("label", { htmlFor: "phone", textContent: "Phone" }, form);
  createFormElement(
    "input",
    {
      type: "text",
      id: "phone",
      name: "phone",
      placeholder: "+375(12)123-55-67",
    },
    form
  );

  createFormElement(
    "label",
    { htmlFor: "message", textContent: "Message" },
    form
  );
  const textarea = createFormElement(
    "textarea",
    {
      id: "message",
      placeholder: "Type here your message (max 300 char.)",
      name: "message",
    },
    form
  );

  textarea.setAttribute("maxlength", "300");

  const counter = createFormElement(
    "div",
    {
      textContent: `Characters left: 300`,
      className: "counter",
    },
    form
  );

  function updateCounter(textarea, counter) {
    const maxLength = textarea.getAttribute("maxlength");
    const remaining = maxLength - textarea.value.length;
    counter.textContent = `Characters left: ${remaining}`;

    if (remaining <= 10) {
      counter.style.color = "red";
    } else {
      counter.style.color = "#777";
    }
  }

  textarea.addEventListener("input", () => {
    updateCounter(textarea, counter);
  });

  const submitButton = createFormElement(
    "button",
    { type: "submit", textContent: "Submit" },
    form
  );
  submitButton.className = "submit-button";

  formContainer.append(heading);
  formContainer.append(form);
  container.append(formContainer);
}
