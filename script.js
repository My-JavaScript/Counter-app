const countDisplay = document.getElementById('countLabel');
const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const increaseBtn = document.getElementById('increaseBtn');

let count = 0;

increaseBtn.onclick = function() {
    count++;
    countDisplay.textContent = count;
}

decreaseBtn.onclick = function() {
    count--;
    countDisplay.textContent = count;
}

resetBtn.onclick = function() {
    count = 0;
    countDisplay.textContent = count;
}