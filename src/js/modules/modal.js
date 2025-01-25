export function setupModal() {
  const modal = document.createElement("div");
  modal.className = "modal";

  const modalContent = document.createElement("div");
  modalContent.className = "modal-content";

  const closeButton = document.createElement("span");
  closeButton.className = "close-button";
  closeButton.textContent = "X";

  const modalText = document.createElement("p");
  modalText.textContent = "This is a modal window!";

  modalContent.append(closeButton, modalText);
  modal.appendChild(modalContent);

  const openButton = document.createElement("button");
  openButton.id = "open-modal";
  openButton.className = "modal-button";
  openButton.textContent = "Open Modal";

  document.body.append(modal, openButton);

  openButton.addEventListener("click", () => {
    showModal("Thank you for checking my task!");
  });

  closeButton.addEventListener("click", () => {
    modal.classList.remove("show");
    document.body.style.overflow = "";
  });
}
export function showModal(message) {
  const modal = document.querySelector(".modal");
  const modalText = modal ? modal.querySelector("p") : null;

  if (modal && modalText) {
    modalText.textContent = message;
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
  }
}
