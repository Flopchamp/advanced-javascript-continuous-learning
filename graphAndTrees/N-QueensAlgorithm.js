function dfsNQueens(n){
    // check if n is less than 1, return an empty array
  if(n < 1){
    return []
  }
  // Initialize a stack with an empty array to represent the current board configuration and an empty array to store the solutions
let stack =[[]];
 let solutions =[];
// Loop until the stack is empty
 while(stack.length > 0){
    // Pop the last board configuration from the stack and check if it has reached the maximum number of queens (n)
  let currentBoard = stack.pop()
  // If the current board configuration has reached the maximum number of queens, add it to the solutions array and continue to the next iteration
  if(currentBoard.length ===n){
    solutions.push(currentBoard);
    continue;
  }
  // Loop through all columns in the current row (currentBoard.length) to check if placing a queen in that column is safe
  for (let c =n -1; c >= 0 ;c--){
    let isSafe = true;
    // Loop through all previously placed queens in the current board configuration to check if placing a queen in column c of the current row is safe (i.e., not attacked by any previously placed queens)
    for (let r =0; r <currentBoard.length;r++){
        // Calculate the row and column differences between the current position and the previously placed queens to check for attacks
       let rowDiff = currentBoard.length - r;
        let colDiff = Math.abs(c - currentBoard[r]);
        // If the current position is in the same column or diagonal as any previously placed queen, mark it as unsafe and break out of the loop
    if(currentBoard[r] === c || rowDiff === colDiff){
          isSafe = false;
          break;  
      }
    }
    // If the current position is safe, push a new board configuration with the queen placed in column c of the current row onto the stack for further exploration
    if(isSafe){
      stack.push([...currentBoard, c])
    }
  }
 }
 return solutions
}
console.log(dfsNQueens(4));