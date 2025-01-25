export const createFormElement = (tag, attributes, parent) => {
  const element = document.createElement(tag);
  Object.entries(attributes).forEach(([key, value]) => {
    element[key] = value;
  });
  parent.appendChild(element);
  return element;
};
