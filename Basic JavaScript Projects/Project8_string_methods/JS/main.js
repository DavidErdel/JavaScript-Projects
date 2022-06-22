function full_Sentence() { //This function uses the concat() method
    var part_1 = "I have made this into ";
    var part_2 = "a complete sentence.";
    var whole_sentence = part_1.concat(part_2);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() { //This function uses the slice() method
    var Sentence = "I hate it when I leave characters out of my code!";
    var Section = Sentence.slice(10,48)
    document.getElementById("Slice").innerHTML = Section;
}

function go_UpperCase() { //This function uses the uppercase() method
    let text = "upper case";
    let result = text.toUpperCase();
    document.getElementById("UpperCase").innerHTML = result;
}

function find_position() { //This function uses the search() method
    let text = "What position is THIS word in?";
    let position = text.search("THIS");
    document.getElementById("Search").innerHTML = position;
}

function string_Method() { //This function uses the string() method
    var X = 2435;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() { //This function uses the precision() method
    var X = 23.434009343009;
    document.getElementById("Precision").innerHTML = X.toPrecision(5);
}

function to_fixed() { //This function uses the toFixed() method
    let num = 2356.8573
    let n = num.toFixed(2);
    document.getElementById("Rounded").innerHTML = n;
}

function primitive_value() { //This function uses the valueOf() method
    let text = new String("Hello World!");
    let result = text.valueOf();
    document.getElementById("Value").innerHTML = result;
}