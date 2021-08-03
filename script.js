function getHistory() {
    return document.getElementById("history").innerText;
}

function printHistory(num) {
    document.getElementById("history").innerText = num;
}

function getOutput() {
    return document.getElementById("output").innerText;
}

function printOutput(num) {
    document.getElementById("output").innerText = num;
}

function inputNumbers(num) {
    var output = getOutput();

    if (output == '0') {
        if (num == '.') {
            num = output + num;
        }
        else {
            num = num;
        }
    }
    else if (num == '.') {
        var decimal = output.split('');
        var count = 0;
        num = output + num;

        for (var i = 0; i < decimal.length; i++) {
            if (decimal[i] == '.') {
                count += 1;
                if (count > 0) {
                    num = output + '';
                }
                else {
                    num = output + num;
                }
            }
        }
    }
    else {
        num = output + num;
    }

    printOutput(num);
}

function clearScr() {
    printHistory('');
    printOutput('0');
}

function backSpace() {
    var value = getOutput();
    if (value == '0') {
        value = value;
    }
    else {
        value = value.substr(0, value.length - 1);
        if (value.length == 0) {
            value = '0';
        }
    }

    printOutput(value);
}


function operator(opr) {
    var output = getOutput();
    var history = getHistory();
    var history2 = getHistory();

    history = output + ' ' + opr;

    printHistory(history);


    if (history2 == '') {
        history2 = 0;
        var res = 0;
    }
    else {
        output = parseFloat(output);
        var operator = history2.split('');
        operator = operator[operator.length - 1];
        history2 = parseFloat(history2);

        if (opr == '%') {
            var res = (history2 / output) * 100;
            printHistory(res + '%');
        }
        else if (operator == 'x' && opr != '=' && opr != '%') {
            var res = history2 * output;
            printHistory(res + ' ' + opr);
        }
        else if (operator == '/' && opr != '=' && opr != '%') {
            var res = history2 / output;
            printHistory(res + ' ' + opr);
        }
        else if (operator == '+' && opr != '=' && opr != '%') {
            var res = history2 + output;
            printHistory(res + ' ' + opr);
        }
        else if (operator == '-' && opr != '=' && opr != '%') {
            var res = history2 - output;
            printHistory(res + ' ' + opr);
        }
        else if (opr == '=' && operator != '=') {
            res = equals(output, history2, operator);
            printHistory(res);
        }
    }

    printOutput(0);
}


function equals(output, history2, operator) {

    if (operator == 'x') {
        var res = history2 * output;
    }
    else if (operator == '/') {
        var res = history2 / output;
    }
    else if (operator == '+') {
        var res = history2 + output;
    }
    else if (operator == '-') {
        var res = history2 - output;
    }
    else {
        res = '0 =';
    }

    return res;
}
