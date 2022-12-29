const header = document.querySelector("header");
const fontIncreaseBtn = header.querySelector("#font-size .increase");
const fontDecreaseBtn = header.querySelector("#font-size .decrease");
const fontSizeEl = header.querySelector("#font-size .size");
const lineHeightEl = header.querySelector("#line-height .size");
const lineHeightIncreaseBtn = header.querySelector("#line-height .increase");
const lineHeightDecreaseBtn = header.querySelector("#line-height .decrease");

const el = document.querySelector("main");
fontSizeEl.textContent = window
  .getComputedStyle(el, null)
  .getPropertyValue("font-size");
lineHeightEl.textContent = window
  .getComputedStyle(el, null)
  .getPropertyValue("line-height");

fontIncreaseBtn.addEventListener("click", (e) => {
  const style = window.getComputedStyle(el, null).getPropertyValue("font-size");
  const fontSize = parseFloat(style);
  if (e.shiftKey) {
    el.style.fontSize = fontSize + 10 + "px";
  } else {
    el.style.fontSize = fontSize + 1 + "px";
  }
  fontSizeEl.textContent = el.style.fontSize;
});

fontDecreaseBtn.addEventListener("click", (e) => {
  const el = document.querySelector("main");
  const style = window.getComputedStyle(el, null).getPropertyValue("font-size");
  const fontSize = parseFloat(style);
  if (e.shiftKey) {
    el.style.fontSize = fontSize - 10 + "px";
  } else {
    el.style.fontSize = fontSize - 1 + "px";
  }
  fontSizeEl.textContent = el.style.fontSize;
});

lineHeightIncreaseBtn.addEventListener("click", (e) => {
  const el = document.querySelector("main");
  const style = window
    .getComputedStyle(el, null)
    .getPropertyValue("line-height");
  const lineHeight = parseFloat(style);
  if (e.shiftKey) {
    el.style.lineHeight = lineHeight + 10 + "px";
  } else {
    el.style.lineHeight = lineHeight + 1 + "px";
  }
  lineHeightEl.textContent = el.style.lineHeight;
});

lineHeightDecreaseBtn.addEventListener("click", (e) => {
  const el = document.querySelector("main");
  const style = window
    .getComputedStyle(el, null)
    .getPropertyValue("line-height");
  const lineHeight = parseFloat(style);
  if (e.shiftKey) {
    el.style.lineHeight = lineHeight - 10 + "px";
  } else {
    el.style.lineHeight = lineHeight - 1 + "px";
  }
  lineHeightEl.textContent = el.style.lineHeight;
});
