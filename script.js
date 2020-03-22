// Write a function that takes user input and creates a password
// based on that input and returns it

function generatePassword() {

    // WHEN I click the button to generate a password
    // THEN I am presented with a series of prompts for password criteria
    // WHEN prompted for password criteria
    // THEN I select which criteria to include in the password
    // WHEN prompted for the length of the password
    var passwordLength = parseInt(prompt("How long is the password?"));
    var password = "";

    // THEN I choose a length of at least 8 characters and no more than 128 characters
    if (isNaN(passwordLength)) {

        alert("It must be between 8 and 128")

        generatePassword.call();

    }
    else if (passwordLength < 8) {

        alert("It must be between 8 and 128")
        generatePassword.call();

    }
    else if (passwordLength > 128) {

        alert("It must be between 8 and 128")
        generatePassword.call();

    }

    // WHEN prompted for character types to include in the password
    // THEN I choose lowercase, uppercase, numeric, and/or special characters

    var lowerCase = confirm("Lowercase?");
    var upperCase = confirm("Uppercase?");
    var numberPrompt = confirm("Numbers?");
    var specialCaracter = confirm("Special Caracters?");
    var includedOptions = [];

    console.log(passwordLength); console.log(lowerCase); console.log(upperCase); console.log(numberPrompt); console.log(specialCaracter);

    // WHEN I answer each prompt
    // THEN my input should be validated and at least one character type should be selected

    if (lowerCase || upperCase || numberPrompt || specialCaracter) {

        alert("Password accepted")

    } 
    else {
        // if the elements in the array are all false, then the alert comes up and the function is reseted
        
        alert("You must select an input type");
        generatePassword.call();
      

    }


    if (lowerCase) {
        includedOptions.push(getRandomLower)
        // call getrandomlower, push it to the result string
    };

    if (upperCase) {
        includedOptions.push(getRandomUpper)
    };

    if (numberPrompt) {
        includedOptions.push(getRandomNumber)
    };

    if (specialCaracter) {
        includedOptions.push(getRandomSymbol)
    };

    console.log(includedOptions);

    for (i = 0; i < passwordLength; i++) {

        // get random number between 0 and the length of the array
        var randomNumber = Math.floor(Math.random() * includedOptions.length);

        //variable that adds the randomly generated character to the includedOptions array
        var newChar = includedOptions[randomNumber]();

        // add the new character to the result string
        password = password + newChar;
    }




    // push the password to the page
    //make sure we get one of ecah type in our password
    // for (i = 0; i < includedOptions.length; i++) {
    //     var guaranteedCharacter =  includedOptions[i]();
    //     console.log(guaranteedCharacter);
    //     var oldChar = newPassword[i];
    //     console.log(newPassword[i]);
    //     newPassword.replace(oldChar, guaranteedCharacter);
    //     console.log(newPassword);
    // }






    // WHEN all prompts are answered
    // THEN a password is generated that matches the selected criteria



    // WHEN the password is generated
    // THEN the password is either displayed in an alert or written to the page

    // alert(password);
    // console.log(password)
    return password;
}



function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);

}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);

}

function getRandomNumber() {

    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    var symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];

}


//////////////////////////////////////////////////////////////
// DO NOT TOUCH THE CODE BELOW
//////////////////////////////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
