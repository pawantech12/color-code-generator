let outputcolor = document.querySelector("#output-color span");
let output = document.getElementById("output");
let genbtn = document.getElementById("gen-btn")
let copybtn = document.getElementById("copy-btn")

let HexString = "0123456789abcdef";
// function for generating hexcode 
let genHexcode = () => {
    let hexcode = "#";
    for (let i = 0; i < 6; i++) {
        hexcode += HexString[Math.floor(Math.random()*16)];
        
    }
    output.value = hexcode;
    outputcolor.classList.remove("show-color");
    setTimeout(() => {
        outputcolor.classList.add("show-color");
    },10)
    outputcolor.style.backgroundColor = hexcode;
}
//  logic for copy functionality
copybtn.addEventListener("click",() => {
    output.select();
    document.execCommand("copy");
})
// regenerating hexcode when window loads
window.onload = genHexcode;
genbtn.addEventListener("click",genHexcode);