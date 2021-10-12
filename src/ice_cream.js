const ice = document.querySelector(".hero-info__picture")
const girl = document.querySelector(".hero-counter__image")
setTimeout(() =>{
    leto()
},1000);

function leto(){
    ice.classList.add("prili-leto")
    girl.classList.add("prili-girl")
}