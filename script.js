const door1 = document.querySelector(".door1")
const door2 = document.querySelector(".door2")
const door3 = document.querySelector(".door3")
const door4 = document.querySelector(".door4")

let toggle = false; 

door3.addEventListener("click", ()=>{
    if(!toggle){
        door3.src = "./images/doorReal.png"
        toggle=true; 
    }else{
        toggle = false; 
        door3.src = "./images/doors.png"
    }
    
})