// Assignment Code
/// Declared global variables
let input;
let randomNumber;
let randomCharacter;
let RandomUppercase;
let randomLowercase;

// declared arrays with characters, number and letters
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "=", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
ABC = [];
let makeUpperCase = function (toUp) {
    return toUp.toUpperCase();
};
abc2 = abc.map(makeUpperCase);

let $generateBtn = document.querySelector("#generate");
$generateBtn.addEventListener("click", function () {
    let password;
    password = generatePassword();
    document.getElementById("password").placeholder = password;
});

let choices;
function generatePassword() {
    input = parseInt(prompt("How many characters would you like your password to have? Choose between 8 and 128"));
    if (!input) {
    alert("Choose a number between 8 and 128.");
    } else if (input < 8 || input > 128) {
    input = parseInt(prompt("Re enter your number\nYour number must be between 8 and 128!"));
    } else {
    randomNumber = confirm("Do you want your password to contain numbers? Select okay if yes, or cancel if not.");
    randomCharacter = confirm("Do you want your password to contain special characters? Select okay if yes, or cancel if not.");
    RandomUppercase = confirm("Do you want your password to contain Uppercase letters? Select okay if yes, or cancel if not.");
    randomLowercase = confirm("Do you want your password contain lowercase letters? Select okay if yes, or cancel if not.");
    }

    if (!randomCharacter && !randomNumber && !RandomUppercase && !randomLowercase) {
    choices = confirm(`Try Again!`);
    if (choices === true){
        return generatePassword();
    } else  if (choices === false){
        return input = "Try again";
    }
    }
    else if (randomCharacter && randomNumber && RandomUppercase && randomLowercase) {

    choices = character.concat(number, abc, abc2);
}
    else if (randomCharacter && randomNumber && RandomUppercase) {
    choices = character.concat(number, abc2);
    }
    else if (randomCharacter && randomNumber && randomLowercase) {
    choices = character.concat(number, abc);
    }
    else if (randomCharacter && randomLowercase && RandomUppercase) {
    choices = character.concat(abc, abc2);
    }
    else if (randomNumber && randomLowercase && RandomUppercase) {
    choices = number.concat(abc, abc2);
    }

    else if (randomCharacter && randomNumber) {
    choices = character.concat(number);

    } else if (randomCharacter && randomLowercase) {
    choices = character.concat(abc);

    } else if (randomCharacter && RandomUppercase) {
    choices = character.concat(abc2);
    }
    else if (randomLowercase && randomNumber) {
    choices = abc.concat(number);

    } else if (randomLowercase && RandomUppercase) {
    choices = abc.concat(abc2);

    } else if (randomNumber && RandomUppercase) {
    choices = number.concat(abc2);
    }
    else if (randomCharacter) {
    choices = character;
    }
    else if (randomNumber) {
    choices = number;
    }
    else if (randomLowercase) {
    choices = abc;
    }
    else if (RandomUppercase) {
    choices = ABC.concat(abc2);
    }

    let password = [];

    for (let i = 0; i < input; i++) {
    let pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
    }
  // makes the array in to a string
    let arrayToString = password.join("");
    UserInput(arrayToString);
    return arrayToString;
}

function UserInput(password) {
    document.getElementById("password").textContent = password;

}