function init() {
    // hello world paspausta
    const clickOnMeButton = document.getElementById("alert-me-button");
    clickOnMeButton.addEventListener("click", () => { alert("Hello World!") });

    //pakeisti registra
    let registerButtons = [
        "button-to-upper-case",
        "button-to-lower-case",
        "button-first-upper-case",
        "button-first-lower-case"
    ];

    let registerInputElement = document.getElementById("register-input");

    for (let i = 0; i < registerButtons.length; i++) {
        const buttonName = registerButtons[i];
        let button = document.getElementById(buttonName);
        button.addEventListener("click", () => { changeCase(registerInputElement, button.value) })
    }

    //form input patikrinimas
    let emailInput = document.getElementById("inputEmail");
    let emailWarning = document.getElementById("inputEmailError");

    let phoneInput = document.getElementById("inputPhone");
    let phoneWarning = document.getElementById("inputPhoneError");

    let saveButton = document.getElementById("save-button");
    saveButton.addEventListener("click", ()=>{
        let isValid = true;
        removeAllMistakes();
        if (!checkMistake(emailInput)) {
            markMistake(emailInput, emailWarning);
            isValid = false;
        }
        if(!checkMistake(phoneInput)){
            markMistake(phoneInput, phoneWarning);
            isValid = false;
        }
    });

    //block input
    let inputToBlock = document.getElementById("input-to-block");
    let blockInputButton = document.getElementById("button-block");
    let unblockInputButton = document.getElementById("button-unblock");
    blockInputButton.addEventListener("click", ()=>{
        inputToBlock.disabled = true;
    });
    unblockInputButton.addEventListener("click", ()=>{
        inputToBlock.disabled = false;
    })

    // monky
    let imageElement = document.getElementById("image-to-change");
    imageElement.addEventListener("mouseover",()=>{
        imageElement.src = "https://i.imgur.com/0DElr0H.jpg";
    });
    imageElement.addEventListener("mouseout",()=>{
        imageElement.src = "https://i.imgur.com/PLDVxza.jpg";
    });


    //pakeisti formata ir pan
    let myFigure = document.getElementById("my-figure");

    let borderList = document.getElementById("border-list");
    [...borderList.children].forEach(element => {
        
        element.firstChild.addEventListener("click",()=>{
            changeBorder(element.firstChild.value, myFigure);
        })
    });

    let colorsList = document.getElementById("colors-list");
    [...colorsList.children].forEach(element => {
        
        element.firstChild.addEventListener("click",()=>{
            changeColor(element.firstChild.value, myFigure);
        })
    });

    let cursorsList = document.getElementById("cursors-list");
    [...cursorsList.children].forEach(element => {
        
        element.firstChild.addEventListener("click",()=>{
            changeCursor(element.firstChild.value);
        })
    });

    let resetAllButton = document.getElementById("reset-all-button");
    resetAllButton.addEventListener("click",()=>{
        resetAllFormatting(myFigure);
    });
}

function changeCursor(cursor){
    document.querySelector("body").style.cursor = cursor;
}

function resetAllFormatting(element){
    element.style.border = "";
    element.style.color = "black";
    document.querySelector("body").style.cursor = "auto";
}

function changeBorder(color, element){
    element.style.border = "1px solid " + color;
}

function changeColor(color, element){
    element.style.color = color;
}

function changeCase(inputElement, action) {
    let inputValue = inputElement.value;
    let result = "";
    switch (action) {
        case "all-upper":
            result = inputValue.toUpperCase();
            break;
        case "all-lower":
            result = inputValue.toLowerCase();
            break;
        case "first-upper":
            result = inputValue[0].toUpperCase() + inputValue.slice(1);
            break;
        case "first-lower":
            result = inputValue[0].toLowerCase() + inputValue.slice(1);
            break;
        default:
            console.log("error");
            break;
    }
    inputElement.value = result;
}

function checkMistake(elementToCheck){
    if(!elementToCheck.value){
        return false;
    }
    if(elementToCheck.value.length < 2){
        return false;
    }
    return true;
}

function markMistake(elementToMark, warningToMark){
    elementToMark.classList.add("border-danger");
    warningToMark.removeAttribute("hidden");
}

function removeAllMistakes(){
    let myMistakes = document.querySelectorAll(".my-form .border-danger");
    myMistakes.forEach(element => {
        element.classList.remove("border-danger");
    });

    let myWarnings = document.querySelectorAll(".my-form .text-danger");
    myWarnings.forEach(element => {
        element.hidden = true;
    });
}



init();