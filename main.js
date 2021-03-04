let points = 0;
let things = ["rock", "paper", "scissors", "lizard", "spock"];
let player, computer, index, temp;

while (true) {
	// player input
	userInput();
	// computer choose random thing
	index = Math.ceil(Math.random() * things.length) - 1; 
	computer = things[index];	
	
	temp = `Computer played as ${computer}.\n`;	
	
	// consider the outcome of game
	if (checkWinner()) 
	{
		points--;
		temp += "LOSS";
	}		
	else if ( player != computer)	
	{
		points++;		
		temp += "WIN";
	}
	else
		temp = "TIE";	
	// output result
	alert(temp); 
	// question to repeat the game
	if (!confirm("Continue the game?"))
		break;	
}
// print the number of points
if (points > 0)
	alert(`You are won ${points} points.`);
else if (points == 0)
	alert("You haven't won anything.");
else
	alert(`You have a doubt in size of ${points} points.`);
/* RULES
	- Scissors beats Paper
	- Paper beats Rock
	- Rock beats Lizard 
	- Lizard beats Spock 
	- Spock beats Scissors
	- Scissors beats Lizard 
	- Paper beats Spock 
	- Rock beats Scissors
	- Lizard beats Paper
	- Spock beats Rock
*/
// find the winner
function checkWinner() {
	if (player == things[0] && computer == things[1] ||
	 player == things[1] && computer == things[2] || 
	 player == things[2] && computer == things[0] ||
	 player == things[3] && computer == things[0] ||
	 player == things[4] && computer == things[3] ||
	 player == things[2] && computer == things[4] ||
	 player == things[3] && computer == things[2] ||
	 player == things[4] && computer == things[0] ||
	 player == things[1] && computer == things[3] ||
	 player == things[0] && computer == things[4]	 
	) 
		return false; // computer
	else if (player != computer)
		return true; // player
	return false; // tie
}
// ask user to choose play object
function userInput(){
	player = prompt("Which thing do you want to use: Rock or Paper, Scissors or Lizard, or Spock?").toLowerCase();
	while (!things.includes(player))
		player = prompt("Not match with existing objects. Which thing do you want to use: Rock or Paper, Scissors or Lizard, or Spock?").toLowerCase();
}