const btn = document.querySelector(".converter");

const result = document.querySelector(".result");
function converter() {
  const text = document.querySelector("#text").value;
  result.value = btoa(text);
}

function copy() {
  result.select();
  result.setSelectionRange(0, 9999);
  document.execCommand("copy");
}

result.addEventListener("click", copy);

btn.addEventListener("click", converter);
