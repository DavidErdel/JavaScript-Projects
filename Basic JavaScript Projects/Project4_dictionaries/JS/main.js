function my_Dictionary() { //This function creates a dictionary containing information about Michael Jordan
    var Jordan = {
        College: "North Carolina",
        NBA_Team: "Chicago Bulls",
        Position: "Shooting Guard",
        Number: 23,
        Retirement_year: 2003
        };
        delete Jordan.Retirement_year; //This deletes the Retirement_year KVP
document.getElementById("Dictionary").innerHTML = Jordan.Retirement_year;
}