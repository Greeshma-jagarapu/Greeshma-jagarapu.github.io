let bars = document.querySelector('.bars');


bars.addEventListener("click", () => {
   document.querySelector('.side-bar').style.transform = "translateX(0)";
})

document.querySelector('.close-btn').addEventListener("click",() => {
    document.querySelector('.side-bar').style.transform = "translateX(-100%)";
})