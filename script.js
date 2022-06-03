console.log("Hello World");
let increaseBtn = document.querySelector('.increment');
let decreaseBtn = document.querySelector('.decrement');
let currentNumber = document.querySelector('.currentNumber');
let count = 0;
increaseBtn.addEventListener("click",function(e){
    count++;
    console.log("Clicked on increment button")
    currentNumber.textContent = count;
    if(count > 0){
        currentNumber.style.color = "green";
    }
    
})
decreaseBtn.addEventListener("click",function(e){
    console.log("Clicked on decreemnt button")
    count--;
    currentNumber.textContent = count;
    if(count < 0){
        currentNumber.style.color = "red";
    }
})