function Ride_Function() { //Uses ternary operation
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() { //Uses ternary operation
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) { //A constructor that uses "new" and "this"
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("New_and_This").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function Country(Continent, Capital, Size) { //A constructor that uses "new" and "this" plus a function to display the constructor in the HTML element
    this.Contry_Continent = Continent;
    this.Country_Capital = Capital;
    this.Country_Size = Size;
  }
  var Colombia = new Country("South America", "Bogotá", 440800);
  var Ecuador = new Country("South America", "Quito", 109483);
  var Venezuela = new Vehicle("South America", "Caracas", 353841);
  function myFunction_2() {
      document.getElementById("Colombia").innerHTML =
      "Colombia is in " + Colombia.Contry_Continent + ". Its capital is " + Colombia.Country_Capital +
      ". It is " + Colombia.Country_Size + " squares miles in size.";
  }

var x = null //A variable assigned to the value of a reserved word
document.write(x);

function count_Function() { //A nested function
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 10;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}