document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll('.square');
    const message = document.getElementById('message');
    const resetButton = document.getElementById('resetButton');
    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;

    const checkWin = () => {
        const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let condition of winConditions) {
            const [a, b, c] = condition;
            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                gameActive = false;
                message.textContent = `${currentPlayer} wins!`;
                return;
            }
        }

        if (!gameBoard.includes('')) {
            gameActive = false;
            message.textContent = "It's a draw!";
        }
    };

    const handleSquareClick = (index) => {
        if (gameBoard[index] || !gameActive) return;
        
        gameBoard[index] = currentPlayer;
        squares[index].textContent = currentPlayer;
        checkWin();

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    };

    const resetGame = () => {
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        gameActive = true;
        currentPlayer = 'X';
        message.textContent = '';
        squares.forEach(square => square.textContent = '');
    };

    squares.forEach((square, index) => {
        square.addEventListener('click', () => handleSquareClick(index));
    });

    resetButton.addEventListener('click', resetGame);
});
