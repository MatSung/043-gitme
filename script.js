let myButton = document.getElementById("my-button");

let firstInput = document.getElementById("input-1");
let secondInput = document.getElementById("input-2");

myButton.addEventListener("click",() => {
    secondInput.value = firstInput.value;
    firstInput.value = "";
});

