function saatGoster() {
	var saat = document.getElementById("saatKutu");
	let time = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
    
    saat.innerText = time;
    
}


saatGoster();
setInterval("saatGoster()", 1000);

console.log(time);