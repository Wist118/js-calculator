let prevVal = "";
let newVal = "";
let resultVal = "";
let mathOperator = "";
let decimalClicked = false;
let storedMemoryVal = "";

function numberButtonPress(num) {
    if(resultVal) {
        newVal = num;
        resultVal = ""

    } else {
        if(num === '.') {
            if(decimalClicked != true) {
                newVal += num;
                decimalClicked = true;
            }
        } else {
            newVal += num;
        }
    }
    document.getElementById("entry").value = newVal;
}

function mathButtonPress(operator) {
    if(!resultVal) {
        prevVal = newVal;
    } else {
        prevVal = resultVal;
    }
    newVal = "";
    decimalClicked = false;
    mathOperator = operator;
    resultVal = "";
    document.getElementById("entry").value = "";
}

function equalButtonPress(num) {
    decimalClicked = false;
    prevVal = parseFloat(prevVal);
    newVal = parseFloat(newVal);

    switch(mathOperator) {

        case "+":
            resultVal = prevVal + newVal;
            break;
        case "-":
            resultVal = prevVal - newVal;
            break;
        case "*":
            resultVal = prevVal * newVal;
            break;
        case "/":
            resultVal = prevVal / newVal;
            break;
        default:
            resultVal = newVal;
    }

    prevVal = resultVal
    document.getElementById("entry").value = resultVal;
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
    if(storedMemoryVal) {
        document.getElementById("entry").value = storedMemoryVal;
        newVal = storedMemoryVal;
    }
}