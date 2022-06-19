function addition_Function() { //This function uses the + operator
    var addition = 2 + 2;
    document.getElementById("Addition").innerHTML = addition;
}

function subtraction_Function() { //This function uses the - operator
    var subtraction = 5 - 2;
    document.getElementById("Subtraction").innerHTML = subtraction;
}

function multiplication_Function() { //This function uses the * operator
    var multiplication = 6 * 8;
    document.getElementById("Multiplication").innerHTML = multiplication;
}

function division_Function() { //This function uses the / operator
    var division = 48 / 6;
    document.getElementById("Division").innerHTML = division;
}

function multiple_operators() { //This function uses multiple operators //
    var multiple_operators = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Multiple Operators").innerHTML = multiple_operators;
}

function modulus_operators () { //This function uses the % operator
    var modulus_operator = 25 % 6;
    document.getElementById("Modulus Operators").innerHTML = modulus_operator;
}

function negation_operator () { //This function uses the negation operator
    var x = 10;
    document.getElementById("Negation Operator").innerHTML = -x;
}

function increment_operator () { //This function uses the increment operator
    var x = 5;
    x++;
    document.getElementById("Increment Operator").innerHTML = x;
}

function decrement_operator () { //This function uses the decrement operator
    var x = 5;
    x--;
    document.getElementById("Decrement Operator").innerHTML = x;
}

function random_number () { //This function uses Math.random
    x = (Math.random() * 100)
    document.getElementById("Random Number").innerHTML = x;
}

function PI () { //This function uses a Math object (PI!)
    x = (Math.PI)
    document.getElementById("PI").innerHTML = x;
}