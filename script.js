function saatGoster(city) {
    console.log(city);
	var saat = document.getElementById("saatKutu");
	saat.innerText = new Date().toLocaleString("en-US", {timeZone: city});
    
}

function onClick(cityID) {
    city = cityID;
    console.log(cityID);
    console.log(typeof(cityID));
    saatGoster(city);
}


const Tokyo = document.getElementById("Asia/Tokyo");
Tokyo.addEventListener('click', function(){ onClick(Tokyo.id); });

const Istanbul = document.getElementById("Europe/istanbul");
Istanbul.addEventListener('click', function(){ onClick(Istanbul.id); });

const NewYork = document.getElementById("America/New_York");
NewYork.addEventListener('click', function(){ onClick(NewYork.id); });

const London = document.getElementById("Europe/London");
London.addEventListener('click', function(){ onClick(London.id); });

var city = "America/New_York";

saatGoster(city);
setInterval("saatGoster(city)", 1000);