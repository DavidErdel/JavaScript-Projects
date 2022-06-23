function counting_To_Ten() { //Uses a while loop
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}


function text_length() { //Uses string length property
    let text = "Supercalifragilisticexpialidocious";
    let length = text.length;
    document.getElementById("Length").innerHTML = length;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; //Uses a for loop 
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}
 
function cat_pics() { //Uses an array
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2]  + ".";
}

function constant_function() { //Uses the const keyword
    const Musical_Instrument = {type: "guitar", brand: "Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}


function let_function() { //Uses the let keyword
    let Z = 2343;
    document.getElementById("Let").innerHTML = (Z);
}