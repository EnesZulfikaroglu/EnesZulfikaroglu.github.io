function onClick1() {

    const kutu = document.getElementById("about");

    console.log("Merhaba\n")
    if(kutu.style.display == 'block')
    {
        kutu.style.display = 'none'
        console.log("\n1")
    }
    else
    {
        kutu.style.display = 'block'
        console.log("\n2")
    }


}

function onClick2() {

    const kutu = document.getElementById("idea");

    console.log("Merhaba\n")
    if(kutu.style.display == 'block')
    {
        kutu.style.display = 'none'
        console.log("\n1")
    }
    else
    {
        kutu.style.display = 'block'
        console.log("\n2")
    }
}

const button1 = document.getElementById("button1");
button1.addEventListener('click', onClick1);

const button2 = document.getElementById("button2");
button2.addEventListener('click', onClick2);