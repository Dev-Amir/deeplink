const form = document.querySelector("form");
const username = document.getElementById("username");
const app = document.getElementById("app");
const linkElement = document.getElementById("linkElement");
const deviceNameH1 = document.getElementById("deviceNameH1");
const urlValue = document.getElementById("url-value");

const instagramPattern = /^instagram.com\/.../;

username.addEventListener('input', () => {
    username.classList.remove("is-invalid", "is-invalid");
    
    if (instagramPattern.test(username.value)) {
        username.classList.add("is-valid")
    }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!instagramPattern.test(username.value)) {
    username.classList.add("is-invalid")
    return;
  }

  app.classList.remove("d-none");

  const device = getMobileOperatingSystem();
  switch (device) {
    case "Android":
      deviceNameH1.innerText = "Android device";
      break;

    case "iOS":
      deviceNameH1.innerText = "iOS device";
      break;

    default:
      deviceNameH1.innerText = "web device";
      break;
  }

  const resultURl = instagramDeepLink(username.value, device);

  linkElement.href = resultURl;
  linkElement.target = "_blank";
  urlValue.innerText = resultURl;
});
