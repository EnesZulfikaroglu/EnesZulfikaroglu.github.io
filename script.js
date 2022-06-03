function saatGoster(city) {
  var sehir = document.getElementById("sehirKutu");
  sehir.innerText = city.split("/")[1].replace("_", " ").toUpperCase();

  var saat = document.getElementById("saatKutu");
  var clockText = new Date()
    .toLocaleString("en-US", { timeZone: city })
    .split(",")[1];

  if (clockText.split(" ")[2] == "PM") {
    var clockTextTemp = String(Number(clockText.split(":")[0].trim()) + 12);
    clockText = clockText.slice(clockText.indexOf(":"));
    clockText = clockTextTemp.concat(clockText);
  }

  clockText = clockText.trim().slice(0, -3);

  if (clockText.split(":")[0].length == 1) {
    clockText = "0" + clockText;
  }

  //console.log(clockText);
  //saat.innerText = clockText;

  var myHeaders = new Headers();
  var subCity = city.split("/")[1].split("_")[0];
  var myArray;
  var date;
  var day;
  var desc;

  myHeaders.append(
    "authorization",
    "apikey 0VOSPMVy5l0pRsYNzuUrtD:07IDLdPgjEX8SIyxq8Bqyt" // this change your api key because limited request for free
  );

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    `https://api.collectapi.com/weather/getWeather?data.lang=en&data.city=${subCity}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => (myArray = JSON.parse(result)))
    .then((result) => console.log(myArray.result[0]))
    .then((result) => (date = myArray.result[0].date))
    .then((result) => (day = myArray.result[0].day))
    .then((result) => (desc = myArray.result[0].description))
    .then((result) => console.log(day + date + desc))
    .then(
      (result) =>
        (saat.innerText = date + "\n" + day + "\n" + clockText + "\n" + desc)
    );
}

function onClick(cityID) {
  city = cityID;
  console.log(cityID);
  saatGoster(city);
}

var city = "Europe/Istanbul";

const Tokyo = document.getElementById("Asia/Tokyo");
Tokyo.addEventListener("click", function () {
  onClick(Tokyo.id);
});

const Istanbul = document.getElementById("Europe/Istanbul");
Istanbul.addEventListener("click", function () {
  onClick(Istanbul.id);
});

const NewYork = document.getElementById("America/New_York");
NewYork.addEventListener("click", function () {
  onClick(NewYork.id);
});

const London = document.getElementById("Europe/London");
London.addEventListener("click", function () {
  onClick(London.id);
});

saatGoster(city);
setInterval("saatGoster(city)", 1000);
