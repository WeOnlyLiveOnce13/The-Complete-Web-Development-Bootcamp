// Extract the player's and their initial names 
let player1 = "Player1";
let player2 = "Player2";

// Function to edit names (IF requested)
function editNames() {
    // Request names from User
    player1 = prompt("Change Player 1 name");
    player2 = prompt("Change Player 2 name");

    // Validate inputed values
    if (player1.length < 1 || player2.length <1) {
        alert("Please provide a longer/valid name");
        return;
    }

    // Assign inputed and validated values to player
    document.querySelector("p.player1").innerHTML = player1;
    document.querySelector("p.player2").innerHTML = player2;
}

// Main function
function letsplay() {

    // Get images from HTML
    let img1 = document.querySelector(".img1");
    let img2 = document.querySelector(".img2");

    // Animation prior to result
    img1.setAttribute("src","./images/diceroll.gif");
    img2.setAttribute("src","./images/diceroll.gif"); 

    let result = document.querySelector("h1");
    result.innerHTML = "🤐🤞..."


    // Little time out before result
    setTimeout(function() {
        // Generate random numbers
        function generateRandom(){
            var random1 = Math.floor(Math.random()*6) + 1;
            var random2 = Math.floor(Math.random()*6) + 1;
    
         return [random1, random2];
        }
        // Create an array containing the random numbers
        let randomNumbers = generateRandom();

        // Assign generated random numbers to specific images
        img1.setAttribute("src","./images/dice"+randomNumbers[0]+".png");
        img2.setAttribute("src","./images/dice"+randomNumbers[1]+".png");

        // Output result
        if (randomNumbers[0] > randomNumbers[1]) {
            result.innerHTML = player1+" wins!💥";
        } else if (randomNumbers[0] < randomNumbers[1]) {
            result.innerHTML = player2+" wins!💥";
        } else {
            result.innerHTML = "It is a draw 😆";
        }
    }, 2500);
}