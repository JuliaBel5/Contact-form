import { showModal } from "./modal";

export function sendRequest(formElement) {
  formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(formElement);

    const fakeFetch = new Promise((resolve) => {
      setTimeout(() => {
        const fakeResponse = {
          status: "success",
          msg: "Thank you for your feedback",
        };

        resolve(new Response(JSON.stringify(fakeResponse)));
      }, 500);
    });

    fakeFetch
      .then((response) => response.json())
      .then((data) => {
        clearErrors(formElement);

        if (data.status === "success") {
          showModal(data.msg);
          formElement.reset();
        } else if (data.status === "error") {
          handleErrors(data.fields, formElement);
        }
      })
      .catch((error) => {
        console.error("Error on message submitting:", error);
      });
  });
}

function clearErrors(formElement) {
  const errorElements = formElement.querySelectorAll(".error");
  errorElements.forEach((errorElement) => errorElement.remove());

  const errorBorders = formElement.querySelectorAll(".error-message");
  errorBorders.forEach((input) => input.classList.remove("error-message"));
}

function handleErrors(fields, formElement) {
  Object.keys(fields).forEach((field) => {
    const input = formElement.querySelector(`#${field}`);

    if (input) {
      const errorElement = document.createElement("div");
      errorElement.textContent = fields[field];
      errorElement.classList.add("error");
      input.after(errorElement);
      input.classList.add("error-message");
    }
  });
}
