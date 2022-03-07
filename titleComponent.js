import { createElement } from "./element.js";
export function createTitleComponent() {
  const createTitleComponent = createElement("h1", {
    textcontent: "Mood & Meme",
    className: "title",
  });

  return createTitleComponent;
}

console.log("Hello World");

h1{
    font-family: 'Roboto', sans-serif;
  }
  
  h2 {
    font: italic small-caps normal 13px/150% 'Kalam', cursive;
  }


let = document.createElement("ul", { is: "expanding-list" });
