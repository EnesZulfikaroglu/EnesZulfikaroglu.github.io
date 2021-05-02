function saatGoster() {
	var saat = document.getElementById("saatKutu");
	saat.innerText = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
    
}


saatGoster();
setInterval("saatGoster()", 1000);

console.log(time);