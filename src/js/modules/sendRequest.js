import { showModal } from "./modal";
import { showLoader, hideLoader } from "./loader";

export function sendRequest(formElement) {
  const formData = new FormData(formElement);
  const loader = showLoader(formElement);

  const fakeFetch = new Promise((resolve) => {
    setTimeout(() => {
      const fakeResponse = {
        status: "success",
        msg: "Thank you for your feedback",
      };

      resolve(new Response(JSON.stringify(fakeResponse)));
    }, 2000);
  });

  fakeFetch
    .then((response) => response.json())
    .then((data) => {
      hideLoader(loader);

      if (data.status === "success") {
        showModal(data.msg);
        formElement.reset();
      } else if (data.status === "error") {
        handleErrors(data.fields, formElement);
      }
    })
    .catch((error) => {
      console.error("Error on message submitting:", error);
      hideLoader(loader);
    });
}

function handleErrors(fields, formElement) {
  Object.keys(fields).forEach((field) => {
    const input = formElement.querySelector(`#${field}`);

    if (input) {
      const errorElement = document.createElement("div");
      errorElement.textContent = fields[field];
      errorElement.classList.add("error-message");
      input.after(errorElement);
      input.classList.add("error");
    }
  });
}
