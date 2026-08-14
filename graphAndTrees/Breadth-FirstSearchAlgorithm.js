function genParentheses(pairs) {
  if (!Number.isInteger(pairs)) {
    return 'The number of pairs should be an integer';
  }
  if (pairs < 1) {
    return 'The number of pairs should be at least 1';
  }
  // Initialize a queue with an empty string and counters for open and close parentheses
  let queue = [['', 0, 0]];
  let result = [];
  // Loop until the queue is empty
  while (queue.length > 0) {
    // Dequeue the first element from the queue and destructure it into current string, opens used, and closes used
    let [current, opensUsed, closesUsed] = queue.shift();
    // If the current string has reached the maximum length (2 * pairs), add it to the result array
    if (current.length === 2 * pairs) {
      result.push(current);
    } else {
        // If the number of opens used is less than the number of pairs, enqueue a new string with an open parenthesis added and increment the opens used counter
      if (opensUsed < pairs) {
        queue.push([current + '(', opensUsed + 1, closesUsed]);
      }
      // If the number of closes used is less than the number of opens used, enqueue a new string with a close parenthesis added and increment the closes used counter
      if (closesUsed < opensUsed) {
        queue.push([current + ')', opensUsed, closesUsed + 1]);
      }
    }
  }
  return result;
}

console.log(genParentheses(2));
console.log(genParentheses(3));
