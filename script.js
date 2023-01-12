const progress = document.querySelector(".progress-done");
const progressValue = document.querySelector("h1");
const input = document.querySelector(".input");
const maxInput = document.querySelector(".maxInput");
let finalValue = 0;
let max = 0;

function changeWidth(){
    progress.style.width = `${(finalValue / max)*100}%`;
    progressValue.innerHTML = `${Math.ceil((finalValue / max)*10000)}$`;
}


input.addEventListener("keyup", function(){
    finalValue = parseInt(input.value, 10);
    changeWidth();
});

maxInput.addEventListener("keyup", function() {
    max = parseInt(maxInput.value, 10);
});







