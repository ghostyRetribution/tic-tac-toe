const players = [{
	name: 'John',
	mark: 'X',
	position: []
},
{
	name: 'Pork',
	mark: 'O',
	position: []
}];

const gameboard = [];

const winConditions = [
	[0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
	[0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
	[0, 4, 8], [2, 4, 6] // diagonal
];

let currentPlayer = players[0]; 
const container = document.querySelector('main');
for(let i = 0; i < 9; i++) {
	const box = document.createElement('div');
	box.className = 'boxes';
	box.dataset.id = i;
	box.addEventListener('click', function() {
		if (this.textContent !== '' || document.getElementById('status-message').textContent.includes('won')) return;
		const index = Number(this.dataset.id);
    	this.textContent = currentPlayer.mark;
		currentPlayer.position.push(index);
    	gameboard.push(currentPlayer.mark);

    	if (checkWin()) {
           	document.getElementById('status-message').textContent = `${currentPlayer.name} has won!`;
    	 } else if (gameboard.length >= 9) {
        	document.getElementById('status-message').textContent = `game finished!`;
    	 } else {
        	currentPlayer = (currentPlayer === players[0]) ? players[1] : players[0];
        	updateStatusMessage();
    	}
	});
	container.appendChild(box);
}

function updateStatusMessage() {
	document.getElementById('status-message')
		.textContent = `${currentPlayer.name}'s turn`;
}

function checkWin() {
	return winConditions.some(condition => {
    	return condition.every(index => currentPlayer.position.includes(index));
	});
}

updateStatusMessage();