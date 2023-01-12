setInterval(function () {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>] A [</small>]"
  );

  let newYorkElement = document.querySelector("#new-york");
  let newYorkTime = moment().tz("America/New_York");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  newYorkTimeElement.innerHTML = newYorkTime.format(
    "h:mm:ss [<small>] A [</small>]"
  );
}, 1000);
