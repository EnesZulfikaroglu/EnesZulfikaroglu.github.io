function onClick1() {

    const kutu = document.getElementById("links1");

    console.log("Merhaba\n")
    if(kutu.style.display == 'inline-block')
    {
        kutu.style.display = 'none'
        console.log("\n1")
    }
    else
    {
        kutu.style.display = 'inline-block'
        console.log("\n2")
    }


}
function onClick2() {

    const kutu = document.getElementById("links2");

    console.log("Merhaba\n")
    if(kutu.style.display == 'inline-block')
    {
        kutu.style.display = 'none'
        console.log("\n1")
    }
    else
    {
        kutu.style.display = 'inline-block'
        console.log("\n2")
    }


}
function onClick3() {

    const kutu = document.getElementById("links3");

    console.log("Merhaba\n")
    if(kutu.style.display == 'inline-block')
    {
        kutu.style.display = 'none'
        console.log("\n1")
    }
    else
    {
        kutu.style.display = 'inline-block'
        console.log("\n2")
    }


}
function onClick4() {

    const kutu = document.getElementById("links4");

    console.log("Merhaba\n")
    if(kutu.style.display == 'inline-block')
    {
        kutu.style.display = 'none'
        console.log("\n1")
    }
    else
    {
        kutu.style.display = 'inline-block'
        console.log("\n2")
    }


}
const button1 = document.getElementById("button1");
button1.addEventListener('click', onClick1);
const button2 = document.getElementById("button2");
button2.addEventListener('click', onClick2);
const button3 = document.getElementById("button3");
button3.addEventListener('click', onClick3);
const button4 = document.getElementById("button4");
button4.addEventListener('click', onClick4);
