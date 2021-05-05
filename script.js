function saatGoster(city) {
	var saat = document.getElementById("saatKutu");
	var sehir = document.getElementById("sehirKutu");
	saat.innerText = new Date().toLocaleString("en-US", {timeZone: city}).split(",")[1];
	sehir.innerText = city.split("/")[1];
    
}

function onClick(cityID) {
    city = cityID;
    console.log(cityID);
    console.log(typeof(cityID));
    saatGoster(city);
}

var city = "Europe/Istanbul";

const Tokyo = document.getElementById("Asia/Tokyo");
Tokyo.addEventListener('click', function(){ onClick(Tokyo.id); });

const Istanbul = document.getElementById("Europe/Istanbul");
Istanbul.addEventListener('click', function(){ onClick(Istanbul.id); });

const NewYork = document.getElementById("America/New_York");
NewYork.addEventListener('click', function(){ onClick(NewYork.id); });

const London = document.getElementById("Europe/London");
London.addEventListener('click', function(){ onClick(London.id); });

saatGoster(city);
setInterval("saatGoster(city)", 1000);