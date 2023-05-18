document.addEventListener("DOMContentLoaded", () => {
    const board = document.querySelector(".board");
    const cells = document.querySelectorAll(".cell");
    const resetButton = document.querySelector(".reset-button");
    let currentPlayer = "X";
    let gameOver = false;
  
    cells.forEach(cell => cell.addEventListener("click", handleCellClick));
    resetButton.addEventListener("click", resetGame);
  
    function handleCellClick(event) {
      const cell = event.target;
      if (cell.textContent !== "" || gameOver) return;
      cell.textContent = currentPlayer;
      checkWin();
      togglePlayer();
    }
  
    function togglePlayer() {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  
    function checkWin() {
      const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
      ];
  
      for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (
          cells[a].textContent === currentPlayer &&
          cells[b].textContent === currentPlayer &&
          cells[c].textContent === currentPlayer
        ) {
          gameOver = true;
          highlightCells([a, b, c]);
          alert(`Player ${currentPlayer} wins!`);
          break;
        }
      }
    }
  
    function highlightCells(cellsToHighlight) {
      for (let cellIndex of cellsToHighlight) {
        cells[cellIndex].style.backgroundColor = "yellow";
      }
    }
  
    function resetGame() {
      cells.forEach(cell => {
        cell.textContent = "";
        cell.style.backgroundColor = "";
      });
      currentPlayer = "X";
      gameOver = false;
    }
  });
  