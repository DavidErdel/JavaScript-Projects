var X = 10; //Asigns a global variable
function Add_numbers_1() {
    document.write(20 + X);
}
function Add_numbers_2() { //Assigns a global variable
    document.write(X + 100);
}
Add_numbers_1 ();

document.write("<br>") //I added a break here to make the page easier to read

Add_numbers_2 ();

document.write("<br>") //I added a break here to make the page easier to read

function Add_numbers_3() { //Assigns a local variable
    var Y = 10;
    document.write(20 + Y);
    console.log(15 + Y)
}
function Add_numbers_4() { //This line contains an error and uses the console.log() method for debugging
    console.log(Y +100);
}
Add_numbers_3 ();

document.write("<br>") //I added a break here to make the page easier to read

Add_numbers_4 ();

function get_Date() { // Uses Date().getHours()
    if (new Date().getHours() < 12) {
    document.getElementById("Greeting").innerHTML = "Good morning!";
    }
}

document.write("<br>")

function myFunction() { //This function includes an if statement
    if (3<4) { 
    document.getElementById("Three_and_Four").innerHTML = "Yes! ";
    }
}

function Age_Function() { //This function uses else
    Age = document.getElementById("Age").value;
    if (Age > 14) {
        Permit = "You are old enough to get your learner's permit!";
    }
    else {
        Permit = "You are NOT old enough to get your learner's permit!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Permit;
}

function Time_Function() { // This function uses else if
    var Time = new Date().getHours();
    var Reply;
    if(Time < 12 == Time > 0) {
        Reply = "It's morning!";
    }
    else if(Time >= 12 == Time < 18) {
        Reply = "It's afternoon!"
    }
    else {
        Reply = "It's evening!"
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}