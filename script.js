function saatGoster(city) {
    var sehir = document.getElementById("sehirKutu");
	sehir.innerText = city.split("/")[1].replace("_"," ").toUpperCase();

	var saat = document.getElementById("saatKutu");
	var clockText = new Date().toLocaleString("en-US", {timeZone: city}).split(",")[1];

    if(clockText.split(" ")[2] == "PM")
    {
        clockText = String(Number(clockText.slice(0,2))+12) + clockText.slice(2,-3);
    }
    else
    {
        clockText = clockText.slice(0,-3);
    }
    saat.innerText = clockText;
    
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