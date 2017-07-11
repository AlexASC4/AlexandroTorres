//set this to whatever choice player makes
var playerChoice = "rock"
//computer's random choice
var Choice = ["rock","paper","scissors"];
var compChoice = choices[Math.floor(Math.random()*3)];
if (playerChoice == compChoice){
    console.log("Tie")
}
 else if (compChoice = "Paper"){
     console.log("You loose")
 }
  else if (compChoice = "Sciccors"){
      console.log("you win")
  }
  