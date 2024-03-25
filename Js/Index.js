//function dropdwon() {
//let ham = document.getElementById("ber").style.marginbottom = "0%";
//let op = document.querySelector(".op").style.opacity = "0";
//  console.log("hello")
//}

let berger = document.querySelector(".barger")
let op = document.querySelector(".op")
let nav = document.getElementById("nav")
let ber = document.querySelector("ber")


berger.addEventListener('click',()=>{
    
     ber.classList.toggle("barger");
     nav.classList.toggle("op");
})