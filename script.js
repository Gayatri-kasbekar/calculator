function clearResult() {
    document.getElementById("result").value = "";
}

function appendNumber(number) {
    document.getElementById("result").value += number;
}

function appendOperator(operator) {
    var currentResult = document.getElementById("result").value;
    if (currentResult !== "" && !isNaN(currentResult[currentResult.length - 1])) {
        document.getElementById("result").value += operator;
    }
}

function calculate() {
    var result = eval(document.getElementById("result").value);
    document.getElementById("result").value = result;
}

function deleteCharacter(){
    var result = document.getElementById("result");
    var value = result.value;
    result.value = value.substring(0, value.length - 1);
}

function addBrackets() {
    var result = document.getElementById("result");
    var startPos = result.selectionStart;
    var endPos = result.selectionEnd;
    var value = result.value;
    var newValue = value.substring(0, startPos) + '(' + value.substring(startPos, endPos) + ')' + value.substring(endPos);
    result.value = newValue;
    result.setSelectionRange(endPos + 2, endPos + 2);
    result.focus();
}


