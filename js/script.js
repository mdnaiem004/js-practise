//showimg
function showImg(){
    document.getElementById('siii').src="images/web.jpg";
}
//showimg
function showImg(){
    document.getElementById('siii').src="images/naiem.jpg";
}





//bulb on/off
function bulbon(){
    document.getElementById('img').src="images/pic_bulbon.gif";
}
function bulboff(){
    document.getElementById('img').src="images/pic_bulboff.gif";
}







//show text








function showText(){
    document.getElementById('st').innerHTML="Hello there";
}
//show date
function showDate(){
    document.getElementById('sd').innerHTML=Date();
}
// change text 
function changeText(){
    document.getElementById('ct').innerHTML="Hello world";
}



// change the color of the text 
function changeColor(){
    document.getElementById('cc').style.color="red";
}



const div= document.getElementById("myDiv");
div.addEventListener("contextmenu", (e)=>{e.preventDefault()});

// show your name when clicking a button
function showName(){
    document.getElementById("output").innerHTML="mdAlamin";
}
// show a random number between 1 and 100
function showRandomNumber(){
    document.getElementById("output").innerText=Math.floor(Math.random()*100)+1;
}
// change the background color of the page
function changeBgColor(){
    document.body.style.backgroundColor="#"+Math.floor(Math.random()*16777215).toString(16);
}
// Show the sum of two numbers
function sumNumbers() {
    let a = 5, b = 10;
    document.getElementById("output").innerText = `Sum: ${a + b}`;
}

// multiply two numbers
function multiplyNumbers(){
    let a=4, b=3;
    document.getElementById("output").innerText=`Product:${a*b}`;
}
// swap two numbers
function swapNumbers(){
    let a=5, b=10;
    [a, b]=[b,a];
    document.getElementById("output").innerText=`Swapped:a=${a}, b=${b}`;
}
// show a short quote
function showQuote(){
    let quotes=["Belive in yourself!", "Never give up!", "practice more learn more!","Stay positive!"];
    document.getElementById("output").innerText=quotes[Math.floor(Math.random()*quotes.length)];
}
// reverse the text of a paragraph when clicking a button
function reverseText() {
    let para = document.getElementById("reversePara");
    para.innerText = para.innerText.split("").reverse().join("");
}

// change the font size of a paragraph when clicking a button
function changeFontSize() {
    let para = document.getElementById("fontPara");
    para.style.fontSize = (para.style.fontSize === "20px") ? "14px" : "20px";
}

// make the text bold when clicking a button
function makeBold() {
    let para = document.getElementById("boldPara");
    para.style.fontWeight = (para.style.fontWeight === "bold") ? "normal" : "bold";
}
