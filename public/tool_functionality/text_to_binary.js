const btn = document.querySelector(".converter");

function convert() {
  const input = document.querySelector("#input").value;

  if (input.length <= 0) {
    alert("please enter text.");
  }
  const arr = input.split("");
  let binary = "";
  arr.forEach((item) => {
    return (binary += item.charCodeAt(0).toString(2));
  });
  document.querySelector(".result").innerHTML = binary;
}

btn.addEventListener("click", convert);
