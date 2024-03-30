const result = document.querySelector("#user-agent-text");

async function userAgent() {
  // try {
  //   const apiData = await fetch(
  //     `${window.location.protocol}//${window.location.host}/api/user-agent`,
  //     {
  //       mode: "no-cors",
  //     }
  //   );
  //   // const data = await apiData.text();
  //   console.log(apiData);
  //   result.innerHTML = apiData;
  // } catch (error) {
  //   console.log(error.message);
  // }

  result.innerHTML = navigator.userAgent;
}

userAgent();
