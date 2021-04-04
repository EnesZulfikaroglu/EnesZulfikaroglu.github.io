function onClick() {

    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    const button3 = document.getElementById("button3");

    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    button1.style.backgroundColor = (r,g,b);
    button2.style.backgroundColor = (r,g,b);
    button3.style.backgroundColor = (r,g,b);

    console.log("R: ",r," G: ",g," B: ",b);



}

const button = document.getElementById("button3");
button.addEventListener('click', onClick);