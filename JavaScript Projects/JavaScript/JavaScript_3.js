function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " plays for the " + character.innerHTML + " football team!");
}