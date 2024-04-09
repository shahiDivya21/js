let incrementField = document.querySelector('#increment_value')
let addBtn = document.querySelector("#add");
let subBtn = document.querySelector("#subtract");
let resetBtn = document.getElementById("reset");
let counterNumber = document.getElementById('number')
let incrementNum = 1;

incrementField.addEventListener('change', function(e){
    incrementNum = parseInt(e.target.value)
})

addBtn.addEventListener("click", function(){
    let total = parseInt(counterNumber.innerText) + incrementNum;
    counterNumber.innerText = total;
})

subBtn.addEventListener('click', function(){
    let total  = parseInt(counterNumber.innerText) - incrementNum;
    total = (total<0 ? total = 0 : parseInt(counterNumber.innerText) - incrementNum);
    counterNumber.innerText = total;
})

resetBtn.addEventListener('click', function(){
    counterNumber.innerText = 0;
})

