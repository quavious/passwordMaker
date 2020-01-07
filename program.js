const button = document.getElementById("jsButton");
const cpButton = document.getElementById("jsCpButton");
const todayDate = document.getElementById("jsDate");
const cpTextarea = document.getElementById("jsTextarea");

const specialCharList = "!@-_=+$%^&*~";

function addSmallChar(string) {
    let addOne = Math.floor(Math.random()*35) + 97;
    return string + String.fromCharCode(addOne);
}

function addLargeChar(string) {
    let addOne = Math.floor(Math.random()*35) + 65;
    return string + String.fromCharCode(addOne);
}

function addNumber(string) {
    let addOne = Math.floor(Math.random()*9) + 48;
    return string + String.fromCharCode(addOne);
}

function addSpecialChar(string) {
    let addOne = Math.floor(Math.random()*11);
    return string + specialCharList.charAt(addOne);
}



function returnRandom() {
    let makeStyle = Math.floor(Math.random()*4);
    return makeStyle;
}

function makePassword(number) {
    let password = "";
    var i = 0;
    while(i < number) {
        makeStyle = returnRandom();
        if (makeStyle == 0) {
            password = addSmallChar(password);
        }
        else if (makeStyle == 1) {
            password = addLargeChar(password);
        }
        else if (makeStyle == 2) {
            password = addNumber(password);
        }
        else if (makeStyle == 3) {
            password = addSpecialChar(password);
        }
        else {
            i = i - 1;
        }
        i = i + 1;
    }
    document.getElementById("p-result").innerHTML = password;
    console.log(document.getElementById("p-result"));
}

cpButton.addEventListener("click", function(){
    var text = document.getElementById("p-result");
    
    text.select();
    cpButton.innerHTML = "copied!"
    cpButton.style.background = "red";
    document.execCommand("copy");
    alert("Password Copied!");
});

function inputNumber() {
    var number = document.getElementById("jsNumber").value;
    
    button.addEventListener("click", function() {
        makePassword(number);
        cpButton.innerHTML = "copy!";
        cpButton.style.background = "aqua";
    });
}

const today = Date(Date.now());
todayDate.innerHTML = today;