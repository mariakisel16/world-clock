setInterval(function () {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesTime = moment().tz("America/Los_Angeles");
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>] A [</small>]"
    );
  }
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkTime = moment().tz("America/New_York");
    let newYorkDateElement = newYorkElement.querySelector(".date");
    newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    newYorkTimeElement.innerHTML = newYorkTime.format(
      "h:mm:ss [<small>] A [</small>]"
    );
  }
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisTime = moment().tz("Europe/Paris");
    let parisDateElement = parisElement.querySelector(".date");
    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    let parisTimeElement = parisElement.querySelector(".time");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>] A [</small>]"
    );
  }
}, 1000);

function updateCity(event) {
  setInterval(function () {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");

    citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
      "A"
    )}</small></div>
  </div>
  <br/>
  <a href = "index.html">All cities</a>
  `;
  }, 1000);
}

//updateCity();
let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
