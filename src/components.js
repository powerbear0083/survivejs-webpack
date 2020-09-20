export default (text = "Hello world XX") => {
    const element = document.createElement("div");
    element.innerHTML = text;
    return element;
  };