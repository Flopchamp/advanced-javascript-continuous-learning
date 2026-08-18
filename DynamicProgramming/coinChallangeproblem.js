function minCoins(amount, coins) {
  // Create dp array from 0 to amount, filled with Infinity
  const dp = new Array(amount + 1).fill(Infinity);

  // Base case: 0 coins needed to make amount 0
  dp[0] = 0;

  // Build up from 1 to target amount
  for (let i = 1; i <= amount; i++) {
    // Try each coin denomination
    for (let coin of coins) {
      // Only use coin if it is not larger than current amount
      if (coin <= i) {
        // Choose the minimum: current value OR solution for remaining amount + 1 coin
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  // Return result if possible, -1 if impossible (infinity)
  return dp[amount] === Infinity ? -1 : dp[amount];
}