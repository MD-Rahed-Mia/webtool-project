const IpText = document.querySelector("#ip-text");

async function checkWebsiteStatus() {
  try {
    const apiData = await fetch(
      `${window.location.protocol}//${window.location.host}/getip`,
      {
        mode: "no-cors",
      }
    );
    const data = await apiData.text();
    IpText.innerHTML = data;
  } catch (error) {
    console.log(error.message);
  }
}

checkWebsiteStatus();
