const btn = document.querySelector(".converter");

function converter(color) {
  const hex = Number(color).toString(16);
  return hex;
}

function rgbToHex() {
  const red = document.querySelector("#input-red").value;
  const green = document.querySelector("#input-green").value;
  const blue = document.querySelector("#input-blue").value;

  if (red.lenth == 0 || green.length == 0 || blue.length == 0) {
    alert("one of rgb is empty");
  } else {
    const hex = "#" + converter(red) + converter(green) + converter(blue);

    document.querySelector(".result").innerHTML = hex;
  }
}

btn.addEventListener("click", rgbToHex);
