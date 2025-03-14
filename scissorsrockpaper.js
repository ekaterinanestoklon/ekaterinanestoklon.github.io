const scissors = 'scissors';
const rock = 'rock';
const paper = 'paper';
const lizard = 'lizard';
const spok = 'spock';

function playGame(playerChoice) {
    const choices = [scissors, rock, paper];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if (playerChoice === computerChoice) {
        result = "It's a draw! Both chose " + playerChoice
    } else if (
        (playerChoice === scissors && computerChoice === paper) ||
        (playerChoice === paper && computerChoice === rock) ||
        (playerChoice === rock && computerChoice === scissors)
    ) {
        result = "You win! " + playerChoice + " beats " + computerChoice
    } else {
        result = "You lose! " + computerChoice + " beats " + playerChoice
    }

  document.getElementById("result").innerHTML = "<h3>" + "Computer chose " + computerChoice +"." +"</h3>" + "<br>" + "<p class='text'>"+"The result is: " + result + "</p>";
}