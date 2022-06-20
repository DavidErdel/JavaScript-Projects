document.write(typeof "word"); //Uses the typeof operator

document.write(" ") //Creates a space between word and 246

document.write("24" + 6); //Uses type coercion

document.write(" ") //Creates a space between 246 and Eleven 11

document.write("Eleven ", 11); //Writes an expression combining a string and a number

function my_Function() { //Displays NaN
    document.getElementById("Test").innerHTML = 0/0
}

function my_Function_2() { //Uses NaN to display "true"
    document.getElementById("True").innerHTML = isNaN("This is a string");
}

function my_Function_3() { //Uses NaN to display "false"
    document.getElementById("False").innerHTML = isNaN("077");
}

function my_Function_4() {  //Displays "Infinity"
    var x = 2E310
    document.getElementById("Infinity").innerHTML = x;
}

function my_Function_5() { //Displays "-Infinity"
    var x = -3E310
    document.getElementById("Negative Infinity").innerHTML = x;
}

function my_Function_6() { //Uses Boolean logic to display "true"
    var x = (10>2)
    document.getElementById("Boolean Truth").innerHTML = x;
}

function my_Function_7() { //Uses Boolean logic to display "false"
    var x = (10<2)
    document.getElementById("Boolean Falsity").innerHTML = x;
}

console.log(2+2); //Displays 4 in the console

console.log(10<2); //Uses Boolean logic to display "false" in the console

function my_Function_8() { //Uses the == operator to display "true"
    var x = (10==10)
    document.getElementById("Double Equals Truth").innerHTML = x;
}

function my_Function_9() { //Uses the == operator to display "false"
    var x = (10==2)
    document.getElementById("Double Equals Falsity").innerHTML = x;
}

function my_Function_10() { //Uses the === operator to display "true"
    x = 10
    y = 10
    document.getElementById("Triple Equals Truth").innerHTML = x===y;
}

function my_Function_11() { //Uses the === operator to display "false"
    x = 10
    y = "Eleven"
    document.getElementById("Triple Equals Falsity").innerHTML = x===y;
}

function my_Function_12() { //Uses the === operator to display "false"
    x = 10
    y = "Ten"
    document.getElementById("Triple Equals Falsity 2").innerHTML = x===y;
}

function my_Function_13() { //Uses the === operator to display "false"
    x = 10
    y = 11
    document.getElementById("Triple Equals Falsity 3").innerHTML = x===y;
}

function my_Function_14() { //Uses the AND operator to display "true"
    document.getElementById("AND Truth").innerHTML = (5>2 && 5>1);
}

function my_Function_15() { //Uses the AND operator to display "false"
    document.getElementById("AND Falsity").innerHTML = (5>2 && 5<1);
}

function my_Function_16() { //Uses the OR operator to display "true"
    document.getElementById("OR Truth").innerHTML = (5>2 || 5<1);
}

function my_Function_17() { //Uses the OR operator to display "false"
    document.getElementById("OR Falsity").innerHTML = (5<2 || 5<1);
}

function my_Function_18() { //Uses the NOT operator to display "true"
    document.getElementById("NOT Truth").innerHTML = !(5<2);
}

function my_Function_19() { //Uses the NOT operator to display "false"
    document.getElementById("NOT Falsity").innerHTML = !(5>2);
}