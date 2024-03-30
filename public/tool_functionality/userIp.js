const IpText = document.querySelector("#ip-text");

console.log(IpText);

async function checkWebsiteStatus() {
  try {
    const apiData = await fetch("http://localhost:8080/tool/getip", {
      mode: "no-cors",
    });
    const data = await apiData.text();
    IpText.innerHTML = data;
  } catch (error) {
    console.log(error.message);
  }
}

window.onload = checkWebsiteStatus();
