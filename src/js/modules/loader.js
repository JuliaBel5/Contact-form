export function showLoader(formElement) {
  const loader = document.createElement("div");
  loader.className = "loader";
  for (let i = 1; i <= 12; i++) {
    const bar = document.createElement("div");
    bar.className = `bar${i}`;
    loader.appendChild(bar);
  }

  formElement.append(loader);
  return loader;
}

export function hideLoader(loader) {
  if (loader) {
    loader.remove();
  }
}
