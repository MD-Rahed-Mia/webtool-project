const btn = document.querySelector(".rgb-converter");
const hexCode = document.getElementById("hex");

function hex2rgb() {
  var hex_color = document.querySelector("#hex").value,
    rgb_color = document.querySelector(".rgb-converter"),
    pattern_color = "^#([A-Fa-f0-9]{6})$";
  const rgbResult = document.querySelector(".rgb-result");
  if (hex_color.match(pattern_color)) {
    var hex_color = hex_color.replace("#", ""),
      r = parseInt(hex_color.substring(0, 2), 16),
      g = parseInt(hex_color.substring(2, 4), 16),
      b = parseInt(hex_color.substring(4, 6), 16);

    rgbResult.innerHTML = rgb_color.value =
      "rgb(" + r + "," + g + "," + b + ")";
    return (rgb_color.value = "rgb(" + r + "," + g + "," + b + ")");
  } else {
    alert("Error Color Format");
  }
}

btn.addEventListener("click", hex2rgb);
