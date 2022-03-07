import { createTitleComponent } from "./titleComponent.js";
const titleComponent = createTitleComponent();
document.body.append(titleComponent);

const button = document.querySelector(".add");
button.addEventListener("click", function () {
  const p = document.createElement("p");
  p.setAttribute("id", "text");
  p.innerText = document.getElementById("area").value;
  document.getElementsByClassName("text")[0].appendChild(p);
});

const p = document.createElement("Mood and Memo");
