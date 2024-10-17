const scriptURL =
  "https://script.google.com/macros/s/AKfycbyWN_jOgk8jvig83yJgO_lvMHQJHmMswg0kdVbufPhYX21Kf0XwqOe5or0iJWnXr8Cd6Q/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
        console.log("Fom submitted successfully:", response)
      msg.innerHTML = "Thank You For Subscribing!";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);

      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
