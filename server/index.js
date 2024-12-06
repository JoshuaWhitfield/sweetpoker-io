const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const PokerEngine = require('./poker-engine/Game'); // Assuming the provided JS poker logic

const app = express();
const server = http.createServer(app);
const io = new Server(server);

let pokerGame = new PokerEngine();

// Socket.IO for real-time communication
io.on('connection', (socket) => {
  console.log('Player connected:', socket.id);

  // On player joining the game
  socket.on('joinTable', (playerData) => {
    pokerGame.addPlayer(playerData);
    io.emit('updatePlayers', pokerGame.getPlayers());
  });

  // Start new round when two or more players are at the table
  if (pokerGame.players.length >= 2) {
    startNewHand();
  }

  // Handle betting actions
  socket.on('placeBet', (betData) => {
    pokerGame.placeBet(betData);
    io.emit('updateBets', pokerGame.getCurrentBets());
    
    io.emit('updateChips', {
        playerId,
        chips: player.chips,
        currentBets: pokerGame.getCurrentBets()
      });
  });


  // End the hand
  socket.on('endHand', () => {
    pokerGame.endHand();
    io.emit('endHand', pokerGame.getHandResults());
  });

  socket.on('disconnect', () => {
    console.log('Player disconnected:', socket.id);
  });
});

// Start new hand function
function startNewHand() {
  pokerGame.startNewHand();
  io.emit('newHand', pokerGame.getCommunityCards());
  io.emit('updatePlayers', pokerGame.getPlayers());
}

// Handle the different stages of the game
function handleRounds() {
  // Preflop
  io.emit('startPreflop', pokerGame.dealPreflop());

  // Flop
  setTimeout(() => {
    io.emit('startFlop', pokerGame.dealFlop());
  }, 15000); // Add delays between rounds as needed

  // Turn
  setTimeout(() => {
    io.emit('startTurn', pokerGame.dealTurn());
  }, 30000);

  // River
  setTimeout(() => {
    io.emit('startRiver', pokerGame.dealRiver());
  }, 45000);
}

server.listen(5000, () => {
  console.log('Server listening on port 5000');
});
