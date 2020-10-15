let l = document.createElement("div");
const textClass = "Loading_text";
l.className = textClass;

document.body.appendChild(l);

let txt = document.querySelector(".Loading_text");
let text = "Welcome";
text.split("").forEach((letter) => {
  l.innerHTML += `<span class = "letter" style="opacity:0;">${letter}</span>`;
});
setTimeout(() => {
  txt.style =
    "opacity: 0; transition-duration: 500ms;transition-timing-function: linear;";
}, 3000);
