const inputEl = document.querySelector("#font-size-control");

const textEl = document.querySelector("#text");

inputEl.addEventListener("input", fontSizeChange);

function fontSizeChange(event) {
  text.style.fontSize = `${event.target.value}px`;
}
