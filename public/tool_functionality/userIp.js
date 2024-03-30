const IpText = document.querySelector("#ip-text");

async function checkWebsiteStatus() {
  try {
    const apiData = await fetch("http://localhost:3000/getip", {
      mode: "no-cors",
    });
    const data = await apiData.text();
    IpText.innerHTML = data;
  } catch (error) {
    console.log(error.message);
  }
}

checkWebsiteStatus();
