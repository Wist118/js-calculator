let prevVal = "";
let newVal = "";
let resultVal = "";
let mathOperator = "";
let decimalClicked = false;
let storedMemoryVal = "";

function numberButtonPress(num) {

}

function mathButtonPress(operator) {
    
}

function equalButtonPress(num) {
    
}

function clearButtonPress() {
    prevVal = "";
    newVal = "";
    resultVal = "";
    mathOperator = "";
    decimalClicked = false;
    document.getElementById("entry").value = "0";
}

function copyButtonPress(num) {
    storedMemoryVal = document.getElementById("entry").value;
}

function pasteButtonPress(num) {
    
}