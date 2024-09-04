///// PART 1: DETECT BUTTONS PRESSED
// If a buttons is pressed:
// 1. Get the HTML of that button;
// 2. Parse that HTML into the makeSound() function


// Get how many buttons/drums we have:
var numberOfButtons = document.querySelectorAll(".drum").length;


for (var i =0; i < numberOfButtons; i++) {
    // For each button's value(0:6), assign appropriate sound:
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // Know which button was pressed using "this"":

    var buttonInnerHTML = this.innerHTML;

    // the HTML of the button that got pressed
    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
    })
}


///// PART 2: DETECT KEYBOARD PRESSED
// If a keyboard key is pressed, instead of a button:
// 1. Send the "key" property of that event(keyboard pressed), which is HTML,
// to the function makeSound()
// 2. Remember i.e. key:'g', which is a letter that could generate a specific sound

document.addEventListener("keydown", function(e) {
    makeSound(e.key);
    buttonAnimation(e.key);
})

// Create a brand new function that :
function makeSound (key) {
            // Change the sound based on the keyboard key used from "this"
            switch (key) {
                // If it is w, play the right sound
                case "w":
                    var tom1 = new Audio("sounds/tom-1.mp3");
                    tom1.play();
                    break;
    
                case "a":
                    var tom2 = new Audio("sounds/tom-2.mp3");
                    tom2.play();
                    break;
    
                case "s":
                    var tom3 = new Audio("sounds/tom-3.mp3");
                    tom3.play();
                    break;
                
                case "d":
                    var tom4 = new Audio("sounds/tom-4.mp3");
                    tom4.play();
                    break;
    
                case "j":
                    var snare = new Audio("sounds/snare.mp3");
                    snare.play();
                    break;
    
                case "k":
                    var crash = new Audio("sounds/crash.mp3");
                    crash.play();
                    break;  
    
                case "l":
                    var kickBass = new Audio("sounds/kick-bass.mp3");
                    kickBass.play();
                    break;
    
                default: console.log(key);
                    break;
            }
}


function buttonAnimation(currentKey) {
   var activeButton =  document.querySelector("." + currentKey);
   activeButton.classList.add("pressed");

   setTimeout(function() {
    activeButton.classList.remove("pressed");

   }, 100);
}