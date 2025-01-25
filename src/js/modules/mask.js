import IMask from "imask";

export function setupMask(selector) {
  const phoneInput = document.querySelector(selector);
  if (phoneInput) {
    IMask(phoneInput, {
      mask: "+{7}(000)000-00-00",
    });
  }
}
