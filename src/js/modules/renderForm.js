import { createFormElement } from "../utils/createFormElement";

export function renderForm(container) {
  const formContainer = document.createElement("div");
  formContainer.className = "form-container";

  const heading = document.createElement("h1");
  heading.textContent = "Contact Form";

  const form = document.createElement("form");
  form.id = "contact-form";

  createFormElement("label", { htmlFor: "name", textContent: "Name" }, form);
  createFormElement(
    "input",
    {
      type: "text",
      placeholder: "Enter your name",
      id: "name",
      name: "name",
      required: true,
    },
    form
  );

  createFormElement("label", { htmlFor: "email", textContent: "Email" }, form);
  createFormElement(
    "input",
    {
      type: "email",
      id: "email",
      placeholder: "Enter your e-mail address",
      name: "email",
      required: true,
    },
    form
  );

  const pattern = "^\\+?\\(?\\d{1,4}\\)?[-\\s\\d]*$";
  createFormElement("label", { htmlFor: "phone", textContent: "Phone" }, form);
  createFormElement(
    "input",
    {
      type: "text",
      placeholder: "+{7}(000)000-00-00",
      id: "phone",
      name: "phone",
      pattern: pattern,
      required: true,
    },
    form
  );

  createFormElement(
    "label",
    { htmlFor: "message", textContent: "Message" },
    form
  );
  createFormElement(
    "textarea",
    {
      id: "message",
      placeholder: "Type here your message",
      name: "message",
      required: true,
    },
    form
  );

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
