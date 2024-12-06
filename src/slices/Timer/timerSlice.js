let turnTimers = {}; // Object to store timers for each player

const startTurnTimer = (playerId) => {
  // Check if playerId is null
  if (playerId === null) {
    console.log("No active player. Skipping turn timer.");

    // Optionally handle logic if no active player exists
    // For example, end the hand or skip the current action
    endHand(); // End hand or perform an alternative action
    return;
  }

  // Clear any previous timer for this player if it exists
  if (turnTimers[playerId]) {
    clearTimeout(turnTimers[playerId]);
  }

  // Set a new timer for the current player (e.g., 15 seconds)
  turnTimers[playerId] = setTimeout(() => {
    // If the timer runs out, the player automatically folds or checks
    autoFold(playerId);
  }, 15000); // 15000 milliseconds = 15 seconds

  // Notify all players whose turn it is
  io.emit("turnStarted", { playerId, duration: 15000 });
};
