function My_Function() {  //This function uses getElementById
    var str = "This is the button text!", second_variable = "This is the second variable!";
    document.getElementById("Button_Tx").innerHTML = str;
}

function My_Function_2() { //This function uses getElementById and the += operator
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
}
