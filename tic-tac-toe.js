const players = [{
	name: 'John',
	mark: 'X'
},
{
	name: 'Pork',
	mark: 'O'
}];

const gameboard = [];
let currentPlayer = players[0]; 

function main() {
	const cells = document.querySelectorAll('.cells');
	cells.forEach(cell => {
		cell.addEventListener('click', () => {
			cell.style.fontSize = '12rem';
			cell.textContent = currentPlayer.mark;
			gameboard.push(currentPlayer.mark);
			const markIndex = gameboard.length - 1;
			const currentMark = gameboard[markIndex];
			if(currentMark === 'X') {
				currentPlayer = players[1];
			} else if (currentMark === 'O') {
				currentPlayer = players[0];
			}
		});
	});
}
main();